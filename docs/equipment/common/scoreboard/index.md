---
title: Scoreboards
description: >-
  How aquatic scoreboards work, from numeric digit modules to matrix and LED video
  boards, and what the rules require of a results display.
tags:
  - Equipment
  - Scoring
  - Timing
---

<!-- Research notes (do not publish):
  Held sources used: the LED and Light Reflective Scoreboards datasheet (Rev. 08/12),
  F218 (display module installation, Rev. 201705), F853 (Myriad/Mercury16), F1062 and the
  CTS live-streaming blog post, the 2015 catalogue, the Sky-Fi WA-1 instructions and the
  WA-3 datasheet and F1045, all under sources/vendors/colorado-time-systems/, plus World
  Aquatics Facilities Rules 2021-2025.

  Named in held sources and not covered anywhere on this wiki, each a candidate page:
  - LED-REX, a retrofit converting a light-reflective board to LED (2011 catalogue,
    line 665).
  - The 6-digit scoreboards, which share LED-R module dimensions (2011 catalogue, 671).
  - Multisport scoreboards, models CM-1400, CM-1401, CM-1406, BB-1101 and BK-1300 among
    others, all pointing at one guide, F984 (CTS manuals index).
  - The WA-2 adapter, attested in the DL+ help and elsewhere with no document held.
  - WTTC-1 and WHC-1 wireless controllers, the UPC-C pace clock controller, and SynchroMM.
  - Colorado Display Systems, the CTS display division that publishes the general
    scoreboard catalogue (catalogs-brochures/cts-scoreboard-catalog-colorado-display-systems).
  - The CVC, CDC and VPU video processors named in the DL+ help for older installations.

  Not yet read end to end: F290 (scoreboard installation and service, 70 KB of
  extraction), the mini scoreboard guide F927, and the WA-3 guide F1045. F1078 and F1079,
  the current LED-R guides, are not held at all and are the obvious next request.

  Deliberately out of scope here: pace clocks and shot clocks, which are a class of their
  own and have their own folder of held sources, and the deck clock (F985).
-->
A scoreboard, or display board, is the board that shows a competition's times, places,
scores and event information to the athletes and the spectators. It displays what another
device has already measured: a [timing console](../../swimming/timers/index.md) runs the
race and sends the result to the board, and on a matrix or video board a computer running
display software decides where each value appears. Colorado Time Systems, whose boards this
section covers so far, has built three kinds: numeric boards of fixed seven-segment digits,
matrix boards of addressable pixels, and LED video displays driven as a video
output.[^ledsheet][^f853][^f1062]

## Numeric boards

A numeric board is built from display modules, each one line of eight seven-segment digits
carrying seven decimal points and a colon, behind a weathershield with a non-glare face.
Modules combine: they stack vertically up to thirteen units, mount flat or in a corner, and can sit
side by side, so a board's line count is an ordering decision rather than a fixed
product.[^ledsheet][^f218] CTS offers the digits in two forms. LED digits, the [LED-R](led-r.md) line, are
10.1 inches (25.7 cm) high in red, green, amber or blue, and are the current product; that
article carries the line configurations, module codes and mounting detail. Light-reflective digits are 9 inches (22.9 cm)
high and fluorescent yellow, and emit nothing: each segment is a mechanical part that turns
to show its face or its edge, which is why the service instructions cover replacing segment
base clips and bearings rather than lamps.[^ledsheet][^f218]

The modules are specified for the pool environment, rated 0–50 °C at up to 90% relative
humidity (non-condensing) and up to 3000 m altitude. A line draws under 1 A and runs on
115 VAC ±10% at 50–60 Hz in the United States or 230 VAC ±10% elsewhere; CTS requires the
circuit not be shared with other equipment, because the board is sensitive to electrical
noise on the supply. Data reaches the board over an RS-232 scoreboard port, and the
permanent data cable is ordered by length, in 100, 150 or 200 foot runs.[^ledsheet][^f218]
A numeric board is not limited to one sport: the same modules show swimming, diving, water
polo, artistic swimming and track information, and with the pace clock program on a CTS
console the board serves as a pace clock or a time-of-day clock.[^ledsheet][^f218]

