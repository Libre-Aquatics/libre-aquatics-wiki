---
title: Swiss Timing INT131 converter
description: >-
  The INT131 is a Swiss Timing USB converter that gives a computer two RS232 and two RS422/485
  serial ports, used to cable Omega MTE judges' keypads to Swiss Timing's scoring software.
tags:
  - Equipment
  - Timing
infoboxTitle: INT131 converter
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3434.790`'
  - label: Type
    value: USB to serial converter
  - label: Connection
    value: USB type B; two RS232 on 9-pin D-sub; two RS422/485 on 7-pin Tuchel
  - label: Dimensions
    value: 198 × 84 × 30 mm
  - label: Weight
    value: 450 g
  - label: Power
    value: USB bus power, or 10–30 V DC external
  - label: Manual
    value: INT131 User's Manual (3434.502.02, version 1.2, November 2007)
---

<!--
Research notes, Swiss Timing INT131. Surfaced 2026-10-28 while building out
swa-scoring-manager.md.

Held and read: sources/vendors/swiss-timing/accessories/swiss-timing-int131-user-manual-3434.502.02
("User's Manual INT131", 3434.502.02, v1.2, November 2007, 13 pp.). Verified from it:
  - One USB connection gives the computer four COM ports: COMA and COMB are RS422/485 on 7-pin
    female Tuchel sockets (pins 1 and 2 carry 10-30 V DC out, so a device can be powered from
    the line), COMC and COMD are RS232 on 9-pin male D-sub, wired as DTE (a null-modem cable to a
    PC port, straight-through to a DCE device).
  - Detects data format and switches RS422/485 direction and speed by itself; 1.2 to 115.2 kbit/s;
    3000 V DC isolation and surge protection on the RS422/485 side; RS422/485 runs up to 4000 ft
    (1250 m) per the sheet.
  - Power from the USB bus or 10-30 V DC on a 4-pin male Tuchel, chosen by a switch; LEDs for
    power and each port's transmit and receive.
  - 198 x 84 x 30 mm, 450 g, 10-90 % humidity non-condensing; wall-fixing holes for M4 screws.
  - Driver: Prolific PL-2303 on CD; the manual's driver notes name Windows 98, ME, 2000, XP and
    CE 3.0, Linux and Mac OS.
  - The panel drawing carries a third-party legend, "TRP-C08H USB To 4-Port RS232/422/485
    Isolated Converter", beside "INT131 3434.790 Swiss Timing", so it appears to be a rebadged
    TRP-C08H (maker not named in the manual; not researched further).
  - Operating and storage range -20 to 65 C; external supply is Swiss Timing adapter 3418.910;
    1.5 W from an external supply or 220 mA from the USB bus; CE marked.
Uses: the SY/SWA Scoring Manager manuals (3480.512.02, v1.9 2017 and v2.2 2022) and the DIV
Scoring Manager manual (3480.513.02, 2022) cable Omega MTE keypads to the scoring computer
"with the cables and INT 131 converter" from Swiss Timing, at 19,200 baud 8N1, with a secondary
port when the judging panel is split across the pool. The software manuals write "INT 131" with a
space; the device manual writes INT131.
Still to research: introduction date, other Swiss Timing systems that use it, the TRP-C08H
maker, and whether it is still supplied.
-->

This article is a stub. The INT131 (`3434.790`) is a Swiss Timing USB converter that gives a
computer two RS232 and two RS422/485 serial ports, used to cable
[Omega MTE keypads](../../diving/omega-mte-keypads.md) to Swiss Timing's
[SWA Scoring Manager](../../../software/swa-scoring-manager.md) and
[DIV Scoring Manager](../../../software/div-scoring-manager.md).

See the [timers overview](index.md) for the shared background that applies to every timing
console.
