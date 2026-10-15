---
title: Swiss Timing OSB11
description: >-
  The OSB11 is a Swiss Timing (Omega) swimming starting block with an adjustable inclined
  footrest, approved by FINA in 2008 and built in standard and relay break detection versions.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: OSB11
infobox:
  - label: Manufacturer
    value: '[Swiss Timing](vendors/swiss-timing.md)'
  - label: Part number
    value: '`3454.700.TS.BL` (with RBD), `3454.701.TS.BL` (standard)'
  - label: Type
    value: Swimming starting block
  - label: Platform
    value: 740 mm long, 9° slope, adjustable footrest (200 mm in 5 steps)
  - label: Relay detection
    value: Optional RBD contact, normally open, 13–18 kg actuation
  - label: Connection
    value: Two-pole cable from the RBD; in-deck wiring through a [deck plate](equipment/swimming/deck-cabling/swiss-timing-deck-plate.md)
  - label: Dimensions
    value: 780 × 570 × 650 mm (634–640 mm wide at the handle); platform 740 × 520 mm
  - label: Weight
    value: 47 kg (RBD), 41 kg (standard) per the manual; 45 kg per the datasheet
  - label: Introduced
    value: 2008 (FINA approval)
  - label: Manual
    value: OSB11 Swimming Starting Block User's Manual (3454.504.02)
---

<!--
Research notes, OSB11. Stub created 2026-10-14 while building out osb14.md; built out the same
day.

Held and read in full (sources/vendors/swiss-timing/touchpads-deckplates/ unless noted):
  - swiss-timing-osb11-user-manual-3454.504.02 (v1.8, December 2022), extraction read and
    drawing pages rendered with PyMuPDF. Builds: OSB11-RBD and OSB11 without start control.
    Parts: block 3454.013, rear door 3454.014, platform with footrest 3454.012, complete RBD
    3454.600 (upper frame 3454.010, lower frame 3454.011, rubber silentbloc 2659.056, spring
    contact 3393.018, contact screw 3393.019, adjustment screw 3393.020, isolation plate
    3393.021, isolation washer 3454.035 with M6 washer 9590.4003 from 2013, or 3393.022 with M8
    washer 9590.4004 before 2013, connection cable 3393.601), intermediate plate 3454.019, handle
    3454.015, platform held by A4 self-locking M8 nuts 9557.1505 with A4 M8 washers 9580.1614.
    Fixing kits 3454.716/718/720 for 6/8/10 lanes: drilling gauge 3454.030, drills 5/10/16 mm
    (9051.9803/9008/9814), four M8 x 90 internally threaded anchors 9039.8582, four washers
    3454.032, four M8 x 40 hex screws 3454.031. Position: 400 mm from the pool edge to the front
    of the base, 410 mm with an OCP5; handle in line with the touchpad edge, or the pool edge
    without pads; slotted holes give +/-10 mm. Fixed cabling: 120-122 mm hole 570 mm from the
    edge; holes 90-95 mm deep, anchors set per manual 3393.505. Spec table: 780 x 570 x 650,
    platform 740 x 520, 47/41 kg; platform white RAL 9010 with dark blue non-slip surface RAL
    5002, RAL 5017 since 2019; contact N.O. closing at the start, 13.0-18.0 kg, cable with
    two-pole plug about 140 cm, these three rows greyed out for the Simple build. Drawing:
    platform 740 long, 9 degree slope, footrest 200 mm in 5 steps; 400 mm handle-to-base and 340
    mm base length (780 overall); 530 mm at the rear, 650 max; 570 mm base width, 520 platform
    width, 634 mm across the handle. Test and adjust as OSB14: buzzer, dynamometer, two adjusting
    screws, back off four facets of 0.16 mm. Assembly: push RBD fully forward toward the handle
    before tightening; gaps 21-22 mm base to RBD, 4-5 mm base to platform. Top removal: six
    nuts under the top inside the base (manual colour-codes which to leave). Footrest removal at
    position 3. Inspection: cables every six months, fixing rigidity yearly. Maintenance chapter
    is the shared OSB text and names the OSB14 (left over from that text). Version history: 1.0
    01/01/10; 1.1 01/06/10; 1.2 14/07/11 washer and screw references, action force changed, new
    layout; 1.3 20/02/14 top-removal drawing, maintenance chapter added; 1.4 26/06/14 B 431
    silicone; 1.5 11/01/16 max depth 95 mm instead of 100; 1.6 11/01/17 technical data; 1.7
    18/03/20 RAL 5017; 1.8 12/12/2022 positioning figure.
  - swiss-timing-osb11-datasheet-v3-2019 (OSB11 anTiSlip V3, 03-2019; filed 2026-10-14 from
    swisstiming.com): fibreglass, 45 kg; overall 780 x 640 mm (width across the handle; the
    manual drawing gives 634); platform 740 x 520; max height 650; RBD N.O. 100 mA / 12 V on two
    banana plugs; RoHS, FINA approved; standard upgradeable to RBD; footrest adjustable or
    removable with standard tools; deck plate under each block centre; sets 3454.904-910.TS.xx
    (RBD) and 3454.914-920.TS.xx; options 3399.600 in-block speaker, deck plate sets
    3494.956/958/950, start deck plate set 3494.962, dynamometer 9051.1015; colours .BL 5017
    standard, .BK 9005, .RD 3002, .GY 7010, .IV 1014.
  - swiss-timing-aqu-concept-0017.509.02 (v4.9, January 2017), 3.2.1 with drawings: same
    positioning, 400 mm measured from the touchpad face (OCP5 10 mm thick); platform height range
    500-750 mm marked as the FINA limit; drilling gauge drawing shows the anchors 230 mm either
    side of the cable hole centre line. 3.2.4: internal loudspeaker fits the OSB11 or OSB14.
    Revision log 11.01.2017 adjusted OSB11 data.
  - swiss-timing-osb-maintenance-procedure-3454.517 (B, Sep 2025): shared maintenance text.
  - catalogs-brochures/swiss-timing-osb11-antislip-mounting-procedure-2025-3454.544.02 (10 Dec
    2025, 11 pp): photo steps for gluing a replacement anti-slip sheet with 3M Primer 94, a
    roller and a needle for bubbles; also applies to the footrest. Names no model; filed as OSB11
    by filename only.
  - relay-judging/swiss-timing-relay-break-detection-official-communication-307.225 (2001):
    force-operated contact principle from the OSB-6/OSB-7.
