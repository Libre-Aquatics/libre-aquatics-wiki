---
title: Wireless Polo Scoreboard Mapper
description: >-
  The Wireless Polo Scoreboard Mapper is a small Colorado Time Systems program that sets
  which water polo item each line of an LED-R board shows.
tags:
  - Software
  - Water polo
  - Scoring
---

<!--
Research notes, Wireless Polo Scoreboard Mapper. Stub created September 2026 while building
out the WA-2 article.

Only source so far: F1026 Rev. 201907, "WA-2/WA-3 Water Polo" (archived on the Wayback
Machine, text under sources/reference/cts-web/wa-f1026-rev201907.txt). What it establishes:
  - the download is listed on CTS's installation-methods page, Multi Sport tab, as the CTS
    Polo Mapper; the program itself is called Wireless Polo Scoreboard Mapper;
  - it is needed only for a custom layout on LED-x (LED-R) boards; P01 and F01 portable
    scoreboards show WTTC water polo data under the adapter's default firmware (2.0.8);
  - the user picks which data item goes on each line (module) of the LED-R, connects a WA-2
    or WA-3 by USB, presses Find WA-2, then Program WA-2, and gets a confirmation;
  - the adapter is then fitted to the LED-R and receives the WTTC's water polo data by radio.

The button labels name only the WA-2 even though the sheet covers both adapters.

Still to research: versions, whether it is still offered, and the list of mappable items.
-->

This article is a stub. The Wireless Polo Scoreboard Mapper is a Colorado Time Systems Windows
program that chooses which water polo item appears on each line of an
[LED-R](../equipment/common/scoreboard/led-r.md) board and writes that layout into a
[WA-2](../equipment/common/scoreboard-control/wa-2.md) or
[WA-3](../equipment/common/scoreboard-control/wa-3.md) adapter over USB. The adapter then shows
data sent by a [WTTC-1](../equipment/common/scoreboard-control/wttc-1.md) controller in that
layout.

See the [software overview](index.md) for the other programs the wiki covers.
