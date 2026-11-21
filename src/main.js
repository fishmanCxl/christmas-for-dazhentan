import { nextStage } from './experience.js';
import { createScene } from './scene.js';
import { createSoundtrack } from './audio.js';

const root = document.querySelector('#experience');
const canvas = document.querySelector('#world');
const holdButton = document.querySelector('#hold-button');
const soundButton = document.querySelector('#sound-toggle');
const journey = document.querySelector('.journey');
const soundtrack = createSoundtrack();
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) document.querySelector('#finale-hint').textContent = '愿这一点点魔法，陪你过个好圣诞';
const stageCopy = {
  intro: '大侦探，一份圣诞惊喜，等你开启。',
  tree: '长按星星 2.4 秒，点亮圣诞树。',
  lighting: '圣诞树正在点亮。',
  gift: '圣诞树亮了。划开缎带，或者轻触礼物。',
  opening: '礼物正在打开。',
  globe: '惊喜是一颗装着圣诞树的水晶球。轻触水晶球，绽放烟花。',
  finale: '大侦探，圣诞快乐。愿你今天的开心再多一点。',
};

let stage = 'intro';
let scene;
let fallback = false;
let fallbackTimer;
let soundEnabled = false;
let soundChosen = false;
let holdStarted = 0;
let holdFrame = 0;
let holdPointer;

function finishLoading() {
  document.querySelector('#scene-loading').hidden = true;
  document.querySelector('#enter-button').disabled = false;
}

function updateSoundButton() {
  soundButton.setAttribute('aria-pressed', String(soundEnabled));
  soundButton.setAttribute('aria-label', soundEnabled ? '关闭音乐' : '开启音乐');
  soundButton.querySelector('.sound-label').textContent = soundEnabled ? '音乐开启' : '声音关闭';
}

function scheduleFallback() {
  clearTimeout(fallbackTimer);
  if (fallback && (stage === 'lighting' || stage === 'opening')) {
    fallbackTimer = setTimeout(() => act('complete'), reducedMotion ? 500 : 1500);
  }
}

function activateFallback() {
  if (fallback) return;
  fallback = true;
  scene?.pause();
  root.classList.add('is-fallback');
  document.querySelector('#fallback-notice').hidden = false;
  canvas.hidden = true;
  document.querySelector('#finale-hint').textContent = '愿这一点点魔法，陪你过个好圣诞';
  finishLoading();
  scheduleFallback();
}

function endHold() {
  cancelAnimationFrame(holdFrame);
  holdFrame = 0;
  holdStarted = 0;
  holdButton.style.setProperty('--hold', stage === 'lighting' ? '360deg' : '0deg');
  holdButton.classList.remove('is-holding');
  if (holdPointer !== undefined && holdButton.hasPointerCapture(holdPointer)) holdButton.releasePointerCapture(holdPointer);
  holdPointer = undefined;
  scene?.setHold(0);
}

function act(action) {
  const next = nextStage(stage, action);
  if (next === stage) return;
  endHold();
  stage = next;
  root.dataset.stage = stage;
  document.querySelectorAll('[data-for]').forEach((section) => {
    section.hidden = !section.dataset.for.split(' ').includes(stage);
  });
  journey.hidden = stage === 'intro';
  const step = { tree: 0, lighting: 0, gift: 1, opening: 1, globe: 2, finale: 3 }[stage] ?? 0;
  journey.querySelectorAll('.journey-dot').forEach((dot, index) => {
    dot.classList.toggle('is-active', index === step);
    dot.classList.toggle('is-complete', index < step);
    if (index === step) dot.setAttribute('aria-current', 'step');
    else dot.removeAttribute('aria-current');
  });
  holdButton.disabled = stage === 'lighting';
  holdButton.style.setProperty('--hold', stage === 'lighting' ? '360deg' : '0deg');
  document.querySelector('#hold-hint').textContent = stage === 'lighting' ? '你的圣诞树，亮了' : '长按星星，点亮圣诞树';
  document.querySelector('#drag-hint').textContent = stage === 'lighting' ? '一点点魔法，正在发生' : '左右轻滑，看看雪夜的另一面';
  document.querySelector('#gift-hint').textContent = stage === 'opening' ? '惊喜，正在打开' : '划开缎带，拆开惊喜';
  document.querySelector('#announcer').textContent = stageCopy[stage];
  scene?.setStage(stage);
  if (['lighting', 'opening', 'finale'].includes(stage)) soundtrack.cue(stage);
  scheduleFallback();
  const visibleHeading = root.querySelector('.scene-content:not([hidden]) h1, .scene-content:not([hidden]) h2');
  visibleHeading?.setAttribute('tabindex', '-1');
  if (action !== 'light') visibleHeading?.focus({ preventScroll: true });
}

