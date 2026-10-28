---
title: ALGE TM-SWIM
description: >-
  The TM-SWIM is the ALGE-Timing swim timing controller, run from the SwimTime PC software,
  which also generates the start tone on the system's lane speakers.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: TM-SWIM
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Type
    value: Swim timing controller, PC-operated
  - label: Software
    value: SwimTime
---

<!--
Research notes, TM-SWIM. Surfaced while measuring the ALGE start tone for the start-systems
overview (October 2026).

Source: ALGE-Timing, Swimming Timing System manual, page 1 marked both Version-E190726 and
Version-E24-08-29, 48 pages (held locally as
vendors/alge-timing/timers-consoles/alge-swimming-timing-system-manual-e24-08-29.pdf; published
at alge-timing.com/downloads/userGuides/Swimming-BE.pdf). Everything below is from that manual
unless marked.

  - Role: the timing-room controller. Lane terminals (SWT3, one per lane, or built into the SO4
    and SO5 blocks) sit on an RS485 bus, one bus for the start end and one for the turn end, and
    the controller counts how many are attached. A PC runs SwimTime over USB.
  - Start: the SU3 start unit, an e-Start or a FLASH XL hangs off the controller on cable 199-20
    or the KT199Z10 reel. Active lane speakers (SPA2) daisy-chain from it on cable 201-07, one
    behind every odd lane, each feeding a passive SPP2 behind the next even lane. Speech from the
    starter goes out over the same speakers.
  - Start tone: SwimTime's advanced settings set the tone frequency, its length on the SPA/SPP
    speakers and a separate length for the headset. The settings screenshot (p26) shows defaults
    of 1800 Hz, 20 and 50. The dialog labels both lengths in seconds and the text says tenths of
    a second; neither reading suits a start tone, and hundredths (0.20 s speaker, 0.50 s
    headset) is the reading that fits field recordings. Unresolved; flagged on the overview.
  - Timebase: temperature-compensated 10 MHz crystal; ±2.5 ppm over -25 to 50 °C, ±1 ppm a year
    ageing, calibrated to ±0.1 ppm at 25 °C. Resolution selectable from 1 s down to 0.0001 s.
    Range just under 24 hours.
  - Power: internal 12 V lead battery, mains 100–240 V, optional 12–18 V DC.
  - Interfaces: four RS232 (PC, display board, printer or results software, video) and three
    RS485 (two timing buses, one display). Front-panel speech, line-test and manual start
    controls; headset, audio in/out and microphone regulators.
  - Software links named: HyTek Meet Manager, Splash and other LENEX programs, IDCam video
    backup, D-RTNM displays, Omega Calypso boards (via USB-RS485) and Colorado boards (via
    USB-RS232).
  - Default limit settings: touchpad lockout after start 10 s, lockout after a touch 10 s, lap
    and hand-time monitoring on.
  - Declaration of conformity dated 30 November 2017 lists the TM-SWIM with SWT3, SU3, E-START,
    TP2400C, TP1890C, SPA(2), SPP(2) and D-nxSWx.

Predecessor, inferred only: a 1997 ALGE installation guide (version E-97-03-24, held as
alge-s4-swimming-system-installation-e97-03-24.pdf) describes the older Timer S4 with an S4-SWIM
lane box and a Start Acoustic SA1 driving up to four horns. Nothing found says the TM-SWIM
replaced it directly.

Still to research: introduction date, price, the relationship to the SWIM 2000 and Timy that
Hy-Tek lists, and which US pools run it.
-->

This article is a stub. The `TM-SWIM` is the ALGE-Timing swim timing controller: it is run from
the SwimTime software on a PC, collects lane-terminal and touchpad impulses, and sounds the start
tone over the lane speakers at a frequency and length set in that software.

See the [timers overview](index.md) for the shared background that applies to every timing
console, and the [start-systems overview](../starter/index.md#start-tones) for the measured ALGE
start tone.
