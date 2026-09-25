---
title: Scoreboard control
seoTitle: Aquatics scoreboard control hardware
description: >-
  The hardware between a timing console and the board it feeds: wireless scoreboard
  adapters, tabletop and handheld controllers, and LED video board controllers.
tags:
  - Equipment
  - Scoring
  - Timing
---

<!-- Research notes (do not publish):
  This section was split out of the scoreboards overview once that page had eighteen
  articles under it and was carrying boards, radio adapters, tabletop and handheld
  controllers, a keyboard console, a pace clock controller and five video board controllers
  in one list. The dividing line is whether a thing displays or feeds a display.

  Sources are the ones the individual pages cite: the Sky-Fi WA-1 instructions and the WA-3
  datasheet and F1045, the Otter guides F1004 and F995 for how a board pairs with an
  adapter, F1062 and CTS's live-streaming page for the video controllers, the Template
  Editor guide F855 for the GameLink console, and the pace clock controller guide F901.

  Deliberately not here: the timing consoles themselves, which are equipment in their own
  right and live under the swimming timers section, and the display software, which is in
  the software section. A console or a computer is a data source; this section is about
  what sits between a source and a board.

  The UPC-C used to sit here as the awkward one, a training workout controller that
  happens to drive scoreboards. The pace clocks section now exists and it has moved to
  equipment/common/pace-clock/upc-c.md, where it has had a research pass of its own. This
  section is for what carries competition data to a board.
-->

Scoreboard control covers the hardware between a data source and the board it lights up.
A [timing console](../../swimming/timers/index.md) or a display computer produces the
figures; the equipment here carries them the last stretch, whether over a radio link in
place of a cable, from a keypad with no console involved at all, or through a video
controller that turns a computer's output into panel data.[^wa1][^f1004][^f1062]

Three kinds of device sit in that gap, and they are not interchangeable: wireless adapters,
which replace a cable; controllers, which are themselves the data source; and video board
controllers, which drive an LED video wall. The boards they feed are covered on the
[scoreboards overview](../scoreboard/index.md).

## Wireless adapters

An adapter converts a console's serial output into a radio link. They work in pairs, one at
the source and one at the board, except where the board has its own receiver, in which case
the one at the source is enough.[^wa1][^wa3] The [Otter](../scoreboard/otter.md) boards are
the case in point: their radio is built in, so a console needs only its own
adapter.[^f1004]

Both ends must agree on a channel, and on the later generations a PAN ID as well. CTS's
guides give the valid range as channels 0 to 11 and PAN IDs 0 to 15, set on DIP switches
inside the equipment.[^f1004][^f995] Three generations are documented:
the [Sky-Fi WA-1](wa-1.md), which switches between transmitting over RS-232 and receiving
over RS-485; the [WA-2](wa-2.md), which appears only in other products' manuals; and the
current [WA-3](wa-3.md), rated at 2.4 GHz over 1000 ft (100 m) with 12 channels of 8
networks each.[^wa1][^wa3][^f1045]

## Controllers

A controller holds the data itself rather than passing on someone else's. The score, the
clock or the workout lives in the controller, which sends it to a board with no timing
console in the circuit, and that suits a sport or a session that does not need
one.[^f1045][^f901]

The [WTTC-1](wttc-1.md) is the tabletop version, worked from a keypad at the officials'
table, and the [WHC-1](whc-1.md) is the handheld equivalent; both reach a multisport board
directly, without an adapter of their own.[^f1045] On the Otter boards they can also set the
time of day and change a board's channel.[^f1004] The
[pace clock controller](../pace-clock/upc-c.md), `UPC-C`, does the same kind of job on the
training side, storing workouts and playing them out onto a pace clock or a scoreboard, and
is covered with the [pace clocks](../pace-clock/index.md).[^f901] The oldest of the group is the
[GameLink console](gamelink-console.md), a keyboard for team-sport data that could feed a
matrix display through [DisplayLink](../../../software/displaylink.md) or, with a standalone
template loaded, drive the display on its own.[^te15]

## Video board controllers

