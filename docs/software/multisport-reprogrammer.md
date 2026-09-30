---
title: MultiSport Reprogrammer
description: >-
  The MultiSport Reprogrammer is the Colorado Time Systems Windows tool for loading
  firmware into its 2.4 GHz adapters, controllers and scoreboards over USB.
tags:
  - Software
  - Scoring
---

<!--
Research notes, MultiSport Reprogrammer. Stub created September 2026 while building out the
WA-2 article.

Where it is named:
  - F1026 Rev. 201907, "WA-2/WA-3 Water Polo" (archived on the Wayback Machine, text under
    sources/reference/cts-web/wa-f1026-rev201907.txt): the program file is called "MultiSport
    Reprogrammer" and comes inside a firmware updater package downloaded from CTS's
    installation-methods page, Multi Sport tab. Requirements given: Windows 7 SP1 or later
    with .NET Framework 4.5, and a USB A to USB B cable. Steps, in summary: extract the zip,
    plug in the adapter, let the driver install, run the program, press Scan for Devices,
    select the device (listed as "WA2" and a firmware version), press Upload Firmware and
    choose a .fwp file; the upload takes about a minute, then the device is power cycled.
    The package in that sheet carried firmware 2.0.8 for the WA-2 and WA-3.
  - Otter guide F1004 (Rev. 202605): the same tool, through Get Sub-Devices, sets one
    scoreboard as leader and the rest as followers over a WTTC, WA-3 or WA-2 on USB; it lists
    a WA-3 as WA2. The download there is named MultiSport Display Firmware.
  - WTTC-1 product page (see wttc-1.md): names the MultiSport Firmware Reprogrammer, v2.0.9,
    next to controller firmware 1.7.10 of 17 November 2025.

Naming varies: MultiSport Reprogrammer (F1026), MultiSport Firmware Reprogrammer (WTTC page),
and the package names on CTS's downloads page. Treated here as one program.

Still to research: first release, version history, the full list of devices it supports
(controllers, Otter boards, deck clock, WHC-2), and whether it replaced an earlier tool.
-->

This article is a stub. The MultiSport Reprogrammer is a Colorado Time Systems Windows program
that loads `.fwp` firmware files over USB into CTS's 2.4 GHz devices, among them the
[WA-2](../equipment/common/scoreboard-control/wa-2.md) and
[WA-3](../equipment/common/scoreboard-control/wa-3.md) adapters and the
[WTTC-1](../equipment/common/scoreboard-control/wttc-1.md) controller. The same tool sets
[Otter](../equipment/common/scoreboard/otter.md) scoreboards as leaders or followers.

See the [software overview](index.md) for the other programs the wiki covers.
