---
title: ALGE SWC controller
description: >-
  The SWC (SWIM Controller) is the ALGE-Timing controller of the SWIM 2000 swimming system,
  documented in 2002 and called old on the TM-SWIM product page.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SWC
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Type
    value: 'Swim timing controller'
  - label: Status
    value: 'Discontinued; called old by ALGE'
---

<!--
Research notes, ALGE SWC controller.

Surfaced 2026-11-04 while building out alge-tm-swim.md.

The single trace is the firmware entry on the TM-SWIM product page: the TMS firmware is for the
new TimeManager for swimming and must not go on "the old SWC". That shows an SWC exists and that
it is a controller close enough to the TM-SWIM to be confused with it at firmware-update time.
Anything beyond the name is inference.

Unknown: what SWC stands for (swim controller is a guess), dates, whether it is the SWIM 2000
under another name. A search for an SWC manual found nothing. This is the document to ask for.

Sources:
  - ALGE-Timing product page (alge-timing.com/en/product/2000/tm-swim, read 2026-11-04)

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

This article is a stub. The SWC, which ALGE calls the SWIM Controller, is the
[ALGE-Timing](../../../vendors/alge-timing.md) controller of the [SWIM 2000](alge-swim-2000.md)
system, collecting impulses from lane terminals on two bus lines, and the
[TM-SWIM](alge-tm-swim.md) product page warns that it must not receive TM-SWIM firmware.

See the [timers overview](index.md) for the shared background that applies to every timing
console.
