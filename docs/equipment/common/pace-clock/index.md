---
title: Pace clocks
seoTitle: Swimming pace clocks
description: >-
  How a pace clock paces interval training, and the ways one is driven: standalone,
  from a workout controller, or from a timing console's pace clock program.
tags:
  - Equipment
  - Timing
  - Swimming
---

<!-- Research notes:
  This section was founded in September 2026, on the pass that built out the pace clock
  controller. Before that, pace clocks had no home: the scoreboards overview declared them
  out of scope as "a class of their own", and the controller sat under scoreboard control
  with a note saying it should move once a section existed. Both notes have been retired.

  Scope decision. This section covers the training role only. Most of the CTS enclosures
  are sold as combined pace clock and shot clock units (F890, F891, F904 and F910 are each
  titled for both), but a shot clock is water polo game equipment and belongs with that
  sport. The overview says so and links across rather than absorbing it. The deck clock
  (F985) is a related display the scoreboards overview also excluded; it is filed here,
  because the segment timer drives it as a pace clock.

  Held sources for this page: the CTS pace clock folder under
  sources/vendors/colorado-time-systems/pace-clocks/. Used here: F901 (pace
  clock controller, ©2007), F819 (Ultimate Pace Clock, ©1995, Rev. 0903), F1050 (handheld
  segment timer, 2021), and the current-line guides F890, F891, F904 (held in revisions
  almost nineteen years apart, 1106 of November 2006 and 202507 of July 2025), F910, F972
  and F985. Also held and cited: F509, the System 5 pace clock software guide (Rev. 0698),
  which is the System 5 half of the console-program claim that F873 covers for the System 6.
  The 2008 display catalogue supplies the part-number list. F925, the counting clock pro
  guide, is held but that product is not written up here.

  Governing bodies: one rule found, three bodies silent. USA Swimming carries 103.20 Pace
  Clocks, an LSC-level provision in the mini rulebook, and it is present unchanged in the
  2022, 2025 and 2026 editions held here (p. 56 in each, listed in the contents). It asks
  for a minimum of two clocks, large and accurate, in any warm-up or warm-down
  area, and it would rather see them split one to a side. Every swimmer in the area has to
  be able to see one. Note what it does not do: it sets no accuracy figure, no digit size
  and no display format, and it governs warm-up rather than competition. The World Aquatics documents (competition regulations
  2026, facilities rules 2021-2025, swimming technical rules 2023-2025), the NCAA and the
  NFHS return nothing for "pace clock" or "interval clock".

  An earlier draft of this page asserted the negative for all four bodies and said so in
  the body text. That was wrong, and it is recorded here rather than quietly dropped
  because the failure is instructive: the claim was a verified-absence claim, and those
  are only as good as the grep behind them. Re-run it before repeating it.

  Current line, from coloradotime.com/pace-clocks-shot-clocks as of September 2026: pace
  clocks for training with 10 in LED digits in red or amber and wireless synchronization;
  slim pace clocks with 2.4 GHz wireless built in; the pace clock controller, listed there
  as "UPC"; and the deck clock, DC-1500. CTS's manuals index hosts F890, F891, F904, F910,
  F972, F985 and the System 6 pace clock software guide F873, but neither F901 nor F819.

  Still to research, and the obvious next passes for this section: the Pro and Basic pace
  clocks, the wireless upgrade kit K-PCW-1 (F917), the counting clock pro (F925), building
  out the slim pace clock and deck clock stubs this pass created from F972 and F985, and
  the shot clock guides F410
  (1995, the longest document in the folder) and F732. Two duplicate pairs need
  the same treatment the two F901 files got: check whether
  cts-pace-clocks-shot-clocks-large-10-led and its -2 sibling are the same datasheet.
-->

A pace clock, or interval clock, is a large display that counts seconds and minutes beside
a training pool so that swimmers can read their own send-off times and rest intervals
without a coach calling every one. It shows elapsed time rather than a race result, so it
sits outside the competition timing chain that a
[timing console](../../swimming/timers/index.md) and a [scoreboard](../scoreboard/index.md)
form, even when the same board does both jobs on different days.

## How a pace clock is used

Interval training divides a session into sets of repeats with a fixed departure time. A set
written as 10 × 100 on 1:30 means ten repeats over 100 metres or yards, each swimmer
leaving the wall every minute and a half, with whatever time is left after the swim serving
as the rest. The clock makes that self-directed: swimmers watch the sweep or the digits and
go on their own interval, and a lane can run a different set from the lane beside it.

Two conventions follow from that. A clock may count up, so the reading is the elapsed time
of the current repeat, or count down to zero at the moment of departure. Where several
swimmers share a lane they leave in sequence rather than together, spaced by a few seconds,
which is why clocks and the equipment that drives them provide a horn or tone that can
sound a series of send-offs rather than a single start.

## Ways of driving a pace clock

Four arrangements appear in the Colorado Time Systems documentation, and they differ in
where the workout is stored.

A standalone clock keeps its own settings and is programmed from buttons on the unit. This
is the ordinary case for the current pace clocks, which CTS sells with 10 in LED digits in
red or amber, and for the slim clocks with 2.4 GHz wireless built in.[^ctspc]

A workout controller stores the session and plays it out to one or more displays over a
data cable. The [pace clock controller](upc-c.md) is the long-running example, holding
fifty workouts and addressing up to ten displays, so every line of a multi-line board can
run a different set at once.[^f901] The
[handheld segment timer](whc-2.md) is the later wireless equivalent, with a smaller
capacity, reaching portable scoreboards, [deck clocks](deck-clock.md) and the
[slim pace clocks](slim-pace-clock.md) over a 2.4 GHz link.[^f1050]

