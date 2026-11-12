---
title: ALGE SWIM 2000
description: >-
  The SWIM 2000 is an ALGE-Timing PC-based swimming timing system of about 2000, in which an SWC
  controller gathers impulses from chained SWT lane terminals for up to 12 lanes.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SWIM 2000
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: 'None for the system; [`SWC`](equipment/swimming/timers/alge-swc.md) controller, [`SWT`](equipment/swimming/deck-cabling/alge-swt.md) lane terminal'
  - label: Type
    value: 'PC-based swimming timing system'
  - label: Lanes
    value: 'Up to 12 (ALGE); 1–10 (Split Second Timing)'
  - label: Channels
    value: '5 per lane at each end'
  - label: Connection
    value: 'RS485 lane buses to the SWC; RS232 from the SWC to the timing PC and printer ports'
  - label: Power
    value: '12 V gel cell in the SWC; 100–240 V AC or 12–18 V DC'
  - label: Introduced
    value: 'By October 2000'
  - label: Succeeded by
    value: '[TM-SWIM](equipment/swimming/timers/alge-tm-swim.md) (inferred)'
  - label: Status
    value: 'Discontinued; Hy-Tek and Splash interfaces remain'
  - label: Manual
    value: 'SWIM2000 Manual, version E-020222 (2002)'
---

<!--
Research notes, ALGE SWIM 2000.

Surfaced 2026-11-04 while building out alge-tm-swim.md. Built out 2026-11-11.

Documents held (sources/vendors/alge-timing/) and read in full:
  - catalogs-brochures/alge-swim2000-brochure-2002: 4 pp., PDF created 6 May 2002, Split Second
    Timing (ALGE Australia) copy. Feature list, component page, SWC technical data.
  - timers-consoles/alge-swim2000-architectural-guideline-e02-01-24: 19 pp., version E-02-01-24,
    PDF created February 2003, Split Second copy. Page 5 is a scanned Neuchatel observatory
    verification certificate for SWC serial 9913001, dated 16 March 1999, 21 C, horizontal: twenty
    one-hour intervals; at 20 h the SWC read 19:59:59.9958. Page 7 photos of a mobile installation;
    page 9 the conduit diagram; page 13 SO 2 drawings. The header reads SO 2-EX in the text but
    SO2-X in the section heading. Page 19 is an empty notes page.
  - timers-consoles/alge-swim2000-manual-e020222: the SWIM2000 manual, 32 pp., version E-020222
    (some footers E-020214), PDF created 12 February 2003. Recovered 2026-11-11 from a Wayback
    capture (23 March 2003) of alge-timing.com/alge/download/manual/swim2000/swim2000-be.pdf.
    Two schematics (pp. 6-7) show cables 200-xx (SWT bus), 201-xx (speakers), 202-xx (SU),
    067-02 (SWC to timing PC), a LAN to the evaluation PC and a P5 printer. Maintenance chapter
    reads "in progress".
  - timers-consoles/alge-swim2000-manual-d020222.de: German edition, 34 pp., Wayback capture of
    swim2000-bd.pdf (October 2004). Adds an SWT section (waterproof; bus in, bus out, touchpad,
    three hand buttons, false-start socket) and SWC front-panel controls (talk, line test, start).

Discrepancies, all flagged in the text:
  - PC link: 9600 baud in the brochure, the 2001 web page and the German manual; 38400 in the
    English manual's technical data.
  - Video output: 9600 baud in the brochure; the English manual's settings page gives 19200 as
    the default, with 4800 and 9600 as options.
  - Lanes: 12 in the brochure and the 2001 overview; the 2001 component page allows ten SWT per
    bus; Split Second's page says 1 to 10.
  - Windows: 95, 98 or NT 4.0 on the 2001 page and Split Second's page; 95 to XP in the 2002
    manual and brochure.
  - Printer: P4 on the 2001 component page; P5 in the manual schematic and Split Second's list.
  - Part names on the 2001 page: SWSU start unit (SU in the brochure), SO1 starting block, relay
    pad named both SWR1 and SWD1 on one page. Whether SO1 and SWR1 are earlier versions of the SO 2
    and SWR 2 or the same products renamed is not stated.
  - GAZ4 legibility: about 60, 100 and 160 m on the 2001 page; DIN legibility 75, 125 and 225 m in
    the 2002 guideline.
  - The manual's HW.ini notes give dead-time values whose units do not agree with the comments
    beside them (200 called 2 seconds, 030 called 0.3 seconds). Not used in the text.

