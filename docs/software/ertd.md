---
title: ERTD
description: >-
  ERTD, Daktronics' Enhanced RTD, is a real-time data format for alphanumeric scoreboards that
  Swiss Timing's ARES 21 and Quantum timers can send.
tags:
  - Software
  - Timing
---

<!--
Research notes, ERTD. Surfaced while building out ares-21.md (October 2026).

  - Daktronics, All Sport 5000 Series Control Console Operation Manual (ED-11976): the console
    uses "Enhanced RTD" with Venus 4600 and 7000 codes, alongside plain Venus 1500 RTD codes.
    RTD here is Daktronics' real-time data input to its Venus display software. That ERTD
    expands to Enhanced RTD is inferred from this pairing; no source spells out the acronym.
  - Swiss Timing, Concept ARES 21 Swimming User's Manual (3330.560.02, v3.30, April 2008): ERTD
    is one of two ARES Swimming scoreboard types, written for Daktronics boards running Venus;
    start lists are sent when each race is opened, and SCB-On and SCB-Off commands refresh the
    board. With Hy-Tek Meet Manager on the GP port, ARES passes Meet Manager's start lists,
    finish lists and scores to its scoreboard port in ERTD mode.
  - Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, v1.4, October 2019): "SCB ERTD" is
    an alphanumeric 12 x 32 character feed in the ERTD protocol, each line placed at a
    100-character offset (line 1 at offset 1, line 2 at 101, and so on).

Still to research: the Daktronics specification itself; the baud rate and framing; which
other timers emit it.
-->

This article is a stub. ERTD, which Daktronics pairs with its Venus 4600 and 7000 software as
Enhanced RTD, is a real-time data format for alphanumeric scoreboards, and both the Swiss Timing
[ARES 21](../equipment/swimming/timers/ares-21.md) and
[Quantum Aquatics](../equipment/swimming/timers/quantum.md) can send a twelve-line feed in it.

See the [software overview](index.md) for the other programs the wiki covers.
