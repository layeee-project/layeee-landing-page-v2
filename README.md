# Layeee web (Tailwind)

Landing site for Layeee (S1 FDM printer + app). Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

Fonts (Google Sans, Space Mono) load through `next/font/google` at build time, so the first build needs internet access.

## How Tailwind is set up

- `src/app/globals.css` holds the design tokens as CSS variables (`--bg`, `--fg`, `--muted`, `--line`, `--accent` ...) and maps them into Tailwind with `@theme inline`, so you write `bg-bg`, `text-muted`, `border-line`, `text-accent-ink`, and they switch with the theme automatically.
- Fonts: `font-sans` = Google Sans, `font-mono` = Space Mono. Body uses `font-sans`; titles (`h1`–`h4`) use `font-mono` through a base rule in `globals.css`.
- `section-width` is a custom utility (the wide container, 1800px max).
- `src/lib/ui.ts` has `cx()` and a few shared class strings (`monoTag`, `inset`, `dots22`). Anything used as an element lives in `src/components/ui/` instead (`Button`, `Chip`, `SectionHeading` ...).

## Theme

Light is the default: no `data-theme` on `<html>` at first load and no `prefers-color-scheme` rule. The toggle in `layout/ThemeToggle.tsx` sets `data-theme="dark"` / `"light"`, and `:root[data-theme="dark"]` swaps the variables.

## Structure

```
src/app/                  layout.tsx (fonts, metadata, <Sprite />), page.tsx (list of sections), globals.css
src/components/ui/        small reusable pieces: Button, ButtonRow, Chip, Container, Icon,
                          IconButton, InlineLink, PillList, Section, SectionHeading
src/components/layout/    Brand, Header, ThemeToggle, Footer, Sprite
src/components/graphics/  Stack (isometric layer stack)
src/components/sections/  one folder per section that has its own parts (faq/Faq + FaqItem ...);
                          Hero and Closing are single files
src/data/                 content only, no layout: nav, faqs, features, ideas, plans,
                          materials, anywhere, how-it-works, product-frame
src/lib/ui.ts             cx() and a few shared class strings
```

To change copy, edit `src/data/`. To change how a section looks, edit its folder in `src/components/sections/`.
