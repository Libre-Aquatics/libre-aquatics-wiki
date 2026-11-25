---
title: ALGE D-RTNM display boards
description: >-
  The D-RTNM is an ALGE-Timing single-colour LED matrix board for names, messages and
  advertising, sold since about 2005 and used in pools to show event names and heat numbers
  beside a D-SW scoreboard.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: D-RTNM
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`D-RTNM-Pn-RxC-I/O` (LEDs per pixel, rows × columns), e.g. `D-RTNM-P3-16x96-I`'
  - label: Type
    value: 'LED matrix display board'
  - label: Display
    value: 'Red LED matrix, 16 or 24 pixels high, 96 or 160 pixels long as standard'
  - label: Connection
    value: 'Ethernet, RS-485 and RS-232; RS-232 input from a timer'
  - label: Power
    value: 'Built-in mains supply'
  - label: Introduced
    value: 'By February 2006'
  - label: Status
    value: 'Current'
  - label: Manual
    value: '[D-RTNM manual (E23-10-31)](https://alge-timing.com/downloads/userGuides/D-RTNMxx_BE.pdf)'
---

<!--
Research notes, ALGE D-RTNM display boards. Surfaced 2026-11-04 while building out alge-tm-swim.md.
Built out 2026-11-23.

Original stub notes:
  2013 catalogue p13: for swimming stadiums; event name, heat number and advertising, and general
  information outside competition; several sizes and resolutions. Manual 4.5.2.4: enabled and
  configured in the RTNM tab of SwimTime network settings. SwimTime log names RTNM 26x2, 26x5,
  128x16 (22x2) and 160x16 between 2013 and 2018, brightness for newer models, and IP addresses
  shown in red when doubled, which is how it is known to be networked. Not in the 2026 catalogue by
  this name. Current status unknown (now settled: product page current in 2026).

