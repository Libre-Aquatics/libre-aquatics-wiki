// One page per tag at /categories/<slug>/ (src/pages/categories/[tag].astro).
// Each carries a short intro of its own so the page says something beyond a
// list of links, and a fuller title for results lists.
//
// `index` decides whether the page may appear in search results. Only tags
// that cut across the section tree are indexed: Equipment and Software each
// mirror a section overview (/equipment/, /software/), which is the page that
// should rank for those searches, and Reference is a meta tag for vendor and
// about pages. Tags with too few articles to make a useful page stay out too.
//
// Intro links are `[text](path.md)` with docs-root-relative paths, the same
// form the Main Page hooks use; scripts/check-links.mjs checks them.
//
// Plain .mjs so astro.config.mjs can read `index` for the sitemap filter.

/**
 * @typedef {{ seoTitle: string, index: boolean, intro: string }} CategoryPage
 * @type {Record<string, CategoryPage>}
 */
export const CATEGORY_PAGES = {
  Timing: {
    seoTitle: 'Swim timing equipment and software',
    index: true,
    intro:
      'The Timing category covers the equipment that measures a race. A ' +
      '[timing console](equipment/swimming/timers/index.md) sits at the head of the system and runs the ' +
      'clock, a [start system](equipment/swimming/starter/index.md) starts it, and each lane is stopped by a ' +
      '[touchpad](equipment/swimming/touchpad/index.md) with ' +
      '[backup pushbuttons](equipment/swimming/semi-automatic/pushbutton/index.md) behind it. Relay take-off ' +
      'platforms, pace clocks, the display programs that read the console, and ' +
      '[semi-automatic timing](equipment/swimming/semi-automatic/index.md), where officials stop the clock ' +
      'by hand, are listed here as well.',
  },
  Swimming: {
    seoTitle: 'Swimming competition equipment and software',
    index: true,
    intro:
      'The Swimming category covers the equipment and software used to run a pool swimming competition. ' +
      'It lists the lane hardware made for the sport, such as ' +
      '[touchpads](equipment/swimming/touchpad/index.md), ' +
      '[backstroke start devices](equipment/swimming/backstroke-start/index.md) and ' +
      '[relay take-off platforms](equipment/swimming/relay-judging/index.md), alongside start systems, the ' +
      'meet and team programs clubs use, and the [file formats](software/sdif.md) those programs exchange.',
  },
  Scoring: {
    seoTitle: 'Aquatics scoreboards and scoring displays',
    index: true,
    intro:
      'The Scoring category covers how results reach athletes and spectators: ' +
      '[scoreboards](equipment/common/scoreboard/index.md), the ' +
      '[controllers and radio links](equipment/common/scoreboard-control/index.md) that carry data from a ' +
      'console or computer to a board, and the display programs that lay out times, places and scores. ' +
      'Most of these boards and controllers serve several sports from the same hardware.',
  },
  'Water polo': {
    seoTitle: 'Water polo scoreboards and displays',
    index: true,
    intro:
      'The Water polo category lists the equipment and software used at water polo matches. A match runs a ' +
      'game clock and a shot clock at the same time, so its displays and table controllers have to show ' +
      'both. Most of the boards and display programs here are shared with other sports; the ' +
      '[water polo equipment](equipment/water-polo/index.md) overview covers what is specific to the game.',
  },
  Diving: {
    seoTitle: 'Diving scoreboards and display software',
    index: true,
    intro:
      "The Diving category lists the displays and software used at diving competitions. Diving is judged rather than " +
      "timed, so a board shows the judges' awards and the running score instead of a race time. The " +
      '[diving equipment](equipment/diving/index.md) overview covers the rest of what a diving meet needs.',
  },
  'Meet management': {
    seoTitle: 'Swim meet management software',
    index: true,
    intro:
      'The Meet management category covers the programs that build, seed, run and score a swimming ' +
      'competition, such as [Hy-Tek Meet Manager](software/hy-tek-meet-manager.md), and the file formats ' +
      'they use to take in ' +
      'entries and publish results, among them [SDIF](software/sdif.md), [HY3](software/hy3.md) and ' +
      '[Lenex](software/lenex.md).',
  },
  Equipment: {
    seoTitle: 'Aquatics equipment articles',
    index: false,
    intro:
      'This category holds every article on a piece of competition hardware, across all sports and makers. The ' +
      '[equipment overview](equipment/index.md) arranges the same articles by role.',
  },
  Software: {
    seoTitle: 'Aquatics software articles',
    index: false,
    intro:
      'This category holds every article on a program, a data format or a software publisher. The ' +
      '[software overview](software/index.md) arranges the same articles by purpose.',
  },
  'Team management': {
    seoTitle: 'Swim team management software',
    index: false,
    intro:
      "The Team management category covers the programs a club uses to keep its roster, its swimmers' results and best times, and " +
      'its meet entries, such as [Hy-Tek Team Manager](software/hy-tek-team-manager.md).',
  },
  'Artistic swimming': {
    seoTitle: 'Artistic swimming display software',
    index: false,
    intro: 'The Artistic swimming category lists the display software used at artistic swimming events.',
  },
  Reference: {
    seoTitle: 'Reference pages',
    index: false,
    intro:
      'The Reference category holds the pages on the companies that make aquatics equipment and software, ' +
      'the data formats they use, and how this wiki is written and sourced.',
  },
};

/**
 * The page settings for a tag. A tag with no entry above still gets a page,
 * listing its articles, but is kept out of results until it has an intro.
 * @param {string} tag
 * @returns {CategoryPage}
 */
export function categoryPage(tag) {
  return CATEGORY_PAGES[tag] ?? { seoTitle: `${tag} articles`, index: false, intro: '' };
}
