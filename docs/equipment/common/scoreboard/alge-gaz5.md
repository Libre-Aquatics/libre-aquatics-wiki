---
title: ALGE GAZ5 display board
description: >-
  The GAZ5 is the ALGE-Timing numeric display board that succeeded the GAZ4, with bistable
  seven-segment digits and both RS-232 and RS-485 inputs, sold from about 2012 into the early 2020s.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: GAZ5
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`GAZ5 nhh` (`n` digits, `hh` digit height in cm), e.g. `GAZ5 625 PP5`; options `PP5`, `PS5`'
  - label: Type
    value: 'Numeric display board'
  - label: Digits
    value: 'Bistable electromagnetic seven-segment, yellow on black; 15 or 25 cm (45 cm in early documents)'
  - label: Connection
    value: 'RS-232 and RS-485 on banana sockets; two Amphenol sockets for data and power; WTN radio option'
  - label: Power
    value: '11–20 V DC, internal NiMH power pack `PP5`, or mains supply `PS5`'
  - label: Introduced
    value: 'By January 2012'
  - label: Status
    value: 'No longer listed as a product by 2026; spare parts still listed'
  - label: Manual
    value: '[GAZ5 manual (E120911)](https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)'
---

<!--
Research notes, ALGE GAZ5 display board. Surfaced 2026-11-22 while building out alge-gaz4.md. It
was already named on alge-d-sw.md, alge-gazc.md, alge-cable-010.md, alge-mc8.md, alge-timy.md and
alge-timer-s3/s4.md without a page of its own. Built out 2026-11-22.

Held documents (sources/vendors/alge-timing/):
  - scoreboards-displays/alge-gaz5-display-board-manual-e120911.pdf, GAZ5 manual, Version E120911,
    22 pp., current ALGE download; PDF created September 2012, modified November 2023. Read in
    full. Calls itself the fifth generation (the GAZ4 manual says fourth). Same scheme as the GAZ4:
    16-position rotary switch (0 standard, 1-10 address, 11 test, 12 refresh, 13 shift left,
    14 countdown, 15 clock) and a format toggle (bib/rank, min-sec-hundredths, h-min-sec). Adds a
    second toggle that picks RS-485, RS-232 or the internal clock, and white/blue RS-485 banana
    sockets beside the yellow/black RS-232 pair; both default to 2400 baud, 8N1. Two Amphenol
    sockets carry +11-20 V, 0 V and data. PP5 power pack: NiMH, 12 V 4.5 Ah, mains charger for
    90-132 or 187-264 V AC, 14 h charge; the PP5 is not offered on 45 cm boards. PS5 built-in
    mains supply. External battery at least 2 Ah. Runtime as a clock about 70 h (15 cm) and 35 h
    (25 cm) in section 2.1, about 30 h for 25 cm in section 7, and 60/20/11 h in the dimension
    table. Dimension table identical in sizes to the 2010 GAZ4 manual (515/615 290 x 956 mm;
    525/625 393 x 1493; 545/645 664 x 2490; depth 100/100/120; D 375/480/738), weights
    12/13, 20/21, 45/48 kg. Quartz 9.216 MHz, -25 to 50 C. Standby 10 mA; per-step pulses as GAZ4.
    Takes data from TdC 8001, 8000, 4000, Timy/Timy2, VT2, Comet, OPTIc2, OPTIc, OPTI 1sw, Timer
    S4, Timer S3, Self Timer SF2 and a PC. Cables 010-10, 037-10, 060-10 (S4), 030-10 (Comet,
    powered), 033-01 between boards; KT300/KT500 reels; ranking board of 2-10 lines with TdC, PC
    running TimeNET2, NGAZ/R, adapter 069-02. Protocol table still carries the Timer S4 swim
    format addressing boards A-H. Section 4.3 covers running a GAZ5 from a Timer S4 with the
    rotary switch at 0 or 13, so the board kept the S4 display protocol.
  - catalogs-brochures/alge-gaz5-leaflet-2012.pdf, GAZ5 leaflet (GAZ5-PE.pdf), PDF dated
    11 January 2012, archived November 2015. Feature list worded like the GAZ4 leaflet with Timy2
    in place of Comet; RS-232 and RS-485 (misspelt RS458 in one line); direct supply 2.5 A;
    PS5/PP5 for 90-132 and 187-264 V; says charging time for NiCad although the PP5 is NiMH;
    table with 15/25/45 cm, weights 12/13/21/22/45/48 kg, D 352/455/726 mm, DIN 1450 reading
    distance 75/125/225 m, runtime 60/20/11 h. Verified.
  - catalogs-brochures/alge-general-catalogue-2017, pp. 46-47: text says 15 or 25 cm digits, but
    the table still lists the 45 cm 545/645; three supply variants; RS-232 and RS-485; can be used
    while charging; a bib-and-rank board can pair with a time board, and a stack of as many as ten forms a ranking board;
    weights and D as the leaflet. Elsewhere: a WTN-integrated GAZ5 or D-LINE takes data by radio
    through a WTN-DB receiver (pp. 35, 98); carrying bags GTT15 and GTT25 for 15 and 25 cm
    six-digit GAZ5 and D-LINE boards (accessories page); a three-digit GAZ5 315 PP5 or 325 PP5 as
    the electromagnetic option of the athletics concentration clock, run from a Timy3 W, about
    70 m and 120 m visibility (p. 66); "D-LINE or GAZ5" in system drawings for alpine and nordic
    skiing, cycling (including a board on a car roof), motor sport, bobsleigh and TdC 8001 setups.
    No GAZ5 in the swimming pages. Verified.
  - catalogs-brochures/alge-swimming-catalogue-v1.113-2013, page 3: semi-automatic system with
    Timy2 PXE, MC8-SWIM, eight 023-02 buttons, STB1 and "Display Board GAZ5 8xxS + PP5". The main
    swimming system on later pages uses LED D-SW boards. Verified.
  - catalogs-brochures/alge-aquatic-sports-catalogue-swimming-ke-2026: the semi-automatic cable
    and radio systems show a D-LINE time board (radio version with WTN-DB). No GAZ5. Verified.

