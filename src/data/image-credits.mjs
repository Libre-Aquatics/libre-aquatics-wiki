// Author and licence of every photograph under public/assets/, keyed by its
// site path. This is the machine-readable twin of the table in
// docs/about/credits.md: photoObjects() in src/lib/seo.ts turns an entry into
// ImageObject licence metadata for image search, and scripts/check-seo.mjs
// fails the build when a photograph on a page has no entry here, or when one
// of our own photographs is missing that metadata. Add a row to both places
// whenever an image is added.
//
// `owned: true` marks a photograph the project holds the rights to. Only those
// carry license, acquireLicensePage, creator, creditText and copyrightNotice;
// a third-party image keeps its attribution on the credits page and makes no
// licensing claim in structured data. `year` is the year the photograph was
// taken (for copyrightNotice), recorded here because the files carry no EXIF
// date.
//
// Plain .mjs so the check script, which runs outside Astro, can import it.

const CC_BY_SA_4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const OWN_PHOTO = { creator: 'Ethan Herstedt', license: CC_BY_SA_4, owned: true, year: 2026 };

export const IMAGE_CREDITS = {
  '/assets/hs-200-flagpole-mount.jpg': OWN_PHOTO,
  '/assets/gen7-serial-timer.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-rear-panel.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-underside.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-front-panel.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-front-panel-lit.webp': OWN_PHOTO,
};

// Short names for the licence URLs above, used in creditText and
// copyrightNotice. A licence used here must have a name.
export const LICENSE_NAMES = {
  [CC_BY_SA_4]: 'CC BY-SA 4.0',
};

// Where a reader finds the terms for every image; Google shows it as the
// "license details" link beside a result in image search. The credits page
// states that original photographs may be reused under CC BY-SA 4.0.
export const CREDITS_PAGE = '/about/credits/';
