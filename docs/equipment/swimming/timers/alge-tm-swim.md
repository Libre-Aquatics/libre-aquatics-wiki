---
title: ALGE TM-SWIM
description: >-
  The TM-SWIM is the ALGE-Timing swim timing console, a TimeManager unit that runs the race
  itself while the SwimTime PC software displays it, with RS485 lane terminals, up to 16 lanes a
  side and a built-in amplifier for the start tone.
updated: 2026-11-04
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: TM-SWIM
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`TM-SWIM`'
  - label: Type
    value: Swim timing console, PC-operated
  - label: Software
    value: '[SwimTime](software/swimtime.md)'
  - label: Lanes
    value: Up to 16 per side
  - label: Resolution
    value: 1–1/10,000 s, selectable
  - label: Connection
    value: USB type B to the PC; two RS485 timing buses to [SWT3](equipment/swimming/deck-cabling/alge-swt3.md) terminals
  - label: Dimensions
    value: 260 × 220 × 140 mm
  - label: Weight
    value: 3.6 kg
  - label: Power
    value: Mains (100–240 V in the manual, 90–240 V on the product page) or 12–18 V DC; internal 12 V battery
  - label: Introduced
    value: By 2013; exact date not established
  - label: Status
    value: Current
  - label: Manual
    value: '[Swimming Timing System Manual (Version E24-08-29)](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf)'
---

<!--
Research notes, TM-SWIM. Stub created October 2026 while measuring the ALGE start tone for the
start-systems overview; built out 2026-11-04.

Held under sources/vendors/alge-timing/, all read in full:
  - timers-consoles/alge-swimming-timing-system-manual-e24-08-29: Swimming Timing System manual,
    48 pp., page 1 marked Version-E190726 and Version-E24-08-29; PDF made 29 August 2024.
    Published at alge-timing.com/downloads/userGuides/Swimming-BE.pdf. Page images checked for
    the diagrams on pp16-17 and the settings screens on pp26, 28 and 30.
  - catalogs-brochures/alge-swimming-catalogue-v1.113-2013: "The Specialist for Swimming",
    V1.113, 16 pp., PDF dated 2 September 2013, found at freker.se (a Swedish distributor).
  - catalogs-brochures/alge-aquatic-sports-catalogue-swimming-ke-2026: Aquatic Sports catalogue,
    24 pp., PDF dated 15 June 2026 (alge-timing.com/downloads/leaflets/Swimming_KE.pdf).
  - software/alge-swimtime-change-log-v2.5.4.1.txt and alge-tms-firmware-change-log-v25.71.txt,
    both linked from the product page.
  - software/alge-splash-meet-manager-quick-start-2025 (June 2025).
  - start-systems/alge-su3-start-unit-manual-e23-11-02; timers-consoles/
    alge-s4-swimming-system-installation-e97-03-24 (1997).
  - website-archive/alge-product-pages-2026-11.txt: text of the ALGE product pages read
    2026-11-04. The TM-SWIM page (alge-timing.com/en/product/2000/tm-swim) is the only source for
    size, weight, 60 W maximum draw, the 2 x 6 V battery, and the delivery contents.
  - reference/splash/swimwiki-Meet_Manager_Timing_System_ALGE_SwimTime.txt.

Dates. Nothing states an introduction date. Firm points: the 2013 catalogue shows the product
with SwimTime; the SwimTime log opens on V1.3.2.1 of 7 February 2013, which only changes the
numbering scheme, so earlier versions existed; the firmware log opens on V14.21 of 20 February
2014; Splash's release notes add an ALGE SwimTime interface in April 2010 (build 7735; see
splash-meet-manager.md). The conformity declaration of 30 November 2017 is not a launch date. The
2010 interface shows SwimTime existed, not the TM-SWIM, because the product page calls this unit
the "new TimeManager" and warns off "the old SWC".

