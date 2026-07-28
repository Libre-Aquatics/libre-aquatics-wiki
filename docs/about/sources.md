---
title: Sources & citations
tags:
  - Reference
---

Libre Aquatics Wiki is a reference, so articles should say where their facts come from. This
page sets the conventions, which also keep the wiki on the right side of copyright.

## Licensing

The wiki's text is published under the
[Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)
(CC BY-SA 4.0). Anyone may reuse and adapt it, including commercially, provided they
credit the source and license any adaptation on the same terms. The site code is
published separately under the MIT License.

Two things that licence does not cover. Sources cited by an article stay under their
own copyright: a manual or rulebook is linked at its publisher, never reproduced here,
and quoting a fact from it does not place the document under our licence. Product
names, company names, and logos remain the trademarks of their owners, as described
under [Trademarks](#trademarks) below.

Images are licensed individually and listed on [Image credits](credits.md). To report
material that infringes your rights, email info@libreaquatics.org.

## Cite and link, never host

- Link to the official copy of a manual, rulebook, or spec on the publisher's
  own site. Do not upload or mirror vendor manuals or rulebooks here; that would
  republish a whole copyrighted work.
- Keep a full citation, not just a URL, so a reference survives a broken link:
  document number, title, version/date, and the official link. Example:
  *Colorado Time Systems, F1034, Gen7 Serial Timer User Guide,
  [coloradotime.com](https://www.coloradotime.com).*
- Facts are free; wording is not. Rewrite the useful information (specs,
  procedures, part numbers) in your own words with a citation. Do not copy manual or
  rulebook prose verbatim, and redraw diagrams rather than reproducing them.

## Images

- Prefer your own photographs or images used with the copyright holder's
  written permission.
- Do not publish images scraped from catalogs, manuals, or the web. An entry is
  useful text-first; add a photo only once it is properly licensed.
- Credit and license every non-original image, and remove anything on a rights
  holder's request. The running list is on [Image credits](credits.md).
- Give every image descriptive `alt` text so screen-reader users get the same
  information; use empty `alt` only for purely decorative images (WCAG 1.1.1). See
  [Accessibility](accessibility.md).

### Where to find freely licensed photos

Photos here come from repositories of public-domain or freely licensed media. Prefer
public domain or CC0 (no attribution burden); CC BY is acceptable with a credit line.
Share-alike (`-SA`) images are also acceptable, because the wiki's own text is
CC BY-SA 4.0 and each image is credited with its own licence on
[Image credits](credits.md). Do not use images under a non-commercial (`-NC`) or
no-derivatives (`-ND`) clause: those terms conflict with the wiki's licence and would
make the page non-free. Always confirm the licence on the file's own description page,
not a search thumbnail.

- [Wikimedia Commons](https://commons.wikimedia.org): each file states its licence;
  categories such as *Swimming competitions* and *Starting blocks (swimming)* are good
  starting points.
- [Openverse](https://openverse.org): aggregates 800M+ works and filters by licence, but
  re-verify each result on its origin page.
- U.S. federal government imagery (for example U.S. Navy/DoD photos) is public domain and
  a reliable source of competition and pool photographs.

Facts to record for the [credits](credits.md) list: author, licence and version, and the
source URL, captured when the image is downloaded.

## Trademarks

Product and company names (and logos) are the trademarks of their owners. Naming a
product to refer to it is fine; Libre Aquatics Wiki is not affiliated with or endorsed by any
manufacturer or governing body.

## Icons

If an article needs an icon, use one from a permissively licensed set and embed it as
inline SVG (or an asset under `assets/`), noting the set and licence in the
[credits](credits.md) list. Suitable sets include:

| Set | Licence |
| --- | --- |
| Material Design Icons (preferred) | Apache 2.0 |
| Octicons | MIT |
| FontAwesome Free | icons CC BY 4.0, font SIL OFL 1.1 |

Do not use icon sets made of company and brand logos (for example Simple Icons):
reproducing a logo conflicts with the nominative-use rule above. Give a meaningful icon an
accessible label; a purely decorative icon needs none.

## Fonts

The preview cards that appear when a page is shared on social media are drawn at build
time in Noto Sans, licensed under the
[SIL Open Font License 1.1](https://openfontlicense.org/). The font files and a copy of
that licence are kept in the wiki's repository under `src/fonts/`. They are used only
while the site is being built: the pages themselves are set in the reader's own system
fonts, so no font is served to visitors.
