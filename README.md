# JAHED-OS — portfolio (terminal edition)

Interactive developer portfolio for **Moksood Hossen Jahed** — same design language
as the terminal GitHub profile: carbon `#0b0f14` shell, phosphor `#39d353`,
JetBrains Mono everywhere, window chrome, boot sequence, zero emoji.

```bash
npm install     # once
npm run dev     # dev server  → http://localhost:5173
npm run build   # production  → dist/
npm run preview # serve the production build locally
```

## What's inside

| Piece | Detail |
|---|---|
| Boot sequence | types `JAHED-OS` boot log, skippable by any key/click |
| Hero | typewriter roles · interactive particle network (canvas, mouse repulsion) · lazy-loaded **three.js** scene (floating icosahedron core + orbit rings + 260-node halo) inside a terminal window |
| Command palette | `Ctrl/⌘ + K` — fuzzy-jump to sections, mail, GitHub, resume |
| About | `cat about.json` viewer + animated stat counters |
| Skills | tabbed `skill --profile` bars (framer-motion), chip cloud |
| Projects | 12 cards · filters `--all/--django/--react/--featured` · status lights · real repo links · **live GitHub feed** (`api.github.com`, Monday-of-the-dead offline fallback) |
| Experience | `journalctl`-style timeline, active-role glow |
| Education | degree cards + expandable cert tree (`cert --verify`) |
| Contact | EmailJS-ready form + SMTP-style success/error notices + geo panel |
| Chrome | scroll progress bar, CRT scanlines, marquee ticker, back-to-top, terminal footer |

## Configure (5 minutes)

Everything content-wise lives in **`src/data/content.js`** — edit there only:

1. **LinkedIn** → `PROFILE.linkedin` (currently a placeholder guess)
2. **Resume** → replace `public/resume.pdf` (a valid placeholder ships in the repo)
3. **EmailJS** → `src/components/Contact.jsx`, top of file: paste `serviceId`, `templateId`, `publicKey`.
   Until then the form validates + simulates delivery and says so in the notice.
4. Bio / skills percentages / project order — all in `content.js`.

## Deploy

**Vercel:** import repo → framework preset *Vite* → build `npm run build`, output `dist` → deploy.
**Netlify:** same settings; add `/* /index.html 200` rewrite only if you add client routing later.
SEO basics already in `index.html` (title, description, OG) — add a real `og:image` after first deploy.

## Stack

react@18 · vite@5 · bootstrap@5.3 (grid only, rest is custom CSS) · framer-motion@12 ·
three + @react-three/fiber@8 + drei@9 · @emailjs/browser · react-icons.

Notes on the roadmap: AOS / Lottie / Swiper / simple-parallax were **deliberately
dropped** — scroll reveals, reveals-on-view and the cert accordion are all handled
by framer-motion with less bundle weight, and the carousel was replaced by the
terminal cert tree which fits the design system better. The WebGL chunk is
code-split (`React.lazy`), so it streams in after first paint.
