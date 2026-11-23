---
title: ALGE D-LINE display board
description: >-
  D-LINE is the ALGE-Timing series of numeric LED display boards, sold since about 2004 in indoor
  and outdoor models from 57 mm to 1500 mm digit height and used as the time board of ALGE's
  semi-automatic swimming systems.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: D-LINE
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`D-LINEhhh-L-n-Ek` (digit height in mm, `I` or `O`, digits, spacing), e.g. `D-LINE150-O-6-E0`'
  - label: Type
    value: 'Numeric LED display board'
  - label: Digits
    value: 'Red LED seven-segment, 57–1500 mm; 3–6 digits standard'
  - label: Connection
    value: 'RS-232 and RS-485 on banana sockets; Amphenol socket for data and 12 V; [WTN](equipment/swimming/timers/alge-wtn.md) radio option'
  - label: Power
    value: 'Built-in mains supply, 100–240 V AC; or 10–12.5 V DC'
  - label: Introduced
    value: 'By December 2004'
  - label: Status
    value: 'Current'
  - label: Manual
    value: '[D-LINE / D-SAT manual (E240226)](https://alge-timing.com/downloads/userGuides/D-LINE-BE.pdf)'
---

<!--
Research notes, ALGE D-LINE. Surfaced 2026-11-11 while building out alge-timy.md. Built out
2026-11-22.

Original stub sources:
  - ALGE product page archive, November 2026 (held, sources/vendors/alge-timing/website-archive/),
    d-line page: numeric LED board driven by ALGE timing devices or other devices over RS232;
    can show a running clock or the clock time, or act alone as a stopwatch or countdown; indoor
    and outdoor models; standard stock models of three and six digits at 150 and 250 mm figure
    height, others made to order in about six weeks; always needs mains or a 12 V battery;
    delivered with cable 037-10 and power cable K-NETZ 4; accessories WTN-DB, cable reels, TIMY3,
    PS-KP. Its sport list does not include swimming. Verified.
  - ALGE Aquatic Sports catalogue (June 2026): the semi-automatic swimming systems show the time
    on a D-LINE board, by cable or through a WTN-DB receiver. Verified.
  - ALGE-Timing, Timy3 General E25-03-10: a D-LINE (or GAZ4) board can power the Timy3.
    Timy TrackTimer E23-11-02: up to eight GAZ or D-LINE boards with seven digits, one per lane
    or per place, address 1 carrying the running time. Verified.

