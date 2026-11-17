import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createSnow, createBursts } from './particles.js';
import { createParticleText } from './particle-text.js';

const gold = new THREE.MeshStandardMaterial({ color: '#e9c27e', metalness: 0.78, roughness: 0.3 });
const burgundy = new THREE.MeshStandardMaterial({ color: '#540c20', metalness: 0.05, roughness: 0.72 });
const snowMaterial = new THREE.MeshStandardMaterial({ color: '#e0e9e5', roughness: 0.93 });

function glowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,246,214,1)');
  gradient.addColorStop(0.12, 'rgba(255,223,154,.9)');
  gradient.addColorStop(0.35, 'rgba(255,192,99,.24)');
  gradient.addColorStop(1, 'rgba(255,173,66,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

function createStar(radius = 0.25) {
  const shape = new THREE.Shape();
  for (let index = 0; index < 10; index++) {
    const angle = index * Math.PI / 5 + Math.PI / 2;
    const length = index % 2 ? radius * 0.43 : radius;
    const x = Math.cos(angle) * length;
    const y = Math.sin(angle) * length;
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.065, bevelEnabled: true, bevelSize: 0.018, bevelThickness: 0.018, bevelSegments: 1, steps: 1 });
  geometry.center();
  return new THREE.Mesh(geometry, gold);
}

function createTree(texture, branchTexture) {
  const root = new THREE.Group();
  const transform = new THREE.Object3D();
  const foliageMaterial = new THREE.MeshBasicMaterial({ map: branchTexture, color: '#c3d2c7', alphaTest: 0.4, alphaToCoverage: true, side: THREE.DoubleSide });
  const foliage = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 0.34), foliageMaterial, 4000);
  let branchIndex = 0;
  for (let tier = 0; tier < 17; tier++) {
    const y = 0.3 + tier * 0.25;
    const radius = 1.62 * (1 - tier / 18) ** 0.8;
    const branches = Math.round(18 - tier * 0.55);
    for (let branch = 0; branch < branches; branch++) {
      const angle = branch / branches * Math.PI * 2 + tier * 1.31;
      for (let segment = 0; segment < 4; segment++) {
        const distance = radius * (0.16 + segment * 0.25);
        for (let cross = 0; cross < 3; cross++) {
          const size = (0.88 - tier * 0.029) * (1.1 - segment * 0.1);
          transform.position.set(Math.cos(angle) * distance, y + distance * 0.12, Math.sin(angle) * distance);
          transform.rotation.set((cross - 1) * 0.85 + 0.1, -angle, 0.14);
          transform.scale.set(size, size, size);
          transform.updateMatrix();
          foliage.setMatrixAt(branchIndex, transform.matrix);
          foliage.setColorAt(branchIndex, new THREE.Color().setScalar(0.65 + Math.random() * 0.35));
          branchIndex++;
        }
      }
    }
  }
  foliage.count = branchIndex;
  root.add(foliage);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.12, 4.35, 8), new THREE.MeshStandardMaterial({ color: '#5b4230', roughness: 0.95 }));
  trunk.position.y = 2.1;
  root.add(trunk);

  const ornamentCount = 84;
  const ornaments = new THREE.InstancedMesh(new THREE.SphereGeometry(0.075, 12, 8), gold, ornamentCount);
  for (let index = 0; index < ornamentCount; index++) {
    const y = 0.4 + Math.random() * 3.7;
    const angle = index * 2.399;
    const radius = 1.6 * (1 - y / 4.7) ** 0.8;
    transform.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    transform.scale.setScalar(0.65 + Math.random() * 0.75);
    transform.updateMatrix();
    ornaments.setMatrixAt(index, transform.matrix);
    ornaments.setColorAt(index, new THREE.Color(index % 5 === 0 ? '#b33945' : '#e9c78b'));
  }
  root.add(ornaments);

  const spiral = [];
  const bulbs = [];
  for (let index = 0; index <= 300; index++) {
    const progress = index / 300;
    const y = 0.28 + progress * 4.05;
    const radius = 1.86 * (1 - y / 4.65) ** 0.8;
    const angle = progress * Math.PI * 2 * 5.3;
    const point = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    spiral.push(point);
    if (index % 2 === 0) bulbs.push(point.x, point.y, point.z);
  }
  const wireMaterial = new THREE.MeshStandardMaterial({ color: '#b79a5e', emissive: '#e1a44d', emissiveIntensity: 0.35, metalness: 0.45, roughness: 0.4 });
  root.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(spiral), 300, 0.012, 4, false), wireMaterial));
  const bulbGeometry = new THREE.BufferGeometry();
  bulbGeometry.setAttribute('position', new THREE.Float32BufferAttribute(bulbs, 3));
  const bulbMaterial = new THREE.ShaderMaterial({
    uniforms: { uLight: { value: 0.55 }, uTime: { value: 0 }, uReveal: { value: 5 }, uDpr: { value: 1 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `
      uniform float uLight;
      uniform float uTime;
      uniform float uReveal;
      uniform float uDpr;
      varying float vLight;
      void main() {
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * view;
        vLight = (0.7 + 0.3 * sin(uTime * 1.4 + position.y * 7.0)) * uLight * smoothstep(position.y - 0.15, position.y + 0.15, uReveal);
        gl_PointSize = clamp((22.0 + vLight * 120.0) * uDpr / max(0.5, -view.z), 1.0, 34.0 * uDpr);
      }
    `,
    fragmentShader: `
      varying float vLight;
      void main() {
        float radius = length(gl_PointCoord - 0.5);
        float halo = exp(-radius * radius * 22.0);
        float core = exp(-radius * radius * 150.0);
        gl_FragColor = vec4(vec3(1.0, 0.77, 0.39) + core * 1.2, (halo * 0.65 + core) * vLight);
      }
    `,
  });
  const lights = new THREE.Points(bulbGeometry, bulbMaterial);
  root.add(lights);
  const star = createStar(0.29);
  star.position.y = 4.65;
  root.add(star);
  const haloMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false });
  const halo = new THREE.Sprite(haloMaterial);
  halo.position.set(0, 4.65, 0.05);
  halo.scale.setScalar(1.2);
  root.add(halo);
  return { root, bulbMaterial, wireMaterial, haloMaterial, star };
}

