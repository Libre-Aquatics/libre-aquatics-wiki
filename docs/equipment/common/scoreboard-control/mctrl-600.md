---
title: NovaStar MCTRL600
description: >-
  The MCTRL600 is a NovaStar LED display controller that Colorado Time Systems has
  shipped with its video boards.
tags:
  - Equipment
  - Scoring
infoboxTitle: MCTRL600
infobox:
  - label: Manufacturer
    value: NovaStar
  - label: Part number
    value: '`MCTRL600` (CTS writes it `MCTRL-600`)'
  - label: Type
    value: LED display controller
  - label: Connection
    value: HDMI from the display computer through a pass-through capture device, then HDMI to DVI into the controller
  - label: Manual
    value: CTS, DisplayLink Video to Broadcast Software Instructions (F1062)
    href: https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf
---

<!--
Research notes, MCTRL600.

Attestation on the CTS side is the same document as the other four controllers:
cts-displaylink-video-to-broadcast-software-instructions-f1062.pdf (F1062 Rev. 202104),
plus the public page at
coloradotime.com/blog/a-guide-to-live-streaming-with-displaylink. F1062 puts the
MCTRL-600 in its Type 1 group with the MCTRL-300 and MIC-VPU-01, which need a
pass-through capture device; the connection it describes is HDMI from the DisplayLink
computer into the capture device and HDMI to DVI from the capture device into the
controller's DVI input.

CTS hyphenates the name as MCTRL-600; NovaStar writes MCTRL600.

Maker: Xi'an NovaStar Tech Co., Ltd. NovaStar publishes specification sheets at
oss.novastar.tech, including MCTRL600-LED-Display-Controller-Specifications-V2.3.1.pdf
(2021) and a V2.3.0 revision (2020). From those listings, not yet read end to end: one DVI
input, one HDMI input, one audio input, four Gigabit Ethernet outputs at up to 650,000
pixels each, loading capacity quoted at 1920x1200 at 60 Hz, a type-B USB port for the
control PC, and UART cascading for multiple units. Verify each figure against the PDF
before putting any of it in the body.

Still to research before building this out: which CTS boards were sold with it and over
what years, any CTS part number, and how it differs in practice from the MCTRL-660, which
CTS places in the other connection group.
-->

This article is a stub. The MCTRL600, which Colorado Time Systems writes `MCTRL-600`, is a
NovaStar LED display controller that CTS has shipped between a
[DisplayLink Plus](../../../software/displaylink-plus.md) computer and an LED video board.
CTS groups it with the controllers that need a pass-through video capture device when the
board's output is also being streamed.

See the [scoreboard control overview](index.md) for the shared background that applies to
every video display controller.
