---
title: Colorado Time Systems Mini LED Scoreboard
description: >-
  The Colorado Time Systems mini LED scoreboard is a compact two-line numeric
  board for swimming, water polo, and other aquatic sports.
tags:
  - Equipment
  - Scoring
  - Timing
  - Swimming
  - Water polo
infoboxTitle: Mini LED Scoreboard
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`P01-1-000n` portable, `F01-1-000n` fixed (suffix `F` for 220 V)'
  - label: Type
    value: Two-line LED numeric scoreboard
  - label: Digits
    value: 5 in (12.7 cm), two lines
  - label: Dimensions
    value: 13.75 × 48 × 4 in (34.9 × 121.9 × 10.2 cm)
  - label: Weight
    value: About 28 lb (13 kg) per module
  - label: Power
    value: AC, with internal batteries on portable models
  - label: Connection
    value: RS-232 on quarter-inch jacks or RS-485 on 5-pin DIN, over CTS 2DC cable
  - label: Manual
    value: Mini Scoreboard User Guide (F927 Rev. 201202)
    href: https://coloradotime.com/support/manuals
---

<!-- Research notes (do not publish):
  Held sources, all under sources/vendors/colorado-time-systems/scoreboards-displays/:
  - cts-mini-scoreboard-user-guide-f927.pdf (F927 Rev. 201202, (c)2012), read end to end.
    It is the source for everything about module codes, the self test, mounting hardware,
    the jacks, the battery figures and the troubleshooting.
  - cts-mini-led-scoreboard-datasheet.pdf (Rev. 03/14), read in full.
  - cts-mini-scoreboard-caddy-mini.pdf (Rev. 04/14), for CAD-MINI-4 and CAD-MINI-5.
  - cts-mini-led-swimming-scoreboard-datasheet-rev-03-26.pdf (Rev. 03/26), filed during
    this pass from coloradotime.com/hubfs/Mini%20LED%20Portable%20Swimming%20%20Scoreboard.pdf
    and extracted with PyMuPDF. It is the current sheet.

  The two datasheets are the find. Against Rev. 03/14, the 2026 sheet:
  - retitles the product Mini LED Swimming Scoreboard;
  - drops the fixed F01-1-000n column entirely, leaving only portable P01 part numbers;
  - drops the water polo configuration (P01-1-0003 / F01-1-0003);
  - narrows the sports sentence, where the 2014 sheet lists four sports and this one names
    swimming alone.
  Everything else is word for word the same, including the dimensions, digit size, viewing
  distance, cabling and data sources. A datasheet listing fewer models is not a
  discontinuation notice, so the body says what each sheet lists and no more. F927 still
  documents fixed mounting at length and is still the manual CTS lists, which is why the
  fixed models are described here rather than written off.

  Public sources checked 2026-09-17: the CTS product page for P01-1-0001 (current, and the
  source of the LED-R comparison in CTS's own words); CTS's manuals index, which lists
  F927 as the manual; poolweb.com, which sells 1151-P01-1-0001 at USD 3,242.98 with a
  49 lb shipping weight, notes an extended manufacturer lead time, and says the sign panel
  SP-01-0001 is ordered separately. Dealer copy elsewhere (Recreonics, Team Aquatic) is
  CTS marketing text reprinted, so it corroborates nothing on its own.

  Weight: F927 gives about 28 lb (13 kg) per module for the wall-mounting calculation;
  Poolweb's 49 lb is a shipping weight for a packed board and is not comparable. Neither
  datasheet gives a weight at all.

  Named here and not yet covered: the System 4000 console, the UPC-C pace clock
  controller, and the CAD-MINI caddies, all three stubbed during this pass. SP-01-0001 is
  listed as an accessory part number rather than given a page, following how the other
  product articles treat parts of their own product.

  Still to research: whether the fixed models are actually withdrawn or merely absent from
  the current sheet, which CTS would have to confirm; an introduction date, which nothing
  held gives (F927 is 2012 and the older datasheet 2014, so the line is at least that old);
  the firmware versions the self test reports; whether Gen7 consoles drive it, since F927
  predates Gen7 and names only System 6, 5 and 4000; and the sign panel and artwork
  options, which the datasheets mention without describing.
-->

The mini LED scoreboard is a compact numeric scoreboard from
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS), built as a single
enclosure holding two lines of 5 inch digits. CTS aims it at facilities that need a board
they can move, or that have no room for a full-size one, and describes it as carrying what
two lines of its [LED-R](led-r.md) scoreboard show in a quarter of the
space.[^ds26][^product] The board displays data from a CTS timing console, from the UPC-C
[pace clock controller](../pace-clock/upc-c.md), or from a
[Dolphin](../../swimming/semi-automatic/dolphin.md) wireless watch system through the
[Dolphin Scoreboard Adapter](../../swimming/semi-automatic/dolphin-scoreboard-adapter.md).[^ds26][^f927]

Boards come as portable or fixed units, each built for one combination of what the two
lines show, and they stack: several modules mounted in a column make a multi-line board of
the kind a larger pool would otherwise buy outright.[^ds14][^f927]

