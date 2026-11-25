---
title: ALGE WTN-DB display-board receiver
description: >-
  The WTN-DB is the ALGE-Timing WTN radio receiver that clips to an ALGE display board, takes its
  power from it and feeds it data sent over the network.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: WTN-DB
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`WTN-DB`'
  - label: Type
    value: 'Display-board radio receiver'
  - label: Connection
    value: '4-pin Amphenol plug to the board; [WTN](equipment/swimming/accessories/alge-wtn.md) radio, 2.4 GHz'
  - label: Dimensions
    value: '145 × 90 × 75 mm'
  - label: Weight
    value: '198 g'
  - label: Power
    value: 'From the display board, 5–24 VDC (24 mA at 12 V)'
  - label: Status
    value: 'Current'
---

<!--
Research notes, ALGE WTN-DB. Surfaced 2026-11-23 while building out alge-wtn.md.

- ALGE-Timing, Wireless Timing Network for Display Boards manual, Version E23-11-02 (held,
  scoreboards-displays/alge-wtn-db-manual-e23-11-02; https://alge-timing.com/downloads/userGuides/WTN-DB-BE.pdf):
  16-position rotary team switch (15 teams; position 0 a test mode that shows data on the board
  and on a WTN set to team 1S); plugs into the board's 4-pin Amphenol socket and clips to its
  case, mounted with the switch side downward because that side is not sealed; powered and
  switched on by the board, no battery; LED green, orange or red for link quality; baud rate
  (2400-19200, factory 2400) and power (factory 10 mW) can only be changed from another WTN device
  in the same team; firmware arrives by radio from a WTN unit; 2.4 GHz, 16 frequencies,
  10-100 mW, about 350 m; 24 mA at 12 V, 5-24 VDC. The update section names the WTN-WS where it
  means the WTN-DB, and the power section writes 100 W for 100 mW. Verified.
- ALGE-Timing product page (https://alge-timing.com/en/product/1980/wtn-db, read 2026-11-23):
  15 teams, 350 m, can relay as a hub, external battery through cable 292-05, waterproof case
  with clamp, 145 x 90 x 75 mm, 198 g; accessories D-LINE, multisport board, WTN, WTN-WS, WTN set.
  Verified. The held WTN-DB leaflet (catalogs-brochures/alge-wtn-db-leaflet) agrees.
- D-LINE/D-SAT manual E240226: cable 324-1.5 feeds a power bank plus a WTN-DB from the board's
  Amphenol socket. 2017 catalogue pp. 36 and 84; 2026 catalogue p. 3 (WTN-DB at the D-LINE in the
  radio semi-automatic swimming system). Verified.
- Firmware history: WTN-DB LED behaviour changed in 13.71 (July 2013) and 14.22 (February 2014).
Not established: introduction date; use with boards from other makers.
-->

This article is a stub. The `WTN-DB` is an [ALGE-Timing](../../../vendors/alge-timing.md)
receiver that clips to an ALGE display board such as the [D-LINE](../scoreboard/alge-d-line.md),
draws its power from the board, and passes on the data a timer sends over the
[WTN](../../swimming/accessories/alge-wtn.md) radio network.

See the [scoreboard control overview](index.md) for the shared background on scoreboard control.
