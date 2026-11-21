import * as THREE from 'three';

export function createBursts(capacity = 7200) {
  const geometry = new THREE.BufferGeometry();
  const attributes = {};
  for (const [name, size] of Object.entries({
    position: 3, aVelocity: 3, aColor: 3, aStart: 1, aLife: 1,
    aSize: 1, aDrag: 1, aGravity: 1, aTrail: 1, aKind: 1, aRadius: 1,
  })) {
    const attribute = new THREE.BufferAttribute(new Float32Array(capacity * size), size);
    attribute.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute(name, attribute);
    attributes[name] = attribute;
  }
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
      attribute float aDrag;
      attribute float aGravity;
      attribute float aTrail;
      // Kinds: 0 spark, 1 tail, 2 flash, 3 glitter, 4 rocket.
      attribute float aKind;
      attribute float aRadius;
      uniform float uTime;
      uniform float uDpr;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vKind;
      void main() {
        float age = uTime - aStart - aTrail;
        vColor = aColor;
        vKind = aKind;
        vAlpha = 0.0;
        gl_PointSize = 1.0;
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        if (aLife <= 0.0 || age < 0.0 || age >= aLife) return;
        float progress = age / aLife;
        float travel = (1.0 - exp(-age * aDrag)) / max(0.001, aDrag);
        vec3 offset = aVelocity * travel;
        offset.y -= age * age * aGravity;
        if (aRadius > 0.0) offset *= min(1.0, aRadius / max(0.001, length(offset)));
        vec4 view = modelViewMatrix * vec4(position + offset, 1.0);
        gl_Position = projectionMatrix * view;
        float scale = aKind == 2.0 ? 0.65 + progress * 1.8 : 1.0;
        gl_PointSize = clamp(aSize * scale * 8.0 * uDpr / max(0.5, -view.z), 1.0, 100.0 * uDpr);
        vAlpha = pow(1.0 - progress, 0.7);
        if (aKind == 1.0) vAlpha *= 0.75 * exp(-aTrail * 3.0);
        if (aKind == 2.0) vAlpha = pow(1.0 - progress, 2.4) * 0.7;
        if (aKind == 3.0) vAlpha *= 0.55 + 0.45 * sin(age * 35.0 + position.x * 20.0);
        if (aKind == 4.0) vAlpha = smoothstep(0.0, 0.04, age) * pow(1.0 - progress, 0.15);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      varying float vKind;
      void main() {
        vec2 point = gl_PointCoord - 0.5;
        float radius2 = dot(point, point);
        float halo = exp(-radius2 * (vKind == 2.0 ? 22.0 : 42.0));
        float core = vKind == 2.0 ? exp(-radius2 * 170.0) : 1.0 - smoothstep(0.055, 0.18, sqrt(radius2));
        float alpha = (halo * 0.28 + core) * vAlpha;
        if (alpha < 0.003) discard;
        gl_FragColor = vec4(vColor * (1.0 + core * 1.8), alpha);
      }
    `,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  const ends = new Float64Array(capacity).fill(-Infinity);
  const reserved = new Int32Array(capacity);
  const tint = new THREE.Color();
  let cursor = 0;
  let lowQuality = false;

  // Reserve the entire event, including particles whose start time is still in the future.
  function reserve(count) {
    if (count < 1 || count > capacity) return false;
    let found = 0;
    for (let checked = 0; checked < capacity && found < count; checked++) {
      const slot = (cursor + checked) % capacity;
      if (ends[slot] <= material.uniforms.uTime.value) reserved[found++] = slot;
    }
    if (found !== count) return false;
    cursor = (reserved[count - 1] + 1) % capacity;
    return true;
  }

  function write(slot, position, velocity, {
    start, life, size, drag, gravity, trail = 0, kind = 0, radius = 0, heat = 0,
  }) {
    const offset = slot * 3;
    attributes.position.array.set(position, offset);
    attributes.aVelocity.array.set(velocity, offset);
    const color = attributes.aColor.array;
    color[offset] = tint.r + (1 - tint.r) * heat;
    color[offset + 1] = tint.g + (1 - tint.g) * heat;
    color[offset + 2] = tint.b + (1 - tint.b) * heat;
    attributes.aStart.array[slot] = start;
    attributes.aLife.array[slot] = life;
    attributes.aSize.array[slot] = size;
    attributes.aDrag.array[slot] = drag;
    attributes.aGravity.array[slot] = gravity;
    attributes.aTrail.array[slot] = trail;
    attributes.aKind.array[slot] = kind;
    attributes.aRadius.array[slot] = radius;
    ends[slot] = start + life + trail;
  }

  function upload() {
    for (const attribute of Object.values(attributes)) attribute.needsUpdate = true;
  }

  function burst(origin, color = '#f6cd82', count = 240, shape = 'sphere') {
    count = Math.floor(count * (lowQuality ? 0.6 : 1));
    if (!reserve(count)) return false;
    tint.set(color);
    const now = material.uniforms.uTime.value;
    for (let index = 0; index < count; index++) {
      const angle = shape === 'firework' ? index / count * Math.PI * 2 : Math.random() * Math.PI * 2;
      let radius = 1;
      if (shape === 'star') radius = 0.42 + 0.58 * Math.pow(Math.abs(Math.cos((angle - Math.PI / 2) * 2.5)), 5);
      const speed = (0.7 + Math.random() * 1.1) * radius;
      write(reserved[index], origin,
        [Math.cos(angle) * speed, Math.sin(angle) * speed, (Math.random() - 0.5) * 0.7], {
          start: now, life: 2.25 + Math.random() * 0.65, size: 6 + Math.random() * 5,
          drag: 0.8, gravity: 0.16, heat: 0.15,
        });
    }
    upload();
    return true;
  }

  function launch(target, color = '#f6cd82', radius = 1, shape = 'chrysanthemum') {
    const rays = lowQuality ? 52 : 88;
    const samples = lowQuality ? 4 : 6;
    const innerRays = lowQuality ? 14 : 28;
    const innerSamples = lowQuality ? 2 : 3;
    const glitter = lowQuality ? 32 : 88;
    const rocket = lowQuality ? 10 : 18;
    const flashes = lowQuality ? 2 : 3;
    if (!reserve(rays * samples + innerRays * innerSamples + glitter + rocket + flashes)) return false;
    tint.set(color);
    const now = material.uniforms.uTime.value;
    const ascent = 0.56 + Math.random() * 0.1;
    const explosion = now + ascent;
    const startX = target[0] * 0.65;
    const startY = -0.55;
    const startZ = target[2] + 0.12;
    const travel = (1 - Math.exp(-ascent * 0.001)) / 0.001;
    let record = 0;
    for (let index = 0; index < rocket; index++) {
      write(reserved[record++], [startX, startY, startZ],
        [(target[0] - startX) / travel, (target[1] - startY) / travel, (target[2] - startZ) / travel], {
          start: now, life: ascent, size: index === 0 ? 14 : 8 * (1 - index / rocket * 0.6),
          drag: 0.001, gravity: 0, trail: index * (lowQuality ? 0.009 : 0.007),
          kind: index === 0 ? 4 : 1, heat: 0.7,
        });
    }
    for (let layer = 0; layer < 2; layer++) {
      const count = layer ? innerRays : rays;
      const trailSamples = layer ? innerSamples : samples;
      for (let ray = 0; ray < count; ray++) {
        const angle = ray / count * Math.PI * 2 + Math.random() * 0.025;
        let reach = radius * (layer ? 0.44 : 0.8 + Math.random() * 0.12);
        if (shape === 'star') reach *= 0.44 + 0.56 * Math.pow(Math.abs(Math.cos((angle - Math.PI / 2) * 2.5)), 5);
        const life = shape === 'willow' ? 3 + Math.random() * 0.55 : 2.35 + Math.random() * 0.6;
        const drag = shape === 'willow' ? 0.95 : 0.8;
        const speed = reach * drag / (1 - Math.exp(-life * drag));
        const gravity = radius * (shape === 'willow' ? 0.045 : 0.022);
        const z = (Math.random() - 0.5) * speed * 0.16;
        const size = layer ? 9 + Math.random() * 3 : 12 + Math.random() * 4;
        for (let sample = 0; sample < trailSamples; sample++) {
          write(reserved[record++], target, [Math.cos(angle) * speed, Math.sin(angle) * speed, z], {
            start: explosion + (layer ? 0.1 : 0), life,
            size: sample === 0 ? size : 8 * (1 - sample / trailSamples * 0.65),
            drag, gravity, trail: sample * 0.055, kind: sample === 0 ? 0 : 1,
            radius, heat: layer ? 0.6 : 0.15,
          });
        }
      }
    }
    for (let index = 0; index < glitter; index++) {
      const angle = Math.random() * Math.PI * 2;
      const reach = radius * (0.3 + Math.random() * 0.35);
      write(reserved[record++],
        [target[0] + Math.cos(angle) * reach, target[1] + Math.sin(angle) * reach, target[2]],
        [Math.cos(angle) * radius * 0.15, Math.sin(angle) * radius * 0.15, 0], {
          start: explosion + 0.5 + Math.random() * 0.4, life: 0.8 + Math.random() * 0.65,
          size: 4.5 + Math.random() * 3, drag: 1.2, gravity: radius * 0.035,
          kind: 3, radius: radius - reach, heat: 0.75,
        });
    }
    for (let index = 0; index < flashes; index++) {
      write(reserved[record++], target, [0, 0, 0], {
        start: explosion + index * 0.055, life: 0.16 + index * 0.06,
        size: 72 - index * 17, drag: 1, gravity: 0, kind: 2, heat: 0.85,
      });
    }
    upload();
    return true;
  }

  function reset() {
    ends.fill(-Infinity);
    attributes.aLife.array.fill(0);
    attributes.aLife.needsUpdate = true;
    cursor = 0;
  }

  return {
    points,
    uniforms: material.uniforms,
    burst,
    launch,
    setQuality(low) { lowQuality = low; },
    reset,
  };
}