## Role in the timing system

The mini scoreboard is a display and nothing else. The console times the race and sends
scoreboard data; the board shows whichever part of that data it has been told to show. It
has no keypad and no memory, and the only control on it is a power switch.[^f927]
Shared background on how CTS numeric boards are built, powered and required by the rules
is on the [scoreboards overview](index.md).

What a given board shows is decided by its module code rather than by the console. CTS
console software manuals list the scoreboard modules available in each sport, and a module
code tells this board which of them to render on each of its two lines.[^f927]

## Naming and models

CTS names the product three ways across its own documents. The user guide calls it the Mini
Scoreboard, the 2014 datasheet the Mini LED Scoreboard, and the current sheet, revised March
2026, the Mini LED Swimming Scoreboard.[^f927][^ds14][^ds26] This article uses mini LED
scoreboard.

The line has narrowed between those two datasheets. The 2014 sheet lists six display
configurations, each available as a portable `P01-1-000n` or a fixed `F01-1-000n` board and
each in 110 V and 220 V versions, and says the two lines can be set up for four sports:
track, and in the pool swimming, synchronized swimming and water polo. The 2026 sheet lists
five configurations, portable only, and mentions swimming alone; the water polo board and
the whole fixed column are gone from it.[^ds14][^ds26] CTS has published no withdrawal notice for either, and F927,
still the manual on the company's own index, documents fixed installation at length, so
what can be said is that the current sheet no longer lists them.[^f927][^manuals]

## Display configurations

A board is ordered as a configuration rather than programmed into one, and the signage
printed on it matches what its lines show.

| Part number | Top line | Bottom line |
|---|---|---|
| `P01-1-0001` | Event and heat | Lane, place and time |
| `P01-1-0002` | Lane, place and time | Lane, place and time |
| `P01-1-0003` | Period and shot clock | Score and game clock |
| `P01-1-0004` | Event and heat | Blank, for limited artwork |
| `P01-1-0005` | Event and heat | Signage only, for lane, place and time |
| `P01-1-0006` | Signage only, for lane, place and time | Lane, place and time |

Each has a fixed counterpart numbered `F01-1-000n`, and a 220 V version of either carries
an `F` suffix, so `P01-1-0001F` is the portable event-and-heat board for 220 V
supply.[^ds14] The water polo configuration, `P01-1-0003`, appears only on the 2014
sheet.[^ds14][^ds26] Signage can be printed on the weather cover or supplied as a separate
panel, which is ordered as its own part.[^f927][^poolweb]

## Module codes

Every line of every CTS numeric board answers to a module code, and on this board the two
lines are set independently. The codes run from `00` to `1F`, set on a small bank of
switches on each line's circuit board, with the top line's board at the left end of the
enclosure and the bottom line's at the right.[^f927]

Reaching the switches means opening the board. The weather cover slides out, after removing
the end bracket on a portable unit, and the second digit in from the relevant end lifts off
its rail to expose the switch bank; CTS warns against pulling a digit by its LEDs and says
to lift from under the edge instead.[^f927] Boards ordered for a single purpose, such as
water polo or a single line of lane, place and time, arrive with their codes already
set.[^f927]

The board reports its own configuration at power-up. It lights every segment of every digit,
then shows the firmware version of each circuit board, then the module code each line is set
to, which is the quickest way to confirm a change took.[^f927]

Data from a Dolphin system is addressed by lane rather than by sport module: lanes 1 to 9
take codes `01` to `09` and lane 10 takes `0A`.[^f927]

## Mounting

A portable board takes a handle and a set of legs, both bolted to threaded holes in the
enclosure, the legs underneath and the handle on top. Two further options carry one or more
boards upright: a wheeled [CAD-MINI caddy](cad-mini.md), or a pair of pipe stands that bolt
to brackets on the back of the board and are pinned in place, with a foot pointing forward
and another back on each side.[^f927][^caddy]

A fixed board hangs on two wall brackets whose keyhole slots are set 1 m (39.37 in) apart,
levelled and fastened with 3/8 in anchors. Each module then takes four cap screws in its
outermost threaded holes, left standing 3 to 4 mm proud and treated with anti-seize, and
drops onto the keyholes. CTS has the installer test-fit a module at the lowest and highest
positions before tightening the brackets, then build the column from the bottom up, and
leaves the end trim until the data connections have been proved. The wall has to carry
about 28 lb (13 kg) per module.[^f927]

Two columns can sit side by side, and boards stacked in a column are joined to each other
with data cables, the last one reaching a wall plate, a cable left accessible, or a wireless
adapter.[^f927]

## Connections

Both kinds of data jack sit at the right-hand end of the board beside the power switch: a
pair of round quarter-inch jacks for RS-232 and a pair of 5-pin DIN jacks for RS-485.[^f927]

