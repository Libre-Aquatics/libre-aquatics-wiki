# Libre Aquatics Wiki

A free, community-maintained **aquatics reference**: the hardware, software, and
procedures used to time and score swimming, diving, and water polo. It is the
open-reference member of the **Libre Aquatics** family of open-source aquatics tools
(Libre Aquatics Meet for meet management; Libre Aquatics Team for team management).

Read it at **https://wiki.libreaquatics.org**.

Built with [Astro](https://astro.build/) and published as a static site to GitHub
Pages. You edit plain Markdown, no coding required.

---

## Editing

All content is Markdown under `docs/`, organized by section (`equipment/`,
`meet-management/`, `team-management/`, `software/`, `vendors/`, `about/`).
The navigation tree lives in `src/data/nav.ts`; the site layout and the
Wikipedia-style skin live under `src/`.

### Edit a page
Open the matching `.md` file under `docs/` and edit the text. Markdown basics:

```
## A heading

Normal paragraph text.

- a bullet
1. a numbered step
```

Internal links point at the source file: `[Vendors](../vendors/index.md)`. The
build resolves them to site URLs and fails if a target is missing.

### Add a new article
1. Create `docs/<category>/<slug>.md`.
2. Give it front matter:
   ```yaml
   ---
   title: My Article
   tags:
     - Timing
   ---

   # My Article
   ```
3. Register it under the right section in `src/data/nav.ts`.

The `tags:` you list become **categories** (browsable at `/categories/`).

### Infoboxes (equipment pages)
Equipment entries declare a Wikipedia-style infobox in front matter; the layout
renders it in the right rail on desktop:

```yaml
---
title: Gen7 Serial Timer
tags:
  - Equipment
infoboxTitle: Gen7 Serial Timer
infobox:
  - { label: Manufacturer, value: Colorado Time Systems, href: vendors/colorado-time-systems.md }
  - { label: Part number, value: GEN7-TMR, code: true }
  - { label: Type, value: Swim timing console }
---
```

A row's `href` may be a docs-relative source path or an external URL. A value
may also mix text with `` `code` `` spans and `[links](target.md)`; the infobox
renders that inline subset.

---

## Building locally

You don't strictly need this (GitHub builds and deploys on push), but to preview:

```
npm install     # first time only
npm run dev     # http://localhost:4321
```

For a production build: `npm run build` (strict link check + static output in
`dist/`; `npm run preview` serves it, which is also how to test search).

---

## Licensing

Split, as is usual for a documentation site:

| What | Licence |
|---|---|
| Content under `docs/` | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (`LICENSE-CONTENT`) |
| Site code (`src/`, `scripts/`, `public/`, config) | MIT (`LICENSE`) |

Cited manuals, rulebooks, and datasheets stay under their own copyright and are
linked at the publisher, never hosted here. Product names and logos are their
owners' trademarks, used nominatively. Images are licensed individually and listed
on the [Image credits](docs/about/credits.md) page.

See `CONTRIBUTING.md` for sourcing standards, house style, and how to add a page.
Contact: info@libreaquatics.org.

---

## How it fits together

| File / folder | Purpose |
|---|---|
| `docs/` | All content (Markdown), organized by section |
| `src/data/nav.ts` | The site navigation tree |
| `src/layouts/`, `src/components/` | Page chrome: topbar, nav, infobox, contents box, footer |
| `src/styles/wiki.css` | The modern-Wikipedia look (serif headings, infoboxes, hatnotes) |
| `src/plugins/remark-wiki-links.mjs` | Resolves `.md` links to site URLs |
| `scripts/check-links.mjs` | Strict link check; fails the build on broken links |
| `astro.config.mjs` | Site config: base URL, integrations, Markdown pipeline |
| `public/CNAME` | Custom domain, copied into every build |
| `.github/workflows/deploy.yml` | Build + deploy to GitHub Pages |
| `CONTRIBUTING.md` | Sourcing standards, house style, how to add a page |
| `LICENSE`, `LICENSE-CONTENT` | MIT for the code, CC BY-SA 4.0 for the content |

---

## About the Libre Aquatics project

*Libre* means free, as in free and open. Libre Aquatics Wiki documents the
systems that the Libre Aquatics software works with. See `docs/about/index.md`.