Web:
  - ALGE page GAZ5-E1.html (archived January 2012) and GAZ5-E2.html (November 2015): "new
    generation GAZ5"; the 2015 page carries the leaflet table. Verified.
  - ALGE V2 product page en/display-boards/gaz5.html, archived November 2019, and German version
    archived January 2022 (last 200 capture of the English page June 2022): 150 and 250 mm only,
    single- or double-sided, 3, 4, 5 or 6 digits, with or without PP5; interface RS-232 and
    RS-485; configurator lists 3 and 6 digits as standard. Verified.
  - ALGE V2 spare-parts page (December 2019): GAZ5 Power Pack PP5, Power Supply PS5, GAZ5 CPU.
    Current site: product 2513 "GAZ5 spare parts" (read 2026-11-22) with no variants shown;
    the display-boards category (read 2026-11-22) lists D-LINE, D-SAT and others but no GAZ
    board. Verified. That the GAZ5 left the range between mid-2022 and 2026 is inferred from the
    archive and the current category page; no ALGE statement found. That the D-LINE took its
    place is inferred from the 2017 "D-LINE or GAZ5" pairing and the 2026 catalogue.
Independent sources: none found. RaceResult exchange documentation covers "GAZ/DLine" boards
generically; a marketplace listing turned up and is not used.
Not established: exact introduction and withdrawal dates; whether the 45 cm size was ever built.