Web, read 2026-11-11 (Wayback captures of alge-timing.com unless noted):
  - produkte-d.htm, October 2000: lists the SWIM 2000 and the Timer S4 system together.
  - swim2000-01-e.htm, January 2001: new system for the start of the coming season; Windows 95,
    98 or NT 4.0; RS485 bus to the SWC; battery keeps it running in a power failure; up to twelve
    lanes; also for water polo, diving and synchronized swimming.
  - swim2000-03-e.htm, January 2001: component descriptions; two buses, up to 10 SWT each; SWT
    powered from the SWC; evaluation software in English, German, Spanish, Italian and Dutch;
    advice to run evaluation on a separate PC; GAZ4 8xxS, 7xxS and 8xxSR modes.
  - swim2000-05-e.htm, January 2001: technical data matching the brochure, plus SWT data (synced
    to the SWC's 1/10,000 s clock; 5 x 2 banana sockets). Links to a timing manual and a designer
    manual.
  - faq/faqswim2000.html, January 2003: speaker feedback after the start is cured by an SWC
    firmware update.
  - SWIM-01-E.htm, October 2007: ALGE's swimming page offers the Timy PXE semi-automatic package
    and the TM-SWIM TimeManager as its fully automatic system; no SWIM 2000 product listed.
  - Hy-Tek, ALGE SWIM 2000 (hytek.active.com/user_guides_html/swmm8/algeswim2000.htm).
  - Split Second Timing, Swimming (splitsecond.com.au/swimming.htm), undated: SWIMSOFT, SAT hand
    switches, P5 printer, installations at Warringah Aquatic Centre, Dubbo RSL Club and Belconnen.
    SAT appears to be Split Second's name for the push buttons; not used in the text.
  - Splash release notes (Wayback, June 2010; held as sources/reference/splash/archive-ss_homeC):
    Build 2007.53 (27 September 2007) false-start handling corrected; Build 2007.66 (15 January
    2008) new interface as a test; Build 2007.68 (6 February 2008) new interface made the default.
    Splash How to Start (May 2010), FAQ (October 2011, one-way serial) and brochure (April 2018)
    still list it.
  - Earlier note: Daktronics quick guide ED-13876 (2013) shows ALGE SWIM 2000 in the Meet Manager
    timer list. The Splash wiki files SwimTime screen images as MM_AlgeSW2000_*; no evidence found
    that SwimTime ran the SWC.

Not established: withdrawal date; production numbers; whether any SWC firmware or software is
still distributed. A Russian manual, a Russian guideline and a Chinese manual were also on ALGE's
site in 2004-2005 (Wayback index) and were not fetched. Periodical hits for "swim 2000" in sources/
are unrelated (years, a retailer).

Stubs created in this pass: alge-swt.md, alge-so2.md, alge-swr2.md, alge-gaz4.md, alge-p5.md,
software/alge-swim-manager.md, vendors/split-second-timing.md.
-->

The SWIM 2000 is a swimming timing system made by [ALGE-Timing](../../../vendors/alge-timing.md)
of Lustenau, Austria, and run from a Windows PC.[^web2001] Its centre is the [SWC](alge-swc.md)
controller, which keeps the time and stores every impulse. [SWT](../deck-cabling/alge-swt.md)
lane terminals, chained on one bus cable at each end of the pool, report touchpads, push buttons
and starting blocks to it.[^brochure][^webcomp] ALGE listed the system by October 2000 and
documented it in a manual, a brochure and an architectural guideline in 2002.[^prod2000][^manual]
[Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) and
[Splash Meet Manager](../../../software/splash-meet-manager.md) both kept interfaces for it.[^hytek][^faq]

## Role in the timing system

This section describes how the parts of the system divide the work. The SWC sits at the timing
desk. It talks to the timing PC over RS232 and to the lane terminals over two RS485 buses, one for
the start end and one for the turn end, and it drives the display board and a protocol
printer.[^webcomp] ALGE describes the PC software as the display and keyboard for the SWC: the
timing itself happens inside the controller, which runs on its own battery and keeps every time
if the PC fails.[^manual][^web2001]

Each lane has one SWT at each end where touchpads are used. A terminal takes one
[touchpad](../touchpad/alge-tp-touchpads.md), up to three
[023-02 push buttons](../semi-automatic/pushbutton/alge-023-02.md) and one relay take-off sensor,
either an [SO 2](../starting-blocks/alge-so2.md) starting block or an
[SWR 2](../relay-judging/alge-swr2.md) pad fitted to an existing block. Each lane therefore has five separate
timing inputs at either end.[^brochure]

The starter works from the [SU start unit](../starter/alge-su.md), which has a start button and a
microphone for announcements over the lane speakers. A [Q34 headset](alge-q34.md) plugged into
the SU lets the starter talk to the system operator, and a switch chooses between the two
uses.[^webcomp] The SWC has its own amplifier for the speaker line.[^web2001]

## History and predecessors

This section covers what the dated sources show about when the system was sold. The earliest
dated trace is a calibration certificate. The Neuchâtel astronomical and chronometric observatory
checked SWC serial number 9913001 for ALGE on 16 March 1999, over twenty one-hour intervals, and at
the 20-hour mark the controller read 19 h 59 min 59.9958 s. ALGE printed the certificate in its
architectural guideline as an independent accuracy test.[^arch]

ALGE's German product list of October 2000 names the SWIM 2000 next to the
[Timer S4](alge-timer-s4.md) swimming system, so the two were offered side by side.[^prod2000] An
English page captured in January 2001 introduces the SWIM 2000 as a new system for the start of
the coming swim season. It says the system could also serve water polo, diving and synchronized
swimming.[^web2001] The English manual is version E-020222, from February 2002, and ALGE's
guideline for architects is version E-02-01-24.[^manual][^arch] In that guideline ALGE calls the
SWIM 2000 the first timing system able to work over a network with meet-management and other
software, a claim made by ALGE alone.[^arch]

By October 2007 ALGE's swimming page offered the Timy PXE as its semi-automatic package and the
[TM-SWIM](alge-tm-swim.md) TimeManager as its fully automatic system, and it no longer listed the
SWIM 2000.[^swim2007] The TM-SWIM firmware page warns against loading its firmware onto "the old
SWC".[^tmswim] The TM-SWIM keeps the same layout of chained lane terminals, a terminator on the
last unit, and numbered 200 and 201 cables for terminals and speakers. This suggests the TM-SWIM
succeeded it, though no ALGE document found says so.[^manual][^tmswim] No source gives a date
when the SWIM 2000 was withdrawn.

## Design and hardware

This section covers the controller and the lane terminals. The SWC takes its time base from a
temperature-compensated crystal oscillator at 10.000 MHz and resolves to 1/10,000 s over a range
of 23 h 59 min 59.9999 s.[^brochure] ALGE recommends returning it for calibration every three to
five years.[^manual] The controller holds its data in flash memory, and its display-board and
video outputs are galvanically isolated. An internal 12 V gel cell backs up mains power at 100–240 V or an
external 12–18 V DC supply; the brochure gives four hours of running without the PC.[^brochure]

The front panel carries volume controls for the microphone, headset, audio input and overall
level. Its buttons let the operator talk over the speakers, test the start line and fire a start
by hand. Lamps show an error, external supply and charging.[^webtech][^manualde] In January 2003
ALGE's FAQ for the system gave one known fault: speaker feedback after the start, cured by an SWC
firmware update.[^faqfw]

The SWT terminals carry no lane number. All of them are identical, they are joined by a single
cable from one to the next, and an `SWT-END` plug closes the last one.[^brochure] Each takes its
power and its 1/10,000 s clock from the SWC.[^webcomp][^webtech] The German manual describes the
terminals as fully waterproof.[^manualde] Because the units are not numbered, the software asks
which end of the chain is lane 1. In the emergency mode, which uses ALGE's default settings, a
chain wired from the far lane comes out reversed, with lane 1 reported as lane 8.[^manual]

## Connectivity

This section lists the SWC's ports and how the rest of the system connects. The controller has
four RS232 ports, all without parity, with 8 data bits and 1 stop bit, and three RS485
ports:[^brochure][^manual]

| Port | Use | Speed |
|---|---|---|
| RS232 | Timing PC | 9600 baud (brochure, German manual); 38400 baud (English manual) |
| RS232, isolated | Display board | 2400 baud |
| RS232 | Protocol printer or third-party results software | 2400 baud |
| RS232, isolated | Video interface | 9600 baud (brochure); 19200 baud default (English manual) |
| RS485 | Start-end timing bus | |
| RS485 | Turn-end timing bus | |
| RS485 | Display board | |

Only the English manual gives 38400 baud for the PC link. The brochure, ALGE's 2001 web page and
the German manual all give 9600.[^brochure][^webtech][^manualde][^manual]

The rear panel has sockets for the two timing buses, two printers, the PC, TV output, the display
board (on a socket and on banana plugs), the SU, a start input on banana plugs, two active
speakers, the headset, and audio line in and out.[^brochure] The manual's diagrams show a
`200-xx` cable joining the terminals, a `201-xx` cable joining the speakers, a `202-xx` cable to
the SU and a `067-02` cable to the timing PC. See [ALGE swimming cable sets](../deck-cabling/alge-swim-cable-sets.md)
for the numbered cables.[^manual] The speakers alternate between active SPA units, each with a gel
cell and amplifier, and passive SPP units, with one SPA driving one SPP; see the
[SPA2 and SPP2](../external-speaker/alge-spa2-spp2.md) article for the later models.[^brochure]

ALGE's own displays for the system were [GAZ4](../../common/scoreboard/alge-gaz4.md) boards with
bistable electromagnetic seven-segment digits.[^arch] The software can drive them with the
running time on its own line or on the first free line, with lines ordered by lane or by rank,
or with all results on a single line.[^manual] For names and graphics ALGE offered custom
dot-matrix boards and LED boards up to full-colour video walls.[^arch]

## Software and operation

This section describes ALGE's Windows software for the system. The package was free, but lists
could be printed only after the user registered with ALGE and copied the licence file it sent
into the program folder.[^manual] The January 2001 page gives Windows 95, 98 or NT 4.0; the 2002
manual and brochure give Windows 95 to XP.[^web2001][^manual][^brochure]

The package has separate programs, so timing can run on one PC while results are prepared on
others over the network.[^brochure] It contains:[^manual]

- Timing-Manager, the timing program used with ALGE's own [SWIM-Manager](../../../software/alge-swim-manager.md)
- Simple-Timing, the same timing program for use with another company's results software, which
  can build a simple event list itself
- SWIM-Manager, the meet-management program, with entries, seeding, heat sheets, results, entry
  fees and fines, points scoring, LENEX import and HTML export
- a certificate program and a layout designer for printed lists

The timing screen lays out the lanes in the order the operator sees the pool. For each lane it
shows the touches, the block time at each end, the manual time, the lap time and the total
time.[^brochure] The software warns the operator, but does not change any time, in four cases:

- a relay take-off earlier than a set tolerance;
- a lap that differs too much from the previous one;
- a touch that has not arrived when it should, which can mean a swimmer turned under the pad;
- a gap between pad and button times larger than a set limit.

ALGE recommends a relay tolerance of −0.03 s, citing its own and other makers' tests that put the
pad's take-off time 0.023–0.027 s away from high-speed video. For the pad-and-button gap it
recommends 0.30 s, observing that push buttons usually lag the pad by 0.10–0.35 s.[^manual] For
training, the system can also take a reaction time when the swimmer's weight on the block passes
5 kg.[^manual]

The SWC can run a heat without the PC. Holding its internal start button for about five seconds
reprints every time since the last valid start, and a longer hold, until a double beep, readies
it for the next heat.[^manual]

## Meet-management software

This section covers the system's links to other results programs. Inside ALGE's own package,
SWIM-Manager reads times from the timing program and can import one lane or a whole heat. ALGE
advises keeping the competition file on the timing PC, so that timing carries on if the network
fails.[^manual]

For other programs, the SWC sends its data out of the printer port. The manual notes that a
third-party program reading that port must support the selected printer mode, which prints either
run times or times of day.[^manual] Hy-Tek Meet Manager connects with a cable from ALGE to the
timer's Printer 2 port. It collects times in the background and saves a race once the operator
presses End, or picks a new race, on the SWIM 2000 PC. The operator then pulls each race in by its
event and heat, or by its race number when the heat was entered wrongly on the timer.[^hytek]

Splash Meet Manager's release notes record a fix to false-start handling with the SWIM 2000 in
September 2007, and a new SWIM 2000 interface that was tested in January 2008 and made the default
the next month.[^ssrel] Splash's 2011 FAQ lists the SWIM 2000 as a one-way serial interface, and
its 2018 brochure still names it.[^faq][^splashbro]

## Specifications

Figures are for the SWC controller and are from the brochure unless noted.[^brochure]

| Specification | Value |
|---|---|
| Measuring range | 23 h 59 min 59.9999 s |
| Time reference | 10.000 MHz TCXO |
| Accuracy | ±2.5 ppm from −25 to 50 °C; ±1 ppm a year ageing; adjusted to ±0.1 ppm at 25 °C |
| Lanes | Up to 12; up to 10 terminals per bus (2001 web page); 1–10 (Split Second Timing)[^webcomp][^sstau] |
| Channels | 5 per lane per end: touchpad, three push buttons, relay take-off sensor |
| Interfaces | 4 × RS232; 3 × RS485 |
| Power | Internal 12 V gel cell; 100–240 V, 50/60 Hz, or 12–18 V DC |
| Battery running time | 4 h without the PC |
| Operating system | Windows 95, 98, ME, NT, 2000, XP (2002); Windows 95, 98, NT 4.0 (2001)[^web2001] |

The sources give different maximum lane counts. The brochure and the 2001 overview page say
twelve, the 2001 component page allows ten terminals on each bus, and the page of Split Second
Timing, ALGE's Australian distributor, says one to ten.[^brochure][^web2001][^webcomp][^sstau]

## Installation and safety

This section summarizes ALGE's architectural guideline for pools fitting the system. ALGE offered
two kinds of wiring:[^arch]

- Mobile cable sets, which ALGE describes as the cheapest and safest choice. One person needs
  about half an hour to lay them, and they can be covered with anti-slip matting during meets.
- Permanent wiring, which has to be decided early in planning. Every soldered joint has to be
  sealed with a sealant that does not absorb moisture, because ALGE found that most silicone
  sealants let the joints corrode within a few years.

For permanent installations ALGE recommended its SO 2 starting block, which has the push-button
and touchpad sockets built in. The local contractor was to supply the conduits, the touchpad
fasteners and a lift or scaffold for hanging the scoreboard. ALGE's diagram for a pool used for
swimming, water polo, diving and synchronized swimming routes 50 mm PVC conduits, each with a pull
wire, between floor boxes, wall boxes and the timing desk.[^arch]

The guideline adds 11 mm to the pool length at each end fitted with ALGE touchpads. Pads in a
concrete pool hang on brackets set with anchors, so they go in without tools. Pools with a
recessed or roll-out gutter need turn plates that stand 300 mm above the water flush with the
wall, and ALGE advised that the pool builder make these.[^arch] ALGE also notes that FINA, now
World Aquatics, does not approve timing systems as such, contrary to claims by some makers, and
states that its own parts conform to the FINA rules.[^arch] The [timers overview](index.md)
covers the governing-body requirements that apply to every system.

## Part numbers and accessories

This section lists the system's components that have articles here.[^brochure][^manual]

| Item | Part number | Article |
|---|---|---|
| Controller | `SWC` | [SWC](alge-swc.md) |
| Lane terminal | `SWT`; terminator `SWT-END` | [SWT](../deck-cabling/alge-swt.md) |
| Touchpad | `TP24`, `TP18` | [TP touchpads](../touchpad/alge-tp-touchpads.md) |
| Push button | `023-02` | [023-02 push button](../semi-automatic/pushbutton/alge-023-02.md) |
| Starting block | `SO 2`, `SO 2-EX` (`SO1` on the 2001 page) | [SO 2](../starting-blocks/alge-so2.md) |
| Relay take-off pad | `SWR 2` (`SWR1` or `SWD1` on the 2001 page) | [SWR 2](../relay-judging/alge-swr2.md) |
| Start unit | `SU` (`SWSU` on the 2001 page) | [SU](../starter/alge-su.md) |
| Headset | `Q34` | [Q34 headset](alge-q34.md) |
| Speakers | `SPA`, `SPP` | [SPA2 and SPP2](../external-speaker/alge-spa2-spp2.md) |
| Printer | `P5` (`P4` on the 2001 page) | [Printer P5](alge-p5.md) |
| Display board | `GAZ4` | [GAZ4](../../common/scoreboard/alge-gaz4.md) |
| Cables | `200-xx`, `201-xx`, `202-xx`, `067-02` | [Swimming cable sets](../deck-cabling/alge-swim-cable-sets.md) |
| Software | None | [SWIM-Manager](../../../software/alge-swim-manager.md) |

ALGE's 2001 web pages use several part names that differ from those in its 2002
documents, as the table notes. The 2001 page names the relay pad both `SWR1` and `SWD1`. No
source says whether the 2001 names belong to earlier versions of the parts or to the same parts
renamed.[^webcomp]

## See also

- [SWC](alge-swc.md): the system's controller
- [Timer S4](alge-timer-s4.md): the ALGE swimming system sold alongside it
- [TM-SWIM](alge-tm-swim.md): the later ALGE swimming console
- [Split Second Timing](../../../vendors/split-second-timing.md): ALGE's Australian distributor
- [Timers](index.md): the timing-console overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, SWIM2000 Manual](https://web.archive.org/web/20030323112316/http://alge-timing.com/alge/download/manual/swim2000/swim2000-be.pdf) (Version E-020222, 2002; archived).
[^manualde]: [ALGE-Timing, SWIM2000 Bedienungsanleitung](https://web.archive.org/web/20041014223020/http://www.alge-timing.com/alge/download/manual/swim2000/swim2000-bd.pdf) (Version D-020222; in German; archived).
[^brochure]: [ALGE, SWIM2000](https://www.splitsecond.com.au/brochures/swim2000-pe.pdf) (brochure, 2002; Split Second Timing copy).
[^arch]: [ALGE, SWIM2000 Architectural Guidelines](https://www.splitsecond.com.au/manuals/swim2000-be-architectural.pdf) (Version E-02-01-24).
[^web2001]: [ALGE-Timing, SWIM 2000 Timing System for Swimming](https://web.archive.org/web/20010124033900/http://www.alge-timing.com/alge/swim2000-01-e.htm) (archived January 2001).
[^webcomp]: [ALGE-Timing, Components of the SWIM 2000 System](https://web.archive.org/web/20010126234700/http://www.alge-timing.com/alge/swim2000-03-e.htm) (archived January 2001).
[^webtech]: [ALGE-Timing, SWIM 2000 technical data](https://web.archive.org/web/20010127003600/http://www.alge-timing.com/alge/swim2000-05-e.htm) (archived January 2001).
[^prod2000]: [ALGE-Timing, Produkte](https://web.archive.org/web/20001021184403/http://alge-timing.com/alge/produkte-d.htm) (product list; in German; archived October 2000).
[^faqfw]: [ALGE-Timing, FAQ for SWIM 2000](https://web.archive.org/web/20030106180123/http://www.alge-timing.com/alge/faq/faqswim2000.html) (archived January 2003).
[^swim2007]: [ALGE-Timing, Timing Systems for Swimming](https://web.archive.org/web/20071026094015/http://www.alge-timing.com/alge/SWIM-01-E.htm) (archived October 2007).
[^tmswim]: [ALGE-Timing, TM-SWIM TimeManager](https://alge-timing.com/en/product/2000/tm-swim) (product page, as of November 2026).
[^sstau]: [Split Second Timing, Swimming](https://www.splitsecond.com.au/swimming.htm) (ALGE Australia; undated).
[^hytek]: [Hy-Tek, ALGE SWIM 2000](https://hytek.active.com/user_guides_html/swmm8/algeswim2000.htm) (Meet Manager guide).
[^ssrel]: [Splash Software, Release notes](https://web.archive.org/web/20100623045701/http://www.splash-software.ch/index.php?nav=,home,C) (archived June 2010).
[^faq]: [Splash Software, Splash Meet Manager 11 FAQ](https://wiki.swimrankings.net/images/4/45/Meet_Manager_FAQ.pdf) (October 2011).
[^splashbro]: [Splash Software, Splash Meet Manager](https://www.swimrankings.net/files/MeetManager.pdf) (product brochure, April 2018).