Web (2026-10-14):
  - FINA press release PR19, 7 April 2008 (worldaquatics.com/news/1914263): the Extraordinary
    Congress (Manchester) approved a starting platform with an adjustable back plate, to apply
    only after the Beijing Olympics. Verified.
  - Barlow, Halaki, Stuelcken, Greene, Sinclair, Human Movement Science 34 (2014) 178-186,
    doi 10.1016/j.humov.2014.02.002 (PubMed abstract read): OSB11's inclined rear plate gave
    rise to the kick start; ten developmental swimmers; neutral and rear-weighted positions
    faster to 15 m than front-weighted. Search summaries add the full text's claims of a 30
    degree footrest and five positions and the 2008 rule change; not read directly.
  - Slawson et al., Journal of Sports Sciences 31(5) (2013) 468-478, doi
    10.1080/02640414.2012.736631 (PubMed abstract): 46 elite British swimmers, over 1000
    starts on an instrumented block with force sensors in the main block and the footrest;
    higher than average peak forces went with better starts.
  - Slawson et al., Procedia Engineering 34 (2012) 801-806, doi 10.1016/j.proeng.2012.04.137
    (abstract via Semantic Scholar): rear knee angle; best starts peaked vertically at 80-90
    degrees and horizontally at 100-110 degrees.
  - Murrell and Dragunas, Western Undergraduate Research Journal: Health and Natural Sciences 3
    (2012), doi 10.5206/wurjhns.2012-13.1 (Crossref abstract): four subjects; track start faster
    to 2 m than grab start on a replica OSB11 with a force plate; says the block was then used at
    all international events.
  - de Jesus et al., Journal of Sports Science and Medicine 14(3) (2015) 591-601, PMC4541124:
    key points say FINA approved the OSB11 in 2008, with two horizontal and one vertical
    backstroke handgrip.
  - Yang, Physical Activity and Health 2(1) (2018) 15-21, doi 10.5334/paah.7 (review, read via
    the journal page): says the OSB11 first appeared at the Beijing Olympics. This conflicts with
    the FINA press release, under which the back-plate rule applied only after Beijing; flagged.
  - Other OSB11 studies found: Qiu et al., J Sports Sci 2021 (relay starts); Taladriz et al., J
    Biomech 2016; Langholz et al., icSPORTS 2015 (EMG); Navarro et al., J Hum Kinet 2025 (angular
    momentum); Kalaitzoglidis et al., JFMK 2025 (bi-finswimming).
  - Swimming World, "Tech Tuesday: New Starting Block Tested at World Championships" (David
    Rieder, 29 August 2023), search summary only (page reset the connection): the current Omega
    block, with five footrest settings, is used at global, national and US college meets; an
    unnamed prototype with side handles and a light strip was tried in the warm-up pool at the
    2022 and 2023 World Championships. Possibly related: US 12029959 (Swiss Timing, front
    support part for a starting block, 2024). Not linked to a model name; no stub.
  - Search summaries, unverified: a Polish journal (SRPC 2019) dates use in Slovakia from 2009;
    a German report puts first international use at the start of 2010. Swimsystems lists OSB-11
    blocks at Sjöbo, Sweden (no year). AVK Group lists 780 x 640 mm, 45 kg.
  - Patent: Swiss Timing calls the footrest patented; none found on Google Patents or Justia.
