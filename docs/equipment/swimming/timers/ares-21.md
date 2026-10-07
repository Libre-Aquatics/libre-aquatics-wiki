---
title: Swiss Timing ARES 21
description: >-
  ARES 21 is the Swiss Timing swim timing system of the 2000s, an IF-ARES interface box
  run from a PC over RS-232, which Quantum Aquatics replaced.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: ARES 21
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Type
    value: Swim timing console
  - label: Connection
    value: RS-232 from the IF-ARES to the PC
  - label: Succeeded by
    value: '[Quantum Aquatics](equipment/swimming/timers/quantum.md)'
  - label: Manual
    value: Concept ARES 21 Swimming User's Manual (3330.560.02, version 3.30, April 2008)
---

<!--
Research notes, ARES 21.

Surfaced while building out quantum.md; already named on the StartTime II and III pages and on
the Splash Meet Manager page.

Held: sources/vendors/swiss-timing/timers-consoles/swiss-timing-ares-21-concept-swimming-user-manual-3330.560.02
(filed October 2026; Swiss Timing's PDF, but obtained from a Canadian club's GoMotion site,
https://www.gomotionapp.com/canrhac/UserFiles/Image/QuickUpload/ares---swimming-eng-3330-560-02_091888.pdf,
not from swisstiming.com). Version 3.30, April 2008, written against ARES Swimming software
2.04, with data-handling options from 2.15. Read in full. Facts:
  - ARES expands to Advanced Results Entry Station in Swiss Timing's own history (search
    result, not read on a Swiss Timing page; check).
  - The IF-ARES interface box connects to the PC by RS-232; the PC program loads a "module"
    into the IF-ARES (a red LED blinks when the swimming module is running). Module software
    was downloadable from swisstiming.com.
  - Synchronisation direct, on the start input, or on a synch input; once only per power-on.
  - Pool configuration: which harnesses on which side, which on the near-end HA1 input, finish
    side, module order and lane order (e.g. a 10-lane pool run as eight central lanes). Each
    lane: touchpad, platform and backup buttons; with three buttons the middle time is the
    official backup, per FINA.
  - Data held in a folder per day; tables for competitors and records with three record levels.
  - Results to HTML or text, to an ARES-Print program over DDE, or to a micro printer on the
    IF-ARES.
  - Scoreboard port with 20 mA and optional RS485 outputs, for Galactica boards or ERTD mode
    (written for Daktronics boards running Venus software).
  - Data handling through a second PC COM port or the IF-ARES GP port via an RS485-RS232
    converter: OSM6 at 9600 7E1, or bi-directional at 9600 8N1. With Hy-Tek Meet Manager on the
    GP port, start lists and scores can be relayed to the scoreboard in ERTD mode.
Other: Hy-Tek supports "Omega ARES21 Bi-Directional" at 9600 8N1
(support.activenetwork.com, Interface with Ares 21). Splash Meet Manager's 2010 list and a
January 2016 release note cover ARES 21. The Quantum-Swimming manual calls its Lst text files
the ARES file type. StartTime IV and the Calypso boards name ARES among their timers.

Still to research: introduction and withdrawal dates, the IF-ARES hardware and part numbers, the
meaning of "21", and the Olympic Games it served.
-->

This article is a stub. ARES 21 is a Swiss Timing swim timing system in which an IF-ARES
interface box collects the pool contacts and a PC running ARES Swimming, linked to it over
RS-232, runs the races, scoreboards and data handling; the 2008 manual documents it.

It was succeeded by [Quantum Aquatics](quantum.md); see the [timers overview](index.md) for the
shared background.
