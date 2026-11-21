import * as THREE from 'three';

const softPoint = `
  uniform sampler2D uSnowflake;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vFlake;
  varying float vRotation;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float halo = exp(-radius * radius * 45.0);
    float core = exp(-radius * radius * 160.0);
    if (vFlake > 0.5) {
      float sine = sin(vRotation);
      float cosine = cos(vRotation);
      vec2 uv = mat2(cosine, -sine, sine, cosine) * point + 0.5;
      vec4 flake = texture2D(uSnowflake, uv);
      gl_FragColor = vec4(flake.rgb * vColor, flake.a * vAlpha);
    } else {
      gl_FragColor = vec4(vColor * (1.0 + core), (halo * 0.25 + core * 0.75) * vAlpha);
    }
  }
`;

export function createSnow(count, width = 14, height = 11, depth = 9, flakeTexture = null) {
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const flakes = new Float32Array(count);
  const seeds = new Float32Array(count);
  for (let index = 0; index < count; index++) {
    const foreground = Boolean(flakeTexture) && index % 12 === 0;
    positions[index * 3] = (Math.random() - 0.5) * width * (foreground ? 0.28 : 1);
    positions[index * 3 + 1] = Math.random() * height;
    positions[index * 3 + 2] = foreground ? depth * (0.34 + Math.random() * 0.22) : (Math.random() - 0.5) * depth;
    sizes[index] = 0.4 + Math.random() * 1.5;
    flakes[index] = foreground ? 1 : 0;
    seeds[index] = Math.random();
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aFlake', new THREE.BufferAttribute(flakes, 1));
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uHeight: { value: height },
      uDpr: { value: 1 },
      uPointer: { value: new THREE.Vector2(100, 100) },
      uSnowflake: { value: flakeTexture },
      uHasFlakes: { value: flakeTexture ? 1 : 0 },
    },
    vertexShader: `
      attribute float aSize;
      attribute float aFlake;
      attribute float aSeed;
      uniform float uTime;
      uniform float uHeight;
      uniform float uDpr;
      uniform vec2 uPointer;
      uniform float uHasFlakes;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFlake;
      varying float vRotation;
      void main() {
        vec3 point = position;
        point.y = mod(position.y - uTime * (0.14 + aSize * 0.10) + uHeight * 20.0, uHeight) - 1.8;
        point.x += sin(uTime * 0.3 + aSeed * 12.0 + position.y) * 0.25;
        vec2 offset = point.xy - uPointer;
        float distanceToPointer = length(offset);
        point.xy += normalize(offset + vec2(0.001)) * max(0.0, 1.0 - distanceToPointer) * 0.5;
        vec4 view = modelViewMatrix * vec4(point, 1.0);
        gl_Position = projectionMatrix * view;
        vFlake = aFlake * uHasFlakes;
        float distanceToCamera = max(0.5, -view.z);
        float smallSize = clamp(aSize * mix(20.0, 27.0, uHasFlakes) * uDpr / distanceToCamera, 1.0, 13.5 * uDpr);
        float largeSize = clamp((22.0 + aSize * 9.0) * 3.75 * uDpr / distanceToCamera, 12.0 * uDpr, 31.5 * uDpr);
        gl_PointSize = mix(smallSize, largeSize, vFlake);
        vColor = mix(vec3(0.82, 0.9, 0.9), vec3(0.94, 0.98, 1.0), vFlake);
        vAlpha = mix(0.28 + aSize * 0.16, 0.60 + aSeed * 0.17, vFlake);
        vRotation = aSeed * 6.283 + uTime * (0.08 + aSeed * 0.12);
      }
    `,
    fragmentShader: softPoint,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  return { points, uniforms: material.uniforms };
}
