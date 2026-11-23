---
title: ALGE D-SW display boards
description: >-
  D-SW is the ALGE-Timing family of numeric LED swimming scoreboards, sold since at least 2007 in
  single-line, multi-line and event-heat versions and driven by the TM-SWIM, SWC or Timy.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: D-SW display boards
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`D-[lines]xSW[height]-[digits]-[I/O]`, e.g. `D-1xSW15-8-I`, `D-2x4xSW25-7-O`'
  - label: Type
    value: 'Numeric LED swimming scoreboard'
  - label: Digits
    value: 'Red LED seven-segment; 150 or 250 mm (100 mm in 2007); 7 or 8 per line'
  - label: Connection
    value: 'RS-232 and RS-485 on banana sockets; Amphenol socket; from a [TM-SWIM](equipment/swimming/timers/alge-tm-swim.md)'
  - label: Power
    value: 'Built-in mains supply, 100–240 V AC'
  - label: Introduced
    value: 'By July 2007'
  - label: Status
    value: 'Current'
---

<!--
Research notes, ALGE D-SW display boards. Surfaced 2026-11-04 while building out alge-tm-swim.md.
Built out 2026-11-23.

Original stub notes:
  Product page D-1xSW15-5-I: seven or eight digits at 150 or 250 mm, rank, lane and time, red LEDs
  rated over 100,000 hours; that model 250 x 1500 x 70 mm, about 6 kg, 75 m readability. Code
  reading, inferred: lines, SW, digit height in cm, digits, I or O for indoor or outdoor. 2026
  catalogue: heights 57 to 600 mm, D-1xSWxx-8 single line, D-XxXxSW-7 multi-line, D-1xSWxx-5 event
  and heat. 2013 catalogue: D-SW and D-xxxSW types plus D-SWxx-4 event board; 57 to 250 mm
  indoor, 80 to 600 mm outdoor; water polo console option. Manual 5.15: Amphenol plug, RS485 A and
  B, push-button socket, mains. SwimTime calls them GAZ, a legacy name (GAZc on the 1997 Timer S4,
  GAZ5 in 2013). D-LINE is a separate general-purpose numeric board, driven from a Timy3 or RS232.

