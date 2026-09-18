---
title: Colorado Time Systems LED-R
description: >-
  LED-R is the Colorado Time Systems LED numeric scoreboard module: one line of
  eight or ten 10 inch digits, stacked into multi-line aquatic boards.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: LED-R
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`LED-R`; `10LED-8R` and `10LED-8RO` appear in a fuse specification'
  - label: Type
    value: Single-line LED numeric scoreboard module
  - label: Digits
    value: 10 in seven-segment, in red, amber, green or blue; 8 or 10 per line
  - label: Dimensions
    value: 14 in high × 97.625 in long (35.6 × 248 cm)
  - label: Weight
    value: 45 lb (20 kg)
  - label: Power
    value: 120 VAC at 3.0 A maximum, or 230 VAC at 1.5 A, 50–60 Hz
  - label: Connection
    value: RS-232 scoreboard port
  - label: Manual
    value: Installation guide (F1079 Rev. 202604); configuration guide (F1078 Rev. 202507)
    href: https://coloradotime.com/support/manuals
---

<!-- Research notes (do not publish):
  Current documents, both downloaded from CTS's manuals index during this pass, filed under
  sources/vendors/colorado-time-systems/scoreboards-displays/ and extracted with PyMuPDF:
  cts-single-and-multi-line-numeric-led-scoreboards-installation-guide-f1079.pdf (F1079
  Rev. 202604, 36 pages, read end to end) and
  cts-led-r-numeric-scoreboard-configuration-guide-f1078.pdf (F1078 Rev. 202507, 7 pages,
  read in full, though most of its content is figures the extraction cannot reach).

  Held and read for the previous generation:
  cts-single-and-multi-line-scoreboard-display-modules-installation-guide-f218-rev-201705
  (and its -rev-0705 predecessor), the guide F1079 replaces.

  What changed between F218 (2017) and F1079 (2026), which is the most useful thing this
  pass found:
  - F218 covers the 4009, CTS's light-reflective board, alongside the LED boards: a branch
    circuit wiring method for the 4009 only, a two-fuse specification for it, and a control
    board note reading "4009 and older 8-digit LED". F1079 drops all of it. The same note
    now reads "Older 8-digit LED", the branch circuit method is gone, and one fuse is
    listed.
  - The US supply figure moves from 115 VAC +/-10% at 3.0 A to 120 VAC at 3.0 A maximum.
  - F1079 adds a German specifications page.
  A guide dropping a product is not a discontinuation notice, so the body says the current
  guide no longer covers the 4009 and leaves it there.

  Naming is genuinely inconsistent in CTS's own material. F1079, 36 pages about this
  product, never uses a model name. F1078 puts "(LED-R)" on its cover. The Colorado Display
  Systems scoreboard catalogue lists LED-R with dimensions and colours. The 2011 catalogue
  names LED-REX, a retrofit, and 6-digit boards that share the module dimensions. The only
  place a fuller model code appears is the German fuse line in F218, which reads
  10LED-8R/8RO where the English page reads only "LED"; that looks like a 10 inch, 8 digit
  board in indoor and outdoor forms, but nothing held confirms it.

  Figure discrepancy, stated once in the body: the datasheet gives 10.1 in digits on a
  97.625 in module, the CDS catalogue 10 in on 97.25 in. F1079's dimensions section gives
  97.625 in, which sides with the datasheet.

  Not used, and worth knowing why: cts-scoreboard-installation-and-service-manual-f290
  (F290 Rev. 0600) looked like the service manual for this family and is not. It documents
  portable multisport boards with 9 and 12 inch flip digits, a PA speaker and microphone, an
  MA-1 music adapter, a CA-1 cigarette lighter adapter, a BP-3 battery pack, the CAD-P
  caddy and the WB-1 wall box, with control boards numbered 2860 (before December 1998) and
  0066-4290 (after). That is a separate product line and wants its own article.

  Still to research: part numbers per line configuration, which no source held gives; when
  the LED line replaced the 4009; what LED-REX costs or involves; the 6-digit boards; and
  the module code charts, which live in figures inside F1078 and on CTS's website rather
  than in any text this wiki holds.
-->

LED-R is the single-line LED numeric scoreboard module made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS), and the module its
multi-line numeric boards are built from. One module is one line of digits in an
aluminium frame behind a sliding weather shield; a board of several lines is a column of
modules bolted to the same pair of struts and linked by short data cables.[^f1079][^cat]

Each line shows one thing at a time, chosen by a code set on switches inside the module, so
a six-line board is six lines each assigned a different piece of the race. The data arrives
from a CTS timing console over a single RS-232 run.[^f1078][^f1079] Shared background on
numeric boards, including the contrast with light-reflective digits, is on the
[scoreboards overview](index.md).