Dead ends: Swiss Timing manual URL (Instruction_Manuals/3454.504.02.pdf) returns 404, so the
manual is cited unlinked. ScienceDirect and ResearchGate refused fetches.
Still open: first competition use; the patent number; what changed in the 2011 action force.
-->

The OSB11 is a swimming starting block made by [Swiss Timing](../../../vendors/swiss-timing.md)
and sold under the Omega name. It has an adjustable inclined footrest at the back of the
platform, and is built either as a standard block or with a relay break detection (RBD) contact
for judging relay take-offs.[^manual][^datasheet] FINA approved starting platforms with an
adjustable back plate in April 2008, and researchers describe the OSB11 as the Omega block that
the change made possible.[^fina2008][^barlow][^dejesus] Its footrest gave rise to the kick start,
which several independent biomechanics papers have studied on OSB11 blocks.[^barlow][^yang]

## Role in the timing system

This section places the block in a Swiss Timing installation; starting blocks in general are
covered in the [starting blocks overview](index.md).

The standard OSB11 has no electrical function. The RBD build carries a force-operated contact
under the platform that closes when an outgoing relay swimmer pushes off, and the timing console
sets that moment against the previous swimmer's touch on the
[touchpad](../touchpad/ocp5.md).[^manual][^datasheet] The principle is the one Omega used in the
[OSB6](../relay-judging/osb6.md); the [relay take-off platforms overview](../relay-judging/index.md)
covers how the comparison is judged. In a pool wired in the deck, the block stands over a
[Swiss Timing deck plate](../deck-cabling/swiss-timing-deck-plate.md) that takes the RBD lead,
the touchpad, the pushbuttons and the lane loudspeaker. The plate is wired through an
[ODB10-SW](../deck-cabling/odb10-sw.md) distribution box to the
[Quantum Aquatics](../timers/quantum.md) timer.[^datasheet][^concept] An
[in-block loudspeaker](../external-speaker/swiss-timing.md) can be fitted inside the
base.[^concept]

## History

This section covers the block's introduction and its spread to the major meets.

FINA's Extraordinary Congress in Manchester approved, on 7 April 2008, a starting platform that
may carry an adjustable back plate, on condition that it apply only after the Beijing Olympic
Games.[^fina2008] Swiss Timing's own list of innovations dates its swimming start block with a
footrest to 2008.[^milestones] Researchers describe the OSB11 as the block that the rule change
made possible.[^barlow][^dejesus]

Sources disagree on when it was first used. A Swimming World feature and a 2018 review both
place its debut at the Beijing Olympics, which does not fit the condition FINA attached to the
rule.[^swimworld][^yang][^fina2008] Swimming World's own review of 2008 says Omega announced the
block in February of that year and that, although FINA had approved it, it was first made
available at the FINA World Cup meet in Stockholm after the Olympics.[^sw2009jan] In March 2009
the FINA Bureau put off introducing it, in the same rulings that covered that year's World
Championships.[^sw2009may] A 2013 study of block times at 26 international
championships from 2000 to 2012 counted the 2008 Olympics among the meets on the old platforms.
It dated OSB11 use from the 2009 World Championships in Rome, the first championship to use
it.[^garcia] The study found 8 of the 26 meets on OSB11 blocks from 2009 to 2012.[^garcia] One
later paper gives 2009, not 2008, as the year of FINA's approval.[^cicenia]