function tickHold(now) {
  if (!holdStarted || stage !== 'tree') return;
  const progress = Math.min((now - holdStarted) / 2400, 1);
  holdButton.style.setProperty('--hold', `${progress * 360}deg`);
  scene?.setHold(progress);
  if (progress >= 1) {
    act('light');
    return;
  }
  holdFrame = requestAnimationFrame(tickHold);
}

function beginHold() {
  if (stage !== 'tree' || holdStarted) return;
  holdStarted = performance.now();
  holdButton.classList.add('is-holding');
  holdFrame = requestAnimationFrame(tickHold);
}

holdButton.addEventListener('pointerdown', (event) => {
  if (event.button !== 0 || stage !== 'tree') return;
  event.preventDefault();
  holdPointer = event.pointerId;
  holdButton.setPointerCapture(event.pointerId);
  beginHold();
});
holdButton.addEventListener('pointerup', endHold);
holdButton.addEventListener('pointercancel', endHold);
holdButton.addEventListener('lostpointercapture', endHold);
holdButton.addEventListener('contextmenu', (event) => event.preventDefault());
holdButton.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') { event.preventDefault(); beginHold(); }
});
holdButton.addEventListener('keyup', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') { event.preventDefault(); endHold(); }
});
holdButton.addEventListener('blur', endHold);
holdButton.addEventListener('click', (event) => {
  if (event.detail === 0 && !holdStarted) act('light');
});

document.querySelector('#enter-button').addEventListener('click', async () => {
  if (!soundChosen) {
    soundEnabled = await soundtrack.setEnabled(true);
    updateSoundButton();
  }
  act('enter');
});
soundButton.addEventListener('click', async () => {
  soundChosen = true;
  soundEnabled = await soundtrack.setEnabled(!soundEnabled);
  updateSoundButton();
});

const giftButton = document.querySelector('#gift-button');
let swipeStart;
giftButton.addEventListener('pointerdown', (event) => {
  swipeStart = { x: event.clientX, y: event.clientY };
  giftButton.setPointerCapture(event.pointerId);
});
giftButton.addEventListener('pointermove', (event) => {
  if (swipeStart && Math.hypot(event.clientX - swipeStart.x, event.clientY - swipeStart.y) > 45) {
    swipeStart = undefined;
    act('open');
  }
});
giftButton.addEventListener('pointerup', () => { swipeStart = undefined; });
giftButton.addEventListener('pointercancel', () => { swipeStart = undefined; });
giftButton.addEventListener('click', () => act('open'));
document.querySelector('#globe-button').addEventListener('click', () => act('celebrate'));
document.querySelector('#celebrate-button').addEventListener('click', () => act('celebrate'));
document.querySelector('#replay-button').addEventListener('click', () => act('replay'));

let dragX;
root.addEventListener('pointerdown', (event) => {
  if (stage === 'tree' && !event.target.closest('button, a')) {
    dragX = event.clientX;
    root.setPointerCapture(event.pointerId);
  }
});
root.addEventListener('pointermove', (event) => {
  const bounds = root.getBoundingClientRect();
  scene?.setPointer((event.clientX / bounds.width - 0.5) * 2, (0.5 - event.clientY / bounds.height) * 2);
  if (dragX !== undefined) { scene?.drag(event.clientX - dragX); dragX = event.clientX; }
});
root.addEventListener('pointerup', (event) => {
  dragX = undefined;
  if (stage === 'finale' && !event.target.closest('button, a')) {
    const bounds = root.getBoundingClientRect();
    scene?.launchFirework((event.clientX - bounds.left) / bounds.width * 2 - 1, 1 - (event.clientY - bounds.top) / bounds.height * 2);
  }
});
root.addEventListener('pointercancel', () => { dragX = undefined; });
root.addEventListener('pointerleave', () => scene?.setPointer(100, 100));

function visibilityChanged() {
  if (document.hidden) {
    endHold();
    scene?.pause();
    soundtrack.pause();
    clearTimeout(fallbackTimer);
  } else {
    if (!fallback) scene?.resume();
    void soundtrack.resume();
    scheduleFallback();
  }
}
document.addEventListener('visibilitychange', visibilityChanged);
window.addEventListener('pagehide', () => { endHold(); scene?.pause(); soundtrack.pause(); });
window.addEventListener('pageshow', visibilityChanged);
canvas.addEventListener('webglcontextlost', (event) => { event.preventDefault(); activateFallback(); });

try {
  scene = createScene(canvas, () => act('complete'), document.querySelector('#finale-title'));
  scene.ready.then(finishLoading, activateFallback);
}
catch { activateFallback(); }

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    endHold();
    clearTimeout(fallbackTimer);
    scene?.dispose();
    soundtrack.dispose();
    document.removeEventListener('visibilitychange', visibilityChanged);
  });
}
