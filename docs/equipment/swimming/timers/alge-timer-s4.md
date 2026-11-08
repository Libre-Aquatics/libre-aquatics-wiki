---
title: ALGE Timer S4
description: >-
  The Timer S4 is an ALGE-Timing multi-sport timer whose swimming program, with an S4-SWIM lane
  box, FIN1 finish adapters and a Start Acoustic SA1, formed an eight-lane swimming system.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Timer S4
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`S4`'
  - label: Type
    value: 'Multi-sport timer with swimming program'
  - label: Lanes
    value: '8'
  - label: Channels
    value: '18'
  - label: Connection
    value: '25-pin multi-channel socket to the [S4-SWIM](equipment/swimming/deck-cabling/alge-s4-swim.md); RS232 to a computer'
  - label: Dimensions
    value: '226 × 162 × 95 mm'
  - label: Weight
    value: '2.2 kg with batteries'
  - label: Power
    value: 'Six C cells; [NLG4](equipment/swimming/timers/alge-nlg4.md) mains set or 12 V battery'
  - label: Status
    value: 'Not in ALGE catalogues as of 2026; FIS homologation valid to 2028'
  - label: Manual
    value: '[Timer S4 manual (E-06-04-18)](https://alge-timing.com/downloads/userGuides/s4-be.pdf)'
---

<!--
Research notes, ALGE Timer S4.

Surfaced 2026-11-04 while building out alge-tm-swim.md. Built out 2026-11-07.

Documents read in full:
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (10 pp.), held at
    sources/vendors/alge-timing/timers-consoles/alge-s4-swimming-system-installation-e97-03-24 and
    published by ALGE at alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf. PDF
    title S4-Schwimmen-Installation-BE, made with PageMaker 6.52, created 19 July 1999. Pages 4-6
    are drawings that the text extraction drops; rendered with PyMuPDF and read. The false-start
    drawing's title block reads "Swimm-System 94-11-03 / SCHW-E05.DWG", so the drawing dates from
    3 November 1994. Verified.
  - ALGE-Timing, Timer S4 manual, Version E-06-04-18 (63 pp., English), published at
    alge-timing.com/downloads/userGuides/s4-be.pdf; PDF created 18 April 2006. Downloaded
    2026-11-07 and filed at sources/vendors/alge-timing/timers-consoles/alge-timer-s4-manual-e06-04-18.
    A 68-page German edition is indexed on ManualsLib.de; not read.
  - ALGE-Timing, GAZ5 manual, Version E120911 (22 pp.), PDF created September 2012 and modified
    November 2023; filed at sources/vendors/alge-timing/scoreboards-displays/. Lists the Timer S4
    and S3 among the timers a GAZ5 takes data from, and gives a section on running a GAZ5 from an S4.

Manual facts used in the article (all verified from E-06-04-18): successor of the S3, which the
manual says had been in use worldwide for over ten years; TCXO 9.216 MHz; +/-2.5 ppm from -30 to
+75 C, +/-1 ppm a year ageing, +/-0.1 ppm adjustment at 25 C; operating range -25 to 50 C; range
23:59:59.999; 8000-time memory kept when switched off; eight-digit LCD, 12.7 mm figures; 6 C cells,
alkaline or NiCd (NiCd needed with the P4, charged in about 14 h); 60 mA draw on its own; 5 V
output up to 120 mA; impulse inputs 10 kohm to +5 V, triggered below 1 V on a falling edge;
loudspeaker socket for 8 ohm, 24 V p-p max; 226 x 162 x 95 mm; 2.2 kg with batteries; anodized
aluminium case. Programs 0-7. RS232 defaults 4800 baud 8N1 (1200-9600); display board and printer
2400 (to 19200). Battery-life table, NiCd/alkaline at 20 C: one RLS1c no printer 28/112 h; three
RLS1c or one RLS3c 16/64 h; one RLS1c with P4 printing every 30 s 24/96 h; three with P4 12/48 h;
about 20 % less at -20 C. Sample version string "Pr.1 V92.E", which may point to firmware of 1992;
inferred only, not used in the article.

