---
title: Colorado Time Systems QuickStart
description: >-
  QuickStart is a Colorado Time Systems portable LED display of the mid-1990s that runs as a
  pace clock and, with timing equipment plugged in, times starts, relay exchanges,
  break-outs and turns.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: QuickStart
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Type
    value: Pace clock and reaction trainer
  - label: Display
    value: Four characters, 4 in LED digits
  - label: Connection
    value: Four banana-jack inputs (pushbutton, relay platform, start system, touchpad); RS-232 to a PC
  - label: Resolution
    value: 1/100 s
  - label: Dimensions
    value: 12 in W × 8 in H × 4 in D
  - label: Weight
    value: 5 lb
  - label: Power
    value: 110 V AC adapter or eight D cells
  - label: Introduced
    value: By January 1996
  - label: Succeeded by
    value: '[QuickStart Pro](equipment/common/pace-clock/quickstart-pro.md)'
  - label: Manual
    value: QuickStart User Guide (F816 Rev. 0104)
---

<!--
Research notes, CTS QuickStart. Stub created while building out ultimate-pace-clock.md; built
out to a full article 2026-10-19.

Held and read in full:
- sources/vendors/colorado-time-systems/start-systems/cts-quickstart-user-guide-f816 (F816 Rev.
  0104, (c)2004, 22 pages; port figure rendered with PyMuPDF). Bound in front is addendum F876,
  revised 3 March 2003, (c)2003.
  - Package: the display, the guide, and an AC adapter with cable. Sold separately: the PC
    software with its cable, a pushbutton, an RJP or RJPL, a touchpad and a start system.
  - Power: a 110 V adapter, or eight D alkaline cells reached by sliding the bottom plate aside.
    Remove the cells for storage. Blinking digits mean low power.
  - Inputs: Figure 1 shows four pairs of banana jacks on the sloping left side panel, top to
    bottom Push Button, Relay Platform, Start System, Touchpad. The test mode numbers them:
    input 2 is the relay platform and input 4 the touchpad, so 1 and 3 are presumably the
    pushbutton and the start system (inferred from the order). The RS-232 port and the ON/OFF
    switch are on the right side.
  - Pace clock: counts 00:00 to 59:59, then rolls over, with nothing plugged in. To return to
    it, unplug everything and power-cycle.
  - Training modes: start reaction (start system, RJP, pushbutton) shows the last RJP release,
    which is why rocking on the block can flash an earlier time first. Backstroke starts: the
    touchpad is moved into the relay platform jack, and the display is reset only once the
    swimmer's feet are on the pad. Relay exchange (pushbutton, RJP, touchpad): negative means an
    early take-off. Break-out: the coach presses the pushbutton when the swimmer surfaces; a
    single click toggles between the reaction and break-out times, a double click resets after
    a one-second delay. Turn speed (pushbutton and touchpad) shows HS and times from the hand
    touch to the push-off; returning from it needs a power-cycle.
  - Entering turn speed: the guide body says press and keep the pushbutton down for a second, followed by a double click.
    The addendum says triple-click. Test mode: the guide body says triple-click. The addendum
    instead says hold a second pushbutton in the start-system jack, or the start system's own
    start button, while triple-clicking. The addendum's date (March 2003) is earlier than the
    revision of the guide it is bound into (0104), yet the body was not updated.
  - Test mode lights every segment for five seconds, then shows four dashes; pressing a
    working input shows CH-n. ErrX (X = 1-4 or ?) names a faulty input; Err2 can also mean
    the pushbutton was pressed more times than expected.
  - Compatibility is promised for any CTS touchpad, RJP or start system; other makes may or may
    not work. Corroded jacks can be cleaned with a bathroom limescale cleaner and a toothbrush.
  - PC software: a DOS logging program, QSTART, installed from a floppy into C:\CTS and run as
    QSTART <filename>. It asks for COM1 or COM2. It takes one swimmer name for starts or two to
    four for a relay, each up to 20 characters. F2 saves names and begins, F3 changes names,
    F1 is help, and ESC exits and saves. Shows 22 lines of data. The log file is
    comma-delimited, with columns name, start reaction, relay exchange, break-out and turn speed.
- F896, QuickStart Pro User Guide Rev. 0406, (c)2006, under the same folder: 15 training modes
  plus a test mode (16), a mode switch with eight intensity levels, two linked touchpad
  inputs, a Reset/Breakout input, an internal battery good for at least six hours, a 15 V DC
  brick on a 5-pin DIN, and colour-coded results (green, yellow, red) with fixed two- and
  three-second capture windows.
