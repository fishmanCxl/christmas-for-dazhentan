const melody = [
  [76, 1], [76, 1], [76, 2], [76, 1], [76, 1], [76, 2],
  [76, 1], [79, 1], [72, 1.5], [74, 0.5], [76, 4],
  [77, 1], [77, 1], [77, 1.5], [77, 0.5], [77, 1], [76, 1], [76, 1], [76, 0.5], [76, 0.5],
  [76, 1], [74, 1], [74, 1], [76, 1], [74, 2], [79, 2],
];

export function createSoundtrack() {
  let context;
  let master;
  let enabled = false;
  let interval;
  let nextNote = 0;
  let noteIndex = 0;

  function initialize() {
    if (context) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    context = new AudioContext();
    master = context.createGain();
    master.gain.value = 0;
    master.connect(context.destination);
  }

  function bell(note, time, volume = 0.13) {
    if (!context) return;
    const frequency = 440 * 2 ** ((note - 69) / 12);
    [1, 2.756].forEach((partial, index) => {
      const oscillator = context.createOscillator();
      const envelope = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency * partial;
      envelope.gain.setValueAtTime(0.0001, time);
      envelope.gain.exponentialRampToValueAtTime(volume / (index * 4 + 1), time + 0.008);
      envelope.gain.exponentialRampToValueAtTime(0.0001, time + 1.8);
      oscillator.connect(envelope);
      envelope.connect(master);
      oscillator.start(time);
      oscillator.stop(time + 1.9);
      oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
    });
  }

  function schedule() {
    if (!context || !enabled || context.state !== 'running') return;
    while (nextNote < context.currentTime + 0.35) {
      const [note, beats] = melody[noteIndex % melody.length];
      bell(note, nextNote);
      if (noteIndex % 4 === 0) bell(48 + Math.floor(noteIndex / 8) % 3 * 5, nextNote, 0.06);
      nextNote += beats * 0.34;
      noteIndex++;
      if (noteIndex % melody.length === 0) nextNote += 1.4;
    }
  }

  function startScheduler() {
    clearInterval(interval);
    nextNote = context.currentTime + 0.05;
    schedule();
    interval = setInterval(schedule, 150);
  }

  async function setEnabled(value) {
    initialize();
    if (!context) return false;
    enabled = value;
    if (enabled) {
      try { await context.resume(); } catch { enabled = false; }
    }
    master.gain.setTargetAtTime(enabled ? 0.45 : 0, context.currentTime, 0.15);
    if (enabled) startScheduler();
    else clearInterval(interval);
    return enabled;
  }

  function cue(stage) {
    if (!context || !enabled) return;
    const notes = stage === 'lighting' ? [72, 76, 79, 84] : [79, 84, 88];
    notes.forEach((note, index) => bell(note, context.currentTime + index * 0.11, 0.18));
  }

  function pause() {
    clearInterval(interval);
    if (context?.state === 'running') void context.suspend();
  }

  async function resume() {
    if (enabled && context) {
      try { await context.resume(); startScheduler(); } catch { /* Next touch can resume audio. */ }
    }
  }

  function dispose() {
    clearInterval(interval);
    if (context) void context.close();
  }

  return { setEnabled, cue, pause, resume, dispose };
}