Discrepancies, flagged in the article:
  - Touchpad: the 1997 guide's text calls it TP24; its drawings and the S4 manual call it TP1.
    Likely the same pad under an older and a newer name; inferred.
  - TP24 size: 2450 x 945 mm with 2406 x 921 mm active (guide p1) against 2444 x 910 mm with
    2410 x 900 mm active (guide p7); 2013 catalogue gives 2444 x 906 x 10 mm.
  - Battery: guide says the S4 can run the whole swimming system about four hours on its own cells;
    the manual's table (non-swimming loads) gives 12-112 h. Different loads, not a true conflict.
  - Swimming finish-delay is 10-99 s in program 6, against 0.02-9.9 s for the general dF option.
    Separate settings; noted for clarity, not a conflict.
  - S4-SWIM: text says eight outlets; drawings show four paired outlets (1+2 ... 7+8) per side.

Independent sources:
  - FIS homologated timing equipment list valid as of 22 October 2010 (PDF, copy hosted by Reliable
    Racing; filed at sources/reference/fis-homologated-timing-equipment-2010-10-22): ALG.005.97 S4,
    with external printer, valid until 2011; ALG.004.97 S3 the same. Verified.
  - FIS database (fis-ski.com, read 2026-11-07): ALG.005T.10, S4, external printer, precision
    1/1000, year 2028, where the year is the last season of guaranteed homologation. Verified.
    The ".97" suffix is shared with other 1997-numbered entries (ALGE TdC 4000, Comet, Cahour), so
    it likely marks the first FIS list, not the S4's launch; inferred, not used as a date.
  - FEI list of timing devices approved for jumping, updated 21 November 2017 (filed at
    sources/reference/fei-approved-timing-devices-jumping-2017-11-21): ALGE 22020009A, Timer S4,
    time base. Verified.
  - Split Second Sports Timing, Connecting timers: ALGE S4 (splitsecond.com): its ski-race
    software reads the S4 in program 3 at 4800 baud (2400 possible); DIN-to-DB9 wiring given.
  - TimingGuys forum, 23 March 2007: S3 and S4 serial formats differ (S3 2400 7N2; S4 4800 8N1).
  - Splash Meet Manager: Polish product page archived 10 August 2007 lists "ALGE S-4"
    (sources/reference/splash/archive-tm_20070810_prod_B; capture URL not recorded, so not cited);
    release notes, build 2007.73 (12 March 2008) corrected the S4 interface and build 2007.379
    (31 October 2008) fixed an error affecting English-text timing printouts; May 2010 guide;
    October 2011 FAQ (one-way, serial, implemented); April 2018 brochure ("ALGE S-4").
  - No Hy-Tek Meet Manager interface for the S4 was found; Hy-Tek documents the SWIM 2000 instead.

Dead ends: Wayback captures of alge.at and the 2002/2004 Splash pages could not be retrieved
(rate-limited, 2026-11-07); the 2002 SwimNews Splash home page has no timing list. No ALGE product
page, launch date or discontinuation notice found. Swim News whole-word ALGE hits (2001-2004) are
a meet-software advertisement naming ALGE among supported brands, nothing on the S4.

