---
title: Colorado Time Systems Sky-Fi WA-1
description: >-
  The Sky-Fi WA-1 is an earlier Colorado Time Systems wireless adapter for scoreboard
  data.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: Sky-Fi WA-1
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WA-1`'
  - label: Type
    value: Wireless scoreboard data adapter
  - label: Connection
    value: RS-232 when transmitting, RS-485 when receiving, set by configuration switches
  - label: Manual
    value: Sky-Fi Wireless Adapter (WA-1) User Instructions
---

<!--
Research notes, Sky-Fi WA-1.

Two documents held, both under
sources/vendors/colorado-time-systems/scoreboards-displays/:
cts-sky-fi-wireless-adapter-wa-1-user-instructions.txt and
cts-sky-fi-wireless-adapter-transmit.txt. Neither read end to end yet.

What the instructions establish: the adapter is set up once and then left alone. One unit
attaches to a data source. Three are named: a CTS timer, with a System 6 as the example; a
laptop carrying SynchroMM, the meet management program for synchronized swimming; and the
UPC-C pace clock controller. What it sends out is scoreboard data, shot clock values
included, and it can reach three kinds of destination. Wireless pace clocks and shot clocks
receive it directly. A numeric LED board receives it through a second adapter. A matrix or
video board receives it through the DisplayLink computer. A bank of
switches labelled CONFIG sets the role: switches 1 and 2 select transmitting over RS-232 or
receiving over RS-485. Cabling differs by destination, with an R-DC4 cable to a scoreboard,
pace clock or shot clock, and an R-2DC cable to an LED numeric board that has no RS-485
jacks.

Naming: CTS calls the product line Sky-Fi and the model WA-1. The name Sky-Fi does not
appear in the WA-3 material, so it may have been dropped.

Open lineage question: a WA-2 exists, attested in the DisplayLink Plus help file
(troubleshooting and release-notes topics), in the Gen7 Legacy swim timing material and in
the deck clock guide, but no WA-2 document is held and nothing states how the three
generations differ.

Still to research: radio band and range, which are not in the instructions held; power;
dimensions; part numbers; dates; and whether Sky-Fi covered other products besides this
adapter.
-->

This article is a stub. The Sky-Fi WA-1 is a Colorado Time Systems wireless adapter that
carries scoreboard data from a timing console, a laptop or a pace clock controller to a CTS
numeric scoreboard, a pace clock, a shot clock, or a
[DisplayLink](../../../software/displaylink.md) computer driving a matrix board. It is set
by configuration switches to transmit over RS-232 or receive over RS-485, so a pair of
adapters makes the link end to end.

See the [scoreboard control overview](index.md) for the shared background on how data
reaches a board.