Sources:
  - ALGE-Timing, GAZ5 manual, Version E120911 (https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)
  - ALGE-Timing, GAZ5 leaflet, 2012 (https://web.archive.org/web/20151125034323/http://www.alge-timing.com/alge/download/brochure/GAZ5/GAZ5-PE.pdf)
  - ALGE-Timing, General catalogue 2017 (held locally)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, 2013 (https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
  - ALGE-Timing, aquatic sports catalogue, swimming, 2026 (held locally)
  - ALGE-Timing, ALGE Display Board GAZ5 (https://web.archive.org/web/20120116224021/http://alge-timing.com/alge/GAZ5-E1.html)
  - ALGE-Timing, GAZ5 Display Board (https://web.archive.org/web/20191114233019/https://alge-timing.com/AlgeTiming_V2/en/display-boards/gaz5.html)
  - ALGE-Timing, GAZ5 Spareparts (https://web.archive.org/web/20191212233434/https://alge-timing.com/AlgeTiming_V2/en/spare-parts/gaz5-spareparts.html)
  - ALGE-Timing, GAZ5 spare parts (https://alge-timing.com/en/product/2513/gaz5-spare-parts)
  - ALGE-Timing, Display boards (https://alge-timing.com/en/categories/display-boards)
-->

The GAZ5 is a numeric display board made by [ALGE-Timing](../../../vendors/alge-timing.md) of
Lustenau, Austria, and the successor to the [GAZ4](alge-gaz4.md). Like the GAZ4 it uses bistable
electromagnetic seven-segment digits, yellow on black, that draw current only when they
change.[^manual][^leaflet] It shows times, ranks, bib numbers and points sent from an ALGE timer
or a PC, or runs on its own as a clock or countdown timer.[^manual] ALGE's manual calls it the
fifth generation of its display boards.[^manual] In swimming, ALGE's 2013 catalogue used it as the
time board of a push-button timing system.[^cat2013]

See the [scoreboards overview](index.md) for the shared background on scoreboards, and the
[GAZ4](alge-gaz4.md) article for the design the two boards share.

## Role in the timing system

The GAZ5 is a receiver and display. A timer drives it over a two-wire cable or by radio, and it
keeps no results of its own.[^manual][^cat2017] ALGE sold it across its range: the 2017 catalogue
offers "D-LINE or GAZ5" as the display in its drawings for skiing, cycling, motor sport and
bobsleigh, including a board mounted on a car roof for road cycling.[^cat2017] Two boards side by
side can show bib, rank and time together, and up to ten can be stacked as a ranking
board.[^cat2017][^manual]

## History and naming

This section covers the dates found and the order code. The earliest dated GAZ5 documents are a
leaflet and a web page from January 2012, both of which call it ALGE's new generation of display
board.[^leaflet][^web2012] The English manual, version E120911, followed in September 2012.[^manual]
The board appears in ALGE's 2013 swimming catalogue and its 2017 general catalogue, and ALGE's
product page offered it until at least June 2022.[^cat2013][^cat2017][^web2019]

By 2026 the GAZ5 no longer appears among the display boards on ALGE's website, which keeps only a
GAZ5 spare-parts page.[^category][^spares] No ALGE statement on its withdrawal has been found. The
LED [D-LINE](alge-d-line.md) board, which the 2017 catalogue paired with it as an alternative,
fills the same place in ALGE's 2026 swimming catalogue.[^cat2017][^cat2026]

The order code works as on the GAZ4: the digit count, then the digit height in centimetres, then
the power option, so `GAZ5 645 PP5` is a six-digit board with 45 cm digits and a power
pack.[^cat2017][^leaflet] The 2013 swimming catalogue writes the swimming board as
`GAZ5 8xxS`.[^cat2013]

## Design and construction

The GAZ5 keeps the GAZ4's black plastic-coated aluminium case with a Plexiglas front and four
hanging loops, rated for outdoor use from −25 to 50 °C.[^manual][^cat2017] The electronics are a
CMOS microprocessor with a watchdog and a 9.216 MHz quartz.[^manual] The manual recommends running
the digit test more often on boards used outdoors, so that stuck segments are found.[^manual]

Against the GAZ4 the main changes are on the back panel. Beside the rotary switch and the format
toggle there is a second toggle that selects the input: RS-485, RS-232, or the internal clock. A
pair of white and blue banana sockets on each side carries RS-485, next to the yellow and black
RS-232 pair. The Amphenol sockets on each side carry supply and data as before.[^manual] ALGE's
2019 product page also lists double-sided boards.[^web2019]

## Models and dimensions

This section lists the standard sizes. The manual, the 2012 leaflet and the 2017 catalogue list
five- and six-digit boards in three digit heights, with five- and six-digit boards of the same
height sharing a case:[^manual][^leaflet][^cat2017]

| Model | Digits | Digit height | Case height × width × depth | Weight |
|---|---|---|---|---|
| `GAZ5 515` / `615` | 5 / 6 | 15 cm | 290 × 956 × 100 mm | 12 / 13 kg |
| `GAZ5 525` / `625` | 5 / 6 | 25 cm | 393 × 1493 × 100 mm | 20 / 21 kg |
| `GAZ5 545` / `645` | 5 / 6 | 45 cm | 664 × 2490 × 120 mm | 45 / 48 kg |

The weights are from the manual. The leaflet and the 2017 catalogue give 21 and 22 kg for the
25 cm boards.[^manual][^leaflet][^cat2017] The overall height including the hanging loops is 375,
480 and 738 mm in the manual, and 352, 455 and 726 mm in the leaflet and catalogue, which are the
GAZ4's 1998 figures.[^manual][^leaflet][^cat2017] All three give reading distances of 75, 125 and
225 m, the leaflet and catalogue citing DIN 1450.[^manual][^leaflet][^cat2017]

Later documents drop the 45 cm size. The 2017 catalogue's text offers 15 or 25 cm
digits while its table still lists the 45 cm boards, and the 2019 product page offers only 150 and
250 mm, in three-, four-, five- or six-digit versions.[^cat2017][^web2019] The manual says the
power pack was never offered for the 45 cm boards.[^manual] A three-digit board with 15 or 25 cm
digits appears in the 2017 catalogue as a countdown clock for athletics field events, run from a
Timy3.[^cat2017]

## Operation

The rotary switch has the same 16 positions as the GAZ4's thumb wheel: 0 for standard data
reception, 1–10 for addresses, 11 for the digit test, 12 for refresh, 13 to shift the format one
digit left, 14 for countdown and 15 for the clock.[^manual] The format toggle chooses bib and rank,
minutes with seconds and hundredths, or hours with minutes and seconds.[^manual] See the
[GAZ4 operation section](alge-gaz4.md#operation) for what each setting does; the GAZ5 manual
describes them in the same terms.

In clock and countdown modes the board runs from its own quartz and is controlled by a
[023-02 push button](../../swimming/semi-automatic/pushbutton/alge-023-02.md) on the data
sockets, or by flicking the input toggle. A countdown can run from up to 99 hours 59 minutes 59
seconds, with time-outs.[^manual]

## Use in swimming

ALGE's 2013 swimming catalogue shows a `GAZ5 8xxS` with a power pack as the display of its
semi-automatic system. A [Timy](../../swimming/timers/alge-timy.md) records one push-button
channel per lane, with the buttons on an [`MC8-SWIM`](../../swimming/deck-cabling/alge-mc8.md)
cable and an [STB1 Startbeep](../../swimming/starter/alge-stb1.md) for the start.[^cat2013] For
larger installations the same catalogue offers LED [D-SW](alge-d-sw.md) boards driven by a
[TM-SWIM](../../swimming/timers/alge-tm-swim.md) or Timy2.[^cat2013]
ALGE's 2026 aquatics catalogue shows a D-LINE time board in the same semi-automatic role, cabled
or by radio.[^cat2026]

The GAZ5 still accepts the [Timer S4](../../swimming/timers/alge-timer-s4.md)'s output, including
the swimming format that addresses up to eight ranking boards, so it can replace a board in an
older S4 swimming installation.[^manual] Larger ranking boards of up to ten lines are run from a
PC through a timing computer.[^manual]

## Connection to the timer

Both inputs default to 2400 baud with one stop bit, eight data bits and no parity.[^manual] The manual
lists the Timer S3 and S4, the Timy and Timy2, the
[TdC 4000](../../swimming/timers/alge-tdc-4000.md), the
[TdC 8000](../../swimming/timers/alge-tdc-8000.md) and TdC 8001, the
[Comet](../../swimming/timers/alge-comet.md), and several photo-finish and video timers among its
data sources, along with a PC.[^manual] From a Timer S4 the link is
[cable 010-10](../../swimming/timers/alge-cable-010.md) or a two-wire equivalent, which can run
about 1 km, for example on [KT cable reels](../../swimming/timers/alge-kt-cable-reels.md).[^manual]
Boards are linked to each other with [cable 033](../../swimming/timers/alge-cable-033.md), and a
ranking board takes one [NGAZ/R](../../swimming/timers/alge-ngaz-r.md) supply for all its
boards.[^manual]

A GAZ5 or D-LINE can be built with an integrated [WTN](../../swimming/timers/alge-wtn.md) radio
link, receiving data from a Timy3 or TdC 8001 through a WTN-DB receiver instead of a
cable.[^cat2017]

## Power

A GAZ5 runs from 11–20 V DC, such as a 12 V car battery of at least 2 Ah, or from one of two
internal options.[^manual] The `PP5` power pack holds 12 V, 4.5 Ah NiMH cells and a charger for
90–132 or 187–264 V AC; it charges in about 14 hours, and the board can run while it charges. The
`PS5` is a built-in mains supply without cells.[^manual][^cat2017] When the cells run low the
board shows "End" and switches off.[^manual] Where two boards are linked, only one needs a power
source.[^manual]

ALGE's runtime figures for the `PP5` disagree. The manual's power section gives about 70 hours for
15 cm digits and 35 hours for 25 cm; its technical data give about 30 hours for 25 cm; and its
dimension table, the leaflet and the 2017 catalogue give 60, 20 and 11 hours for the three heights,
measured as a running clock at 20 °C.[^manual][^leaflet][^cat2017] The manual adds that cold cuts
the runtime by about 20 % at −20 °C.[^manual] The leaflet calls the cells NiCad in one line, although
it and every other source describe the `PP5` as NiMH.[^leaflet][^manual]

## Specifications

| Item | Value |
|---|---|
| Digits | Bistable electromagnetic seven-segment, yellow on black, 15 or 25 cm (45 cm listed to 2017) |
| Digit count | 5 or 6 standard; 3–6 on the 2019 product page |
| Processor | CMOS microprocessor with watchdog |
| Time base | Quartz, 9.216 MHz |
| Interfaces | RS-232 and RS-485, 2400 baud, 8N1 |
| Connections | RS-232 and RS-485 banana sockets; two Amphenol sockets (+11–20 V, 0 V, data) |
| Power | 11–20 V DC; `PP5` NiMH power pack, 12 V 4.5 Ah; `PS5` mains supply |
| Current | 10 mA standby; 123–360 mA pulses while digits change |
| Temperature range | −25 to 50 °C |
| Case | Black plastic-coated aluminium, Plexiglas front, four hanging loops |

Sources: manual, leaflet, 2017 catalogue and 2019 product page.[^manual][^leaflet][^cat2017][^web2019]

## Part numbers and accessories

| Item | Part number | Notes |
|---|---|---|
| Display board | `GAZ5 nhh` | `n` digits, `hh` digit height; `S` suffix for the swimming board |
| Power pack | `PP5` | Built in on order; NiMH cells and charger |
| Power supply | `PS5` | Built in on order; mains only |
| Data cable | [`010-10`](../../swimming/timers/alge-cable-010.md) | From a Timer S4 |
| Linking cable | [`033-01`](../../swimming/timers/alge-cable-033.md) | Joins two boards and shares power |
| Radio receiver | [`WTN-DB`](../../swimming/timers/alge-wtn.md) | For boards with integrated WTN |
| Carrying bags | [`GTT15`, `GTT25`](../../swimming/timers/alge-gtt-carrying-bags.md) | For six-digit 15 and 25 cm boards |
| Spare parts | `PP5`, `PS5`, CPU board | Listed on ALGE's spare-parts page |

Sources: manual, 2017 catalogue and spare-parts page.[^manual][^cat2017][^spares]

## See also

- [GAZ4](alge-gaz4.md): the predecessor board
- [D-LINE display board](alge-d-line.md): the LED board offered alongside it and later in its place
- [GAZc](alge-gazc.md): the board of the 1997 Timer S4 swimming system
- [D-SW display boards](alge-d-sw.md): ALGE's LED swimming boards
- [Scoreboards](index.md): the scoreboard overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, GAZ5](https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf) (manual, Version E120911).
[^leaflet]: [ALGE-Timing, Display Board GAZ5](https://web.archive.org/web/20151125034323/http://www.alge-timing.com/alge/download/brochure/GAZ5/GAZ5-PE.pdf) (leaflet, January 2012; archived).
[^web2012]: [ALGE-Timing, ALGE Display Board GAZ5](https://web.archive.org/web/20120116224021/http://alge-timing.com/alge/GAZ5-E1.html) (archived January 2012).
[^web2019]: [ALGE-Timing, GAZ5 Display Board](https://web.archive.org/web/20191114233019/https://alge-timing.com/AlgeTiming_V2/en/display-boards/gaz5.html) (product page; archived November 2019).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^cat2017]: ALGE-Timing, General catalogue (2017), pp. 35, 46–47, 66 and system drawings.
[^cat2026]: ALGE-Timing, Aquatic sports catalogue, swimming (2026), semi-automatic systems.
[^spares]: [ALGE-Timing, GAZ5 spare parts](https://alge-timing.com/en/product/2513/gaz5-spare-parts) (as of November 2026).
[^category]: [ALGE-Timing, Display boards](https://alge-timing.com/en/categories/display-boards) (product category, as of November 2026).