Held documents added in the build-out (sources/vendors/alge-timing/):
  - scoreboards-displays/alge-d-line-d-sat-manual-e240226.pdf, Manual D-LINE / D-SAT, Version
    E240226, 24 pp., current ALGE download (PDF 26 February 2024). Read in full. Declaration of
    conformity dated 30 November 2010 covers series 57, 100, 150, 250, 300, 450, 600, 1000, 1500
    and SDA1 built from 1 January 2005. Right side: setup button, Amphenol (1 +10-12 V, 2 ground,
    3 data out, E data in), green/black start-stop sockets, yellow/black RS-232 data, white/blue
    RS-485 A/B, mains inlet 100-240 V with T1A fuse; left side repeats the data sockets. Factory
    reset only on boards built after June 2005. Parameter menu: time of day, date, display times,
    temperature and water-temperature and humidity calibration, GPS UTC offset, daylight-saving
    rules (Europe, USA, Australia), 12/24 h and C/F, brightness 0-9 or by time of day or light
    sensor, fade-in, display mode (hh:mm:ss, h:mm:ss.z, mm:ss.zh, m:ss.zht, bib/rank, extended,
    slave/master RS-485/RS-232 and GPS at 4800, seconds-only, CKN playing time at 9600 wireless
    only from CKN software 11-2006, freeze time of day), baud 2400/4800/9600/19200 or old-device
    mode for S3 and Self Timer SF2, time-out (x10 s from firmware 3.8), address. Extended mode maps
    bytes to digits: worked examples for Timer S4 and TdC 8001 show-jumping points, an 8-digit
    swimming board (rank, lane, time; gaps after digits 1 and 2; address 01 for TM-SWIM, 00 for
    Timy TrackTimer), 3- and 4-digit athletics concentration-clock/wind/performance boards, fixed
    comma or colon for old timers. Stand-alone stopwatch, countdown and counter from firmware 4.5
    (older 4.3/4.4 behaviour also described), with a 023-xx button. Dimension table (page 19,
    read from a rendered image): 27 models from 57-I-3 to 1500-O-6, width, height, depth,
    brackets, reading distance 25-750 m, power 6-510 W. Mains 100-240 V auto up to 250 mm digits
    (manual writes cm), 230 or 110 V factory-set from 450 mm. External battery 10-12.5 V; currents
    for 80/150/250 mm 6-digit boards 0.7/0.9/1.8 A max, 0.35/0.45/0.9 A average; do not start a
    car on the battery feeding it, since charging voltage above 12.5 V can destroy the board.
    Cables named: 145-05 (PC), 323-1.5 and 324-1.5 (PS-KP power bank), 161-10 (BB1), 032-05
    (12 V battery), 299 (battery plus a device). Protocol table as GAZ4/GAZ5, including the
    Timer S4 swimming F format. Ethernet optional with a customized UTP protocol.
  - scoreboards-displays/alge-d-line-manual-e-050711.pdf, Manual D-LINE, E-050711, 12 pp., archived
    from alge-timing.com October 2005. Already refers to older models with different parameter
    names. Indoor/outdoor differ only in LED brightness. Display modes then included equestrian
    points (3x), PC communication (6x) and wired and wireless game console (7x, 8x); optional
    alarm/horn function with two alarm programs of 50 times each (not in standard model). Table:
    indoor models only, 57 to 600 mm, 3 to 6 digits, 8-83 W; 600 mm reading distance 270 m.
  - catalogs-brochures/alge-d-line-leaflet-2005.pdf, July 2005, archived October 2005: same text
    as the December 2004 web page. Indoor 57/100/150/250/450/600 mm, outdoor 150/250/450/600 mm;
    max current at 12 V 0.9-5.9 A; red Plexiglas front; -20 to 60 C; 3/8 in tripod thread; options
    DCF and GPS receivers, up to two temperature sensors, humidity sensor, Ethernet, RS-485, clip
    panel with min/sec/1/100 labels from 150 mm.
  - catalogs-brochures/alge-d-line-leaflet-2021.pdf, current ALGE leaflet (PDF September 2021):
    indoor 57 and 100 mm only, outdoor 80 to 1500 mm; weights and power for 6-digit models
    (2 kg/13 W at 57 mm to 240 kg/510 W at 1500 mm).
  - catalogs-brochures/alge-general-catalogue-2017, pp. 48-49: RS-232 and RS-485 standard; four
    hangers; tripod thread written 3/4 in (3/8 in in all other documents); reading distance 28 m at
    57 mm (25 m elsewhere); weights higher than 2021 for large boards (450: 28 vs 24 kg; 600: 44
    vs 42; 800: 86 vs 84; 1000: 144 vs 108; 1500: 290 vs 240). Concentration clock options
    D-LINE150-O-3-E0 and D-LINE250-O-3-E0 (p. 66); GTT15/GTT25 bags; WTN-integrated D-LINE with
    WTN-DB; "D-LINE or GAZ5" across sport drawings. D-SAT time-temperature boards on p. 57.
Web:
  - ALGE D-LINE-01-e.htm, archived 12 December 2004: earliest D-LINE document found; same text and
    table as the 2005 leaflet, except 100 mm indoor 750 mm wide (800 later) and 150 mm indoor
    230 mm high (250 later). Verified.
  - Current product page /en/product/1150/d-line (read 2026-11-22): accessories WTN-DB, cable
    reels, TIMY3, PS-KP battery backup, 145-05 PC cable, D-GPS-D GPS receiver, D-ETH network
    adapter; scope of delivery 037-10 and K-NETZ 4. Sports list omits swimming. Verified.
  - "D-LINE Exchange Processor.pdf" in ALGE's D-Line manual folder (archived 2022) is a D-SF3
    processor-swap sheet dated October 2012, not a D-LINE document. Dead end, not filed.
  - D-Line_Configurator.exe archived 2006; GAZ4Test 1.6.2.1 (2016) adds D-Line brightness and time
    setting (see alge-gaz4test.md). Not run.
  - PS-KP: no description found beyond "battery backup" on the product page; not named in the body.
