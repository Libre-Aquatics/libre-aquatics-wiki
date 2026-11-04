---
title: SST timer
description: >-
  The SST timer is the USB timing box from Superior Swim Timing that measures race times for the
  SST timing software.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SST timer
infobox:
  - label: Manufacturer
    value: Superior Swim Timing
  - label: Type
    value: USB swim timing box
  - label: Lanes
    value: Up to 10
  - label: Power
    value: USB, 5 V, 500 mA maximum, 7 mA typical
  - label: Status
    value: Current
  - label: Source
    value: '[Superior Swim Timing, SST Timer](https://superiorswimtiming.com/pad-interface/)'
---

<!--
Research notes, SST timer. Surfaced 2026-11-03 while writing software/sst-timing-software.md.

Sources: SST Operation Manual, current edition (pp. 11-14, 69-73); 2019 SST Operation Manual
(pp. 11-12, 42); superiorswimtiming.com pad-interface and pricing pages, read 2026-11-03.

Variants, all verified in the manuals:
- Single timing cable or box: one A1 connector. No longer sold, still supported.
- Three-connector box: A1, A2, B. No longer sold, still supported. With a second A harness on A2
  the two ends must share one lane map. The 2019 manual marks it as discontinued already.
- Four-connector box: Near A, Near B, Far A, Far B. SST or CTS harnesses. Current.
- Daktronics box, first generation: Near and Far Daktronics connectors plus A1, A2, B.
- Daktronics box, current: as the four-connector box, plus near and far Daktronics harness
  connections and a start input. Needs an SST power supply for the deck cable.
Prime is the pad or first button; B carries buttons 2 and 3. RJP can be set on backup inputs.
Current boxes have a scoreboard output on a 1/4 inch connector; older firmware fixes it at
9600/8/E/1. Earlier boxes need the separate USB-to-serial adapter.

History, from archived vendor pages: sold from at least May 2012 as the SST-PI or SST Pad
Interface, $999, the electronics in a cable (a Centronics timing cable for Colorado harnesses). 44
software-assignable inputs, 42 for lanes plus START and BACKUP START. 2013: +/-2 PPM reference with 1
PPM a year aging; a 50-pin SCSI-1 cable could tie it to the pass-through port of a Colorado 5 or 6 as
backup. Spare cable $300 and Daktronics cable $450 in 2013; timing box with software $1,499 in 2014.
The PPM figure is on the 2013 page only; the current pad-interface page has none.

Specifications: 0-40 °C operating; virtual serial port; locking USB connector released by
squeezing the sides; not waterproof, so it stays on the table. The vendor says it has a timing
chip and microcontroller, no batteries, and nothing to replace. Clock accuracy is not stated.
Pre-Windows 10 needs the sst.inf driver. Windows 10 installs one from the internet on first use.
Pricing page, 2026: spare box $750 (SST/CTS) or $800 (with Daktronics); console with case $1,850
or $2,499; waterproof timer case $60. Dimensions, weight and connector types are not published.
The site also says Omega pads and buttons work. The pinout has not been documented.
-->

This article is a stub. The SST timer, first sold as the `SST-PI`, is a USB box from
[Superior Swim Timing](../../../vendors/superior-swim-timing.md), made in versions for
SST and Colorado harnesses or with added Daktronics connections, that measures race times for the
[SST timing software](../../../software/sst-timing-software.md).

See the [timers overview](index.md) for the shared background that applies to every timing console.
