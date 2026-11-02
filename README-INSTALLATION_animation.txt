JUSTICE TRESOR NGOM — WEBSITE ANIMATION PACKAGE
================================================

CONTENTS
- animations.css: homepage entrance, navigation underline, hover effects,
  scroll-reveal styling and reduced-motion accessibility.
- animations.js: reveals page sections and common cards as visitors scroll.
  No external library is required.

INSTALLATION

1. Open your GitHub repository:
   https://github.com/justicengom/justicetngom.github.io

2. Upload BOTH animations.css and animations.js to the repository ROOT,
   alongside index.html and your existing CSS/JS files.

3. Open index.html. Inside <head>, find your existing stylesheet links.
   Add this line AFTER all existing CSS links and BEFORE </head>:

   <link rel="stylesheet" href="animations.css">

   Example:
   <link rel="stylesheet" href="styles.css">
   <link rel="stylesheet" href="theme.css">
   <link rel="stylesheet" href="responsive.css">
   <link rel="stylesheet" href="animations.css">
   </head>

4. Near the bottom of index.html, find </body>.
   Add this line IMMEDIATELY BEFORE </body>:

   <script src="animations.js"></script>
   </body>

5. Commit the changes and wait for GitHub Pages to publish.

6. Refresh your website:
   Mac: Command + Shift + R
   Windows: Ctrl + Shift + R

WHAT YOU GET
- Smooth in-page scrolling.
- Subtle homepage entrance.
- Animated underline on common navigation links.
- Hover lift on common research/publication cards.
- Gentle profile/gallery image hover effects.
- Sections and cards reveal as visitors scroll.
- Respects the visitor's reduced-motion accessibility setting.

IMPORTANT
This is an ADD-ON, not a replacement for index.html or your existing files.
The selectors support common IDs/classes such as #home, #hero, .hero,
.card and .publication-card. If your site uses different class names,
some effects may need selector adjustments. The website will still work
without changing your existing content.
