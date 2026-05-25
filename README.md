# Happy Birthday, Dishuu 💗

Interactive birthday website inspired by [HappyBirthdayGF](https://nikitayadav19.github.io/HappyBirthdayGF/) — pastel gradients, click-to-enter, message reveals, memories, and birthday cards.

## Run

```bash
npm install
npm run dev
```

## Flow (like the reference site)

1. **Entry** — “Happy Birthday Dishuu💗” + typewriter + “Click to Enter Our World 💕”
2. **Messages** — Tap “Click Here... 💕” to reveal wishes one by one → “Enter Our Storylane 💫”
3. **Story** — Photo memories, flip birthday cards, final note, thank you

## Customize — `src/data/content.ts`

| Key | Purpose |
|-----|---------|
| `SITE.name` | Her name |
| `birthdayReasons[]` | Click-through messages (emoji + text) |
| `galleryPhotos` | Memory photos |
| `birthdayNoteCards` / `featuredBirthdayNote` | Card notes |
| `finalPersonalityCard` | Closing paragraphs |

## Tech

Next.js · Tailwind · Framer Motion · GSAP · Lenis
