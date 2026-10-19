---
title: Colorado Time Systems QuickStart Pro
description: >-
  The QuickStart Pro is a Colorado Time Systems portable LED training display of the
  late 2000s with fifteen modes, from pace clock and lap counter to start, relay and turn timing.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: QuickStart Pro
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`QS-PRO`'
  - label: Type
    value: Pace clock and reaction trainer
  - label: Display
    value: Five LED digits; results colour-coded green, yellow or red
  - label: Connection
    value: Side-panel inputs for two touchpads, relay platform, start system and reset/breakout pushbutton
  - label: Resolution
    value: 1/100 s
  - label: Power
    value: 15 V DC power brick (5-pin DIN); internal battery, at least 6 hours
  - label: Introduced
    value: By 2006
  - label: Status
    value: Discontinued; absent from the 2011 catalogue
  - label: Manual
    value: QuickStart Pro User Guide (F896 Rev. 0406)
---

<!--
Research notes, CTS QuickStart Pro. Stub created while building out ultimate-pace-clock.md;
built out to a full article 2026-10-19.

Held and read in full: F896, QuickStart Pro User Guide Rev. 0406, (c)2006, 18 pages, under
sources/vendors/colorado-time-systems/start-systems/. The cover and cabling figure were rendered
with PyMuPDF.
- Cover photo: a white desktop housing, a five-digit LED readout showing 2:53.17, and a cable
  on the left. The test-mode note about the colons between digits three, four and five also
  implies five digits.
- Inputs: two touchpad jacks linked inside, so one can take a far-end pad on a CTS SJ-series
  extension with a stackable open dual banana plug; a relay platform jack; a start system
  jack; and a Reset/Breakout jack. Any input will accept a pushbutton, though the guide notes
  a hand press is less precise than the 1/100 s the unit records.
- Power: a 15 V DC brick (the guide writes "15 DVC") on a 5-pin DIN plug. An internal battery
  runs at least six hours and charges overnight, or whenever the unit is on mains.
- Controls: the power switch and Mode switch are on the right side. At power-up the Mode
  switch sets intensity (8 levels, repeated as positions 9-16). After four seconds untouched it
  shows the firmware revision, then selects the mode. A changed mode holds until the unit is
  switched off and on again.
- The intro says 15 modes, but the table numbers 1-16. Modes 10-14 are one single-lane timer
  with five lap counts, and 16 is the test mode.
- Colour bands: start reaction green 0.55-0.74 s, yellow 0.75-2.00 s, red 0.54 s and under
  (an early start). Relay exchange green at 0.20 s or less, yellow from 0.21 s, red and
  negative when the take-off came before the touch.
- Capture windows: 2 s for start, relay and single-lane captures; 3 s for turns and the
  mid-race pad lock-out. Err in red when an expected input never arrives.
- Results reset themselves after 10 s in relay and turn modes; elsewhere they stay until a
  double click or a new start. Mode 14 ends on a Reset press ("finish arm") then the next pad
  hit.
- Test mode shows PAd, rJP, StArt and rESET for the inputs.

CTS Making Time Count catalogue, (c)2008 (catalogs-brochures/). The Training Tools page lists
Pace Clock Pro, QuickStart Pro, RJP, touchpads, Multizone Pads and the underwater speaker. Its
QuickStart Pro entry has these problems:
- It offers a one-lane system TR-SYS-1 (30 in touchpad, RJPL-2020, QS-PRO, INF-SSM, INF-SJ25),
  marked patent pending.
- Its body copy is the original QuickStart's:
  - modes: five training modes, with a pace clock to 59:59;
  - power: AC or eight D batteries;
  - display: four characters with 4 in LEDs;
  - size: 12 x 8 x 4 in, 5 lb.
  Its metric conversion of the size, 36 x 24 x 12 cm, is also wrong (12 in is about 30.5 cm).
  Against F896 (fifteen modes, internal rechargeable battery, power brick, five digits) this
  copy is taken to be carried over from the older product. The article says so and uses F896.