Held documents (sources/vendors/alge-timing/):
  - catalogs-brochures/alge-d-sw-scoreboard-leaflet-2007.pdf, "Scoreboards for Aquatic Sports"
    leaflet (D-SWxxx-Scoreboard-PE.pdf), 4 pp., PDF dated 24 July 2007; still the file at
    alge-timing.com/downloads/leaflets/ in 2026. The 2008 Wayback captures of the old URL are
    truncated and do not open. Read in full. Controllers named: TMS, SWC, TIMY and the multisport
    console D-CKM. LEDs rated 100,000 h. Digit heights 57 mm to 2000 mm special; common swimming
    sizes 100, 150, 250 mm; indoor standard 100, 150 and "200" mm (the tables have no 200 mm,
    probably 250 meant; flagged in the body only as indoor/outdoor ranges); outdoor 150 and 250 mm.
    D-SWxx-8 single line: running time, leader's split, then scrolls all lanes; with the D-CKM it
    shows water polo game time and goals to 9. D-xxxSWxx-7 multi-line: 100 and 150 mm up to six
    lines per case, 250 mm in single-line cases. D-SWxx-4 event and heat board, integrable into
    10 and 15 cm cases. D-RTNM info boards. Water polo personal-foul panels D-WPF10/15/25 and
    shot clocks D-SC15/D-SC20 (two boards, 12 V from the main board, cable 200-xx, no radio).
    Technical data identical to the D-LINE leaflet (RS-232, banana and Amphenol sockets, 100-240 V,
    red Plexiglas, -20 to 60 C). Configurations 1-6 lines for 57-150 mm, single-line for 250 mm.
    Dimension tables (all with built-in supply, depth 60 mm): 10 cm boards 1250 mm wide, 180 mm per
    single line up to 1100 mm for five lines; 15 cm 1500 mm wide, 250 to 1650 mm high; 25 cm 2200 mm
    wide, 350 to 2100 mm high; two-part boards (2x3, 2x4, 2x5) for 6, 8 and 10 lines. The one-part
    six-line rows in the 15 and 25 cm tables are both coded D-6xSW10-7 (copy error for SW15/SW25).
    Event board D-1xSW10/15/25-4 at four digits.
  - catalogs-brochures/alge-swimming-catalogue-v1.113-2013, pp. 12-13: controlled by TM-SWIM, Timy2
    or D-CKN; 57-600 mm; indoor 57/100/150/250, outdoor 80/150/250/450/600; D-SWxx-8-(IO) with
    water polo game time and score 0-9; D-xxxSWxx-7(8)-(IO) with water polo time, score and
    penalties; D-SWxx-4-(IO) event and heat; examples D-SW25-8-O, D-2x4xSW25-8-O; D-WPF foul panels;
    separate water polo boards page.
  - catalogs-brochures/alge-general-catalogue-2017, p. 104: same text, controllers TM-SWIM, Timy3,
    D-CKN; event board now D-SWxx-5-(IO), described as showing event name and heat number
    (a seven-segment board cannot show a name; the 2007 leaflet says event and heat number).
  - catalogs-brochures/alge-aquatic-sports-catalogue-swimming-ke-2026, p. 12: D-1xSWxx-8-(IO),
    D-XxXxSW-7(-IO), D-1xSWxx-5-(IO); 57-600 mm; no controller named on that page.
  - timers-consoles/alge-swimming-timing-system-manual-e24-08-29 (TM-SWIM): 4.5.1.3 display-board
    settings: brightness of the D-SW board, digits per line (standard 7), display time for splits and
    reaction times, reaction/take-off time display choices, re-sort by rank at heat end, display
    modes (running time on first free line or on address 0, sorted by lane or rank; 1 x 8-digit GAZ
    single line, alternating by rank; 2 x 6-digit GAZ standard boards), event information with or
    without heat preview, event-info address (0 separate board, n a line). Also drives Swiss Timing
    (USB-RS485) and Colorado (USB-RS232) boards. TM-SWIM ports: RS-232 display board 2400 baud,
    galvanically isolated, plus an RS-485 display-board port; DIN and banana display connectors.
    5.15: all numeric LED displays share the D-LINE connection panel (Amphenol +10-12 V, ground,
    data out, data in; push-button sockets; RS-232 data; RS-485 A/B; 100-240 V; T1A fuse);
    dimensions from local representatives.
  - scoreboards-displays/alge-d-line-d-sat-manual-e240226, 2.4.3: 8-digit swimming board with
    gaps after digits 1 and 2 showing rank, lane and time; address 01 for TM-SWIM, 00 for Timy
    TrackTimer.
  - timers-consoles/alge-timy-tracktimer-manual-e23-11-02, section 6: up to eight 7-digit GAZ or
    D-LINE boards by lane or by rank.
Web:
  - ALGE V2 product page display-board-for-swimming.html, archived November 2019 (configurator
    captures through November 2022): D-xxxSW controlled by TM-SWIM; 7 or 8 digits at 150 or
    250 mm; lanes 1, 3, 4, 5, 6, 8, 10; indoor or outdoor; made to order. Model list: D-1xSW15-5,
    -7, -8; D-3x/4x/5xSW15-7; D-5xSW15-8; D-6xSW15-7; D-2x3x/2x4x/2x5xSW15-7; D-2x5xSW15-8; the
    same at 25 cm except no D-2x3xSW25-7; each in -I and -O. Verified.
  - Current product page /en/product/1012/display-board-for-swimming (read 2026-11-23): same
    description; image of D-6xSW15-7 with printed rank numbers and a lane digit; accessory TM-SWIM;
    downloads include SwimTime 2.5.4.1. Verified.
Independent sources: Nevco (US) presents its aquatic line as backed by ALGE, but its aquatic page
names no swimming scoreboard. No press coverage of D-SW installations found.
Not established: introduction date before 2007; weights and power for most models; whether the
D-CKM of 2007 is an earlier name of the D-CKN (inferred from role).

