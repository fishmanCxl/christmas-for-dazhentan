import * as THREE from 'three';

export function sampleTextPixels(image, step = 3, maxPoints = 4800) {
  const samples = [];
  for (let y = 0; y < image.height; y += step) {
    for (let x = 0; x < image.width; x += step) {
      const alpha = image.data[(y * image.width + x) * 4 + 3];
      if (alpha >= 96) samples.push({ x: x + 0.5, y: y + 0.5, alpha: alpha / 255 });
    }
  }
  if (samples.length <= maxPoints) return samples;
  return Array.from({ length: maxPoints }, (_, index) => samples[Math.floor(index * samples.length / maxPoints)]);
}

export function createParticleText(element, viewport) {
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uAge: { value: 0 },
      uTime: { value: 0 },
      uDpr: { value: 1 },
      uViewport: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(-1000, -1000) },
    },
    vertexShader: `
      attribute vec2 aOrigin;
      attribute float aSeed;
      attribute float aAlpha;
      uniform float uAge;
      uniform float uTime;
      uniform float uDpr;
      uniform vec2 uViewport;
      uniform vec2 uPointer;
      varying float vAlpha;
      varying float vSeed;
      void main() {
        float age = max(0.0, uAge - aSeed * 0.65);
        float progress = smoothstep(0.0, 2.1, age);
        vec2 point = mix(aOrigin, position.xy, progress);
        point += (1.0 - progress) * vec2(sin(age * 4.0 + aSeed * 28.0) * 22.0, cos(age * 3.0 + aSeed * 18.0) * 15.0);
        point += vec2(sin(uTime * 1.1 + aSeed * 32.0), cos(uTime * 0.9 + aSeed * 24.0)) * progress * 0.12;
        vec2 offset = point - uPointer;
        float influence = max(0.0, 1.0 - length(offset) / 58.0);
        point += normalize(offset + vec2(0.01)) * influence * influence * 12.0 * progress;
        gl_Position = vec4(point.x / uViewport.x * 2.0 - 1.0, 1.0 - point.y / uViewport.y * 2.0, 0.0, 1.0);
        float sparkle = 0.92 + 0.18 * sin(uTime * 2.2 + aSeed * 65.0);
        gl_PointSize = (2.1 + aSeed * 0.55 + step(0.985, aSeed) * sparkle) * uDpr;
        vAlpha = smoothstep(0.0, 0.25, age) * sparkle * aAlpha;
        vSeed = aSeed;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      varying float vSeed;
      void main() {
        vec2 point = gl_PointCoord - 0.5;
        float radius = length(point);
        float core = 1.0 - smoothstep(0.22, 0.48, radius);
        float glint = exp(-abs(point.x) * 45.0 - abs(point.y) * 4.0) + exp(-abs(point.y) * 45.0 - abs(point.x) * 4.0);
        float alpha = core + step(0.985, vSeed) * glint * 0.14;
        if (alpha < 0.01) discard;
        vec3 color = mix(vec3(1.0, 0.84, 0.52), vec3(1.0, 0.98, 0.88), 0.4 + vSeed * 0.6);
        gl_FragColor = vec4(color, alpha * vAlpha);
      }
    `,
  });
  const points = new THREE.Points(new THREE.BufferGeometry(), material);
  points.frustumCulled = false;
  points.renderOrder = 100;
  points.visible = false;
  let active = false;
  let fontReady = false;
  let generation = 0;
  let startTime = 0;
  let currentTime = 0;

  function prepare() {
    const bounds = element.getBoundingClientRect();
    const viewportBounds = viewport.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return false;
    const style = getComputedStyle(element);
    const fontSize = parseFloat(style.fontSize);
    const lineHeight = parseFloat(style.lineHeight);
    const rasterScale = 2;
    const padding = 12;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    const lines = element.innerText.split('\n').filter(Boolean);
    const font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    context.font = font;
    context.letterSpacing = style.letterSpacing;
    const textWidth = Math.max(...lines.map(line => context.measureText(line).width));
    canvas.width = Math.ceil((textWidth + padding * 2) * rasterScale);
    canvas.height = Math.ceil((bounds.height + padding * 2) * rasterScale);
    context.scale(rasterScale, rasterScale);
    context.font = font;
    context.letterSpacing = style.letterSpacing;
    context.textAlign = 'center';
    context.fillStyle = '#fff';
    const metrics = context.measureText('Merry');
    const ascent = metrics.fontBoundingBoxAscent ?? fontSize * 0.8;
    const descent = metrics.fontBoundingBoxDescent ?? fontSize * 0.2;
    const baseline = padding + ascent + (lineHeight - ascent - descent) / 2;
    lines.forEach((line, index) => context.fillText(line, canvas.width / rasterScale / 2, baseline + index * lineHeight));
    const samples = sampleTextPixels(context.getImageData(0, 0, canvas.width, canvas.height));
    if (!samples.length) return false;
    const positions = new Float32Array(samples.length * 3);
    const origins = new Float32Array(samples.length * 2);
    const seeds = new Float32Array(samples.length);
    const alphas = new Float32Array(samples.length);
    const left = bounds.left - viewportBounds.left + bounds.width / 2 - canvas.width / rasterScale / 2;
    const top = bounds.top - viewportBounds.top - padding;
    samples.forEach((sample, index) => {
      positions.set([left + sample.x / rasterScale, top + sample.y / rasterScale, 0], index * 3);
      origins.set([(Math.random() - 0.5) * viewportBounds.width * 1.2 + viewportBounds.width / 2, bounds.top - viewportBounds.top + (Math.random() - 0.3) * bounds.height * 2], index * 2);
      seeds[index] = Math.random();
      alphas[index] = sample.alpha;
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aOrigin', new THREE.BufferAttribute(origins, 2));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    points.geometry.dispose();
    points.geometry = geometry;
    points.visible = true;
    element.classList.add('is-particle-text');
    element.dataset.particleCount = String(samples.length);
    return true;
  }

  async function show() {
    active = true;
    const ticket = ++generation;
    await document.fonts.ready;
    if (!active || generation !== ticket) return;
    fontReady = true;
    if (prepare()) startTime = currentTime;
  }

  function hide() {
    active = false;
    generation++;
    points.visible = false;
    element.classList.remove('is-particle-text');
  }

  function resize(width, height, dpr) {
    material.uniforms.uViewport.value.set(width, height);
    material.uniforms.uDpr.value = dpr;
    if (active && fontReady) prepare();
  }

  function update(time) {
    currentTime = time;
    if (!active) return;
    material.uniforms.uTime.value = time;
    material.uniforms.uAge.value = Math.max(0, time - startTime);
  }

  function dispose() {
    hide();
    points.removeFromParent();
    points.geometry.dispose();
    material.dispose();
  }

  return {
    points,
    show,
    hide,
    resize,
    update,
    dispose,
    setPointer(x, y) {
      const size = material.uniforms.uViewport.value;
      material.uniforms.uPointer.value.set((x + 1) * size.x / 2, (1 - y) * size.y / 2);
    },
  };
}
