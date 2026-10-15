---
title: Swiss Timing OSB14
description: >-
  The OSB14 is a Swiss Timing (Omega) swimming starting block with an adjustable inclined footrest
  and a small base, sold in a standard build and one with relay break detection.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: OSB14
infobox:
  - label: Manufacturer
    value: '[Swiss Timing](vendors/swiss-timing.md)'
  - label: Part number
    value: '`3454.707TS.BL` (with RBD), `3454.708TS.BL` (standard)'
  - label: Type
    value: Swimming starting block
  - label: Platform
    value: 740 mm long, 9° slope, adjustable footrest (200 mm in 5 steps)
  - label: Relay detection
    value: Optional RBD contact, normally open, 13–18 kg actuation
  - label: Connection
    value: Two-pole cable from the RBD; in-deck wiring through a [deck plate](equipment/swimming/deck-cabling/swiss-timing-deck-plate.md)
  - label: Dimensions
    value: 737 × 314 × 655 mm; platform 740 × 520 mm (manual)
  - label: Weight
    value: 29 kg (RBD), 27 kg (standard) per the manual; 31 kg per the datasheet
  - label: Introduced
    value: '2014'
  - label: Manual
    value: OSB14 Swimming Starting Block User's Manual (3454.519.02)
---

<!--
Research notes, OSB14. Stub created 2026-10-13 while building out swiss-timing-deck-plate.md;
built out 2026-10-14.

