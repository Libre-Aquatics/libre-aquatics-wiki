---
title: ALGE GAZ4 display board
description: >-
  The GAZ4 is an ALGE-Timing numeric display board with bistable electromagnetic seven-segment
  digits 15, 25 or 45 cm high, used with ALGE timers including the Timer S4 and the SWIM 2000
  swimming system.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: GAZ4
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`GAZ4 nhh` (`n` digits, `hh` digit height in cm), e.g. `GAZ4 625`; options `PP4`, `PS4`'
  - label: Type
    value: 'Numeric display board'
  - label: Digits
    value: 'Bistable electromagnetic seven-segment, yellow on black; 15, 25 or 45 cm high'
  - label: Connection
    value: 'RS-232 data on banana sockets; two Amphenol sockets for data and power'
  - label: Power
    value: '11–20 V DC, internal NiCd power pack `PP4`, or mains supply `PS4`'
  - label: Introduced
    value: 'By October 1997'
  - label: Succeeded by
    value: '[GAZ5](equipment/common/scoreboard/alge-gaz5.md)'
  - label: Status
    value: 'Discontinued; spare parts still listed in 2026'
  - label: Manual
    value: '[Display board GAZ4 manual (E100930)](https://alge-timing.com/downloads/userGuides/gaz4-be.pdf)'
---

<!--
Research notes, ALGE GAZ4 display board. Surfaced 2026-11-11 while building out
equipment/swimming/timers/alge-swim-2000.md. Built out 2026-11-22.

