---
title: Colorado Time Systems Otter Scoreboards
description: >-
  Otter is Colorado Time Systems' line of wireless LED numeric scoreboards for
  swimming, diving, and water polo.
tags:
  - Equipment
  - Scoring
  - Timing
  - Swimming
  - Diving
  - Water polo
infoboxTitle: Otter Scoreboards
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`MS-0149`–`MS-0152` and `MS-0155`–`MS-0157` (swimming and track); `MS-0111`–`MS-0113`, `MS-0165`, `MS-0167` (diving)'
  - label: Type
    value: Wireless LED numeric scoreboard
  - label: Digits
    value: 5 in (12.7 cm) red LED
  - label: Radio
    value: 2.4 GHz, internal patch antenna, channels 0–11 and PAN IDs 0–15
  - label: Power
    value: 320 W supply, 100–240 VAC, 50/60 Hz, max 4 A
  - label: Introduced
    value: Attested in advertising from 2015
  - label: Status
    value: Current
  - label: Manual
    value: Swimming and track (F1004 Rev. 202605); diving (F995 Rev. 202605)
    href: https://coloradotime.com/support/manuals
---

<!-- Research notes (do not publish):
  Two CTS user guides, both Rev. 202605 (May 2026), downloaded from the manuals index at
  coloradotime.com/support/manuals, filed under
  sources/vendors/colorado-time-systems/scoreboards-displays/ and extracted with PyMuPDF:
  cts-otter-swimming-track-scoreboard-user-guide-f1004.pdf (20 pages) and
  cts-otter-diving-scoreboard-user-guide-f995.pdf (16 pages). Both read end to end. They
  replace the situation this page's earlier note described, when nothing Otter-specific was
  held at all.

  Naming. The guides never put Otter on the cover. F1004 is titled Scoreboard for Swimming
  & Track With 2.4 GHz Integrated Wireless and F995 Diving Scoreboard With 2.4 GHz
  Integrated Wireless; both identify the product as Multiline Scoreboards and use the Otter
  name only in the product overview paragraph. The MS- prefix on every model number is
  presumably for that name rather than for Otter.

  Manufacturer line, new to this wiki: both guides give the manufacturer as Everlast
  Climbing Industries, Inc. DBA Colorado Time Systems. The CTS vendor page records PlayCore
  as the parent and said nothing about the operating entity; a sentence has been added there
  citing these guides. Everlast Climbing is CTS's own legal entity, so it is not stubbed
  separately.

  Part-number discrepancy worth knowing about. F995 lists the diving boards as MS-0111
  through MS-0113, MS-0165 and MS-0167. The CTS diving product page lists MS-0189, PA-0017,
  PA-0018, MS-0111, MS-0112, MS-0164 and MS-0113, so it carries two numbers the guide does
  not (MS-0164, MS-0189) and two PA- numbers whose meaning is not stated, while omitting
  MS-0165 and MS-0167. Neither source explains the difference. The body gives the guide's
  list, since that is the technical document, and notes that the product page differs.

  Channel defaults are stated three times for three cases and do not agree, which is not an
  error: F1004 says the internal wireless scoreboard adapter leaves the factory on channel 7,
  which is what Dolphin and RoadRunner talk to; that the scoreboard's own default for Gen7 is
  channel 6 with PAN 0; and that the default used by a WA-2 is also channel 6 / PAN 0. F995
  gives the diving board's default as channel 8 / PAN 0. Read each in its own context.

  Other sources: the 2015 catalogue (held, in start-systems/) for the launch and the water
  polo variant; CTS's diving product page for judge counts, dimensions, weights and power by
  model; the CTS blog post on the swimming boards for lane options and mounting. The blog and
  product pages are CTS marketing copy, not independent.

  RoadRunner, the track timing system F1004 names as the data source for the track variant,
  has no page here. Track timing sits outside this wiki's aquatics scope, so it is named and
  left; the same goes for the MultiSport firmware utility used for the leader and follower
  procedure, which the body describes without naming.

  Still to research: the water polo boards, which the 2015 catalogue lists and the manuals
  index does not cover, so they may run on the multisport guide F984 or may be gone; physical
  dimensions and weights for the swimming boards, which no source held gives, though CTS says
  installation drawings are downloadable; what PA-0017 and PA-0018 are; the ambient light
  sensor count per board size, given only as a mapping of sensors to lanes; and whether the
  boards work with Gen7 Enhanced RS-485 data.
-->

Otter is a line of LED numeric scoreboards from
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) built around a
2.4 GHz radio, so that a board can take its data over the air rather than over a cable from
the timing console. Boards are made for swimming, diving and water polo, in an aluminium
case with plastic covers over the digits, and can be installed indoors or out.[^f1004][^f995]

What sets the line apart from the [LED-R](led-r.md) boards is that the radio is part of the
board: the antenna is a certified patch mounted inside the case, where it cannot be knocked
about.[^f1004][^f995] A swimming board can therefore be driven straight from a
[Dolphin](../../swimming/semi-automatic/dolphin.md) wireless watch system with no external
adapter, which is the arrangement the Dolphin article describes.[^f1004]

