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

## History

This section traces the pace clock from the 1940s to the programmable digital clocks of the
1980s.

Coaches paced swimmers before there were pace clocks. Writing in 1961, the Grinnell
coach Irv Simone named Armbruster of the University of Iowa as the inventor of the
earliest swimming pacer he knew of, a flag tied to a cord that ran the length of a 50 m pool on pulleys.
Simone also describes a moving spotlight that some Big Ten and Big Eight coaches tried and
gave up on, and his own pacer of 1959–60, a row of lights and horns along the pool switched
by timers.[^simone61]

Who built the first pace clock is disputed. Australian sources credit Forbes Carlile, then
working with his mentor Frank Cotton at the University of Sydney. Swim News placed "the
world's first pace clock" at the North Sydney pool and named Cotton and Carlile as its
designers; Carlile's own swim school dates its introduction to 1946 at the Palm Beach rock
pool, and Swimming World in 2016 gave 1946 and both pools.[^swimnews93][^carlile][^sw1604]
American accounts credit James "Doc" Counsilman of Indiana University, though they disagree
on the year: a Swim News obituary in 2004 says he was the first to manufacture pace clocks,
in 1948, and a Swimming World timeline of 1994 says he invented one in 1949.[^swimnews04][^sw9411]
Other claims appear in passing, for the Canadian coach Howard Firby and for Counsilman jointly
with Jim Montrella.[^swimnews91][^swimnews90]

The first detailed description found in print is from 1961. Dick Threlfall, coach of the
Fremont Hills Swim Club in California, had clocks made by a Sunnyvale firm that stood 3½ ft
tall, with black figures readable from over 100 ft, a red second hand and a black minute
hand, both reset by a knob at the back. A pull cord started and stopped them. Threlfall put
one at each end of a 50 m pool and had swimmers read their own repeat times, and George
Haines of the Santa Clara Swim Club and Peter Daland of the University of Southern California
were quoted praising the arrangement.[^threlfall61] By 1964 a column of the American Swimming
Coaches Association noted that Counsilman, Daland and Haines all trained with a large pacing
clock.[^asca64]

Commercial clocks followed. Swim Training Supply, a New Jersey company, offered a giant
clock in 1962 and advertised "Giant Pace Clocks" from 1964, with a pair installed at
Princeton.[^sts62][^sts64] A 1962 article on pacing equipment already set dial clocks against
digital ones, which it called easier to read but more costly.[^pacing62] Counsilman sold a
clock of his own by mail from Bloomington, Indiana. An improved model with a stronger 60 Hz
motor was advertised in October 1964 at $65.00; by late 1965 the advertisement claimed more
than 1,000 sold, and by 1967 it gave the face as 3 ft square, alongside a 12 in battery
"Porta-Pace" model at $40.00. The advertisements ran until 1971.[^couns64][^couns65][^couns67]

Digital clocks reached the swimming press in the 1970s. From 1974 the dealer Thrifty Timing
sold a Kyroscope digital programmable pace clock at $350, later $395. Kyroscope was the brand
of Taroda Industries of Chicago, whose 1971 meet timer carried the name, and in 1976 Taroda
advertised a programmable digital pace clock from $395 with 7 in digits and programmable
interval sequences.[^kyroscope74][^kyroscope71][^taroda76] Analog clocks carried on beside them: Recreonics advertised
a clock 40 in square in 1977 with an optional tone that sounded at a preset interval, Maric a range of
battery quartz clocks in 1978, and Kiefer McNeil its Competitor clocks, electric or battery,
in 1980. Competitor clocks were still advertised in 1996.[^recreonics77][^maric78][^kiefer80][^kiefer96]

By the early 1980s the clock could hold a workout. Kyrotech's AutoCoach of 1982, a
microprocessor-controlled digital clock programmed from pushbuttons, stored up to 100 sets of
1–99 repeats.[^autocoach82] Coaches also built their own: in 1981 an Oregon age-group coach and a
Penn State chemist described a digital pace clock driven by a programmable pocket calculator, which sounded a
beep for each send-off.[^huestis81] In 1995 Daktronics announced an LED timer that it said had
been designed as a swimming pace clock.[^dak95]

## Products

This section catalogs the pace clock hardware named in the articles on this wiki. The
[pace clock controller](upc-c.md), the [handheld segment timer](whc-2.md) and the
[Pace Clock/Shot Clock](pace-clock-shot-clock.md) line have had research passes of their own;
the rest are stubs, written from what a manual says in
passing.