## Naming

CTS's own documents disagree about what this product is called. The installation guide runs
to 36 pages without using a model name, calling its subject a scoreboard display line
throughout. The configuration guide puts `LED-R` in brackets on its cover. The Colorado
Display Systems catalogue lists LED-R as a product with dimensions and a weight, and the
2011 CTS catalogue mentions LED-R single modules in passing while naming
[LED-REX](led-rex.md), a retrofit that converts an older light-reflective board to
LED.[^f1079][^f1078][^cat][^cat11]

One fuller code survives in an unexpected place. The German-language specification page in
the older F218 guide gives the fuse rating for `10LED-8R/8RO`, where the English page on the
facing side says only LED. The reading that fits is a 10 inch digit, 8 digit board in indoor
and outdoor versions, but no document held states it.[^f218]

## Lines and digits

A line carries either eight or ten digits, and the arrangement matches what the line is for.
Six of them always carry the time, colon included. On an eight-digit line the other two are
a single lane digit and a single place digit; a ten-digit line gives each of those fields two
digits instead of one.[^f1079]

A groove along the top of the frame and another along the bottom hold the digits, with
spacers between them, and a digit can be slid along that track to line up under the signage.
CTS is firm about two limits: the order of the digits must not change, or the board will not
work, and unused digits stay in the frame rather than coming out, both to keep the spacing
right and to leave a spare available.[^f1079]

The eight-digit line has a consequence at large pools. With a single lane digit, double
figures are shown as letters, so lane 10 appears as `A`, lane 11 as `b` and lane 12 as
`C`.[^f1079]

## Module codes

A line's module code decides what the console sends it. Boards leave the factory on `0F`,
and on a multi-line board each line has to be set to something different.[^f1079]

The codes belong to the console's software rather than to the board. CTS's timer manuals
list what each module shows in each sport, and the board receives the one it is set to.
From the configuration guide's examples, `01` carries the place and time for lane 1 and `0C` the
event and heat; `03` doubles as time of day when the operator blanks the scoreboard from the
timer; `11` shows lane 1 during the race and switches to team scores, which are normally
`0D`, once the timer is reset; and `12` exists for television, holding the running time, the
leading split and the winning time instead of cycling through every finish time the way `0F`
does.[^f1078]

Setting a code means opening the line. The weather shield slides aside and two digits lift
out to expose the control board, which sits behind digits 7 and 8 on older eight-digit
boards and behind the centre digits, 4 and 5, on newer eight-digit and all ten-digit
boards.[^f1079][^f1078] The switch chart is printed inside the frame and published on CTS's
website, because it differs between board revisions.[^f1079] A removed digit must never be
left hanging on its wiring; CTS's own suggestion is to turn it round and rest it in the
weather shield groove.[^f1079]

A board states its own code at power-up. Every digit lights, then the module code appears,
and a newer board follows it with a firmware revision where an older one may show the data
speed.[^f1079]

## Power and data

A line draws up to 3.0 A from a 120 V supply, or 1.5 A from 230 V, at 50 to 60 Hz, and is
protected by a single 3 A time-lag fuse. The module is rated for 0–50 °C at up to 90%
relative humidity, non-condensing, and to 3000 m.[^f1079]

CTS asks for a duplex outlet for every two lines, positioned so that each module has power
beside it for test gear, and for dedicated circuits, on the grounds that the board is
computer equipment. The on/off switch belongs near the board or in the timing booth, six to
seven feet up, because a switch hidden in a plant room means the board is left on
permanently, which shortens its life.[^f1079]

Data reaches the board either through the removable two-wire cable supplied with it or
through permanent cabling in one-inch conduit running to a data connection box near the
timing table. On a multi-line board, short cables link one line to the next, top to bottom
or bottom to top, and the cable from the console attaches to whichever input is left free at
one end of the column. Side-by-side columns are linked to each other in the same
way.[^f1079]

## Mounting

Signage goes on before anything is lifted. The lettering arrives as a transfer between a
carrier and a transfer sheet, is taped along one edge, rolled down from the opposite edge,
and left a couple of days for the adhesive to set before the panel is handled
normally.[^f1079]

The board itself hangs on slotted struts carried by wall brackets. CTS gives the geometry
plainly: the bottom of the board sits at least eight feet up to discourage vandalism; the
top and bottom brackets go 6 to 8 inches inside the marked corners of the board; no more
than 66 inches, which is four display lines and a sign panel, may separate one bracket from
the next; mounting holes are drilled 2.5 inches deep; and the hardware is torqued to
10 inch-pounds, with a warning not to overtighten concrete inserts. A corner-mounted board
is marked out 67.875 inches from the corner, and only a single column can be corner mounted,
since a side-by-side pair needs a flat wall or a frame the facility
provides.[^f1079]