- The RJP caddy text names a Championship Start System, a QuickStart Pro and cables.
- The same catalogue sells the Pro Pace Clock (PC-Pro-R, PCW-Pro) with "15 training modes",
  listing the same eleven mode names as F896.

CTS Complete Timing, Scoring, Training and Display Solutions, 2011 (start-systems/): no
QuickStart Pro. The Train Right System is now built round a Pace Clock Pro. F957 and F958 (Train
Right, Rev. 201102) wire the start system, RJP and touchpad into the Pace Clock Pro and send the
user to its manual for the training modes. The Train Right datasheet (Rev. 03/14) lists TR-SYS-1
and TR-SYS-2 with a Pace Clock Pro.

F891, Pro Pace Clock and Shot Clock User Guide Rev. 202008 (pace-clocks/): the same mode table,
numbered 1-16 with the same names, but no colour bands. The Pro Pace Clock has single-colour red
or amber digits per the catalogues.

So the lineage: QuickStart (1996) to QuickStart Pro (by 2006). The Pro's mode set also appears
in the Pro Pace Clock by 2008. The QuickStart Pro is gone by 2011, when the Pace Clock Pro took
its place in the one-lane training package. That the Pro Pace Clock replaced it is inferred from
the package contents, not stated by CTS.

Periodicals: the earlier stub search hits for 2008-2009 Swimming World were OCR noise
(case-insensitive "qsp" inside garbled text). No magazine mention of the QuickStart Pro was
found.
Still to research: price; dimensions and weight from a CTS source that describes the Pro rather
than its predecessor; introduction date before 2006; the exact year it left the catalogue.
-->

The QuickStart Pro is a portable LED training display made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS), the successor to the
[QuickStart](quickstart.md).[^f896] It runs as a pace clock and lap counter. With CTS timing
equipment plugged into its side it times start reactions, relay exchanges, break-outs, turns and
single-lane swims, and shows each result to the hundredth of a second.[^f896] Its guide dates from
2006, and the CTS catalogue listed it in 2008 under part number `QS-PRO`.[^f896][^mtc2008]
By 2011 CTS had dropped it, and its training modes lived on in the
[Pace Clock Pro](pace-clock-shot-clock.md).[^cat2011][^f891]

## Role in training

This section places the QuickStart Pro among CTS training tools; pace clocks in general are
covered in the [pace clocks overview](index.md). Like the QuickStart before it, the Pro reads the
same signals a CTS timing system uses at a meet and shows them on a poolside display during
practice.[^f896] These are the start signal from a start system, the take-off from a
[relay judging platform](../../swimming/relay-judging/cts.md) (RJP), touches on a
[touchpad](../../swimming/touchpad/standard.md), and presses of a
[pushbutton](../../swimming/semi-automatic/pushbutton/cts.md). The QuickStart could only time
the interval between two such events. The Pro adds lap counting, split and lane timing, and
colour coding that marks a result as good, slow or early.[^f896]

## Design and hardware

The QuickStart Pro is a small desktop unit with a white housing and a row of LED digits. The
cover of its guide shows five digits reading 2:53.17, and the guide's digit test mentions colons
between digits three, four and five.[^f896] The digits light in green, yellow or
red to grade a result.[^f896]

The inputs are banana jacks on the side panel:[^f896]

- two touchpad inputs, joined inside the unit, so a second pad at the opposite wall can join it
  through a CTS SJ-series extension cable with a stackable banana plug
- a relay platform input
- a start system input
- a reset and break-out input for a pushbutton

Any input will accept a pushbutton pressed by a person, but the guide notes that the unit records
to 1/100 s and a hand press cannot match that.[^f896]

The unit runs from a supplied 15 V DC power brick with a 5-pin DIN plug, or from an internal
battery. A full charge lasts at least six hours, and the battery charges whenever the brick is
connected.[^f896] The power switch and a Mode switch are on the right side. At switch-on the Mode
switch sets brightness, in eight levels repeated across sixteen positions. Once it has been left
alone for four seconds, the display shows the firmware revision and the switch then selects the
mode. The mode is fixed until the unit is switched off and on again.[^f896]

## Operation