Second pass, 2026-11-07, more sources:
  - German S4 manual "TIMER S4" Bedienungsanleitung, Version D-10-09-02 (68 pp.), on ManualsLib.de
    (manual/14388). Read through ManualsLib's excerpt view only; the PDF sits behind a Cloudflare
    check and could not be downloaded. Verified from the excerpts: the version string; a WEEE
    disposal notice citing Directive 2002/96/EC; the program list; a Schwimmen section (max. 8
    lanes, start through the SA1, S4-SWIM to arm the pads, touch counter, up to 8 boards); the same
    TCXO and accuracy figures as the 2006 English manual. Shows the swimming program was still in
    the S4 documentation in 2010.
  - German S4 show-jumping manual "TIMER S4 für Springreiten", Version D-2004-02-23 (65 pp.),
    ManualsLib.de manual/49395; excerpt view only. Lists "Einstellungen für Schwimmen" among its
    settings. Not cited.
  - German S4 swimming manual "Timer für Schwimmen" (29 pp., no version visible), ManualsLib.de
    manual/53753; excerpt view only, page text not readable. Its program list differs from the 2006
    manual: Pr. 0 3-Parcours Timer, 1 Springreiten, 2 18-Kanal-Timer, 3 Parallelslalom, 4
    Geschwindigkeitsmessung, 5 Schwimmen, 6 Automatik, so it belongs to a different firmware
    generation. A table pairs race distances from 50 to 1500 m and relays 4 x 50 to 4 x 200 m
    with a touch count (values not visible); the sample heat printout carries the touch count, a
    10 s dead time, event number (WKNr) and heat number (LFNr); serial record formats on p25. This
    is very likely the "separate manual for swimming" the S4 manual refers to. The document to ask
    for if a full copy can be found. Not cited in the body because only excerpts were seen.
  - ALGE show-jumping brochure "Timer S4: die ideale Zeitmessanlage für Springreiten", on ALGE's own
    Yumpu account (algetiming), 4 pp., German, undated (Yumpu shows 1 January 2013). Pairs the S4
    with RLS1n photocells, TED radio, printer P5 and GAZ4 board; no swimming. Cited for the S4
    being sold with later accessories; P5 and GAZ4 deliberately not named in the body.
  - ALGE SWIM2000 brochure (4 pp., PDF created 6 May 2002) and SWIM2000 Architectural Guidelines
    (Version E-02-01-24, 19 pp.), both hosted by Split Second Timing Pty Ltd, Dee Why NSW (ALGE
    Australia), and filed under sources/vendors/alge-timing/. SWIM 2000: SWC "SWIM Controller"
    (TCXO 10 MHz, 12 V gel cell, 4 RS232 and 3 RS485 ports), SWT terminals chained on one cable with
    an SWT-END terminator, up to 12 lanes, 5 channels per lane per side, SU start unit, SPA/SPP
    speakers, SO 2 blocks, SWR 2 relay pads, TP 24/TP 18 pads, GAZ4 boards, PC software for Windows
    95 to XP. Neither document mentions the S4. ALGE's guide calls the SWIM 2000 its first timing
    system to work over a network with meet-management software; vendor claim.
  - Split Second Timing Australia swimming page (splitsecond.com.au/swimming.htm, undated): the
    SWIM 2000 system includes a "Headset Q34", so the Q34 outlived the S4 system; first systems in
    Australia at Warringah, Dubbo RSL and Belconnen.
  - TimingGuys thread "Alge S4 stops transmitting times to the PC", 10 September 2002: memory full
    at 8000 stops PC output, printing continues; clear memory with the CLr JA start-up option; false
    impulses from bad wiring or static fill memory faster. Matches the manual. Cited.
  - Hy-Tek Meet Manager 6 and 8 timing-console lists: ALGE SWIM 2000 only, no S4. Confirms the
    first-pass note.
Dead ends, second pass: ManualsLib PDFs blocked by Cloudflare; Wayback Machine "temporarily
offline" (CDX query for alge.at 1996-2004 failed); sdo-timing.de dealer page has a broken TLS
certificate; no 1990s ALGE patent found (the only ALGE touchpad patent seen is US 3,745,275, filed
1970, which belongs on the touchpad overview, not here); no press or club report of an S4 swimming
installation found.

Not established: introduction and withdrawal dates; whether the SWIM 2000 directly replaced the
S4 swimming system; what the R1 false start detector and SWIM-FIX box are.

