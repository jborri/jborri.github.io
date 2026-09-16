# Joseph Borri Portfolio

Personal portfolio for data analysis, data visualization, scientific-data work, and selected creative practice.

## Structure

- **Projects** — four featured analytical projects, with an orb-based browser and conventional project index.
- **Art** — gallery structure ready for selected visual work.
- **Writing** — index structure for essays, notes, and poetry.
- **Photography** — gallery structure for photographs and visual studies.
- **About** — concise professional background, general resume, and contact route.

The creative sections intentionally display honest empty states until real work is selected. They do not use fictional examples or placeholder images.

## Updating content

Project and creative-collection content lives in `js/index.js` inside `portfolioData`.

- Add art and photography items with an image path, title, description, and alt text.
- Add writing items with a date, display date, title, description, and URL.
- Set `profile.linkedinUrl` after confirming the canonical profile URL.
- Keep the general resume at `images/resume.pdf`.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Accessibility

The site includes keyboard project controls, conventional project navigation, visible focus states, reduced-motion support, responsive layouts, semantic headings, and direct access to the resume and repositories.
