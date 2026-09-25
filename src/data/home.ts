// Curated content for the Main Page (src/pages/index.astro). Everything here
// names articles by their docs-relative source path, the same form nav.ts
// uses, so scripts/check-links.mjs can verify each one and a renamed article
// fails the build instead of leaving a dead link on the front page. Lists of
// articles, counts and dates are not kept here: src/lib/home.ts derives them
// from the nav tree and the content collection.

/**
 * Articles eligible for the "Featured article" panel. One is shown per build,
 * chosen by ISO week, so the panel changes without anyone editing it. Pick
 * full, well-cited articles, not stubs.
 */
export const FEATURED: string[] = [
  'equipment/swimming/timers/gen7-serial.md',
  'equipment/swimming/starter/hs-200.md',
  'software/sdif.md',
  'software/lenex.md',
  'software/hy-tek-meet-manager.md',
  'equipment/swimming/touchpad/index.md',
  'equipment/swimming/starter/index.md',
  'vendors/hy-tek.md',
];

/**
 * "Did you know" hooks. Each is one sentence, completing "Did you know...",
 * and states a fact that the linked article already carries with a citation;
 * the hook itself is never the only place a claim appears. `[text](path.md)`
 * marks the link, with a docs-relative path. Write each in the wiki's own
 * words: these ship in the page like any article prose.
 */
export const DID_YOU_KNOW: string[] = [
  'that the Daktronics [HS-200](equipment/swimming/starter/hs-200.md) closes one switch contact and opens another at the start, so its start pulse can drive consoles from more than one maker?',
  'that version 3 of [SDIF](software/sdif.md) added the D3 record because a constructed swimmer ID runs to fourteen characters, two more than the older D0 record holds?',
  'that The Active Network bought [Hy-Tek Sports Software](vendors/hy-tek.md) in 2008, but the old Hy-Tek web address kept its own site until 2018?',
  'that the [Gen7 Legacy Timer](equipment/swimming/timers/gen7-legacy.md) shares its case with the Gen7 Serial Timer, and the two consoles are told apart by their deck cabling?',
  'that the touch boards used at the 1964 Tokyo Olympic Games sensed a [finish](equipment/swimming/touchpad/index.md) pneumatically, and electronic sensing came later?',
  "that timekeepers start their watches on a [start system](equipment/swimming/starter/index.md)'s strobe rather than its horn, because the sound reaches a distant timekeeper late?",
  'that a [Lenex](software/lenex.md) meet file is XML with a .lef extension, and is usually exchanged zipped as .lxf?',
];

/** How many hooks show at once; the window rotates weekly like the feature. */
export const DID_YOU_KNOW_SHOWN = 4;

/**
 * Portal boxes. `sections` select nav groups whose leaf articles the box
 * lists and counts: a string ending `.md` matches a group by its index page,
 * anything else by its nav title (for groups with no index page). `href` is
 * the box's "all articles" destination.
 */
export interface Portal {
  title: string;
  blurb: string;
  href: string;
  sections: string[];
}

export const PORTALS: Portal[] = [
  {
    title: 'Timing consoles',
    blurb: 'The consoles that run the race clock and collect each lane\'s finish.',
    href: 'equipment/swimming/timers/index.md',
    sections: ['equipment/swimming/timers/index.md'],
  },
  {
    title: 'Start systems',
    blurb: 'Starters, horns, strobes and the units that send the start pulse.',
    href: 'equipment/swimming/starter/index.md',
    sections: ['equipment/swimming/starter/index.md'],
  },
  {
    title: 'Lane hardware',
    blurb: 'Touchpads, backup pushbuttons, relay platforms, lane speakers and backstroke devices.',
    href: 'equipment/index.md',
    sections: [
      'equipment/swimming/touchpad/index.md',
      'equipment/swimming/semi-automatic/index.md',
      'equipment/swimming/relay-judging/index.md',
      'equipment/swimming/external-speaker/index.md',
      'equipment/swimming/backstroke-start/index.md',
    ],
  },
  {
    title: 'Scoreboards and clocks',
    blurb: 'Scoreboards, pace clocks and the controllers that drive them.',
    href: 'equipment/common/index.md',
    sections: ['equipment/common/index.md'],
  },
  {
    title: 'Meet and team software',
    blurb: 'Programs for running a meet and for managing a club.',
    href: 'software/index.md',
    sections: ['meet-management/index.md', 'team-management/index.md'],
  },
  {
    title: 'File formats',
    blurb: 'The formats that carry entries and results between programs, and the tools that read them.',
    href: 'software/index.md',
    sections: ['Data Exchange'],
  },
  {
    title: 'Display software',
    blurb: 'Software that puts timing results on scoreboards and video boards.',
    href: 'software/index.md',
    sections: ['Display'],
  },
  {
    title: 'Vendors',
    blurb: 'The companies that make the equipment and software.',
    href: 'vendors/index.md',
    sections: ['vendors/index.md'],
  },
  {
    title: 'About the wiki',
    blurb: 'Scope, sourcing policy, image credits and accessibility.',
    href: 'about/index.md',
    sections: ['about/index.md'],
  },
];

/** Links shown in each portal box before its "all" link. */
export const PORTAL_LINKS_SHOWN = 5;

/**
 * The tag taxonomy in reading order, grouped as CLAUDE.md defines it. Tags
 * with no articles yet are hidden on the page.
 */
export const TAG_GROUPS: { label: string; tags: string[] }[] = [
  { label: 'Sport', tags: ['Swimming', 'Diving', 'Water polo', 'Artistic swimming', 'Open water'] },
  { label: 'Program', tags: ['Masters', 'Para-aquatics', 'Youth'] },
  {
    label: 'Topic',
    tags: [
      'Timing',
      'Scoring',
      'Equipment',
      'Officiating',
      'Rules & formats',
      'Meet management',
      'Team management',
      'Software',
      'Facilities',
    ],
  },
];
