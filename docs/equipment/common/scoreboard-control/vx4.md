---
title: NovaStar VX4
description: >-
  The VX4 is a NovaStar LED display controller with built-in scaling that Colorado Time
  Systems has shipped with its video boards.
tags:
  - Equipment
  - Scoring
infoboxTitle: VX4
infobox:
  - label: Manufacturer
    value: NovaStar
  - label: Part number
    value: '`VX4`'
  - label: Type
    value: LED display controller with built-in scaling
  - label: Connection
    value: Unchanged on the computer side; DVI to HDMI from the Input DVI2LOOP connector to a capture device
  - label: Manual
    value: CTS, DisplayLink Video to Broadcast Software Instructions (F1062)
    href: https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf
---

<!--
Research notes, VX4.

Attestation on the CTS side: cts-displaylink-video-to-broadcast-software-instructions-f1062.pdf
(F1062 Rev. 202104) and the public page at
coloradotime.com/blog/a-guide-to-live-streaming-with-displaylink. F1062 puts the VX4 in its
Type 2 group with the MCTRL-660. Nothing changes between the DisplayLink computer and the
controller; the stream is taken from the connector F1062 calls Input DVI2LOOP into a capture
device, which need not be a pass-through model.

CTS writes VX4 the same way NovaStar does, unlike the MCTRL controllers, which CTS
hyphenates.

Maker: Xi'an NovaStar Tech Co., Ltd. NovaStar publishes a specification sheet at
oss.novastar.tech (LED-Display-Video-Controller-VX4-Specifications-V1.0.5.pdf, document
number NS160100378, 2021). From that listing, not yet read end to end: inputs of three
CVBS, three VGA, two DVI, one HDMI and one DisplayPort, four Ethernet outputs, a loading
capacity around 2.3 million pixels, a maximum width of 3840 pixels and maximum height of
1920, and front-end processing (scaling, mosaic, crop, picture-in-picture) that removes the
need for a separate scaler. Verify each figure against the PDF before putting any of it in
the body. Note NovaStar also sells a VX4S, VX4S-N and VX4U; these are separate products and
the search results for them are easy to mistake for VX4 material.

Still to research before building this out: which CTS boards were sold with it and over
what years, any CTS part number, and whether the built-in scaling changes how a
DisplayLink Plus template has to be sized (the usual rule is that the template must match
the board's pixel dimensions exactly).
-->

This article is a stub. The VX4 is a NovaStar LED display controller with built-in video
processing that Colorado Time Systems has shipped between a
[DisplayLink Plus](../../../software/displaylink-plus.md) computer and an LED video board.
CTS groups it with the controllers whose own output can be captured for streaming without a
pass-through capture device.

See the [scoreboard control overview](index.md) for the shared background that applies to
every video display controller.
