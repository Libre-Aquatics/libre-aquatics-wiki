---
title: Accessibility
tags:
  - Reference
---

Libre Aquatics Wiki aims to be usable by everyone, including people who use screen readers,
keyboard-only navigation, screen magnification, or other assistive technology.

## Conformance target

The site targets [WCAG 2.1](https://www.w3.org/TR/WCAG21/) level AA. It is built with
[Astro](https://astro.build/) on semantic HTML with keyboard navigation, a
skip-to-content link, ARIA landmarks, visible focus indicators, and light and dark
themes with sufficient colour contrast.

## Features

- Full keyboard navigation of the sidebar, search, and table of contents.
- A "skip to content" link for keyboard and screen-reader users.
- Text that reflows without horizontal scrolling and can be zoomed to 200%.
- Colour is never the only way information is conveyed; inline links are underlined.
- The `prefers-reduced-motion` setting is respected.
- Light and dark themes, both meeting AA contrast.

## Known limitations

- Any diagrams or images must carry descriptive alternative text; please report any
  that are missing or inadequate.
- Some third-party or embedded content may not yet meet the same standard.

## Reporting a problem

If you hit an accessibility barrier, please open an issue on the wiki's repository,
or contact a maintainer, describing the page and what went wrong. These reports are
welcome.