A console connects by cable to the RS-232 side, using a CTS data cable ordered to
length.[^f927][^ds26] For a wireless link the board takes a [Sky-Fi WA-1](../scoreboard-control/wa-1.md) adapter
on its RS-485 side, with a second WA-1 at the console, both set to the same channel.[^f927]
A Dolphin system reaches the board through the
[Dolphin Scoreboard Adapter](../../swimming/semi-automatic/dolphin-scoreboard-adapter.md),
also on RS-485.[^f927] Further boards, shot clocks and horns chain onward from the first
device with the same kind of cable it is already using.[^f927]

Two restrictions apply. RS-232 and RS-485 must never feed the board at the same time. The
symptom is flickering data, and the check is whether cables of both types are plugged in. A
console older than the System 6 has to be set to send high-speed data, which the System 6
does by default; the symptom otherwise is garbled figures.[^f927]

## Power and battery

The board runs from AC power, and portable models carry internal batteries. A full charge
runs a board for about 8 hours, but its brightness starts to fall after about three and a
half, so CTS recommends running from AC power when a session needs full brightness
throughout.[^f927]

The batteries charge whenever the board is plugged in, and CTS gives two ways to keep them
that way: leave the board plugged in between meets, or charge it overnight after use and
then give it another overnight charge, or at least eight hours, every three months. The
batteries should never be run flat, and the power switch should be turned off after
use.[^f927]

## Specifications

| | |
|---|---|
| Type | Two-line LED numeric scoreboard |
| Digit height | 5 in (12.7 cm)[^ds26] |
| Lines | 2[^ds26] |
| Dimensions (H × W × D) | 13.75 × 48 × 4 in (34.9 × 121.9 × 10.2 cm)[^ds26] |
| Weight | About 28 lb (13 kg) per module[^f927] |
| Viewing distance | 50 m or more[^ds26] |
| Data connection | RS-232 on quarter-inch jacks, or RS-485 on 5-pin DIN; CTS 2DC cable, length specified at order[^ds26][^f927] |
| Data sources | System 6, System 5, System 4000, UPC-C pace clock controller; Dolphin through the Dolphin Scoreboard Adapter[^ds26] |
| Module codes | `00` to `1F`, set per line[^f927] |
| Power | 110 V or 220 V AC; internal batteries on portable models[^ds14][^f927] |
| Battery run time | About 8 hours, dimming after about 3.5 hours[^f927] |
| Status | Current; the 2026 datasheet lists portable models only[^ds26][^product] |

## Part numbers and accessories

- `P01-1-0001` to `P01-1-0006`, portable boards by configuration, and `F01-1-0001` to
  `F01-1-0006`, the fixed equivalents. A trailing `F` marks the 220 V version of
  either.[^ds14]
- `SP-01-0001`, the separate sign panel, ordered on its own.[^poolweb]
- `CAD-MINI-4` and `CAD-MINI-5`, the [caddies](cad-mini.md) that hold four or five modules
  and roll the board to the deck.[^caddy]
- `R-xxDC` and `R-2DC` data cables for the RS-232 side, and `R-DC4-xx` for RS-485, each
  ordered to length.[^f927]
- Portable stands, sold with their own brackets, screws, speed pins and a 4 mm hex
  wrench.[^f927]
- Wall-mounting parts ship with a fixed board: two brackets, two anchors per module, end
  trim, cap screws, pan-head screws, a long-arm hex wrench and anti-seize
  compound.[^f927]

A dealer listing prices the `P01-1-0001` board at USD 3,242.98 with a 49 lb shipping weight
and notes an extended lead time from the manufacturer.[^poolweb]

## See also

- [Scoreboards](index.md): the shared overview, including how CTS numeric boards work and
  what the rules require of a results display
- [LED-R](led-r.md): the full-size numeric line this board condenses
- [Dolphin Wireless Stopwatch Timing System](../../swimming/semi-automatic/dolphin.md) and
  the [Dolphin Scoreboard Adapter](../../swimming/semi-automatic/dolphin-scoreboard-adapter.md):
  the wireless timing system it can display
- [Sky-Fi WA-1](../scoreboard-control/wa-1.md): the adapter that replaces the console cable with a radio link
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer

See everything tagged [Scoring](../../../categories.md).

## References

[^f927]: Colorado Time Systems, Mini Scoreboard User Guide (F927 Rev. 201202, ©2012).
[^ds14]: Colorado Time Systems, Mini LED Scoreboard datasheet (Rev. 03/14), specifications and part-number table.
[^ds26]: Colorado Time Systems, Mini LED Swimming Scoreboard datasheet (Rev. 03/26), specifications and part-number table.
[^caddy]: Colorado Time Systems, Mini Scoreboard Caddy datasheet (Rev. 04/14).
[^product]: [Colorado Time Systems, Portable Mini Scoreboard for Swimming (P01-1-0001)](https://coloradotime.com/products/portable-mini-scoreboard-for-swimming-p01-1-0001).
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (Mini Scoreboard User Guide F927).
[^poolweb]: [Poolweb, Two-Line Mini LED Scoreboard, Event/Heat and Lane/Place/Time (1151-P01-1-0001)](https://www.poolweb.com/products/two-line-mini-led-scoreboard-displays-event-heat-and-lane-place-time) (dealer listing: price, 49 lb shipping weight, sign panel `SP-01-0001` ordered separately).
