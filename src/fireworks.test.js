import test from 'node:test';
import assert from 'node:assert/strict';
import { createBursts } from './fireworks.js';

function records(effects) {
  const { aLife, aStart } = effects.points.geometry.attributes;
  return Array.from(aLife.array, (life, index) => ({ life, start: aStart.array[index], index }))
    .filter(({ life }) => life > 0);
}

function snapshot(effects) {
  return Object.fromEntries(Object.entries(effects.points.geometry.attributes)
    .map(([name, attribute]) => [name, Array.from(attribute.array)]));
}

test('an emission cannot exceed the fixed pool or partially overwrite it', () => {
  const effects = createBursts(4);
  assert.equal(effects.points.geometry.attributes.position.count, 4);
  assert.equal(effects.burst([0, 2, 0], '#ffd786', 5), false);
  assert.equal(records(effects).length, 0);
  assert.equal(effects.burst([0, 2, 0], '#ffd786', 4), true);
  const before = snapshot(effects);
  assert.equal(effects.burst([5, 2, 0], '#ffffff', 1), false);
  assert.deepEqual(snapshot(effects), before);
});

test('a launch reserves its rocket and all future explosion records atomically', () => {
  const effects = createBursts(1000);
  effects.uniforms.uTime.value = 12;
  assert.equal(effects.launch([0.2, 4.2, -1], '#e5f8ff', 1.25), true);
  const scheduled = records(effects);
  assert.equal(Math.min(...scheduled.map(({ start }) => start)), 12);
  assert.ok(scheduled.some(({ start }) => start > 12.5), 'explosion starts after ascent');
  assert.ok(scheduled.some(({ start }) => start > 13), 'glitter is delayed beyond the explosion');
  const before = snapshot(effects);
  effects.uniforms.uTime.value = 12.1;
  assert.equal(effects.burst([9, 9, 0], '#ffffff', 1001 - scheduled.length), false);
  assert.deepEqual(snapshot(effects), before, 'future slots are occupied before their start time');

  const undersized = createBursts(40);
  const empty = snapshot(undersized);
  assert.equal(undersized.launch([0, 4, 0], '#ffcc88', 1), false);
  assert.deepEqual(snapshot(undersized), empty);
});

test('expired slots are reused while live particles remain untouched', () => {
  const effects = createBursts(4);
  effects.burst([1, 2, 0], '#ffd786', 2);
  const firstEnd = Math.max(...records(effects).map(({ start, life }) => start + life));
  effects.uniforms.uTime.value = 1;
  effects.burst([2, 3, 0], '#d5efff', 2);
  const before = snapshot(effects);
  const live = records(effects).filter(({ start }) => start === 1);
  effects.uniforms.uTime.value = firstEnd + 0.01;
  assert.ok(live.every(({ start, life }) => start + life > effects.uniforms.uTime.value));
  assert.equal(effects.burst([3, 4, 0], '#ffffff', 2), true);
  for (const { index } of live) {
    for (const [name, attribute] of Object.entries(effects.points.geometry.attributes)) {
      const begin = index * attribute.itemSize;
      assert.deepEqual(Array.from(attribute.array.slice(begin, begin + attribute.itemSize)),
        before[name].slice(begin, begin + attribute.itemSize));
    }
  }
  assert.equal(effects.burst([4, 5, 0], '#ffffff', 1), false);
});

test('trail samples remain reserved after their head expires', () => {
  const effects = createBursts(1000);
  effects.launch([0, 4, -1], '#ffd786', 1);
  const attributes = effects.points.geometry.attributes;
  const occupied = records(effects);
  const tail = occupied.find(({ index }) => attributes.aTrail.array[index] > 0);
  assert.ok(tail);
  const { index, start, life } = tail;
  effects.uniforms.uTime.value = start + life + attributes.aTrail.array[index] * 0.5;
  const before = snapshot(effects);
  const stillReserved = occupied.filter((record) =>
    record.start + record.life + attributes.aTrail.array[record.index] > effects.uniforms.uTime.value);
  assert.equal(effects.burst([9, 9, 0], '#ffffff', 1001 - stillReserved.length), false);
  assert.deepEqual(snapshot(effects), before);
});

test('reset clears pending launches without replacing resources or resetting absolute time', () => {
  const effects = createBursts(1000);
  const geometry = effects.points.geometry;
  const material = effects.points.material;
  const arrays = Object.values(geometry.attributes).map(({ array }) => array);
  effects.uniforms.uTime.value = 90;
  effects.launch([0, 4, -1], '#ffd786', 1);
  effects.reset();
  assert.equal(effects.uniforms.uTime.value, 90);
  assert.equal(records(effects).length, 0);
  assert.equal(effects.points.geometry, geometry);
  assert.equal(effects.points.material, material);
  Object.values(geometry.attributes).forEach(({ array }, index) => assert.equal(array, arrays[index]));
  assert.equal(effects.launch([0, 4, -1], '#ffd786', 1), true);
  assert.ok(records(effects).every(({ start }) => start >= 90));
});

test('lower quality reduces launch emissions while retaining the same fixed geometry', () => {
  const effects = createBursts(1000);
  effects.launch([0, 4, -1], '#ffd786', 1, 'willow');
  const fullCount = records(effects).length;
  effects.reset();
  effects.setQuality(true);
  assert.equal(effects.launch([0, 4, -1], '#ffd786', 1, 'star'), true);
  assert.ok(records(effects).length < fullCount);
  assert.equal(effects.points.geometry.attributes.position.count, 1000);
  effects.reset();
  effects.burst([0, 2, 0], '#ffd786', 100);
  assert.ok(records(effects).length < 100);
});