Sources:
  - ALGE-Timing, Scoreboards for Aquatic Sports leaflet, 2007 (https://alge-timing.com/downloads/leaflets/D-SWxxx-Scoreboard-PE.pdf)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, 2013 (https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
  - ALGE-Timing, General catalogue 2017 (held locally)
  - ALGE-Timing, Aquatic Sports catalogue, 2026 (https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf)
  - ALGE-Timing, Swimming Timing System manual, Version E24-08-29 (https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf)
  - ALGE-Timing, Manual D-LINE / D-SAT, Version E240226 (https://alge-timing.com/downloads/userGuides/D-LINE-BE.pdf)
  - ALGE-Timing, Display board for swimming (https://web.archive.org/web/20191115011207/https://alge-timing.com/AlgeTiming_V2/en/display-boards/display-board-for-swimming.html)
  - ALGE-Timing, Display board for swimming (https://alge-timing.com/en/product/1012/display-board-for-swimming)
-->

D-SW is a family of numeric LED scoreboards that [ALGE-Timing](../../../vendors/alge-timing.md)
of Lustenau, Austria, builds for swimming pools. Each line shows a swimmer's rank, lane and time
in red seven-segment digits, and boards are made with a single line, with one line per lane, or as
a small event and heat board.[^leaflet][^product] They are driven by ALGE's swimming timers, today
the [TM-SWIM](../../swimming/timers/alge-tm-swim.md) and earlier the
[SWC](../../swimming/timers/alge-swc.md), and by its [Timy](../../swimming/timers/alge-timy.md)
handheld timers.[^leaflet][^cat2017][^product] ALGE builds them to order in indoor and outdoor
versions.[^product]

See the [scoreboards overview](index.md) for the shared background on scoreboards.

## Role in the timing system

The scoreboard shows spectators what the timing console records. During a race it shows the running
time; at each split it shows the leader's time or the lanes' times; after the finish it shows the
results, either all at once on a multi-line board or one after another on a single line.[^leaflet][^tmswim]
How the times are arranged is set in the TM-SWIM software rather than on the board.[^tmswim]

ALGE's catalogues place D-SW at the numeric end of a display range that runs up to alphanumeric
message boards and video walls. The
[D-RTNM](alge-d-rtnm.md) matrix board can sit alongside a D-SW to show event names and other
text.[^leaflet][^cat2013][^cat2026]

## History and naming

This section covers the dates found and the order code. The earliest D-SW document found is
ALGE's "Scoreboards for Aquatic Sports" leaflet of July 2007, which ALGE still offers as its D-SW
download in 2026.[^leaflet] It names the TMS (apparently the TM-SWIM), the SWC, the Timy and a D-CKM
multisport console as controllers; the 2013 catalogue names the TM-SWIM, Timy2 and the
[D-CKN](../scoreboard-control/alge-d-ckn.md) console, and the 2017 catalogue the TM-SWIM, Timy3
and D-CKN.[^leaflet][^cat2013][^cat2017]

The leaflet spells out the order code. `D-1xSW15-8` is one line of eight digits 15 cm high, and
`D-5xSW25-7` is five lines of seven digits at 25 cm. A leading `2x`, as in `D-2x4xSW15-7`, means a
board built in two parts, here two four-line halves for eight lanes. A final `I` or `O` marks
indoor or outdoor models.[^leaflet][^web2019]

The range has narrowed since then. In 2007 ALGE gave tables for 10, 15 and 25 cm digits.[^leaflet]
By 2019 its product page offered only 150 and 250 mm, in 46 standard models covering 1, 3, 4, 5,
6, 8 and 10 lanes.[^web2019] The event and heat board grew from four digits (`-4`) in 2007 and
2013 to five (`-5`) by 2017.[^leaflet][^cat2013][^cat2017] The catalogues still quote digit
heights from 57 to 600 mm for special orders.[^cat2017][^cat2026]

The D-SW and the [D-LINE](alge-d-line.md) appear to share their electronics. The technical data
in the 2007 D-SW leaflet match the D-LINE leaflet's, and the TM-SWIM manual shows a single
connection panel for all ALGE numeric LED displays, the same panel as the D-LINE manual.[^leaflet][^tmswim][^dline]
ALGE does not say so directly. The TM-SWIM manual still files the board settings under "GAZ
Settings", the name of ALGE's older electromagnetic boards.[^tmswim]

## Design and construction

The boards use red LED seven-segment digits, rated by ALGE for more than 100,000 hours, behind a
red Plexiglas front in a black aluminium case.[^leaflet][^product] Each line of a lane board has a
place number printed on the case, a digit for the lane and six digits for the time; a single-line
board instead has digits for both rank and lane.[^leaflet][^product] Boards with 100 or 150 mm
digits can hold up to six lines in one case, while 250 mm boards are normally built one line per
case and stacked.[^leaflet] An event and heat section can be built into the case of a 100 or
150 mm board.[^leaflet][^cat2013]

## Models and layouts

The catalogues describe three layouts:[^leaflet][^cat2017][^cat2026]

| Layout | Code | What it shows |
|---|---|---|
| Single line | `D-1xSWhh-8` | Running time, the leader at each split, then every lane's result in turn |
| Multi-line | `D-nxSWhh-7`, `D-2xnxSWhh-7` | One line per lane or per place, with lane and time |
| Event and heat | `D-1xSWhh-5` (`-4` before 2017) | Event and heat numbers, beside or inside a main board |

The 2007 leaflet gives these outside sizes, all 60 mm deep:[^leaflet]

| Digit height | Width | Height, one line | Height, five lines |
|---|---|---|---|
| 10 cm | 1250 mm | 180 mm | 1100 mm |
| 15 cm | 1500 mm | 250 mm | 1400 mm |
| 25 cm | 2200 mm | 350 mm | 1750 mm |

A ten-lane board is built as two five-line halves of the same size.[^leaflet] ALGE's product page
for the five-digit `D-1xSW15-5-I` gives 250 × 1500 × 70 mm, about 6 kg and a 75 m reading
distance.[^product1] The leaflet's tables contain one clear copy error: the one-piece six-line
boards in the 15 cm and 25 cm tables are both coded `D-6xSW10-7`.[^leaflet] Its text also lists
200 mm as a standard indoor height, a size that appears in none of its tables.[^leaflet]

## Connection to the timer

A TM-SWIM drives the boards from its galvanically isolated RS-232 display port at 2400 baud or
from its RS-485 display port, and also has DIN and banana display connectors.[^tmswim] Each line
of a multi-line board has its own address. The TM-SWIM software offers these arrangements:[^tmswim]

- running time on the first free line, with the lines in lane order or rank order (rank is the default);
- running time on a separate line at address 0, again in lane or rank order;
- a single eight-digit line showing the results, either once or alternating through the ranks;
- pairs of six-digit general boards showing bib and rank beside the time.

The software also sets the number of digits per line (seven by default), how long splits and
reaction times stay up, whether reaction and relay take-off times are shown, whether a
lane-sorted board re-sorts by rank when the heat ends, and which address carries the event and
heat information.[^tmswim] Settings for an eight-digit rank, lane and time line are also given in
the D-LINE manual, for a TM-SWIM at address 1 or a Timy at address 0.[^dline] The Timy's
TrackTimer program drives up to eight seven-digit lines by lane or by rank.[^tracktimer]

The connection panel is shared with ALGE's other numeric LED boards: a four-pin Amphenol socket
(10–12 V, ground, data out, data in), push-button sockets, RS-232 and RS-485 data sockets, and a
100–240 V mains inlet with a 1 A fuse.[^tmswim] The boards have a built-in mains supply.[^leaflet][^product]

## Use in water polo

With an ALGE water polo console, the 2007 leaflet's D-CKM and the D-CKN in later catalogues, a
single-line board shows the game time and goals up to 9 for each team. A multi-line board can add
penalty times.[^leaflet][^cat2013][^cat2017] The 2007 and 2013 documents also offer personal-foul
panels sized for four-line boards, and shot clocks that take 12 V from the main board by cable, which the
leaflet says rules out a radio link.[^leaflet][^cat2013] For full water polo use ALGE sells separate
water polo scoreboards.[^cat2013][^cat2026]

## Specifications

| Item | Value |
|---|---|
| Digits | Red LED seven-segment, 150 or 250 mm standard (100 mm in 2007; 57–600 mm to order) |
| Digits per line | 7 (lane boards), 8 (single line), 5 (event and heat; 4 before 2017) |
| Lines | 1, 3, 4, 5 or 6 per case; 6, 8 and 10 in two parts |
| LED life | More than 100,000 hours (ALGE figure) |
| Interfaces | RS-232 and RS-485 |
| Connections | Amphenol (10–12 V, ground, data out, data in); banana sockets for data and push button |
| Power | Built-in mains supply, 100–240 V AC |
| Case | Black aluminium, red Plexiglas front, 60–70 mm deep |

Sources: 2007 leaflet, TM-SWIM manual and product pages.[^leaflet][^tmswim][^product][^product1]

## Part numbers and accessories

| Item | Part number | Notes |
|---|---|---|
| Single-line board | `D-1xSW15-8`, `D-1xSW25-8` | Indoor `-I` or outdoor `-O` |
| Lane boards | `D-3xSW15-7` to `D-6xSW15-7`; `D-2x3xSW15-7` to `D-2x5xSW15-8` | Same series at 25 cm, except no `D-2x3xSW25-7` in 2019 |
| Event and heat board | `D-1xSW15-5`, `D-1xSW25-5` | Four digits (`-4`) in 2007 and 2013 |
| Timing console | [`TM-SWIM`](../../swimming/timers/alge-tm-swim.md) | The current controller |
| Info board | [`D-RTNM`](alge-d-rtnm.md) | Matrix board for event names and text |
| Water polo console | [`D-CKN`](../scoreboard-control/alge-d-ckn.md) | Game time, goals and penalties |

Sources: 2007 leaflet, 2019 product page and catalogues.[^leaflet][^web2019][^cat2013][^cat2017]

## See also

- [D-LINE display board](alge-d-line.md): ALGE's general-purpose LED board, which shares its electronics
- [D-RTNM](alge-d-rtnm.md): the matrix board for event names and messages
- [GAZ5](alge-gaz5.md) and [GAZ4](alge-gaz4.md): ALGE's earlier electromagnetic boards
- [TM-SWIM](../../swimming/timers/alge-tm-swim.md): the timing console that drives them
- [Scoreboards](index.md): the scoreboard overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^leaflet]: [ALGE-Timing, Scoreboards for Aquatic Sports](https://alge-timing.com/downloads/leaflets/D-SWxxx-Scoreboard-PE.pdf) (leaflet, July 2007).
[^product]: [ALGE-Timing, Display board for swimming](https://alge-timing.com/en/product/1012/display-board-for-swimming) (product page, as of November 2026).
[^product1]: [ALGE-Timing, D-1xSW15-5-I](https://alge-timing.com/en/product/1013/d-1xsw15-5-i) (product page, as of November 2026).
[^web2019]: [ALGE-Timing, Display board for swimming](https://web.archive.org/web/20191115011207/https://alge-timing.com/AlgeTiming_V2/en/display-boards/display-board-for-swimming.html) (product page; archived November 2019).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013), pp. 12–14.
[^cat2017]: ALGE-Timing, General catalogue (2017), p. 104.
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026), p. 12.
[^tmswim]: [ALGE-Timing, Swimming Timing System](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf) (manual, Version E24-08-29), 4.5.1.3, 4.5.1.4 and 5.15.
[^dline]: [ALGE-Timing, Manual D-LINE / D-SAT](https://alge-timing.com/downloads/userGuides/D-LINE-BE.pdf) (Version E240226), 2.4.3.
[^tracktimer]: ALGE-Timing, Timy TrackTimer (manual, Version E23-11-02), section 6.