The cable can be replaced by a radio link, through a wireless adapter at each end or, on a
board with its own receiver, by one adapter at the console. The adapters and the other
hardware that feeds a board are covered on the
[scoreboard control overview](../scoreboard-control/index.md).[^wa1][^wa3]

Later numeric boards take their data by radio rather than over a cable. CTS launched the
[Otter](otter.md) line around 2015 in swimming, diving and water polo versions, with 2.4 GHz
reception, antennas inside the case, 5 inch digits, a coating on the digits and circuit
boards to resist corrosion, and brightness that follows the light in the room. A swimming
board pairs with a System 6 wireless adapter or a
[Dolphin](../../swimming/semi-automatic/dolphin.md); a water polo board can also be run on a
cable from a System 6.[^cat2015] Smaller installations use the compact
[mini LED scoreboard](mini-scoreboard.md), a two-line board sold in portable and fixed
forms.[^mini]

## Matrix boards

A matrix board replaces fixed digits with a grid of addressable pixels, so the same surface
can show text in any arrangement, graphics and animation as well as timing data. CTS built
this generation as the [Myriad](myriad.md) and [Mercury16](mercury16.md) lines, and drove
them from a dedicated computer running [DisplayLink](../../../software/displaylink.md),
which is where a board's content was composed.[^f853][^dl37]

The construction is modular in both power and data. The viewable surface is an array of
8×8 pixel modules, called 8x8s, held in module boxes; each row of the board has a row
controller and an Ethernet card, and ribbon cables carry data from the row controller
through the 8x8s in that row in turn. Coaxial cable runs from the display computer to a wall
plate and on to the first Ethernet card, using BNC connectors with a T and a terminator at
the computer, and short lengths of the same cable link one row's Ethernet card to the next.
Each module box holds its own power supply, and power reaches the row controllers, 8x8s,
fans and resistors through Y adapters. A module line draws 2 A per box, with a maximum of
four boxes across before another circuit is required; CTS's rule of thumb is one dedicated
20 A duplex per block of two rows and four columns.[^f853]

## Video displays

CTS's current displays are LED video walls, driven as a video output rather than over a
data port: the display software renders a frame on the computer's monitor and a controller
between the computer and the board turns that video signal into panel data. The link from the
computer to the controller is a video cable, most often HDMI to DVI, and the controllers CTS
has shipped are covered on the
[scoreboard control overview](../scoreboard-control/index.md).[^f1062][^blog]

## Governing-body requirements

World Aquatics facilities rules treat a spectator readout board as an essential accessory
of a minimum automatic officiating installation, alongside the printout, relay take-off
judging, the automatic lap counter and the readout of splits.[^frules] At the Olympic Games
and World Championships the rules also set the board's size: at least twelve lines of
thirty-two characters, each character at least 360 mm high, on a board no smaller than
7.5 m wide by 4.5 m high. A line-matrix board of that class must scroll its lines up or
down and blink them; a full-matrix board must be programmable and able to show
animation.[^frules] The artistic swimming rules set a lower floor, a scoreboard of at least
ten lines of thirty-two digits, able to show every recorded value and the running time,
unless the board already meets the Olympic specification.[^frules]

One rule constrains where a board may go. Electronic readout boards are permitted under the
starting blocks, but they may not flash, and their figures must hold still during a
backstroke start.[^frules]

## Products

CTS's current aquatic scoreboards are the [Otter](otter.md) boards, the
[mini LED scoreboard](mini-scoreboard.md) and the [LED-R](led-r.md) numeric line, each with
its own guide on the company's manuals index; the Myriad and Mercury16 matrix displays
below are out of production, and CTS publishes nothing for them now.[^manuals]

