---
title: Swiss Timing Piccolo
description: >-
  The Piccolo is a compact Swiss Timing (Omega) LED scoreboard of eight lines of twelve 10 cm
  characters, used as a small results board or a repeater for swimming, water polo and indoor
  athletics.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: Piccolo
infobox:
  - label: Manufacturer
    value: '[Swiss Timing](vendors/swiss-timing.md)'
  - label: Part number
    value: '`3402.920` (Piccolo White); `3402.988` (earlier Piccolo, 2008); `3402.921` (dealer listing)'
  - label: Type
    value: Indoor alphanumeric LED scoreboard
  - label: Display
    value: 8 lines of 12 characters, 10 cm, 40 white LEDs each
  - label: Connection
    value: RS422 data on Tuchel 7-pin connectors, in and out
  - label: Dimensions
    value: 1150 × 1360 × 90 mm (W × H × D)
  - label: Weight
    value: 28 kg
  - label: Power
    value: 110–240 VAC; 150 VA maximum, 30 VA typical
  - label: Introduced
    value: By 2008 (original); Piccolo White by 2012
  - label: Manual
    value: '[Piccolo User''s Manual (3402.502.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3402.502.02_Piccolo_User_Manual.pdf)'
---

<!--
Research notes, Piccolo. Stub surfaced while building out calypso.md; named on quantum.md. Built
out 2026-10-14.

Held and read in full:
  - sources/vendors/swiss-timing/timers-consoles/swiss-timing-piccolo-user-manual-3402.502.02
    (Piccolo White, v1.1, 28 May 2015; v1.0 1 November 2012; v1.1 added wiring to 3.2). Drawing
    pages rendered with PyMuPDF. 96 characters, 12 x 8, white LEDs, 10 cm digits of 40 LEDs,
    readable to 50 m (Swiss Timing's figure); automatic brightness from a sensor; grey aluminium
    case with acrylic finish; for wall mounting, front access for cleaning. Rear (bottom): DATA IN,
    DATA OUT, POWER IN, a Bluetooth mounting point. Mounting on a wall or a structure, with the four
    M8 fixings on each side or the optional bracket kit (hooks down); drawing: 1150 wide, 1360 high,
    90 deep, side rail 60 mm, fixing points 40 mm from top and bottom and 1280 apart. Opening: three
    front screws, the face swings open. Two CPU cards: CPU 1 master with the LUXOME2 PROM and the
    brightness driver drives lines 1-4; CPU 2 slave drives lines 5-8 and carries a 12 VDC output on a
    500 mA fuse; both have DATA IN +/- and LUX IN-OUT. Switches: master all OFF by default; slave
    switch 1 ON selects lines 5-8; switch 4 turns on test mode. Connections drawing: DATA IN from a
    Quantum (3480.720 or 3480.721) by cable 1906.xxx (7-pin to 9-pin), or from a console labelled
    3403.771 by cable 1871.xxx (7-pin to 7-pin); POWER IN 3-pin by cable 1874.xxx, 110-240 VAC.
    Pinning: DATA IN 7PFT Tuchel, DATA OUT 7PFT Tuchel, POWER IN 3PMT Tuchel (L, N, earth). The
    table's pin names look swapped (the DATA IN connector lists data outputs and the DATA OUT
    connector data inputs); flagged. Mechanical table: H1360 x W1150 x D90 mm, 28 kg, 4 x M8 each
    side, aluminium, 0-50 C working, -30 to 70 C storage, IP54. Positioned by Swiss Timing for pool
    operators wanting an 8-lane results board at low initial and running cost; also a repeater for
    areas without a view of the main board, warm-up rooms or restaurants. Calypso protocol.
  - .../scoreboards-displays/swiss-timing-piccolo-white-datasheet-2015 (Piccolo White/10-2015,
    filed 2026-10-14 from the Wayback copy of DOCM_AQ_PiccoloWhite_1015_EN; still live):
    article 3402.920; alphanumeric with a Quantum (event titles, start lists, names); protocols
    UNT, Quantum and OSM-6; PowerTime (TOP-8 swimming); Bluetooth version; 140 degree horizontal
    viewing angle; 150 VA max, 30 VA typical; RS422; Tuchel 7pFT; IP54 "outdoor" (although the
    same sheet says it is designed for indoor use); CE and RoHS. Cables: Quantum to Piccolo
    1906.050 / 1906.100 (Tuchel 7-pin male to Sub-D 9-pin male, 50 / 100 m drums); Calypso water
    polo controller to Piccolo 1871.050 / 1871.100 (Tuchel 7-pin to 7-pin). Options: PowerTime II
    with TOP-8 software; Scan'O'Vision photo finish (STAR camera, 1/1000 s).
  - .../timers-consoles/swiss-timing-aqu-quantum-concept-3480.508.02: mobile cabling Quantum to
    Piccolo with 1906.050 or 1906.100; scoreboard on the Quantum's serial ports 1-2.
  - .../touchpads-deckplates/swiss-timing-aqu-concept-0017.509.02, 3.5.2: same description;
    1150 x 1360 x 90 mm.
  - .../timers-consoles/swiss-timing-wpo-calypso-console-user-manual-3403.504.02 (v2.7, January
    2026): scoreboard type setting, Calypso SW box unchecked selects the Piccolo; 7.3 shows the
    Piccolo water polo layout (period and play time; scores; timeouts; pen1-pen3 per team; two
    lines unused).
