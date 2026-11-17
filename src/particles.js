import * as THREE from 'three';

const softPoint = `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float halo = exp(-radius * radius * 28.0);
    float core = exp(-radius * radius * 160.0);
    gl_FragColor = vec4(vColor * (1.0 + core), (halo * 0.55 + core * 0.45) * vAlpha);
  }
`;

export function createSnow(count, width = 14, height = 11, depth = 9) {
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for (let index = 0; index < count; index++) {
    positions[index * 3] = (Math.random() - 0.5) * width;
    positions[index * 3 + 1] = Math.random() * height;
    positions[index * 3 + 2] = (Math.random() - 0.5) * depth;
    sizes[index] = 0.4 + Math.random() * 1.5;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uHeight: { value: height },
      uDpr: { value: 1 },
      uPointer: { value: new THREE.Vector2(100, 100) },
    },
    vertexShader: `
      attribute float aSize;
      uniform float uTime;
      uniform float uHeight;
      uniform float uDpr;
      uniform vec2 uPointer;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec3 point = position;
        point.y = mod(position.y - uTime * (0.14 + aSize * 0.10) + uHeight * 20.0, uHeight) - 1.8;
        point.x += sin(uTime * 0.3 + position.y * 2.0) * 0.25;
        vec2 offset = point.xy - uPointer;
        float distanceToPointer = length(offset);
        point.xy += normalize(offset + vec2(0.001)) * max(0.0, 1.0 - distanceToPointer) * 0.5;
        vec4 view = modelViewMatrix * vec4(point, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = clamp(aSize * 27.0 * uDpr / max(0.5, -view.z), 1.0, 18.0 * uDpr);
        vColor = vec3(0.82, 0.9, 0.9);
        vAlpha = 0.36 + aSize * 0.2;
      }
    `,
    fragmentShader: softPoint,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  return { points, uniforms: material.uniforms };
}

export function createBursts(capacity = 2600) {
  const positions = new Float32Array(capacity * 3);
  const velocities = new Float32Array(capacity * 3);
  const colors = new Float32Array(capacity * 3);
  const starts = new Float32Array(capacity).fill(-100);
  const lifetimes = new Float32Array(capacity).fill(1);
  const sizes = new Float32Array(capacity);
  const geometry = new THREE.BufferGeometry();
  const attributes = {
    position: new THREE.BufferAttribute(positions, 3),
    aVelocity: new THREE.BufferAttribute(velocities, 3),
    aColor: new THREE.BufferAttribute(colors, 3),
    aStart: new THREE.BufferAttribute(starts, 1),
    aLife: new THREE.BufferAttribute(lifetimes, 1),
    aSize: new THREE.BufferAttribute(sizes, 1),
  };
  Object.entries(attributes).forEach(([name, attribute]) => {
    attribute.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute(name, attribute);
  });
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uDpr: { value: 1 } },
    vertexShader: `
      attribute vec3 aVelocity;
      attribute vec3 aColor;
      attribute float aStart;
      attribute float aLife;
      attribute float aSize;
      uniform float uTime;
      uniform float uDpr;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float age = max(0.0, uTime - aStart);
        float progress = age / aLife;
        vec3 point = position + aVelocity * (1.0 - exp(-age * 0.7)) / 0.7;
        point.y -= age * age * 0.16;
        vec4 view = modelViewMatrix * vec4(point, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = clamp(aSize * 55.0 * uDpr / max(0.5, -view.z), 0.0, 22.0 * uDpr);
        vAlpha = pow(max(0.0, 1.0 - progress), 1.3) * step(0.0, uTime - aStart);
        vColor = aColor;
      }
    `,
    fragmentShader: softPoint,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  let cursor = 0;

  function burst(origin, color = '#f6cd82', count = 240, shape = 'sphere') {
    const tint = new THREE.Color(color);
    for (let index = 0; index < count; index++) {
      const slot = cursor++ % capacity;
      const ray = Math.floor(index / 7);
      const angle = shape === 'firework' ? ray / Math.ceil(count / 7) * Math.PI * 2 : Math.random() * Math.PI * 2;
      const speed = shape === 'firework' ? 1.7 * (0.62 + index % 7 * 0.065) : 0.4 + Math.random() * 1.4;
      let x = Math.cos(angle);
      let y = Math.sin(angle);
      let z = (Math.random() - 0.5) * (shape === 'firework' ? 0.12 : 1.3);
      if (shape === 'star') {
        const edge = Math.floor(Math.random() * 10);
        const phase = Math.random();
        const angleA = edge * Math.PI / 5 + Math.PI / 2;
        const angleB = (edge + 1) * Math.PI / 5 + Math.PI / 2;
        const radiusA = edge % 2 ? 0.42 : 1;
        const radiusB = edge % 2 ? 1 : 0.42;
        x = Math.cos(angleA) * radiusA * (1 - phase) + Math.cos(angleB) * radiusB * phase;
        y = Math.sin(angleA) * radiusA * (1 - phase) + Math.sin(angleB) * radiusB * phase;
        z *= 0.2;
      }
      positions.set(origin, slot * 3);
      const velocityScale = shape === 'star' ? 1.45 : speed;
      velocities.set([x * velocityScale, y * velocityScale, z * velocityScale], slot * 3);
      colors.set([tint.r, tint.g, tint.b], slot * 3);
      starts[slot] = material.uniforms.uTime.value;
      lifetimes[slot] = 2.3 + Math.random() * 1.5;
      sizes[slot] = shape === 'firework' ? 0.7 + index % 7 * 0.13 : 0.45 + Math.random() * 0.9;
    }
    Object.values(attributes).forEach((attribute) => { attribute.needsUpdate = true; });
  }

  function reset() {
    starts.fill(-100);
    attributes.aStart.needsUpdate = true;
    cursor = 0;
  }

  return { points, uniforms: material.uniforms, burst, reset };
}
