---
title: NovaStar MCTRL660
description: >-
  The MCTRL660 is a NovaStar LED display controller that Colorado Time Systems has
  shipped with its video boards.
tags:
  - Equipment
  - Scoring
infoboxTitle: MCTRL660
infobox:
  - label: Manufacturer
    value: NovaStar
  - label: Part number
    value: '`MCTRL660` (CTS writes it `MCTRL-660`)'
  - label: Type
    value: LED display controller
  - label: Connection
    value: Unchanged on the computer side; DVI to HDMI from the controller output to a capture device
  - label: Manual
    value: CTS, DisplayLink Video to Broadcast Software Instructions (F1062)
    href: https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf
---

<!--
Research notes, MCTRL660.

Attestation on the CTS side: cts-displaylink-video-to-broadcast-software-instructions-f1062.pdf
(F1062 Rev. 202104) and the public page at
coloradotime.com/blog/a-guide-to-live-streaming-with-displaylink. F1062 puts the MCTRL-660
in its Type 2 group with the VX4: nothing changes between the DisplayLink computer and the
controller, and the stream is taken from the controller's DVI output into a capture device,
which need not be a pass-through model. F1062's Type 2 instructions misspell it once as
"MCTL-660".

CTS hyphenates the name as MCTRL-660; NovaStar writes MCTRL660.

Maker: Xi'an NovaStar Tech Co., Ltd. NovaStar publishes specification sheets at
oss.novastar.tech, including
MCTRL660-LED-Display-Controller-Specifications-V1.4.3.pdf (2021) and a user manual
V1.4.4 (2024). From those listings, not yet read end to end: one DVI input, one HDMI
input, one audio input and four Gigabit Ethernet outputs. Verify each figure against the
PDF before putting any of it in the body.

Still to research before building this out: which CTS boards were sold with it and over
what years, any CTS part number, and what the DVI output CTS streams from is doing when
the board is also being driven.
-->

This article is a stub. The MCTRL660, which Colorado Time Systems writes `MCTRL-660`, is a
NovaStar LED display controller that CTS has shipped between a
[DisplayLink Plus](../../../software/displaylink-plus.md) computer and an LED video board.
CTS groups it with the controllers whose own output can be captured for streaming without
a pass-through capture device.

See the [scoreboard control overview](index.md) for the shared background that applies to
every video display controller.