- F819, Ultimate Pace Clock User Guide Rev. 0903: its portable LR and LED displays carry the
  same four inputs (start system named as SS-1 or SS-2) and ship with the QuickStart guide.
- F507, RJP Installation Guide Rev. 1104: the RJP caddy also carries a "Quick Start".

Magazines (sources/periodicals/):
- Swimming World, January 1996 and May 1996: CTS display ads describing QuickStart as both a pace
  clock and a trainer for reaction, relay and turn timing, with a sales number. The January
  ad is the earliest dated mention found, so the product was on sale by then. The stub's
  earlier "1995 or 1996" question stands; no 1995 mention was found.
- Swimming Technique, Spring (April-June) 1996, p. 7: paid advertisement bylined Brent
  Rutemiller, "Make Starts & Turns Quicker" (title garbled in OCR). It says CTS had recently
  released the product, and that it comes with an LED clock for use with a take-off pad and
  plugs into any CTS touchpad. Testimonials: Mike Bottom (USC sprint coach), Anne Goodman James
  (Northern Michigan; two of her relays had been thrown out for leaving early at that season's
  Division II national meet), Nick Santino (Palmyra-Macedon; claims 3 s taken off girls' relay
  exchanges). The same advert ran unchanged in Summer 1996, April 1998 and July 1998, still
  saying "recently released".
- Swim News, July 1997: CTS advert picturing QuickStart and an RJP with an SS2 start system,
  through Canadian dealers.
- Swimming World, May and August 2000: CTS ad claiming no other product could time all four
  of break-outs, relay exchanges, turns and starts (a vendor claim).
- Swimming Technique, April-June and October-December 2001: CTS house ad listing a
  "QuickStart reaction timer" beside the Infinity Start System.

Web: CTS QuickStart page archived 4 December 2002 (captures to December 2004),
https://web.archive.org/web/20021204114756/http://www.coloradotime.com:80/aquaticproducts/light_reflective/prod_quickstart.asp
An earlier pass read it. It gives a four-character display with 4 in LEDs, AC or eight D cells,
12 in wide by 8 in high by 4 in deep, and 5 lb. It names SS-1, SS-2 or Infinity start systems
and calls turn speed the fifth mode. The archive could not be fetched again in this pass, so
these figures rest on the earlier reading.

Successor: the QuickStart Pro (F896, 2006). The CTS "Making Time Count" catalogue lists only
the Pro.
Still to research: part number and price; when the original was dropped (between 2004 and the
2006 Pro); the QSTART version history.
-->

QuickStart is a portable LED display made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) for swim training. On its
own it runs as a pace clock. With CTS timing equipment plugged into its side, it times a swimmer's
start reaction, relay take-off, break-out and breaststroke or butterfly turn to the hundredth of a
second.[^f816] CTS was advertising it by January 1996.[^swjan96] Its
successor, the [QuickStart Pro](quickstart-pro.md), has a guide dated 2006.[^f896]

## Role in training

This section places QuickStart among CTS training tools; pace clocks in general are covered in
the [pace clocks overview](index.md). QuickStart took the same signals a CTS timing system uses at
a meet and put them on a poolside display for practice.[^f816] These are the start signal from a start
system, the release of a [relay judging platform](../../swimming/relay-judging/cts.md) (RJP) as
the swimmer leaves the block, a hand touch on a [touchpad](../../swimming/touchpad/standard.md),
and a press of a [pushbutton](../../swimming/semi-automatic/pushbutton/cts.md). The display
shows the interval between two of these events, which tells a coach how quickly a swimmer reacted,
how close a relay take-off came to the incoming touch, or how long a turn took.[^f816]

The guide presents it as a training aid for relay exchanges, turns and starts. CTS says coaches helped
design it.[^f816] CTS later built the same four inputs into the portable displays of its
[Ultimate Pace Clock](ultimate-pace-clock.md), which shipped with the QuickStart guide.[^f819]

## Design and hardware

The QuickStart is a small free-standing LED display with four characters.[^archive] Four
pairs of banana jacks run down its left side panel. From top to bottom they take a pushbutton,
the RJP, the start system and the touchpad.[^f816] The ON/OFF switch and an RS-232 port are on the
right side. The guide promises compatibility with any CTS touchpad, RJP or start system, and says
equipment from other makers may or may not work.[^f816]

