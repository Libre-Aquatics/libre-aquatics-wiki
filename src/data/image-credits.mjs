// Author and licence of every photograph under public/assets/, keyed by its
// site path. This is the machine-readable twin of the table in
// docs/about/credits.md: BaseLayout.astro turns an entry into ImageObject
// licence metadata (creator, license, creditText) for image search, and
// scripts/check-seo.mjs fails the build when a photograph on a page has no
// entry here. Add a row to both places whenever an image is added.
//
// Plain .mjs so the check script, which runs outside Astro, can import it.

const CC_BY_SA_4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const OWN_PHOTO = { creator: 'Ethan Herstedt', license: CC_BY_SA_4 };

export const IMAGE_CREDITS = {
  '/assets/hs-200-flagpole-mount.jpg': OWN_PHOTO,
  '/assets/gen7-serial-timer.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-rear-panel.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-underside.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-front-panel.webp': OWN_PHOTO,
  '/assets/gen7-serial-timer-front-panel-lit.webp': OWN_PHOTO,
};

// Where a reader finds the terms for every image; Google shows it as the
// "license details" link beside a result in image search.
export const CREDITS_PAGE = '/about/credits/';
