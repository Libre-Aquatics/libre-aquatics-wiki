---
title: ALGE SWIM 2000
description: >-
  The SWIM 2000 is an ALGE-Timing PC-based swimming timing system for up to 12 lanes, built around
  the SWC controller, which Hy-Tek and Splash list among their console interfaces.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SWIM 2000
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Type
    value: 'PC-based swimming timing system'
  - label: Lanes
    value: 'Up to 12'
  - label: Connection
    value: 'Serial, from the Printer 2 port'
  - label: Status
    value: 'Documented 2002; discontinued, dates not established'
---

<!--
Research notes, ALGE SWIM 2000.

Surfaced 2026-11-04 while building out alge-tm-swim.md. Already named as a Hy-Tek interface on alge-timing.md.

Hy-Tek's guide: the meet computer takes a cable supplied by ALGE into the Printer 2 port; Meet
Manager stores times in the background and writes a race when the operator presses End on the
"ALGE SWIM 2000 PC" computer or selects a new race. That wording suggests the SWIM 2000 also had
a PC front end. It sits in Hy-Tek's group of consoles that take no event download. Daktronics
quick guide ED-13876 (2013) shows ALGE SWIM 2000 in the Meet Manager timer list.

Splash: How to Start guide of May 2010 lists ALGE Swim2000 and S4; the October 2011 FAQ lists both
as one-way interfaces, with SwimTime two-way. The Splash wiki's SwimTime screen images are filed as
MM_AlgeSW2000_*, which hints SwimTime grew out of SWIM 2000 software. Inferred only.

Unknown: dates, hardware, lane count, relationship to the SWC and to the TM-SWIM. No manual held.

Sources:
  - Hy-Tek, ALGE SWIM 2000 (hytek.active.com/user_guides_html/swmm6/algeswim2000.htm)
  - Splash Software, Meet Manager 11: How to Start (May 2010) and FAQ (October 2011), as recorded on splash-meet-manager.md
  - Swim Wiki, Meet Manager: Timing System ALGE SwimTime

Second pass, 2026-11-07 (while adding sources to alge-timer-s4.md):
  - ALGE, SWIM2000 brochure (4 pp., PDF created 6 May 2002) and SWIM2000 Architectural Guidelines
    (Version E-02-01-24, 19 pp.), both hosted by Split Second Timing Pty Ltd (ALGE Australia) and
    filed under sources/vendors/alge-timing/. Read in full. The SWC is the "SWIM CONTROLLER" of the
    SWIM 2000 system: it stores all data in flash, has galvanically isolated interfaces, an audio
    section and synchronous I/O; TCXO 10.000 MHz, +/-2.5 ppm from -25 to 50 C, +/-1 ppm a year,
    adjusted to +/-0.1 ppm at 25 C; range 23:59:59.9999; internal 12 V gel cell (brochure: 4 h
    without the PC), mains 100-240 V or 12-18 V DC; four RS232 ports (PC 9600, display board 2400,
    protocol printer 2400, video 9600) and three RS485 (start-side and turn-side timing buses,
    display board); sockets for two printers, TV-online, the SU start unit, two active speakers,
    headset, audio in and out. SWT terminals chain on one cable to an SWT-END; each takes a
    touchpad, up to three 023-02 push buttons and an SO 2 block or SWR 2 relay pad, so 5 channels
    per lane per side; up to 12 lanes. PC software for Windows 95 to XP, with ALGE's own meet
    manager and LENEX transfer. ALGE calls it its first timing system that works over a network
    with meet-management software (vendor claim). No mention of the Timer S4.
  - Split Second Timing Australia swimming page (splitsecond.com.au/swimming.htm, undated, Windows
    95/98/NT4 era): SWIM 2000 = SWC + SWT + SO2 + touchpads + SAT hand switches + P5 printer + SPA +
    SU + Q34 headset + GAZ4 or LED boards + SWIMSOFT; connects to Hy-Tek Meet Manager; first
    Australian installations at Warringah Aquatic Centre, Dubbo RSL Club and Belconnen.
  So the SWC and the SWIM 2000 are not two names for one device: the SWC is the controller at the
  heart of the SWIM 2000 system. That the TM-SWIM succeeded the SWC follows from the TM-SWIM page's
  "old SWC" warning and the shared SWT bus design; inferred.
  Not stubbed: SO 2, SWR 2, SU, GAZ4, SWIMSOFT and Split Second Timing Pty Ltd are named only in
  these research notes, not in any article body.
  Sources:
    - ALGE, SWIM2000 (https://www.splitsecond.com.au/brochures/swim2000-pe.pdf)
    - ALGE, SWIM2000 Architectural Guidelines, Version E-02-01-24 (https://www.splitsecond.com.au/manuals/swim2000-be-architectural.pdf)
    - Split Second Timing Australia, Swimming (https://www.splitsecond.com.au/swimming.htm)
-->

This article is a stub. The SWIM 2000 is an [ALGE-Timing](../../../vendors/alge-timing.md)
PC-based swimming system for up to 12 lanes, documented by 2002, in which an [SWC](alge-swc.md)
controller collects impulses from chained lane terminals and connects to
[Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) by a serial cable from its Printer 2
port.

See the [timers overview](index.md) for the shared background that applies to every timing
console, and the [TM-SWIM](alge-tm-swim.md) for the current ALGE console.
