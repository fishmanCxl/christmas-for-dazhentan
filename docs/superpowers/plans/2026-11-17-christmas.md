# Christmas Experience Implementation Plan

> **For agentic workers** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal** Build the approved mobile Christmas experience through its complete interaction flow.

**Architecture** A Vite static site with a single Three.js scene. HTML overlays follow an explicit experience state, procedural 3D objects share resources, and Web Audio generates the soundtrack.

**Tech Stack** JavaScript, Three.js, Vite, CSS, Web Audio, Node built-in test runner.

**Spec** ../specs/2026-11-17-christmas-design.md

## Global Constraints

- Christmas blessing copy and mobile-first portrait design.
- Hold duration 1.2 seconds, one render loop, responsive DPR cap.
- User-gesture audio initialization and background suspension.
- Use a miniature tree inside the globe until personal assets are supplied.

## Review Focus

- Repeated actions during transitions preserve one valid stage.
- Releasing a hold early cancels progress.
- Replaying restores tree, gift and particles.
- Hidden documents pause animation and audio.
- WebGL failure retains a complete accessible experience.

## Task 1 — State and page shell

- [x] Add `src/experience.test.js`, verify invalid actions and complete replay flow fail before implementation.
- [x] Implement `nextStage(stage, action)` in `src/experience.js` with explicit valid transitions.
- [x] Add `index.html`, `src/main.js` and `src/style.css` for scene overlays and semantic controls.
- [x] Run `npm test` and check all state assertions pass.

## Task 2 — Scene and sound

- [x] Add `src/scene.js` with `createScene(canvas, onComplete)` returning scene controls and canvas diagnostics.
- [x] Add `src/particles.js` for GPU snow and bounded pooled fireworks.
- [x] Add `src/audio.js` for gesture-started audio, stage cues and mute controls.
- [x] Connect real long-press, drag, gift and globe interactions in `src/main.js`.
- [x] Run `npm test` and `npm run build`.

## Task 3 — Browser checks and delivery

- [x] Exercise the whole flow, interrupted hold, mute, replay and fallback in Playwright. Browser plugin is absent in this session.
- [x] Inspect actual mobile and desktop screenshots against the generated concept.
- [x] Check overflow, console errors, requests and resource sizes, fix observed issues and rerun.
- [ ] Package the exact static build and publish through Sites if the environment supports its source workflow.
- [ ] Report actual verification and any remaining deployment or real-device limitations.

## Verification record

Three Node tests pass. Browser checks cover 390×844 full flow, 360×640, 430×932 and 1440×900 layouts, interrupted hold, swipe, mute persistence, replay and keyboard fallback. Main flow has zero application errors and zero failed resource requests. Canvas DPR is capped at 1.5, with 34 steady-scene draw calls in the tested mobile viewport.

Fresh independent review found synthesized-click activation and short-landscape clipping. Both issues were reproduced by a browser regression check and fixed. A user-reported refresh flash was reproduced with a four-second delayed entry script. Styles now load directly from the HTML head. A Node regression test, the delayed-script check and three repeated refreshes pass.

Publishing initially required an additional source-export authorization from automatic approval review. The user explicitly approved uploading this project and publishing a private preview. The authenticated account owns the selected Site, whose access policy is private. Real iPhone, Android and WeChat performance remains to be measured.
