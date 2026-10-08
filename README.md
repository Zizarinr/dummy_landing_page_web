# Teknik Informatika Landing Page (Dummy)

A **dummy/design** landing page for the Informatics Engineering study program.
Everything on the page is still **placeholder** — text, numbers, images and links
are **not official data**. The current goal is design, layout and structure, not
final content.

Built with **Vite + vanilla JS** (no framework). Styles are plain CSS driven by
custom properties. Everything is data-driven from a single content file.

---

## 1. Getting Started

```bash
npm install
npm run dev       # start the dev server (usually http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Requires Node.js 18+.

---

## 2. Project Structure

```
index.html                      HTML shell (pre-paint theme script, fonts, skip link)
src/
  main.js                       Renders all sections, wires theme + navbar + reveal
  data/content.js               ★ ALL page content lives here (single source)
  styles/
    variables.css               Design tokens (colors, radius, spacing, theme)
    global.css                  Resets, shared utilities, buttons, glass, reveal
  components/                   One folder per section, each with .js + .css
    Navbar/  Hero/  Stats/  Features/  Programs/  Projects/
    StudentLife/  Achievements/  Testimonial/  CTA/  Footer/
public/assets/images/           Placeholder images
dist/                           Build output (generated — do not edit)
```

Each component's `.js` returns an HTML string; `main.js` concatenates all of
them into `#app`. Content is passed in from `content.js`, so layout and copy stay
separate.

---

## 3. Editing Content

`src/data/content.js` is the **single source of truth** for all page content.
Change values there — no need to touch the components.

```js
export const siteContent = {
  hero: {
    title: "Some headline",
    description: "Short supporting sentence.",
  },
  stats: [
    { value: "15+", label: "Years Running" }
  ],
  // ...
};
```

Rules of thumb:

- Text values are plain strings — no HTML. Use `\n` for line breaks.
- Every item needs a trailing comma **except the last** one inside `{ }` / `[ ]`.
- Data marked **DUMMY** (stats, achievements, student projects, testimonial,
  the hero floating card) is placeholder only — do not present it publicly as
  real figures.
- `navbar.links[].url` and `footer.quickLinks[].url` use `#anchors` that map to
  section `id`s. `"Berita"` still points to `#` because that section does not
  exist yet.
- Adding/removing items in an array (e.g. `programs.items`) is safe — the grid
  adapts automatically.

> A more detailed content-editing guide (`EDITOR_GUIDE.md`) is kept locally and
> git-ignored; it is not part of the published repository.

---

## 4. Images

1. Add image files (`.png` / `.webp` / `.jpg`) to `public/assets/images/`.
2. Reference them from `content.js` using a **relative path without a leading
   slash**:

   ```js
   image: "assets/images/hero.png"    // correct — works under a sub-path
   // image: "/assets/images/hero.png" // wrong — breaks on sub-path deploys
   ```

3. Always set the matching `alt` field (`imageAlt`, `imageMainAlt`,
   `imagesSmallAlt[]`, …).

The bundled placeholders are schematic graphics. The `imagesSmall[]` and
`imagesSmallAlt[]` arrays are positional — index 0 of one matches index 0 of the
other.

---

## 5. Colors & Theming

All design tokens live in `src/styles/variables.css` and are shared by the light
and dark themes via `:root` and `[data-theme="dark"]`.

**Palette / tokens**

| Token | Light | Dark | Purpose |
|---|---|---|---|
| `--navy` | `#0B2341` | `#173458` | Brand navy (surfaces on colored blocks) |
| `--navy-dark` | `#071A30` | `#071128` | Footer / CTA gradient base |
| `--blue` | `#2878E8` | `#4D8DF0` | Accent, links, highlights |
| `--blue-light` | `#EAF3FF` | `#15263F` | Subtle icon/background tint |
| `--blue-soft` | `#F3F8FF` | `#0F1F37` | Soft section background |
| `--white` | `#FFFFFF` | `#FFFFFF` | Literal white (text over navy)
| `--surface` | `#F8FBFF` | `#0A1526` | Page background |
| `--text` | `#102A43` | `#CBD9EC` | Body text |
| `--text-muted` | `#6B7C93` | `#8CA3BE` | Secondary text |
| `--border` | `#DCE8F5` | `rgba(255,255,255,.10)` | Dividers / outlines |
| `--panel` | `#FFFFFF` | `#0F1E35` | Section / card background |
| `--heading` | `#0B2341` | `#E7EFFA` | Heading text |
| `--glass-bg` | `rgba(255,255,255,.65)` | `rgba(15,31,55,.62)` | Glass surfaces |
| `--glass-border` | `rgba(255,255,255,.8)` | `rgba(255,255,255,.12)` | Glass border |
| `--shadow-color` | `rgba(11,35,65,.06)` | `rgba(0,0,0,.35)` | Shadows |

Also available: `--radius-sm` `12px`, `--radius-md` `20px`, `--radius-lg` `32px`,
`--radius-full` `9999px`, `--container` `1180px`, `--font-family`.

**Theme tokens (`--panel`, `--heading`, `--glass-*`, `--shadow-color`) are the
ones to use in components.** They keep light/dark consistent — prefer them over
raw `--white` / `--navy` when styling backgrounds and headings.

### Dark mode

- The active theme is set as `data-theme="light|dark"` on `<html>`.
- Initial theme follows the OS preference; once the user toggles, the choice is
  stored in `localStorage`.
- An inline pre-paint script in `index.html` avoids a flash of the wrong theme.
- The toggle logic is in `main.js` (`initTheme`); the button lives in the navbar
  (`#theme-toggle`). Both the light and dark palettes are defined in
  `variables.css`.

---

## 5b. Shared Utilities (`global.css`)

Reusable, theme-aware utility classes — use these instead of duplicating styles
inside components:

- `.section`, `.container`, `.section-title`, `.section-description`
- `.btn` (+ `.btn-primary`, `.btn-secondary`)
- `.glass`, `.glass-card`
- `.reveal` / `.is-visible` (scroll animation states)
- `.image-organic` (soft organic border-radius)
- `[data-reveal]` — opt an element into the scroll-reveal animation

---

## 6. Technical Notes

- **Scroll reveal**: `initReveal` in `main.js` uses `IntersectionObserver`;
  elements with `data-reveal` fade/slide in, then the animation classes are
  removed so normal hover transitions work again. Fully disabled under
  `prefers-reduced-motion`.
- **Navbar**: becomes a glass bar after scrolling (`.navbar.is-scrolled`);
  a hamburger + slide-down panel take over at ≤ 992px.
- **Accessibility**: skip link to `#konten-utama`, `:focus-visible` outlines,
  `aria-expanded` / `aria-pressed` / `aria-label` on toggles, `Esc` closes the
  mobile menu, and menu auto-closes on resize to desktop.
- **Images**: below-the-fold images use `loading="lazy"`; the hero image is
  prioritized.
- **Hardcoded UI / accessibility strings** (not editable via `content.js`):
  the skip link, the mobile-menu and theme-toggle `aria-label`s, and the
  `aria-label` on social icons. These are developer concerns, not content.

---

## 7. Not Done Yet

- **Section "Berita" (News)** is not built — its nav link still points to `#`.
- Other `#` links (e.g. project "Lihat Detail", "Tonton Profil") are intentional
  placeholders awaiting real pages/URLs.
- All copy, figures, awards and photos are placeholder and must be replaced with
  official content before launch.

---

## 8. License

ISC.