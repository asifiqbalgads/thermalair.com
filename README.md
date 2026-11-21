# Thermalair Inc. — Premium Homepage Redesign (Demo)

A custom, mobile-first, GitHub Pages–ready homepage concept for **Thermalair Inc.**
(Commercial HVAC & LEED® Green Buildings, est. 1948 — Anaheim, CA), redesigned from
[thermalair.com](https://www.thermalair.com/).

> **Demo notice:** This is a design-concept demo (`noindex`). Content, contact details,
> licenses, and project names are sourced from the original website. Photography is
> illustrative (AI-generated / stock-style) and is **not** presented as photographs of
> the named properties.

## Business facts used (from thermalair.com)
- **Phone (24/7 service):** 714-630-3200 · **Fax:** 714-630-1427
- **Email:** thermalair@thermalair.com
- **Office:** 1140 N. Red Gum Street, Anaheim, CA 92806
- **CA License #102216** (C-4, C-20, C-38) · **NV License #0042848** (L-39)
- **Union:** UA Local 250 · SMART Local 105 · MSCA certified technicians
- **Services:** Construction · Engineering & BIM Modelling · 24/7 Service & Maintenance
- **Projects named:** Montage Beverly Hills, Emerson, Ford Theatre

## Project structure
```
index.html
css/style.css
js/script.js
assets/
  images/   (hero, services, projects, about)
  logo/     (thermalair-logo.svg)
.nojekyll
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy to GitHub Pages
1. Push to GitHub (this branch / `main`).
2. Repo **Settings → Pages → Source:** deploy from branch, `/ (root)`.
3. Live URL: `https://<username>.github.io/<repo>/`

## Design notes
- Mobile-first, fully responsive (360px → 1440px+), no horizontal overflow.
- Palette: deep navy + steel blue + thermal orange + air cyan (HVAC hot/cold duality).
- Type: Archivo (display) + Inter (body) + IBM Plex Mono (technical labels).
- Vanilla HTML/CSS/JS only — no backend, no build step, relative asset paths.
- Contact form hands off via `mailto:` (no fake server submission).