An LED video wall is not addressed over a data port. The display computer renders a frame,
and a controller between the computer and the wall turns that video signal into panel
data.[^f1062] CTS names five it has shipped that can also produce an output suitable for
streaming: the [MCTRL-300](mctrl-300.md), [MCTRL-600](mctrl-600.md) and
[MIC-VPU-01](mic-vpu-01.md), which need a pass-through capture device, and the
[VX4](vx4.md) and [MCTRL-660](mctrl-660.md), which do not.[^f1062][^blog] Four of the five
are [NovaStar](../../../vendors/novastar.md) products that CTS resells; the maker of the
`MIC-VPU-01` is not established.

Older installations used a different generation again. The DisplayLink Plus help file names
CVC, CDC and VPU video processors, and specifies that a CVC has to be set to PC mode for the
computer's output to appear on the board. None of the three has a page here.[^dlphelp]

## Products

Every entry below is a stub. The two overviews divide the hardware by what it does rather
than by who made it, so a NovaStar controller and a CTS adapter sit in the same table.

| Product | Maker | Type | Status |
|---|---|---|---|
| [Sky-Fi WA-1](wa-1.md) | Colorado Time Systems | Wireless scoreboard data adapter | Superseded |
| [WA-2](wa-2.md) | Colorado Time Systems | Wireless scoreboard adapter | Superseded |
| [WA-3](wa-3.md) | Colorado Time Systems | 2.4 GHz wireless scoreboard adapter | Current |
| [WTTC-1](wttc-1.md) | Colorado Time Systems | Tabletop controller for multisport boards | Documented |
| [WHC-1](whc-1.md) | Colorado Time Systems | Handheld controller for multisport boards | Documented |
| [GameLink console](gamelink-console.md) | Colorado Time Systems | Keyboard console for team-sport data entry | Discontinued |
| [MCTRL-300](mctrl-300.md) | NovaStar | LED video display controller | Shipped by CTS |
| [MCTRL-600](mctrl-600.md) | NovaStar | LED video display controller | Shipped by CTS |
| [MCTRL-660](mctrl-660.md) | NovaStar | LED video display controller | Shipped by CTS |
| [VX4](vx4.md) | NovaStar | LED video display controller with built-in scaling | Shipped by CTS |
| [MIC-VPU-01](mic-vpu-01.md) | Not established | Video processing unit | Shipped by CTS |

## See also

- [Scoreboards](../scoreboard/index.md): the boards this hardware feeds
- [Timers](../../swimming/timers/index.md): the consoles that are the usual data source
- [DisplayLink Plus](../../../software/displaylink-plus.md): the software behind a video
  board controller
- [Common equipment](../index.md): the shared hardware section this belongs to
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md) and
  [NovaStar](../../../vendors/novastar.md): the manufacturers

See everything tagged [Scoring](../../../categories.md).

## References

[^wa1]: Colorado Time Systems, Sky-Fi Wireless Adapter (WA-1) User Instructions.
[^wa3]: Colorado Time Systems, 2.4 GHz Wireless Scoreboard Adapter datasheet (Rev. 04/19).
[^f1045]: Colorado Time Systems, 2.4 GHz Wireless Adapter WA-3 User Guide (F1045).
[^f1004]: Colorado Time Systems, Scoreboard for Swimming & Track With 2.4 GHz Integrated Wireless, Installation and User Guide (F1004 Rev. 202605).
[^f995]: Colorado Time Systems, Diving Scoreboard With 2.4 GHz Integrated Wireless, Installation and User Guide (F995 Rev. 202605).
[^f901]: Colorado Time Systems, Pace Clock Controller User Guide (F901 Rev. 1007).
[^te15]: Colorado Time Systems, Template Editor v1.5 Users Guide (F855 Rev. 0404).
[^f1062]: [Colorado Time Systems, DisplayLink Video to Broadcast Software Instructions (F1062)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf) (Rev. 202104).
[^blog]: [Colorado Time Systems, A Guide to Live Streaming with DisplayLink+](https://coloradotime.com/blog/a-guide-to-live-streaming-with-displaylink).
[^dlphelp]: Colorado Time Systems, Display Link Plus Help, troubleshooting topic (CVC, CDC and VPU processors).
