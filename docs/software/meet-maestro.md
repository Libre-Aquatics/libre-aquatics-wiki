---
title: SwimTopia Meet Maestro
description: >-
  Meet Maestro is SwimTopia's browser-based meet-management software for
  swimming, with direct integration to several timing systems.
tags:
  - Software
  - Meet management
  - Swimming
---

<!-- Research notes (do not publish):
  Written from the Dolphin research pass. The program itself has not been researched;
  what follows is the timing-system side plus enough company background to place it.

  Vendor: SwimTopia, which launched in 2011 as club-management software. Meet Maestro
  is a later, separate product. Pilot testing across eight leagues in summer 2023 and
  more than 550 meets run that year are SwimTopia's own figures, as is a later claim of
  more than 30,000 meets; all are vendor numbers and must be attributed. In September
  2026 SwimTopia announced it would sell the meet-management software standalone rather
  than only alongside its club product. Sources: swimtopia.com product and announcement
  pages, a PRWeb release, SwimSwam sponsored items. Note that the SwimSwam pieces are
  presented as "SwimTopia Presents", i.e. paid placements, not independent reporting.
  No independent journalism found.

  Dolphin interface:
    - CTS names Meet Maestro alongside Hy-Tek Meet Manager and Splash in F912 Rev
      202412 and directs users to SwimTopia's own help files.
    - SwimTopia's help centre carries a CTS Dolphin integration overview, a setup
      article and a running-the-meet/troubleshooting article.
    - SwimTopia describes an enhanced integration in which Meet Maestro publishes full
      event detail into the Dolphin software, which improves what the Dolphin screen
      and any attached scoreboard show, and adds a configurable data directory in
      Dolphin so the folder can be shared over a network rather than being fixed at
      C:\CTSDolphin. The event-detail direction of travel matches the setEventInfo and
      related commands in the Dolphin TCP/IP API documented in F912, so the live
      socket rather than the result files is the likely mechanism, but SwimTopia does
      not say so and this should not be stated as fact.
    - Also referenced: DolphinEventList.csv, an event-list file newer Dolphin versions
      accept, which corresponds to the CSV load described on the Dolphin Events screen
      in F912.

  Sources: CTS F912 Rev 202412; help.swimtopia.com articles on CTS Dolphin integration
  setup, overview, and running a meet; swimtopia.com/enhanced-dolphin-integration;
  swimtopia.com/tour/timing-system-integrations; wiki.swimrankings.net on
  DolphinEventList.csv. Verified: that CTS names the program and that SwimTopia
  documents the integration. Inferred and flagged: the API-versus-file mechanism.

  Still to research before building this out: which other timing systems it integrates
  with and how; whether it is browser-based throughout and what happens offline;
  pricing and licensing; the relationship between Meet Maestro and the wider SwimTopia
  club product; file formats it imports and exports.
-->

This article is a stub. Meet Maestro is meet-management software for swimming from
SwimTopia, sold since 2023 and used to build, seed, run and score a meet. It is one of
the three programs Colorado Time Systems names as able to take results from a
[Dolphin Wireless Stopwatch Timing System](../equipment/swimming/semi-automatic/dolphin.md),
and SwimTopia documents an integration that also sends event and heat detail back into
the Dolphin software.

See the [software overview](index.md) for what this section covers.