By 2011 the block had reached smaller swimming nations. A Faroese swimming blog reported OSB11
blocks fitted in two of the Faroe Islands' three 25 m pools, including Tórshavn, in May 2011. The
same post relayed a complaint from the coach of the Brazilian Olympic champion César Cielo that
Brazil had none, with the 2011 World Championships in Shanghai and the London Olympics
ahead.[^swimmersdaily] A 2012 paper described the block as in use at all international events,
and Swimming World calls it the international standard by 2012.[^murrell][^swimworld]

The OSB11 manual was first issued in January 2010.[^manual] Swiss Timing later sold the same
style of platform on its own as the [OSB12](osb12.md), for fitting to existing blocks, and in
2014 brought out the [OSB14](osb14.md), which carries the OSB12 platform on a narrower base and
shares the OSB11's RBD assembly, part `3454.600`.[^osb14m] In 2023 Swimming World reported
that a redesigned Omega block, with side handles and a light strip at the edge, had been
tried out in the warm-up pool at the 2022 and 2023 World Championships.[^techtuesday]

Swiss Timing's literature calls the footrest a patented feature. It says the rear knee drives
the start at a 90° angle, and that tests with top swimmers produced faster races than a
conventional block.[^manual][^datasheet] These are Swiss Timing's claims, and its documents give
no patent number.

## Design and construction

This section describes the parts of the block and how they fit together.

The block body carries a curved handle at the front and a door at the back that opens onto the
cable space inside.[^manual] The platform is 740 mm long and slopes down toward the water at 9°.
Its footrest sits at the back of the platform and can be moved over 200 mm in five steps, or
taken off with ordinary tools.[^manual][^datasheet] The datasheet gives fibreglass as the
material and lists an anti-slip top.[^datasheet] The block also has stainless steel parts, and
the manual's maintenance chapter singles out the handles and the RBD among them.[^manual]
One study notes that the handle offers two horizontal grips and one vertical grip for the
backstroke start.[^dejesus]

On the RBD build, the layer between the body and the platform is the RBD assembly: an upper and
a lower frame joined by rubber shock absorbers, with a spring contact and two adjusting screws
between them.[^manual] A plain intermediate plate takes its place on the standard build, and
Swiss Timing says a standard block can be converted to RBD later.[^manual][^datasheet] When the
RBD and platform are fitted, both are pushed fully forward toward the handle before the nuts
are tightened. The manual then calls for a gap of 21–22 mm between the body and the RBD and
4–5 mm between the body and the platform.[^manual] The platform is held by self-locking A4
stainless M8 nuts under the top.[^manual]

The [OBL2 Pro Backstroke Ledge](../backstroke-start/swiss-timing.md) is made to fit the
OSB11.[^obl2]

The manual gives the colours as a white platform, RAL 9010, with a non-slip surface in dark
blue. The blue changed from RAL 5002 to RAL 5017 in 2019.[^manual] The datasheet makes RAL 5017
the standard and offers black, red, grey and ivory as alternatives.[^datasheet]

## Relay break detection

This section covers the RBD contact and its sensitivity.

The RBD contact is normally open and closes at the start, when the swimmer's push loads the
platform. The manual sets the force needed to trip it at 13–18 kg, pressed at the middle of the
platform.[^manual] The datasheet rates the contact at 100 mA and 12 V at most.[^datasheet] The
manual's version history records a change to the action force in July 2011 without giving the
earlier figure.[^manual]

Testing uses a buzzer on the connection cable and a dynamometer. The buzzer must stay silent
with the platform unloaded and sound inside the 13–18 kg window when the platform is
pressed.[^manual] Two adjusting screws, reached through holes in the lower frame, set the
sensitivity. Each is turned in until the buzzer sounds, then backed off four facets of its
hexagon head, at 0.16 mm per facet, and trimmed a facet at a time until the reading falls inside
the window.[^manual] A buzzer that sounds with no load points to screws set too tight or a short
in the cable or between the frames. Silence under load points to a badly assembled RBD or screws
set too far apart.[^manual] Swiss Timing sells a dynamometer for the check, part
`9051.1015`.[^datasheet]

## Installation and mounting

This section covers placing and fixing the block on the deck.

The front of the base stands 400 mm from the pool edge, or 410 mm where an
[OCP5 touchpad](../touchpad/ocp5.md) hangs on the wall. The handle lines up with the edge of the
touchpad, or with the pool edge where no touchpads are fitted.[^manual][^concept] Slotted fixing
holes allow the block to be moved 10 mm either way to correct its alignment.[^manual]

