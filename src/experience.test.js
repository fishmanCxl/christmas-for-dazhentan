import test from 'node:test';
import assert from 'node:assert/strict';
import { nextStage } from './experience.js';

test('complete experience returns to the invitation on replay', () => {
  let stage = 'intro';
  const actions = ['enter', 'light', 'complete', 'open', 'complete', 'celebrate', 'replay'];
  const expected = ['tree', 'lighting', 'gift', 'opening', 'globe', 'finale', 'intro'];
  actions.forEach((action, index) => {
    stage = nextStage(stage, action);
    assert.equal(stage, expected[index]);
  });
});

test('repeated and premature actions preserve the active stage', () => {
  assert.equal(nextStage('intro', 'open'), 'intro');
  assert.equal(nextStage('tree', 'complete'), 'tree');
  assert.equal(nextStage('lighting', 'light'), 'lighting');
  assert.equal(nextStage('opening', 'open'), 'opening');
  assert.equal(nextStage('finale', 'complete'), 'finale');
});