Held documents added in the build-out (sources/vendors/alge-timing/):
  - scoreboards-displays/alge-d-rtnm-manual-e23-10-31.pdf, Manual D-RTNMxxxx, D-IDxxx, D-GDxxx,
    Version E23-10-31 (also marked V140227), 14 pp., current ALGE download. Read in full. The
    manual covers D-ID and D-GD matrix boards too, which it says differ only in pixel spacing and
    resolution (those names are not used in the body). Declaration of conformity 30 November 2010
    for series P1V1, P1V2, P1V3, P3, P4, P7 and P12. Connections: temperature sensor (option),
    timer and 12 V DC (option), RS-232 and RS-485 (option), RS-232 for an ALGE timer (option),
    Ethernet, mains with a 110/230 V switch on each internal switching supply (90-130 or
    180-260 V). Configured with DisplayStudio; crossover cable for a direct PC link, straight cable
    via a switch; IP address set with Network Device Toolkit (installed with DisplayStudio), which
    shows clashing addresses in red and identifies boards by internal serial number; avoid .1 and
    .255 host addresses; Windows XP SP2 firewall note. Control from TdC 8001, Timy or the D-CKN
    console: internal memory plus a variable language in display lists. Timing variables $D195-
    $D201 and $s/$sA/$sa (name, current time, rank, bib, name, nation, club of the current bib,
    names/nations/clubs by bib from a loaded list, raw bytes $D000-$D194). Multisport variables
    $B00-$B50, $H, $G, $P, $h, $g, $i, $j, $M (scores, time, team names, fouls, penalties,
    misconduct, period scores, possession, attack time, player names, coach, referees, spectators,
    messages). Equestrian: multiple address-packet filtering (firmware dependent), $A05aall
    variables. Start lists loaded from Excel with the ExcelToDisplay tool. List switching by special
    start numbers from a TdC: 902 plays list 2 once, 932 makes it permanent (up to 32 lists).
    Technical data table (read from a rendered page): P3 16x96/16x160 pitch 21.6 x 21.6 mm,
    2200/3500 x 400 x 97 mm; P4 pitch 20.7 vertical x 25.4 horizontal, 2200/3500 x 500 x 97 mm;
    indoor and outdoor. Custom pitches: P1V1 10/10, P1V2 15/10, P1V3 15/15 (1 LED), P7 46.4 vertical
    x 36.8 horizontal (7 LEDs), P12 65.6 x 55.2 (12 LEDs). Data protocol not published; informal
    English protocols on request.
  - scoreboards-displays/alge-d-rtnm-manual-2006.pdf, same title, version stamp 060208 (PDF
    8 February 2006), 11 pp., archived October 2006. Same structure; IP tool then called Nodem
    Utility Suite; mains stated simply as 100-240 V; technical table identical to 2023 (lengths
    2200/3500 for P3).
  - catalogs-brochures/alge-d-rtnm-leaflet-2006.pdf, "Info LED Matrix Display Board D-RTNM", PDF
    July 2006, archived March 2007; catalogs-brochures/alge-d-rtnm-leaflet-2009.pdf, PDF March 2009,
    current ALGE leaflet. Same content: single-colour red matrix for timing, messages and
    advertising; animations; 100 brightness levels; non-multiplexed drive, which ALGE says lasts
    longer, glows brighter and avoids flicker on TV; 3 or 4 LEDs per pixel; 16 pixels high, 96 or 160
    long; Ethernet, RS-485, RS-232; 4 MB memory; control from the multisport-board terminal and from
    timers such as the TdC 8001, with names, clubs or nations stored in the board; built-in 100-240 V
    supply; aluminium case, red Plexiglas front; options 7-LED pixels, yellow/green/blue/white LEDs,
    temperature sensor, DCF or GPS. Connection panel: RS-232 with 12 V out, RS-485 with 12 V out,
    RS-232 input from a timer, Ethernet, mains, fuse, sensor socket. Pixel drawings: P4 a 20.7,
    b 25.4; P7 a 36.8, b 46.4 (axes swapped against the manual's P7 line). Table gives P3 lengths of
    2300 and 3700 mm (manuals 2200 and 3500). 2009 leaflet adds narrow-border models with
    connections on the back. Order code explained.
  - catalogs-brochures/alge-ifd-rtnm-infield-board-leaflet-2005.pdf, Infield Display Board
    IFD-RTNM-P3-24x96 (PDF September 2005): athletics infield board, 24 x 96 dots, red, 21.6 mm
    pitch, 3 LEDs per dot, single- or double-sided, motorised rotation, cart and board, RS-232 or
    Ethernet, active area 2073.6 x 523.2 mm, board 2150 x 600 x 120 mm. Earliest dated RTNM-family
    document found. Athletics only; not named in the body.
  - catalogs-brochures/alge-general-catalogue-2017, pp. 50-51, 64-65, 98, 104, 149-150: 1, 3, 4 or
    7 LEDs per pixel; 16 or 24 pixels high; P1 pitches 10, 15, 20 mm; same P3/P4 table as the
    leaflets (2300/3700) but the P4-16x160-O row is labelled indoor (copy error); small-margin
    option for joining boards; infield models D-RTNM-P1V4-24x96-O (20 mm, 1960 x 520 x 100 mm) and
    D-RTNM-P3-24x96-O (21.6 mm, 2115 x 565 x 100 mm); swimming page: D-RTNMxx-x-(IO) info display
    systems; equestrian and soccer uses with D-CKN. Verified.
  - catalogs-brochures/alge-swimming-catalogue-v1.113-2013 and alge-d-sw-scoreboard-leaflet-2007:
    D-RTNM info boards for swimming stadiums (event name, heat number, advertising, general
    information). 2026 aquatics catalogue: "alphanumeric message centers" mentioned, no D-RTNM by
    name. Verified.
  - software/alge-swimtime-change-log-v2.5.4.1: RTNM 128x16 (22x2) added March 2013; brightness
    for newer models April 2013; RTNM 160x16 support 2013; RTNM 26x2 fixes November and December
    2013; double IP addresses shown red 2014; RTNM 26x5 longer names and a registry key to hide the
    nation, October 2014; crash fix October 2018. The 26x2 and 26x5 labels read as characters by
    lines (inferred from "128x16 (22x2)").
  - timers-consoles/alge-swimming-timing-system-manual-e24-08-29, 4.5.2.4: RTNM tab for
    configuring and activating the boards.
Web:
  - ALGE D-RTNM-01-E.htm, archived October 2006: same text as the 2006 leaflet. Verified.
  - ALGE V2 product page, archived November 2019: 1, 3 or 4 LEDs per pixel; made to order in about
    6-8 weeks; delivered with a 10 m network cable; configurator models D-RTNM-P1V3-16x96-RO,
    D-RTNM-P1V4-16x96-RO, D-RTNM-P1V4-24x96-RO (P1V4 is not in the manual's list). Verified.
  - Current product page /en/product/2444/d-rtnm (read 2026-11-23): same description; 10 m network
    cable; accessories Timy3, FH-L stand, display accessories; software Display Studio 2017 v1.12
    for D-RTNM, D-PHC and D-RTDM boards sold after June 2016. Verified.
  - DisplayStudio manuals archived 2006 (32 pp.) and DisplayStudio 2011 (E-141107, 28 pp.);
    DMV_Displaystudio.exe archived 2005. Tables of contents read only; see alge-displaystudio.md.
Independent sources: none found.
Not established: what the letters RTNM stand for; first sale date before the 2005 infield leaflet;
LED colours offered in practice beyond red.

Sources:
  - ALGE-Timing, Manual D-RTNMxxxx, D-IDxxx, D-GDxxx, Version E23-10-31 (https://alge-timing.com/downloads/userGuides/D-RTNMxx_BE.pdf)
  - ALGE, Manual D-RTNMxxxx, D-IDxxx, D-GDxxx, 060208 (https://web.archive.org/web/20061024235148/http://www.alge-timing.com/alge/download/manual/D-RTNM/D-RTNMxx_BE.pdf)
  - ALGE, Info LED Matrix Display Board D-RTNM leaflet, 2006 (https://web.archive.org/web/20070326195935/http://www.alge-timing.com/alge/download/brochure/D-RTNM/D-RTNM-PE.pdf)
  - ALGE-Timing, LED-Matrix Display Board D-RTNM leaflet, 2009 (https://alge-timing.com/downloads/leaflets/D-RTNM-PE.pdf)
  - ALGE, Infield Display Board IFD-RTNM-P3-24x96 leaflet, 2005 (https://web.archive.org/web/20060304064335/http://www.alge-timing.com/alge/download/brochure/Infield-Board/Infield-IFD-RTNM-P3-24x96-PE.pdf)
  - ALGE-Timing, D-RTNM Display Board (https://web.archive.org/web/20191114232950/https://alge-timing.com/AlgeTiming_V2/en/display-boards/d-rtnm.html)
  - ALGE-Timing, D-RTNM product page (https://alge-timing.com/en/product/2444/d-rtnm)
  - ALGE-Timing, General catalogue 2017 (held locally)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, 2013 (https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
  - ALGE-Timing, History file for SwimTime (alge-timing.com/alge/download/software/Change_SwimTime.txt)
  - ALGE-Timing, Swimming Timing System manual, Version E24-08-29 (https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf)
-->

The D-RTNM is a single-colour LED matrix display board made by
[ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria. Where ALGE's seven-segment
boards show only numbers, the D-RTNM's grid of red LED pixels can show text, logos, animations
and live timing data, so ALGE sells it as a timing display, a message board and an advertising
board.[^leaflet09][^manual] In swimming it is the board that shows event names, heat numbers and
other information alongside a [D-SW](alge-d-sw.md) results board.[^dsw][^cat2013] ALGE has
offered it since at least 2006 and still lists it in 2026.[^manual06][^product]

See the [scoreboards overview](index.md) for the shared background on scoreboards.

## Role in the timing system

A D-RTNM works from display lists: pages of text, graphics and animation designed on a PC and
stored in the board's 4 MB memory. A list can contain variables that the board fills in from
incoming timing data, so the same page can carry fixed wording and live values.[^manual][^leaflet09]
Between races the board can run advertising or general messages from memory without a timer
connected.[^cat2013][^leaflet09]

In a pool, ALGE's 2007 and 2013 swimming documents pair the D-RTNM with the numeric D-SW boards:
the D-SW shows rank, lane and time, while the D-RTNM carries the event's name and the heat number, plus
advertising during or after a race, or information for the public outside competition.[^dsw][^cat2013]
ALGE's [SwimTime](../../../software/meet-management/swimtime.md) software drives it over the network, configured
from a D-RTNM tab in its settings.[^tmswim][^swimtime] The 2017 catalogue also shows D-RTNM boards
beside equestrian and football scoreboards, and as athletics infield boards.[^cat2017]

## History and naming

This section covers the dates found and the order code. The earliest dated D-RTNM-family document
is a September 2005 leaflet for an athletics infield board built on the same 3-LED pixel. The first
D-RTNM manual is dated February 2006 and the first leaflet July 2006.[^infield][^manual06][^leaflet06]
The current manual, version E23-10-31, keeps the 2006 structure almost unchanged.[^manual]

The order code gives the pixel type, then the resolution, then the setting. In
`D-RTNM-P3-16x96-I`, `P3` is a pixel of three LEDs, `16x96` is 16 pixels high by 96 long, and `I`
or `O` means indoor or outdoor.[^leaflet09] The pixel types are:[^manual][^leaflet09][^cat2017]

| Type | LEDs per pixel | Pixel pitch (vertical × horizontal) | Status |
|---|---|---|---|
| `P1V1`, `P1V2`, `P1V3` | 1 | 10 × 10, 15 × 10, 15 × 15 mm | Custom in the manual; `P1V3` standard by 2019 |
| `P1V4` | 1 | 20 mm | Listed from 2017 |
| `P3` | 3 | 21.6 × 21.6 mm | Standard from 2006 |
| `P4` | 4 | 20.7 × 25.4 mm | Standard from 2006 |
| `P7` | 7 | 46.4 × 36.8 mm in the manual | Option |
| `P12` | 12 | 65.6 × 55.2 mm | Custom |

The leaflets and the 2017 catalogue give the `P7` pitch the other way round, 36.8 mm vertical by
46.4 mm horizontal.[^leaflet09][^cat2017] The standard range has moved toward single-LED pixels:
the 2006 leaflet offered only `P3` and `P4` boards, while ALGE's 2019 product page listed only
`P1V3` and `P1V4` models, coded with an `-RO` suffix for red outdoor.[^leaflet06][^web2019] The
current product page offers one, three or four LEDs per pixel.[^product] What the letters RTNM
stand for is not given in any document found.

## Design and construction

The board is a lightweight aluminium case with a red Plexiglas front, built to be carried between
venues.[^leaflet09] ALGE's standard boards use red LEDs, with yellow, green, blue or white
available as options.[^leaflet09][^cat2017] Brightness can be set in 100 steps.[^leaflet09] The
LEDs are driven without multiplexing, which ALGE says makes them last longer and glow brighter
and stops the board flickering on television cameras.[^leaflet09][^cat2017] Later boards could be
ordered with narrow borders and connections on the back, so several can be mounted edge to edge
as one display.[^leaflet09][^cat2017]

## Models and dimensions

This section lists the standard boards in the manual's table, all 97 mm deep:[^manual]

| Model | Pixels | Size (length × height) |
|---|---|---|
| `D-RTNM-P3-16x96-I` / `-O` | 16 × 96 | 2200 × 400 mm |
| `D-RTNM-P3-16x160-I` / `-O` | 16 × 160 | 3500 × 400 mm |
| `D-RTNM-P4-16x96-I` / `-O` | 16 × 96 | 2200 × 500 mm |
| `D-RTNM-P4-16x160-I` / `-O` | 16 × 160 | 3500 × 500 mm |

The leaflets and the 2017 catalogue give the `P3` boards as 2300 and 3700 mm long rather than 2200
and 3500 mm, and the catalogue's table labels the outdoor `P4-16x160-O` as an indoor
model.[^leaflet06][^leaflet09][^cat2017] The 2017 catalogue adds 24-pixel-high boards, such as a
`D-RTNM-P1V4-24x96-O` of 1960 × 520 × 100 mm.[^cat2017] ALGE builds the boards to order, in about
six to eight weeks in 2019.[^web2019]

## Connection and control

The board has an Ethernet port, RS-232 and RS-485 ports that also supply 12 V, an RS-232 input for
an ALGE timer, a socket for an optional temperature sensor, and options for DCF or GPS time
signals.[^leaflet09][^manual] It comes with a 10 m network cable.[^product]

Layouts and lists are built in ALGE's [DisplayStudio](../../../software/display/alge-displaystudio.md)
software and loaded over the network. A crossover cable links one board straight to a PC, and a
utility installed with DisplayStudio sets each board's IP address, marking clashing addresses in
red.[^manual] Start lists can be loaded from an Excel file, after which the board can show a
competitor's name, nation and club as soon as a timer sends the bib number.[^manual]

Timers drive the board through variables in the display lists. A [TdC 8001](../../swimming/timers/alge-tdc-8000.md),
a [Timy](../../swimming/timers/alge-timy.md) or the [D-CKN](../scoreboard-control/alge-d-ckn.md)
console can send the current bib, rank and running time, and the D-CKN can also send scores, team
and player names, fouls, penalties and the attack clock for team sports.[^manual] A TdC can switch
between up to 32 stored lists by sending reserved bib numbers: 902 plays list 2 once, and 932 makes
it the active list.[^manual] ALGE does not publish the data protocol in the manual but offers it on
request.[^manual]

## Use in swimming

ALGE's [TM-SWIM](../../swimming/timers/alge-tm-swim.md) manual lists a D-RTNM tab for setting up
the boards from SwimTime.[^tmswim] SwimTime's change history shows support added for several
board layouts in 2013 and 2014, labelled 26x2, 26x5, 128x16 (22x2) and 160x16, together with
brightness control for newer boards and a warning when two boards share an IP address.[^swimtime]
The labels appear to give either characters by lines or pixels; the history does not say which.
ALGE's 2026 aquatics catalogue refers to alphanumeric message centres in its display range but does
not name the D-RTNM.[^cat2026]

## Power

The board has built-in switching power supplies. The 2006 manual and the leaflets describe them as
100–240 V AC; the 2023 manual says each supply has a 110/230 V switch inside the case that must be
set for the country, giving ranges of 90–130 V and 180–260 V.[^manual06][^leaflet09][^manual]

## Specifications

| Item | Value |
|---|---|
| Display | Red LED matrix (other colours optional); 1, 3, 4, 7 or 12 LEDs per pixel |
| Standard resolution | 16 or 24 × 96 or 160 pixels |
| Pixel pitch | 10–65.6 mm by type; 21.6 mm (`P3`) |
| Memory | 4 MB |
| Brightness | 100 levels |
| Interfaces | Ethernet, RS-232, RS-485; RS-232 timer input |
| Power | Built-in supply, 90–130 or 180–260 V AC by switch |
| Case | Aluminium, red Plexiglas front, 97 mm deep (standard models) |

Sources: manuals, leaflets and 2017 catalogue.[^manual][^manual06][^leaflet09][^cat2017]

## Part numbers and accessories

| Item | Part number | Notes |
|---|---|---|
| Display board | `D-RTNM-Pn-RxC-I/O` | Pixel type, resolution, indoor or outdoor |
| Software | [DisplayStudio](../../../software/display/alge-displaystudio.md) | Layouts, lists and network setup |
| Console | [`D-CKN`](../scoreboard-control/alge-d-ckn.md) | Multisport and water polo data |
| Timer | [Timy](../../swimming/timers/alge-timy.md), [TdC 8000](../../swimming/timers/alge-tdc-8000.md) | Bib, rank and time |

Sources: manual and product page.[^manual][^product]

## See also

- [D-SW display boards](alge-d-sw.md): the numeric swimming boards it is paired with
- [D-LINE display board](alge-d-line.md): ALGE's general-purpose numeric LED board
- [DisplayStudio](../../../software/display/alge-displaystudio.md): the software that programs it
- [SwimTime](../../../software/meet-management/swimtime.md): ALGE's swimming software that drives it
- [Scoreboards](index.md): the scoreboard overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Manual D-RTNMxxxx, D-IDxxx, D-GDxxx](https://alge-timing.com/downloads/userGuides/D-RTNMxx_BE.pdf) (Version E23-10-31).
[^manual06]: [ALGE, Manual D-RTNMxxxx, D-IDxxx, D-GDxxx](https://web.archive.org/web/20061024235148/http://www.alge-timing.com/alge/download/manual/D-RTNM/D-RTNMxx_BE.pdf) (February 2006; archived).
[^leaflet06]: [ALGE, Info LED Matrix Display Board D-RTNM](https://web.archive.org/web/20070326195935/http://www.alge-timing.com/alge/download/brochure/D-RTNM/D-RTNM-PE.pdf) (leaflet, July 2006; archived).
[^leaflet09]: [ALGE-Timing, LED-Matrix Display Board D-RTNM](https://alge-timing.com/downloads/leaflets/D-RTNM-PE.pdf) (leaflet, March 2009).
[^infield]: [ALGE, Infield Display Board IFD-RTNM-P3-24x96](https://web.archive.org/web/20060304064335/http://www.alge-timing.com/alge/download/brochure/Infield-Board/Infield-IFD-RTNM-P3-24x96-PE.pdf) (leaflet, September 2005; archived).
[^web2019]: [ALGE-Timing, D-RTNM Display Board](https://web.archive.org/web/20191114232950/https://alge-timing.com/AlgeTiming_V2/en/display-boards/d-rtnm.html) (product page; archived November 2019).
[^product]: [ALGE-Timing, D-RTNM](https://alge-timing.com/en/product/2444/d-rtnm) (product page, as of November 2026).
[^dsw]: [ALGE-Timing, Scoreboards for Aquatic Sports](https://alge-timing.com/downloads/leaflets/D-SWxxx-Scoreboard-PE.pdf) (leaflet, July 2007).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013), p. 13.
[^cat2017]: ALGE-Timing, General catalogue (2017), pp. 50–51, 64, 98, 104 and 149–150.
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026), p. 12.
[^tmswim]: [ALGE-Timing, Swimming Timing System](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf) (manual, Version E24-08-29), 4.5.2.4.
[^swimtime]: [ALGE-Timing, History file for SwimTime](https://alge-timing.com/alge/download/software/Change_SwimTime.txt) (versions 1.3.3.2 to 1.8.10.3, 2013–2018).
