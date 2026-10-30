# Justice Trésor Ngom — Responsive compatibility patch

This package contains a responsive CSS patch intended for the existing academic website.

## Files
- `responsive.css` — layout refinements for phones, tablets and laptops.

## Installation
1. Open the GitHub repository: https://github.com/justicengom/Justicengom.github.io
2. Upload `responsive.css` to the repository root.
3. Open `index.html` and find the existing stylesheet links:
   ```html
   <link rel="stylesheet" href="styles.css">
   <link rel="stylesheet" href="theme.css">
   ```
4. Add the following line immediately after them:
   ```html
   <link rel="stylesheet" href="responsive.css">
   ```
5. Commit the changes and wait for GitHub Pages to redeploy.
6. On your phone, refresh the site. If the old layout remains, clear the browser cache or open a private/incognito tab.

## Responsive breakpoints
- Up to 380px: compact phones
- Up to 700px: phones
- Up to 980px: tablets and smaller screens
- 981–1200px: compact laptops

The patch preserves the existing page content, colours and typography. It does not replace the existing HTML, stylesheets or JavaScript.