A timing console can do the same job from a program sold separately: the
[System 6](../../swimming/timers/system-6.md) and
[System 5](../../swimming/timers/system-5.md) each have a pace clock program with its own
guide, which turns the competition console into the training-side source.[^f873][^f509]

Finally, a display need not be a pace clock at all. A numeric
[scoreboard](../scoreboard/index.md) that accepts the same data will show a workout, which
is how a facility avoids buying a second set of hardware for training.[^f901]

## Pace clocks and shot clocks

Most CTS clock enclosures are sold to do both jobs, and the user guides are titled for the
pair: basic, pro, wireless portable and standard, and wireless pro each cover a pace clock
and a shot clock in one document.[^f890][^f891][^f904][^f910] The difference is the role
rather than the hardware. A shot clock counts a possession in
[water polo](../../water-polo/index.md) and is part of the game, governed by the rules of
that sport, while a pace clock counts a training interval. This section covers the training
role and the water polo section covers the other.

One governing body does specify pace clocks, and it does so for warm-up rather than for
racing. USA Swimming rule 103.20 sets a floor of two clocks wherever swimmers warm up or
warm down, asks that they be large and accurate, and wants every swimmer in the area able
to see one. Splitting them between the two sides of the course is a stated preference
rather than a requirement.[^usas10320] Note how little the rule pins down: no accuracy
figure, no digit size, no display format, and it is an LSC-level provision rather than a
national technical rule. The World Aquatics, NCAA and
NFHS documents held for this wiki do not mention pace clocks at all, which fits the
division of roles above: no result in a competition depends on a pace clock.

## Products

This section catalogs the pace clock hardware named in the articles on this wiki. The
[pace clock controller](upc-c.md) and the [handheld segment timer](whc-2.md) have had
research passes of their own; the rest are stubs, written from what a manual says in
passing.

| Product | Maker | Type | Status |
|---|---|---|---|
| [Pace clock controller](upc-c.md) | Colorado Time Systems | Keypad console storing and playing out workouts | Listed as current[^ctspc] |
| [Ultimate Pace Clock](ultimate-pace-clock.md) | Colorado Time Systems | The system the controller was sold as part of, with two portable displays[^f819] | No longer listed |
| [Handheld segment timer](whc-2.md) | Colorado Time Systems | Wireless handheld interval controller, `WHC-2` | Current[^ctsstp] |
| [Slim pace clock](slim-pace-clock.md) | Colorado Time Systems | Wall-mounted LED clock, four or six digits, `MS-0037`–`MS-0040` | Current |
| [Deck clock](deck-clock.md) | Colorado Time Systems | Portable game, shot and pace clock, `MS-0043`–`MS-0045` | Current |
| [SASC9](sasc9.md) | Colorado Time Systems | Named as a display the controller drives; nothing further established | Unestablished |

The [multisport portable scoreboard](../scoreboard/multisport-portable-scoreboard.md) is
the third display a segment timer drives, and is filed with the scoreboards. CTS's clock line
beyond all of these, still uncovered, is the pace clocks for training.[^ctspc] The counting
clock pro is uncovered too, but it is not on that page; it is attested only by its own user
guide, F925.[^f925]

## See also

- [Scoreboards](../scoreboard/index.md): the display class that a workout can also be shown on
- [Timers](../../swimming/timers/index.md): the consoles whose pace clock programs do the same job
- [Water polo](../../water-polo/index.md): the sport whose shot clocks share this hardware
- [Common equipment](../index.md): the section this belongs to
- [Equipment](../../index.md): the equipment reference

## References

[^f901]: Colorado Time Systems, Pace Clock Controller User Guide (F901 Rev. 1007, ©2007).
[^f819]: Colorado Time Systems, Ultimate Pace Clock User Guide (F819 Rev. 0903, ©1995).
[^f1050]: Colorado Time Systems, Wireless Handheld Segment Timer Controller User Guide (F1050 Rev. 202103, ©2021).
[^f873]: [Colorado Time Systems, System 6 Pace Clock Software User Guide (F873)](https://coloradotime.com/support/manuals).
[^f890]: Colorado Time Systems, Basic Pace Clock and Shot Clock User Guide (F890 Rev. 202008).
[^f891]: Colorado Time Systems, Pro Pace Clock and Shot Clock User Guide (F891 Rev. 202008).
[^f904]: Colorado Time Systems, Wireless Pro Pace Clock and Shot Clock User Guide (F904 Rev. 202507).
[^f910]: Colorado Time Systems, Wireless Portable and Standard Pace Clock and Shot Clock User Guide (F910 Rev. 202008).
[^ctspc]: [Colorado Time Systems, Pace Clocks and Shot Clocks](https://coloradotime.com/pace-clocks-shot-clocks) (current line, as of 2026).
[^usas10320]: [USA Swimming, Rulebook](https://www.usaswimming.org/officials/rulebook), 103.20 Pace Clocks (warm-up and warm-down areas).
[^f509]: Colorado Time Systems, Pace Clock for the System 5 Sports Timer Software User Guide (F509 Rev. 0698).
[^f925]: Colorado Time Systems, Counting Clock Pro User Guide (F925).
[^ctsstp]: [Colorado Time Systems, Wireless Handheld Segment Timer](https://coloradotime.com/products/wireless-handheld-segment-timer) (current listing, as of 2026).