function createGift() {
  const root = new THREE.Group();
  const body = new THREE.Mesh(new RoundedBoxGeometry(1.32, 1.05, 1.15, 3, 0.035), burgundy);
  body.position.y = 0.525;
  root.add(body);
  const frontRibbon = new THREE.Mesh(new THREE.BoxGeometry(0.17, 1.06, 1.164), gold);
  frontRibbon.position.y = 0.525;
  root.add(frontRibbon);
  const sideRibbon = new THREE.Mesh(new THREE.BoxGeometry(1.334, 1.06, 0.16), gold);
  sideRibbon.position.y = 0.525;
  root.add(sideRibbon);
  const lid = new THREE.Group();
  lid.position.y = 1.08;
  root.add(lid);
  const lidBox = new THREE.Mesh(new RoundedBoxGeometry(1.43, 0.22, 1.26, 3, 0.025), burgundy);
  lid.add(lidBox);
  lid.add(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.235, 1.274), gold));
  lid.add(new THREE.Mesh(new THREE.BoxGeometry(1.444, 0.235, 0.17), gold));
  [-1, 1].forEach((side) => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.21, 0),
      new THREE.Vector3(side * 0.35, 0.58, 0.03),
      new THREE.Vector3(side * 0.56, 0.5, -0.03),
      new THREE.Vector3(side * 0.45, 0.23, -0.06),
      new THREE.Vector3(0, 0.21, 0),
    ]);
    const vertices = [];
    const indices = [];
    for (let index = 0; index <= 40; index++) {
      const point = curve.getPoint(index / 40);
      const tangent = curve.getTangent(index / 40);
      const across = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize().multiplyScalar(0.065);
      vertices.push(point.x - across.x, point.y - across.y, point.z, point.x, point.y, point.z + 0.025, point.x + across.x, point.y + across.y, point.z);
      if (index < 40) {
        const offset = index * 3;
        indices.push(offset, offset + 3, offset + 1, offset + 1, offset + 3, offset + 4, offset + 1, offset + 4, offset + 2, offset + 2, offset + 4, offset + 5);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const ribbonMaterial = gold.clone();
    ribbonMaterial.side = THREE.DoubleSide;
    const loop = new THREE.Mesh(geometry, ribbonMaterial);
    lid.add(loop);
  });
  const knot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8), gold);
  knot.position.y = 0.24;
  knot.scale.set(1.2, 0.7, 0.8);
  lid.add(knot);
  return { root, lid };
}

