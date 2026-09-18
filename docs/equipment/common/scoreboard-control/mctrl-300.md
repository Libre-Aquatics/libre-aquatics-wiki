---
title: NovaStar MCTRL300
description: >-
  The MCTRL300 is a NovaStar LED display controller that Colorado Time Systems has
  shipped with its video boards.
tags:
  - Equipment
  - Scoring
infoboxTitle: MCTRL300
infobox:
  - label: Manufacturer
    value: NovaStar
  - label: Part number
    value: '`MCTRL300` (CTS writes it `MCTRL-300`)'
  - label: Type
    value: LED display controller
  - label: Connection
    value: HDMI from the display computer through a pass-through capture device, then HDMI to DVI into the controller
  - label: Manual
    value: CTS, DisplayLink Video to Broadcast Software Instructions (F1062)
    href: https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf
---

<!--
Research notes, MCTRL300.

Attestation on the CTS side: cts-displaylink-video-to-broadcast-software-instructions-f1062.pdf
(F1062 Rev. 202104, held under sources/vendors/colorado-time-systems/software/) lists five
controllers CTS has shipped whose video output can feed a live stream, and sorts them into
two connection types. The MCTRL-300 is in Type 1 with the MCTRL-600 and the
MIC-VPU-01, which F1062 says need a capture device of the pass-through kind, its example
being the AverMedia GC311; Type 2 (VX4, MCTRL-660) works with any capture device. The same list is
on CTS's public page at coloradotime.com/blog/a-guide-to-live-streaming-with-displaylink,
which is the citable version since it is not a PDF CTS might move.

Note the spelling discrepancy: CTS hyphenates as MCTRL-300 throughout F1062 and the blog
post, while NovaStar's own documents write MCTRL300 closed up. Searching for only one form
will miss half the material.

Maker: Xi'an NovaStar Tech Co., Ltd. The MCTRL series (300, 600, 660 and others) and the
VX4 are NovaStar products; CTS resells them rather than making them. NovaStar publishes
specification sheets at oss.novastar.tech, including
MCTRL300-LED-Display-Controller-Specifications-V2.4.1.pdf (2024) and earlier V2.3/V2.4.0
revisions. From those listings, not yet read end to end: one DVI input, one audio input,
two Gigabit Ethernet outputs, input resolution up to 1920x1200 at 60 Hz, and a stated
maximum of 650,000 pixels per Ethernet port. Verify each figure against the PDF before
putting any of it in the body.

Still to research before building this out: which CTS boards were sold with this
controller and over what years, what CTS part number (if any) it carries, how it is
configured from the DisplayLink Plus computer, and whether CTS shipped a particular
firmware or NovaStar software version with it.
-->

This article is a stub. The MCTRL300, which Colorado Time Systems writes `MCTRL-300`, is a
NovaStar LED display controller that CTS has shipped between a
[DisplayLink Plus](../../../software/displaylink-plus.md) computer and an LED video board.
CTS groups it with the controllers that need a pass-through video capture device when the
board's output is also being streamed.

See the [scoreboard control overview](index.md) for the shared background that applies to
every video display controller.
