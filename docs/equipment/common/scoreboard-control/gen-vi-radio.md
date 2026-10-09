---
title: Daktronics Gen VI radio
description: >-
  Gen VI is the sixth generation of the Daktronics radio link between All Sport and
  OmniSport consoles and the receivers inside scoreboards and portable clocks.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: Gen VI radio
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: Wireless scoreboard control link
  - label: Manual
    value: '[DD2362277](https://www.daktronics.com/web-documents/customer-service-manuals/dd2362277.pdf)'
---

<!--
Research notes, Daktronics Gen VI radio. Surfaced while building out pc-2001.md (October 2026).

  - Daktronics, Gen VI Radio Installation Manual (P1110, DD2362277 Rev 07, 2 September 2021,
    copyright 2015-2021), held at sources/vendors/daktronics/accessories/. Receivers carry a
    channel switch (1-8) and a broadcast group switch (1-8; 1-4 on units sold in Europe and
    Asia). A receiver accepts data on its own channel, on its group's broadcast channel, and on
    the master broadcast (B0 C00). Drawings cover indoor and outdoor boards; indoor boards
    built after March 2013 need an extra radio installation drawing.
  - Daktronics, All Sport 5000 Series Control Console Operation Manual (ED-11976 Rev 32,
    4 November 2024), held at sources/vendors/daktronics/timers-consoles/: the console
    detects a fitted transmitter and asks for broadcast group and channel when a sport code is
    entered; Gen V receivers have broadcast groups 1-4, Gen VI 1-8; channel selection drawings
    exist for Gen IV and Gen VI.
  - Daktronics, All Sport & OmniSport Revision Histories (DD3679410 Rev 06, 2024): All Sport
    1600 version 2.0.0 (January 2003) let the operator pick the group and channel of Gen 4 radios;
    an earlier release, 1.2.3 of September 2001, had extended radio channels to 75.
  - Daktronics, PC-2001 manual (ED-13737 Rev 09, 2023) and PC-2002 manual (ED-14253 Rev 06,
    2021): the clocks take an internal Gen VI receiver through a 5-pin to 6-pin adapter
    (W-2913) on the J2 radio jack, and show "b1 C1" style settings at power-up.
  - Daktronics, PC-2001 Product Specifications (SL-05394, January 2013): lists 2.4 GHz
    spread spectrum radio control (SL-04370) as an option. Whether that sheet describes Gen VI
    or an earlier generation is not confirmed; SL-04370 was not found.
  - Daktronics KB 000009252 and DD3101711 (search results only): install steps for Gen V and
    Gen VI receivers; mixing Gen V and Gen VI equipment is not recommended.
Still to research: frequency band and range for each generation, introduction dates of Gen IV,
V and VI, and the transmitter part numbers.
-->

This article is a stub. Gen VI is the sixth generation of the Daktronics radio system that
links an All Sport or OmniSport 2000 console fitted with a transmitter to receivers mounted
inside scoreboards and portable displays such as the [PC-2001](../pace-clock/pc-2001.md), with
each receiver set to one of eight channels and one of eight broadcast groups.

See the [scoreboard control overview](index.md) for the shared background on scoreboard links.