Held and read in full (sources/vendors/swiss-timing/touchpads-deckplates/):
  - swiss-timing-osb14-user-manual-3454.519.02 (v1.4, 18 March 2020). Read the extraction and
    rendered the drawing pages with PyMuPDF. Gives: the two builds and their parts (base with
    rear door and handle 3454.070; platform with footrest 3454.041, which the parts list calls
    the OSB12 platform; complete RBD 3454.600 with upper frame 3454.010, lower frame 3454.011,
    rubber silentbloc 2659.056, spring contact 3393.018, contact screw 3393.019, adjustment
    screw 3393.020, isolation plate 3393.021, isolation washer 3454.035, connection cable
    3393.601; intermediate plate 3454.019 in place of the RBD on the standard build; six A4
    conical M8 screws for the platform; fixing kits 3454.726/728/730 for 6/8/10 lanes). Fixing:
    drilling gauge 3454.074, drills 5/10/16 mm (9051.9803/9008/9814), holes 90-95 mm deep, M8 x
    90 pegs 9039.8582 set per manual 3393.505, four A4 M8 x 45 screws 3454.037 with A4 washers
    3454.032 (M8 30) or 3454.034 (M8 24) where space is tight. Fixed cabling needs a 120-122 mm
    hole; gauge has a 120 mm hole. Spec table: RBD contact, action force and connection cells
    are greyed out for the Simple build. Test with buzzer and dynamometer; inspection every six
    months (cables) and yearly (fixing). Troubleshooting and sensitivity procedure: 0.16 mm per
    facet of the adjusting screw, back off four facets after the buzzer sounds. Footrest removal
    at position 3. Maintenance chapter is the shared OSB stainless-steel text (B 431 silicone,
    tube in each mounting set). Says OBL1 mounts on the platform. Version history: 1.0
    15/05/14, 1.1 26/06/14 (silicone), 1.2 11/01/16 (M8x40 screws to M8x45, max depth 100 to 95
    mm), 1.3 14/09/16 (drawing dimensions), 1.4 18/03/20 (blue RAL 5017).
    Drawings (Fig. 3, 4): platform 740 long, 518 wide; 9 degree slope; footrest adjustable 200 mm
    in 5 steps; front edge 423 mm above deck; 538 mm at the rear of the platform, 655 max; base
    footprint 314 wide; handle 400 wide, 146 mm ahead of the base; overall length 737.
    DISCREPANCY: section 2.1 text says 238 mm (248 with OCP5) from the pool edge to the front of
    the base, but the same manual's Fig. 3 and the Concept guide drawing dimension 238/248 mm to
    the centre line of the 120 mm cable hole and about 185 mm to the front of the base. Flagged
    in the article. The deck plate article repeats the text figure.
  - swiss-timing-aqu-concept-0017.509.02 (Swimming Concept, v4.9, January 2017), 3.2.2 OSB14
    (drawing only): anchor pattern four 16 mm holes at 175 and 310 mm from the touchpad face,
    240 mm apart across; 120 mm hole needed only with fixed cabling through Swiss Timing deck
    plates. 3.2.4: internal loudspeaker fits inside OSB11 or OSB14. Revision log: "new version
    of OSB14" added 14.09.2016.
  - swiss-timing-osb11-user-manual-3454.504.02 (v1.8, Dec 2022) and
    swiss-timing-osb12-user-manual-3454.507.02 (v1.4, Mar 2020), read for lineage: OSB11 sits
    400 mm back (410 with OCP5) with its cable hole at 570 mm; OSB11 uses its own platform
    3454.012 but the same RBD assembly 3454.600; OSB12 is the platform 3454.041 sold to fit
    existing blocks. Both manuals' maintenance chapter names the OSB14, a copy left over from the
    shared text.
  - swiss-timing-osb-maintenance-procedure-3454.517 (B, 17 Sep 2025): same maintenance text as a
    standalone multilingual leaflet.
  - relay-judging/swiss-timing-relay-break-detection-official-communication-307.225 (V002,
    2001): force-operated contact principle from the OSB-6/OSB-7, 0.03 s allowance; general
    background, belongs on the relay take-off overview rather than here.
  - Datasheets, filed 2026-10-14 from swisstiming.com: swiss-timing-osb14-datasheet-v2-2019
    (OSB14 anTiSlip V2, 03-2019): replaces the discontinued OSB9 with a similar mounting;
    fibreglass, 31 kg; base 200 x 320 mm, smaller than OSB11; overall 739 x 518, platform 740 x
    518, height max 655; RBD contacts N.O., max 100 mA / 12 V, cable with two banana plugs;
    RoHS; FINA approved; standard build upgradeable to RBD; footrest adjustable or removable with
    ordinary tools; colours .BL 5017 (standard), .BK 9005, .RD 3002, .GY 7010, .IV 1014; sets of
    4/5/6/8/10 3454.924-930.TS.xx (RBD) and 3454.934-940.TS.xx (simple); options 3399.600
    in-block loudspeaker, deck plate sets 3494.956/958/950 (6/8/10 lanes), start deck plate set
    3494.962, dynamometer 9051.1015.
Web (2026-10-14):
  - AVK Group listing 3454.707.TS.BL: fibreglass, 31 kg, 739 x 518, max 655, colours.
  - HTS Group (NZ) listing SKU 01424, and the identical Australasia Sports Timing page
    (sportstiming.com.au, same SKU, checked 2026-10-14): weight 28 kg, which matches the
    October 2015 datasheet (swiss-timing-osb14-datasheet-2015, Wayback copy of
    DOCM_AQ_OSB14_StartingBlock_1015_EN); part numbers 3454.707 and
    3454.708; deck plate sets given as 3274.926/928/930 and start set 3274.635, which differ
    from the datasheet's 3494.95x numbers (3274.635 is the older basic deck plate set per the
    Concept guide); adds a mobile in-block loudspeaker 3399.610 with a Tu4pM connector. Not
    otherwise corroborated.
  - Swimsystems (Sweden) project list: Bodin simhallen, Bodø, Norway, 2015 renovation with
    Omega OSB14 blocks, chosen for a narrow pool edge.
  - World Aquatics Facilities Rules 2021-2025, FR 2.1.8 / 2.2.8 (held locally): platform 0.5-0.75
    m above water, top at least 0.5 x 0.5 m, slip-resistant, slope at most 10 degrees, adjustable
    back plate allowed.
  - Patent: Swiss Timing calls the footrest feature patented (OSB11/12/14 literature). No patent
    number was found on Google Patents or Justia; US20120192346A1 (Swiss Timing, inventor
    Martinus Maas, push-off plate with pressure sensor, abandoned) and US12330026B2 (base plate
    for a starting block, 2025) are not the footrest patent. Attribute the claim.
