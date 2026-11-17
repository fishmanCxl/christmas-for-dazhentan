import test from 'node:test';
import assert from 'node:assert/strict';
import { sampleTextPixels } from './particle-text.js';

test('text sampling keeps opaque glyph pixels and skips the background', () => {
  const data = new Uint8ClampedArray(3 * 2 * 4);
  data[7] = 255;
  data[19] = 160;
  data[23] = 40;
  assert.deepEqual(sampleTextPixels({ data, width: 3, height: 2 }, 1), [
    { x: 1.5, y: 0.5, alpha: 1 },
    { x: 1.5, y: 1.5, alpha: 160 / 255 },
  ]);
});

test('text sampling caps the GPU particle count on large viewports', () => {
  const data = new Uint8ClampedArray(100 * 100 * 4).fill(255);
  const samples = sampleTextPixels({ data, width: 100, height: 100 }, 1, 4800);
  assert.ok(samples.length > 0 && samples.length <= 4800);
  assert.deepEqual(sampleTextPixels({ data: new Uint8ClampedArray(16), width: 2, height: 2 }, 1), []);
});
