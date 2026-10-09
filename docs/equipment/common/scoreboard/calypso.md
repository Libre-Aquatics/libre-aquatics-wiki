---
title: Swiss Timing Calypso
description: >-
  Calypso is the Swiss Timing range of modular LED scoreboards for aquatics, built from
  2.4 m lines of eight 24 cm white digits, with an alphanumeric team-name line and a water
  polo console in the same family.
updated: 2026-10-07
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: Calypso
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3403.981`–`3403.980` (1 to 10 lines; `.BT` for Bluetooth); `3403.970` (alphanumeric line)'
  - label: Type
    value: Modular numeric LED scoreboard
  - label: Display
    value: Eight 24 cm seven-segment digits per line, white LEDs
  - label: Connection
    value: RS422, 9600 baud; Bluetooth option
  - label: Dimensions
    value: 2400 × 340 × 94 mm per line
  - label: Weight
    value: 18 kg (master line); 14 kg (slave line)
  - label: Power
    value: Mains, up to 90 VA per line
  - label: Manual
    value: Calypso 8-digit LED Scoreboard User's Manual (3403.500, version 2.2, August 2016)
---

<!--
Research notes, Calypso. Stub created October 2026 while building out quantum.md; built out the
same month.

Held and read in full (sources/vendors/swiss-timing/timers-consoles/):
  - swiss-timing-calypso-user-manual-3403.500: "8-digits LED scoreboard", v2.2, August 2016,
    English, French and German. Master lines have their own supply and driver and run up to
    three slaves; 24 cm digits of 150 white LEDs; readable to 150 m; four-step automatic
    brightness from a light sensor; grey aluminium case with acrylic front; wall mounting with
    internal line-to-line cabling (the French text adds mounting between two posts); front
    access, the face hinging down after three top screws are removed. Layouts: one line, or
    4-10 lines vertical or horizontal; 680 mm gap between two columns; without the kit, four
    M8 side fixings (screws max M8x20); bracket kits with hidden or visible brackets and
    concrete or metal fixings (six lines use four 3-line brackets). Power and data enter master
    lines only; DIP switches 1-4 set the master's line number; connectors P1-P4 feed the master
    and up to three slaves on flat cables, numbered downward. Cabling diagrams (rendered page
    16): each column has a master at the bottom; a 5-line column has two masters (lines 4 and
    5). Each line in the diagrams shows lane, place and time. 100-240 VAC, max 0.9 A, max 90 VA
    per line; RS422 9600 8N1; CE. 2400 x 340 x 94 mm; master 18 kg, slave 14 kg; IP54;
    0-50 C working, -30 to 85 C storage. Appendix: water polo layouts for 6, 8 and 10 lines
    horizontal and 6-10 vertical, with team-name lines and labels such as pen1, time out and
    score.
  - swiss-timing-calypso-alphanum-user-manual-3403.507: "Calypso Team Name", alphanumeric
    17-character line, v1.2, June 2018. 15 cm characters of 93 LEDs; 150 m; DIP switch 8
    picks the protocol: Saturn (team names from a Saturn console) or, by default, Calypso
    (records and race numbers in swimming, and data from ARES, Quantum or the Calypso water polo
    console). 100-240 VAC, max 1.5 A, max 150 VA; RS422 9600 8N1; 2400 x 340 x 94 mm; 16 kg;
    IP54. The contents page has a broken "Switch configuration for water polo (Saturn
    console)" link (an unresolved Word bookmark).
  - swiss-timing-wpo-calypso-console-user-manual-3403.504.02: Calypso WPO console, v2.7,
    January 2026 (running header "WPO Saturn Console"). Drives Calypso boards horizontal or
    vertical and the Piccolo. Covered on calypso-wpo-console.md.

Datasheet, live on swisstiming.com (read October 2026): "Calypso - Modular Scoreboards",
Calypso_White/10-2015, PDF dated 10 November 2015. Says Calypso talks the Quantum protocol and
lists swimming, water polo, synchronised swimming and diving. Numeric lines show lane, rank and
times; alphanumeric lines show competition information and the current record. Kits: 1, 4, 6,
8, 10 lines (3403.981, .984, .986, .988, .980), each also .BT for Bluetooth; alphanumeric
3403.970 (Quantum swimming can address up to two: line 1 event/heat/distance, line 2 the event
record; also free text); cable 3403.611 (RS422 in, Tuchel 7-pin female, 3 m); cable 1906.100
(Tuchel 7-pin male to DB9 male, 100 m drum, mobile Quantum link). Specs: 115/230 VAC; 50 VA
typical, 90 VA max per line; 150 VA max alphanumeric; 0-50 C; IP54; CE and RoHS. Mounting
kits: vertical 1, 2, 4, 6, 8, 10, 11, 12 lines (3403.901-.912); horizontal 3+3, 4+4, 5+5, 6+6
(3403.926, .928, .930, .932) with 68 cm intermediate plates. Vertical heights 340 mm per line
(1360 for 4, 3400 for 10); horizontal width 5480 mm. The datasheet table prints the horizontal
depth for six lines as "9", a typo for 94.

Discrepancies stated in the body: supply 100-240 VAC (manuals) against 115/230 VAC
(datasheet); kits to 12 lines (datasheet) against layouts of 4-10 lines (manual).

Other held documents:
  - Quantum Concept 3480.508.02 and Quantum-Swimming 3480.509.02: "SCB Calypso" numeric output,
    default Serial 1 at 9600 8N1, options to put event and heat on a chosen line and shift
    results down; mobile cabling 1906.050 or 1906.100 plus adapter 3403.611.
  - Swimming Concept 0017.509.02 (2017): Calypso sizes; horizontal 4-10 line boards 5480 mm
    wide and 680/1020/1360/1700 mm high; vertical 340-3400 mm high; power 90/360/720/900 VA for
    1/4/8/10 lines; scoreboard cable 2x2x0.25 mm2 twisted shielded pairs, twisted as well
    beyond 50 m, not in the timing-cable duct, shield grounded at one end only.
  - software/swiss-timing-dv-scoring-manager-3480.513.02 (DIV Scoring Manager, v1.9, January
    2022, by Integrated Sports Systems for Swiss Timing): Run Event drives the "Omega Calypso"
    over a serial port with the UNT4 protocol, with layouts for 5 judges, 7 judges, 7-judge
    synchro, 9-judge synchro and 11-judge synchro.
  - scoreboards-displays/swiss-timing-dv-sy-software-user-manual-3480.516.02: in fact "Display
    Results" by ISS for Swiss Timing, v11.0, January 2015 (the filename suggests a DV/SY manual);
    for diving it says a Calypso "discreet digit" board connects directly from Run Event.
  - timers-consoles/swiss-timing-piccolo-user-manual-3402.502.02 (v1.1, May 2015): the Piccolo
    alphanumeric board understands the Calypso protocol.
  - pace-clocks/swiss-timing-wpo-shotclock-user-manual-3403.511 (v1.2, March 2014): water polo
    shot clocks with 24 cm digits, 5.8 kg; AVK sells this as the "OMEGA CALYPSO" shot clock.
  - The 2008 ARES 21 manual names Galactica and ERTD boards, not Calypso; when Calypso first
    appeared is not established.

Web: AVK Group (Swiss Timing representative, Austria): 3403.981 Calypso line; "OMEGA CALYPSO
Shot clocks" 3403.951.CA (kit of 4) and 3403.950.CA (kit of 2), 50 x 35 x 53 cm, 5.8 kg, 24 cm
digits, 24 VDC from the power and horn module, 30 VA; water polo system STWP: Calypso water
polo controller with 240 x 128 LCD, Calypso or Montreal shot clocks, Coyote horn, Calypso board
or video wall, sold as World Aquatics Approved (dealer claim).

Not found: introduction date; prices; which major events used Calypso boards; a public UNT4
or Calypso protocol specification (the ARES manual said its scoreboard protocol was a free
download from swisstiming.com).
-->

Calypso is a range of modular LED scoreboards made by [Swiss Timing](../../../vendors/swiss-timing.md)
for swimming, diving, artistic swimming and water polo.[^ds] A board is built from identical
lines, each 2.4 m long and carrying eight 24 cm digits in white LEDs, and can be from one to
ten lines high. Swiss Timing gives a viewing distance of up to 150 m.[^manual][^ds] Numeric
lines show lane, rank and time. An alphanumeric line can be added for team names, event
information or the current record.[^ds][^alpha] Swiss Timing's
[Quantum Aquatics](../../swimming/timers/quantum.md) timer, its diving software, and its water polo console all drive Calypso boards.[^sw][^divsm][^wpo]

## Role in the timing system

This section places Calypso among Swiss Timing's equipment; the general background on
scoreboards is on the [scoreboards overview](index.md).

A Calypso board is a display only. It takes its data over a serial line from whatever runs the
competition, and shows each lane's place and time, or a game's clocks and scores.[^manual][^ds]
In swimming the source is a Quantum timer, which has a Calypso output among its scoreboard
settings.[^sw] Swiss Timing also lists its older ARES system and a Saturn controller as
compatible.[^manual]

The Calypso name covers more than the line boards. Swiss Timing's water polo controller is the
[Calypso WPO console](../../water-polo/console/calypso-wpo-console.md), and a Swiss Timing dealer
sells the company's [water polo shot clocks](../../water-polo/shot-clock/swiss-timing-shot-clocks.md) as Omega
Calypso shot clocks.[^wpo][^avk]

## Models and configurations

This section covers the two kinds of line and the board sizes built from them.

| Line | Display | Weight | Power |
|---|---|---|---|
| Numeric master | 8 seven-segment digits, 24 cm, two colons | 18 kg | Own supply; drives up to three slaves |
| Numeric slave | As above | 14 kg | Fed from its master |
| Alphanumeric (Team Name) | 17 characters, 15 cm | 16 kg | Own supply, up to 150 VA |

Each line measures 2400 × 340 × 94 mm whatever its type.[^manual][^alpha][^ds]

A board is stacked from these lines either vertically, as one column, or horizontally, as two
columns side by side with a 680 mm plate between them. Swiss Timing says the gap makes the times
easier to read.[^manual][^ds] The 2016 manual shows one-line boards and boards of four to ten
lines. The 2015 datasheet lists vertical mounting kits for 1, 2, 4, 6, 8, 10, 11 and 12 lines,
and horizontal kits from three-plus-three to six-plus-six lines.[^manual][^ds] A ten-line vertical
board stands 3.4 m high; a horizontal board is 5.48 m wide.[^ds]

The datasheet sells complete numeric boards of 1, 4, 6, 8 and 10 lines, each also in a Bluetooth
version.[^ds] Quantum's swimming software can address up to two alphanumeric lines. It puts the
event, heat and distance on the first and the event record on the second, or either can carry
free text.[^ds]

## Design and hardware

This section describes the line's construction.

Each digit is made of 150 white LEDs. A light sensor sets the brightness automatically in four
steps.[^manual][^ds] The case is grey aluminium with an acrylic front, rated IP54, for indoor or
outdoor use.[^manual][^ds] The face hinges downward once three screws along its top edge are
removed, which gives front access to the wiring, and all wiring between lines runs inside the
cases.[^manual]

A master line contains the power supply and the driver for itself and up to three slave lines
above it, connected by flat cables. DIP switches on the master set its line number.[^manual]
Swiss Timing's cabling diagrams therefore place a master at the foot of each column. A five-line
column uses two masters, the lowest line being a master on its own.[^manual]

## Connections and data

This section covers power and data wiring.

Power and data enter master lines only.[^manual] Data arrives over RS422 at 9600 baud, 8 data
bits, no parity and one stop bit.[^manual][^alpha] The datasheet also offers Bluetooth versions
of each numeric board.[^ds] A 3 m RS422 input cable (`3403.611`) connects the board, and a 100 m
drum cable (`1906.100`) runs from a Quantum timer for a temporary installation.[^ds][^concept]

The alphanumeric line has a protocol switch. In its default Calypso setting it shows swimming
race numbers and records from Quantum or ARES, or water polo data from the Calypso console. In
its Saturn setting it shows team names from a Saturn console.[^alpha]

Swiss Timing's installation guide asks for shielded twisted-pair scoreboard cable, kept out of
the ducts that carry touchpad wiring and twisted as well as shielded beyond 50 m. The shield is
grounded at one end only.[^swconcept]

## Use by sport

This section lists what drives a Calypso board in each sport.

| Sport | Source | How it is set up |
|---|---|---|
| Swimming | Quantum Aquatics timer | "SCB Calypso" output on a serial port, with options to show the event and heat on a chosen line and to shift the results down[^sw] |
| Diving | [DIV Scoring Manager](../../../software/div-scoring-manager.md) | Serial link from its Run Event screen using the UNT4 protocol, with layouts for 5, 7 and 9 to 11-judge panels including synchronised diving[^divsm][^dvsy] |
| Water polo | [Calypso WPO console](../../water-polo/console/calypso-wpo-console.md) | Six-, eight- or ten-line layouts, horizontal or vertical, with team names, scores, penalties and timeouts[^manual][^wpo] |

The smaller [Piccolo](piccolo.md) alphanumeric board understands the same Calypso protocol.[^piccolo]

## Installation

This section summarises how a board is mounted.

Lines hang on brackets fixed to a wall or a metal frame. Each kit includes plugs for concrete or
bolts for metal, and the brackets can be fitted hidden or visible.[^manual] Without a kit, each
line can be fixed through four M8 holes in its sides.[^manual] The lowest line goes up first, and
each line above hooks onto the brackets in turn. Swiss Timing warns against swapping master and
slave lines.[^manual]

## Specifications

This section gives Swiss Timing's figures; the manuals and the datasheet differ on supply
voltage.

| Item | Numeric line | Alphanumeric line |
|---|---|---|
| Dimensions | 2400 × 340 × 94 mm[^manual] | 2400 × 340 × 94 mm[^alpha] |
| Weight | 18 kg master; 14 kg slave[^manual] | 16 kg[^alpha] |
| Characters | 8 seven-segment digits, 24 cm[^manual][^ds] | 17 characters, 15 cm[^alpha] |
| LEDs | 150 white per digit[^manual] | 93 white per character[^ds] |
| Viewing distance | Up to 150 m[^manual] | Up to 150 m[^alpha] |
| Supply | 100–240 VAC (manual); 115/230 VAC (datasheet)[^manual][^ds] | 100–240 VAC (manual); 115/230 VAC (datasheet)[^alpha][^ds] |
| Consumption | 50 VA typical, 90 VA maximum per line[^ds] | 150 VA maximum[^alpha] |
| Data | RS422, 9600 baud, 8N1; Bluetooth option[^manual][^ds] | RS422, 9600 baud, 8N1[^alpha] |
| Protection | IP54[^manual] | IP54[^alpha] |
| Temperature | 0–50 °C working; −30 to 85 °C storage[^manual] | 0–50 °C working; −30 to 85 °C storage[^alpha] |

A ten-line board draws up to 900 VA.[^swconcept]

## Part numbers and accessories

This section lists the part numbers in Swiss Timing's datasheet.

| Part | Number |
|---|---|
| Numeric board, 1, 4, 6, 8 or 10 lines | `3403.981`, `3403.984`, `3403.986`, `3403.988`, `3403.980`[^ds] |
| Same, Bluetooth versions | Suffix `.BT`[^ds] |
| Alphanumeric line, 17 characters | `3403.970`[^ds] |
| Vertical mounting kits, 1 to 12 lines | `3403.901`–`3403.912`[^ds] |
| Horizontal mounting kits, 3+3 to 6+6 lines | `3403.926`, `3403.928`, `3403.930`, `3403.932`[^ds] |
| RS422 input cable, 3 m | `3403.611`[^ds] |
| Mobile cable from Quantum, 100 m drum (50 m: `1906.050`) | `1906.100`[^ds][^concept] |

## See also

- [Piccolo](piccolo.md): the smaller Swiss Timing alphanumeric board on the same protocol
- [Calypso WPO console](../../water-polo/console/calypso-wpo-console.md): the water polo controller that drives it
- [Quantum Aquatics](../../swimming/timers/quantum.md): the swimming timer that drives it
- [LED-R](led-r.md): a Colorado Time Systems numeric line board
- [Scoreboards](index.md): the scoreboards overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: Swiss Timing, Calypso 8-digit LED Scoreboard User's Manual (3403.500, version 2.2, August 2016).
[^alpha]: Swiss Timing, Calypso Alphanumerical 17-character Line User's Manual (3403.507, version 1.2, June 2018).
[^ds]: [Swiss Timing, Calypso Modular Scoreboards datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_CalypsoWhite_1015_EN.pdf) (Calypso_White/10-2015).
[^wpo]: Swiss Timing, Calypso WPO Console Instructions for Use (3403.504.02, version 2.7, January 2026).
[^sw]: Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, version 1.4, October 2019), scoreboard settings.
[^concept]: [Swiss Timing, Quantum Concept Swimming User's Manual (3480.508.02, v1.4, July 2015)](https://web.archive.org/web/20230315150630/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.508.02.pdf).
[^swconcept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02.pdf).
[^divsm]: Swiss Timing, Aquatics DIV Scoring Manager User's Manual (3480.513.02, version 1.9, January 2022).
[^dvsy]: Integrated Sports Systems, Display Results for Swiss Timing (3480.516.02, version 11.0, January 2015).
[^piccolo]: Swiss Timing, Piccolo User's Manual (3402.502.02, version 1.1, May 2015).
[^avk]: [AVK Group, Omega Calypso shot clocks](https://www.avkgroup.at/catalog/3403.951.CA/) (Swiss Timing representative; kits `3403.951.CA` and `3403.950.CA`).