Dead ends: Swiss Timing's manual URLs (Instruction_Manuals/3454.519.02.pdf) return 404 as of
2026-10-14, so the manual is cited unlinked. Swimming World "Tech Tuesday" starting block piece
did not load.
Still open: exact launch event; the patent number; which weight figure is current; what changed
in the September 2016 "new version".
-->

The OSB14 is a swimming starting block made by [Swiss Timing](../../../vendors/swiss-timing.md)
and sold under the Omega name. It is a fibreglass block that carries the platform and adjustable
inclined footrest of the [OSB12](osb12.md), and is built either as a standard block or with a
relay break detection (RBD) contact for judging relay take-offs.[^manual][^datasheet] Swiss
Timing describes it as the replacement for the [OSB9](osb9.md) and notes that its base is
smaller than that of the [OSB11](osb11.md), so that it fits pools with a narrow deck at the
start end.[^datasheet]

## Role in the timing system

This section places the block in a Swiss Timing installation; starting blocks in general are
covered in the [starting blocks overview](index.md).

The OSB14 is wired like the [OSB11](osb11.md#role-in-the-timing-system). The standard build has
no electrical function, and the RBD build sends a contact signal when the outgoing relay swimmer
pushes off.[^manual][^datasheet] In a pool wired in the deck, that lead plugs into a
[Swiss Timing deck plate](../deck-cabling/swiss-timing-deck-plate.md) under the block, which is
wired through an [ODB10-SW](../deck-cabling/odb10-sw.md) distribution box to the
[Quantum Aquatics](../timers/quantum.md) timer.[^datasheet][^concept] An
[in-block loudspeaker](../external-speaker/swiss-timing.md) can be fitted inside the
base.[^concept]

What sets the OSB14 apart is where it can stand. Its base is 200 × 320 mm, against the OSB11's
570 mm width, and its manual places it 238 mm from the pool edge, against 400 mm for the
OSB11.[^datasheet][^manual][^osb11m] Swiss Timing aims it at pools with little floor space at the
start end.[^datasheet] Its Scandinavian and Benelux distributors add that the narrow base lets it
be fixed on a headwall or end wall.[^swimprod][^varioplay]

## History

This section covers the block's place in the Omega line and its revisions.

The OSB14's manual was first issued in May 2014.[^manual] It followed the OSB11, the full-size
footrest block that Swiss Timing had documented since 2010, and the OSB12, the footrest platform
sold on its own for fitting to existing blocks.[^osb11m][^osb12m] The OSB14 reuses the OSB12
platform, part `3454.041`, and the OSB11's RBD assembly, part `3454.600`, on a new and narrower
base.[^manual][^osb11m] Swiss Timing presents it as the successor to the discontinued
[OSB9](osb9.md), whose mounting it shares closely enough to ease a direct swap. Its datasheet
already said so in October 2015.[^ds2015][^datasheet] A Swedish distributor lists OSB14 blocks in
a 2015 renovation of the Bodin pool in Bodø, Norway, and notes that the block suits that
pool's narrow edge.[^swimsystems]

Swiss Timing's literature for the footrest blocks calls the footrest a patented feature and
says tests with top swimmers produced faster races than a conventional block.[^manual][^osb11m]
Both are Swiss Timing's claims; no patent number is given in its documents.

### The 2016 revision

In September 2016 the Swimming Concept guide added a new version of the OSB14, and the manual's
drawing dimensions were updated the same month.[^concept][^manual] Swiss Timing did not say what
changed. Comparing its two datasheets suggests the base was revised. The October 2015 sheet shows
a base 320 mm wide and 362 mm long with the handle 141 mm ahead of it, and gives the weight as
28 kg. The 2019 sheet and the revised manual show a base 314 mm wide and 360 mm long, the handle
146 mm ahead, and a weight of 31 kg in the datasheet.[^ds2015][^datasheet][^manual] The
datasheets still quote a 200 × 320 mm base footprint in their text.[^ds2015][^datasheet]
Some dealers still list the older 28 kg figure.[^hts][^ast]

## Design and construction

This section describes the parts of the block and how they fit together.

The block has three main parts: the base, the platform and an intermediate layer between
them.[^manual] The base carries a handle at the front and a door at the back that opens onto the
cable space inside.[^manual] The platform is 740 mm long and slopes down toward the water at 9°.
Its footrest sits at the back of the platform and can be moved over 200 mm in five steps, or
taken off with ordinary tools.[^manual][^datasheet] The datasheet gives fibreglass as the
material and lists an anti-slip top.[^datasheet] The block also has stainless steel parts, and
the manual's maintenance chapter singles out the handles and the RBD among them.[^manual]

On the RBD build the intermediate layer is the RBD assembly: an upper and a lower frame joined
by rubber shock absorbers, with a spring contact and two adjusting screws between
them.[^manual] On the standard build a plain intermediate plate takes its place.[^manual]
Because both builds share the same base and platform, Swiss Timing says a standard block can be
converted to RBD later.[^datasheet] Six A4 stainless conical M8 screws hold the platform to the
layer beneath it.[^manual]

The manual states that the Omega Backstroke Ledge [OBL1](../backstroke-start/obl1.md) mounts on
the platform.[^manual] Its successor, the
[OBL2 Pro Backstroke Ledge](../backstroke-start/swiss-timing.md), is also described as fitting
the OSB14.[^obl2]

The manual gives the colours as white, RAL 9010, with a non-slip surface in dark blue. The blue
changed from RAL 5002 to RAL 5017 in 2019.[^manual] The datasheet makes RAL 5017 the standard
and offers black, red, grey and ivory as alternatives.[^datasheet]

## Relay break detection

This section covers the RBD contact.

The OSB14 uses the same RBD assembly, test and adjustment as the OSB11: a normally open contact
that trips at 13–18 kg, checked with a buzzer and a dynamometer and set at two adjusting screws.
The [OSB11 article](osb11.md#relay-break-detection) describes the procedure.[^manual][^osb11m]
One difference in the OSB14 manual is how the platform is held while the contact is set: six
conical screws on top of the platform rather than nuts underneath it.[^manual][^osb11m] The
datasheet rates the contact at 100 mA and 12 V at most.[^datasheet]

## Installation and mounting

This section covers placing and fixing the block on the deck.

The manual's text puts the front of the base 238 mm from the pool edge, or 248 mm where an
[OCP5 touchpad](../touchpad/ocp5.md) hangs on the wall. The handle must line up with the edge of
the touchpad, or with the pool edge where no touchpads are fitted.[^manual] The manual's own
positioning drawing, and the matching drawing in the Swimming Concept guide, put the 238 mm and
248 mm figures on the centre line of the cable hole instead, with the front of the base about
185 mm from the edge.[^manual][^concept] The drawings are the more specific of the two, but the
manual does not reconcile them.

Each block stands on four M8 anchors. A drilling gauge, part `3454.074`, marks the holes, which
are drilled in stages to 16 mm and to a depth of 90–95 mm.[^manual] The manual's version
history shows the maximum depth cut from 100 mm and the fixing screws lengthened from M8 × 40 to
M8 × 45 in January 2016.[^manual] The base is held by four M8 × 45 stainless screws with
washers, and its slotted holes allow a small correction in alignment.[^manual] The manual says
the block works properly only if it is fixed rigidly.[^manual]

Where the pool is wired in the deck, a 120–122 mm hole is cut under the block for the deck
plate, and the drilling gauge includes a 120 mm opening for it.[^manual][^concept] The
Swimming Concept drawing gives the four anchors as two pairs, 175 mm and 310 mm back from the
touchpad face and 240 mm apart.[^concept]

The OSB14's 740 × 520 mm top and 9° slope fall inside the World Aquatics limits described in the
[starting blocks overview](index.md#governing-body-requirements). Its height above the water
depends on the deck, since the front edge of the platform sits 423 mm above the deck
surface.[^manual]

## Care and maintenance

This section summarizes Swiss Timing's maintenance schedule.

The manual asks for the cable connections to be checked every six months and the rigidity of
the fixing once a year.[^manual] Its stainless-steel cleaning chapter is the one shared by all
the OSB blocks and is summarized in the [OSB11 article](osb11.md#care-and-maintenance). The
OSB14 manual is the only one whose copy names the right block.[^manual][^osb11m][^maint] To take
the footrest off, it is set to position 3, the platform is turned to reach the side screws, and
the four screws are undone.[^manual]

## Specifications

This section lists the figures given by Swiss Timing; where the manual and the datasheet differ,
both are shown.

| Specification | Value |
|---|---|
| Overall dimensions | 737 × 314 × 655 mm (manual); 739 × 518 mm footprint, 655 mm maximum height (datasheet)[^manual][^datasheet] |
| Platform | 740 × 520 mm (manual table); 740 × 518 mm (datasheet and manual drawing)[^manual][^datasheet] |
| Base footprint | 200 × 320 mm[^datasheet] |
| Platform slope | 9°[^manual] |
| Platform front edge | 423 mm above deck[^manual] |
| Footrest | Adjustable over 200 mm in 5 steps[^manual] |
| Weight | 29 kg (RBD) and 27 kg (standard) in the manual; 31 kg in the datasheet[^manual][^datasheet] |
| Material | Fibreglass[^datasheet] |
| Colours | White RAL 9010 with blue non-slip surface, RAL 5017 since 2019 (RAL 5002 before); black, red, grey, ivory optional[^manual][^datasheet] |
| RBD contact | Normally open, closes at the start; 100 mA, 12 V maximum[^manual][^datasheet] |
| RBD actuation force | 13–18 kg[^manual] |
| RBD connection | Cable with a two-pole plug, 1400 mm (manual); cable with two banana plugs (datasheet)[^manual][^datasheet] |
| Certification | FINA approved; RoHS compliant (Swiss Timing)[^datasheet] |

Swiss Timing's October 2015 datasheet gave 28 kg, the figure that two dealers in Australia and New Zealand still list.[^ds2015][^hts][^ast] The manual's table gives the contact,
force and connection figures for the RBD build only.[^manual]

## Part numbers and accessories

This section lists the part numbers Swiss Timing gives for the block and its fittings.

| Part | Description |
|---|---|
| `3454.707TS.BL` | OSB14 with RBD, blue[^datasheet] |
| `3454.708TS.BL` | OSB14 standard, blue[^datasheet] |
| `3454.924`–`3454.930.TS.xx` | Sets of 4, 5, 6, 8 or 10 blocks with RBD; `xx` is the colour code[^datasheet] |
| `3454.934`–`3454.940.TS.xx` | Sets of 4, 5, 6, 8 or 10 standard blocks[^datasheet] |
| `3454.070` | Base, with handle and rear door[^manual] |
| `3454.041` | OSB12 platform with footrest[^manual] |
| `3454.600` | Complete RBD assembly[^manual] |
| `3454.019` | Intermediate plate, standard build[^manual] |
| `3393.601` | RBD connection cable[^manual] |
| `3454.726`, `3454.728`, `3454.730` | Fixing material for 6, 8 or 10 lanes[^manual] |
| `3454.074` | Drilling gauge[^manual] |
| `9039.8582` | M8 × 90 anchor peg[^manual][^concept] |
| `3454.037` | A4 M8 × 45 screw[^manual] |
| `3399.600` | [In-block loudspeaker](../external-speaker/swiss-timing.md) for fixed wiring[^datasheet] |
| `3399.610` | In-block loudspeaker for mobile wiring, with a Tu4pM connector (dealer listings)[^hts][^ast] |
| `3494.956`, `3494.958`, `3494.950` | Deck plate sets for 6, 8 or 10 lanes[^datasheet] |
| `3494.962` | Start deck plate set for the start system[^datasheet] |
| `9051.1015` | Dynamometer for RBD calibration[^datasheet] |

Colour codes are `.BL` (blue RAL 5017), `.BK` (black RAL 9005), `.RD` (red RAL 3002), `.GY` (grey
RAL 7010) and `.IV` (ivory RAL 1014).[^datasheet] Dealers in New Zealand and Australia give the deck plate sets
as `3274.926`–`3274.930` and the start set as `3274.635`, which do not match the
datasheet.[^hts][^ast]

## See also

- [OSB11](osb11.md): the larger footrest block that preceded it
- [OSB12](osb12.md): the platform the OSB14 shares
- [OSB9](osb9.md): the earlier block it replaces
- [Swiss Timing deck plate](../deck-cabling/swiss-timing-deck-plate.md): the plate under the block
- [OBL2 Pro Backstroke Ledge](../backstroke-start/swiss-timing.md): the backstroke ledge that fits the platform
- [Omega OSB6](../relay-judging/osb6.md): the first Omega block with a relay contact
- [Starting blocks](index.md): the starting blocks overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Swiss Timing, OSB14 Swimming Starting Block User's Manual (3454.519.02, v1.4, March 2020)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.519.02_OSB14_User_Manual.pdf).
[^datasheet]: [Swiss Timing, OSB14 Swimming Starting Block datasheet (V2, 03-2019)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_OSB14_anTiSlip_0519_EN.pdf).
[^concept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02_AQU_Concept.pdf), 3.2.
[^osb11m]: [Swiss Timing, OSB11 Swimming Starting Block User's Manual (3454.504.02, v1.8, December 2022)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.504.02_OSB11_User_Manual.pdf).
[^osb12m]: [Swiss Timing, OSB12 Swimming Starting Block User's Manual (3454.507.02, v1.4, March 2020)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.507.02_OSB12_User_Manual.pdf).
[^maint]: [Swiss Timing, Maintenance and Prevention for OSB Starting Block (3454.517, revision B, September 2025)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.517_OSB_Maintenance_Procedure.pdf).
[^obl2]: [Swiss Timing, OBL2-PRO Omega Backstroke Ledge User's Manual (3454.521.02)](https://resources.fina.org/fina/document/2021/01/12/74da06fc-1f8a-4f5d-af57-4149ae1fb513/omega_backstroke_ledge_user_manual.pdf).
[^swimsystems]: [Swimsystems, Projects](https://swimsystems.se/en/projects/) (Bodin simhallen, Bodø, 2015).
[^hts]: [HTS Group, OSB14 Swimming Starting Blocks](https://www.htsgroup.co.nz/shop/Sports+Timing/Aquatics/OSB14+Swimming+Starting+Blocks%3Fsku=01424.html).
[^ds2015]: Swiss Timing, OSB14 Swimming Starting Block datasheet (OSB14/10-2015).
[^ast]: [Australasia Sports Timing, OSB14 Swimming Starting Blocks](https://www.sportstiming.com.au/shop/Aquatic+Sports/Swimming/OSB14+Swimming+Starting+Blocks%3Fsku=01424.html).
[^varioplay]: [Varioplay, Starting blocks and accessories](https://varioplay.nl/en/products/starting-blocks-and-accessoires/).
[^swimprod]: [Swim Systems Scandinavia, Omega starting blocks and platform](https://swimsystems.se/en/products/starting-blocks-and-accessories/omega-starting-blocks-and-platform/).