## Role in the timing system

An Otter board is a display, as every numeric board is, and the shared background on that is
on the [scoreboards overview](index.md). Two things here are its own. It takes data from more
kinds of source than a cabled board can, whether a CTS console over a cable or over the air, a
Dolphin system directly, or a RoadRunner timing system on the track version.[^f1004][^f995] It
also sets its own brightness, from light sensors spread across the face.[^f1004]

Only one source may be feeding a board at a time. CTS sets the precedence: a console wired
to the board overrides anything arriving by radio, and Dolphin or RoadRunner data overrides
data sent through a wireless adapter.[^f1004]

## Naming and models

The Otter name appears in the guides only in passing. Both cover pages describe the product
by function, as a scoreboard with 2.4 GHz integrated wireless, and both identify it as a
multiline scoreboard; the model numbers carry an `MS` prefix to match.[^f1004][^f995]

| Variant | Guide | Model numbers |
|---|---|---|
| Swimming and track | F1004 | `MS-0149` to `MS-0152`, `MS-0155` to `MS-0157` |
| Diving | F995 | `MS-0111` to `MS-0113`, `MS-0165`, `MS-0167` |
| Water polo | None published | Not stated |

Swimming boards come in 5, 6, 8 and 10 lane widths.[^blog] Diving boards are built for 3, 5,
7 or 11 judges, and show the diver and running total, the difficulty, the dive number and the
round, with the larger models adding an award, a leading diver, or the top three divers with
their totals.[^diving] CTS's diving product page lists a partly different set of model
numbers from the guide, including two `PA` numbers it does not explain, and omits two of the
guide's; neither source accounts for the difference.[^diving][^f995]

The water polo boards are the loose end. CTS advertised them in 2015 alongside the swimming
and diving versions, with the same 2.4 GHz scoring, and listed a wired option from a System 6
and an optional external horn.[^cat15] The manuals index carries no Otter water polo guide
today.[^manuals]

## Wireless operation

Every board holds a wireless scoreboard adapter and is addressed by a channel and a PAN ID.
The transmitter and the board must agree on both. Channels 0 to 11 and PAN IDs 0 to 15 are
valid, and both are set on one bank of DIP switches, the first four positions for the channel
and the last four for the PAN, on the board CTS calls control board A. A second switch bank
on the same board is not to be touched, because the display stops working properly if it
is.[^f1004][^f995]

Reaching those switches means taking the end cap off one side and sliding out the second
weather cover; on a diving board the digits over the control board come off as well. CTS
advises setting channel and PAN before the board goes up on the wall.[^f1004][^f995]

Factory defaults differ by what the board is expected to talk to. The internal adapter ships
on channel 7, which is what a Dolphin base or a RoadRunner PCIF is matched to; for a Gen7
timer the board's default is channel 6 with PAN 0, and the same pair is the default for a
WA-2 adapter driving a swimming board. A diving board leaves the factory on channel 8 with
PAN 0.[^f1004][^f995] Where a console has no radio of its own, a [WA-2](../scoreboard-control/wa-2.md) or
[WA-3](../scoreboard-control/wa-3.md) adapter provides one.[^f1004][^f995]

## Power-on routine

A board tells the operator how it is configured every time it starts. It lights its LEDs,
shows each digit's location number, then its firmware version, then cycles at least three
times through its address, channel and PAN, written in the form `A01`, `C08`, `P00`. On a
swimming board the sequence runs on lanes 1, 4 and 7; on a diving board it runs on the top
line and the first two judges' digits.[^f1004][^f995]

One code is worth knowing: `Err1` means the coin cell on the main control board is nearly
flat and wants replacing with a CR1632, CTS part `R-420-014`.[^f1004][^f995]

## Ambient light sensors

The boards carry several light sensors rather than one, so that a shadow falling across part
of a board does not dim all of it. The count depends on the board's size, and each sensor
governs a block of the display: the topmost, to the right of lane 1, covers lanes 1 to 3 and
the event and heat line; the sensor by lane 5 covers lanes 4 to 6; the one by lane 7 covers
lanes 7 to 9; and the one by lane 9 covers lane 10.[^f1004]

The feature is switched on from the console rather than on the board. On a Gen7 it is a
setting on the scoreboard tab of the swimming software; on a System 6 it is reached through
the hardware page of the swimming setups, where an intensity value of 2 hands control to the
sensors and any higher value takes it back.[^f1004]

## Installation

CTS ships a mounting kit chosen for where the board is going, and lists three: `MK-21` and
`MK-21-CAFL` for a wall, `MK-22` for a pole, and `MK-23` and `MK-23-CAFL` for a
corner.[^f1004][^f995] The company's own marketing adds a portable caddy and a vertical beam
to the list of places a swimming board can hang, and says boards ship in one
piece.[^blog][^diving]

The rest is the facility's responsibility. A structural engineer signs off on whatever the
board hangs from, the owner answers for local electrical and building codes, an outdoor board
needs a receptacle rated for the weather, and the disconnect switch goes where the National
Electrical Code says. Dimensions,
attachment points and weights come from installation drawings on the CTS website rather than
from the guides, and the board is not to be connected to live power while it is being put
up.[^f1004][^f995]

