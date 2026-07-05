# Prajwal Bandi Portfolio

A responsive single-page portfolio built with plain HTML, CSS, and JavaScript.

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark mode by default
- Light/dark theme toggle with saved preference
- Smooth scrolling navigation
- Resume button that opens a real bundled PDF
- Project cards with external links
- Personal photo in the hero section

## Project Structure

- `index.html` - page structure and content
- `style.css` - visual design, layout, responsiveness, and theme styles
- `script.js` - nav behavior, reveal animations, theme toggle, and back-to-top behavior
- `assets/Prajwal-Bandi.pdf` - bundled resume used by the resume button
- `assets/Prajwal_Photo.jpg` - hero profile photo

## Current Sections

- Home
- About
- Technical Skills
- Work Experience
- Education
- Projects
- Contact

## Resume Setup

The resume button currently points to:

```html
href="assets/Prajwal-Bandi.pdf"
```

If you replace the resume file name later, update that `href` in `index.html`.

## Project Links

Current project links:

- `Policy Impact Analyzer (PIA)` - update to your final hosted/demo path when ready
- `PR Workflow Automation Tool` - points to your GitHub repository

## Theme Behavior

- Default theme: dark mode
- Toggle available in the navbar
- Theme choice is saved in browser local storage

## How to Run

Open `index.html` directly in a browser.

## GitHub Deployment Notes

This portfolio is ready to be pushed as a static site because:

- the resume is bundled inside the project
- the photo is bundled inside the project
- there are no framework or build dependencies

If you host it with GitHub Pages, make sure these files stay in the repo:

- `index.html`
- `style.css`
- `script.js`
- `assets/Prajwal-Bandi.pdf`
- `assets/Prajwal_Photo.jpg`

## Customization

- Update hero text in `index.html`
- Update About section content in `index.html`
- Update skills, experience, education, and projects in `index.html`
- Adjust colors, spacing, and responsiveness in `style.css`
- Update interactions in `script.js`
