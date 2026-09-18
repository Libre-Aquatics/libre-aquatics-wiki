---
title: Colorado Time Systems Dolphin Scoreboard Adapter
description: >-
  The Dolphin Scoreboard Adapter lets a Colorado Time Systems numeric scoreboard
  receive results directly from a Dolphin wireless stopwatch timing system.
tags:
  - Equipment
  - Timing
  - Swimming
---

<!-- Research notes (do not publish):
  Kit part number K-DSCB. The 2022 flyer (t-c/cts-dolphin-wireless-stopwatch-system-
  dolphin.txt, REV 09/22) is the only held document that gives the kit code, and
  states the kit is the adapter plus a mounting kit. Earlier sheets name the product
  without a part number.

  First appearance in the held collection is the 2011 catalogue
  (s-s/cts-complete-timing-scoring-training-and-display-solutions-2011-2011.txt,
  line ~219), which describes it as letting a CTS LED numeric scoreboard receive
  split and result data wirelessly, with an asterisked caveat that some restrictions
  apply to splits and to contact CTS. The 2008 catalogue
  (c-b/cts-making-time-count-...) already names the adapter but mentions only race
  data, not splits, so split display appears to have arrived with the 2012 split
  feature rather than with the adapter itself. Worth confirming.

  From F912 Rev 202412 (t-c/cts-dolphin-user-guide-f912.txt):
    - The adapter is optional, and is treated as a fourth updatable device type
      alongside base, starter and watch.
    - Its firmware files are .DDC for v1 and v2 hardware and .DD3 for v3, so the
      adapter has had at least three hardware generations. The other Dolphin devices
      only have two. What changed at v3 is not documented anywhere held.
    - Update procedure is unusual: the base must be updated first, the scoreboard must
      be off, and after clicking Open the operator must power the scoreboard and click
      Start within a short window, so the adapter evidently only accepts code shortly
      after power-up.
    - Scoreboard behaviour is driven from the Dolphin software's Settings screen, not
      from the adapter: enable, order by lane or place, number of scoreboard lines
      (1-10), number of lanes (1-10), scroll interval (0.5-4 s) for when lanes exceed
      lines, intensity 0-7 where 1 selects the ambient light sensor, and 12 or 24 hour
      clock. There is also a Set Time of Day button, with a note that restoring the
      time-of-day display afterwards needs the scoreboard disabled or the base
      disconnected.
    - The TCP/IP API command includeSplitData,ON/OFF governs whether splits reach
      clients, which is adjacent to but not the same as scoreboard split display.
    - CTS Otter swimming scoreboards have the adapter built in; other CTS boards need
      the external one.

  From F927 Rev 201202 (sb/cts-mini-scoreboard-user-guide-f927.txt): a mini scoreboard
  takes Dolphin data over its RS-485 jack via the adapter, and module addressing for
  Dolphin data is 01 through 09 for lanes 1 to 9 and 0A for lane 10. The mini LED
  datasheet (sb/cts-mini-led-scoreboard-datasheet.txt, Rev 03/14) repeats the
  compatibility statement.

  Current CTS store lists the adapter at USD 725 new and 625 refurbished (snapshot,
  September 2026); no held CTS document carries a price.

  Sources: CTS F912 Rev 202412; CTS F927 Rev 201202; CTS mini LED scoreboard datasheet
  Rev 03/14; CTS Dolphin flyer Rev 09/22; CTS catalogues 2008, 2011; CTS online store
  (shop.coloradotime.com/collections/dolphin-wireless-stopwatch-timing). Verified: the
  part number, the firmware extensions, the settings list and the module addressing.
  Inferred, and marked as such above: that split display postdates the adapter, and
  that v3 denotes a third hardware generation.

  Still to research before building this out: what the v3 adapter changed; which CTS
  numeric scoreboards other than the Otter and mini lines it drives; the nature of the
  split restrictions the 2011 catalogue flags; whether it was ever sold under a part
  number other than K-DSCB.
-->

This article is a stub. The Colorado Time Systems Dolphin Scoreboard Adapter, sold as
kit `K-DSCB` with its mounting hardware, connects a CTS numeric scoreboard to a
[Dolphin Wireless Stopwatch Timing System](dolphin.md) so that race results reach the
board by radio without a timing console in between. CTS Otter swimming scoreboards
carry the same function built in, so the external adapter is needed only for other
boards.

See the [Dolphin Wireless Stopwatch Timing System](dolphin.md) article for how the
Dolphin software drives the display, and the
[semi-automatic timing overview](index.md) for the shared background.