Independent sources: none beyond ALGE. RaceResult exchange documentation covers "GAZ/DLine" boards
generically. A marketplace search was not used.
Not established: exact introduction date (before December 2004); LED colours other than red;
whether boards ever came double-sided as standard.

Sources:
  - ALGE-Timing, Manual D-LINE / D-SAT, Version E240226 (https://alge-timing.com/downloads/userGuides/D-LINE-BE.pdf)
  - ALGE-Timing, Manual D-LINE, E-050711 (https://web.archive.org/web/20051027171926/http://alge-timing.com/alge/download/manual/D-Line/D-LINE-BE.pdf)
  - ALGE, D-LINE leaflet, 2005 (https://web.archive.org/web/20051027160652/http://www.alge-timing.com/alge/download/brochure/D-LINE/D-LINE-PE.pdf)
  - ALGE-Timing, LED Display Board D-LINE leaflet, 2021 (https://alge-timing.com/downloads/leaflets/D-LINE-PE.pdf)
  - ALGE, The Multifunctional LED-Display Board ALGE D-LINE (https://web.archive.org/web/20041212004656/http://www.alge-timing.com/alge/D-LINE-01-e.htm)
  - ALGE-Timing, D-LINE product page (https://alge-timing.com/en/product/1150/d-line)
  - ALGE-Timing, General catalogue 2017 (held locally)
  - ALGE-Timing, Aquatic Sports catalogue, 2026 (https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf)
  - ALGE-Timing, Timy3 General, E25-03-10 (https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf)
  - ALGE-Timing, Timy TrackTimer manual, E23-11-02 (held locally)
-->

D-LINE is a series of numeric LED display boards made by
[ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria. The boards show times, bib
numbers, ranks, points and similar figures sent from an ALGE timer or any RS-232 source, and can
run alone as a clock, stopwatch, countdown or counter.[^manual][^leaflet21] ALGE sells them in
indoor and outdoor versions with digits from 57 mm to 1500 mm high.[^leaflet21] In swimming,
ALGE's 2026 aquatics catalogue uses a D-LINE as the time board of its semi-automatic timing
systems.[^cat2026] The series has been on sale since at least December 2004 and was offered for
some years alongside the electromagnetic [GAZ5](alge-gaz5.md).[^web2004][^cat2017]

See the [scoreboards overview](index.md) for the shared background on scoreboards.

## Role in the timing system

A D-LINE is a one-line numeric display. A timer sends it formatted lines of digits by cable or by
radio, and it shows them; several boards can share one data line, each picking out the lines
addressed to it.[^manual] When no timing data arrives it can fall back to showing the time of day,
the date and, with sensors fitted, the temperature and humidity, switching back to race data as
soon as the timer sends again.[^manual][^leaflet21]

ALGE's product page lists it for winter sports, athletics, cycling, motor sport, canoeing and
speed climbing, and its 2017 catalogue offers "D-LINE or GAZ5" as the display in most of its
system drawings.[^product][^cat2017] The catalogue sets the two against each other: it presents
the LED board as cheaper and lighter than an electromagnetic board and easier to read in dark
areas.[^cat2017]

## History and naming

This section covers the dates found and the order code. The earliest D-LINE document found is an
ALGE web page archived in December 2004, which already lists six digit heights for indoor use and
four for outdoor use.[^web2004] The first English manual, version E-050711 of July 2005, refers to
"old" D-LINE models with a different parameter list, so earlier boards existed.[^manual05] The
current manual is version E240226 of February 2024 and covers the D-LINE and the related
[D-SAT](alge-d-sat.md) time-and-temperature board together.[^manual]

The sizes on offer have changed. In 2004 and 2005 ALGE offered indoor boards from 57 to 600 mm
and outdoor boards from 150 to 600 mm.[^web2004][^leaflet05] By 2017 indoor boards were limited to
57 and 100 mm, while outdoor boards ran from 80 to 1500 mm, and the 2021 leaflet lists the same
range.[^cat2017][^leaflet21] According to ALGE, outdoor boards differ from indoor ones
mainly the brightness of the LEDs.[^manual05][^leaflet21]

The order code gives the digit height in millimetres, `I` or `O` for indoor or outdoor, the number
of digits, and a final `E` code for extra blank spaces between digits. A `D-LINE150-O-6-E0` is a
six-digit outdoor board with 150 mm digits.[^leaflet21][^manual] As of 2026, ALGE keeps the three-
and six-digit boards with 150 and 250 mm digits in stock and builds other sizes to order in about
six weeks.[^product]

## Design and construction

The digits are red LED seven-segment figures behind a red Plexiglas front, in a black aluminium
case, with three dots between each pair of digits for separators.[^leaflet21][^manual] A clip-on
panel can label the digits, for example as minutes, seconds and hundredths, on boards from 150 mm
up.[^leaflet21] Boards hang from loops on top or mount on a tripod; the leaflets give the tripod
thread as 3/8 inch, and the 2017 catalogue as 3/4 inch.[^leaflet21][^cat2017] The operating range
is −20 to 60 °C.[^leaflet21]

The connections sit on the end panels. The right-hand end carries a button for the settings menu,
a four-pin Amphenol socket, green and black sockets for a start/stop push button, yellow and black
RS-232 data sockets, white and blue RS-485 sockets, and the mains inlet; the left-hand end repeats
the data sockets.[^manual] The 2005 leaflet lists RS-485 as an option, while the 2017 catalogue and
the current manual treat it as standard.[^leaflet05][^cat2017][^manual] Other options include DCF
and GPS time receivers, up to two temperature sensors, a humidity sensor and an Ethernet port for
clock synchronization.[^leaflet21][^product]

## Models and dimensions

This section lists the six-digit models. The current manual lists 27 standard models from three to
six digits; six-digit boards are:[^manual]

| Model | Digit height | Width × height × depth | Reading distance | Power |
|---|---|---|---|---|
| `D-LINE57-I-6-E0` | 57 mm | 500 × 130 × 60 mm | 25 m | 13 W |
| `D-LINE100-I-6-E0` | 100 mm | 800 × 180 × 80 mm | 50 m | 13 W |
| `D-LINE80-O-6-E0` | 80 mm | 600 × 150 × 60 mm | 40 m | 13 W |
| `D-LINE150-O-6-E0` | 150 mm | 956 × 250 × 60 mm | 75 m | 14 W |
| `D-LINE250-O-6-E0` | 250 mm | 1493 × 350 × 60 mm | 125 m | 34 W |
| `D-LINE450-O-6-E0` | 450 mm | 2490 × 600 × 80 mm | 225 m | 88 W |
| `D-LINE600-O-6-E0` | 600 mm | 3400 × 800 × 70 mm | 300 m | 133 W |
| `D-LINE800-O-6-E0` | 800 mm | 4800 × 1000 × 70 mm | 400 m | 180 W |
| `D-LINE1000-O-6-E0` | 1000 mm | 5700 × 1400 × 70 mm | 500 m | 270 W |
| `D-LINE1500-O-6-E0` | 1500 mm | 8500 × 2000 × 70 mm | 750 m | 510 W |

The 150, 250 and 450 mm boards share their widths with the six-digit GAZ4 and GAZ5 boards of the
same digit height, though the LED cases are lower.[^manual][^gaz5]

The figures vary between documents. The 2017 catalogue gives 28 m rather than 25 m for the 57 mm
board, and heavier weights than the 2021 leaflet for the large boards: 28 kg against 24 kg at
450 mm, and 290 kg against 240 kg at 1500 mm.[^cat2017][^leaflet21] The 2004 web page and the
2005 documents give 270 m for the 600 mm board, where later documents give 300 m.[^web2004][^manual05][^manual]
The 2004 page also lists a narrower 100 mm indoor board (750 mm wide) and a lower 150 mm indoor
board (230 mm high) than the later tables.[^web2004]

## Operation

This section covers the settings menu and the stand-alone modes. All settings are made through a
parameter menu, stepped through with the button on the board or from a PC over a serial cable;
brightness can also be set from a TdC 8001 or Timy.[^manual] The menu sets the clock and date,
how long the time, date and temperature are each shown, daylight-saving rules for Europe, the
United States or Australia, 12- or 24-hour time, Celsius or Fahrenheit, and the board's
address.[^manual] Brightness can be fixed at one of ten levels or follow the time of day or a light
sensor.[^manual]

The display mode chooses what the board does with incoming data: hours to seconds, minutes to
hundredths, a format to thousandths, bib and rank, or an extended mode in which each digit is
assigned a byte of the incoming line. Other modes link boards as master and slave, take time from
GPS, show playing time from ALGE's [D-CKN](../scoreboard-control/alge-d-ckn.md) scoreboard
terminal, or freeze the time of day at a button press.[^manual] The serial speed is 2400, 4800, 9600
or 19200 baud, with a further setting for older timers such as the Timer S3.[^manual] The 2005
manual also describes an optional alarm that sounds a horn at up to 50 programmed times of
day.[^manual05]

With a [023-02 push button](../../swimming/semi-automatic/pushbutton/alge-023-02.md) on the
start/stop sockets, a board running firmware 4.5 or later works as a stopwatch, countdown or
up/down counter, each started, stopped and preset with the one button.[^manual]

## Use in swimming

This section covers the three swimming arrangements the documents describe. ALGE's 2026 aquatics
catalogue shows a D-LINE as the time board of both of its semi-automatic systems. In the cabled
system a [Timy3](../../swimming/timers/alge-timy.md) takes one push button per lane on an
[`MC8-S2`](../../swimming/deck-cabling/alge-mc8.md) cable, and in the radio system the buttons and the board connect over
[WTN](../../swimming/timers/alge-wtn.md), with a WTN-DB receiver at the board.[^cat2026] ALGE's
2013 swimming catalogue showed a GAZ5 in the same role.[^cat2013]

For lane or place boards, the Timy TrackTimer program can drive up to eight seven-digit GAZ or
D-LINE boards, one per lane or one per place, with the running time on the first.[^tracktimer] The
current manual also gives the settings for an eight-digit swimming board that shows rank, lane
and time, with gaps after the first two digits, addressed for either a
[TM-SWIM](../../swimming/timers/alge-tm-swim.md) or a Timy.[^manual] ALGE sells dedicated
swimming boards in this layout under the [D-SW](alge-d-sw.md) name.[^cat2026]

The board still reads the [Timer S4](../../swimming/timers/alge-timer-s4.md)'s output, including
its swimming format for up to eight ranking boards.[^manual]

## Connection to the timer

The RS-232 input defaults to 2400 baud with one stop bit, eight data bits and no parity, like ALGE's
GAZ boards, and the board understands the same data formats from the Timer S4, TdC and Comet
families.[^manual] A board comes with a data cable and a mains cable, and ALGE lists
[cable reels](../../swimming/timers/alge-kt-cable-reels.md) among its accessories for longer
runs.[^product] With
a WTN-DB receiver on its Amphenol socket, a board takes data from a Timy3 or TdC 8001 by
radio.[^cat2017][^manual]

The Amphenol socket carries 10–12 V, ground, data out and data in.[^manual] Its pinout differs
from the GAZ boards', whose Amphenol sockets carry a wider 11–20 V supply on another pin.[^manual][^gaz5]
A D-LINE can supply a Timy3 through this socket.[^timy3]

## Power

Boards up to 250 mm digits have a built-in supply for 100–240 V AC that switches automatically;
larger boards are set at the factory for 230 V or 110 V.[^manual] Any board can instead run from a
10–12.5 V battery on the Amphenol socket. A six-digit 150 mm board then draws up to 0.9 A and
about 0.45 A on average; a 250 mm board up to 1.8 A, averaging 0.9 A.[^manual] The manual warns
against starting a car whose battery is feeding a board, since the charging voltage rises above
12.5 V and can destroy it.[^manual] Unlike the GAZ5, the D-LINE has no internal battery
option.[^product][^gaz5]

## Specifications

| Item | Value |
|---|---|
| Digits | Red LED seven-segment, 57–1500 mm, with separator dots |
| Digit count | 3, 4, 5 or 6 standard; others to order |
| Interfaces | RS-232 and RS-485; Ethernet optional; WTN radio with WTN-DB |
| Serial format | 2400–19200 baud, 8N1 |
| Connections | Amphenol (10–12 V, ground, data out, data in); banana sockets for RS-232, RS-485 and push button |
| Power | 100–240 V AC built in (230 or 110 V from 450 mm); 10–12.5 V DC |
| Power consumption | 6–510 W by model |
| Temperature range | −20 to 60 °C |
| Case | Black aluminium, red Plexiglas front |

Sources: current manual, 2021 leaflet and product page.[^manual][^leaflet21][^product]

## Part numbers and accessories

| Item | Part number | Notes |
|---|---|---|
| Display board | `D-LINEhhh-L-n-Ek` | Digit height, indoor or outdoor, digits, spacing |
| Radio receiver | [`WTN-DB`](../../swimming/timers/alge-wtn.md) | Radio data input |
| Push button | [`023-02`](../../swimming/semi-automatic/pushbutton/alge-023-02.md) | Stopwatch, countdown and counter |
| Cable reels | [`KT300`, `KT500`](../../swimming/timers/alge-kt-cable-reels.md) | Data line extension |
| Carrying bags | [`GTT15`, `GTT25`](../../swimming/timers/alge-gtt-carrying-bags.md) | Six-digit 150 and 250 mm boards |

Sources: product page, manual and 2017 catalogue.[^product][^manual][^cat2017]

## See also

- [GAZ5](alge-gaz5.md): the electromagnetic board offered alongside it
- [GAZ4](alge-gaz4.md): the earlier electromagnetic board
- [D-SAT](alge-d-sat.md): the time-and-temperature board sharing its manual
- [D-SW display boards](alge-d-sw.md): ALGE's dedicated LED swimming boards
- [Scoreboards](index.md): the scoreboard overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Manual D-LINE / D-SAT](https://alge-timing.com/downloads/userGuides/D-LINE-BE.pdf) (Version E240226).
[^manual05]: [ALGE-Timing, Manual D-LINE](https://web.archive.org/web/20051027171926/http://alge-timing.com/alge/download/manual/D-Line/D-LINE-BE.pdf) (Version E-050711; archived).
[^web2004]: [ALGE, The Multifunctional LED-Display Board ALGE D-LINE](https://web.archive.org/web/20041212004656/http://www.alge-timing.com/alge/D-LINE-01-e.htm) (archived December 2004).
[^leaflet05]: [ALGE, ALGE D-LINE](https://web.archive.org/web/20051027160652/http://www.alge-timing.com/alge/download/brochure/D-LINE/D-LINE-PE.pdf) (leaflet, July 2005; archived).
[^leaflet21]: [ALGE-Timing, LED Display Board D-LINE](https://alge-timing.com/downloads/leaflets/D-LINE-PE.pdf) (leaflet, 2021).
[^product]: [ALGE-Timing, D-LINE](https://alge-timing.com/en/product/1150/d-line) (product page, as of November 2026).
[^cat2017]: ALGE-Timing, General catalogue (2017), pp. 35, 48–49, 66 and system drawings.
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).
[^tracktimer]: ALGE-Timing, Timy TrackTimer (manual, Version E23-11-02), section 6.
[^timy3]: [ALGE-Timing, Timy3 General](https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf) (Version E25-03-10), section 2.3.
[^gaz5]: [ALGE-Timing, GAZ5](https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf) (manual, Version E120911).
