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
  Verified on coloradotime.com/products/aquasync-overlay-graphics-for-live-streaming and
  shop.coloradotime.com/products/cts-aquasync on 2026-09-17, both re-checked against the
  earlier 2026-07-28 reading: part number R-470-123, USD 199.00, NDI output, compatibility
  with Gen7 Swimming & Diving, System 6 Swimming & Diving, and water polo on System 6 and
  the WTTC tabletop controller; requirements of Windows 11, a multi-core CPU (Intel i5 or
  AMD Ryzen 5 or better), 8 GB RAM, 150 MB storage with an SSD recommended, and either
  DisplayLink Plus or DisplayLink Plus Lite. The product page adds a version, v1.1.9 dated
  14 April 2026, and says the sport graphics and layouts are supplied rather than built by
  the customer. CTS states there is no annual fee or subscription.

  The two tiers are attested on both pages: the full program for facilities that already
  own a CTS videoboard, and DisplayLink Plus Lite for those that do not, shipped inside the
  AquaSync installer. An earlier source sweep wrongly concluded Lite was unattested; it is
  attested. Do not weaken or remove the claim on that basis. What Lite includes and
  excludes is still undocumented, which is the actual open question.

  Announcement: Swimming World, "Colorado Time Systems Introduces CTS AquaSync for
  Real-Time Aquatic Live Streaming", 22 April 2026,
  https://www.swimmingworldmagazine.com/news/colorado-time-systems-introduces-cts-aquasync-for-real-time-aquatic-live-streaming/
  It quotes Rick Connell, Vice President and General Manager. CAUTION: this is a CTS press
  release republished verbatim, also carried by SwimSwam and Athletic Business (both 403 to
  WebFetch), so it is not independent reporting. It does not mention DisplayLink Plus at
  all. No independent journalism about AquaSync exists as of September 2026. Note also that
  the product page's version date (14 April 2026) precedes the announcement by eight days.

  CTStream: the DL+ release notes log a new connection to CTStream Video Overlay software
  in v4.5.0 (22 April 2022) and connectivity restored in v4.6.7 (1 October 2024). A
  dedicated search found no public trace of CTStream anywhere else. Whether AquaSync
  supersedes it, renames it, or is a separate product is unresolved and must not be
  asserted either way without a source. The v4.5.0 entry and the AquaSync announcement fall
  on the same calendar day four years apart, which is a coincidence worth noticing and
  nothing more. That name now has its own stub at docs/software/ctstream.md.

  The pre-AquaSync capture-card path (F1062) is documented on the DisplayLink Plus page and
  is deliberately not restated here; this article links to it.

  Later pass, 2026-09-17. A second CTS page,
  coloradotime.com/blog/aquasync-live-streaming-graphics-overlay, sets out the operating
  sequence and names the supplied overlays per sport (swimming: a basic grid and HD Lane
  Graphics; diving: awards and results, and a leaderboard; water polo: a score bug with
  game and shot clocks). It does not mention Lite at all, and says nothing about editing an
  overlay, so whether the layouts can be changed is still open rather than answered in the
  negative.

  Also checked on that pass: the DisplayLink Plus help file in the collection never
  mentions AquaSync, which fits a product announced long after that help was written, and
  CTS's manuals index (coloradotime.com/support/manuals) lists no AquaSync document, so
  there is no user guide to ask for yet. Coverage remains the April 2026 press release
  recycled by Swimming World, SwimSwam and Athletic Business; no independent reporting has
  appeared in the five months since.

  Still to research: what DisplayLink Plus Lite includes and excludes, whether the supplied
  overlays can be edited, whether AquaSync reuses .tpl templates or carries its own
  layouts, and what its relationship to CTStream is.
-->

CTS AquaSync is a Windows program from [Colorado Time Systems](../vendors/colorado-time-systems.md)
(CTS), part number `R-470-123`, that renders live timing and scoring as broadcast-style
graphics over a video stream. It takes its data from a CTS timing system and sends the
finished graphics to streaming software over NDI, a network video protocol, so no capture
hardware sits between the two.[^product][^shop] It runs on top of
[DisplayLink Plus](displaylink-plus.md), or on a reduced build called DisplayLink Plus Lite
at facilities without a CTS video display.[^product][^shop]