The package held the display, the guide and an AC adapter for a 110 V outlet. The pushbutton,
RJP (or the lighted RJPL), touchpad, start system and the PC software and cable were extra.[^f816]
Instead of the adapter the display can run on eight D-size alkaline cells, held behind a sliding
plate on the bottom. Blinking digits are the guide's sign of low power.[^f816] Against
chlorine the guide advises keeping the display, pushbutton and cables somewhere cool and dry.
Corroded jacks can be cleaned with a bathroom limescale cleaner and a toothbrush.[^f816]

## Operation

This section covers each mode in turn. Which mode runs depends on what is plugged in, and the
pushbutton is the control: a double click resets the display after a one-second pause, and a
single click toggles between two stored times.[^f816]

### Pace clock

Switched on with nothing connected, the display counts up from 00:00 to 59:59 and starts again
each hour.[^f816] To return to the pace clock from a training mode, the user unplugs every input
and switches the display off and on.[^f816]

### Start reaction

This mode needs a start system, an RJP and a pushbutton.[^f816] When the start system sounds, the
display starts timing and stops when the swimmer's feet leave the RJP. The reaction time stays up
until the next reset.[^f816] The display accepts every RJP release but keeps only the last one, so
a swimmer who rocks on the block may make an earlier time flash up first.[^f816] The start
systems CTS named for it include its [Infinity](../../swimming/starter/infinity-start-system.md),
[Championship](../../swimming/starter/championship-start-system.md),
[SS-1](../../swimming/starter/ss-1.md) and [SS2](../../swimming/starter/ss2.md).[^f816][^f819][^archive]

For a backstroke start, the touchpad goes into the RJP's jack and the swimmer sets their feet on
it. The coach resets the display only once the swimmer is in position.[^f816]

### Break-out

The coach presses the pushbutton when the swimmer surfaces after a start or a relay take-off.
The display then shows the time since the start signal, or since the incoming swimmer's touch
when used with a relay exchange.[^f816] A single click switches back to the reaction time.[^f816]

### Relay exchange

With a touchpad in the water and an RJP on the block, the display shows the time from the incoming
swimmer's touch to the outgoing swimmer's take-off. A negative figure means the outgoing swimmer
left early.[^f816]

### Turn speed

For breaststroke and butterfly turns, a touchpad and a pushbutton are enough. The display shows HS
(hand speed) in this mode, and measures from the swimmer's hands reaching the pad to the feet
pushing off it.[^f816] Leaving turn speed needs the display switched off and on.[^f816]

The guide and its addendum disagree on how this mode is entered. The guide says to hold the
pushbutton for a second and then double-click. The addendum, dated March 2003 and bound into the
front of the 2004 guide, replaces this with a triple click.[^f816]

### Test mode and errors

A test mode checks each input. The display lights every segment for five seconds and then shows
four dashes, and each input that works shows CH followed by its number when triggered.[^f816] An
ErrX message names a faulty input, with X being 1 to 4 or a question mark: Err4, for example, is
the touchpad. Err2 can also mean the pushbutton was pressed more times than the display
expected.[^f816]

The guide's body enters test mode with a triple click. The addendum adds a held signal in the
start-system jack, either a second pushbutton or the start system's own start button, during the
triple click.[^f816]

## PC logging software

The RS-232 port sends each result to a PC running QSTART, a DOS program supplied on floppy disk
with the optional cable.[^f816] [QSTART](../../../software/qstart.md) installs into a C:\CTS
directory and is started with the name of a log file. It asks which serial port (COM1 or COM2)
the display uses, and then for swimmer names: one for start testing, or two to four for a relay,
each up to 20 characters. Names can be left blank.[^f816] The program shows the incoming times on
screen and writes them to the log as comma-delimited text, in columns for start reaction, relay
exchange, break-out and turn speed, for loading into a spreadsheet. Function keys save the
names, change them and call up help, and Escape exits and saves.[^f816]

## Marketing

This section summarizes how CTS presented the product. Display advertisements in Swimming World
in January and May 1996 described it as a pace clock and a trainer for starts, relay exchanges and
turn speed.[^swjan96] A paid advertisement bylined Brent Rutemiller ran in Swimming Technique
from spring 1996. It said CTS had recently released QuickStart and quoted three coaches: Mike
Bottom, who then coached sprinters at the University of Southern California; Anne Goodman
James, head coach at Northern Michigan University; and Nick Santino of Palmyra-Macedon.[^st96] Goodman James's
endorsement followed a season in which two of her relays were thrown out of the Division II
national meet for leaving the block early. Santino credited the product with cutting three seconds from his
team's relay exchanges.[^st96] The same advertisement, still calling the product recently
released, ran again in 1998.[^st98]

