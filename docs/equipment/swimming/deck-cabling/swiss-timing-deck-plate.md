---
title: Swiss Timing deck plate
description: >-
  The Swiss Timing deck plate is the flush in-deck plate used for fixed Quantum and Omega pool
  wiring, wired back to an ODB10-SW distribution box.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Swiss Timing deck plate
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3494.603` (drawings); `3493.603` in one passage of the Swimming Concept guide; earlier plate `3274.044`'
  - label: Type
    value: In-deck plate
  - label: Connection
    value: Banana jacks for touchpad, platform, three pushbuttons and loudspeaker; one shielded 6 × 0.5 mm² cable to the ODB10-SW
  - label: Dimensions
    value: 153 × 153 mm face, 4 mm thick; 141 mm body, 29.5 mm overall depth
  - label: Mounting
    value: Over a Ø120–122 mm hole, four Ø4 × 45 mm Torx screws into nylon plugs
  - label: Manual
    value: '[Swimming Concept (0017.509.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02_AQU_Concept.pdf)'
---

<!--
Research notes, Swiss Timing deck plate. Stub created 2026-10-08 while writing the
deck-cabling overview; built out 2026-10-13.

Held and read, with drawing pages rendered by PyMuPDF:
  - sources/vendors/swiss-timing/touchpads-deckplates/swiss-timing-aqu-concept-0017.509.02
    (Swimming Concept, Quantum / OSB with footrest, v4.9, January 2017). Section 1: in-deck
    cabling keeps the start area clear, which the guide ties to FINA (World Aquatics)
    recommendations; a basement walk-around is Swiss Timing's preferred layout; each lane gets
    its own cable to an ODB; backup in semi-automatic mode (one to three buttons) or automatic
    mode with touchpad and platform paralleled on primary and secondary, which Swiss Timing says
    needs backup video and is used at top meets. 1.1: cable is "electric control" type,
    stranded, shielded, not twisted, 6 x 0.5 mm2, 9 mm outside max (4 x 20 AWG); Swiss Timing
    will not warrant performance below spec. Older basic plate 3274.044 becomes set 3274.635
    with screws and plugs. 3.3.2 (page 18 drawings): plate flush with the tiling over conduit
    and junction boxes; serves a primary and a secondary system; touchpad, relay take-off
    platform, three buttons, loudspeakers. Face 153 mm square, holes on a 115 mm square pitch
    19 mm in from the edges, 4 mm flange, 29.5 mm overall depth, body 141 mm; face marked
    DECKPLATE and OMEGA with jack pairs 3, P, 2, S, 1, T and a COMMON. Page 19: duct at least
    75 mm across for 20 cables of 6.3 mm and four of 4 x 0.5 mm2; last duct to the timing room is
    the tight one with ten lanes and two finish racks; a water outlet below helps where
    possible; text says "basic deck plate 3493.603" used as lane or start plate, but the
    installation drawing on the same page labels it DECKPLATE 3494.603; hole 120-122 mm across,
    110 mm marked, conduit 75 mm, screws 4 x 45 Torx 9540.2200, nylon plugs 6 x 30 9039.8558.
    Page 20: protection steps (polyester resin and hardener 3274.511 round the soldered
    terminations, leaving spare cable because the resin cannot be removed; silicone glue
    9036.7083 bead round the throat; silicone paste 9038.7047 on the external contacts, renewed
    after every competition because each plug wipes it off; paste kept on all contacts and
    internal joints). 3.3.3: deckplate adapter mounts on the start plate so a StartTime can be
    plugged in through Tuchel connectors for start and loudspeakers; drawing marked 3274.049,
    two circular connectors, one marked START. 4.1.7 and 4.1.8: loudspeaker and start cable
    drawings, same as the ODB10-SW manual.
  - sources/vendors/swiss-timing/accessories/swiss-timing-aqu-odb10-user-manual-3494.501.02
    (v1.7, December 2018), chapter 2.3 (added v1.4, October 2012) and 5.2, drawings rendered:
    same 153/115/19/4/29.5/141 dimensions; bottom view shows each jack position with an a and
    a c terminal (S has a and b); plates in figures 20-22 labelled 3494.603. Lane wiring table
    (3a, 2a, 1a, Pa, Ta, c to B3, B2, B1, PF, TP, COM). Start plates: 3c Ready-, 3a and 2a start
    contact, 2c Ready+ to ODB terminals 1-4 and wall socket 2650.750 pins 1-4, shielded
    4 x 0.5 mm2, 9 mm max; start plates at both ends linked by cable. Loudspeakers: two shielded
    2 x 1.5 mm2 loops through the Sa/Sb terminals, odd lanes on one and even lanes on the other,
    each starting at a start deck plate (1a/1c on one, Sa/Sb on the other); figure 23 feeds them
    from two amplifiers. Maximum 100 m plate to box. After meets, Quantum off and disconnected,
    peripheral banana plugs (OCP, HP, RBD, OIT) greased and plate terminals filled with
    9038.7047 (Bluestar Paste B 431).
  - touchpads-deckplates/swiss-timing-osb14-user-manual-3454.519.02 (v1.4, March 2020), 2.1
    and 2.4: block front 238 mm from the pool edge (248 mm with an OCP5 pad); for fixed cabling a
    hole of 120-122 mm at 238 mm from the edge, the drilling gauge having a 120 mm hole.
  - timers-consoles/swiss-timing-aqu-quantum-sw-user-manual-3480.509.02, 8.1.2: clean deck
    plate connections and re-grease weekly and after every use; 8.1.4: blocks may stay in place
    between uses but their cables should be unplugged from the deck plate.
  - start-systems/swiss-timing-starttime-v-user-manual-3481.560.02 (v1.2, March 2018): accessory
    3399.930, mobile loudspeakers with a 5 m cable for a deck plate (part number placement read
    from the table layout; AVK lists 3399.930 as an external loudspeaker).
  - The external-speaker article already cites the OSB11 and OSB14 datasheets (2019): internal
    loudspeaker 3399.600 with two banana plugs for fixed wiring; a deck plate under each block.

Part number: three of four Swiss Timing occurrences read 3494.603 (concept p19 drawing, ODB10-SW
figures 20-22 and bottom view); only the concept guide's text reads 3493.603. The text calls
3494.603 the likelier number but keeps both. AVK and a web search found neither number.

Dealer listing added 2026-10-14: Australasia Sports Timing (sportstiming.com.au, SKU DECK_PLATE),
established 2013 after taking over Swiss Timing's services in the region. Gives 151 x 151 mm and
153 x 153 x 29.5 mm (4 mm above floor), Lexan EXL1433T, RAL 9010, -20 to +60 C, threaded pins,
stainless contacts, primary and secondary; only the sets include fixing material, silicone,
epoxy and grease. Kit table (6/8/10 lanes): 3494.603 plate and 3494.012 bridge plate 6/8/10;
nut M6 A4 9551.1505 75/100/125; crimp terminal M6 9039.6006 63/84/105; crimp pliers 9071.3543;
silicone paste Rhodorsil 9038.7047 x2; CAF 30 cartridge 9038.7083; gun 9038.7030; C255GR resin
9038.7034 (-/2/1); Biothan 2MD2170 resin 9038.7085 (2/2/3); Torx 4 x 45 9540.2200 and plugs
6 x 30 9039.8558 30/40/50; DOC3274.511 resin manual. Also 3494.951 one lane, 3494.961 start
plate, 3494.962 start set with adapters and cables, 3274.049 adapter. The bridge plate is not
explained.
Still to research: price; what the bridge plate 3494.012 is; whether the ARES-era 3274.044 plate has the same jack layout; the
adapter's second connector (label not legible, presumably loudspeaker); materials.
-->

The Swiss Timing deck plate is a 153 mm square plate set flush in the pool deck. It gives a
lane's timing devices a fixed connection point. A touchpad, a relay take-off platform, three
pushbuttons and a loudspeaker plug into it, and one cable runs from it under the deck to an
[ODB10-SW](odb10-sw.md) distribution box in the timing room.[^concept][^odb] The same plate
serves as a lane plate or, at the ends of the start line, as a start plate. The plate is marked
OMEGA. Its part number is given as `3494.603` in Swiss Timing's drawings and as `3493.603` in
one passage of text.[^concept][^odb]

## Role in the timing system

This section places the plate in a fixed Swiss Timing installation; fixed and mobile cabling in
general are covered in the [deck cabling overview](index.md).

Swiss Timing offers two ways to wire a pool for its
[Quantum Aquatics](../timers/quantum.md) timer. A mobile installation lays a
[Quantum Mobile Harness](quantum-mobile-harness.md) along the deck. A fixed one runs a cable in
conduit from a deck plate at each lane to the ODB10-SW.[^concept] Swiss Timing's Swimming
Concept guide prefers the fixed layout, ideally with a walkway under the deck. It says this
keeps the start area clear of cables, as World Aquatics (then FINA) recommends, and lets the
starting blocks be removed without touching the wiring.[^concept] Because each lane has its own
cable, every lane is addressed separately at the box.[^concept]

Each plate sits under the centre of its lane's starting block.[^osb11][^osb14] The text of the OSB14 block
manual places the hole for a fixed-cabling plate 238 mm from the pool edge, the same distance
as the front of the block. Its drawings put the 238 mm on the centre of the hole instead, with
the front of the base about 185 mm from the edge.[^osb14m] One plate type covers both primary and secondary timing.
The pushbuttons can serve as backup in semi-automatic mode. Alternatively, the touchpad and
platform can be wired in parallel to both systems. Swiss Timing says that second option calls
for backup video and is used at the highest-level meets.[^concept]

## Design and construction

This section describes the plate and its jacks.

The plate is a 153 mm square face plate, 4 mm thick, on a body 141 mm across. Its overall depth
is 29.5 mm. Four fixing holes sit on a 115 mm square, 19 mm in from the edges.[^concept][^odb]
The face is marked DECKPLATE and OMEGA. It carries pairs of jacks labelled 1, 2 and 3 for the
pushbuttons, P for the relay platform, T for the touchpad and S for the loudspeaker, grouped
around a COMMON marking.[^concept][^odb] On the underside each position has its own pair of
terminals, a and c, where the cable is soldered. The loudspeaker position has a and b
instead.[^odb]

Each terminal is wired straight to one core of the lane cable.[^odb]

### Earlier plate

Swiss Timing's Swimming Concept guide names an earlier basic deck plate, `3274.044`. It was sold
as set `3274.635`, which added the fixing screws and wall plugs.[^concept] The guide gives no drawing or
dates for it. The `3274` part numbers match the
[deckplate adapter](swiss-timing-deckplate-adapter.md), `3274.049`, which is still shown with
the current plate.[^concept]

## Wiring

This section covers the cables that leave the plate; the terminal assignments at the box are
tabled in the [ODB10-SW](odb10-sw.md#wiring) article.

A lane plate takes one cable to the ODB10-SW, no longer than 100 m.[^odb] Swiss Timing specifies
an "electric control" cable with six stranded 0.5 mm² cores, untwisted, under an overall
shield, no more than 9 mm across. It says it will not warrant the system's performance if the
cable falls short of that.[^concept] Button 3, button 2, button 1, the platform and the touchpad
each use the a terminal of their position. The c terminals form the common return.[^odb]

Start plates carry two more circuits:

- The start signal and a ready signal run on a shielded four-core 0.5 mm² cable. It links the
  start plates at each end and returns to the box's START terminals, with a
  branch to a [wall socket](swiss-timing-wall-socket.md).[^odb][^concept]
- The lane loudspeakers are wired as two loops of shielded 2 × 1.5 mm² cable through each
  lane plate's S terminals. One loop serves the odd lanes and the other the even lanes. Each
  begins at a start plate, and the manual's drawing feeds the two from separate
  amplifiers.[^odb]

A [StartTime V](../starter/starttime-v.md) can plug into a start plate through the deckplate
adapter. Swiss Timing also lists a mobile loudspeaker, `3399.930`, with a 5 m cable for
connection to a deck plate.[^concept][^stv]

## Installation and mounting

This section covers setting the plate into the deck.

The plate sits flush with the tiles over a round opening 120–122 mm across. That opening joins a
75 mm conduit running below the deck.[^concept][^odb] It is held by four Ø4 × 45 mm Torx screws
(`9540.2200`) in Ø6 × 30 mm nylon plugs (`9039.8558`).[^concept] Swiss Timing's starting-block
manual supplies a drilling gauge with a 120 mm hole for the opening.[^osb14m] A drain below the
plate is recommended where the construction allows one.[^concept]

The guide sets a minimum duct size. A duct at least 75 mm across has room for twenty
6.3 mm cables and four 4 × 0.5 mm² cables. Swiss Timing warns that the last run into the timing
room is the hardest to fit when a ten-lane pool has primary and secondary finish racks and thick
cable.[^concept]

The terminations are sealed in three stages:[^concept]

1. The cavity around the soldered joints is filled with polyester potting resin (`3274.511`,
   resin and hardener). The resin cannot be removed later, so spare cable is left in the box
   for future service.
2. A bead of silicone glue (`9036.7083`) seals the plate's throat to the floor.
3. Silicone paste (`9038.7047`) covers the external contacts and all internal joints.

## Deckplate adapter

This section covers the adapter for start plates.

The [deckplate adapter](swiss-timing-deckplate-adapter.md) (`3274.049`) fits on a start plate.
Its pins enter the plate's jacks, and it carries Tuchel sockets, one of them marked START. A
StartTime start system can then be connected for the start signal and the loudspeakers through
locking plugs instead of bare banana plugs.[^concept]

## Care and maintenance

This section covers keeping the contacts free of corrosion.

Each plug pushed in wipes the silicone paste off the contacts it touches. Swiss Timing therefore
says to renew the paste after every competition.[^concept] Between meets the Quantum is switched
off and disconnected. The plugs of the touchpads, pushbuttons, relay platforms and other
peripherals are greased, and the plate terminals are filled with paste `9038.7047`.[^odb] The
Quantum manual asks for the deck plate connections to be cleaned and re-greased weekly and after
every use. Starting blocks may stay in place between meets, but their cables should be
unplugged from the deck plate.[^quantum]

## Specifications

| | |
|---|---|
| Manufacturer | Swiss Timing, Corgémont, Switzerland[^concept] |
| Face plate | 153 × 153 mm, 4 mm thick[^concept][^odb] |
| Body | 141 mm across; overall depth 29.5 mm[^concept][^odb] |
| Fixing | Four holes on a 115 mm square; Ø4 × 45 mm Torx screws in Ø6 × 30 mm nylon plugs[^concept] |
| Opening | Ø120–122 mm, to a 75 mm conduit[^concept][^osb14m] |
| Positions | Buttons 1–3, platform (P), touchpad (T), loudspeaker (S), common[^concept][^odb] |
| Lane cable | Shielded, 6 × 0.5 mm² stranded, 9 mm maximum; 100 m maximum to the ODB10-SW[^concept][^odb] |
| Start cable | Shielded, 4 × 0.5 mm², 9 mm maximum[^odb] |
| Loudspeaker cable | Shielded, 2 × 1.5 mm²[^odb] |
| Material | Lexan EXL1433T resin, white RAL 9010 (dealer listing)[^ast] |
| Operating temperature | −20 to +60 °C (dealer listing)[^ast] |

## Part numbers and accessories

This section lists the parts Swiss Timing names.

| Part | Description |
|---|---|
| `3494.603` | Deck plate, as labelled in the drawings[^concept][^odb] |
| `3493.603` | Deck plate, as given in the Swimming Concept text[^concept] |
| `3274.044` | Earlier basic deck plate; set `3274.635` with screws and plugs[^concept] |
| `3274.049` | [Deckplate adapter](swiss-timing-deckplate-adapter.md) for StartTime connection[^concept] |
| `9540.2200` | Torx screw, Ø4 × 45 mm[^concept] |
| `9039.8558` | Nylon plug, Ø6 × 30 mm[^concept] |
| `3274.511` | Polyester potting resin with hardener[^concept] |
| `9036.7083` | Silicone glue[^concept] |
| `9038.7047` | Silicone paste[^concept][^odb] |
| `3399.930` | Mobile loudspeaker with 5 m cable for a deck plate[^stv] |
| `3494.951` | Deck plate set for one lane (dealer listing)[^ast] |
| `3494.956`, `3494.958`, `3494.950` | Deck plate kits for 6, 8 or 10 lanes, with epoxy[^osb14][^ast] |
| `3494.961` | Start plate (dealer listing)[^ast] |
| `3494.962` | Start deck plate set with adapters and cables[^osb14][^ast] |
| `3494.012` | Bridge plate, one per lane in the kits (dealer listing)[^ast] |
| `9551.1505` | A4 stainless M6 nut (dealer listing)[^ast] |
| `9039.6006` | M6 crimp terminal (dealer listing)[^ast] |
| `9071.3543` | Crimp pliers for DIN 46228 cable ferrules (dealer listing)[^ast] |
| `9038.7083` | Transparent silicone cartridge, CAF 30, 310 ml (dealer listing)[^ast] |
| `9038.7030` | Cartridge gun (dealer listing)[^ast] |
| `9038.7034` | C255GR resin, 204 g with hardener (dealer listing)[^ast] |
| `9038.7085` | Biothan 2MD2170 resin, 705 g with hardener (dealer listing)[^ast] |

Every Swiss Timing drawing of the plate labels it `3494.603`. The `3493.603` in the Swimming
Concept text is probably a misprint, but no source corrects it.[^concept][^odb]

The Australian distributor's kit list gives quantities for 6, 8 and 10 lanes: one deck plate and
one bridge plate per lane, 75, 100 or 125 M6 nuts, and 30, 40 or 50 Torx screws and plugs, with
one set of crimping tools, silicone and resins per kit.[^ast] Its numbers do not all agree with
the Swimming Concept guide. It gives the CAF 30 silicone as `9038.7083`, where the guide's
silicone glue is `9036.7083`. It also lists `3274.511` as the manual for the Biothan resin,
where the guide uses that number for the potting resin itself.[^ast][^concept] The same listing
gives the face as 151 × 151 mm in one place and 153 × 153 mm in another.[^ast]

## See also

- [ODB10-SW](odb10-sw.md): the distribution box each plate is wired to
- [Deckplate adapter](swiss-timing-deckplate-adapter.md): the Tuchel adapter for start plates
- [Swiss Timing wall socket](swiss-timing-wall-socket.md): the poolside socket on the start line
- [Quantum Mobile Harness](quantum-mobile-harness.md): the on-deck alternative
- [OSB14](../starting-blocks/osb14.md): the starting block the plate sits under
- [Deck cabling](index.md): the deck cabling overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^concept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02_AQU_Concept.pdf).
[^odb]: [Swiss Timing, ODB10-SW User's Manual (3494.501.02, v1.7, December 2018)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3494.501.02_AQU_ODB10_User_Manual.pdf), 2.3 and 5.2.
[^osb14m]: [Swiss Timing, OSB14 Swimming Starting Block User's Manual (3454.519.02, v1.4, March 2020)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3454.519.02_OSB14_User_Manual.pdf), 2.1 and 2.4.
[^osb11]: [Swiss Timing, OSB11 Swimming Starting Block datasheet (V3, 03-2019)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_OSB11_anTiSlip_0519.pdf).
[^osb14]: [Swiss Timing, OSB14 Swimming Starting Block datasheet (V2, 03-2019)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_OSB14_anTiSlip_0519_EN.pdf).
[^quantum]: Swiss Timing, Quantum Swimming Software User's Manual (3480.509.02), 8.1.2 and 8.1.4.
[^stv]: Swiss Timing, StartTime V User's Manual (3481.560.02, v1.2, March 2018), accessories.
[^ast]: [Australasia Sports Timing, Deck plate](https://www.sportstiming.com.au/shop/Aquatic+Sports/Swimming/Deck+plate%3Fsku=DECK_PLATE.html) (kit contents).