Held documents (sources/vendors/alge-timing/):
  - scoreboards-displays/alge-gaz4-display-board-manual-e98-06-22.pdf, Display Board GAZ4 manual,
    Version E-98-06-22, 24 pp. Split Second Timing (Australia) copy; PDF dated October 1999. Calls
    the board the fourth of a series. 80C31 CPU, 9.216 MHz quartz. Power pack PP4 (NiCd 12 V 2 Ah,
    220 or 110 V charger), power supply PS4 (can feed two boards over cable 033-01), or a 12 V car
    battery of at least 2 Ah on cable 032-05 with a 4 A fuse. Runtime as a clock 40/20/10 h for
    15/25/45 cm in section 2, but 60/20/11 h in the dimension table in section 7; 20 h for 25 cm in
    7.9. Standby 10 mA; per-step pulse 123 mA/120 ms (150 mm), 360 mA/120 ms (250 mm),
    360 mA/150 ms (450 mm). Amphenol pins: 1 +11-20 V, 2 0 V, 3 unused, E data. Banana jacks
    yellow data, black ground. Fuses 2 x T0.5A (230 V) or 2 x T1A (115 V) mains, T2A battery.
    -25 to 50 C. RS-232 compatible, no handshake, 2400 baud 8N1. Receives from TdC 4000, VT2,
    Timer S4, Timer S3, Comet, OPTI 1sw and a PC. Thumb wheel 0-15 (0 standard, 1-10 address,
    11 test, 12 refresh, 13 shift left, 14 countdown, 15 clock); toggle switch for bib/rank,
    min-sec-hundredths, or hours-min-sec. Protocol table includes a Timer S4 swimming format with an
    F prefix addressing ranking boards A to H. Ranking board of up to ten lines driven by a TdC
    4000, DOS PC and ranking software, NGAZ/R supply, connection box 069-02, cables 033-01/033-10,
    KT300. Cables: 010-10 (TdC and S4 data, extend to about 1 km), 000-10 (banana cable to TdC
    8000), 030-10 (3-wire, powers the Comet), 060-10 (2-wire), handswitch 023-02 for the clock.
  - scoreboards-displays/alge-gaz4-display-board-manual-e-04-03-02.pdf, Version E-04-03-02,
    24 pp., archived from alge-timing.com (July 2004). Same text as E-98-06-22, reflowed.
  - scoreboards-displays/alge-gaz4-display-board-manual-e100930.pdf, Version E100930, 24 pp.,
    current ALGE download (PDF created 30 September 2010, modified November 2023). Now "fourth
    generation". Adds TdC 8001, TdC 8000, Timy, OPTIc and Self Timer SF2 to the source list; Timy
    on cable 037-10 (2-wire) or 206-10 (3-wire, powers the Timy from the board). PP4 2 Ah in 2.1
    but 2.2 Ah in 7.8; charger 220 V in 2.1, 230 or 110 V in 7.8; section 1 calls the pack PP1
    (typo). Same 40/20/10 h versus 60/20/11 h runtime conflict. Depth table unchanged but column D
    now 375/480/738 mm against 352/455/726 mm in 1998; 525 and 625 weights 20 and 21 kg.
  - scoreboards-displays/alge-gaz4-dimension-sheet-97-10-21.pdf, two pages dated 97-10-21,
    archived from alge-timing.com (October 2004). Text layer is unmapped font; the .txt beside it is
    a hand transcription. Standard case 1-9 digits per height, special (narrower) case "x" models
    with 2-9 digits. Reading distance 60/100/200 m. Weights exclude PP4 (+1.7 kg) and PS4 (+0.8 kg).
    Width column there is the horizontal length; in the later manuals A is height and B width.
  - catalogs-brochures/alge-gaz4-leaflet-2003.pdf, GAZ4 leaflet, PDF dated October 2003, archived
    July 2004. Order code explained (digits, then height); reading distance per DIN 1450 75/125/
    225 m; RS-232 with RS-485 "prepared"; direct supply 11-20 V at 2.5 A; PS4/PP4 230 V 50 Hz or
    115 V 60 Hz; 525 and 625 at 21 and 22 kg; column D 352/455/726.
  - timers-consoles/alge-swim2000-architectural-guideline-e02-01-24: only numeric boards ALGE then
    made; DIN legibility 75/125/225 m; ALGE recommends 25 cm and says FINA does too; pros and cons.
  - catalogs-brochures/alge-swim2000-brochure-2002: GAZ4 with 15, 25, 45 cm figures.
  - timers-consoles/alge-swim2000-manual-e020222: SWC display ports (RS-232 galvanically isolated,
    RS-485); GAZ settings 2400 default, 4800/9600/19200; lane and rank modes, run-time-on-board-0
    variants, single-line modes for 2 x GAZ46xx and 1 x GAZ48xx; event display on PC COM2; direct
    text, time of day, standard text.
  - timers-consoles/alge-s4-swimming-system-installation-e97-03-24: names its boards GAZc, but the
    setup (thumb wheel per board for rank, shift switch middle, NGAZ/R mains supply, Amphenol cable
    033, built-in pack lasting a day and charging in 14 h) matches the GAZ4 manual.
  - timers-consoles/alge-timy2-general-manual-e130522 and alge-timy3-general-manual-e25-03-10:
    a GAZ4 or D-LINE board is listed as an external supply for the Timy.
  - scoreboards-displays/alge-gaz5-display-board-manual-e120911: "fifth generation", same switch
    scheme and dimension table, adds RS-485, PP5 NiMH 4.5 Ah. Read in full.

Web, archived alge-timing.com (not filed locally):
  - GAZ4 product page, English, archived May 2001 (gaz4-e.htm): same content as the 2003 leaflet,
    order code 645 = six digits, 45 cm. Verified.
  - Components of the SWIM 2000 System, archived January 2001: reading distance about 60, 100 and
    160 m; swimming models GAZ4 8xxS (one board, running time, leader at splits, winner, then
    scroll), GAZ4 7xxS (one board per place, fixed rank order) and GAZ4 8xxSR (one per line,
    sortable by rank or lane). Verified.
  - ALGE product list, October 2000, and Timing Systems for Swimming, October 2007: GAZ4 listed.
  - GAZ4 spare parts page, archived December 2019: GAZ4-CPUA exchange and GAZ4-CPU new boards in
    15/25 cm and 45 cm versions, GAZ4-TRAFO. The current page (read 2026-11-22) exists but shows no
    variants. Verified.
  - Change_GAZ4Test.txt, archived 2022: GAZ4Test PC program history 2013-2016 (UDP, addresses to
    26, D-Line brightness). gaz4test.exe archived April 2001.
  - An ALGE site image from 2016 is named "6 X GAZ4 825 SCHWIMMEN"; image only, not cited.
