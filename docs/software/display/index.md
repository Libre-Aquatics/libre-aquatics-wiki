---
title: Display software
seoTitle: Scoreboard and video display software
description: "Display software for aquatic competitions: programs that put timing data on scoreboards and video boards, design templates and load them, grouped by publisher."
tags:
  - Software
---

Display software sits between the timing equipment and the board. It does not time
or score anything itself: it receives scoreboard data from a console such as the
[Gen7 Serial Timer](../../equipment/swimming/timers/gen7-serial.md) or
[System 6](../../equipment/swimming/timers/system-6.md), places each value in the
position a template defines, and renders the finished frame. Fonts, colors,
layout, and any sponsor content are set in the software rather than on the
timer.[^help]

## What lives here

- Programs that render live timing data on a matrix board, a video board or a projector.
- Template editors and the tools that design content for a board.
- Programs that stream or overlay timing data on video.
- Utilities that load firmware or a layout into display hardware.

Two file types appear across the Colorado Time Systems programs. A template is a `.tpl`
file naming which data items to show, where each sits on the board, and how each is
formatted. Swimmer and event name data is carried in `.scb` files, which DisplayLink Plus
can import from disk or removable media, and which a Gen7 console can load directly from
a USB drive.[^help][^f1034]

## Articles

### Colorado Time Systems

The Colorado Time Systems display programs are connected to one another. DisplayLink Plus
is the current program. DisplayLink is the earlier suite it replaced, and its templates
cannot be opened in the newer software. The Standalone Template Editor is the DisplayLink
Plus template designer packaged on its own. AquaSync runs on top of DisplayLink Plus and
sends the same data to streaming software instead of to a board, and CTStream is an
earlier overlay connection named only in the DisplayLink Plus release
notes.[^help][^relnotes][^shop]

| Program | Role | Status |
|---|---|---|
| [DisplayLink Plus](displaylink-plus.md) | Drives matrix and LED video displays from templates, sequences, and media files | Current; version 4.7.0, issued 16 December 2025 |
| [DisplayLink](displaylink.md) | The matrix-display suite it replaced, split across a Designer window, a separate Template Editor, and the AquaLink and GameLink data modules | Discontinued; attested from 1996; ran on Windows NT 4.0 or Windows 2000 |
| [Standalone Template Editor](standalone-template-editor.md) | The DisplayLink Plus template designer sold as a separate application, part number `R-470-121` | Current; shipped in DisplayLink Plus v4.3.14, March 2020, announced as a product February 2021 |
| [CTS AquaSync](cts-aquasync.md) | Renders live timing and scoring as broadcast-style graphics over a video stream, reaching streaming software over NDI; part number `R-470-123` | Announced April 2026; requires DisplayLink Plus |
| [CTStream](ctstream.md) | Video overlay software DisplayLink Plus gained a connection to in 2022 | Attested only in the DisplayLink Plus release notes |
| [ScheduleLink](schedulelink.md) | Add-on for DisplayLink-driven matrix boards that CTS said scheduled advertisements and messages onto the display | Known from archived product pages |

[DisplayLink Plus](displaylink-plus.md) carries the shared background on templates, sports
modules, and the connections to timing consoles and meet-management computers that the
other articles refer back to.

Two smaller CTS programs serve the 2.4 GHz scoreboard hardware rather than a display. The
[MultiSport Reprogrammer](multisport-reprogrammer.md) loads firmware into the WA-2 and WA-3
adapters and the wireless controllers over USB. The
[Wireless Polo Scoreboard Mapper](wireless-polo-scoreboard-mapper.md) writes the layout an
LED-R board uses for water polo into one of those adapters. Both are known so far from
CTS's 2019 water polo firmware sheet.[^f1026]

### ALGE-Timing

- [DisplayStudio](alge-displaystudio.md): designs text, image and animation lists for ALGE
  matrix boards and loads them.
- [GAZ4Test](alge-gaz4test.md): sends data from a PC to GAZ4 and later display boards.
- [PC Display Multisport](pc-display-multisport.md): shows data from timing devices and
  SwimTime on video walls and PC screens.

### Daktronics

- [All Sport Pro](all-sport-pro.md): scoreboard control from a web browser on a laptop or
  tablet.
- [Venus](venus.md): controls scoreboards and matrix displays, and accepts live timing data
  as [ERTD](../file-formats/ertd.md).
- [Daktronics Content Server](daktronics-content-server.md): reads standings files and other
  data inputs and passes them to Daktronics display players.

### Other publishers

- [EasyAnzeige](easyanzeige.md) and [EasyVis](easyvis.md): Björn Stickan's scoreboard and
  presentation programs for meets run on [EasyWk](../meet-management/easywk.md).
- [FlashSimple](flashsimple.md): the Swiss Timing program that writes firmware to the Calypso
  WPO console.
- [Streamline](streamline.md): scoreboard and live-streaming software offered by JS
  PROdisplays.
- [TriCaster](tricaster.md): the live video production system that SWA Scoring Manager has an
  interface to.

## See also

- [Software](../index.md): the other programs and file formats
- [Scoreboards](../../equipment/common/scoreboard/index.md): the boards this software drives
- [Scoreboard control](../../equipment/common/scoreboard-control/index.md): the adapters and
  controllers between a console and a board
- [Diving and artistic swimming software](../diving-artistic-swimming/index.md): scoring
  programs, including the Display Results screen program

See everything tagged [Software](../../categories.md).

## References

[^help]: Colorado Time Systems, Display Link Plus Help (help file shipped with the software).
[^relnotes]: Colorado Time Systems, Display Link Plus Help, Release Notes topic.
[^shop]: [Colorado Time Systems, DisplayLink Plus](https://shop.coloradotime.com/collections/displaylink-plus).
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf), Appendix C (athlete name integration).
[^f1026]: [Colorado Time Systems, WA-2/WA-3 Water Polo (F1026 Rev. 201907)](https://web.archive.org/web/20220411150907/https://www.coloradotime.com/manuals/WTTC-WA2-WP-Instructions-20190722_F1026.pdf) (archived 2022).
