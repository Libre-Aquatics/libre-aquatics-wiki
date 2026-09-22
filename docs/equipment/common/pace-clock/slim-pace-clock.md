---
title: Colorado Time Systems Slim Pace Clock
description: >-
  The slim pace clocks are Colorado Time Systems wall-mounted LED clocks in four- and
  six-digit forms, driven wirelessly or run as synchronized time-of-day clocks.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Slim Pace Clock
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`MS-0037`–`MS-0040`; datasheet `SP-1400`/`SP-1401` (4-digit), `SP-1600`/`SP-1601` (6-digit)'
  - label: Type
    value: Wall-mounted LED pace clock
  - label: Digits
    value: 13 in, red or amber; four or six
  - label: Wireless
    value: 2.4 GHz; channel 0–11, PAN ID 0–15, module address 1–6
  - label: Power
    value: 150 W supply, 100–240 V, 50/60 Hz, max 2 A
  - label: Status
    value: Current
  - label: Manual
    value: Slim Pace Clock User Guide (F972 Rev. 202509)
    href: 'https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/Slim_Pace_Clock_User_Guide_F972.pdf'
---

<!--
Research notes, slim pace clocks.

Surfaced while building out the handheld segment timer, which names these as the displays it
drives. Two held sources, and they disagree.

F972, Slim Pace Clock User Guide, Rev. 202509, ©2025, under
sources/vendors/colorado-time-systems/pace-clocks/. Product identification gives the product
as Slim Pace Clocks and the model numbers as MS-0037 through MS-0040, which puts them in the
multisport MS- family that the WA-3 guide F1045 defines. Covers physical and electrical
installation including a hard-wired option, the power-on routine, leader and follower
synchronization, a nine-item push-button menu, the three data sources, and the DIP
alternative to the menu.

The datasheet cts-slim-pace-clocks-sp-1400-sp-1601.txt, Rev 03/14, is eleven years older and
uses a different numbering scheme entirely: SP-1400 and SP-1401 for the four-digit clock in
red and amber, SP-1600 and SP-1601 for the six-digit. Note the filename names only two of the
four. It is the only source for the overall dimensions and the digit size.

The weight discrepancy, which is real and unresolved. The 2014 datasheet gives 15 lb (6.8 kg)
for the four-digit clock and 20 lb (9.1 kg) for the six-digit. F972 gives 20 lb (9 kg) and
28 lb (12.7 kg) for the same two. Both figures cannot describe the same hardware, so either
the enclosure changed between 2014 and 2025 or one document is wrong. No held source
reconciles them, and the datasheet's own dimensions (1.6 ft x 3.52 ft x 2.8 in for the
four-digit, 1.6 ft x 5.25 ft x 2.8 in for the six-digit) are not repeated in F972, so they
cannot be checked against each other either. Prefer F972 as the current and more specific
document, and say both.

Operation, from F972. Clocks on the same channel and PAN synchronize their time of day
automatically, through a leader and follower arrangement: exactly one clock is designated
leader and holds the time, the rest are followers, and setting the time on the leader pushes
it out. Setting more than one leader breaks the followers. Followers do not get the 12/24
hour and hour and minute menus at all. Leaving the menu zeroes the seconds, so the whole
group restarts from the top of a minute, and a follower may need up to sixty seconds before
it agrees with its leader.

The push-button menu runs nine items: leader or follower; 12 or 24 hour; hours; minutes;
time shifting; digit intensity; channel; PAN; module address. Time shifting is the
four-digit clock's choice between hours and minutes and minutes and seconds, and F972 notes
it is impractical on a six-digit clock. Intensity steps low, medium, high, and an ambient
light setting. Factory defaults are channel 4, PAN 0, module address 1. Channel and PAN can
also be set on switch bank S2 of the control board; F972 says switches 1-5 of S1 do nothing
on these clocks, which is where they differ from the deck clock, whose module address lives
there.

Err1 at power-up means the control board's CR1632 coin cell is low, CTS part R-420-014.

Data sources named at power-on: the WTTC-1 tabletop controller, the WHC-1 handheld
controller, the WHC-2 segment timer, and a CTS console (System 6, System 5 or System 4000).
This is the only held document besides F1050 that prints WHC-2, and it is what establishes
that the System 4000 could still drive current equipment.

The radio is the same certified module as the segment timer, the WHC-1 and the WA-3: FCC ID
OUR-XBEEPRO or MCQ-XBEE3, IC 4214-XBEEPRO or 1846A-XBEE3. High-gain flush-mount patch
antenna on an LED digit, behind the Lexan cover.

Still to research: whether the MS- and SP- numbers map one to one and which four MS- numbers
correspond to which colour and digit count; the date the numbering changed; what a slim pace
clock costs; the operating range; whether the 2.4 GHz clocks ever coexisted with the 900 MHz
pro pace clocks in one facility; and the wireless upgrade kit K-PCW-1 (F917), which belongs
to the other line and has no page.
-->

This article is a stub. The slim pace clocks are Colorado Time Systems wall-mounted LED
clocks with 13 in digits, sold in four- and six-digit forms under model numbers `MS-0037`
through `MS-0040`, which an older datasheet numbers `SP-1400` and `SP-1401` for the
four-digit clock and `SP-1600` and `SP-1601` for the six-digit.

Left alone they show the time of day and keep themselves in step over the air; fed by a
[handheld segment timer](whc-2.md) they run a workout, and fed by the
[WTTC-1](../scoreboard-control/wttc-1.md) or [WHC-1](../scoreboard-control/whc-1.md) they
show game time. See the [pace clocks overview](index.md) for the shared background.