CTS announced the program on 22 April 2026. The announcement was issued as a press release
and republished by the swimming press without independent reporting, so its claims about
the product are the company's own.[^sw2026] The product page records version 1.1.9, dated
14 April 2026.[^product]

## Role in the display system

AquaSync separates the video overlay from the scoreboard. A CTS console runs the race and
produces scoreboard data, DisplayLink Plus receives it, and AquaSync renders that data as a
graphics layer which streaming software composites over the camera feed. Because the output
is NDI, it reaches any NDI-capable production system over the network; CTS names OBS and
vMix.[^product][^shop]

This is a different path from the one CTS documented before AquaSync, in which the stream
was produced by capturing the video signal already going to the board, with a capture device
between the display computer and the video board controller and a crop applied in the
streaming software. That arrangement, and the five controllers CTS supports for it, are
described on the [DisplayLink Plus](displaylink-plus.md) page. CTS has not said whether
AquaSync replaces that method or sits alongside it.[^f1062]

One related name is unexplained. The DisplayLink Plus release notes record that
the program gained a link to [CTStream](ctstream.md) in 2022, and that the link was
repaired in 2024, but CTS has published nothing else about it, and nothing states how it
relates to AquaSync.[^relnotes]

## Sports and compatible systems

CTS lists AquaSync as working with Gen7 Swimming and Diving, System 6 Swimming and Diving,
and water polo on both System 6 and the WTTC tabletop controller. The graphics and layouts
for swimming, diving and water polo are supplied with the program rather than designed by
the operator, which is the opposite of the template model DisplayLink Plus uses for the
board itself.[^product][^shop]

Each sport has its own set of overlays to pick from. CTS names two for swimming, a basic
grid and a lane-mapped graphic it calls HD Lane Graphics; for diving, an awards and results
overlay and a leaderboard; and for water polo, a score bug with the game and shot clocks.
The operator's sequence is to connect the timing system to DisplayLink Plus, start
AquaSync, choose the sport and the overlay, send it out over NDI, and place it over the
camera feed in the streaming software.[^blog]

## Licensing and system requirements

AquaSync is sold outright at USD 199.00, and CTS states that it carries no annual fee or
subscription.[^shop] The stated requirements are Windows 11, a multi-core processor of at
least Intel Core i5 or AMD Ryzen 5 class, 8 GB of RAM, and 150 MB of storage, with a
solid-state drive recommended. DisplayLink Plus or DisplayLink Plus Lite is required as
well.[^product][^shop]

What the Lite build omits is not documented. CTS says only that it is for facilities without
a CTS videoboard and that it ships inside the AquaSync installer, which implies it is a
DisplayLink Plus that drives no board, but the company does not say what else it
lacks.[^product][^shop]

## See also

- [DisplayLink Plus](displaylink-plus.md): the program AquaSync depends on
- [CTStream](ctstream.md): the earlier overlay connection named in the release notes
- [Software](index.md): the software section overview
- [Colorado Time Systems](../vendors/colorado-time-systems.md): the vendor

See everything tagged [Software](../categories.md).

## References

[^product]: [Colorado Time Systems, AquaSync: Overlay Graphics for Live Streaming](https://coloradotime.com/products/aquasync-overlay-graphics-for-live-streaming) (v1.1.9, 14 April 2026; compatible systems and requirements).
[^shop]: [Colorado Time Systems, CTS AquaSync](https://shop.coloradotime.com/products/cts-aquasync) (`R-470-123`, USD 199.00; no annual fee or subscription).
[^sw2026]: [Swimming World, Colorado Time Systems Introduces CTS AquaSync for Real-Time Aquatic Live Streaming](https://www.swimmingworldmagazine.com/news/colorado-time-systems-introduces-cts-aquasync-for-real-time-aquatic-live-streaming/) (22 April 2026; a CTS press release, republished).
[^f1062]: [Colorado Time Systems, DisplayLink Video to Broadcast Software Instructions (F1062)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf) (Rev. 202104).
[^relnotes]: Colorado Time Systems, Display Link Plus Help, Release Notes topic (CTStream connection added in v4.5.0, 22 April 2022; restored in v4.6.7, 1 October 2024).
[^blog]: [Colorado Time Systems, AquaSync Live Streaming Graphics Overlay](https://coloradotime.com/blog/aquasync-live-streaming-graphics-overlay) (the operating sequence and the overlays supplied for each sport).