Web (2026-10-14):
  - Omega Electronics product page, products.swisstiming.com baseId=18, Wayback 2008-01-21:
    "Scoreboard PICCOLO", article 3402.988; LED display, UNT protocols; 10 cm digits readable to
    50 m; repeater uses; with ARES shows running time, reaction times, splits with ranking, finals
    and results; with PowerTime (Top-8) or Scan'O'Vision for indoor athletics. Its datasheet
    PICCOLO.pdf was not captured. LED colour not stated, so whether the 2008 board was white is
    unknown.
  - AVK Group, "OMEGA PICCOLO white - swimming scoreboard", 3402.921 (fetched): 1660 x 1150 x 90
    mm; 8 or 10 lines of 8 digits; 10 cm white LEDs; 50 m; 140 degrees; 115-230 VAC; 100 VA max,
    30 VA typical; RS422 or internal 20 mA current loop; 0-70 C, -30 to 85 C. Conflicts with the
    manual and datasheet. 1660 mm is the 1360 mm board plus two 150 mm lines, which suggests a
    10-line version (inference, not stated).
  - Swiss Timing manual now at Instruction_Manuals/3402.502.02_Piccolo_User_Manual.pdf (200);
    the old 3402.502.02.pdf URL returns 404.
  - No installation naming a Piccolo was found.
Still to research: the earlier Piccolo's display and datasheet; the 3402.921 variant; the
console 3403.771; the Bluetooth version's part number and receiver.
-->

The Piccolo is a compact LED scoreboard made by [Swiss Timing](../../../vendors/swiss-timing.md)
and sold under the Omega name. It shows eight lines of twelve characters, each 10 cm high, and is
meant either as the main board for a small pool or as a repeater for the results shown on a
larger board.[^manual][^datasheet] Swiss Timing aims it at pool operators who want lane results
on display at a low purchase and running cost.[^manual] The current model, the Piccolo White,
takes its data from a [Quantum Aquatics](../../swimming/timers/quantum.md) timer or a water polo
console, and an earlier Piccolo of the same size was sold for the ARES timer by
2008.[^datasheet][^omega2008]

## Role in the timing system

This section covers where the board fits in a Swiss Timing installation; scoreboards in general
are covered in the [scoreboards overview](index.md).

In swimming, the Piccolo shows the running time, start reaction times, split times with
placings, finish times and a ranked results list.[^manual] With a Quantum timer it can also show
text, such as event titles, start lists and swimmers' names, because the board is
alphanumeric.[^datasheet] Swiss Timing suggests it as a repeater in places that cannot see the
main board, such as warm-up areas or a facility's restaurant.[^manual]