This section groups the modes by what they do. The guide says the unit has fifteen training
modes, but its table numbers them 1 to 16: modes 10 to 14 are one single-lane timer set for
different lap counts, and mode 16 is a test mode.[^f896] Most modes show their number at start-up
and then wait with only the colon and decimal point lit.[^f896]

### Clock modes

| Mode | Function | Inputs |
|---|---|---|
| 1 | Lap counter: counts touchpad hits from zero | Touchpad[^f896] |
| 2 | Pace clock, counting to 59:59.9 in tenths and rolling over | None[^f896] |
| 3 | Pace clock that holds each touchpad hit as a cumulative split | Touchpad[^f896] |
| 4 | Pace clock that restarts at each touchpad hit, showing lap splits | Touchpad[^f896] |

In each, a start signal or a double click on the reset button restarts the count.[^f896]

### Reaction modes

| Mode | Measures | Inputs |
|---|---|---|
| 5 | Relay exchange: incoming touch to outgoing take-off | Touchpad and RJP[^f896] |
| 6 | Start reaction: start signal to the swimmer leaving the block, or the wall in backstroke | Start system and RJP, or touchpad for backstroke[^f896] |
| 7 | Turn speed: hand touch to push-off | Touchpad[^f896] |
| 8 | Break-out: start signal to the coach's button press as the swimmer surfaces | Start system and pushbutton[^f896] |
| 9 | Start reaction followed by break-out | Start system, RJP or touchpad, and pushbutton[^f896] |

The guide sets fixed windows for these readings. After a start signal the unit records every
RJP or touchpad release for two seconds and keeps the last, so a swimmer rocking on the block
does not leave an early time.[^f896] Turn speed uses a three-second window after the hand
touch.[^f896] Relay and turn results stay up for ten seconds and then clear for the next
swimmer. The others stay until a double click or a new start.[^f896] If an expected input never
arrives, the display shows Err in red.[^f896]

CTS sets the colour thresholds. A start reaction of 0.55–0.74 s shows green, 0.75–2.00 s
yellow, and 0.54 s or less red as an early start. A relay exchange of 0.20 s or less shows green
and anything slower yellow. An exchange where the outgoing swimmer left before the touch shows
red, as a negative time.[^f896]

### Single-lane timing

Modes 10 to 14 time one swimmer over one, two, three or four laps, or, in mode 14, until the
coach presses the reset button to arm the finish and the swimmer next touches.[^f896] Each mode
can first record a start reaction from the RJP, or from the touchpad in backstroke. Each split
then shows as a cumulative time while the clock keeps running.[^f896] With a pad at each end,
connected to the two touchpad inputs, the unit times lengths rather than laps.[^f896] In the
multi-lap modes the RJP can also catch a relay take-off at each touch except the last, so the
unit can time a relay swimmer and grade the exchange.[^f896]

### Mid-race timing

Mode 15 times the middle of a swim, with no start or finish included. The first
touchpad hit of a turn starts the clock, and the pad then ignores further touches for three
seconds while the swimmer leaves it.[^f896] The clock stops on the next turn's push-off, compared
with the first touch. With one pad that covers one lap and three turns; with a pad at each end,
one length and two turns.[^f896]

### Test mode

Mode 16 runs a digit test and then names whichever input it receives: PAd for a touchpad, rJP,
StArt or rESET.[^f896]

## History and successors

This section traces the product through CTS's documents, which are the only sources found. The
guide is dated 2006.[^f896] CTS's 2008 catalogue listed the QuickStart Pro among its training
tools, sold either alone or in a one-lane training system, `TR-SYS-1`. That system paired it
with a 30 in touchpad, an `RJPL-2020` relay platform, an
[Infinity Start System](../../swimming/starter/infinity-start-system.md) and a start jumper
cable.[^mtc2008] CTS said elite college and club coaches had contributed to its design.[^mtc2008]

The catalogue's description does not match the guide. It gives five training modes, power from
AC or eight D cells, a four-character display with 4 in LEDs, and a size of 12 × 8 × 4 in at
5 lb.[^mtc2008] These are the original QuickStart's figures.[^qsarchive] The guide, which
describes the Pro itself, gives fifteen modes, an internal rechargeable battery and a power
brick, and its cover shows five digits.[^f896] This article follows the guide, on the reading
that the catalogue copy was carried over from the earlier product.

