// The site navigation tree, transcribed from the `nav:` section of
// mkdocs.yml (same order, same titles). Leaves carry docs-relative source
// paths. Groups that open with their section's index.md carry it as `index`
// (with its original nav title preserved in `indexTitle`); vendor-name
// grouping labels are children-only groups without an index page.

export type NavLeaf = { title: string; page: string };
export type NavGroup = {
  title: string;
  index?: string;
  indexTitle?: string;
  children: NavNode[];
};
export type NavNode = NavLeaf | NavGroup;

export function isGroup(node: NavNode): node is NavGroup {
  return 'children' in node;
}

export const nav: NavNode[] = [
  { title: 'Main Page', page: 'index.md' },
  {
    title: 'About',
    index: 'about/index.md',
    indexTitle: 'About Libre Aquatics Wiki',
    children: [
      { title: 'Sources & Citations', page: 'about/sources.md' },
      { title: 'Image Credits', page: 'about/credits.md' },
      { title: 'Accessibility', page: 'about/accessibility.md' },
    ],
  },
  {
    title: 'Equipment',
    index: 'equipment/index.md',
    indexTitle: 'Equipment Overview',
    children: [
      {
        title: 'Swimming',
        children: [
          {
            title: 'Start Systems',
            index: 'equipment/swimming/starter/index.md',
            indexTitle: 'Start Systems Overview',
            children: [
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Infinity Start System', page: 'equipment/swimming/starter/infinity-start-system.md' },
                  { title: 'Infinity Pro Start System', page: 'equipment/swimming/starter/infinity-pro-start-system.md' },
                  { title: 'SS2 Electronic Start System', page: 'equipment/swimming/starter/ss2.md' },
                  { title: 'Championship Start System (CHAMP-SSM)', page: 'equipment/swimming/starter/champ-ssm.md' },
                  { title: 'Championship Start System', page: 'equipment/swimming/starter/championship-start-system.md' },
                  { title: 'Championship Elite Start System', page: 'equipment/swimming/starter/championship-elite-start-system.md' },
                  { title: 'Dolphin Starter Unit', page: 'equipment/swimming/starter/dolphin-starter-unit.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'HS-200 Horn Start', page: 'equipment/swimming/starter/hs-200.md' },
                ],
              },
              {
                title: 'International Sports Timing',
                children: [
                  { title: 'SWIMSTART Electronic Start', page: 'equipment/swimming/starter/swimstart.md' },
                ],
              },
              {
                title: 'Superior Swim Timing',
                children: [
                  { title: 'Atlantis Swimming Starter System', page: 'equipment/swimming/starter/atlantis.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'StartTime II', page: 'equipment/swimming/starter/starttime-ii.md' },
                  { title: 'StartTime III', page: 'equipment/swimming/starter/starttime-iii.md' },
                  { title: 'StartTime IV', page: 'equipment/swimming/starter/starttime-iv.md' },
                  { title: 'StartTime V', page: 'equipment/swimming/starter/starttime-v.md' },
                ],
              },
              {
                title: 'Seiko',
                children: [
                  { title: 'PS-1200 Electronic Start Sound Generator', page: 'equipment/swimming/starter/seiko-ps-1200.md' },
                  { title: 'PS-1300 Electronic Start Sound Generator', page: 'equipment/swimming/starter/seiko-ps-1300.md' },
                  { title: 'PS-1400 Electronic Start Sound Generator', page: 'equipment/swimming/starter/seiko-ps-1400.md' },
                  { title: 'Seiko PS-105 Electronic Starter', page: 'equipment/swimming/starter/seiko-ps-105.md' },
                  { title: 'Seiko PS-107 Electronic Starter', page: 'equipment/swimming/starter/seiko-ps-107.md' },
                  { title: 'Seiko PS-109 Electronic Starter', page: 'equipment/swimming/starter/seiko-ps-109.md' },
                  { title: 'Seiko Electronic Starting System', page: 'equipment/swimming/starter/seiko-electronic-starting-system.md' },
                ],
              },
            ],
          },
          {
            title: 'External Speakers',
            index: 'equipment/swimming/external-speaker/index.md',
            indexTitle: 'External Speakers Overview',
            children: [
              { title: 'Colorado Time Systems lane speakers', page: 'equipment/swimming/external-speaker/cts.md' },
              { title: 'Daktronics lane speakers', page: 'equipment/swimming/external-speaker/daktronics.md' },
              { title: 'International Sports Timing lane speakers', page: 'equipment/swimming/external-speaker/ist.md' },
              { title: 'Superior Swim Timing lane speakers', page: 'equipment/swimming/external-speaker/sst.md' },
              { title: 'Swiss Timing lane speakers', page: 'equipment/swimming/external-speaker/swiss-timing.md' },
            ],
          },
          {
            title: 'Backstroke Start Devices',
            index: 'equipment/swimming/backstroke-start/index.md',
            indexTitle: 'Backstroke Start Overview',
            children: [
              { title: 'Colorado Time Systems Backstroke Start Device', page: 'equipment/swimming/backstroke-start/cts.md' },
              { title: 'FINIS Backstroke Start Wedge', page: 'equipment/swimming/backstroke-start/finis.md' },
              { title: 'Omega OBL2 Pro Backstroke Ledge', page: 'equipment/swimming/backstroke-start/swiss-timing.md' },
            ],
          },
          {
            title: 'Touchpads',
            index: 'equipment/swimming/touchpad/index.md',
            indexTitle: 'Touchpads Overview',
            children: [
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'AquaGrip Touchpad', page: 'equipment/swimming/touchpad/aquagrip.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'T-7000 Series Touchpad', page: 'equipment/swimming/touchpad/t-7000.md' },
                ],
              },
              {
                title: 'Seiko',
                children: [
                  { title: 'Seiko AQUA Touch Plate', page: 'equipment/swimming/touchpad/seiko-aqua-touch-plate.md' },
                  { title: 'Seiko Full-Frame Touch Plate', page: 'equipment/swimming/touchpad/seiko-full-frame-touch-plate.md' },
                ],
              },
            ],
          },
          {
            title: 'Semi-Automatic Timing',
            index: 'equipment/swimming/semi-automatic/index.md',
            indexTitle: 'Semi-Automatic Timing Overview',
            children: [
              {
                title: 'Pushbuttons',
                index: 'equipment/swimming/semi-automatic/pushbutton/index.md',
                indexTitle: 'Pushbuttons Overview',
                children: [
                  { title: 'Colorado Time Systems Pushbutton', page: 'equipment/swimming/semi-automatic/pushbutton/cts.md' },
                  { title: 'Daktronics Pushbutton', page: 'equipment/swimming/semi-automatic/pushbutton/daktronics.md' },
                ],
              },
              { title: 'Dolphin Wireless Stopwatch Timing System', page: 'equipment/swimming/semi-automatic/dolphin.md' },
            ],
          },
          {
            title: 'Relay Take-Off Platforms',
            index: 'equipment/swimming/relay-judging/index.md',
            indexTitle: 'Relay Take-Off Overview',
            children: [
              { title: 'Colorado Time Systems RJP', page: 'equipment/swimming/relay-judging/cts.md' },
              { title: 'Daktronics RTOP', page: 'equipment/swimming/relay-judging/daktronics.md' },
            ],
          },
          {
            title: 'Timers',
            index: 'equipment/swimming/timers/index.md',
            indexTitle: 'Timers Overview',
            children: [
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Gen7 Serial Timer', page: 'equipment/swimming/timers/gen7-serial.md' },
                  { title: 'Gen7 Legacy Timer', page: 'equipment/swimming/timers/gen7-legacy.md' },
                  { title: 'System 6', page: 'equipment/swimming/timers/system-6.md' },
                  { title: 'System 5', page: 'equipment/swimming/timers/system-5.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'OmniSport 2000', page: 'equipment/swimming/timers/omnisport-2000.md' },
                  { title: 'OmniSport 6000', page: 'equipment/swimming/timers/omnisport-6000.md' },
                  { title: 'OmniSport 1000', page: 'equipment/swimming/timers/omnisport-1000.md' },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Diving',
        index: 'equipment/diving/index.md',
        indexTitle: 'Diving Equipment Overview',
        children: [],
      },
      {
        title: 'Water Polo',
        index: 'equipment/water-polo/index.md',
        indexTitle: 'Water Polo Equipment Overview',
        children: [],
      },
      {
        title: 'Common',
        index: 'equipment/common/index.md',
        indexTitle: 'Common Equipment Overview',
        children: [],
      },
    ],
  },
  {
    title: 'Software',
    index: 'software/index.md',
    indexTitle: 'Software Overview',
    children: [
      {
        title: 'Meet Management',
        index: 'meet-management/index.md',
        indexTitle: 'Meet Management Overview',
        children: [
          { title: 'Libre Aquatics Meet', page: 'software/libre-aquatics-meet.md' },
        ],
      },
      {
        title: 'Team Management',
        index: 'team-management/index.md',
        indexTitle: 'Team Management Overview',
        children: [
          { title: 'Libre Aquatics Team', page: 'software/libre-aquatics-team.md' },
        ],
      },
      {
        title: 'Display',
        children: [
          {
            title: 'Colorado Time Systems',
            children: [
              { title: 'DisplayLink Plus', page: 'software/displaylink-plus.md' },
              { title: 'DisplayLink', page: 'software/displaylink.md' },
              { title: 'Standalone Template Editor', page: 'software/standalone-template-editor.md' },
              { title: 'CTS AquaSync', page: 'software/cts-aquasync.md' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Vendors',
    index: 'vendors/index.md',
    indexTitle: 'Vendors Overview',
    children: [
      { title: 'Colorado Time Systems', page: 'vendors/colorado-time-systems.md' },
      { title: 'Daktronics', page: 'vendors/daktronics.md' },
      { title: 'FINIS', page: 'vendors/finis.md' },
      { title: 'International Sports Timing', page: 'vendors/international-sports-timing.md' },
      { title: 'Seiko', page: 'vendors/seiko.md' },
      { title: 'Superior Swim Timing', page: 'vendors/superior-swim-timing.md' },
      { title: 'Swiss Timing', page: 'vendors/swiss-timing.md' },
    ],
  },
  { title: 'Categories', page: 'categories.md' },
];