A 1997 CTS advertisement in Swim News pictured QuickStart with an RJP and an SS2 start
system.[^swimnews] In 2000 CTS advertised it as "the only tool" that timed starts, turns, relay
exchanges and break-outs.[^sw2000] That is the company's claim. The Ultimate Pace Clock's portable
displays already did the same job.[^f819] CTS house advertisements in 2001 still listed a
"QuickStart reaction timer" next to the Infinity Start System.[^st01]

## Compared with the QuickStart Pro

The QuickStart Pro of 2006 kept the side-panel inputs and the training purpose, and changed most
of the rest.[^f896]

| | QuickStart | QuickStart Pro |
|---|---|---|
| Modes | Pace clock, start reaction, backstroke start, relay exchange, break-out, turn speed, test[^f816] | 15 training modes and a test mode, chosen with a mode switch[^f896] |
| Mode selection | By the inputs connected and pushbutton clicks[^f816] | Mode switch[^f896] |
| Touchpad inputs | One[^f816] | Two, linked, for a pad at each end[^f896] |
| Power | 110 V adapter or eight D cells[^f816] | 15 V DC supply; internal battery, at least 6 hours[^f896] |
| Results | Time on the display; PC log over RS-232[^f816] | Colour-coded green, yellow or red by result[^f896] |
| Capture | Last RJP release before reset[^f816] | Fixed two- or three-second capture windows[^f896] |

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado |
| Display | Four characters, 4 in LED digits[^archive] |
| Pace clock range | 00:00–59:59, repeating[^f816] |
| Timing resolution | 1/100 s[^f816] |
| Inputs | Pushbutton, relay platform, start system, touchpad (banana jacks)[^f816] |
| Data output | RS-232 to a PC running QSTART[^f816] |
| Power | AC adapter (110 V) or eight D alkaline cells[^f816] |
| Dimensions | 12 in W × 8 in H × 4 in D[^archive] |
| Weight | 5 lb[^archive] |
| Manual | F816 Rev. 0104 (2004), with addendum F876 (2003)[^f816] |

## Part numbers and accessories

This section lists what the guide names. No part number for the display itself was found.

- AC power adapter and cable, supplied.[^f816]
- PC software interface and cable, optional.[^f816]
- [Pushbutton](../../swimming/semi-automatic/pushbutton/cts.md), optional.[^f816]
- [Relay judging platform](../../swimming/relay-judging/cts.md), RJP or RJPL, optional.[^f816]
- [Touchpad](../../swimming/touchpad/standard.md), optional.[^f816]
- A CTS start system, optional.[^f816]
- The RJP caddy, a wheeled frame CTS described as holding RJPs, a start system and a QuickStart.[^f507]

## See also

- [QuickStart Pro](quickstart-pro.md): the 2006 successor
- [Ultimate Pace Clock](ultimate-pace-clock.md): a CTS pace clock whose portable displays had the same inputs
- [QSTART](../../../software/qstart.md): the DOS logging program
- [Colorado Time Systems RJP](../../swimming/relay-judging/cts.md): the relay judging platform it reads
- [SS-1](../../swimming/starter/ss-1.md) and [SS2](../../swimming/starter/ss2.md): CTS start systems of the period
- [Pace clocks](index.md): the pace clocks overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f816]: Colorado Time Systems, QuickStart User Guide (F816 Rev. 0104, 2004), with addendum F876 (March 2003).
[^f896]: Colorado Time Systems, QuickStart Pro User Guide (F896 Rev. 0406, 2006).
[^f819]: Colorado Time Systems, Ultimate Pace Clock User Guide (F819 Rev. 0903), QuickStart capabilities.
[^f507]: Colorado Time Systems, Relay Judging Platform Installation Guide (F507 Rev. 1104), accessories.
[^archive]: [Colorado Time Systems, QuickStart product page](https://web.archive.org/web/20021204114756/http://www.coloradotime.com:80/aquaticproducts/light_reflective/prod_quickstart.asp) (archived December 2002).
[^swjan96]: Colorado Time Systems, QuickStart advertisement, Swimming World and Junior Swimmer (January and May 1996).
[^st96]: Paid advertisement by Brent Rutemiller, QuickStart, Swimming Technique (Spring and Summer 1996), p. 7.
[^st98]: Paid advertisement, QuickStart, Swimming Technique (April and July 1998).
[^swimnews]: Colorado Time Systems, training tools advertisement, Swim News (July 1997).
[^sw2000]: Colorado Time Systems, QuickStart advertisement, Swimming World (May and August 2000).
[^st01]: Colorado Time Systems, house advertisement, Swimming Technique (April–June 2001).