The same 2008 catalogue sold the Pace Clock Pro, a large 10 in-digit pace and shot clock, with
fifteen training modes under the same names.[^mtc2008] Its guide numbers them 1 to 16 exactly
as the QuickStart Pro guide does, without the colour bands.[^f891] By 2011 the QuickStart Pro
was gone from the catalogue. The one-lane training package, now called
[Train Right](../../swimming/relay-judging/cts.md), was built around a Pace Clock Pro
instead.[^cat2011][^f957] CTS does not say that one replaced the other; the only evidence is the
change in what the package contained.

## Compared with the QuickStart

The Pro kept the QuickStart's purpose and its side-panel inputs. Most of the rest is
different: fifteen modes chosen with a switch instead of a handful chosen by what was plugged in, a
second touchpad input, a rechargeable battery in place of D cells, and colour-coded
results.[^f896][^f816] The [QuickStart](quickstart.md) article has a side-by-side table.

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado |
| Part number | `QS-PRO`[^mtc2008] |
| Display | Five LED digits; green, yellow and red result coding[^f896] |
| Modes | 15 training modes plus a test mode, numbered 1–16[^f896] |
| Timing resolution | 1/100 s[^f896] |
| Inputs | Touchpad (two, linked), relay platform, start system, reset/breakout[^f896] |
| Brightness | Eight levels[^f896] |
| Power | 15 V DC power brick, 5-pin DIN; internal battery, at least 6 hours[^f896] |
| Manual | F896 Rev. 0406 (2006)[^f896] |

The 2008 catalogue's size and weight figures (12 × 8 × 4 in, 5 lb) are left out of the table
because they appear to describe the earlier QuickStart.[^mtc2008]

## Part numbers and accessories

This section lists the parts CTS names with the QuickStart Pro.

- `QS-PRO`, the QuickStart Pro.[^mtc2008]
- `TR-SYS-1`, the 2008 one-lane system: a 30 in touchpad, an `RJPL-2020` relay platform, the
  `QS-PRO`, an `INF-SSM` Infinity Start System and an `INF-SJ25` start jumper cable.[^mtc2008]
- SJ-series extension cable with a stackable dual banana plug, for a far-end touchpad.[^f896]
- 15 V DC power brick, supplied.[^f896]
- The RJP caddy, which CTS described as carrying RJPs, a Championship Start System, a
  QuickStart Pro and cables.[^mtc2008]

## See also

- [QuickStart](quickstart.md): the predecessor
- [Pace clock/shot clock](pace-clock-shot-clock.md): the CTS clock line whose Pro version carries the same training modes
- [Colorado Time Systems RJP](../../swimming/relay-judging/cts.md): the relay platform it reads, and the Train Right package
- [Infinity Start System](../../swimming/starter/infinity-start-system.md): the start system in the 2008 training system
- [Pace clocks](index.md): the pace clocks overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f896]: Colorado Time Systems, QuickStart Pro User Guide (F896 Rev. 0406, 2006).
[^f816]: Colorado Time Systems, QuickStart User Guide (F816 Rev. 0104, 2004).
[^f891]: [Colorado Time Systems, Pro Pace Clock and Shot Clock User Guide (F891 Rev. 202008)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Shot%20Clocks/ProPaceClock.pdf), training modes.
[^f957]: [Colorado Time Systems, Train Right with Infinity Start System (F957, Rev. 201102)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Training%20Systems/Train_Right_Infinity_F957.pdf).
[^mtc2008]: Colorado Time Systems, Making Time Count: High Impact Visual Display Systems (2008 catalogue), training tools.
[^cat2011]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011 catalogue), training tools.
[^qsarchive]: [Colorado Time Systems, QuickStart product page](https://web.archive.org/web/20021204114756/http://www.coloradotime.com:80/aquaticproducts/light_reflective/prod_quickstart.asp) (archived December 2002).
