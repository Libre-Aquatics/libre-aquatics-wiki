---
title: CTS AquaSync
description: >-
  CTS AquaSync is Colorado Time Systems software that overlays live timing and
  scoring graphics onto a video stream.
tags:
  - Software
  - Scoring
  - Timing
  - Swimming
  - Diving
  - Water polo
---

<!-- Research notes (do not publish):
  Established facts: part number R-470-123, USD 199.00 at shop.coloradotime.com
  (checked July 2026). Takes timing and scoring data from CTS systems and emits
  graphics over NDI into streaming software such as OBS and vMix, with no
  additional hardware. CTS states no annual fee or subscription. Compatible with
  Gen7 Swimming & Diving, System 6 Swimming & Diving, and water polo on System 6
  and the WTTC tabletop controller.
  Listed system requirements: Windows 11, multi-core CPU (Intel i5 /
  AMD Ryzen 5 or better), 8 GB RAM minimum, 150 MB storage, SSD recommended.
  The shop product page names two tiers under its requirements: the full program
  for facilities that already own a CTS videoboard, and a build called DisplayLink
  Plus Lite for those that do not, shipped inside the AquaSync installer.
  Re-verified on that page 2026-07-28. A separate source sweep wrongly concluded
  Lite was unattested; it is attested there. Do not weaken or remove the claim on
  that basis. What Lite includes and excludes is still undocumented, which is the
  actual open question.
  Announced 22 April 2026. Source: Swimming World, "Colorado Time Systems
  Introduces CTS AquaSync for Real-Time Aquatic Live Streaming", published
  April 22, 2026 09:32am, https://www.swimmingworldmagazine.com/news/colorado-time-systems-introduces-cts-aquasync-for-real-time-aquatic-live-streaming/
  Quotes Rick Connell, Vice President and General Manager. CAUTION: this is a CTS
  press release republished verbatim, also carried by SwimSwam and Athletic
  Business (both 403 to WebFetch), so it is not independent reporting. It does not
  mention DisplayLink Plus at all. No independent journalism about AquaSync exists
  as of July 2026.
  Note the relationship to CTStream: the DL+ release notes log a new connection to
  something they call CTStream Video Overlay software in v4.5.0 (22 April 2022),
  and log that connectivity being restored in v4.6.7 (1 October 2024). A
  dedicated search found zero public trace of CTStream: not on coloradotime.com,
  not in any press item, dealer page, forum or repository. It survives only in the
  DL+ release notes. Whether AquaSync supersedes it, renames it, or is a separate
  product is unresolved and must not be asserted either way without a source.
  Still to research before building this out: what DisplayLink Plus Lite includes
  and excludes, the graphics template model, and whether AquaSync reuses .tpl
  templates or has its own.
-->

This article is a stub. CTS AquaSync, part number `R-470-123`, is Colorado Time Systems
software announced in April 2026 that takes timing and scoring data from a CTS system and
renders it as broadcast-style graphics over a live video stream. It reaches streaming
software over NDI rather than through dedicated hardware.

It runs on top of [DisplayLink Plus](displaylink-plus.md), or on a reduced build called
DisplayLink Plus Lite at facilities without a CTS video display.