Sources:
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf)
  - ALGE-Timing, Timer S4 manual, Version E-06-04-18 (https://alge-timing.com/downloads/userGuides/s4-be.pdf)
  - ALGE-Timing, GAZ5 manual, Version E120911 (https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)
  - FIS, Homologated Timing Equipment, list valid as of 22 October 2010 (https://reliableracing.com/downloads/homologated%20timing%20devices%20FIS.pdf)
  - FIS, Homologated Timing Equipment database (https://www.fis-ski.com/DB/information/homologated-timing-equipment.html)
  - FEI, List of Timing Devices approved for use at FEI Jumping Events, 21 November 2017 (https://inside.fei.org/system/files/List_approved_timing_0.pdf)
  - Split Second Sports Timing, ALGE S4 (http://www.splitsecond.com/connecting_timers.php?device=s4)
  - TimingGuys, ALGE timing software vs S4 (https://timingguys.com/topic/alge-timing-software-vs-s4)
  - Splash Software release notes, How to Start (May 2010), FAQ (October 2011) and brochure (April 2018), as cited on splash-meet-manager.md
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, 2013, and Aquatic Sports catalogue, June 2026 (no S4 in either)
-->

The Timer S4 is a battery-powered, multi-sport timer made by
[ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria, as the successor to its
[Timer S3](alge-timer-s3.md).[^manual] It has 18 timing channels and eight built-in programs, one
of them for swimming. With that program, an [S4-SWIM](../deck-cabling/alge-s4-swim.md) lane box,
[FIN1](../deck-cabling/alge-fin1.md) finish adapters and a
[Start Acoustic SA1](../starter/alge-sa1.md), the S4 formed ALGE's eight-lane swimming system,
which an installation guide dated March 1997 describes.[^guide] The S4 is also homologated by FIS
for ski timing and approved by the FEI as a time base for show jumping.[^fis][^fei]

## Role in the timing system

This section describes how the S4 fits into ALGE's swimming system. The timer sits at the timing
desk, where it records and prints the times. Everything on the pool deck reaches it through
the S4-SWIM, which plugs into the timer's 25-pin multi-channel socket.[^guide] The S4-SWIM holds a
switch for each lane's touchpad and the socket for the SA1, and a 5-core
[cable 078](../deck-cabling/alge-cable-078.md) runs from it to a FIN1 at every second lane. Each
FIN1 takes the touchpads and backup handswitches of two lanes.[^guide]

The starter works from the SA1. One press of its handswitch starts the S4 and sounds up to four
[LK1](../external-speaker/alge-lk1.md) horns, and a second press within five seconds sends the
false-start signal.[^guide] [Q34 headsets](alge-q34.md) at the timer and at the SA1 let the starter
and the timekeeper talk to each other. Results go to a [Printer P4](alge-p4.md) on the timer, to
[GAZc](../../common/scoreboard/alge-gazc.md) display boards, and to a computer over RS232.[^guide]

## History and predecessors

The S4 manual presents the timer as the successor to the S3 and says the older model had been in
use worldwide for more than ten years. The manual tells S3 owners that the S4's split program will
be familiar, and that ALGE sensors and accessories made for earlier timers work with the S4
unchanged.[^manual] The serial output was not carried over: according to a 2007 post on a timing forum, the S3
sent 2400 baud with 7 data bits and 2 stop bits, against 4800 baud with 8 data bits and 1 stop bit
on the S4, and the records differ slightly, so software set up for one does not read the
other.[^forum]

The swimming system's drawings carry the date 3 November 1994, and the installation guide is
version E-97-03-24.[^guide] ALGE's English S4 manual is dated April 2006, and a German edition of
September 2010 still describes the swimming program with the S4-SWIM and the SA1.[^manual][^de2010]
ALGE also sold the S4 as a show-jumping timer, paired in a German brochure with printers and
display boards of later generations than the P4 and GAZc.[^sj] No source found gives the S4's
introduction or withdrawal date. FIS listed it in 2010 under
homologation number `ALG.005.97`, valid until 2011, beside the S3 as `ALG.004.97`.[^fis2010] FIS
later renewed the S4 under `ALG.005T.10`; as of November 2026 that homologation is guaranteed
through the 2028 season, while the S3 is no longer listed.[^fis]

The S4 does not appear in ALGE's 2013 or 2026 swimming catalogues, which show touchpads, terminals
and consoles of later generations.[^cat2013][^cat2026] By January 2002 ALGE was documenting a
different swimming system, the [SWIM 2000](alge-swim-2000.md). Its timer is the
[SWC](alge-swc.md) controller, which collects impulses from lane terminals chained on one bus
cable, serves up to 12 lanes and works with timing software on a PC.[^swim2000][^arch] No ALGE document found says that the
SWIM 2000 replaced the S4 system.

## Design and hardware

This section covers the timer itself. The S4 is built in an anodized aluminium case with a handle held by
knurled screws.[^manual] Its front carries an eight-digit liquid-crystal display, a
red start/stop key, a yellow "next" key, a three-position switch that selects clock A, B or C, a
second switch for program selection, line test and options, and a meter used to check battery
level, photocell alignment and the start line. Pressing both keys together resets the selected
clock.[^manual]

Timing comes from a temperature-compensated crystal oscillator at 9.216 MHz. Precision can be set
to 1/10, 1/100 or 1/1000 s for the display, printer and display board; the computer output always
carries thousandths. The memory holds 8,000 times, each with a running ID number, and keeps them
when the timer is switched off.[^manual]

The S4 runs on six C cells, either alkaline or NiCd. NiCd cells are needed when the P4 printer is
fitted, and a coloured mark on the back of the case shows which type the charging circuit is set
for. The [NLG4](alge-nlg4.md) mains set or an external 12 V battery can power the timer, with the
internal cells as backup.[^manual] In the swimming system, the 1997 guide gives about four hours of
operation for the whole system from the timer's own cells, and expects the S4 to run normally from
a 12 V car battery or the NLG4.[^guide] The manual's battery figures, for ski-style use with
photocells, run from 12 to 112 hours depending on the load and cell type.[^manual]

## Connectivity

This section covers the S4's sockets and the swimming layouts that use them. The rear panel has
three DIN sockets for course A, B and C sensors, each also able to take the NLG4; a fourth DIN
socket for power; sockets for the display board, the P4 printer and an RS232 computer link; a
headset socket; a loudspeaker socket for a count-down horn; banana sockets for four of the
channels; and the 25-pin socket that carries all 18 channels.[^manual] The display-board socket
carries two data channels, and turning the [cable 010-10](alge-cable-010.md) plug over swaps which
one reaches the board.[^manual]

The 1997 guide shows three swimming layouts:[^guide]

| Layout | Equipment |
|---|---|
| Without false-start system | One Timer S4 with P4 and NLG4; one S4-SWIM; four cable 078 runs to four FIN1 adapters; one SA1 with four LK1 horns, a handswitch and a Q34 headset; eight GAZc boards on a mains supply |
| With false-start system | Two Timer S4s, each with its own P4 and NLG4; one S4-SWIM serving finish adapters at both ends of the pool; two SA1s, one on each side, each with four LK1 horns; a [False Start Detector R1](../relay-judging/alge-r1.md) at each lane |
| Under-deck installation | A [SWIM-FIX](../deck-cabling/alge-swim-fix.md) box on a mains supply, cabled to each starting block |

The guide does not explain the false-start system or the R1 in its text. For a fixed installation
it gives conduit sizes, and it advises that each FIN1 be mounted in a lockable box where ALGE
starting blocks are not used.[^guide]

## Software and operation

This section describes the swimming program and the S4's other programs. The timer's eight
programs are split or sequential timing, three-course timing, show jumping, an 18-channel timer,
parallel slalom, speed measurement, swimming, and an automatic mode for unattended training
runs.[^manual] The manual names swimming among the uses of the automatic mode.[^manual]

The swimming program, program 6, handles up to eight lanes. Before each heat the operator enters
the number of touches each lane must make (1–99), the event and heat numbers, and a finish delay of
10–99 s during which a pad ignores further touches after registering one. The start comes from the
SA1. The P4 prints each touch as it arrives. Once every lane has reached its count, the timer prints a
ranking of the race times, followed by the handswitch times and the final times listed by lane. The red key closes a heat in which a swimmer does not finish, and a reset advances the heat
number by one.[^manual]

The GAZc boards can be used in two ways. With one board per lane, a thumb-wheel switch on each
board selects the placing it shows, so the stack of eight boards reads as a ranking from first to
eighth. With a single board, the board shows the winner's time first and the operator steps through
the other placings with the yellow key; after the last time the printer produces the full
result.[^guide]

## Meet-management software

The S4 sends each time over RS232 as a line of text with a four-digit ID number, a channel or
course marker, and the time to the thousandth. A computer can also request the whole memory or a
block of it, clear it, and change baud rates and precision by sending one-byte control
codes.[^manual] A user report from 2002 describes the effect of a full memory: once 8,000 times
are stored, the S4 stops sending times to the computer while the printer carries on, so the
memory has to be cleared before an event rather than during it.[^memory]

Splash Meet Manager reads the S4 through a one-way serial interface, listed as "ALGE S4" in its May
2010 guide and October 2011 FAQ and as "ALGE S-4" in its 2018 brochure.[^howto][^faq][^brochure]
Splash's release notes record a correction to the S4 interface in March 2008 and a fix in October
2008 for timing printouts in English.[^ssrel] Outside swimming, Split Second Sports Timing's ski
software reads the S4 in its 18-channel program at 4800 baud.[^splitsecond]

## Specifications

Figures are from the S4 manual unless noted.[^manual]

| Specification | Value |
|---|---|
| Measuring range | 23 h 59 min 59.999 s |
| Precision | 1/10, 1/100 or 1/1000 s, selectable; computer output always 1/1000 s |
| Time reference | 9.216 MHz TCXO |
| Accuracy | ±2.5 ppm from −30 to 75 °C; ±1 ppm a year ageing; adjusted to ±0.1 ppm at 25 °C |
| Operating temperature | −25 to 50 °C |
| Timing channels | 18 |
| Memory | 8,000 times, retained when switched off |
| Display | 8-digit LCD, 12.7 mm figures |
| Swimming lanes | 8 |
| Power | Six C cells (alkaline or NiCd); NLG4 mains set; external 12 V battery |
| Current draw | About 60 mA without external devices |
| Sensor supply | 5 V DC, 120 mA maximum |
| Computer interface | RS232, 4800 baud default (1200–9600) |
| Display-board and printer interfaces | 2400 baud default (to 19200) |
| Loudspeaker output | 8 Ω, 24 V peak to peak maximum |
| Dimensions | 226 × 162 × 95 mm |
| Weight | 2.2 kg with batteries |
| FIS homologation | `ALG.005.97` (to 2011); `ALG.005T.10` (to 2028)[^fis2010][^fis] |

## Installation and safety

This section covers the guide's advice on the deck equipment. ALGE told pools to keep the
touchpads in the water only during competition and to store them on a trolley at other times. The
guide names the pad TP24 in its text but TP1 on its drawings, and the S4 manual also uses
TP1.[^guide][^manual] It gives two sets of dimensions for the pad, 2450 × 945 mm on its first page
and 2444 × 910 mm on its touchpad page; ALGE's 2013 catalogue lists the TP24 at 2444 × 906 ×
10 mm.[^guide][^cat2013] See the [TP touchpads](../touchpad/alge-tp-touchpads.md) article for
ALGE's touchpad line.

## Part numbers and accessories

This section lists the parts of the S4 swimming system that have articles here.[^guide][^manual]

| Item | Part number | Article |
|---|---|---|
| Timer | `S4` | This article |
| Lane switch box | `S4-SWIM` | [S4-SWIM](../deck-cabling/alge-s4-swim.md) |
| Finish adapter | `FIN1` | [FIN1](../deck-cabling/alge-fin1.md) |
| Lane cable | `078` | [Cable 078](../deck-cabling/alge-cable-078.md) |
| Touchpad | `TP24` (`TP1` on drawings) | [TP touchpads](../touchpad/alge-tp-touchpads.md) |
| Handswitch | `023-10` | [023-02 push button](../semi-automatic/pushbutton/alge-023-02.md) |
| Start unit | `SA1` | [Start Acoustic SA1](../starter/alge-sa1.md) |
| Start speaker | `LK1` | [LK1](../external-speaker/alge-lk1.md) |
| Headset | `Q34` | [Q34 headset](alge-q34.md) |
| Printer | `P4` | [Printer P4](alge-p4.md) |
| Mains charging set | `NLG4` | [NLG4](alge-nlg4.md) |
| Display board | `GAZc` | [GAZc](../../common/scoreboard/alge-gazc.md) |
| Display data cable | `010-10` | [Cable 010-10](alge-cable-010.md) |
| False start detector | `R1` | [R1](../relay-judging/alge-r1.md) |
| Under-deck junction box | `SWIM-FIX` | [SWIM-FIX](../deck-cabling/alge-swim-fix.md) |

## See also

- [Timer S3](alge-timer-s3.md): the predecessor
- [TM-SWIM](alge-tm-swim.md), [SWIM 2000](alge-swim-2000.md) and [SWC](alge-swc.md): later ALGE swim timers
- [Timers](index.md): the timing-console overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Timer S4 manual](https://alge-timing.com/downloads/userGuides/s4-be.pdf) (Version E-06-04-18).
[^guide]: [ALGE, Swimming System installation guide, Timer S4](https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf) (Version E-97-03-24).
[^fis2010]: [FIS, Homologated Timing Equipment](https://reliableracing.com/downloads/homologated%20timing%20devices%20FIS.pdf) (list valid as of 22 October 2010).
[^fis]: [FIS, Homologated Timing Equipment](https://www.fis-ski.com/DB/information/homologated-timing-equipment.html) (database, as of November 2026).
[^fei]: [FEI, Timing devices approved for use at FEI Jumping Events](https://inside.fei.org/system/files/List_approved_timing_0.pdf) (November 2017).
[^forum]: [TimingGuys, ALGE timing software vs S4](https://timingguys.com/topic/alge-timing-software-vs-s4) (forum thread, March 2007).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).
[^howto]: [Splash Software, Meet Manager 11: How to Start](https://wiki.swimrankings.net/images/8/83/Meet_Manager_How-to-start.pdf) (GeoLogix AG, May 2010).
[^faq]: [Splash Software, Splash Meet Manager 11 FAQ](https://wiki.swimrankings.net/images/4/45/Meet_Manager_FAQ.pdf) (October 2011).
[^brochure]: [Splash Software, Splash Meet Manager](https://www.swimrankings.net/files/MeetManager.pdf) (product brochure, April 2018).
[^ssrel]: [Splash Software, Release notes](https://web.archive.org/web/20100623045701/http://www.splash-software.ch/index.php?nav=,home,C) (archived June 2010).
[^splitsecond]: [Split Second Sports Timing, ALGE S4](http://www.splitsecond.com/connecting_timers.php?device=s4) (connecting timers).
[^de2010]: [ALGE-Timing, Timer S4 Bedienungsanleitung](https://www.manualslib.de/manual/14388/Alge-Timing-S4.html) (Version D-10-09-02; in German; ManualsLib copy).
[^sj]: [ALGE-Timing, Timer S4: die ideale Zeitmessanlage für Springreiten](https://www.yumpu.com/de/document/view/7029208/timer-s4-die-ideale-zeitmessanlage-fur-springreiten-alge-timing) (brochure; in German).
[^swim2000]: [ALGE, SWIM2000](https://www.splitsecond.com.au/brochures/swim2000-pe.pdf) (brochure, 2002; Split Second Timing copy).
[^arch]: [ALGE, SWIM2000 Architectural Guidelines](https://www.splitsecond.com.au/manuals/swim2000-be-architectural.pdf) (Version E-02-01-24).
[^memory]: [TimingGuys, Alge S4 stops transmitting times to the PC](https://timingguys.com/topic/alge-s4-stops-transmitting-times-to-the-pc) (forum thread, September 2002).
