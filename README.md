# Wedding Website (Static GitHub Pages Site)

A clean, elegant, mobile-friendly wedding website that can be hosted directly on GitHub Pages with **no build step**.

## What this website is for

This site gives family and friends one place to find all key wedding information:

- Wedding date and quick overview
- Venue information
- Day-of schedule
- RSVP instructions
- Travel and accommodation notes
- FAQ
- Photo gallery

Everything is static HTML/CSS/JS, so it is easy to edit and publish.

---

## Files included

- `index.html` → Main page (must stay in repo root)
- `style.css` → Colors, layout, responsive styles
- `script.js` → Mobile menu behavior and small UI interactions
- `assets/images/` → Placeholder images you can replace

---

## Suggested folder structure

```text
wedding-site/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── hero-placeholder.svg
        ├── gallery-1.svg
        ├── gallery-2.svg
        ├── gallery-3.svg
        ├── gallery-4.svg
        ├── gallery-5.svg
        └── gallery-6.svg
```

> Important: `index.html` must remain in the **root folder** for GitHub Pages.

---

## To edit the website

Use these quick examples:

1. **Change names in `index.html`**
   - Find the hero section and update the couple names (example: `Alex & Taylor`).
2. **Change colors in `style.css`**
   - Edit CSS variables at the top inside `:root` (for background, accent, text, etc.).
3. **Change gallery images in `assets/images`**
   - Replace `gallery-1.svg` etc. with your own files.
   - Keep file names the same OR update the image paths in `index.html`.
4. **Update RSVP link in `index.html`**
   - Find the RSVP button and replace `href="#"` with your real form URL.

Tip: Search for `EDIT HERE` comments in `index.html` to quickly find placeholders.

---

## How to replace images

### Hero image

1. Add your hero image to `assets/images/`.
2. In `style.css`, update this line in `.hero`:

```css
url("assets/images/hero-placeholder.svg")
```

Replace it with your file path (for example, `hero.jpg`).

### Gallery images

1. Put your photos in `assets/images/`.
2. In `index.html`, update each `<img src="assets/images/gallery-#.svg">` as needed.
3. Update `alt` text for accessibility.

---

## Publish to GitHub Pages

1. Push this repository to GitHub.
2. Open your repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
5. Click **Save**.
6. Wait for deployment, then open the Pages URL GitHub provides.

---

## Connect a custom domain

1. Buy or use an existing domain from your domain provider.
2. In GitHub repo **Settings → Pages**, add your domain in **Custom domain** and save.
3. In your domain DNS settings, point records to GitHub Pages:
   - Use GitHub Pages A/ALIAS/CNAME records according to GitHub documentation.
4. (Recommended) Enable **Enforce HTTPS** in GitHub Pages settings after DNS is active.
5. Allow DNS propagation (can take minutes to 48 hours).

---

## Notes for beginners

- You can edit files directly on GitHub using the web editor.
- No Node.js, package manager, or backend is required.
- If something looks wrong, confirm file paths are relative and correctly spelled.
- Keep `index.html` in the root directory so GitHub Pages can load your homepage.
