---
title: Software
tags:
  - Software
---

The software used to run aquatic competitions, the programs that manage meets and
teams, drive the timing hardware, and put results on a display. A timing console
measures a race and emits the result as data, and software reads that data to produce
the scoreboard, the printed results, and the record of the meet. This
section documents those programs and the file formats that carry information
between them.

## What lives here

- Meet-management software, builds events, seeds entries, records results, and
  scores the competition.
- Team-management software, rosters, best times, and entries on the club side.
- Display software, the applications that push results from a timing console to
  scoreboards and video boards.
- File formats, the interchange formats that move entries and results between
  team software, meet software, and timing systems.

The display software is the best covered of these; the meet-management programs have
stub pages only. The meet-management and team-management programs in common use are commercial
products from other vendors, and the workflows they support are described under
[meet management](../meet-management/index.md) and
[team management](../team-management/index.md) rather than here.

<!-- TODO: needs source: the three meet-management pages are stubs written from a
     timing-system research pass, not from their own. Team-management applications
     (Hy-Tek Team Manager) and CTS Synchro Meet Manager have no articles at all.
     Each needs its own research pass before a page is written or built out. -->

## Meet-management software

Meet-management software builds and seeds a competition, scores it, and reads finish
times from the timing equipment. The three programs below are the ones Colorado Time
Systems names as able to read results from a
[Dolphin Wireless Stopwatch Timing System](../equipment/swimming/semi-automatic/dolphin.md);
each is documented here only as far as that timing interface goes.[^f912]

| Program | Vendor | Notes |
|---|---|---|
| [Hy-Tek Meet Manager](hy-tek-meet-manager.md) | [Hy-Tek Sports Software](../vendors/hy-tek.md), part of [The Active Network](../vendors/active-network.md) since 2008 | Advertised since 1986 and the program most American consoles were built to talk to; reads Dolphin `DO3` and `DO4` files as either the primary or the backup source |
| [SwimTopia Meet Maestro](meet-maestro.md) | SwimTopia | Integrates with the Dolphin directly, and also sends event and heat detail back into the Dolphin software |
| [Splash Meet Manager](splash-meet-manager.md) | Splash Software, Berne | Used chiefly by European clubs and federations |

Meet Manager has had a research pass of its own; the other two are stubs. The
[Easy Meet](easy-meet.md), [Championship Meet Management](championship-meet-management.md)
and [Computerized Swim League](computerized-swim-league.md) pages cover rivals and
predecessors the swimming press names, and [Meet Mobile](meet-mobile.md) is the
live-results application that publishes what a meet scores.

## Display software

Display software sits between the timing equipment and the board. It does not time
or score anything itself: it receives scoreboard data from a console such as the
[Gen7 Serial Timer](../equipment/swimming/timers/gen7-serial.md) or
[System 6](../equipment/swimming/timers/system-6.md), places each value in the
position a template defines, and renders the finished frame. Fonts, colors,
layout, and any sponsor content are set in the software rather than on the
timer.[^help]

All the documented programs are from
[Colorado Time Systems](../vendors/colorado-time-systems.md), and each is connected
to the others. DisplayLink Plus is the current program. DisplayLink is the earlier
suite it replaced, and its templates cannot be opened in the newer software. The
Standalone Template Editor is the DisplayLink Plus template designer packaged on its
own. AquaSync runs on top of DisplayLink Plus and sends the same data to streaming
software instead of to a board, and CTStream is an earlier overlay connection named only
in the DisplayLink Plus release notes.[^help][^relnotes][^shop]

| Program | Vendor | Role | Status |
|---|---|---|---|
| [DisplayLink Plus](displaylink-plus.md) | Colorado Time Systems | Drives matrix and LED video displays from templates, sequences, and media files | Current; version 4.7.0, issued 16 December 2025 |
| [DisplayLink](displaylink.md) | Colorado Time Systems | The matrix-display suite it replaced, split across a Designer window, a separate Template Editor, and the AquaLink and GameLink data modules | Discontinued; attested from 1996; ran on Windows NT 4.0 or Windows 2000 |
| [Standalone Template Editor](standalone-template-editor.md) | Colorado Time Systems | The DisplayLink Plus template designer sold as a separate application, part number `R-470-121` | Current; shipped in DisplayLink Plus v4.3.14, March 2020, announced as a product February 2021 |
| [CTS AquaSync](cts-aquasync.md) | Colorado Time Systems | Renders live timing and scoring as broadcast-style graphics over a video stream, reaching streaming software over NDI; part number `R-470-123` | Announced April 2026; requires DisplayLink Plus |
| [CTStream](ctstream.md) | Not established | Video overlay software DisplayLink Plus gained a connection to in 2022 | Stub; attested only in the DisplayLink Plus release notes |

[DisplayLink Plus](displaylink-plus.md) carries the shared background on templates, sports
modules, and the connections to timing consoles and meet-management computers that the
other articles refer back to. Of the display pages only CTStream is still a stub, because
nothing about it has been published beyond those release notes.

## File formats

Two formats appear across the display software. A template is a `.tpl` file naming
which data items to show, where each sits on the board, and how each is formatted.
Swimmer and event name data is carried in `.scb` files, which DisplayLink Plus can
import from disk or removable media, and which a Gen7 console can load directly from
a USB drive.[^help][^f1034]

[SDIF](sdif.md), the Standard Data Interchange Format published by United States Swimming,
is the open standard for moving entries and results between programs, carried in `.sd3`
files of fixed 162-byte records. Hy-Tek's own [Commlink](commlink.md) did the same job on a
diskette and was treated as an alternative to it rather than an implementation of it.

Hy-Tek's own formats sit beside that standard rather than inside it, and they come in
pairs. Results go out as [CL2](cl2.md) and [HY3](hy3.md) together, event lists as
[HYV](hyv.md) and [EV3](ev3.md) together, with the older of each pair read by Team Manager
releases before 4.0G and the newer by 4.0G and later. Hy-Tek has published a specification
for none of them. Each line of an HY3 ends with a checksum the company never documented,
which the program enforces on import; swimming volunteers worked it out and published it in
2010, and it has been reproducible ever since. None of the four extensions appears anywhere
in the source collection held for this wiki, so those pages rest on external sources and
say so.

## See also

- [Meet management](../meet-management/index.md): the competition workflow the meet
  software supports
- [Team management](../team-management/index.md): the club-side workflow the team
  software supports
- [Timers](../equipment/swimming/timers/index.md): the consoles that produce the data
  this software displays
- [Equipment](../equipment/index.md): the hardware this software drives
- [Colorado Time Systems](../vendors/colorado-time-systems.md): the vendor of all four
  documented programs

See everything tagged [Software](../categories.md).

## References

[^help]: Colorado Time Systems, Display Link Plus Help (help file shipped with the software).
[^relnotes]: Colorado Time Systems, Display Link Plus Help, Release Notes topic.
[^shop]: [Colorado Time Systems, DisplayLink Plus](https://shop.coloradotime.com/collections/displaylink-plus).
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf), Appendix C (athlete name integration).
[^f912]: [Colorado Time Systems, Dolphin User Guide (F912)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphinextendedinstructions-F912.pdf) (Rev. 202412), which names the three meet-management programs.