| Product | Maker | Type | Status |
|---|---|---|---|
| [Pace clock controller](upc-c.md) | Colorado Time Systems | Keypad console storing and playing out workouts | Listed as current[^ctspc] |
| [Ultimate Pace Clock](ultimate-pace-clock.md) | Colorado Time Systems | The system the controller was sold as part of, with two portable displays[^f819] | No longer listed |
| [Handheld segment timer](whc-2.md) | Colorado Time Systems | Wireless handheld interval controller, `WHC-2` | Current[^ctsstp] |
| [Slim pace clock](slim-pace-clock.md) | Colorado Time Systems | Wall-mounted LED clock, four or six digits, `MS-0037`–`MS-0040` | Current |
| [Deck clock](deck-clock.md) | Colorado Time Systems | Portable game, shot and pace clock, `MS-0043`–`MS-0045` | Current |
| [Pace Clock/Shot Clock](pace-clock-shot-clock.md) | Colorado Time Systems | 10 in LED pace and shot clocks, wired `PC-` and 900 MHz `PCW-`, Standard, Portable and Pro | Current[^f904] |
| [SASC9](sasc9.md) | Colorado Time Systems | Named as a display the controller drives; nothing further established | Unestablished |
| [Counsilman Pace Clock](counsilman-pace-clock.md) | James Counsilman | Electric sweep-hand clock sold by mail, and the battery Porta-Pace | Advertised 1964–1971[^couns64] |
| [STS giant pace clock](sts-giant-pace-clock.md) | Swim Training Supply | Large wall or floor clock | Advertised 1962–1967[^sts64] |
| [Kyroscope pace clock](kyroscope-pace-clock.md) | Taroda Industries | Programmable digital pace clock | Advertised 1974–1976[^kyroscope74] |
| [Recreonics pace clock](recreonics-pace-clock.md) | Recreonics | 40 in sweep-hand clock with interval tone | Advertised 1977[^recreonics77] |
| [Maric Paceclox](maric-paceclox.md) | Maric | Battery and mains sweep-hand clocks | Advertised 1978[^maric78] |
| [Competitor pace clocks](kiefer-competitor-pace-clock.md) | Kiefer McNeil | Electric and battery sweep-hand clocks | Advertised 1980; brand still sold 1996[^kiefer80][^kiefer96] |
| [AutoCoach](kyrotech-autocoach.md) | Kyrotech | Microprocessor-programmed digital pace clock | Advertised 1982–1986[^autocoach82] |
| [Daktronics LED timer](daktronics-led-timer.md) | Daktronics | LED timer designed as a pace clock | Announced 1995[^dak95] |

The [multisport portable scoreboard](../scoreboard/multisport-portable-scoreboard.md) is
the third display a segment timer drives, and is filed with the scoreboards. The counting
clock pro is not yet covered; it is attested only by its own user guide, F925.[^f925]

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
[^simone61]: Irv Simone, "Pacing Devices", Junior Swimmer–Swimming World, March 1961.
[^threlfall61]: Dick Threlfall, "Swimming Timer", Junior Swimmer–Swimming World, March 1961.
[^swimnews93]: Swim News, October 1993, on Sydney's swimming history.
[^carlile]: [Carlile Swim, How Forbes Carlile became one of sport's most influential and innovative leaders](https://www.carlile.com.au/how-forbes-carlile-became-one-of-sports-most-influential-and-innovative-leaders/) (2019).
[^sw1604]: Michael J. Stott, "Coaching Lessons with the Legends: Forbes Carlile", Swimming World, April 2016.
[^swimnews04]: Swim News, February 2004, Counsilman obituary.
[^sw9411]: Swimming World, November 1994, Counsilman obituary and research timeline.
[^swimnews91]: Swim News, October 1991, recollection of Howard Firby.
[^swimnews90]: Swim News, September 1990.
[^asca64]: Mike Milliman, "Counsilman, Daland & Haines: a study in methods", Swimming World, March 1964.
[^sts62]: Swim Training Supply, advertisement, Swimming World, September 1962.
[^sts64]: Swim Training Supply, advertisements, Swimming World, January 1964 to 1967.
[^pacing62]: Swimming World, November 1962, article on pacing devices (dial and digital pacing clocks).
[^couns64]: James Counsilman, "The New Counsilman Pace Clock", advertisement, Swimming World, October 1964.
[^couns65]: James Counsilman, advertisement, Swimming World, November 1965.
[^couns67]: James Counsilman, advertisement (Counsilman Pace Clock and Porta-Pace Clock), Swimming World, January 1967.
[^kyroscope74]: Thrifty Timing, advertisement (Kyroscope digital programmable pace clock), Swimming World, October 1974.
[^kyroscope71]: Taroda Industries, Kyroscope timing system advertisement, Swimming World, February 1971.
[^taroda76]: Taroda Industries, advertisement (programmable digital pace clock), Swimming World, November 1976.
[^recreonics77]: Recreonics, new-products advertisement, Swimming World, April 1977.
[^maric78]: Maric Paceclox, advertisement, Swimming World, September 1978.
[^kiefer80]: Kiefer McNeil, Competitor Pace Clocks advertisement, Swimming World, January 1980.
[^kiefer96]: Competitor Pace Clocks advertisement, Swimming Technique, May 1996.
[^autocoach82]: Kyrotech, AutoCoach advertisement, Swimming World, September 1982.
[^huestis81]: Doug Huestis and Doug Henry, "A computer-programmed digital pace clock for workouts", Swimming Technique, November 1981–January 1982.
[^dak95]: Swimming World, February 1995, new products (Daktronics LED timer).
[^ctsstp]: [Colorado Time Systems, Wireless Handheld Segment Timer](https://coloradotime.com/products/wireless-handheld-segment-timer) (current listing, as of 2026).
