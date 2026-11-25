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
                title: 'ALGE-Timing',
                children: [
                  { title: 'SU3 Start Unit', page: 'equipment/swimming/starter/alge-su3.md' },
                  { title: 'SU2 Start Unit', page: 'equipment/swimming/starter/alge-su2.md' },
                  { title: 'SU Start Unit (SWIM 2000)', page: 'equipment/swimming/starter/alge-su.md' },
                  { title: 'E-START', page: 'equipment/swimming/starter/alge-e-start.md' },
                  { title: 'SA1 Start Acoustic', page: 'equipment/swimming/starter/alge-sa1.md' },
                  { title: 'STB1 Startbeep', page: 'equipment/swimming/starter/alge-stb1.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Infinity Start System', page: 'equipment/swimming/starter/infinity-start-system.md' },
                  { title: 'Infinity Pro Start System', page: 'equipment/swimming/starter/infinity-pro-start-system.md' },
                  { title: 'SS-1', page: 'equipment/swimming/starter/ss-1.md' },
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
                title: 'Kyrotech',
                children: [
                  { title: 'Tec-Start', page: 'equipment/swimming/starter/kyrotech-tec-start.md' },
                ],
              },
              {
                title: 'Seiko',
                children: [
                  { title: 'PS-1200 Electronic Start Sound Generator', page: 'equipment/swimming/starter/seiko-ps-1200.md' },
                  { title: 'PS-1300 Electronic Start Sound Generator', page: 'equipment/swimming/starter/seiko-ps-1300.md' },
                  { title: 'PS-1400 Electronic Start Sound Generator', page: 'equipment/swimming/starter/seiko-ps-1400.md' },
                  { title: 'PS-105 Electronic Starter', page: 'equipment/swimming/starter/seiko-ps-105.md' },
                  { title: 'PS-107 Electronic Starter', page: 'equipment/swimming/starter/seiko-ps-107.md' },
                  { title: 'PS-109 Electronic Starter', page: 'equipment/swimming/starter/seiko-ps-109.md' },
                  { title: 'Seiko Electronic Starting System', page: 'equipment/swimming/starter/seiko-electronic-starting-system.md' },
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
                  { title: 'Omega ORA2', page: 'equipment/swimming/starter/ora2.md' },
                ],
              },
              {
                title: 'Taroda Industries',
                children: [
                  { title: 'Kyroscope AH-1200', page: 'equipment/swimming/starter/kyroscope-ah-1200.md' },
                ],
              },
            ],
          },
          {
            title: 'External Speakers',
            index: 'equipment/swimming/external-speaker/index.md',
            indexTitle: 'External Speakers Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'SPA2 and SPP2', page: 'equipment/swimming/external-speaker/alge-spa2-spp2.md' },
                  { title: 'LK1', page: 'equipment/swimming/external-speaker/alge-lk1.md' },
                  { title: 'BANG Speaker Systems', page: 'equipment/swimming/external-speaker/alge-bang.md' },
                  { title: 'BANG SPK Speaker', page: 'equipment/swimming/external-speaker/alge-bang-spk.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Lane Speakers', page: 'equipment/swimming/external-speaker/cts.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'Lane Speakers', page: 'equipment/swimming/external-speaker/daktronics.md' },
                ],
              },
              {
                title: 'International Sports Timing',
                children: [
                  { title: 'Lane Speakers', page: 'equipment/swimming/external-speaker/ist.md' },
                ],
              },
              {
                title: 'Superior Swim Timing',
                children: [
                  { title: 'Lane Speakers', page: 'equipment/swimming/external-speaker/sst.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Lane Speakers', page: 'equipment/swimming/external-speaker/swiss-timing.md' },
                ],
              },
            ],
          },
          {
            title: 'Backstroke Start Devices',
            index: 'equipment/swimming/backstroke-start/index.md',
            indexTitle: 'Backstroke Start Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'BSA', page: 'equipment/swimming/backstroke-start/alge-bsa.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Backstroke Start Device', page: 'equipment/swimming/backstroke-start/cts.md' },
                ],
              },
              {
                title: 'FINIS',
                children: [
                  { title: 'Backstroke Start Wedge', page: 'equipment/swimming/backstroke-start/finis.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Omega OBL2 Pro Backstroke Ledge', page: 'equipment/swimming/backstroke-start/swiss-timing.md' },
                  { title: 'Omega OBL1 Backstroke Ledge', page: 'equipment/swimming/backstroke-start/obl1.md' },
                ],
              },
            ],
          },
          {
            title: 'Touchpads',
            index: 'equipment/swimming/touchpad/index.md',
            indexTitle: 'Touchpads Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'TP Touchpads', page: 'equipment/swimming/touchpad/alge-tp-touchpads.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'AquaGrip Touchpad', page: 'equipment/swimming/touchpad/aquagrip.md' },
                  { title: 'Standard Touchpad', page: 'equipment/swimming/touchpad/standard.md' },
                  { title: 'Multizone Pads', page: 'equipment/swimming/touchpad/multizone.md' },
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
                  { title: 'AQUA Touch Plate', page: 'equipment/swimming/touchpad/seiko-aqua-touch-plate.md' },
                  { title: 'Full-Frame Touch Plate', page: 'equipment/swimming/touchpad/seiko-full-frame-touch-plate.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'OCP5 Touchpad', page: 'equipment/swimming/touchpad/ocp5.md' },
                ],
              },
            ],
          },
          {
            title: 'Deck Cabling',
            index: 'equipment/swimming/deck-cabling/index.md',
            indexTitle: 'Deck Cabling Overview',
            children: [
              {
                title: 'Harnesses and Lane Modules',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'SWT3 Swim Terminal', page: 'equipment/swimming/deck-cabling/alge-swt3.md' },
                      { title: 'SWT Swim Terminal (SWIM 2000)', page: 'equipment/swimming/deck-cabling/alge-swt.md' },
                      { title: 'S4-SWIM Lane Box', page: 'equipment/swimming/deck-cabling/alge-s4-swim.md' },
                      { title: 'FIN1 Finish Adapter', page: 'equipment/swimming/deck-cabling/alge-fin1.md' },
                      { title: 'MC8 Push-Button Cable', page: 'equipment/swimming/deck-cabling/alge-mc8.md' },
                      { title: 'Swimming Cable Sets', page: 'equipment/swimming/deck-cabling/alge-swim-cable-sets.md' },
                      { title: 'Cable 078', page: 'equipment/swimming/deck-cabling/alge-cable-078.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Cable Harness', page: 'equipment/swimming/deck-cabling/cts-cable-harness.md' },
                      { title: 'Gen7 Serial Cable Harness', page: 'equipment/swimming/deck-cabling/gen7-serial-cable-harness.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'Lane Module', page: 'equipment/swimming/deck-cabling/daktronics-lane-module.md' },
                      { title: 'Lane Extension Module', page: 'equipment/swimming/deck-cabling/daktronics-lane-extension-module.md' },
                    ],
                  },
                  {
                    title: 'Superior Swim Timing',
                    children: [
                      { title: 'Lane Harness', page: 'equipment/swimming/deck-cabling/sst-lane-harness.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'Quantum Mobile Harness', page: 'equipment/swimming/deck-cabling/quantum-mobile-harness.md' },
                      { title: 'Quantum Harness Cable', page: 'equipment/swimming/deck-cabling/quantum-harness-cable.md' },
                      { title: 'Quantum Harness Terminator', page: 'equipment/swimming/deck-cabling/quantum-harness-terminator.md' },
                      { title: 'PowerTime Swimming Harness', page: 'equipment/swimming/deck-cabling/powertime-swimming-harness.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Deck Plates and Connect Hubs',
                children: [
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Gen7 Serial Connect Hubs', page: 'equipment/swimming/deck-cabling/gen7-serial-connect-hubs.md' },
                      { title: 'Titanium Deckplate', page: 'equipment/swimming/deck-cabling/cts-titanium-deckplate.md' },
                      { title: 'QuickConnect Deck Plate', page: 'equipment/swimming/deck-cabling/cts-quickconnect-deck-plate.md' },
                      { title: 'DP-7 Deck Plate', page: 'equipment/swimming/deck-cabling/cts-dp-7-deck-plate.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'Deck Plates', page: 'equipment/swimming/deck-cabling/daktronics-deck-plate.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'Deck Plate', page: 'equipment/swimming/deck-cabling/swiss-timing-deck-plate.md' },
                      { title: 'Deckplate Adapter', page: 'equipment/swimming/deck-cabling/swiss-timing-deckplate-adapter.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Wall Plates and Distribution Boxes',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'SWIM-FIX', page: 'equipment/swimming/deck-cabling/alge-swim-fix.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Wall Plate', page: 'equipment/swimming/deck-cabling/cts-wall-plate.md' },
                      { title: 'Wall Plate Cover', page: 'equipment/swimming/deck-cabling/cts-wall-plate-cover.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'Wall Plate', page: 'equipment/swimming/deck-cabling/daktronics-wall-plate.md' },
                      { title: 'Lane Interface', page: 'equipment/swimming/deck-cabling/daktronics-lane-interface.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'ODB10-SW', page: 'equipment/swimming/deck-cabling/odb10-sw.md' },
                      { title: 'ODB10', page: 'equipment/swimming/deck-cabling/odb10.md' },
                      { title: 'Wall Socket', page: 'equipment/swimming/deck-cabling/swiss-timing-wall-socket.md' },
                    ],
                  },
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
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: '023-02 Push Button', page: 'equipment/swimming/semi-automatic/pushbutton/alge-023-02.md' },
                      { title: 'WTN-PB Radio Push Button', page: 'equipment/swimming/semi-automatic/pushbutton/alge-wtn-pb.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Pushbutton', page: 'equipment/swimming/semi-automatic/pushbutton/cts.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'Pushbutton', page: 'equipment/swimming/semi-automatic/pushbutton/daktronics.md' },
                    ],
                  },
                  {
                    title: 'Superior Swim Timing',
                    children: [
                      { title: 'Pushbutton', page: 'equipment/swimming/semi-automatic/pushbutton/sst.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'Omega OIT8 Pushbutton', page: 'equipment/swimming/semi-automatic/pushbutton/oit8.md' },
                      { title: 'OIT3 Pushbutton', page: 'equipment/swimming/semi-automatic/pushbutton/swiss-timing.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Timing Systems',
                children: [
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Dolphin Wireless Stopwatch Timing System', page: 'equipment/swimming/semi-automatic/dolphin.md' },
                    ],
                  },
                  {
                    title: 'Maker not established',
                    children: [
                      { title: 'DIGI Sport-Event-Timer', page: 'equipment/swimming/semi-automatic/digi-sport-event-timer.md' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'Relay Take-Off Platforms',
            index: 'equipment/swimming/relay-judging/index.md',
            indexTitle: 'Relay Take-Off Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'SWR7', page: 'equipment/swimming/relay-judging/alge-swr7.md' },
                  { title: 'SWR 2', page: 'equipment/swimming/relay-judging/alge-swr2.md' },
                  { title: 'SWR1', page: 'equipment/swimming/relay-judging/alge-swr1.md' },
                  { title: 'R1 False Start Detector', page: 'equipment/swimming/relay-judging/alge-r1.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'RJP', page: 'equipment/swimming/relay-judging/cts.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'RTOP', page: 'equipment/swimming/relay-judging/daktronics.md' },
                ],
              },
              {
                title: 'Dexstar Communications',
                children: [
                  { title: 'DC 204 Sports Timer', page: 'equipment/swimming/relay-judging/dc-204-sports-timer.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Omega OSB6', page: 'equipment/swimming/relay-judging/osb6.md' },
                  { title: 'Omega OSB-3', page: 'equipment/swimming/relay-judging/osb-3.md' },
                ],
              },
            ],
          },
          {
            title: 'Starting Blocks',
            index: 'equipment/swimming/starting-blocks/index.md',
            indexTitle: 'Starting Blocks Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'SO5', page: 'equipment/swimming/starting-blocks/alge-so5.md' },
                  { title: 'SO4 and So7', page: 'equipment/swimming/starting-blocks/alge-so4.md' },
                  { title: 'SO 2', page: 'equipment/swimming/starting-blocks/alge-so2.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Colorado Block', page: 'equipment/swimming/starting-blocks/colorado-block.md' },
                ],
              },
              {
                title: 'Paragon Aquatics',
                children: [
                  { title: 'Track Start Competitor', page: 'equipment/swimming/starting-blocks/track-start-competitor.md' },
                  { title: 'Track Start PLUS+', page: 'equipment/swimming/starting-blocks/track-start-plus.md' },
                  { title: 'Quickset', page: 'equipment/swimming/starting-blocks/paragon-quickset.md' },
                  { title: 'Varsity', page: 'equipment/swimming/starting-blocks/paragon-varsity.md' },
                ],
              },
              {
                title: 'S.R. Smith',
                children: [
                  { title: 'Velocity', page: 'equipment/swimming/starting-blocks/velocity.md' },
                ],
              },
              {
                title: 'Spectrum Aquatics',
                children: [
                  { title: 'Fusion Starting Platform', page: 'equipment/swimming/starting-blocks/fusion-starting-platform.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'OSB14', page: 'equipment/swimming/starting-blocks/osb14.md' },
                  { title: 'OSB12', page: 'equipment/swimming/starting-blocks/osb12.md' },
                  { title: 'OSB11', page: 'equipment/swimming/starting-blocks/osb11.md' },
                  { title: 'OSB9', page: 'equipment/swimming/starting-blocks/osb9.md' },
                ],
              },
            ],
          },
          {
            title: 'Timers',
            index: 'equipment/swimming/timers/index.md',
            indexTitle: 'Timers Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'TM-SWIM', page: 'equipment/swimming/timers/alge-tm-swim.md' },
                  { title: 'Timy', page: 'equipment/swimming/timers/alge-timy.md' },
                  { title: 'SWC', page: 'equipment/swimming/timers/alge-swc.md' },
                  { title: 'SWIM 2000', page: 'equipment/swimming/timers/alge-swim-2000.md' },
                  { title: 'Timer S4', page: 'equipment/swimming/timers/alge-timer-s4.md' },
                  { title: 'Timer S3', page: 'equipment/swimming/timers/alge-timer-s3.md' },
                  { title: 'TdC 8000', page: 'equipment/swimming/timers/alge-tdc-8000.md' },
                  { title: 'TdC 4000', page: 'equipment/swimming/timers/alge-tdc-4000.md' },
                  { title: 'TdC 2000', page: 'equipment/swimming/timers/alge-tdc-2000.md' },
                  { title: 'Comet', page: 'equipment/swimming/timers/alge-comet.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Gen7 Serial Timer', page: 'equipment/swimming/timers/gen7-serial.md' },
                  { title: 'Gen7 Legacy Timer', page: 'equipment/swimming/timers/gen7-legacy.md' },
                  { title: 'System 6', page: 'equipment/swimming/timers/system-6.md' },
                  { title: 'System 5', page: 'equipment/swimming/timers/system-5.md' },
                  { title: 'Swim IV', page: 'equipment/swimming/timers/swim-iv.md' },
                  { title: 'System 4000', page: 'equipment/swimming/timers/system-4000.md' },
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
              {
                title: 'Kyrotech',
                children: [
                  { title: 'Tec-Timer', page: 'equipment/swimming/timers/kyrotech-tec-timer.md' },
                ],
              },
              {
                title: 'Superior Swim Timing',
                children: [
                  { title: 'SST timer', page: 'equipment/swimming/timers/sst-timer.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Quantum Aquatics', page: 'equipment/swimming/timers/quantum.md' },
                  { title: 'ARES 21', page: 'equipment/swimming/timers/ares-21.md' },
                  { title: 'OSM6', page: 'equipment/swimming/timers/osm6.md' },
                  { title: 'OSM-5', page: 'equipment/swimming/timers/osm-5.md' },
                  { title: 'OSM-4', page: 'equipment/swimming/timers/osm-4.md' },
                  { title: 'OSM-3', page: 'equipment/swimming/timers/osm-3.md' },
                  { title: 'Swim-O-Matic', page: 'equipment/swimming/timers/swim-o-matic.md' },
                  { title: 'PowerTime II', page: 'equipment/swimming/timers/powertime-ii.md' },
                  { title: 'PowerTime', page: 'equipment/swimming/timers/powertime.md' },
                ],
              },
              {
                title: 'Taroda Industries',
                children: [
                  { title: 'Kyroscope', page: 'equipment/swimming/timers/kyroscope.md' },
                ],
              },
              {
                title: 'Maker not established',
                children: [
                  { title: 'ZES99', page: 'equipment/swimming/timers/zes99.md' },
                ],
              },
            ],
          },
          {
            title: 'Cables and Accessories',
            index: 'equipment/swimming/accessories/index.md',
            indexTitle: 'Cables and Accessories Overview',
            children: [
              {
                title: 'Printers',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'P6-8 Printer', page: 'equipment/swimming/accessories/alge-p6-8.md' },
                      { title: 'P5 Printer', page: 'equipment/swimming/accessories/alge-p5.md' },
                      { title: 'P4 Printer', page: 'equipment/swimming/accessories/alge-p4.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'ARES Online Printer', page: 'equipment/swimming/accessories/ares-online-printer.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Power and Charging',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'PS12A Power Supply', page: 'equipment/swimming/accessories/alge-ps12a.md' },
                      { title: 'NLG4 Charging Set', page: 'equipment/swimming/accessories/alge-nlg4.md' },
                      { title: 'NGL13 Charger', page: 'equipment/swimming/accessories/alge-ngl13.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Headsets and Audio',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'HS4 Headsets', page: 'equipment/swimming/accessories/alge-hs4-1.md' },
                      { title: 'HS3-2 Headset', page: 'equipment/swimming/accessories/alge-hs3-2.md' },
                      { title: 'BANG-HS Radio Headset', page: 'equipment/swimming/accessories/alge-bang-hs.md' },
                      { title: 'Q34 Headset', page: 'equipment/swimming/accessories/alge-q34.md' },
                      { title: 'SV4 Speech Amplifier', page: 'equipment/swimming/accessories/alge-sv4.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Start Microphones and Lights',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'SM9 Start Microphone', page: 'equipment/swimming/accessories/alge-sm9.md' },
                      { title: 'SM8 Start Microphone', page: 'equipment/swimming/accessories/alge-sm8.md' },
                      { title: 'SM6 Start Microphone', page: 'equipment/swimming/accessories/alge-sm6.md' },
                      { title: 'FLASH XL', page: 'equipment/swimming/accessories/alge-flash-xl.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Wireless Links',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'WTN Wireless Timing Network', page: 'equipment/swimming/accessories/alge-wtn.md' },
                      { title: 'USB-WTN Adapter', page: 'equipment/swimming/accessories/alge-usb-wtn.md' },
                      { title: 'WTN-WS Anemometer Radio Link', page: 'equipment/swimming/accessories/alge-wtn-ws.md' },
                      { title: 'PR1aW Photocell', page: 'equipment/swimming/accessories/alge-pr1aw.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Interface Units',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'TIDO Docking Station', page: 'equipment/swimming/accessories/alge-tido.md' },
                      { title: 'MC9 Multichannel', page: 'equipment/swimming/accessories/alge-mc9.md' },
                      { title: 'MC2-S Training Adapter', page: 'equipment/swimming/accessories/alge-mc2-s.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'ARES Data Switcher', page: 'equipment/swimming/accessories/ares-data-switcher.md' },
                      { title: 'DH-1 Data Handling Module', page: 'equipment/swimming/accessories/dh-1.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Cables',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'KT Cable Reels', page: 'equipment/swimming/accessories/alge-kt-cable-reels.md' },
                      { title: 'Cable 309-2.5', page: 'equipment/swimming/accessories/alge-cable-309.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Timer-to-Wallplate Cable', page: 'equipment/swimming/accessories/cts-timer-wallplate-cable.md' },
                      { title: 'CMP-WP Cable', page: 'equipment/swimming/accessories/cts-cmp-wp-cable.md' },
                      { title: 'R-015-027 Cable', page: 'equipment/swimming/accessories/cts-r-015-027-cable.md' },
                    ],
                  },
                  {
                    title: 'Superior Swim Timing',
                    children: [
                      { title: 'USB-NMC-2.5m', page: 'equipment/swimming/accessories/usb-nmc-2-5m.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'Quantum Start Cable', page: 'equipment/swimming/accessories/quantum-start-cable.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Service Tools',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'SWIM-SIM10', page: 'equipment/swimming/accessories/alge-swim-sim10.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'TPM-D Test Meter', page: 'equipment/swimming/accessories/cts-tpm-d-test-meter.md' },
                      { title: 'VP-2 Vacuum Pump', page: 'equipment/swimming/accessories/cts-vp-2-vacuum-pump.md' },
                      { title: 'VP-1 Vacuum Pump', page: 'equipment/swimming/accessories/cts-vp-1-vacuum-pump.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'Programmer AQ', page: 'equipment/swimming/accessories/programmer-aq.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Mounting Hardware',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'Touchpad Holders', page: 'equipment/swimming/accessories/alge-touchpad-holders.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Transport and Storage',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'TN-SWIM Transport Box', page: 'equipment/swimming/accessories/alge-tn-swim.md' },
                      { title: 'CADDY BSA Stand', page: 'equipment/swimming/accessories/alge-caddy-bsa.md' },
                      { title: 'CADDY X', page: 'equipment/swimming/accessories/alge-caddy-x.md' },
                    ],
                  },
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
        children: [
          {
            title: 'Judging Systems and Terminals',
            children: [
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Gen7 Wired Judging', page: 'equipment/diving/gen7-wired-judging.md' },
                  { title: 'Wireless Judging', page: 'equipment/diving/wireless-judging.md' },
                  { title: 'Judging Terminals', page: 'equipment/diving/judging-terminals.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'JC-100', page: 'equipment/diving/jc-100.md' },
                  { title: 'RC-100', page: 'equipment/diving/rc-100.md' },
                  { title: 'RC-200', page: 'equipment/diving/rc-200.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Omega MTE Keypad', page: 'equipment/diving/omega-mte-keypads.md' },
                ],
              },
            ],
          },
          {
            title: 'Base Stations and Interface Boxes',
            children: [
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Judging Interface Box', page: 'equipment/diving/judging-interface-box.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'RC-100 Base Station', page: 'equipment/diving/rc-100-base-station.md' },
                  { title: 'RC-200 Base Station', page: 'equipment/diving/rc-200-base-station.md' },
                ],
              },
            ],
          },
          {
            title: 'Cables and Accessories',
            index: 'equipment/diving/accessories/index.md',
            indexTitle: 'Diving Cables and Accessories Overview',
            children: [
              {
                title: 'Daktronics',
                children: [
                  { title: 'RC-200 Charging Station', page: 'equipment/diving/accessories/rc-200-charging-station.md' },
                  { title: 'JC-100 Junction Box', page: 'equipment/diving/accessories/jc-100-junction-box.md' },
                  { title: 'Judging Control J-Box Cover', page: 'equipment/diving/accessories/daktronics-judging-jbox-cover.md' },
                  { title: 'W-1823 Cable', page: 'equipment/diving/accessories/w-1823-cable.md' },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Water Polo',
        index: 'equipment/water-polo/index.md',
        indexTitle: 'Water Polo Equipment Overview',
        children: [
          {
            title: 'Consoles',
            index: 'equipment/water-polo/console/index.md',
            indexTitle: 'Water Polo Consoles Overview',
            children: [
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Calypso WPO Console', page: 'equipment/water-polo/console/calypso-wpo-console.md' },
                ],
              },
            ],
          },
          {
            title: 'Shot Clocks',
            index: 'equipment/water-polo/shot-clock/index.md',
            indexTitle: 'Water Polo Shot Clocks Overview',
            children: [
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Water Polo Shot Clocks', page: 'equipment/water-polo/shot-clock/swiss-timing-shot-clocks.md' },
                  { title: 'Montreal Shot Clocks', page: 'equipment/water-polo/shot-clock/montreal-shot-clocks.md' },
                ],
              },
            ],
          },
          {
            title: 'Scoreboards',
            index: 'equipment/water-polo/scoreboard/index.md',
            indexTitle: 'Water Polo Scoreboards Overview',
            children: [
              {
                title: 'Daktronics',
                children: [
                  { title: 'WP-2101 Water Polo Scoreboard', page: 'equipment/water-polo/scoreboard/wp-2101.md' },
                  { title: 'WP-2102 Penalty Module', page: 'equipment/water-polo/scoreboard/wp-2102.md' },
                  { title: 'WP-2103 Portable Game and Shot Clock', page: 'equipment/water-polo/scoreboard/wp-2103.md' },
                ],
              },
            ],
          },
          {
            title: 'Cables and Accessories',
            index: 'equipment/water-polo/accessories/index.md',
            indexTitle: 'Water Polo Cables and Accessories Overview',
            children: [
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Calypso Team-Name Module (3400.740)', page: 'equipment/water-polo/accessories/calypso-team-name-module.md' },
                  { title: 'Coyote Horn', page: 'equipment/water-polo/accessories/coyote-horn.md' },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Common',
        index: 'equipment/common/index.md',
        indexTitle: 'Common Equipment Overview',
        children: [
          {
            title: 'Scoreboards',
            index: 'equipment/common/scoreboard/index.md',
            indexTitle: 'Scoreboards Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'D-SW Display Boards', page: 'equipment/common/scoreboard/alge-d-sw.md' },
                  { title: 'D-RTNM Display Boards', page: 'equipment/common/scoreboard/alge-d-rtnm.md' },
                  { title: 'GAZ5 Display Board', page: 'equipment/common/scoreboard/alge-gaz5.md' },
                  { title: 'GAZ4 Display Board', page: 'equipment/common/scoreboard/alge-gaz4.md' },
                  { title: 'GAZc Display Board', page: 'equipment/common/scoreboard/alge-gazc.md' },
                  { title: 'D-LINE Display Board', page: 'equipment/common/scoreboard/alge-d-line.md' },
                  { title: 'D-SAT Display Board', page: 'equipment/common/scoreboard/alge-d-sat.md' },
                ],
              },
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Otter Scoreboards', page: 'equipment/common/scoreboard/otter.md' },
                  { title: 'Mini LED Scoreboard', page: 'equipment/common/scoreboard/mini-scoreboard.md' },
                  { title: 'LED-R Numeric Scoreboard', page: 'equipment/common/scoreboard/led-r.md' },
                  { title: 'LED-REX Retrofit', page: 'equipment/common/scoreboard/led-rex.md' },
                  { title: 'Myriad', page: 'equipment/common/scoreboard/myriad.md' },
                  { title: 'Mercury16', page: 'equipment/common/scoreboard/mercury16.md' },
                  { title: '4009 Scoreboard', page: 'equipment/common/scoreboard/4009.md' },
                  { title: '3009 Scoreboard', page: 'equipment/common/scoreboard/3009.md' },
                  { title: 'HWPM 110 and HWPM 220', page: 'equipment/common/scoreboard/hwpm.md' },
                  { title: 'Multisport Portable Scoreboard', page: 'equipment/common/scoreboard/multisport-portable-scoreboard.md' },
                ],
              },
              {
                title: 'Kyrotech',
                children: [
                  { title: 'Databoard', page: 'equipment/common/scoreboard/kyrotech-databoard.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: 'Calypso', page: 'equipment/common/scoreboard/calypso.md' },
                  { title: 'Piccolo', page: 'equipment/common/scoreboard/piccolo.md' },
                  { title: 'Galactica', page: 'equipment/common/scoreboard/galactica.md' },
                  { title: 'UNT4', page: 'equipment/common/scoreboard/unt4.md' },
                  { title: 'UNT6', page: 'equipment/common/scoreboard/unt6.md' },
                  { title: 'GEMINI', page: 'equipment/common/scoreboard/gemini.md' },
                  { title: 'Saturn 2', page: 'equipment/common/scoreboard/saturn-2.md' },
                ],
              },
            ],
          },
          {
            title: 'Photo Finish',
            index: 'equipment/common/photo-finish/index.md',
            indexTitle: 'Photo Finish Overview',
            children: [
              {
                title: 'ALGE-Timing',
                children: [
                  { title: 'OPTIc3', page: 'equipment/common/photo-finish/alge-optic3.md' },
                  { title: 'IDCam', page: 'equipment/common/photo-finish/alge-idcam.md' },
                ],
              },
              {
                title: 'Swiss Timing',
                children: [
                  { title: "Scan'O'Vision", page: 'equipment/common/photo-finish/scan-o-vision.md' },
                ],
              },
            ],
          },
          {
            title: 'Pace Clocks',
            index: 'equipment/common/pace-clock/index.md',
            indexTitle: 'Pace Clocks Overview',
            children: [
              {
                title: 'Colorado Time Systems',
                children: [
                  { title: 'Pace Clock Controller', page: 'equipment/common/pace-clock/upc-c.md' },
                  { title: 'Ultimate Pace Clock', page: 'equipment/common/pace-clock/ultimate-pace-clock.md' },
                  { title: 'QuickStart', page: 'equipment/common/pace-clock/quickstart.md' },
                  { title: 'QuickStart Pro', page: 'equipment/common/pace-clock/quickstart-pro.md' },
                  { title: 'Handheld Segment Timer', page: 'equipment/common/pace-clock/whc-2.md' },
                  { title: 'Slim Pace Clock', page: 'equipment/common/pace-clock/slim-pace-clock.md' },
                  { title: 'Deck Clock', page: 'equipment/common/pace-clock/deck-clock.md' },
                  { title: 'Pace Clock/Shot Clock', page: 'equipment/common/pace-clock/pace-clock-shot-clock.md' },
                  { title: 'SASC9', page: 'equipment/common/pace-clock/sasc9.md' },
                ],
              },
              {
                title: 'Counsilman',
                children: [
                  { title: 'Counsilman Pace Clock', page: 'equipment/common/pace-clock/counsilman-pace-clock.md' },
                ],
              },
              {
                title: 'Daktronics',
                children: [
                  { title: 'LED Timer', page: 'equipment/common/pace-clock/daktronics-led-timer.md' },
                  { title: 'PC-2001', page: 'equipment/common/pace-clock/pc-2001.md' },
                  { title: 'PC-2002', page: 'equipment/common/pace-clock/pc-2002.md' },
                  { title: 'TI-2022', page: 'equipment/common/pace-clock/ti-2022.md' },
                  { title: 'TI-2101', page: 'equipment/common/pace-clock/ti-2101.md' },
                ],
              },
              {
                title: 'Kiefer McNeil',
                children: [
                  { title: 'Competitor Pace Clocks', page: 'equipment/common/pace-clock/kiefer-competitor-pace-clock.md' },
                ],
              },
              {
                title: 'Kyrotech',
                children: [
                  { title: 'AutoCoach', page: 'equipment/common/pace-clock/kyrotech-autocoach.md' },
                ],
              },
              {
                title: 'Maric',
                children: [
                  { title: 'Paceclox', page: 'equipment/common/pace-clock/maric-paceclox.md' },
                ],
              },
              {
                title: 'Recreonics',
                children: [
                  { title: 'Recreonics Pace Clock', page: 'equipment/common/pace-clock/recreonics-pace-clock.md' },
                ],
              },
              {
                title: 'Swim Training Supply',
                children: [
                  { title: 'Giant Pace Clock', page: 'equipment/common/pace-clock/sts-giant-pace-clock.md' },
                ],
              },
              {
                title: 'Sycom',
                children: [
                  { title: 'Pacedyne', page: 'equipment/common/pace-clock/pacedyne.md' },
                ],
              },
              {
                title: 'Taroda Industries',
                children: [
                  { title: 'Kyroscope Pace Clock', page: 'equipment/common/pace-clock/kyroscope-pace-clock.md' },
                ],
              },
            ],
          },
          {
            title: 'Scoreboard Control',
            index: 'equipment/common/scoreboard-control/index.md',
            indexTitle: 'Scoreboard Control Overview',
            children: [
              {
                title: 'Serial Adapters',
                children: [
                  {
                    title: 'Superior Swim Timing',
                    children: [
                      { title: 'SST scoreboard adapter', page: 'equipment/common/scoreboard-control/sst-scoreboard-adapter.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Wireless Adapters',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'WTN-DB Display-Board Receiver', page: 'equipment/common/scoreboard-control/alge-wtn-db.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Sky-Fi WA-1', page: 'equipment/common/scoreboard-control/wa-1.md' },
                      { title: 'WA-2', page: 'equipment/common/scoreboard-control/wa-2.md' },
                      { title: 'WA-3', page: 'equipment/common/scoreboard-control/wa-3.md' },
                      { title: 'Dolphin Scoreboard Adapter', page: 'equipment/common/scoreboard-control/dolphin-scoreboard-adapter.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'Gen VI Radio', page: 'equipment/common/scoreboard-control/gen-vi-radio.md' },
                    ],
                  },
                  {
                    title: 'Superior Swim Timing',
                    children: [
                      { title: 'SST wireless adapter', page: 'equipment/common/scoreboard-control/sst-wireless-adapter.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Controllers',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'D-CKN Terminal', page: 'equipment/common/scoreboard-control/alge-d-ckn.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'WTTC-1 Tabletop Controller', page: 'equipment/common/scoreboard-control/wttc-1.md' },
                      { title: 'WHC-1 Handheld Controller', page: 'equipment/common/scoreboard-control/whc-1.md' },
                      { title: 'GameLink Console', page: 'equipment/common/scoreboard-control/gamelink-console.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'All Sport 1600', page: 'equipment/common/scoreboard-control/all-sport-1600.md' },
                      { title: 'All Sport 3000', page: 'equipment/common/scoreboard-control/all-sport-3000.md' },
                      { title: 'All Sport 5000', page: 'equipment/common/scoreboard-control/all-sport-5000.md' },
                      { title: 'All Sport 5500', page: 'equipment/common/scoreboard-control/all-sport-5500.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Video Board Controllers',
                children: [
                  {
                    title: 'NovaStar',
                    children: [
                      { title: 'MCTRL-300', page: 'equipment/common/scoreboard-control/mctrl-300.md' },
                      { title: 'MCTRL-600', page: 'equipment/common/scoreboard-control/mctrl-600.md' },
                      { title: 'MCTRL-660', page: 'equipment/common/scoreboard-control/mctrl-660.md' },
                      { title: 'VX4', page: 'equipment/common/scoreboard-control/vx4.md' },
                    ],
                  },
                  {
                    title: 'Maker not established',
                    children: [
                      { title: 'MIC-VPU-01', page: 'equipment/common/scoreboard-control/mic-vpu-01.md' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'Cables and Accessories',
            index: 'equipment/common/accessories/index.md',
            indexTitle: 'Common Cables and Accessories Overview',
            children: [
              {
                title: 'Clock and Horn Switches',
                children: [
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Run-Stop-Reset Units', page: 'equipment/common/accessories/rsr.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'Main Clock Start/Stop/Horn Switch', page: 'equipment/common/accessories/daktronics-main-clock-switch.md' },
                      { title: 'Shot Clock Control', page: 'equipment/common/accessories/daktronics-shot-clock-control.md' },
                      { title: 'RC-200 Remote Start/Stop Kit', page: 'equipment/common/accessories/rc-200-remote-start-stop-kit.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Junction Boxes',
                children: [
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'Phone-Jack Junction Box', page: 'equipment/common/accessories/daktronics-phone-jack-junction-box.md' },
                      { title: 'Dual Phone-Jack Junction Box', page: 'equipment/common/accessories/daktronics-dual-phone-jack-junction-box.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Cables',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'Cable 010-10', page: 'equipment/common/accessories/alge-cable-010.md' },
                      { title: 'Cable 033', page: 'equipment/common/accessories/alge-cable-033.md' },
                    ],
                  },
                  {
                    title: 'Daktronics',
                    children: [
                      { title: 'RTD Cable 0A-1240-0032', page: 'equipment/common/accessories/daktronics-rtd-cable.md' },
                      { title: 'Hy-Tek Data Cable', page: 'equipment/common/accessories/hy-tek-data-cable.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Power',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'NGAZ/R Power Supply', page: 'equipment/common/accessories/alge-ngaz-r.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Converters and USB Links',
                children: [
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'USB Connect', page: 'equipment/common/accessories/cts-usb-connect.md' },
                    ],
                  },
                  {
                    title: 'Swiss Timing',
                    children: [
                      { title: 'INT131 Converter', page: 'equipment/common/accessories/swiss-timing-int131.md' },
                      { title: 'INT004 Converter', page: 'equipment/common/accessories/swiss-timing-int004.md' },
                    ],
                  },
                  {
                    title: 'Trycom Technology',
                    children: [
                      { title: 'TRP-C08H Converter', page: 'equipment/common/accessories/trycom-trp-c08h.md' },
                      { title: 'TRP-C08E Converter', page: 'equipment/common/accessories/trycom-trp-c08e.md' },
                      { title: 'TRP-C08D Converter', page: 'equipment/common/accessories/trycom-trp-c08d.md' },
                      { title: 'TRP-C08 Converter', page: 'equipment/common/accessories/trycom-trp-c08.md' },
                    ],
                  },
                ],
              },
              {
                title: 'Transport and Storage',
                children: [
                  {
                    title: 'ALGE-Timing',
                    children: [
                      { title: 'GTT Carrying Bags', page: 'equipment/common/accessories/alge-gtt-carrying-bags.md' },
                    ],
                  },
                  {
                    title: 'Colorado Time Systems',
                    children: [
                      { title: 'Mini Scoreboard Caddy', page: 'equipment/common/accessories/cad-mini.md' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
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
        index: 'software/meet-management/index.md',
        indexTitle: 'Meet Management Overview',
        children: [
          {
            title: 'Hy-Tek and The Active Network',
            children: [
              { title: 'Hy-Tek Meet Manager', page: 'software/meet-management/hy-tek-meet-manager.md' },
              { title: 'Hy-Tek The Interface', page: 'software/meet-management/the-interface.md' },
              { title: 'Computerized Swim League', page: 'software/meet-management/computerized-swim-league.md' },
              { title: 'ACTIVEWorks Swim Manager', page: 'software/meet-management/activeworks-swim-manager.md' },
            ],
          },
          {
            title: 'ALGE-Timing',
            children: [
              { title: 'SwimTime', page: 'software/meet-management/swimtime.md' },
              { title: 'ALGE SWIM-Manager', page: 'software/meet-management/alge-swim-manager.md' },
            ],
          },
          {
            title: 'Other Programs',
            children: [
              { title: 'Aquabec', page: 'software/meet-management/aquabec.md' },
              { title: 'Championship Meet Management', page: 'software/meet-management/championship-meet-management.md' },
              { title: 'CPS-Schwimm', page: 'software/meet-management/cps-schwimm.md' },
              { title: 'Easy Meet', page: 'software/meet-management/easy-meet.md' },
              { title: 'EasyWk', page: 'software/meet-management/easywk.md' },
              { title: 'LSA SwimMeet and SwimTeam', page: 'software/meet-management/lsa-swimmeet.md' },
              { title: 'Orpheus', page: 'software/meet-management/orpheus.md' },
              { title: 'Splash Meet Manager', page: 'software/meet-management/splash-meet-manager.md' },
              { title: 'SPORTSYSTEMS', page: 'software/meet-management/sportsystems.md' },
              { title: 'Swimcloud Meet', page: 'software/meet-management/swimcloud-meet.md' },
              { title: 'Swimify', page: 'software/meet-management/swimify.md' },
              { title: 'SwimMeet Manager', page: 'software/meet-management/swimmeet-manager.md' },
              { title: 'SwimTopia Meet Maestro', page: 'software/meet-management/meet-maestro.md' },
              { title: 'TeamUnify TouchPad', page: 'software/meet-management/teamunify-touchpad.md' },
              { title: 'WinSwim', page: 'software/meet-management/winswim.md' },
            ],
          },
        ],
      },
      {
        title: 'Diving and Artistic Swimming',
        index: 'software/diving-artistic-swimming/index.md',
        indexTitle: 'Diving and Artistic Swimming Overview',
        children: [
          {
            title: 'Daktronics',
            children: [
              { title: 'OmniSport Pro Diving', page: 'software/diving-artistic-swimming/omnisport-pro-diving.md' },
              { title: 'OmniSport Pro Synchro', page: 'software/diving-artistic-swimming/omnisport-pro-synchro.md' },
            ],
          },
          {
            title: 'Integrated Sports Systems',
            children: [
              { title: 'DIV Scoring Manager', page: 'software/diving-artistic-swimming/div-scoring-manager.md' },
              { title: 'SWA Scoring Manager', page: 'software/diving-artistic-swimming/swa-scoring-manager.md' },
              { title: 'ISS MMS Artistic Swimming', page: 'software/diving-artistic-swimming/iss-mms-artistic-swimming.md' },
              { title: 'Coach Card', page: 'software/diving-artistic-swimming/coach-card.md' },
              { title: 'i-Judge', page: 'software/diving-artistic-swimming/i-judge.md' },
              { title: 'Display Results', page: 'software/diving-artistic-swimming/display-results.md' },
              { title: 'Run Event', page: 'software/diving-artistic-swimming/run-event.md' },
              { title: 'Rezman', page: 'software/diving-artistic-swimming/rezman.md' },
            ],
          },
          {
            title: 'Swiss Timing',
            children: [
              { title: 'ARES Diving', page: 'software/diving-artistic-swimming/ares-diving.md' },
              { title: 'ARES Synchronized Swimming', page: 'software/diving-artistic-swimming/ares-synchronized-swimming.md' },
            ],
          },
          {
            title: 'Other Programs',
            children: [
              { title: 'DiveMeets', page: 'software/diving-artistic-swimming/divemeets.md' },
              { title: 'eDive', page: 'software/diving-artistic-swimming/edive.md' },
              { title: 'Gen7 Artistic Swimming', page: 'software/diving-artistic-swimming/gen7-artistic-swimming.md' },
              { title: 'ieDive', page: 'software/diving-artistic-swimming/iedive.md' },
              { title: 'OmadaTrak', page: 'software/diving-artistic-swimming/omadatrak.md' },
              { title: 'SynchroMM', page: 'software/diving-artistic-swimming/synchromm.md' },
            ],
          },
        ],
      },
      {
        title: 'Team Management',
        index: 'software/team-management/index.md',
        indexTitle: 'Team Management Overview',
        children: [
          {
            title: 'Hy-Tek',
            children: [
              { title: 'Hy-Tek Team Manager', page: 'software/team-management/hy-tek-team-manager.md' },
              { title: 'Hy-Tek Team Manager Online', page: 'software/team-management/hy-tek-team-manager-online.md' },
              { title: 'Hy-Tek Team Connect Online', page: 'software/team-management/hy-tek-team-connect-online.md' },
              { title: 'Hy-Tek Business Manager', page: 'software/team-management/hy-tek-business-manager.md' },
              { title: 'Hy-Tek Team Registration', page: 'software/team-management/hy-tek-team-registration.md' },
              { title: 'Hy-Tek Team Websites', page: 'software/team-management/hy-tek-team-websites.md' },
            ],
          },
          {
            title: 'Other Programs',
            children: [
              { title: 'EasyClub', page: 'software/team-management/easyclub.md' },
              { title: 'Splash Team Manager', page: 'software/team-management/splash-team-manager.md' },
              { title: 'SwimTopia', page: 'software/team-management/swimtopia.md' },
              { title: 'TeamUnify', page: 'software/team-management/teamunify.md' },
            ],
          },
        ],
      },
      {
        title: 'Training',
        index: 'software/training/index.md',
        indexTitle: 'Training Overview',
        children: [
          {
            title: 'Hy-Tek',
            children: [
              { title: 'Hy-Tek Workout Manager', page: 'software/training/hy-tek-workout-manager.md' },
              { title: 'Hy-Tek Pro SWIMMER', page: 'software/training/hy-tek-pro-swimmer.md' },
              { title: 'Hy-Tek Personal Swim Manager', page: 'software/training/hy-tek-personal-swim-manager.md' },
            ],
          },
          {
            title: 'Other Programs',
            children: [
              { title: 'QSTART', page: 'software/training/qstart.md' },
              { title: 'Swim Training', page: 'software/training/powertime-swim-training.md' },
            ],
          },
        ],
      },
      {
        title: 'Timing',
        index: 'software/timing/index.md',
        indexTitle: 'Timing Overview',
        children: [
          {
            title: 'Superior Swim Timing',
            children: [
              { title: 'SST timing software', page: 'software/timing/sst-timing-software.md' },
              { title: 'SST Gateway', page: 'software/timing/sst-gateway.md' },
              { title: 'SST App Server', page: 'software/timing/sst-app-server.md' },
              { title: 'SST Cloud Relay', page: 'software/timing/sst-cloud-relay.md' },
              { title: 'SST Stopwatch', page: 'software/timing/sst-stopwatch.md' },
            ],
          },
          {
            title: 'Swiss Timing',
            children: [
              { title: 'TOP-8', page: 'software/timing/top-8.md' },
              { title: 'ARES-Print', page: 'software/timing/ares-print.md' },
              { title: 'ARES Water Polo', page: 'software/timing/ares-water-polo.md' },
            ],
          },
          {
            title: 'Other Programs',
            children: [
              { title: 'com0com', page: 'software/timing/com0com.md' },
              { title: 'EasyFW', page: 'software/timing/easyfw.md' },
              { title: 'HW VSP3', page: 'software/timing/hw-vsp3.md' },
              { title: 'OmniSport Pro Swimming', page: 'software/timing/omnisport-pro-swimming.md' },
              { title: 'TIMEWARE3', page: 'software/timing/timeware3.md' },
            ],
          },
        ],
      },
      {
        title: 'Display',
        index: 'software/display/index.md',
        indexTitle: 'Display Overview',
        children: [
          {
            title: 'ALGE-Timing',
            children: [
              { title: 'ALGE DisplayStudio', page: 'software/display/alge-displaystudio.md' },
              { title: 'ALGE GAZ4Test', page: 'software/display/alge-gaz4test.md' },
              { title: 'PC Display Multisport', page: 'software/display/pc-display-multisport.md' },
            ],
          },
          {
            title: 'Björn Stickan',
            children: [
              { title: 'EasyAnzeige', page: 'software/display/easyanzeige.md' },
              { title: 'EasyVis', page: 'software/display/easyvis.md' },
            ],
          },
          {
            title: 'Colorado Time Systems',
            children: [
              { title: 'DisplayLink Plus', page: 'software/display/displaylink-plus.md' },
              { title: 'DisplayLink', page: 'software/display/displaylink.md' },
              { title: 'Standalone Template Editor', page: 'software/display/standalone-template-editor.md' },
              { title: 'CTS AquaSync', page: 'software/display/cts-aquasync.md' },
              { title: 'CTStream', page: 'software/display/ctstream.md' },
              { title: 'ScheduleLink', page: 'software/display/schedulelink.md' },
              { title: 'MultiSport Reprogrammer', page: 'software/display/multisport-reprogrammer.md' },
              { title: 'Wireless Polo Scoreboard Mapper', page: 'software/display/wireless-polo-scoreboard-mapper.md' },
            ],
          },
          {
            title: 'Daktronics',
            children: [
              { title: 'All Sport Pro', page: 'software/display/all-sport-pro.md' },
              { title: 'Venus', page: 'software/display/venus.md' },
              { title: 'Daktronics Content Server', page: 'software/display/daktronics-content-server.md' },
            ],
          },
          {
            title: 'Swiss Timing',
            children: [
              { title: 'FlashSimple', page: 'software/display/flashsimple.md' },
            ],
          },
          {
            title: 'Other Programs',
            children: [
              { title: 'Streamline', page: 'software/display/streamline.md' },
              { title: 'TriCaster', page: 'software/display/tricaster.md' },
            ],
          },
        ],
      },
      {
        title: 'Live Results and Rankings',
        index: 'software/live-results/index.md',
        indexTitle: 'Live Results and Rankings Overview',
        children: [
          { title: 'Meet Mobile', page: 'software/live-results/meet-mobile.md' },
          { title: 'SplashMe', page: 'software/live-results/splashme.md' },
          { title: 'SST Scoreboard App', page: 'software/live-results/sst-scoreboard-app.md' },
          { title: 'Swimcloud', page: 'software/live-results/swimcloud.md' },
          { title: 'Swimnerd Live', page: 'software/live-results/swimnerd-live.md' },
          { title: 'Swimrankings', page: 'software/live-results/swimrankings.md' },
        ],
      },
      {
        title: 'File Formats',
        index: 'software/file-formats/index.md',
        indexTitle: 'File Formats Overview',
        children: [
          {
            title: 'Open Formats',
            children: [
              { title: 'SDIF', page: 'software/file-formats/sdif.md' },
              { title: 'XSDIF', page: 'software/file-formats/xsdif.md' },
              { title: 'Lenex', page: 'software/file-formats/lenex.md' },
              { title: 'DSV-Standard', page: 'software/file-formats/dsv-standard.md' },
            ],
          },
          {
            title: 'Hy-Tek',
            children: [
              { title: 'HY3', page: 'software/file-formats/hy3.md' },
              { title: 'CL2', page: 'software/file-formats/cl2.md' },
              { title: 'HYV', page: 'software/file-formats/hyv.md' },
              { title: 'EV3', page: 'software/file-formats/ev3.md' },
              { title: 'Hy-Tek Commlink', page: 'software/file-formats/commlink.md' },
              { title: 'Generic network file sharing', page: 'software/file-formats/generic-network-file-sharing.md' },
            ],
          },
          {
            title: 'Scoreboard Data',
            children: [
              { title: 'ERTD', page: 'software/file-formats/ertd.md' },
            ],
          },
        ],
      },
      {
        title: 'Data Tools',
        index: 'software/data-tools/index.md',
        indexTitle: 'Data Tools Overview',
        children: [
          { title: 'libreDSV6.reader', page: 'software/data-tools/libredsv6-reader.md' },
          { title: 'SDIFCheck', page: 'software/data-tools/sdifcheck.md' },
          { title: 'swimlib', page: 'software/data-tools/swimlib.md' },
        ],
      },
    ],
  },
  {
    title: 'Tools',
    index: 'tools/index.md',
    indexTitle: 'Tools Overview',
    children: [
      { title: 'SDIF File Reader', page: 'tools/sdif-reader.md' },
    ],
  },
  {
    title: 'Vendors',
    index: 'vendors/index.md',
    indexTitle: 'Vendors Overview',
    children: [
      {
        title: 'Timing and Scoring Manufacturers',
        children: [
          { title: 'ALGE-Timing', page: 'vendors/alge-timing.md' },
          { title: 'BestBet', page: 'vendors/bestbet.md' },
          { title: 'Chronomix', page: 'vendors/chronomix.md' },
          { title: 'Colorado Time Systems', page: 'vendors/colorado-time-systems.md' },
          { title: 'Daktronics', page: 'vendors/daktronics.md' },
          { title: 'Incomar', page: 'vendors/incomar.md' },
          { title: 'International Sports Timing', page: 'vendors/international-sports-timing.md' },
          { title: 'Kyrotech', page: 'vendors/kyrotech.md' },
          { title: 'Macsha', page: 'vendors/macsha.md' },
          { title: 'Microgate', page: 'vendors/microgate.md' },
          { title: 'Microplus', page: 'vendors/microplus.md' },
          { title: 'Nevco', page: 'vendors/nevco.md' },
          { title: 'Seiko', page: 'vendors/seiko.md' },
          { title: 'Sportronic', page: 'vendors/sportronic.md' },
          { title: 'Stramatel', page: 'vendors/stramatel.md' },
          { title: 'Superior Swim Timing', page: 'vendors/superior-swim-timing.md' },
          { title: 'Swiss Timing', page: 'vendors/swiss-timing.md' },
          { title: 'Take Your Mark', page: 'vendors/take-your-mark.md' },
          { title: 'Taroda Industries', page: 'vendors/taroda-industries.md' },
          { title: 'Time Drops', page: 'vendors/time-drops.md' },
          { title: 'Wylas Timing', page: 'vendors/wylas-timing.md' },
        ],
      },
      {
        title: 'Pool and Training Equipment',
        children: [
          { title: 'Adolph Kiefer & Associates', page: 'vendors/kiefer.md' },
          { title: 'Counsilman Company', page: 'vendors/counsilman-company.md' },
          { title: 'FINIS', page: 'vendors/finis.md' },
          { title: 'Paragon Aquatics', page: 'vendors/paragon-aquatics.md' },
          { title: 'S.R. Smith', page: 'vendors/s-r-smith.md' },
          { title: 'Spectrum Aquatics', page: 'vendors/spectrum-aquatics.md' },
        ],
      },
      {
        title: 'Stopwatch and Clock Makers',
        children: [
          { title: 'Accusplit', page: 'vendors/accusplit.md' },
          { title: 'Cronus', page: 'vendors/cronus.md' },
          { title: 'Harper Time & Electronics', page: 'vendors/harper-time-electronics.md' },
          { title: 'Heuer', page: 'vendors/heuer.md' },
          { title: 'Intersil', page: 'vendors/intersil.md' },
          { title: 'Microsel', page: 'vendors/microsel.md' },
          { title: 'Siliconix', page: 'vendors/siliconix.md' },
          { title: 'Sycom', page: 'vendors/sycom.md' },
        ],
      },
      {
        title: 'Software Publishers',
        children: [
          { title: 'The Active Network', page: 'vendors/active-network.md' },
          { title: 'CleanEntries', page: 'vendors/cleanentries.md' },
          { title: 'GeoLogix', page: 'vendors/geologix.md' },
          { title: 'Hy-Point Software', page: 'vendors/hy-point-software.md' },
          { title: 'Hy-Tek Sports Software', page: 'vendors/hy-tek.md' },
          { title: 'Integrated Sports Systems', page: 'vendors/integrated-sports-systems.md' },
          { title: 'Lab Software Associates', page: 'vendors/lab-software-associates.md' },
          { title: 'Splash Software', page: 'vendors/splash-software.md' },
        ],
      },
      {
        title: 'Distributors and Service',
        children: [
          { title: 'ALGE-Swim USA', page: 'vendors/alge-swim-usa.md' },
          { title: 'Dexstar Communications', page: 'vendors/dexstar-communications.md' },
          { title: 'JS PROdisplays', page: 'vendors/js-prodisplays.md' },
          { title: 'Mod International', page: 'vendors/mod-international.md' },
          { title: 'Recreonics', page: 'vendors/recreonics.md' },
          { title: 'Seagull Enterprises', page: 'vendors/seagull.md' },
          { title: 'Spectronics', page: 'vendors/spectronics.md' },
          { title: 'Split Second Timing', page: 'vendors/split-second-timing.md' },
          { title: 'Sportyme', page: 'vendors/sportyme.md' },
          { title: 'Swimnerd', page: 'vendors/swimnerd.md' },
          { title: 'Thrifty Timing', page: 'vendors/thrifty-timing.md' },
          { title: 'The Woodchester Company', page: 'vendors/woodchester-company.md' },
        ],
      },
      {
        title: 'Component and Tool Makers',
        children: [
          { title: 'FTDI', page: 'vendors/ftdi.md' },
          { title: 'Mityvac', page: 'vendors/mityvac.md' },
          { title: 'MosChip Semiconductor', page: 'vendors/moschip.md' },
          { title: 'NovaStar', page: 'vendors/novastar.md' },
          { title: 'Prolific Technology', page: 'vendors/prolific.md' },
          { title: 'Trycom Technology', page: 'vendors/trycom.md' },
        ],
      },
      {
        title: 'Parent Companies',
        children: [
          { title: 'Essef', page: 'vendors/essef.md' },
          { title: 'General Aquatics', page: 'vendors/general-aquatics.md' },
          { title: 'KDI Corporation', page: 'vendors/kdi-corporation.md' },
          { title: 'Pentair', page: 'vendors/pentair.md' },
        ],
      },
      {
        title: 'Federations',
        children: [
          { title: 'Deutscher Schwimm-Verband', page: 'vendors/deutscher-schwimm-verband.md' },
          { title: 'Schwimmverband NRW', page: 'vendors/schwimmverband-nrw.md' },
        ],
      },
    ],
  },
  { title: 'Categories', page: 'categories.md' },
];