Each block stands on four M8 anchors set in the deck. A drilling gauge, part `3454.030`, marks
the holes, which are drilled in stages to 16 mm and to a depth of 90–95 mm.[^manual] The base is
then held by four M8 × 40 stainless screws with washers.[^manual] The manual's version history
shows the maximum depth cut from 100 mm in January 2016.[^manual] It also says the block works
properly only if it is fixed rigidly.[^manual]

Where the pool is wired in the deck, a 120–122 mm hole is cut 570 mm from the pool edge for the
deck plate, and the drilling gauge includes a 120 mm opening for it. On the gauge drawing the
anchors sit 230 mm either side of that hole's centre line.[^concept]

The OSB11's 740 × 520 mm top and 9° slope fall inside the World Aquatics limits described in the
[starting blocks overview](index.md#governing-body-requirements), and the Swimming Concept
drawing marks the 0.5–0.75 m height range on the block.[^concept]

## Care and maintenance

This section summarizes Swiss Timing's maintenance schedule, which applies to all the OSB
footrest blocks.

The manual asks for the cable connections to be checked every six months and the rigidity of
the fixing once a year.[^manual] Its maintenance chapter is shared with the OSB12 and OSB14
manuals and also issued as a separate leaflet. It is about keeping the stainless parts free of
corrosion.[^manual][^maint] It asks for a basic wash every week and a full clean with the top
removed several times a year, with particular care given to the RBD and the handles. Cleaning
is done with fresh water, not pool water, and the parts are dried with a clean cloth. Wire
brushes, steel wool, emery paper and other abrasives are ruled out, and the block is taken apart
only with tools made for stainless steel. A tube of B 431 water-repellent silicone comes with
each mounting set and is reapplied after a full clean.[^manual][^maint] The OSB11 manual's copy
of this chapter refers to the OSB14 by name, a leftover from the shared text.[^manual]

To remove the top, six nuts under it, inside the body, are undone. The footrest comes off with
four side screws once it is set to position 3.[^manual] Swiss Timing also publishes
step-by-step instructions, dated December 2025, for gluing a replacement anti-slip sheet onto a
platform or footrest with a primer and a roller. The sheet does not name a block
model.[^antislip]

## Research on starts from the block

This section summarizes independent studies that used the OSB11; the kick start technique itself
is covered in the [starting blocks overview](index.md#the-kick-start).

Many published studies of the kick start, in which the rear foot is placed on the inclined
footrest, were carried out on OSB11 blocks.[^barlow][^yang] A study of 46 elite British swimmers
on an instrumented OSB11, with force sensors in both the main block and the footrest, found that
those who produced higher than average peak forces tended to make better starts.[^slawson13] A
related study by the same group found that in the best starts, peak vertical force came with the
rear knee at 80–90° and peak horizontal force at 100–110°.[^slawson12] With ten developmental
swimmers, a University of Sydney study found neutral and rear-weighted positions faster to 15 m
than a front-weighted one.[^barlow]

The change of block also shows in championship results. A study of 50 m and 100 m freestyle at
international meets from 2000 to 2012 found that on the old platforms, shorter block times went
with faster final times, and 50 m medallists left the block sooner than semi-finalists. On the
OSB11 the relationship ran the other way, and block time mattered to the result only in the
women's 50 m.[^garcia]

## Compared with the OSB14

This section sets out how the OSB11 differs from its smaller sibling.

The [OSB14](osb14.md) shares the OSB11's RBD assembly and the same platform length, slope and
footrest travel, but uses the OSB12 platform, part `3454.041`, rather than the OSB11's own,
part `3454.012`.[^manual][^osb14m] Its base is much narrower: Swiss Timing gives 200 × 320 mm
against the OSB11's 570 mm width, and the OSB14 manual places its block 238 mm from the pool
edge against the OSB11's 400 mm.[^osb14m][^manual] The OSB14 weighs 29 kg with RBD in its manual, against 47 kg for the
OSB11.[^osb14m][^manual]

## Specifications

This section lists the figures given by Swiss Timing; where the manual and the datasheet differ,
both are shown.

| Specification | Value |
|---|---|
| Overall dimensions | 780 × 570 × 650 mm (manual); 780 × 640 mm footprint, 650 mm maximum height (datasheet)[^manual][^datasheet] |
| Width across the handle | 634 mm (manual drawing); 640 mm (datasheet)[^manual][^datasheet] |
| Platform | 740 × 520 mm[^manual][^datasheet] |
| Platform slope | 9°[^manual] |
| Footrest | Adjustable over 200 mm in 5 steps[^manual] |
| Weight | 47 kg (RBD) and 41 kg (standard) in the manual; 45 kg in the datasheet[^manual][^datasheet] |
| Material | Fibreglass[^datasheet] |
| Colours | Platform white RAL 9010, blue non-slip surface RAL 5017 since 2019 (RAL 5002 before); black, red, grey, ivory optional[^manual][^datasheet] |
| RBD contact | Normally open, closes at the start; 100 mA, 12 V maximum[^manual][^datasheet] |
| RBD actuation force | 13–18 kg[^manual] |
| RBD connection | Cable with a two-pole plug, about 140 cm (manual); cable with two banana plugs (datasheet)[^manual][^datasheet] |
| Certification | FINA approved; RoHS compliant (Swiss Timing)[^datasheet] |

The manual's table gives the contact, force and connection figures for the RBD build only. Its
780 × 570 mm figure is the base, while the datasheet's 640 mm width is measured across the
handle.[^manual][^datasheet]

## Part numbers and accessories

This section lists the part numbers Swiss Timing gives for the block and its fittings.

| Part | Description |
|---|---|
| `3454.700.TS.BL` | OSB11 with RBD, blue[^datasheet] |
| `3454.701.TS.BL` | OSB11 standard, blue[^datasheet] |
| `3454.904`–`3454.910.TS.xx` | Sets of 4, 5, 6, 8 or 10 blocks with RBD; `xx` is the colour code[^datasheet] |
| `3454.914`–`3454.920.TS.xx` | Sets of 4, 5, 6, 8 or 10 standard blocks[^datasheet] |
| `3454.013` | Block body[^manual] |
| `3454.014` | Rear door[^manual] |
| `3454.012` | Platform with footrest[^manual] |
| `3454.015` | Handle[^manual] |
| `3454.600` | Complete RBD assembly[^manual] |
| `3454.019` | Intermediate plate, standard build[^manual] |
| `3393.601` | RBD connection cable[^manual] |
| `3454.716`, `3454.718`, `3454.720` | Fixing material for 6, 8 or 10 lanes[^manual] |
| `3454.030` | Drilling gauge[^manual] |
| `9039.8582` | M8 × 90 anchor[^manual] |
| `3454.031` | M8 × 40 stainless hex screw[^manual] |
| `3399.600` | [In-block loudspeaker](../external-speaker/swiss-timing.md) for fixed wiring[^datasheet] |
| `3399.610` | In-block loudspeaker for mobile wiring, with a Tu4pM connector (dealer listing)[^ast] |
| `3494.956`, `3494.958`, `3494.950` | Deck plate sets for 6, 8 or 10 lanes[^datasheet] |
| `3494.962` | Start deck plate set for the start system[^datasheet] |
| `9051.1015` | Dynamometer for RBD calibration[^datasheet] |

Colour codes are `.BL` (blue RAL 5017), `.BK` (black RAL 9005), `.RD` (red RAL 3002), `.GY` (grey
RAL 7010) and `.IV` (ivory RAL 1014).[^datasheet] An Australian dealer gives the deck plate sets as
`3274.926`–`3274.930` and the start set as `3274.635` rather than the datasheet's `3494` numbers.[^ast]
Swiss Timing's October 2015 datasheet gave the weight as 47 kg, matching the manual.[^ds2015] The RBD isolation washer changed in 2013 from
`3393.022` to `3454.035`.[^manual]

## See also

- [OSB14](osb14.md): the smaller block that shares its RBD
- [OSB12](osb12.md): the platform sold on its own
- [OSB9](osb9.md): the earlier Swiss Timing block
- [Swiss Timing deck plate](../deck-cabling/swiss-timing-deck-plate.md): the plate under the block
- [OBL2 Pro Backstroke Ledge](../backstroke-start/swiss-timing.md): the backstroke ledge made for it
- [Omega OSB6](../relay-judging/osb6.md): the first Omega block with a relay contact
- [Starting blocks](index.md): the starting blocks overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Swiss Timing, OSB11 Swimming Starting Block User's Manual (3454.504.02, v1.8, December 2022)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.504.02_OSB11_User_Manual.pdf).
[^datasheet]: [Swiss Timing, OSB11 Swimming Starting Block datasheet (V3, 03-2019)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_OSB11_anTiSlip_0519.pdf).
[^concept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02_AQU_Concept.pdf), 3.2.
[^osb14m]: [Swiss Timing, OSB14 Swimming Starting Block User's Manual (3454.519.02, v1.4, March 2020)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.519.02_OSB14_User_Manual.pdf).
[^maint]: [Swiss Timing, Maintenance and Prevention for OSB Starting Block (3454.517, revision B, September 2025)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.517_OSB_Maintenance_Procedure.pdf).
[^antislip]: [Swiss Timing, Application Instructions for Antislip (3454.544.02, 10 December 2025)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.544.02_OSB11_Antislip_Mounting_Procedure_2025.pdf).
[^obl2]: [Swiss Timing, OBL2-PRO Omega Backstroke Ledge User's Manual (3454.521.02)](https://resources.fina.org/fina/document/2021/01/12/74da06fc-1f8a-4f5d-af57-4149ae1fb513/omega_backstroke_ledge_user_manual.pdf).
[^fina2008]: [World Aquatics, PR19: FINA, first International Federation to approve the new WADA Code](https://www.worldaquatics.com/news/1914263/pr19-fina-first-international-federation-to-approve-the-new-wada-world-anti-doping-code-) (7 April 2008).
[^barlow]: [Barlow et al., Kick start positions on OMEGA OSB11 blocks and time to 15 m](https://doi.org/10.1016/j.humov.2014.02.002) (Human Movement Science, 2014).
[^slawson13]: [Slawson et al., Start performance and force on the OSB11 block and footrest](https://doi.org/10.1080/02640414.2012.736631) (Journal of Sports Sciences, 2013).
[^slawson12]: [Slawson et al., Knee angle and force production in starts using the OSB11 block](https://doi.org/10.1016/j.proeng.2012.04.137) (Procedia Engineering, 2012).
[^murrell]: [Murrell and Dragunas, Two swimming start techniques from the Omega OSB11](https://doi.org/10.5206/wurjhns.2012-13.1) (WURJ Health and Natural Sciences, 2012).
[^dejesus]: [de Jesus et al., Neuromuscular activity during two backstroke start variants](https://pmc.ncbi.nlm.nih.gov/articles/PMC4541124/) (J Sports Sci Med, 2015).
[^yang]: [Yang, Kinematics research progress of swim-start on the new start block](https://doi.org/10.5334/paah.7) (Physical Activity and Health, 2018).
[^ds2015]: Swiss Timing, OSB11 Swimming Starting Block datasheet (OSB11/10-2015).
[^ast]: [Australasia Sports Timing, OSB11 Swimming Starting Blocks](https://www.sportstiming.com.au/shop/Aquatic+Sports/Swimming/OSB11+Swimming+Starting+Blocks%3Fsku=OSB11.html).
[^milestones]: [Swiss Timing, Innovation milestones](https://www.swisstiming.com/company/innovation-milestones/) (2008: swimming start block with footrest).
[^swimworld]: [Swimming World, Why the first second of a race changed forever](https://www.swimmingworldmagazine.com/news/why-the-first-second-of-a-race-changed-forever/).
[^garcia]: [Garcia-Hermoso et al., Block times with the traditional and the new starting platforms](https://www.jssm.org/volume12/iss4/cap/jssm-12-698.pdf) (JSSM, 2013).
[^cicenia]: [Cicenia, Oster and Mokha, Kick plate position and track start biomechanics](https://journalofexerciseandnutrition.com/index.php/JEN/article/view/46) (J Exercise and Nutrition, 2019).
[^swimmersdaily]: [Swimmer's Daily, Brazil has no Omega OSB11 starting blocks?](https://www.swimmersdaily.com/2011/05/brazil-has-no-omega-osb11-starting-blocks/) (5 May 2011).
[^techtuesday]: [Swimming World, Tech Tuesday: New starting block tested at World Championships](https://www.swimmingworldmagazine.com/news/tech-tuesday-new-starting-block-tested-at-world-championships/) (2023).
[^sw2009jan]: Swimming World, January 2009, Year in Review: February 2008.
[^sw2009may]: Swimming World, May 2009, FINA Bureau announces rulings on technology.