Cabling has its own rules. Runs are supported at least every 6 ft, or every 3 ft where
conduit is used, and are never spliced. An RS-485 cable is not bent tighter than a 1.2 in
radius, an RS-232 cable not tighter than 1.0 in.[^f1004]

## Connections and time of day

Both jacks sit on the underside of the board. A Gen7 timer connects to the quarter-inch
RS-485 jack with an `R-015-674-xx` cable; an older console connects to the quarter-inch
RS-232 jack with an `R-xxDC` cable.[^f1004][^f995]

A board with nothing to show falls back to the clock. After 30 seconds without data it
displays the time of day in lane 1, taken from the console: a Gen7 passes on the time from
its laptop, and a System 5 or System 6 sends it over RS-232 or through a WA-2 or WA-3. The
time-of-day scoreboard module has to be left at its default definition, 16, for this to
work.[^f1004]

Where several boards and clocks share a channel and PAN, one is made the leader and the rest
followers, after which the leader distributes the time to them. The designation is made from
a computer, through a CTS firmware utility, with a wireless adapter or a tabletop controller
attached; a board shows `Lead` or `FOLL` for a few seconds as it is set. The time can also come
from a controller rather than a console: a [tabletop WTTC-1](../scoreboard-control/wttc-1.md) or a
[handheld WHC-1](../scoreboard-control/whc-1.md) overrides the leader and every follower.[^f1004]

## Specifications

| | |
|---|---|
| Type | Wireless LED numeric scoreboard |
| Digit height | 5 in (12.7 cm), red[^diving] |
| Enclosure | Powder-coated aluminium with plastic digit covers[^f1004][^blog] |
| Radio | 2.4 GHz, internal certified patch antenna[^f1004][^f995] |
| Channels | 0 to 11, with PAN IDs 0 to 15[^f1004][^f995] |
| Power | 320 W supply, 100–240 V at 50/60 Hz, 4 A maximum[^f1004][^f995] |
| Diving board sizes | 4 ft to 5 ft 10 in high, 3 ft 5 in to 4 ft wide, about 4.25 in deep; 50–70 lb[^diving] |
| Ingress protection | IP23[^f1004] |
| Safety and emissions | ANSI/UL 48; CAN/CSA C22.2 #207; FCC 47 CFR 15 Subpart B Class A; ICES-003[^f1004][^f995] |
| Backup battery | CR1632 coin cell, CTS `R-420-014`[^f1004][^f995] |
| Status | Current[^manuals] |

## Part numbers and accessories

- Swimming and track boards, `MS-0149` to `MS-0152` and `MS-0155` to `MS-0157`; diving
  boards, `MS-0111` to `MS-0113`, `MS-0165` and `MS-0167`.[^f1004][^f995]
- `MK-21` and `MK-21-CAFL` wall mounting kits, `MK-22` pole kit, `MK-23` and `MK-23-CAFL`
  corner kit, each shipped separately from the board.[^f1004][^f995]
- `R-015-674-xx`, the RS-485 cable from a Gen7 timer, and `R-xxDC`, the RS-232 cable from an
  older console.[^f1004]
- `R-420-014`, the CR1632 coin cell on the main control board.[^f1004][^f995]
- A [WA-2](../scoreboard-control/wa-2.md) or [WA-3](../scoreboard-control/wa-3.md) wireless adapter, where the console has no radio of
  its own.[^f1004][^f995]

## See also

- [Scoreboards](index.md): the shared overview of numeric, matrix and video boards
- [LED-R](led-r.md) and the [mini LED scoreboard](mini-scoreboard.md): the cabled numeric
  lines
- [Dolphin Wireless Stopwatch Timing System](../../swimming/semi-automatic/dolphin.md): the
  watch system a swimming board displays without an external adapter
- [WA-2](../scoreboard-control/wa-2.md) and [WA-3](../scoreboard-control/wa-3.md): the adapters that give an older console a radio
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer

See everything tagged [Scoring](../../../categories.md).

## References

[^f1004]: Colorado Time Systems, Scoreboard for Swimming & Track With 2.4 GHz Integrated Wireless, Installation and User Guide (F1004 Rev. 202605, ©2026).
[^f995]: Colorado Time Systems, Diving Scoreboard With 2.4 GHz Integrated Wireless, Installation and User Guide (F995 Rev. 202605, ©2026).
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2015), Numeric Scoreboards section.
[^blog]: [Colorado Time Systems, Benefits of the Otter Electronic Scoreboards for Swimming](https://coloradotime.com/blog/benefits-of-the-otter-electronic-scoreboards-for-swimming) (CTS marketing copy: lane options, enclosure, mounting).
[^diving]: [Colorado Time Systems, Otter Diving Scoreboards](https://www.coloradotime.com/otter-diving-scoreboards/) (judge counts, what the boards display, sizes, weights and model numbers).
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (Otter Diving Scoreboard User Guide F995; Otter Scoreboard for Swimming & Track User Guide F1004; no Otter water polo entry).