For water polo, the [Calypso WPO console](../../water-polo/console/calypso-wpo-console.md) has a
setting that switches its output from a [Calypso](calypso.md) board to the Piccolo. On the
Piccolo it shows the period and game time on the first line, the two teams' scores on the second,
time-outs on the third, and up to three exclusion clocks per team on the next three lines. The
last two lines are left blank.[^wpo]

Swiss Timing also lists the board for two smaller systems. It can show swimming results from a
[PowerTime II](../../swimming/timers/powertime-ii.md) hand-held timer loaded with Swiss Timing's
TOP-8 swimming software. It can also be linked to a
[Scan'O'Vision](../photo-finish/scan-o-vision.md) photo-finish system, which the 2008 product
page offers for indoor athletics.[^datasheet][^omega2008]

## History

This section covers the two generations of the board.

Swiss Timing's 2008 product site listed a "PICCOLO" scoreboard, article `3402.988`, for the
[ARES](../../swimming/timers/ares-21.md) timer. It had the same 10 cm digits and 50 m reading
distance, and took data in the UNT protocols used by earlier Omega boards such as the
[UNT4](unt4.md).[^omega2008] The page does not give the colour of its LEDs.

The current Piccolo White has white LEDs and is documented from November 2012, when its manual
was first issued.[^manual] Its 2015 datasheet gives the article number `3402.920`. It lists the
UNT, Quantum and OSM-6 protocols, so the board can also be driven by an
[OSM6](../../swimming/timers/osm6.md) console, and it mentions a Bluetooth version.[^datasheet]
The manual itself names only the Calypso protocol, used by the larger
[Calypso](calypso.md) board.[^manual]

## Design and hardware

This section describes the board and its electronics.

The display has 96 character positions in eight rows of twelve. Each character is 10 cm tall and
made of 40 white LEDs.[^manual] Swiss Timing gives a reading distance of up to 50 m and a
horizontal viewing angle of 140°.[^manual][^datasheet] A light sensor on the front sets the
brightness automatically in four steps.[^manual] The case is grey aluminium with an acrylic
finish, 1150 mm wide, 1360 mm high and 90 mm deep, and weighs 28 kg.[^manual]

Inside are two processor cards. The master card, which carries the firmware chip labelled
LUXOME2 and the brightness driver, runs lines 1 to 4. The slave card runs lines 5 to 8. Both cards
take the data signal, and each has a connection labelled LUX IN-OUT for the brightness
control.[^manual] The face is
held by three screws on the front and swings open for access to the cards and wiring.[^manual]

Swiss Timing describes the Piccolo as an indoor board.[^manual][^datasheet] Its protection is
IP54, which the datasheet labels "outdoor".[^manual][^datasheet]

## Connections

This section covers the connectors and cables.

All connections are at the bottom of the back panel: a data input, a data output for passing the
signal on to another board, and the mains input. There is also a mounting point for a Bluetooth
receiver.[^manual] The data connectors are 7-pin Tuchel sockets carrying RS422, and each also
provides a 12 VDC output. Mains power, 110–240 VAC, enters on a 3-pin Tuchel connector.[^manual][^datasheet]

| From | Cable | Ends | Length |
|---|---|---|---|
| Quantum Aquatics timer | `1906.050` or `1906.100` | Tuchel 7-pin male to Sub-D 9-pin male | 50 m or 100 m drum |
| Calypso water polo controller | `1871.050` or `1871.100` | Tuchel 7-pin male to Tuchel 7-pin male | 50 m or 100 m drum |
| Mains | `1874` series | 3-pin Tuchel to mains plug | Not given |

The Quantum connects through one of its serial scoreboard ports.[^qconcept] The manual's wiring
drawing shows the water polo source as a console labelled `3403.771`.[^manual][^datasheet]

The manual's pin table for the two data connectors appears to have its labels reversed: the
table for the input socket lists data outputs, and the table for the output socket lists data
inputs.[^manual]

## Installation and mounting

This section covers fixing the board.

The Piccolo hangs on a wall or on a frame. Each side has four M8 fixing points, which can be used
to make a support where the optional bracket kit is not available. The drawing places the fixings
40 mm from the top and bottom, 1280 mm apart. The brackets in the kit are fitted with their hooks
facing down, and the board is hung on them.[^manual]

