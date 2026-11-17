const transitions = {
  intro: { enter: 'tree' },
  tree: { light: 'lighting' },
  lighting: { complete: 'gift' },
  gift: { open: 'opening' },
  opening: { complete: 'globe' },
  globe: { celebrate: 'finale' },
  finale: { replay: 'intro' },
};

export function nextStage(stage, action) {
  return transitions[stage]?.[action] ?? stage;
}