Lineage, unresolved. Inferred, not stated anywhere: Timer S4 (1997), then SWIM 2000 and/or SWC,
then TM-SWIM. Splash's May 2010 guide lists ALGE Swim2000 and S4, and the Splash wiki's SwimTime
images are filed under names beginning MM_AlgeSW2000, which hints that SwimTime ran the SWIM 2000;
Hy-Tek's guide also refers to an "ALGE SWIM 2000 PC" computer. Resolved 2026-11-07: ALGE's 2002
SWIM 2000 brochure and E-02-01-24 architectural guideline (Split Second Timing Australia copies,
filed under sources/vendors/alge-timing/) make the SWC the controller of the SWIM 2000 system,
with SWT terminals on two RS485 buses; see alge-swc.md. Still no SWC or SWIM 2000 operating
manual; that is the document to ask for.

Internal conflicts, flagged in the article:
  - Video port speed: 9600 in the 5.1 list, 19200 in 5.1.1.2 and on the p26 screen. The 5.1 list
    also writes "kBaud" throughout, plainly meaning baud.
  - 0.1 ppm is given as +/- 0.001 s/h in the manual and 0.00036 s/h in the 2026 catalogue; the
    arithmetic gives 0.00036. The 2013 catalogue's 2.5 ppm figure of 0.009 s/h is consistent.
  - Port lists differ across the three documents (see Connectivity).
  - Start tone length unit, as on the start-systems overview. The p26 screen also gives the delay
    and inverse delay defaults: touchpad 2.00 and 0.15, buttons 0.30 and 0.30, start block 0.15
    and 0.15, start (C0) 0.50; timing window 2; event info address 0; display baud 2400; printer
    2400, mode run times; video 19200.
  - Manual leftovers: 3.1 still says to connect an SWT2; the p16-17 diagrams label the printer
    P5-8 where the text has P6-8; 2.2.1 shows a 037-xx display cable not mentioned in the text.
  - The video protocol table numbers lanes 00-12 while the catalogues claim 16. Not necessarily a
    contradiction, but no source reconciles them.
  - Battery chemistry: lead in the manual, gel-cell in both catalogues, 2 x 6 V gel on the product
    page. These fit one another (gel is a lead-acid type), so only the plainest form is used.

Other firmware facts not used: V15.91 added the DIS and SGM command extensions; V14.21 added
BUZ; these imply a text command set over the PC link, which the manual reserves as internal.
V1.8.6.1 removed a power supply warning.

Touchpad numbers and everything product-specific to the accessories are on their own pages.

Not stubbed, recorded here so the names are not lost: the semi-automatic tier's MC8-S2 cable, MC2-S
training adapter, WTN wireless network, WTN-PB radio push button, WTN-DB receiver and MT1 mobile
timing; the Start Judge SJ2 and TimeManager TM for other sports; the water polo D-CKN console and
D-SC shot clocks; open water CM30/100 pads, MC9 and ASC3; SwimTrainer, PC Timer and Tracktimer Timy
programs; PCD Multisport; JS Pro Displays (the USA partner for video boards); SV4 speech amplifiers.
All are in the source tracker's products column.

Still to research: introduction date, price, which US pools run it, and the Nevco arrangement.
-->

