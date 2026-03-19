---
trigger: always_on
---

# Workspace Rules for Doodle Generation

- **Zero Dependencies:** Strictly use Vanilla JavaScript, HTML5 Canvas, and standard CSS. NEVER install npm packages, React, Pixi.js, or any external libraries.
- **The Doodle Aesthetic:** Visuals must be clean, flat, and minimalist. Use a soft color palette (e.g., Google's primary colors: #4285F4, #EA4335, #FBBC05, #34A853) or simple emojis for sprites. 
- **Mobile-First Inputs:** Assume the user might be on a phone. Always map `touchstart` and `mousedown` to the same core interaction logic. 
- **Graceful Failure:** Never leave `console.log` statements in the final code. Wrap initialization logic in `window.onload` or `DOMContentLoaded` to prevent execution before the canvas exists.
- **Single File Preference:** If the total line count is under 250 lines, combine the HTML, CSS, and JS into a single `index.html` file for ultimate portability.