function createGlobe(tree) {
  const root = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.69, 0.73, 0.23, 48), gold);
  base.position.y = 0.12;
  root.add(base);
  [0.04, 0.23].forEach((y) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.025, 6, 48), gold);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    root.add(ring);
  });
  const bed = new THREE.Mesh(new THREE.SphereGeometry(0.64, 32, 12), snowMaterial);
  bed.scale.y = 0.19;
  bed.position.y = 0.31;
  root.add(bed);
  const miniature = tree.root.clone(true);
  miniature.scale.setScalar(0.24);
  miniature.position.y = 0.37;
  root.add(miniature);
  const glassMaterial = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vNormal = normalize(mat3(modelMatrix) * normal);
        vView = cameraPosition - world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec3 normal = normalize(vNormal);
        float rim = pow(1.0 - max(0.0, dot(normal, normalize(vView))), 2.8);
        float highlight = pow(max(0.0, dot(normal, normalize(vec3(-0.7, 0.8, 1.0)))), 45.0);
        float second = pow(max(0.0, dot(normal, normalize(vec3(0.85, 0.3, 0.7)))), 70.0);
        vec3 color = mix(vec3(0.35, 0.63, 0.66), vec3(0.93, 0.88, 0.72), rim);
        color += highlight * 0.8 + second * 0.5;
        gl_FragColor = vec4(color, 0.035 + rim * 0.7 + highlight * 0.6 + second * 0.4);
      }
    `,
  });
  const glass = new THREE.Mesh(new THREE.SphereGeometry(0.76, 48, 32), glassMaterial);
  glass.position.y = 0.96;
  glass.renderOrder = 3;
  root.add(glass);
  const innerSnow = createSnow(110, 0.85, 1.03, 0.75);
  innerSnow.points.position.y = 2.3;
  root.add(innerSnow.points);
  for (let index = 0; index < 18; index++) {
    const stud = new THREE.Mesh(new THREE.SphereGeometry(0.017, 6, 4), gold);
    const angle = index * Math.PI * 2 / 18;
    stud.position.set(Math.cos(angle) * 0.71, 0.13, Math.sin(angle) * 0.71);
    root.add(stud);
  }
  return { root, innerSnow };
}

const poses = {
  intro: { treeScale: 0.6, treeX: -0.08, treeY: -0.22, treeZ: 0, giftScale: 0.34, giftX: 0.85, giftY: -0.22, giftZ: 0.7, globeScale: 0, globeY: 1.1, cameraZ: 9.5, targetY: 1.9 },
  tree: { treeScale: 0.74, treeX: 0, treeY: 0.55, treeZ: 0, giftScale: 0.28, giftX: 1.1, giftY: 0.52, giftZ: 0.6, globeScale: 0, globeY: 1.1, cameraZ: 9.6, targetY: 2.2 },
  lighting: { treeScale: 0.78, treeX: 0, treeY: 0.52, treeZ: 0, giftScale: 0.31, giftX: 1.12, giftY: 0.52, giftZ: 0.7, globeScale: 0, globeY: 1.1, cameraZ: 10, targetY: 2.25 },
  gift: { treeScale: 0.53, treeX: -2.8, treeY: 0.05, treeZ: -2.5, giftScale: 1.12, giftX: 0, giftY: 0.65, giftZ: 0, globeScale: 0, globeY: 1.4, cameraZ: 8.8, targetY: 2.3 },
  opening: { treeScale: 0.53, treeX: -2.8, treeY: 0.05, treeZ: -2.5, giftScale: 1.12, giftX: 0, giftY: 0.65, giftZ: 0, globeScale: 0.65, globeY: 1.9, cameraZ: 9.2, targetY: 2.4 },
  globe: { treeScale: 0.44, treeX: -3.7, treeY: 0.1, treeZ: -3.5, giftScale: 0.42, giftX: 2.5, giftY: -0.4, giftZ: 0, globeScale: 1.55, globeY: 0.95, cameraZ: 9.2, targetY: 2.45 },
  finale: { treeScale: 0.44, treeX: -3.7, treeY: 0.1, treeZ: -3.5, giftScale: 0.4, giftX: 2.8, giftY: -0.5, giftZ: 0, globeScale: 1.5, globeY: 0.55, cameraZ: 9.5, targetY: 2.45 },
};

export function createScene(canvas, onComplete, titleElement) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  const scene = new THREE.Scene();
  const environmentGenerator = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = environmentGenerator.fromScene(room, 0.04);
  scene.environment = environment.texture;
  scene.environmentIntensity = 0.65;
  room.dispose();
  environmentGenerator.dispose();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 60);
  camera.position.set(0, 2.7, 9.5);
  const target = new THREE.Vector3(0, 1.9, 0);
  scene.add(new THREE.HemisphereLight('#c4e3e3', '#203d31', 1.4));
  const key = new THREE.DirectionalLight('#ffe1ad', 3.1);
  key.position.set(-3, 6, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight('#a0d9e1', 1.7);
  rim.position.set(4, 3, -3);
  scene.add(rim);
  const warm = new THREE.PointLight('#ffc871', 9, 12, 2);
  warm.position.set(0, 3.2, 2);
  scene.add(warm);

  const texture = glowTexture();
  const branchTexture = new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}assets/fir-branch.webp`, () => canvas.classList.add('is-ready'));
  branchTexture.colorSpace = THREE.SRGBColorSpace;
  branchTexture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const tree = createTree(texture, branchTexture);
  scene.add(tree.root);
  const gift = createGift();
  gift.root.rotation.y = -0.35;
  scene.add(gift.root);
  const globe = createGlobe(tree);
  scene.add(globe.root);
  const extraGifts = new THREE.Group();
  for (let index = 0; index < 3; index++) {
    const present = createGift();
    present.root.scale.setScalar(0.24 + index * 0.035);
    present.root.position.set(-0.7 + index * 0.45, 0, 0.75);
    present.root.rotation.y = index * 0.7;
    extraGifts.add(present.root);
  }
  tree.root.add(extraGifts);

  const snow = createSnow(reducedMotion ? 150 : 1050);
  scene.add(snow.points);
  const bursts = createBursts(reducedMotion ? 700 : 2600);
  scene.add(bursts.points);
  const particleTitle = reducedMotion ? null : createParticleText(titleElement, canvas);
  if (particleTitle) scene.add(particleTitle.points);
  const giftGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  giftGlow.scale.setScalar(3.5);
  giftGlow.position.set(0, 1.6, 0);
  scene.add(giftGlow);

  let stage = 'intro';
  let stageTime = 0;
  let elapsed = 0;
  let hold = 0;
  let turn = 0;
  let lastTime = 0;
  let frameId = 0;
  let completed = false;
  let fireworksAt = 0;
  let fireworkIndex = 0;
  let openingBurst = false;
  let quality = Math.min(window.devicePixelRatio || 1, 1.5);
  let slowFrames = 0;
  let frames = 0;
  let measuredTime = 0;
  const scaleTarget = new THREE.Vector3();
  const positionTarget = new THREE.Vector3();

  function resize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(quality);
    renderer.setSize(width, height, false);
    snow.uniforms.uDpr.value = quality;
    bursts.uniforms.uDpr.value = quality;
    tree.bulbMaterial.uniforms.uDpr.value = quality;
    particleTitle?.resize(width, height, quality);
  }

  function setStage(next) {
    stage = next;
    stageTime = 0;
    completed = false;
    hold = 0;
    if (next === 'intro') {
      turn = 0;
      bursts.reset();
      gift.lid.position.set(0, 1.08, 0);
      gift.lid.rotation.set(0, 0, 0);
      globe.root.scale.setScalar(0);
      giftGlow.material.opacity = 0;
      openingBurst = false;
    }
    if (next === 'opening') openingBurst = false;
    if (next === 'finale') {
      fireworksAt = 0.1;
      fireworkIndex = 0;
      void particleTitle?.show();
    } else {
      particleTitle?.hide();
    }
  }

  function updateObjects(delta) {
    const pose = poses[stage];
    const ease = 1 - Math.exp(-delta * (reducedMotion ? 20 : 3.3));
    tree.root.scale.lerp(scaleTarget.setScalar(pose.treeScale), ease);
    tree.root.position.lerp(positionTarget.set(pose.treeX, pose.treeY, pose.treeZ), ease);
    tree.root.rotation.y = THREE.MathUtils.damp(tree.root.rotation.y, turn + Math.sin(elapsed * 0.16) * (reducedMotion ? 0 : 0.07), 3, delta);
    gift.root.scale.lerp(scaleTarget.setScalar(pose.giftScale), ease);
    gift.root.position.lerp(positionTarget.set(pose.giftX, pose.giftY, pose.giftZ), ease);
    gift.root.rotation.y = -0.35 + (stage === 'gift' && !reducedMotion ? Math.sin(elapsed * 1.4) * 0.055 : 0);
    let globeScale = pose.globeScale;
    if (stage === 'opening') globeScale *= THREE.MathUtils.smoothstep(stageTime, 0.65, 2.7);
    globe.root.scale.lerp(scaleTarget.setScalar(globeScale), ease);
    globe.root.visible = globe.root.scale.x > 0.001;
    globe.root.position.y = THREE.MathUtils.damp(globe.root.position.y, pose.globeY + (reducedMotion ? 0 : Math.sin(elapsed * 1.1) * 0.045), 3, delta);
    globe.root.rotation.y = Math.sin(elapsed * 0.3) * 0.1;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, pose.cameraZ, 2.8, delta);
    target.y = THREE.MathUtils.damp(target.y, pose.targetY, 2.8, delta);
    camera.lookAt(target);

    let light = stage === 'intro' ? 0.75 : 1;
    let reveal = 5;
    if (stage === 'tree') { light = 0.06 + hold * 0.7; reveal = hold * 4.8; }
    if (stage === 'lighting') { light = 1.3; reveal = stageTime * 2.15; }
    tree.bulbMaterial.uniforms.uLight.value = light;
    tree.bulbMaterial.uniforms.uReveal.value = reveal;
    tree.bulbMaterial.uniforms.uTime.value = elapsed;
    tree.wireMaterial.emissiveIntensity = light * 0.9;
    tree.haloMaterial.opacity = stage === 'tree' ? 0.13 + hold * 0.5 : 0.8;
    warm.intensity = stage === 'tree' ? 1.8 + hold * 8 : 10;
    tree.star.rotation.y = Math.sin(elapsed * 0.4) * 0.16;
    globe.innerSnow.uniforms.uTime.value = elapsed * 0.55;
    snow.uniforms.uTime.value = reducedMotion ? 0 : elapsed;
    bursts.uniforms.uTime.value = elapsed;
    particleTitle?.update(elapsed);

    if (stage === 'lighting' && stageTime > 2.1 && !openingBurst) {
      bursts.burst([0, 4.15, 0], '#ffe0a0', reducedMotion ? 70 : 360, 'star');
      openingBurst = true;
    }
    if (stage === 'lighting' && stageTime > (reducedMotion ? 0.7 : 3.25) && !completed) {
      completed = true;
      onComplete();
    }
    if (stage === 'opening') {
      const progress = THREE.MathUtils.smoothstep(stageTime, 0, reducedMotion ? 0.4 : 1.6);
      gift.lid.position.y = 1.08 + progress * 1.8;
      gift.lid.position.x = progress * -0.28;
      gift.lid.rotation.z = -progress * 0.35;
      gift.lid.rotation.x = progress * 0.25;
      giftGlow.material.opacity = Math.sin(Math.min(stageTime / 3.2, 1) * Math.PI) * 0.7;
      if (stageTime > 0.25 && !openingBurst) {
        bursts.burst([0, 2.1, 0.25], '#ffda8a', reducedMotion ? 150 : 950);
        openingBurst = true;
      }
      if (stageTime > (reducedMotion ? 0.8 : 3.1) && !completed) {
        completed = true;
        giftGlow.material.opacity = 0;
        onComplete();
      }
    }
    if (stage === 'finale' && stageTime >= fireworksAt && !reducedMotion) {
      const origins = [[-1.8, 4.8, -0.8], [1.75, 4.3, -1.5], [-1.3, 2.9, -1], [1.7, 6.1, -2], [0.1, 5.6, -1.5]];
      const color = fireworkIndex % 3 === 1 ? '#c8e4df' : '#f8ce8c';
      bursts.burst(origins[fireworkIndex % origins.length], color, 420, fireworkIndex % 3 === 0 ? 'star' : 'firework');
      fireworkIndex++;
      fireworksAt = stageTime + (fireworkIndex < 6 ? 0.68 : 2.5);
    }
  }

  function render(time) {
    const rawDelta = lastTime ? (time - lastTime) / 1000 : 0.016;
    const delta = Math.min(rawDelta, 0.05);
    lastTime = time;
    elapsed += delta;
    stageTime += delta;
    updateObjects(delta);
    renderer.render(scene, camera);
    frames++;
    measuredTime += rawDelta;
    if (frames === 120) {
      slowFrames = measuredTime / frames > 0.029 ? slowFrames + 1 : 0;
      if (slowFrames >= 2 && quality > 1) {
        quality = 1;
        snow.points.geometry.setDrawRange(0, reducedMotion ? 120 : 550);
        resize();
      }
      canvas.dataset.quality = String(quality);
      canvas.dataset.drawCalls = String(renderer.info.render.calls);
      frames = 0;
      measuredTime = 0;
    }
    frameId = requestAnimationFrame(render);
  }

  function pause() { cancelAnimationFrame(frameId); frameId = 0; lastTime = 0; }
  function resume() { if (!frameId) frameId = requestAnimationFrame(render); }
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  const pose = poses.intro;
  tree.root.scale.setScalar(pose.treeScale);
  tree.root.position.set(pose.treeX, pose.treeY, pose.treeZ);
  gift.root.scale.setScalar(pose.giftScale);
  gift.root.position.set(pose.giftX, pose.giftY, pose.giftZ);
  globe.root.scale.setScalar(0);
  resume();

  function dispose() {
    pause();
    observer.disconnect();
    particleTitle?.dispose();
    const geometries = new Set();
    const materials = new Set();
    scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) materials.add(object.material);
    });
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    texture.dispose();
    branchTexture.dispose();
    environment.dispose();
    renderer.dispose();
  }

  return {
    setStage,
    setHold(value) { hold = value; },
    drag(value) { turn += value * 0.007; },
    setPointer(x, y) {
      snow.uniforms.uPointer.value.set(x * 3.5, 2.5 + y * 3.5);
      particleTitle?.setPointer(x, y);
    },
    pause,
    resume,
    dispose,
  };
}