This section catalogs the display hardware named in the articles on this wiki. The
[LED-R](led-r.md) module, the [mini LED scoreboard](mini-scoreboard.md) and the
[Otter](otter.md) boards have had research passes of their own; the rest are stubs, written
from what a manual or catalogue says in passing while another article was being
researched.

| Product | Maker | Type | Status |
|---|---|---|---|
| [Otter](otter.md) | Colorado Time Systems | Wireless LED numeric scoreboards for swimming, diving and water polo | Current |
| [LED-R](led-r.md) | Colorado Time Systems | Single-line LED numeric scoreboard module | Current |
| [LED-REX](led-rex.md) | Colorado Time Systems | LED retrofit for a light-reflective board | Attested 2011 |
| [Mini LED scoreboard](mini-scoreboard.md) | Colorado Time Systems | Compact two-line numeric board, portable or fixed | Current; the 2026 datasheet lists portable models only |
| [Mini scoreboard caddy](cad-mini.md) | Colorado Time Systems | Wheeled frame for four or five modules | Documented |
| [Myriad](myriad.md) | Colorado Time Systems | Multi-color LED matrix display | Attested 1997; discontinued |
| [Mercury16](mercury16.md) | Colorado Time Systems | Indoor LED matrix display, with outdoor and Sun Series variants | Attested 1996; discontinued |

The adapters, controllers and video processors that feed these boards are listed on the
[scoreboard control overview](../scoreboard-control/index.md).

## See also

- [DisplayLink Plus](../../../software/displaylink-plus.md) and
  [DisplayLink](../../../software/displaylink.md): the software that composes what a matrix
  or video board shows
- [Scoreboard control](../scoreboard-control/index.md): the adapters, controllers and video
  processors that feed a board
- [Timers](../../swimming/timers/index.md): the consoles that produce the data a board
  displays
- [Common equipment](../index.md): the shared hardware section this belongs to
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md) and
  [NovaStar](../../../vendors/novastar.md): the manufacturers

See everything tagged [Scoring](../../../categories.md).

## References

[^ledsheet]: Colorado Time Systems, LED and Light Reflective Scoreboards datasheet (Rev. 08/12), specifications table.
[^f218]: [Colorado Time Systems, Single and Multi-line Scoreboard Display Modules Installation Guide (F218 Rev. 201705)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Scoreboards/Scoreboard_Installation_Guide_F218.pdf).
[^f853]: Colorado Time Systems, Myriad/Mercury16 Display Manual (F853 Rev. 0100), sections 1 and 2.
[^dl37]: Colorado Time Systems, DisplayLink 3.7 Users Guide (F888 Rev. 0404).
[^f1062]: [Colorado Time Systems, DisplayLink Video to Broadcast Software Instructions (F1062)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf) (Rev. 202104).
[^blog]: [Colorado Time Systems, A Guide to Live Streaming with DisplayLink+](https://coloradotime.com/blog/a-guide-to-live-streaming-with-displaylink).
[^cat2015]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2015), Numeric Scoreboards section.
[^wa1]: Colorado Time Systems, Sky-Fi Wireless Adapter (WA-1) User Instructions.
[^wa3]: Colorado Time Systems, 2.4 GHz Wireless Scoreboard Adapter datasheet (Rev. 04/19), specifications.
[^f1045]: Colorado Time Systems, 2.4 GHz Wireless Adapter WA-3 User Guide (F1045).
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (Otter F995 and F1004, Mini Scoreboard F927, LED-R F1078 and F1079; no entry for Myriad, Mercury or the DisplayLink programs).
[^mini]: Colorado Time Systems, Mini LED Scoreboard datasheet (Rev. 03/14).
[^frules]: [World Aquatics, Facilities Rules 2021–2025](https://resources.fina.org/fina/document/2022/02/08/77c3058d-b549-4543-8524-ad51a857864e/210805-Facilities-Rules_clean.pdf), FR 2.1.8, FR 2.3.6.2, FR 2.3.7.1 and FR 5.3.6.