The TM-SWIM is the swim [timing console](index.md) made by
[ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria, which sells it under the
name TimeManager.[^product][^manual] The unit collects lane impulses over two RS485 buses,
holds the race data itself, generates the start tone, and connects by USB to a PC running
[SwimTime](../../../software/swimtime.md). ALGE lists it for its 8-lane and 10-lane swimming
systems and gives it a capacity of 16 lanes at each end of the pool.[^sports][^cat2026]

## Role in the timing system

This section covers the TM-SWIM's place in an ALGE system. ALGE sells two tiers of competition
timing. Its semi-automatic packages run from a [Timy3](alge-timy.md) with push buttons, and its
fully automatic system runs from the TM-SWIM with touchpads.[^usa][^cat2026]

Timing functions execute inside the TM-SWIM and are saved there, and SwimTime displays the race
and controls the unit. ALGE's 2013 catalogue says the computer can drop out once a competition has
been set up, and the 2026 catalogue says operation continues through a power cut.[^cat2013][^cat2026]
The catalogues give the internal battery about four hours, running without the mains or a
computer.[^cat2013][^cat2026]

Each lane has a [SWT3 terminal](../deck-cabling/alge-swt3.md) at each timed end of the pool, and
each terminal offers five channels: one [touchpad](../touchpad/alge-tp-touchpads.md), three
[push buttons](../semi-automatic/pushbutton/alge-023-02.md) and one relay take-off sensor or
instrumented starting block.[^manual] The console counts the terminals on each bus when it
switches on and numbers them from the settings in SwimTime, so the terminals themselves carry no
lane number.[^cat2026]

The manual shows two reference layouts. One is a single-sided eight-lane pool with a numeric
board. The other is a double-sided ten-lane pool with a video screen, [OPTIc3](../../common/photo-finish/alge-optic3.md)
video backup and a separate scoreboard PC. In both, the timing PC and the meet-management PC are
different machines joined by a network switch.[^manual]

## History and predecessors

The start of TM-SWIM production is not documented. The earliest dated document found that shows
it is an ALGE catalogue whose file was made in September 2013, which presents the unit with the
earlier SWT2 terminal, SU2 start unit and P5 printer. That catalogue says the TM-SWIM was the first
timing device for swimming with a USB interface, a claim made by ALGE alone.[^cat2013] The firmware
change log begins with version 14.21 of February 2014, and the SwimTime log begins in February 2013
with a change of version numbering, so both have earlier history that is not published.[^fwlog][^swimlog]
Splash Software added an ALGE SwimTime interface to its meet manager in April 2010.[^relnotes]

ALGE's earlier swimming products are known only in part. A 1997 guide describes a
[Timer S4](alge-timer-s4.md) with an [S4-SWIM](../deck-cabling/alge-s4-swim.md) lane box that had
eight outlets, fed by a separate 5-core cable to a finish adapter for each pair of lanes, with a
[Start Acoustic SA1](../starter/alge-sa1.md) driving up to four horns.[^s4] [Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) and Splash also
list an [ALGE SWIM 2000](alge-swim-2000.md).[^hytek][^howto] The current firmware page warns that
the TM-SWIM firmware must not be loaded onto "the old SWC", and it calls the TM-SWIM the "new
TimeManager".[^product] ALGE's 2002 SWIM 2000 brochure shows the [SWC](alge-swc.md) as that
system's controller, gathering impulses from lane terminals on start-side and turn-side bus
lines.[^swim2000] No source found states that the SWIM 2000 replaced the S4, or that the TM-SWIM
replaced the SWC directly.

The accessories have changed around the console. The 2013 SWT2, SU2 and P5 have become the SWT3,
[SU3](../starter/alge-su3.md) and [P6-8](alge-p6-8.md), and ALGE warns against mixing the SWT3 with
older terminals on one system.[^swt3][^cat2013][^cat2026] Firmware 24.C1 of December 2024 added
support for extended terminal hardware that reports a touchpad becoming low-resistance, and
SwimTime 2.5.2.1 of February 2025 added a touchpad failure pre-warning for the SWT-DP.[^fwlog][^swimlog]

## Design and hardware

The console is a portable unit of 260 × 220 × 140 mm and 3.6 kg with a built-in audio amplifier, a
12 V rechargeable battery, and a 10 MHz temperature-compensated crystal oscillator.[^product][^manual]
It is supplied with a case, a USB cable, a mains cable and a flash drive holding the software.[^product]
ALGE advises recharging the battery every three months when the system is out of use.[^manual]

The front panel has three operating controls. Speech opens the lane speakers for announcements,
Line Test starts a line test, and Start fires an internal start impulse. Regulators set the
microphone, headset, audio input and overall volume. Three lamps report an error, external supply,
and device supply; the error lamp is a general alarm, and the PC gives the specific fault.[^manual]

ALGE gives the oscillator a calibration of ±0.1 ppm at 25 °C, a drift of ±2.5 ppm from −25 to
50 °C, and ageing of ±1 ppm a year. The manual converts ±0.1 ppm to ±0.001 s an hour and the 2026
catalogue converts it to 0.00036 s an hour; the second figure is the one the arithmetic gives.[^manual][^cat2026]

## Connectivity

This section lists the console's connections. Cables are numbered at both ends and the plugs differ
by device, a design ALGE says prevents wrong connections.[^manual]

Each end of the pool has its own RS485 timing bus. On each bus, cable `200-04` chains the SWT3
terminals together, cable `200-20` or the `KT200Z10` reel links the nearest terminal to the console,
and an `SWT-END` terminator closes the chain.[^manual] See the
[ALGE swimming cable sets](../deck-cabling/alge-swim-cable-sets.md) page for the lane sets.

The start equipment hangs off a separate line. Cable `199-20` or the `KT199Z10` reel joins the
console to the [SU3 start unit](../starter/alge-su3.md), the [FLASH XL](../starter/alge-flash-xl.md)
or both, and the SU3 takes all of its power over that cable.[^manual][^su3] An
[E-START](../starter/alge-e-start.md) plugs into the SU3.[^su3] The 2013 and 2026 catalogues
list two sockets for this line, and the manual's double-sided diagram shows a start unit at each
end of the pool.[^cat2013][^cat2026][^manual]

Start audio goes to [SPA2 and SPP2 lane speakers](../external-speaker/alge-spa2-spp2.md). An active
SPA2 stands behind each odd lane and drives a passive SPP2 behind the next even lane, and cable
`201-07` links the SPA2 units in series from either of the console's two active-speaker
sockets.[^manual] The console charges the SPA2 batteries while it is on the mains.[^manual]

The published port lists do not agree, and no source explains the differences:

| Source | Serial interfaces |
|---|---|
| 2013 catalogue | USB for PC or video; RS232 for display board, printer and video; RS485 for two timing buses and a display board |
| 2024 manual | Four RS232 (PC, display board, printer or results software, video); three RS485 (two timing buses, a display board) |
| 2026 catalogue | USB for PC or video; RS232 for PC or video; two RS232 for the printer; two RS232 for display boards; RS485 for a display board; two timing buses |

The display board port runs at 2400 baud by default and up to 38,400, sends ASCII, and is available
on a DIN socket or banana sockets. The video port uses the same format; the manual's interface list
gives its speed as 9600 baud, and its port description and settings screen give 19,200. The manual
documents the video data format, covering running time, finish, intermediate, reaction and deleted
times by lane. It reserves the PC protocol for internal use, available on special request.[^manual]

## Software and operation

This section summarizes operation from SwimTime. The operator installs SwimTime before first
connecting the console, then powers the console and starts the program, which shows the lanes
detected. A count that differs from the terminals fitted points to a cabling fault, and the program
must be restarted after it is fixed.[^manual] SwimTime version 2.5.4.1 of April 2025 is the current
release, for Windows 7 to 11.[^product][^swimlog]

The limit settings hold off false impulses. A block time after the start closes all touchpads, and
a second block time closes one pad after each touch. Both default to 10 seconds, and ALGE recommends
different values by pool:[^manual]

| Pool | Block time after start | Block time after touch |
|---|---|---|
| 25 m, touchpads at one end | 20 s | 20 s |
| 25 m, touchpads at both ends | 8 s | 20 s |
| 50 m, touchpads at one end | 44 s | 40 s |
| 50 m, touchpads at both ends | 20 s | 40 s |

Monitoring settings raise warnings. Lap monitoring compares lap times against a preset 10 seconds,
and time-difference monitoring compares touchpad and hand times against a preset 0.30 seconds; both
are on by default. An optional setting, off by default, replaces the touchpad time with the manual
time when they differ by more than 0.500 seconds.[^manual] Times are always computed at full
precision and truncated to the output precision, which defaults to 1/100 second.[^manual] A
Correct Start Time function exists, which the manual says the system does not need but the rules
of World Aquatics, then FINA, require.[^manual]

The start tone is set in the advanced settings. The manual's screen shows a default frequency of
1800 Hz, a speaker length of 20 and a headset length of 50. The screen labels those lengths in
seconds and the text gives tenths of a second, and neither reading suits a start tone; the
[start-systems overview](../starter/index.md#start-tones) compares the settings with field
recordings. A simulator mode produces times without hardware and must be switched off for
competition.[^manual] The separate [SWIM-SIM10](alge-swim-sim10.md) simulates ten lanes on both sides
at the hardware level.[^sim]

Display settings cover ALGE [D-SW boards](../../common/scoreboard/alge-d-sw.md), by lane or by rank
and with reaction and relay times shown or hidden. SwimTime can also drive
[Omega Calypso](../../common/scoreboard/calypso.md) boards through a USB-RS485 adapter and Colorado
boards through a USB-RS232 adapter, and it feeds [D-RTNM](../../common/scoreboard/alge-d-rtnm.md)
matrix boards and network displays.[^manual]

The change log records program limits of 400 touches and 25 km, set in May 2022.[^swimlog]

## Meet-management software

SwimTime exchanges data with meet-management programs by file or over a network share, and ALGE
expects timing and meet management to run on different computers.[^cat2013][^manual]

[Splash Meet Manager](../../../software/splash-meet-manager.md) and other
[LENEX](../../../software/lenex.md) programs use the Splash tab of the network settings. The two
programs pass messages through `splash_send.txt` and `splash_receive.txt` in a shared exchange
folder.[^splash] The operator sends the event structure from Splash, times the heat, ends it in
SwimTime, and pulls the results back.[^quick]

[Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) uses a separate tab, labelled Hy-Tek
Generic File Sharing, with options for importing the start list and writing results automatically
and a choice of two exchange formats.[^manual] The label matches the
[generic network file sharing](../../../software/generic-network-file-sharing.md) interface in
Meet Manager, whose documented option names the ALGE Timy rather than the TM-SWIM. SwimTime reads
Hy-Tek's `generic.sch` schedule and, since April 2025, `.rec` record files.[^swimlog]

Other network settings cover IDCam video backup and the D-RTNM boards.[^manual] Since 2018 SwimTime
has synchronized [IDCam](../../common/photo-finish/alge-idcam.md) units and OPTIc3 cameras.[^swimlog]

## Specifications

This table gives the console's published figures. Where documents differ, each is shown.

| Specification | Value |
|---|---|
| Measuring range | 23 h 59 min 59.9999 s |
| Resolution | 1, 0.1, 0.01, 0.001 or 0.0001 s, selectable |
| Time reference | 10 MHz TCXO |
| Accuracy | ±0.1 ppm at 25 °C; ±2.5 ppm from −25 to 50 °C; ±1 ppm a year ageing |
| Lanes | Up to 16 per side (catalogues); manual's video format numbers lanes 00–12 |
| Channels per terminal | Five: touchpad, three push buttons, relay sensor or block |
| Temperature range | −25 to 50 °C |
| Mains supply | 100–240 V, 50/60 Hz (manual, catalogues); 90–240 V AC (product page) |
| DC supply | 12–18 V, optional |
| Internal battery | 12 V, two 6 V gel cells; about 4 h |
| Power consumption | 60 W maximum |
| PC connection | USB type B |
| Dimensions | 260 × 220 × 140 mm |
| Weight | 3.6 kg |
| Firmware | TMS 25.71 (July 2025) |
| Conformity | CE declaration dated 30 November 2017; ALGE claims World Aquatics, LEN, NCAA, AAU and SSCH compliance |

Sources: manual, 2026 catalogue and product page.[^manual][^cat2026][^product]

## Part numbers and accessories

This section lists the items ALGE names for the system. The product page lists the console with a
case, cable and flash drive; lane equipment is ordered separately.[^product][^sports]

| Item | Part number | Article |
|---|---|---|
| Lane terminal | `SWT3`, with `SWT-END` terminator | [SWT3 swim terminal](../deck-cabling/alge-swt3.md) |
| Lane cable sets | `SWCBL8S`, `SWCBL10S`, `SWCBL10T`; `SWSPA8`, `SWSPA10` | [Cable sets](../deck-cabling/alge-swim-cable-sets.md) |
| Touchpads | `TP2400C`, `TP1890C`, `TP2300C` | [TP touchpads](../touchpad/alge-tp-touchpads.md) |
| Touchpad trolley | `CADDY X` | [CADDY X](../touchpad/alge-caddy-x.md) |
| Push button | `023-02` | [023-02 push button](../semi-automatic/pushbutton/alge-023-02.md) |
| Start unit | `SU3` | [SU3](../starter/alge-su3.md) |
| Electronic start | `E-START` | [E-START](../starter/alge-e-start.md) |
| Start microphone | `SM8` | [SM8](../starter/alge-sm8.md) |
| Start flash | `FLASH XL` | [FLASH XL](../starter/alge-flash-xl.md) |
| Lane speakers | `SPA2`, `SPP2` | [SPA2 and SPP2](../external-speaker/alge-spa2-spp2.md) |
| Headset | `HS4-1` | [HS4 headsets](alge-hs4-1.md) |
| Starting platforms | `SO5`, `SO4` | [SO5](../starting-blocks/alge-so5.md), [SO4](../starting-blocks/alge-so4.md) |
| Relay take-off sensor | `SWR7`, `SWR7M` | [SWR7](../relay-judging/alge-swr7.md) |
| Backstroke start aid | `BSA` | [BSA](../backstroke-start/alge-bsa.md) |
| Protocol printer | `P6-8` | [P6-8](alge-p6-8.md) |
| Simulator | `SWIM-SIM10` | [SWIM-SIM10](alge-swim-sim10.md) |
| Transport box | `TN-SWIM` | [TN-SWIM](alge-tn-swim.md) |
| Numeric display boards | `D-SW` family | [D-SW display boards](../../common/scoreboard/alge-d-sw.md) |

In North America ALGE equipment is sold by ALGE-Swim USA and by [Nevco](../../../vendors/nevco.md).[^usa][^nevco]

## See also

- [SwimTime](../../../software/swimtime.md): the PC software that operates the console
- [Timer S4](alge-timer-s4.md), [SWIM 2000](alge-swim-2000.md) and [SWC](alge-swc.md): earlier ALGE swim timers
- [Timy](alge-timy.md): the ALGE timer used for semi-automatic systems
- [Quantum Aquatics](quantum.md) and [Gen7 Serial Timer](gen7-serial.md): other current consoles with lane bus wiring
- [Timers](index.md): the timing-console overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Swimming Timing System Manual (Version E24-08-29)](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf).
[^product]: [ALGE-Timing, TM-SWIM TimeManager](https://alge-timing.com/en/product/2000/tm-swim) (product page, as of November 2026).
[^sports]: [ALGE-Timing, Swimming](https://alge-timing.com/en/sports/aquatics/swimming) (systems and components, as of November 2026).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).
[^swimlog]: [ALGE-Timing, History file for SwimTime](https://alge-timing.com/alge/download/software/Change_SwimTime.txt).
[^fwlog]: [ALGE-Timing, History file for Time Manager Swim](https://alge-timing.com/alge/download/uC/Change_TMS.txt).
[^swt3]: [ALGE-Timing, SWT3 Swim Terminal](https://alge-timing.com/en/product/2229/swt3).
[^su3]: [ALGE-Timing, SU3 Start Unit](https://alge-timing.com/en/product/2129/su3); Start Unit SU3 manual (Version E-23-11-02).
[^sim]: [ALGE-Timing, SWIM-SIM10](https://alge-timing.com/en/product/2285/swim-sim10).
[^s4]: [ALGE, Swimming System, Timer S4 installation guide](https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf) (Version E-97-03-24, 1997).
[^usa]: [ALGE-Swim USA, Solutions](https://www.alge-swimusa.com/solutions/).
[^nevco]: [Nevco, Aquatic Facility Timing and Scoring Systems](https://nevco.com/products/aquatic-solutions).
[^swim2000]: [ALGE, SWIM2000](https://www.splitsecond.com.au/brochures/swim2000-pe.pdf) (brochure, 2002; Split Second Timing copy).
[^hytek]: [Hy-Tek, ALGE SWIM 2000](https://hytek.active.com/user_guides_html/swmm6/algeswim2000.htm) (Meet Manager guide).
[^relnotes]: [Swim Wiki, Meet Manager: Release Notes](https://wiki.swimrankings.net/index.php/Meet_Manager:Release_Notes).
[^howto]: [Splash Software, Meet Manager 11: How to Start](https://wiki.swimrankings.net/images/8/83/Meet_Manager_How-to-start.pdf) (GeoLogix AG, May 2010).
[^splash]: [Swim Wiki, Meet Manager: Timing System ALGE SwimTime](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_ALGE_SwimTime).
[^quick]: [ALGE-Timing, Splash Meet Manager quick start manual](https://alge-timing.com/downloads/userGuides/Splash%20Quickstart_E.pdf) (June 2025).
