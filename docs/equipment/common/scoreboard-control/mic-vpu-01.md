---
title: MIC-VPU-01
description: >-
  The MIC-VPU-01 is a video processing unit Colorado Time Systems has shipped with its
  video boards.
tags:
  - Equipment
  - Scoring
infoboxTitle: MIC-VPU-01
infobox:
  - label: Manufacturer
    value: Not established
  - label: Part number
    value: '`MIC-VPU-01`'
  - label: Type
    value: Video processing unit
  - label: Connection
    value: HDMI from the display computer through a pass-through capture device, then HDMI to DVI into the unit
  - label: Manual
    value: CTS, DisplayLink Video to Broadcast Software Instructions (F1062)
    href: https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf
---

<!--
Research notes, MIC-VPU-01.

Attestation: cts-displaylink-video-to-broadcast-software-instructions-f1062.pdf (F1062
Rev. 202104) and CTS's public page at
coloradotime.com/blog/a-guide-to-live-streaming-with-displaylink. Both list it as one of
five controllers CTS has shipped whose video output can feed a live stream, and F1062 puts
it in the Type 1 group with the MCTRL-300 and MCTRL-600, which need a
pass-through capture device between the DisplayLink computer and the controller's DVI
input.

Manufacturer is genuinely unresolved, which is why the infobox says so rather than
guessing. The other four controllers on that list are NovaStar products, so it is tempting
to assume this one is too, but a web search for the exact string MIC-VPU-01 returns only
the CTS page itself and unrelated video processing units from other industries. NovaStar's
own catalogue and specification library do not list it. Do not assert a maker without a
source. Two leads worth following: the VPU acronym also appears in the DisplayLink Plus
help file, which names CVC, CDC and VPU video processors for older installations and says
a CVC must be set to PC mode, so MIC-VPU-01 may belong to that older CTS-labelled family
rather than to the NovaStar generation; and the MIC prefix may be an OEM's, not CTS's.

Still to research before building this out: who makes it, what CTS boards it shipped with,
its inputs and outputs beyond the DVI input F1062 implies, and its relationship to the
CVC, CDC and VPU processors the help file names.
-->

This article is a stub. The MIC-VPU-01 is a video processing unit Colorado Time Systems
has shipped between a [DisplayLink Plus](../../../software/displaylink-plus.md) computer
and an LED video board, one of five controllers CTS lists as able to feed a live stream
from its own video output. CTS groups it with the units that need a pass-through video
capture device.

See the [scoreboard control overview](index.md) for the shared background that applies to
every video display controller.