Lines are tested on the ground before they go up, which is what the power-up code display is
for. CTS's reasoning is that a wrong code or a dead line is far easier to put right at waist
height than on a ladder, so each line is plugged into a nearby outlet and checked
first.[^f1079]

## Service

CTS says the boards need no routine maintenance, and asks only that they be switched off
when not in use.[^f1079]

Most service work starts by removing a digit, which follows the same lift-and-tilt procedure
as setting a module code, with the added warning not to bend the LEDs. Digits are numbered
from the left and the control board is labelled to match, so a digit being returned to the
factory is disconnected from the connector bearing its own number, with a second, smaller
connector alongside it for a decimal point. Fitting a replacement means routing its harness
behind the digits to its right, one at a time, until it reaches the board. A failed control
board comes out the same way, from behind the two digits that cover it, and goes back to CTS
rather than being repaired in place.[^f1079]

## Generations

The guide CTS published in 2017, F218, covered two products at once: the LED boards and the
`4009`, its light-reflective board, whose mechanical digits needed their own wiring method
and their own fuses. The 2026 guide has dropped all of it. The branch-circuit method for the
4009 is gone, the fuse list has one entry instead of three, and the note about where the
control board sits, which used to begin "4009 and older 8-digit LED", now names only the
older LED boards.[^f218][^f1079] CTS has published no withdrawal notice for the 4009; what
can be said is that the current guide no longer covers it.

Two smaller changes came with the same revision. The US supply figure moved from 115 VAC
±10% to 120 VAC, and a German specifications page was added.[^f218][^f1079]

## Specifications

| | |
|---|---|
| Type | Single-line LED numeric scoreboard module |
| Digits per line | 8 or 10[^f1079] |
| Digit height | 10 in (25.4 cm) per the catalogue; 10.1 in (25.7 cm) per the datasheet[^cat][^ledsheet] |
| Digit colours | Red, amber, green or blue[^cat][^ledsheet] |
| Module dimensions | 14 in high × 97.625 in long (35.6 × 248 cm)[^f1079] |
| Weight | 45 lb (20 kg)[^cat] |
| Environmental | 0–50 °C, 90% relative humidity non-condensing, 0 to 3000 m[^f1079] |
| Power | 120 VAC at 3.0 A maximum, or 230 VAC at 1.5 A, 50–60 Hz[^f1079] |
| Fuse | 3 A, 250 V, time lag, 5 × 20 mm[^f1079] |
| Data | RS-232 scoreboard port at ±12 V[^f1079] |
| Factory module code | `0F`[^f1079] |
| Bracket spacing | 66 in (167 cm) maximum, or four lines and a sign panel[^f1079] |
| Status | Current[^manuals] |

## Part numbers and accessories

- `LED-R`, the model name as the catalogues give it; `10LED-8R` and `10LED-8RO` appear once,
  in a fuse specification.[^cat][^f218]
- [LED-REX](led-rex.md), the retrofit that converts an existing light-reflective board to
  LED digits.[^cat11]
- Supplied with a board: display lines, sign panels and signage transfers, sign panel
  brackets and hardware, a removable data cable, link cables for multi-line boards, slotted
  struts, universal and "U" mounting brackets, and bracket hardware.[^f1079]
- Ordered separately: permanent data cabling and its connection box, and slotted strut
  covers.[^f1079]

## See also

- [Scoreboards](index.md): the shared overview, including how numeric boards work and what
  the rules require of a results display
- [Mini LED scoreboard](mini-scoreboard.md): the compact two-line board CTS positions as
  carrying two LED-R lines in a quarter of the space
- [Otter](otter.md): the wireless numeric line
- [Scoreboard control](../scoreboard-control/index.md): the adapters and controllers that
  can feed a board in place of a console cable
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer

See everything tagged [Scoring](../../../categories.md).

## References

[^f1079]: Colorado Time Systems, Single and Multi-line Numeric LED Scoreboards Installation Guide (F1079 Rev. 202604, ©2026).
[^f1078]: Colorado Time Systems, LED Numeric Scoreboard Configuration (LED-R) (F1078 Rev. 202507, ©2025).
[^f218]: [Colorado Time Systems, Single and Multi-line Scoreboard Display Modules Installation Guide (F218 Rev. 201705)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Scoreboards/Scoreboard_Installation_Guide_F218.pdf).
[^ledsheet]: Colorado Time Systems, LED and Light Reflective Scoreboards datasheet (Rev. 08/12).
[^cat]: Colorado Display Systems, Scoreboard Catalog, track scoreboards section (LED-R dimensions, weight and digit colours).
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2011), LED-REX and 6-digit scoreboards.
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (LED-R configuration guide F1078 and installation guide F1079).
