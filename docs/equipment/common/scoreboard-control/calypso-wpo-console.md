---
title: Swiss Timing Calypso WPO console
description: >-
  The Calypso WPO console is the Swiss Timing keypad controller for water polo and other
  timed games, driving Calypso and Piccolo scoreboards, shot clocks and a horn.
tags:
  - Equipment
  - Scoring
  - Timing
  - Water polo
infoboxTitle: Calypso WPO console
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Type
    value: Game controller for scoreboards and shot clocks
  - label: Connection
    value: RS422 scoreboard port; RS232 to a PC; external start/stop, possession and timeout inputs; Bluetooth option
  - label: Dimensions
    value: 90 × 285 × 205 mm (H × L × D)
  - label: Weight
    value: 1.3 kg
  - label: Power
    value: 9–18 V DC
  - label: Manual
    value: Calypso WPO Console Instructions for Use (3403.504.02, version 2.7, January 2026)
---

<!--
Research notes, Calypso WPO console.

Surfaced while building out calypso.md.

Held and read: sources/vendors/swiss-timing/timers-consoles/swiss-timing-wpo-calypso-console-user-manual-3403.504.02
(v2.7, January 2026; history v1.0 initial, v2.0 the water polo version, then pinning, photos, the
30 s/20 s shot-clock reset, scoreboard examples, the coach's external timeout (2.5, 2.6), and in
2.7 a second external start/stop arrangement). The running header on many pages reads "WPO
Saturn Console", and the Calypso manuals name a "Saturn controller" or console; the relationship
(same product renamed, or a successor) is not stated anywhere held.
  - Keypad with alphanumeric, single-function and multi-function keys beside an LCD, a horn key
    and a START/STOP switch; menus Console set, Time, Select (game settings per sport) and Play.
  - Peripherals: water polo shot clocks, external start/stop for any sport with a game clock, a
    horn. Seven external-control arrangements, from the console alone to two external switches
    (game clock on one, shot clock reset and start/stop on another); an external coach's timeout
    contact, normally open.
  - Game settings per sport: periods (default 4 plus 2 extra), period and break lengths, count
    up or down, tenths in the last minute, shot clock times (defaults 25 s and 15 s, horn 2 s;
    the section headings speak of 30 s/20 s resets), timeouts (2 per game, 60 s, horn 15 s before
    the end), fouls and expulsion times, horns. Defaults stored per sport; factory reset option.
  - Sending team names needs module 3400.740 fitted; player names not available in the
    water polo version. Up to 16 players per side.
  - Bluetooth option to pair Bluetooth scoreboards (same password); when fitted, scoreboard pins
    1-2 (TX1) are unusable, so boards go on pins 3-4.
  - Firmware loaded from a PC with the FlashSimple program over RS232 (cable 9051.1307), device
    H8S/2134F, about 4 minutes; then "All def. & Save". Example version 1.63.
  - Clock and date kept 30 days by an internal battery.
  - Scoreboards: Calypso horizontal or vertical (6, 8 or 10 lines; default 6, vertical) and
    Piccolo.
  - Connectors: SCB RS422 Tuchel 7-pin female (+12 V, TX1, TX2); PC RS232 DB9; possession 3-pin;
    start/stop + reset 3-pin; start/stop 3-pin; DC 9-18 V DIN 4-pin; horn on banana sockets.
  - 90 x 285 x 205 mm; 1.3 kg; storage -10 to 60 C, working 0 to 45 C.
Dealer: AVK Group sells a Swiss Timing water polo system (STWP) with an "OMEGA CALYPSO Waterpolo
controller" with a 240 x 128 LCD, Calypso or Montreal shot clocks and a Coyote horn, described as
World Aquatics Approved (https://www.avkgroup.at/catalog/STWP/; dealer claim).

Still to research: part number; whether it replaced the Saturn console; the 25/15 s defaults
against current World Aquatics possession rules.
-->

This article is a stub. The Calypso WPO console is a Swiss Timing keypad controller that runs
the game clock, scores, timeouts, fouls and shot clocks in water polo and other timed games, and
sends them to [Calypso](../scoreboard/calypso.md) or [Piccolo](../scoreboard/piccolo.md)
scoreboards and to Swiss Timing's [water polo shot clocks](../pace-clock/swiss-timing-shot-clocks.md).

See the [scoreboard control overview](index.md) for the shared background.
