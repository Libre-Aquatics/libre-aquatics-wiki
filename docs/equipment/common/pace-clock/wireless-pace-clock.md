---
title: Colorado Time Systems wireless pace clocks
description: >-
  Colorado Time Systems wireless pace clocks and shot clocks are 900 MHz digital clocks that
  run from a CTS timer, a pace clock controller or another clock without a data cable.
tags:
  - Equipment
  - Timing
  - Swimming
  - Water polo
infoboxTitle: Wireless pace clocks
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Type
    value: 900 MHz wireless pace clock and shot clock
  - label: Models
    value: Wireless Pro; Wireless Portable; Wireless Standard
  - label: Manual
    value: Wireless Pro Pace Clock and Shot Clock User Guide (F904); Wireless Portable and Standard Pace Clock and Shot Clock User Guide (F910)
---

<!--
Research notes, CTS wireless pace clocks and shot clocks.

Surfaced while building out the Sky-Fi WA-1 page: the WA-1 transmits straight to these clocks,
and they share its eight 900 MHz channels and its antenna. One page covers the family for now,
as the WA-1 and judging guides refer to them as a group.

Held, not yet read end to end (all under
sources/vendors/colorado-time-systems/pace-clocks/):
  - F904 Rev. 1106 and Rev. 202507, Wireless Pro Pace Clock and Shot Clock User Guide. One
    front-panel switch steps through intensity, channel and mode in turn; a Scoreboard/Training
    switch makes one clock the lead in training. With a CTS timer, shot time comes from
    scoreboard channel 02 on module 03 (mode 3), game time channel 01 on module 01 (mode 1),
    timeout time channel 12 on module 05 (mode 5), team scores channel 5 on module 0D (mode
    12), time of day channel 10 on module 16 (mode 16). Internal battery, at least 6 hours;
    29 lb (13.2 kg) for wall mounting; UL863, CSA C22.2 No. 207. The 2025 edition says the
    clock contains FCC ID Q7V-3F090003X (Linx Technologies Wi.232DTS module), with
    OJMTRM900TTA and Anatel 3069-12-8396 for Brazil.
  - F910 Rev. 202008, Wireless Portable and Standard Pace Clock and Shot Clock User Guide. A
    dial instead of the switches: Water Polo or Pace Clock Lead fixes high intensity and
    channel 4, Pace Clock Follow fixes low intensity and channel 2. Battery optional. Same
    FCC ID text. A wired timer or controller connection uses a round 4-pin RS-485 or a 1/4 in
    phone (RS-232) cable.
  - F917 (202110), wireless upgrade kit K-PCW-1 for an existing pace clock: wireless PCB module
    R-0066-5210, 18 in coax R-015-638, antenna R-905-001, water shield R-085-039, FCC label
    R-012-467.
  - F941 Rev. 20110720 (900 MHz wireless judging): channels 1-8 are shared with CTS wireless
    pace clocks and WA-1 adapters.
  - CTS shop: antenna R-905-001 fits the wireless pace clocks other than the Slim Pace Clock,
    and the WA-1; $30.00 (September 2026).

Still to research: model part numbers, digit sizes, dates of introduction, which models are
still sold, whether any 2.4 GHz versions exist besides the Slim Pace Clock and deck clock, and
how the overview at index.md should divide wired and wireless clocks.
-->

This article is a stub. Colorado Time Systems wireless pace clocks and shot clocks, documented
in the Wireless Pro (F904) and Wireless Portable and Standard (F910) guides, carry a 900 MHz
radio that takes data from a CTS timer through a [Sky-Fi WA-1](../scoreboard-control/wa-1.md)
adapter or from a lead clock, so they can run without a data cable.

See the [pace clocks overview](index.md) for the shared background that applies to every CTS
pace clock.
