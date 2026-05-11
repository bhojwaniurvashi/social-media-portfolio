# Urvashi Bhojwani — Social Media Portfolio

A multi-page portfolio website showcasing social media creatives, reels, carousels, and case studies.

Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

---

## How to Run

Open `index.html` in a browser, or serve with any static file server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## How to Run Tests

```bash
npm install        # first time only
npm test           # run all tests
npm run test:watch # watch mode
npm run coverage   # with coverage report
```

---

## Where to Update Content

All portfolio content is managed in a single file: **`data.js`**. This is the only file you need to edit for most content changes.

### Changing a Section's Cover Photo

The cover photo for each section tile on the homepage is automatically picked as the **first image** entry for that section in `GALLERY_DATA`.

To change it, move the entry you want as the cover to be the **first entry** for that section's category in `GALLERY_DATA`.

**Example:** To change the cover of "Brand Creatives", move the desired entry to the top of the `// ── Creatives for website` block:

```js
// ── Creatives for website ──────────────
{ type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/YOUR_COVER.jpg', alt: 'New cover photo' },
{ type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Artboard 1 (15).jpg', alt: 'Brand creative design 1' },
// ... rest of entries
```

For video-only sections (Reels, Influencer Reels, etc.), the cover uses the `poster` field of the first video entry. To set a cover, add `poster: 'images/Reels/YourCover.jpg'` to the first video entry for that section.

---

### Changing a Section's Display Name

Section names shown on tiles are controlled by the `SECTIONS` array in `data.js`:

```js
const SECTIONS = [
  { key: 'creatives-for-website', name: 'Brand Creatives',      folder: 'Creatives for website' },
  { key: 'static-posts',          name: 'Static Posts',          folder: 'Static' },
  { key: 'festive-creatives',     name: 'Festive Creatives',     folder: 'Festive creatives' },
  // ...
];
```

| Field    | What it controls                                                           |
|----------|----------------------------------------------------------------------------|
| `key`    | Internal ID. Must match the `category` value used in `GALLERY_DATA`.       |
| `name`   | **Display name** shown on the homepage tile and the detail page heading.   |
| `folder` | The actual folder name inside `images/`. Only used for reference.           |

To rename a section, change the `name` field. Do **not** change `key` unless you also update every matching `category` in `GALLERY_DATA`.

---

### Reordering Sections

Sections appear on the homepage in the order they are listed in the `SECTIONS` array. Move an entry up or down to change its position.

---

### Adding a New Image or Video

1. Drop the file into the appropriate `images/` subfolder.
2. Add a new entry to `GALLERY_DATA` in `data.js`:

```js
// For an image:
{ type: 'image', category: 'static-posts', src: 'images/Static/My New Post.jpg', alt: 'Description of the image' },

// For a video:
{ type: 'video', category: 'reels', src: 'images/Reels/My New Reel.mp4', alt: 'Description of the video' },

// For a video with a custom poster/thumbnail:
{ type: 'video', category: 'reels', src: 'images/Reels/My New Reel.mp4', alt: 'Description', poster: 'images/Reels/MyPoster.jpg' },
```

**Field reference:**

| Field      | Required | Values                        | Description                                      |
|------------|----------|-------------------------------|--------------------------------------------------|
| `type`     | Yes      | `'image'` or `'video'`        | Determines how the item is rendered.              |
| `category` | Yes      | A `key` from `SECTIONS`       | Which section this item belongs to.               |
| `src`      | Yes      | Relative path from repo root  | Path to the file inside `images/`.                |
| `alt`      | Yes      | Text string                   | Accessibility description (shown on hover/screen readers). |
| `poster`   | No       | Relative path                 | Thumbnail image for videos.                       |

---

### Adding a New Section

1. Create a new folder inside `images/` (e.g., `images/Behind the Scenes/`).
2. Add an entry to `SECTIONS` in `data.js`:

```js
{ key: 'behind-the-scenes', name: 'Behind the Scenes', folder: 'Behind the Scenes' },
```

3. Add media entries to `GALLERY_DATA` with `category: 'behind-the-scenes'`.

The new section will automatically appear on the homepage and get its own detail page.

---

### Updating Case Studies

Case studies are defined in the `CASE_STUDIES` array in `data.js`:

```js
const CASE_STUDIES = [
  {
    id: 'instagram-growth',
    title: 'Instagram Growth System',
    desc: 'Organic growth strategy using Reels, hashtag research, and consistent posting cadence.',
    result: '300 to 2.3K followers in 3 months',
    image: 'images/Creatives for website/Artboard 1 (15).jpg',
  },
  // ...
];
```

| Field    | What it controls                                                  |
|----------|-------------------------------------------------------------------|
| `id`     | URL identifier. The detail page loads at `case-study.html?id=xxx` |
| `title`  | Heading on the card and the detail page.                          |
| `desc`   | Short description shown on the card and the detail page.          |
| `result` | Key metric/outcome highlighted on the card and detail page.       |
| `image`  | Cover image path (relative from repo root).                       |

To add a new case study, add a new object to this array. To change a cover image, update the `image` path.

---

### Updating Metrics (Results Snapshot)

The four metric cards in the "Results Snapshot" section are defined directly in `index.html` (not in `data.js`). Look for the `<section id="results">` block:

```html
<div class="metric-card">
  <span class="metric-icon">&#128101;</span>
  <span class="metric-value" data-target="15">0</span>
  <span class="metric-label">Clients Served</span>
</div>
```

| Attribute      | What to change                                          |
|----------------|---------------------------------------------------------|
| `data-target`  | The number the counter animates to (e.g., `15`, `225`). |
| Emoji code     | The icon (e.g., `&#128101;` = people, `&#128200;` = chart). |
| Label text     | The description below the number.                        |

---

### Updating Contact Info

Contact details are in `index.html` inside `<section id="contact">`:

- **Email:** Change the `href="mailto:..."` and the link text.
- **Social links:** Update the `href` on the LinkedIn and Instagram `<a>` tags.

---

### Updating Hero Section

The hero (top banner) is in `index.html` inside `<section id="hero">`:

- **Name:** `<h1>` tag
- **Tagline:** `<p class="tagline">`
- **Value proposition:** `<p class="value-prop">`
- **CTA buttons:** The three `<a>` tags inside `.hero-cta`

---

## File Structure

```
index.html          Main homepage
section.html        Section detail page (loaded via ?key=xxx)
case-study.html     Case study detail page (loaded via ?id=xxx)
data.js             All portfolio content data (edit this for content changes)
script.js           Homepage rendering logic
section.js          Section detail page logic + lightbox
style.css           All styles
images/             Media files, organized by subfolder
tests/              Vitest test suite
```

---

## Quick Reference: "I want to..."

| I want to...                        | Edit this                                             |
|--------------------------------------|------------------------------------------------------|
| Change a section cover photo         | Reorder entries in `GALLERY_DATA` in `data.js`        |
| Rename a section tile                | Change `name` in `SECTIONS` in `data.js`              |
| Reorder sections on homepage         | Reorder entries in `SECTIONS` in `data.js`            |
| Add/remove an image or video         | Add/remove entry in `GALLERY_DATA` in `data.js`       |
| Add a new section                    | Add to `SECTIONS` + `GALLERY_DATA` in `data.js`       |
| Update a case study                  | Edit `CASE_STUDIES` in `data.js`                      |
| Change metrics numbers               | Edit `data-target` in `index.html` results section    |
| Change contact email / social links  | Edit `index.html` contact section                     |
| Change hero text / tagline           | Edit `index.html` hero section                        |
