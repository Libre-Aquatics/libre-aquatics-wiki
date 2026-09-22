---
title: Colorado Time Systems Deck Clock
description: >-
  The deck clock is a Colorado Time Systems portable multisport clock that shows game
  and shot time in competition and doubles as a pace clock the rest of the time.
tags:
  - Equipment
  - Timing
  - Scoring
infoboxTitle: Deck Clock
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`MS-0043`–`MS-0045`; datasheet `DC-1500`, `DC-1501`, `DC-1502`'
  - label: Type
    value: Portable multisport game, shot and pace clock
  - label: Digits
    value: 5 in upper, 10 in lower
  - label: Wireless
    value: 2.4 GHz; channel 0–11, PAN ID 0–15, module address `01`–`1E`
  - label: Dimensions
    value: 32 × 18.5 × 12 in (81.3 × 47 × 30.5 cm)
  - label: Weight
    value: 30 lb (13.6 kg)
  - label: Power
    value: Two Powersonic PS1270 gel cells, or 120/240 VAC autosensing
  - label: Status
    value: Current
  - label: Manual
    value: Deck Clock User Guide (F985 Rev. 202007)
    href: 'https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf'
---

<!--
Research notes, deck clock.

Surfaced while building out the handheld segment timer, which names deck clocks as one of
the three display types it drives. Two numbering schemes again, as with the slim pace clocks.

F985, Deck Clock User Guide, Rev. 202007, ©2020, under
sources/vendors/colorado-time-systems/pace-clocks/. Product identification gives the product
as Multisport Deck Clock and the model numbers as MS-0043, MS-0044 and MS-0045, which places
it in the MS- family the WA-3 guide F1045 defines. The datasheet
cts-deck-clock.txt, Rev 05/18, uses DC-1500 for the mixed red and amber version, DC-1501 for
all red and DC-1502 for all amber, and is the only source for the dimensions, the weight and
the digit sizes. A third document, cts-water-polo-colorado-time-systems-deck-clocks.txt
(Rev 07/23), repeats the DC- numbers and the same specifications.

What it is. The enclosure is polyethylene, built to shrug off water and sunlight, and the
clock is meant to be carried: there is a handle, and the base is weighted against tipping.
Brightness tracks the room through a light sensor. A horn is built in rather than bolted on,
and it can be given one voice for the game and another for the shot clock, which is CTS's
stated reason for dropping the separate horn unit. Which number lands on which row depends
on what the clock is hearing. Under scoreboard data the larger 10 in row carries the shot
count and the smaller 5 in row the game time. With no data arriving the clock falls back to
the hour and minute, seconds below. That fallback is what makes the product a pace clock at
all: F985 says the clocks then fall into step with one another, and with CTS slim pace
clocks and scoreboards, provided the channel and PAN match.

Two findings worth keeping.

First, the module address range. F985's push-button menu offers 1 to 6, the same as the slim
pace clock and the same as the handheld controllers expose. But its DIP table on switch bank
S1 accepts 01 to 1E hexadecimal, with 1F reserved as a test mode, so the hardware addresses
thirty modules where the menu reaches six. Nothing held explains the gap. This is what the
segment timer article means when it says module 1 to 6 is a limit of the controller rather
than of the display.

Second, F985 predates the segment timer. Rev. 202007 is July 2020 and F1050 is March 2021,
and F985's list of data sources names only the tabletop controller, the handheld controller
and a sports timer running water polo. So the deck clock manual does not know about the
segment timer, while the segment timer manual names deck clocks. Do not read the omission as
incompatibility.

Water polo specifics from F985: for data to land correctly from a System 6 or System 5, two
of the console's scoreboard channels have to be at their factory defaults, channel 1 on
module 1 and channel 2 on module 3, which the console's Define Module submenu can restore in
one step. The datasheet adds that console data reaches the clock through a WA-2 adapter, not
a WA-3.

Batteries: two Powersonic PS1270 gel cells, UL recognized MH20845, CTS part R-420-003,
replaced as a pair. F985 says to run on battery rather than mains outdoors or near water.

Standards followed are UL 48, CAN/CSA C22.2 #207, FCC 47CFR15B Class A and ICES-003. Note
that unlike the slim pace clock guide, F985 prints no FCC ID and no FCC compliance statement,
so the radio module cannot be identified from held sources even though the clock plainly has
one.

Still to research: which MS- number is which colour; whether the DC- and MS- schemes map one
to one; the battery run time and charge time; the horn's tone options, which F985 says are
set from the tabletop controller; what it costs; and whether the deck clock belongs to the
pace clocks section or the water polo section, since it does both jobs. It is filed here
because the segment timer drives it as a pace clock, and the scoreboards overview had already
excluded it.
-->

This article is a stub. The deck clock is a Colorado Time Systems portable multisport clock,
model numbers `MS-0043` through `MS-0045` and sold on the datasheet as `DC-1500`, `DC-1501`
and `DC-1502`, which splits its two digit rows between the game clock at 5 in and the shot
clock at 10 in whenever a controller is feeding it.

With no controller feeding it, the clock falls back to the time of day and becomes a pace
clock, keeping step with other CTS clocks on the same channel and network; see the
[pace clocks overview](index.md) for the shared background.