Independent sources: none found beyond distributors (Split Second Timing hosts the 1998 manual and
the SWIM 2000 documents). ManualZilla hosts a copy of E100930. RaceResult exchange documentation
covers "GAZ/DLine" boards generically. No press coverage or patents found.

Not established: first year of sale beyond the October 1997 sheet; end of sale (the GAZ5 manual
is dated September 2012 and the 2013 swimming catalogue shows the GAZ5); whether the GAZc of the
1997 S4 guide is a variant of the GAZ4, an earlier board, or another name for it.

Sources:
  - ALGE, Display Board GAZ4 manual, Version E-98-06-22 (https://www.splitsecond.com.au/manuals/gaz4-be.pdf)
  - ALGE-Timing, Display board GAZ4 manual, Version E100930 (https://alge-timing.com/downloads/userGuides/gaz4-be.pdf)
  - ALGE, Display Board GAZ4 dimension sheet, 97-10-21 (https://web.archive.org/web/20041015000318/http://www.alge-timing.com/alge/download/manual/gaz4/gaz4-abmessungen-be.pdf)
  - ALGE-Timing, GAZ4 leaflet, 2003 (https://web.archive.org/web/20040702050346/http://www.alge-timing.com/alge/download/brochure/GAZ4/GAZ4-PE.pdf)
  - ALGE-Timing, ALGE Display Board GAZ4, 2001 (https://web.archive.org/web/20010517014207/http://www.alge-timing.com/alge/gaz4-e.htm)
  - ALGE-Timing, Components of the SWIM 2000 System (https://web.archive.org/web/20010126234700/http://www.alge-timing.com/alge/swim2000-03-e.htm)
  - ALGE SWIM2000 Architectural Guidelines, Version E-02-01-24 (https://www.splitsecond.com.au/manuals/swim2000-be-architectural.pdf)
  - ALGE-Timing, SWIM2000 Manual, Version E-020222 (https://web.archive.org/web/20030323112316/http://alge-timing.com/alge/download/manual/swim2000/swim2000-be.pdf)
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf)
  - ALGE-Timing, GAZ5 manual, Version E120911 (https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)
  - ALGE-Timing, GAZ4 spare parts (https://web.archive.org/web/20191212232710/https://alge-timing.com/AlgeTiming_V2/en/spare-parts/gaz4-spare.html)
  - ALGE-Timing, Change_GAZ4Test.txt (https://web.archive.org/web/20220625175147/https://alge-timing.com/alge/download/software/Change_GAZ4Test.txt)
-->

The GAZ4 is a numeric display board made by [ALGE-Timing](../../../vendors/alge-timing.md) of
Lustenau, Austria. Its digits are bistable electromagnetic seven-segment modules, 15, 25 or 45 cm
high, that hold their state without power, so the board uses current only when a segment
changes.[^manual98][^leaflet] It takes serial data from ALGE timers or a PC and can also run on
its own as a clock or countdown timer.[^manual98] In swimming it served as the results board of
the [Timer S4](../../swimming/timers/alge-timer-s4.md) swimming system and of the
[SWIM 2000](../../swimming/timers/alge-swim-2000.md) system.[^manual98][^webcomp][^arch] ALGE's
manuals call it the fourth generation of its display boards, and the
[GAZ5](alge-gaz5.md) manual calls that board the fifth.[^manual10][^gaz5]

See the [scoreboards overview](index.md) for the shared background on scoreboards.

## Role in the timing system

The GAZ4 is a receiver only. A timer sends it formatted lines of digits over a two-wire data
cable, and the board shows them; it keeps no results of its own.[^manual98] The same board serves
many sports; ALGE's examples include race times, speeds, points, weights and prices.[^manual98][^leaflet] A swimming installation used it in one of two ways: a single board
that shows the running time and then the results one place at a time, or a stack of boards, one
line per place or per lane.[^s4guide][^webcomp]

ALGE's 2002 architectural guidelines for the SWIM 2000 say the GAZ4 was the only kind of numeric
board ALGE then made, the older bulb boards being obsolete. They list its advantages as
readability in sunlight, low power draw, battery operation, price and use without a PC, and its
limits as numbers only and no running tenths.[^arch]

## History and naming

This section covers the dates found and the order code. The earliest dated GAZ4 document found is
an ALGE dimension sheet of October 1997.[^dims97] English manuals followed in versions E-98-06-22,
E-04-03-02 and E100930; the 2004 version repeats the 1998 text, and the 2010 version adds the
Timy and later timers.[^manual98][^manual04][^manual10] ALGE's product list named the board in
October 2000, its SWIM 2000 documents in 2001 and 2002, and its swimming page in
2007.[^prod2000][^webcomp][^arch][^swim2007]

The order code gives the digit count and then the digit height in centimetres, so a `GAZ4 645` is a
six-digit board with 45 cm digits. A `PP4` or `PS4` suffix adds the internal power
option.[^web2001][^leaflet] The SWIM 2000 documents write the swimming models with `xx` in place of
the height, as in `GAZ4 8xxS`, and the SWIM 2000 manual refers to `GAZ46xx` and `GAZ48xx`
boards.[^webcomp][^swmanual]

The 1997 installation guide for the Timer S4 swimming system names its boards GAZc. It sets them up
with the same thumb-wheel switch, shift switch, NGAZ/R supply and Amphenol cable 033 as the GAZ4
manual, and the GAZ4 manual of 1998 documents the S4's swimming board protocol.[^s4guide][^manual98]
Whether the [GAZc](alge-gazc.md) is a GAZ4 variant, an earlier board or another name for the same
one is not established.

The GAZ5 replaced it. The GAZ5 manual of September 2012 keeps the GAZ4's switch scheme, connectors
and case sizes and adds an RS-485 input.[^gaz5] ALGE's 2013 swimming catalogue shows the
GAZ5.[^cat2013] ALGE still listed GAZ4 spare parts in 2019, including replacement processor boards
and a transformer, and kept a GAZ4 spare-parts page in 2026.[^spares]

## Design and construction

The digits sit behind a Plexiglas front in a black plastic-coated aluminium case, which ALGE rates
for outdoor use from −25 to 50 °C.[^manual98][^leaflet] The segments are yellow on a black
ground.[^manual10] A board on standby draws about 10 mA; each change draws a short pulse of 123 mA for
15 cm digits or 360 mA for 25 and 45 cm digits.[^manual98] Because a flipped segment stays put, a
jolt can knock one out of place; a refresh setting rewrites every digit each ten seconds for
boards mounted on vehicles.[^manual98]

The electronics use an 80C31 microprocessor in CMOS with a watchdog and a 9.216 MHz
quartz.[^manual98][^manual10] On the back are a 16-position thumb-wheel switch (1), a pair of
banana sockets for data (2), and a three-position toggle switch (3) that picks the display format.
Boards with an internal power option also have an on/off switch, fuses, a charge lamp and a mains
inlet.[^manual10]

## Models and dimensions

This section lists the standard sizes. The 1997 dimension sheet offers one to nine digits in each
height, in a standard case and a narrower special case.[^dims97] The later manuals and the 2003
leaflet list only the five- and six-digit boards as standard, with other configurations on
request.[^manual98][^leaflet][^manual10] Five- and six-digit boards of the same height share a case:

| Model | Digits | Digit height | Case height × width × depth | Weight |
|---|---|---|---|---|
| `GAZ4 515` / `615` | 5 / 6 | 15 cm | 290 × 956 × 100 mm | 12 / 13 kg |
| `GAZ4 525` / `625` | 5 / 6 | 25 cm | 393 × 1493 × 100 mm | 20 / 21 kg |
| `GAZ4 545` / `645` | 5 / 6 | 45 cm | 664 × 2490 × 120 mm | 45 / 48 kg |

The figures are from the 1998 and 2010 manuals.[^manual98][^manual10] The 2001 web page and the
2003 leaflet give 21 and 22 kg for the 25 cm boards.[^web2001][^leaflet] The 1997 sheet gives
weights without the power option and says to add 1.7 kg for a `PP4` or 0.8 kg for a
`PS4`.[^dims97] The overall height including the hanging loops is 352, 455 and 726 mm in the 1998
manual and the leaflet, but 375, 480 and 738 mm in the 2010 manual.[^manual98][^leaflet][^manual10]
The 1997 sheet also lists seven- to nine-digit boards: 1390 mm wide with 15 cm digits and 2190 mm
wide with 25 cm digits.[^dims97]

ALGE's figures for reading distance differ by document:

| Source | 15 cm | 25 cm | 45 cm |
|---|---|---|---|
| Dimension sheet, 1997 | 60 m | 100 m | 200 m |
| SWIM 2000 component page, 2001 | about 60 m | about 100 m | about 160 m |
| Manuals 1998–2010, leaflet 2003, guidelines 2002 | 75 m | 125 m | 225 m |

The leaflet gives its figures as DIN 1450 reading distances, and the architectural guidelines call
them DIN legibility.[^dims97][^webcomp][^manual98][^leaflet][^arch] The guidelines recommend 25 cm
digits for most pools and say this matches the FINA (now World Aquatics) recommendation of the
time.[^arch]

## Operation

The thumb-wheel switch sets the board's role:[^manual98][^manual10]

| Position | Function |
|---|---|
| 0 | Data receiver, standard format |
| 1–10 | Data receiver with an address, for ranking boards and linked boards |
| 11 | Digit test |
| 12 | Refresh on (rewrites all digits every ten seconds) |
| 13 | Data receiver, format shifted one digit left |
| 14 | Countdown |
| 15 | Clock |

The toggle switch chooses one of three layouts on a six-digit board: bib number and rank, minutes
with seconds and hundredths, or hours with minutes and seconds. Position 13 moves every digit one
place left to make room for thousandths or tenths, as used in skiing and motor sport.[^manual98]
When switched on, the board displays its firmware version followed by ALGE, and it clears when the
timer starts sending.[^manual98]

At positions 14 and 15 the board runs from its own quartz, controlled by a hand switch such as the
[023-02 push button](../../swimming/semi-automatic/pushbutton/alge-023-02.md) on the data sockets.
It can count up from zero or from a set time, or count down from up to 99 hours 59 minutes 59
seconds with time-outs; the time is set by pressing and holding the button.[^manual98][^manual10]
The manual advises running the digit test more often on boards used outdoors, so that stuck
segments are found.[^manual10]

## Use in swimming

This section covers the two ALGE swimming systems that used the board.

With the Timer S4, the 1997 swimming guide sets up to eight boards in a stack, one per place, each
with its thumb wheel set to the rank it shows, 1 at the top. With the S4 set to its A or B timer,
the stack shows the finish order with rank, lane and time. A single board with its thumb wheel at 0
instead shows the winner's time first and steps down the places at each press of the S4's yellow
key.[^s4guide] The GAZ4 manual's protocol table includes the S4's swimming output, which tags
each line with a board letter from A to H.[^manual98]

For the SWIM 2000 system ALGE offered three swimming models in 2001:[^webcomp]

| Model | Arrangement | What it shows |
|---|---|---|
| `GAZ4 8xxS` | One board for the race | Running time, the leader at each split, then the winner; the operator can scroll through the places |
| `GAZ4 7xxS` | One board per place | Running time, then split and final standings in fixed rank order |
| `GAZ4 8xxSR` | One board per line | As above, with the list sortable by rank or by lane |

The system's [SWC](../../swimming/timers/alge-swc.md) controller has an RS-232 display port and an
RS-485 display port. Its software runs the boards at 2400 baud by default, selectable up to 19200,
and orders the lines by lane or by rank. The running time can sit on the first free line or on a
board of its own at address 0, and two single-line modes drive one `GAZ48xx` board or a pair of
`GAZ46xx` boards.[^swmanual][^brochure] The software can also send text, the time of day, preset
messages and finished results to the numeric boards, and can show event and heat numbers on a
separate board connected to the PC.[^swmanual]

## Connection to the timer

Data enters on the yellow (data) and black (ground) banana sockets, or through either of the two
Amphenol sockets, which carry supply and data together.[^manual98] The board reads an RS-232-level
signal without handshaking, at 2400 baud with one stop bit, eight data bits and no parity.[^manual98] The 2001
web page and the 2003 leaflet describe an RS-485 input as prepared, but no GAZ4 manual documents
one.[^web2001][^leaflet][^manual10]

The manuals list the timers it can follow. The 1998 list has the Timer S3 and S4, the
[TdC 4000](../../swimming/timers/alge-tdc-4000.md) and the
[Comet](../../swimming/timers/alge-comet.md), among others; the 2010 list adds the
[Timy](../../swimming/timers/alge-timy.md) and the
[TdC 8000](../../swimming/timers/alge-tdc-8000.md).[^manual98][^manual10] From an S4 or TdC the
link is [cable 010-10](../../swimming/timers/alge-cable-010.md), which can be extended with two-wire
cable to about 1 km, for example on [KT300 or KT500 cable reels](../../swimming/timers/alge-kt-cable-reels.md).
If the board stays blank, the manual says to turn the cable's plug at the timer through
180°.[^manual98] A Comet or Timy can draw its power from the board through a three-wire
cable.[^manual10] The Timy2 and Timy3 manuals in turn list a GAZ4 among the external supplies for
the Timy.[^timy3]

Two boards, such as a bib-and-rank board beside a time board, are joined with
[cable 033](../../swimming/timers/alge-cable-033.md), and only one of them then needs a power
source.[^manual98] For a ranking board of up to ten lines, the manual adds a PC with ranking
software, a connection box and one [NGAZ/R](../../swimming/timers/alge-ngaz-r.md) mains supply for
all the boards.[^manual98][^manual10] ALGE's
[GAZ4Test](../../../software/alge-gaz4test.md) PC program also sends data to the boards.[^gaz4test]

## Power

A GAZ4 runs from 11–20 V DC, for example a 12 V car battery of at least 2 Ah, or from one of two
internal options.[^manual98] The `PP4` power pack holds 12 V NiCd cells with a mains charger that
also powers the board directly, so it runs even with flat cells; a full charge takes about 14
hours. The `PS4` is a mains supply without cells.[^manual98][^leaflet]

ALGE's runtime figures for the `PP4` conflict within the same manual. The power section gives about
40, 20 and 10 hours for 15, 25 and 45 cm digits; the dimension table gives 60, 20 and 11 hours. Both
appear in the 1998 and 2010 versions, and the 2003 leaflet uses the table figures, measured as a
running clock at 20 °C.[^manual98][^manual10][^leaflet] Cold shortens the runtime by about 20 % at
−20 °C.[^manual98] Two smaller figures also disagree: the 2010 manual gives the cells as 2 Ah in one section
and 2.2 Ah in another, and the leaflet rates the direct supply at 2.5 A where the manuals say
2 A.[^manual10][^leaflet][^manual98]

## Specifications

| Item | Value |
|---|---|
| Digits | Bistable electromagnetic seven-segment, yellow on black, 15, 25 or 45 cm |
| Digit count | 5 or 6 standard; 1–9 in 1997 |
| Processor | 80C31, CMOS, with watchdog |
| Time base | Quartz, 9.216 MHz |
| Interface | RS-232 level, 2400 baud, 8N1, no handshake |
| Connections | Banana sockets (data, ground); two Amphenol sockets (+11–20 V, 0 V, data) |
| Power | 11–20 V DC; `PP4` NiCd power pack; `PS4` mains supply (230 or 115 V) |
| Current | 10 mA standby; 123–360 mA pulses while digits change |
| Temperature range | −25 to 50 °C |
| Case | Black plastic-coated aluminium, Plexiglas front |

Sources: 1998 and 2010 manuals, 2003 leaflet.[^manual98][^manual10][^leaflet]

## Part numbers and accessories

| Item | Part number | Notes |
|---|---|---|
| Display board | `GAZ4 nhh` | `n` digits, `hh` digit height; `S`, `SR` suffixes for SWIM 2000 swimming models |
| Power pack | `PP4` | Built in on order; NiCd cells and charger |
| Power supply | `PS4` | Built in on order; mains only |
| Data cable | [`010-10`](../../swimming/timers/alge-cable-010.md) | From a Timer S4 or TdC |
| Linking cable | [`033-01`](../../swimming/timers/alge-cable-033.md) | Joins two boards and shares power |
| Mains supply | [`NGAZ/R`](../../swimming/timers/alge-ngaz-r.md) | Powers a set of boards |
| Cable reels | [`KT300`, `KT500`](../../swimming/timers/alge-kt-cable-reels.md) | Data line extension |
| Hand switch | [`023-02`](../../swimming/semi-automatic/pushbutton/alge-023-02.md) | Clock and countdown control |
| Spare boards | `GAZ4-CPUA`, `GAZ4-CPU`, `GAZ4-TRAFO` | Exchange and new processor boards; transformer |

Sources: manuals, leaflet and spare-parts page.[^manual98][^manual10][^leaflet][^spares]

## See also

- [GAZ5](alge-gaz5.md): the successor board
- [GAZc](alge-gazc.md): the board named in the 1997 Timer S4 swimming guide
- [D-LINE display board](alge-d-line.md): ALGE's later LED line board
- [SWIM 2000](../../swimming/timers/alge-swim-2000.md): the swimming system that used it
- [Timer S4](../../swimming/timers/alge-timer-s4.md): the timer of the earlier swimming system
- [Scoreboards](index.md): the scoreboard overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual98]: [ALGE, Display Board GAZ4](https://www.splitsecond.com.au/manuals/gaz4-be.pdf) (manual, Version E-98-06-22; Split Second Timing copy).
[^manual04]: [ALGE-Timing, Display Board GAZ4](https://web.archive.org/web/20040715144825/http://www.alge-timing.com/alge/download/manual/gaz4/gaz4-be.pdf) (manual, Version E-04-03-02; archived).
[^manual10]: [ALGE-Timing, Display board GAZ4](https://alge-timing.com/downloads/userGuides/gaz4-be.pdf) (manual, Version E100930).
[^dims97]: [ALGE, Display Board GAZ4 dimensions](https://web.archive.org/web/20041015000318/http://www.alge-timing.com/alge/download/manual/gaz4/gaz4-abmessungen-be.pdf) (sheet dated 97-10-21; archived).
[^leaflet]: [ALGE-Timing, GAZ4](https://web.archive.org/web/20040702050346/http://www.alge-timing.com/alge/download/brochure/GAZ4/GAZ4-PE.pdf) (leaflet, 2003; archived).
[^web2001]: [ALGE-Timing, ALGE Display Board GAZ4](https://web.archive.org/web/20010517014207/http://www.alge-timing.com/alge/gaz4-e.htm) (archived May 2001).
[^webcomp]: [ALGE-Timing, Components of the SWIM 2000 System](https://web.archive.org/web/20010126234700/http://www.alge-timing.com/alge/swim2000-03-e.htm) (archived January 2001).
[^arch]: [ALGE, SWIM2000 Architectural Guidelines](https://www.splitsecond.com.au/manuals/swim2000-be-architectural.pdf) (Version E-02-01-24).
[^swmanual]: [ALGE-Timing, SWIM2000 Manual](https://web.archive.org/web/20030323112316/http://alge-timing.com/alge/download/manual/swim2000/swim2000-be.pdf) (Version E-020222; archived).
[^brochure]: [ALGE, SWIM2000](https://www.splitsecond.com.au/brochures/swim2000-pe.pdf) (brochure, 2002; Split Second Timing copy).
[^prod2000]: [ALGE-Timing, Produkte](https://web.archive.org/web/20001021184403/http://alge-timing.com/alge/produkte-d.htm) (product list; in German; archived October 2000).
[^swim2007]: [ALGE-Timing, Timing Systems for Swimming](https://web.archive.org/web/20071026094015/http://www.alge-timing.com/alge/SWIM-01-E.htm) (archived October 2007).
[^s4guide]: [ALGE, Swimming System installation guide](https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf) (Timer S4, Version E-97-03-24).
[^gaz5]: [ALGE-Timing, GAZ5](https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf) (manual, Version E120911).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^timy3]: [ALGE-Timing, Timy3 General](https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf) (Version E25-03-10), section 2.3.
[^spares]: [ALGE-Timing, GAZ4 Spare Parts](https://web.archive.org/web/20191212232710/https://alge-timing.com/AlgeTiming_V2/en/spare-parts/gaz4-spare.html) (archived December 2019).
[^gaz4test]: [ALGE-Timing, GAZ4Test history file](https://web.archive.org/web/20220625175147/https://alge-timing.com/alge/download/software/Change_GAZ4Test.txt) (archived June 2022).
