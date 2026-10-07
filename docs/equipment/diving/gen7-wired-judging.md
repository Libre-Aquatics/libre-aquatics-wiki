---
title: Colorado Time Systems Gen7 wired judging
description: >-
  Gen7 wired judging is the Colorado Time Systems diving and artistic swimming judging
  system of cabled terminals, breakout boxes and a USB interface hub, released in 2016.
tags:
  - Equipment
  - Diving
  - Artistic swimming
  - Scoring
infoboxTitle: Gen7 wired judging
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`JT-01`, `CB-01`, `IH-01`; systems `JSYS-3` to `JSYS-15`'
  - label: Type
    value: Wired judging system
  - label: Connection
    value: 4-pin RS-485 cabling; USB from the interface hub to the computer
  - label: Power
    value: 12 V DC, 1 A maximum, or USB alone
  - label: Introduced
    value: '2016'
  - label: Manual
    value: '[Diving Installation and User Guide (F1022 Rev 202510)](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Gen7%20Diving/Gen7Diving_F1022.pdf)'
---

<!--
Research notes, CTS Gen7 wired judging (Gen7 Diving hardware).

Surfaced while building out wireless-judging.md: CTS developed it after World Aquatics (then
FINA) and USA Diving asked for wired terminals at elite events.

Held and read for that article, not yet mined for this one:
  - timers-consoles/cts-diving-installation-and-user-guide-f1022: F1022 Rev 202510, (c)2025,
    42 pp. Product identification names "Wired Judging", models JT-01 (judges' terminal),
    CB-01 (cable breakout box) and IH-01 (interface hub). Power: 12 V DC, system maximum 1 A,
    or 0.5 A from USB alone, which cannot run the terminal backlights; JT-01 25 mA with
    backlight; IH-01 75 mA (50 mA on USB). A listed Class 2 / LPS supply ships with each
    IH-01. Rated below 2000 m. Topology: computer -> IH-01 by USB -> CB-01 by 4-pin RS-485 ->
    JT-01s; CB-01s chain so a panel can be split across the pool; the IH-01's RS-485 ports
    also feed numeric scoreboards (cable R-015-674-xx, e.g. Otter diving boards) and, under
    licence, a legacy RS-232 scoreboard. AC power needed for backlights, scoreboard output and
    runs over 100 ft (30 m). Simultaneous events from separate laptops on one bus in a
    multi-system mode; an 11-judge split panel for synchronized diving. Software is Gen7
    Diving or Gen7 Artistic Swimming.
  - software/cts-gen7-diving-lightning: Gen7 Diving datasheet, pages REV 08/23 (page 3 reads
    REV 04/41, a typo in the PDF). Systems JSYS-3, -5, -7, -11 and -15 by judge count; the 11
    and 15 add synchronized diving and the 15 adds simultaneous events (the F1022 text speaks
    of up to four concurrent events, which needs reconciling). CTS claims compliance with World
    Aquatics and USA Diving requirements; terminals have a request-change key and show the
    diver's name, team, finalised scores of other judges, dive and DD. Software compatible with
    DiveMeets, ieDive and OmadaTrak, per CTS.
  - CTS product page "Gen7 Diving Equipment" (https://coloradotime.com/products/gen7-diving-equipment,
    October 2026): same feature list, events used at.

Press (CTS releases republished by SwimSwam):
  - 10 June 2015, https://swimswam.com/usa-diving-reacts-to-sneak-peek-of-colorado-time-systemsnext-generation-diving-equipment/
    CTS previewed wired terminals at the USA Diving synchronized nationals and the FINA Puerto
    Rico Grand Prix after FINA and USA Diving asked for wired terminals; release later in 2015
    was planned. Quotes USA Diving's then president and CEO Linda Paul on judges seeing dive
    information on the terminal.
  - 25 May 2016, https://swimswam.com/colorado-time-systems-releases-next-generation-diving-equipment/
    release announced; used at USA Diving winter and synchronized nationals, the UANA Puerto
    Rico Grand Prix, Big Ten and NCAA championships; planned for the 2016 Olympic trials in
    Indianapolis. Rules supported: FINA including mixed synchro, USA Diving, NCAA, high school
    including CIF springboard.

Still to research: prices, cable part numbers in full, Gen7 Artistic Swimming software, which
FINA rule or circular asked for wired terminals (none found), and whether the Gen7 timing
console runs the same software.
-->

This article is a stub. Colorado Time Systems Gen7 wired judging connects one `JT-01` terminal
per judge through `CB-01` breakout boxes to an `IH-01` interface hub on a computer running Gen7
Diving or Gen7 Artistic Swimming. CTS released it in 2016, saying it was built because World
Aquatics (then FINA) and USA Diving had asked for wired terminals at elite events.

See the [diving equipment overview](index.md) for the shared background, and
[wireless judging](wireless-judging.md) for the radio system it replaced at those events.
