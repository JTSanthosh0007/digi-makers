---
description: Scaffolds, builds, and tests a minimally playable browser mini-game.
---

# Workflow: Interactive Doodle Generation

**Objective:** Build a single-mechanic, vanilla HTML/JS/CSS web game based on the user's concept.

**Execution Steps:**
1. **Plan & Scaffold:**
   - Create a new directory named after the game concept.
   - Generate `index.html`, `style.css`, and `game.js`.
   - Ensure the canvas auto-resizes to fit the browser window while maintaining aspect ratio.
2. **Draft the Logic (Load Skill):**
   - *Agent Action:* Trigger the `@canvas_game_engine` skill to establish the `requestAnimationFrame` game loop and event listeners.
3. **Implement Core Mechanic:**
   - Build out the specific entities, collision detection, and win/loss states based on the user's prompt.
   - Use simple geometric shapes or emojis as placeholder graphics to keep it minimal.
4. **Browser Verification:**
   - *Agent Action:* Open the built-in Browser Preview.
   - Test start states, interaction (clicking/tapping), and verify that the game resets correctly on game over.
5. **Artifact Generation:**
   - Create a Task Artifact containing a summary of the controls, a browser screenshot of the running game, and a checklist of implemented features for user review.