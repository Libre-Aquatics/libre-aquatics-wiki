# Contributing to Libre Aquatics Wiki

Thanks for helping. This is a reference for the equipment, timing hardware, and meet
operations behind competitive aquatics, written to be useful at any pool rather than
tied to one institution. Corrections from people who actually run this gear are the
most valuable thing the project can receive.

## Ways to help

- **Report an error.** Open an issue. A wrong part number, a superseded spec, or a
  model that never shipped is worth reporting even without a source; say what you
  know and how you know it.
- **Fill a gap.** The diving, water polo, common-equipment, meet-management, and
  team-management sections are structural outlines waiting for articles.
- **Edit a page.** Every article is a Markdown file under `docs/`. Edit it on GitHub
  or in a clone and open a pull request.

If you have hands-on experience with a system, say so in the issue or PR. Operator
knowledge often contradicts the manual, and where it does, we want to document both.

## Licensing of contributions

Contributions are accepted under the same licenses the project uses:

- Content (anything under `docs/`): **CC BY-SA 4.0**. See `LICENSE-CONTENT`.
- Code (`src/`, `scripts/`, `public/`, build config): **MIT**. See `LICENSE`.

By opening a pull request you agree your contribution may be published under those
terms. Only submit material you wrote or are entitled to license this way. Do not
paste text from a vendor manual, rulebook, datasheet, or another wiki.

## Sourcing standards

This is the part that matters most, and it is stricter than most wikis.

- **Cite everything substantive.** Facts carry footnotes. A specification, a date, a
  part number, or a claim about how equipment behaves needs a source.
- **Start with primary sources**, then corroborate independently. Vendor manuals,
  datasheets, and governing-body rules are the base layer; patents, industry press,
  and independent reporting confirm the parts that vendors have an interest in.
- **Do not rest an article on marketing copy.** A vendor's "first", "fastest", or
  "industry standard" is the vendor's claim and is written as such: "CTS describes
  the unit as...", not "the unit is...".
- **When sources disagree, say so in the text.** Do not silently pick a winner. Name
  both figures, prefer the more authoritative or specific one, and explain why.
- **Read the whole document before writing.** Critical specifications routinely live
  in an appendix rather than the overview.
- **Cite and link, never host.** Link a manual or rulebook at the publisher's own
  URL. Never upload a PDF to this repository or mirror a copyrighted document.

Citations are Markdown footnotes with a short linked title, roughly one line each:

```markdown
Text making a claim.[^gen7]

[^gen7]: [Colorado Time Systems, Gen7 Serial Timer User Guide](https://www.coloradotime.com), Appendix A.
```

Footnote IDs are lowercase mnemonics (`[^gen7]`), never numbers, and an existing ID
is never renamed.

## House style

The register is a plain encyclopedia, flat and declarative, uniform across the whole
wiki. It is deliberately unexciting.

- **No bold anywhere in article content.** Not for field labels, not for the subject
  term in the lead. Headings carry the structure.
- **No marketing language.** Cut evaluative superlatives and lively copy:
  "cutting-edge", "gold standard", "the backbone of", "seamless". If the phrase is a
  vendor's, quote and attribute it. Otherwise delete it.
- **No em dashes** (`—`). Use a comma, colon, parentheses, semicolon, or two
  sentences.
- **En dashes** (`–`) are required in numeric ranges and year spans: `0–45 °C`,
  `400–5000 Hz`, `Facilities Rules 2021–2025`. These are not em dashes and must not
  be downgraded to hyphens.
- **Headings in sentence case** in the source. CSS renders them title-cased.
- **A start system is never a "console."** Reserve "console" for timing consoles
  (System 6, OmniSport 2000, Gen7). A start system is a start system, a starter, or
  a unit.
- **Generic background belongs on the section overview**, not repeated on every
  product page. History, how a class of equipment works, and rules that apply to all
  products go in that section's `index.md`; a product page states only what is
  specific to it and links back.

Article shape: lead paragraph, topical sections, specifications or details, "See
also", then "References".

## Mechanics

### Adding an article

1. Create `docs/<category>/<slug>.md` with front matter:

   ```yaml
   ---
   title: My Article
   tags:
     - Equipment
     - Timing
   ---
   ```

2. Register it under the right section in `src/data/nav.ts`, or it will not appear
   in the navigation.

You do not need to write a search-engine description. One is derived from the
article's opening paragraph at build time. Add an optional `description:` to the
front matter only when that derived text reads badly, for example when the lead
opens by saying the article is a stub:

```yaml
description: >-
  One sentence, about 150 characters, describing the subject rather than the page.
```

`tags:` come from a fixed taxonomy and become the browsable categories at
`/categories/`:

- Sport: Swimming, Diving, Water polo, Artistic swimming, Open water
- Program: Masters, Para-aquatics, Youth
- Topic: Timing, Scoring, Equipment, Officiating, Rules & formats, Meet management,
  Team management, Software, Facilities
- Meta: Reference

### Links, and the one gotcha worth knowing

Internal links point at the source file, and the build rewrites them to routes:

```markdown
[Colorado Time Systems](../../vendors/colorado-time-systems.md)
```

**Body links resolve from the file's own directory. Front-matter paths resolve from
`docs/` with no `../` prefix.** An infobox `href` is written
`vendors/colorado-time-systems.md`, not `../../vendors/...`. Getting this backwards
fails the link check with no other symptom.

### Infoboxes

Equipment and vendor pages declare an infobox in front matter; it renders in the
right rail on desktop. Infoboxes are text-only, with no images.

```yaml
infoboxTitle: Gen7 Serial Timer
infobox:
  - { label: Manufacturer, value: Colorado Time Systems, href: vendors/colorado-time-systems.md }
  - { label: Part number, value: GEN7-TMR, code: true }
  - { label: Type, value: Swim timing console }
```

Quote values that are bare numbers, or YAML will read them as numbers and drop
formatting.

### Images

Almost every contribution should be text-only. If you do submit a photograph:

- It must be your own work, or public domain, or under CC0 or CC BY. Nothing with a
  non-commercial (`-NC`) or no-derivatives (`-ND`) clause.
- Never scrape images from a catalog, manual, or vendor site.
- No vendor logos.
- Add descriptive `alt` text, and record author, license, and source in
  `docs/about/credits.md`.

Shape matters a little. An article's first photograph is also inset into the
social preview card that appears when the page is shared, at a fixed width with
the height scaled to match, so a very tall portrait shot crowds that card and
squeezes the text. Landscape or roughly square works best, at 1200 px or more on
the long edge. You do not need to supply a second cropped copy: one photograph
serves both the article and the card.

### Building

```sh
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # strict link check + production build; must exit 0
npm run preview  # serve the build; the only way to test search
```

`npm run build` runs `scripts/check-links.mjs` first and fails on any broken internal
link. CI runs the same command, so a build that passes locally passes there.

## Accessibility

The site targets WCAG 2.1 AA. Keep text contrast at 4.5:1 or better, leave inline
links underlined, and give every image descriptive `alt` text.

## Contact

Questions, corrections, and rights-holder requests: **info@libreaquatics.org**.

If you hold rights to material published here and want it removed or corrected,
email that address or open an issue. Requests are reviewed promptly.