## Configuration

This section covers the switches on the processor cards.

Each card has a bank of eight switches. On the master card they are all off, which sets it to
drive lines 1 to 4. On the slave card the first switch is on, which sets it to lines 5 to 8. On
either card the fourth switch puts its half of the board into test mode.[^manual]

## Specifications

This section lists the figures given by Swiss Timing.

| Specification | Value |
|---|---|
| Display | 8 lines of 12 characters, 96 in all[^manual] |
| Character | 10 cm, 40 white LEDs[^manual] |
| Reading distance | Up to 50 m (Swiss Timing)[^manual] |
| Horizontal viewing angle | 140°[^datasheet] |
| Brightness | Automatic, four steps, light sensor[^manual] |
| Dimensions | 1150 × 1360 × 90 mm (W × H × D)[^manual][^concept] |
| Weight | 28 kg[^manual][^datasheet] |
| Housing | Aluminium, acrylic finish[^manual] |
| Data | RS422 on Tuchel 7-pin, in and out[^datasheet][^manual] |
| Power | 110–240 VAC, 50 Hz; 150 VA maximum, 30 VA typical[^datasheet] |
| Operating temperature | 0–50 °C[^manual][^datasheet] |
| Storage temperature | −30 to 70 °C[^manual][^datasheet] |
| Protection | IP54[^manual][^datasheet] |
| Certification | CE, RoHS compliant[^datasheet] |

An Austrian distributor lists a "Piccolo white" as article `3402.921` with figures that do not
match these: eight or ten lines of eight digits, a height of 1660 mm, a 20 mA current-loop input
as an alternative to RS422, 100 VA maximum and an operating range of 0–70 °C.[^avk] The extra
300 mm of height would fit two more lines at the board's spacing, so the listing may describe a
ten-line version, but no Swiss Timing document confirms one.

## Part numbers and accessories

This section lists the part numbers found for the board and its cables.

| Part | Description |
|---|---|
| `3402.920` | Piccolo White[^datasheet] |
| `3402.988` | Piccolo, as listed in 2008[^omega2008] |
| `3402.921` | "Piccolo white", as listed by a distributor[^avk] |
| `1906.050`, `1906.100` | Quantum to Piccolo cable, 50 m or 100 m[^datasheet][^qconcept] |
| `1871.050`, `1871.100` | Water polo controller to Piccolo cable, 50 m or 100 m[^datasheet] |
| `1874` series | Mains cable[^manual] |

## See also

- [Calypso](calypso.md): the larger Swiss Timing board on the same protocol
- [UNT4](unt4.md): the Omega board whose protocol the earlier Piccolo used
- [Calypso WPO console](../../water-polo/console/calypso-wpo-console.md): the water polo console that drives it
- [Quantum Aquatics](../../swimming/timers/quantum.md): the swimming timer that feeds it
- [Scoreboards](index.md): the scoreboards overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Swiss Timing, Piccolo User's Manual (3402.502.02, v1.1, May 2015)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3402.502.02_Piccolo_User_Manual.pdf).
[^datasheet]: [Swiss Timing, Omega Piccolo White swimming scoreboard datasheet (10-2015)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_PiccoloWhite_1015_EN.pdf).
[^omega2008]: [Omega Electronics, Scoreboard PICCOLO](http://web.archive.org/web/20080121111823/http://products.swisstiming.com:80/owxv3/modules/base/sienlo.do?vmodule=sportsprod&section=publics&element=dw-detail&locale=en_GB&baseId=18) (archived January 2008).
[^wpo]: Swiss Timing, Calypso WPO Console Instructions for Use (3403.504.02, v2.7, January 2026), 5 and 7.3.
[^qconcept]: Swiss Timing, Quantum Concept User's Manual (3480.508.02), scoreboard cabling.
[^concept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02_AQU_Concept.pdf), 3.5.2.
[^avk]: [AVK Group, OMEGA PICCOLO white swimming scoreboard](https://www.avkgroup.at/catalog/3402.921/).
