---
title: Colorado Time Systems WA-2
description: >-
  The WA-2 is the Colorado Time Systems wireless scoreboard adapter between the
  Sky-Fi WA-1 and the WA-3.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: WA-2
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WA-2`'
  - label: Type
    value: Wireless scoreboard adapter
  - label: Radio
    value: 2.4 GHz, set by channel and PAN ID on DIP switches
  - label: Manual
    value: None held; described in use by the Otter scoreboard guides (F1004, F995)
---

<!--
Research notes, WA-2.

No WA-2 document is held and CTS's manuals index lists none, so everything here comes from
other products' guides describing how to use one.

The Otter scoreboard guides are the fullest of those, both Rev. 202605, filed under
sources/vendors/colorado-time-systems/scoreboards-displays/. From F1004: a console older
than a Gen7 needs a wireless adapter, a WA-3 or a WA-2, to drive a scoreboard over the air;
the adapter and the board must share a channel and a PAN ID; the swimming board's factory
default for a WA-2 is channel 6 with PAN 0; the channel and PAN are set on the device's own
dipswitches; a WA-2 or WA-3 connects to a computer by USB for the leader-and-follower
procedure, and CTS notes that the reprogramming tool lists a WA-3 as WA2, which says
something about how close the two are. From F995: a diving board pairs with a WA-2 the same
way, its own default being channel 8 with PAN 0. F1004 also says a System 5 or System 6 can
push time of day to a board through a WA-2 or WA-3.

Other attestations, none of them descriptive: the DisplayLink Plus help file's
troubleshooting and release-notes topics, the Gen7 Legacy swim timing material, and the deck
clock guide F985.

The obvious open question is what distinguishes the three generations. WA-1 is a Sky-Fi
badged adapter switching between RS-232 transmit and RS-485 receive; WA-3 is 2.4 GHz with 12
channels and 8 networks each and a 1,000 ft range; where WA-2 sits between them, and whether
it is simply the WA-3 under an older name, is not established. The reprogramming tool's
labelling is suggestive and nothing more.

Still to research: a WA-2 datasheet or user guide, if one was ever published; its radio
specification; part numbers; and the dates of all three generations.
-->

This article is a stub. The WA-2 is a Colorado Time Systems wireless scoreboard adapter, the
generation between the [Sky-Fi WA-1](wa-1.md) and the [WA-3](wa-3.md). It gives a timing
console with no radio of its own a 2.4 GHz link to a board, provided the two carry matching
channel and PAN settings.

See the [scoreboard control overview](index.md) for the shared background on how data
reaches a board.
