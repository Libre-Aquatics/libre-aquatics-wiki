---
title: Colorado Time Systems Pace Clock Controller
description: >-
  The pace clock controller, UPC-C, is a Colorado Time Systems keypad console that
  stores training workouts and plays them out on pace clocks and scoreboards.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Pace Clock Controller
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`UPC-C`'
  - label: Type
    value: Workout controller for pace clocks and scoreboards
  - label: Display
    value: 32-character LCD, 1/8 in digits
  - label: Capacity
    value: 50 workouts, 30 sets each, 15 subsets per set
  - label: Displays driven
    value: Up to 10, addressed by channel
  - label: Dimensions
    value: 2.5 in H × 7.5 in L × 4.0 in W (6.4 × 19.1 × 10.2 cm)
  - label: Weight
    value: 0.8 lb (0.36 kg)
  - label: Power
    value: One 9-volt battery, or 120 VAC through transformer `015-555`
  - label: Predecessor
    value: '[Ultimate Pace Clock](equipment/common/pace-clock/ultimate-pace-clock.md) console'
  - label: Manual
    value: Pace Clock Controller User Guide (F901 Rev. 1007)
---

<!--
Research notes, pace clock controller. Built out from a stub in September 2026.

Naming, which this pass settled. The manual is titled only "Pace Clock Controller" and
never prints the string UPC-C; the designation comes from the datasheet, from the 2008
display catalogue's part-number list, and from other CTS documents that write "pace clock
controller (UPC-C)". What the letters stand for is now established rather than guessed.
Three things line up. Figure 3 of F901, which is an image and is absent from the .txt
extraction, was pulled from the PDF with PyMuPDF: the console's faceplate is printed
"Ultimate Pace Clock" in the top right corner, not "Pace Clock Controller". F819, the
Ultimate Pace Clock user guide, describes that product as a system sold three ways, a
light-reflective portable display (model UPC-LR), an LED portable display (UPC-LED), or the
stand-alone console on its own, and it calls that console "the UPC console" in several
places, alongside the fuller "Ultimate Pace Clock console" it uses more often.
And the dealer Poolweb lists the part as "Ultimate Pace Clock Controller", SKU 1151-UPC-C.
So UPC-C is the console member of the UPC-LR / UPC-LED / UPC-C family, and this page is
about a product CTS later marketed on its own under a plainer name. Treat the expansion as
well evidenced; no CTS document spells it out in one sentence.

Note the wrinkle, which the body states rather than hides. F901 says of the controller that
"The controller can also be used with the SASC9 and the Ultimate Pace Clock", treating the
Ultimate Pace Clock as a separate display. That is consistent if the name had narrowed by 2007
from the whole system to the portable displays, but no source says so.

The two F901 files. sources/vendors/colorado-time-systems/pace-clocks/ holds
cts-pace-clock-controller-user-guide-f901 and
cts-pace-clock-controller-installation-and-user-guide-f901. The stub flagged these as
needing comparison. They are two typesettings of one document: same form number, same
Rev. 1007, same 2007 copyright, and body text that is effectively identical. Every
difference is pagination and running footers, page cross-references renumbered to match,
contact-block phone extensions, or one of three trivial copy-edits. The installation
version fixes a missing "with" in the SASC9 sentence but then swallows the following
"Technical Support" heading into it, which is why that heading is missing from its contents
list; the user guide keeps the heading and the "(ext. 256)" support number. The user guide
is the better copy and is the source of record here. Do not re-compare them.

Held sources and what each supports. F901 is the source for everything
procedural: the key set, the modes, capacity, the horn, the multiple-workout feature, the
Workout Manager download and the standard-pace-clock workaround. The datasheet
cts-pace-clock-controller-program.txt (Rev 04/14) is the only source for the
physical figures, the 9-volt battery and the 32-character LCD, and the only held document
that prints UPC-C. The two barely overlap, which is why both are cited throughout rather
than one being preferred.

The cable discrepancy is real and is flagged in the body per CLAUDE.md. F901's contents
list ships a 7 ft adapter cable (0002-0437) and a separate 25 ft data cable (25DC); the
datasheet says a 15 ft connector cable. Neither is obviously an error, and no source
reconciles them. F819's console-only option, by comparison, lists a 14 ft data cable and a
7 ft adapter cable, which matches neither exactly.

Availability, checked this pass. CTS still lists the product on
coloradotime.com/pace-clocks-shot-clocks, as "Pace Clock Controller (UPC)". The dealer
Poolweb lists it at $595.62 with a 7 to 10 day lead time. So the stub's question of whether
it is still sold is answered yes, as of 2026. But CTS's manuals index
(coloradotime.com/support/manuals) hosts F890, F891, F904, F910, F972, F985 and F873, and
neither F901 nor F819, so a current buyer cannot download the manual for it. That gap is
worth stating and is why the infobox names the document without linking it.

Dating. F901 is Rev. 1007, October 2007. The datasheet is Rev 04/14. F819, the predecessor
guide, carries a 1995 copyright with Rev. 0903, September 2003, so the console design is at
least a decade older than F901. Nothing held gives a withdrawal date, and the product
appears not to have been withdrawn.

Figure 3, transcribed from the PDF image so the key set is on record: six rows. Edit Mode,
Run Mode, 1, 2, 3; Workout, Set, 4, 5, 6; Repeat Set, Dec. Interval, 7, 8, 9; Count Up,
Count Down, C/E, 0, Enter; Horn On, Horn Off, Time Of Day, Select Scbd; Start/Stop, Reset,
On. There is no visible OFF key and no visible CLEAR MEMORY key, which corroborates the
manual: OFF is hidden in the "Colorado Time Systems" lettering above Run Mode, and CLEAR
MEMORY is under the logo sweep. The faceplate logo reads "Colorado Time Systems, inc."

Still open. What the SASC9 is; it is named twice in F901 and nowhere else in the whole
corpus, and has its own stub recording that. Whether the controller's protocol is
documented anywhere, since F901 defers entirely to Hy-Tek's own guide. What the 3009
scoreboard is, named in F819 beside the 4009 and uncovered here. Whether a UPC-C can drive
the current 2.4 GHz wireless clocks, which F901 predates. Whether Workout Manager is still
sold and still able to target it.
-->

The pace clock controller, `UPC-C`, is a [Colorado Time Systems](../../../vendors/colorado-time-systems.md)
(CTS) keypad console that stores training workouts and plays them out on a pace clock or a
scoreboard, without a timing console in the loop.[^f901][^sheet] It holds fifty workouts
and can run ten of them at once on separate displays, so each line of a multi-line board
can pace a different lane.[^f901]

## Role in training

The controller is the workout source rather than the display: it sends intervals over a
data cable to whatever CTS clock or numeric board is connected, and the display counts
them. The [pace clocks overview](index.md) sets out the alternatives, which are a clock
programmed at the unit itself, a timing console running a pace clock program, or the later
wireless handheld.

CTS sells it on portability, describing it as palm-sized, able to go in a bag or a
briefcase, and usable on any CTS swim scoreboard including one at another pool.[^sheet]

## Naming and the Ultimate Pace Clock

The manual calls the product only the pace clock controller and never prints `UPC-C`. That
designation comes from the datasheet, from CTS's 2008 display catalogue, where it appears
in a part-number list beside the `PC-` and `PCW-` pace clocks, and from other CTS documents
that write the two forms together.[^sheet][^cat08]

The letters are an abbreviation of an earlier product. The
[Ultimate Pace Clock](ultimate-pace-clock.md) was sold as a system in three forms. Two
paired the keypad console with a portable display, one of them lit by LEDs and the other
light-reflective; the third was the console with no display at all. Throughout that
product's guide the console is the UPC console.[^f819] The
controller's own faceplate is printed Ultimate Pace Clock rather than Pace Clock
Controller, and a dealer lists the part as the Ultimate Pace Clock Controller under SKU
`1151-UPC-C`.[^f901fig][^poolweb] The console described here is therefore the surviving
member of that family, marketed later under a plainer name.

The evidence is not entirely consistent. F901 itself names the Ultimate Pace Clock as something
separate that the controller can also drive, alongside the [SASC9](sasc9.md).[^f901] That
would follow if the name had narrowed from the whole system to the portable displays, but
no source states it.

## Design and controls

The console is a hand-held unit with a membrane keypad and a 32-character LCD, which CTS
gives 1/8 in digits.[^sheet] It measures 2.5 in H × 7.5 in L × 4.0 in W
(6.4 × 19.1 × 10.2 cm) and weighs 0.8 lb (0.36 kg), running from a single 9-volt battery or
from 120 VAC through transformer `015-555`.[^sheet] Left unused for five minutes it turns
itself off, unless a scoreboard or pace clock is attached.[^f901]

Two controls sit outside the keypad, unmarked. The power-off control is in the printed
"Colorado Time Systems" lettering above the RUN MODE key and has to be pressed twice in
quick succession; the control that erases every stored workout is under the logo sweep, and
the RESET key confirms the erase.[^f901]

The remaining keys divide into mode keys (EDIT MODE and RUN MODE), selection keys (WORKOUT,
SET, SELECT SCBD), the programming keys (REPEAT SET, DEC. INTERVAL, COUNT UP, COUNT DOWN),
the horn pair (HORN ON, HORN OFF), the run controls (START/STOP, RESET), TIME OF DAY, and a
numeric keypad with C/E and ENTER.[^f901][^f901fig] Where a field already shows the wanted
value, ENTER accepts it; C/E clears it first otherwise.[^f901]

## Workouts and capacity

A workout is a series of sets, and a set may itself contain several subsets, so a single
set can read as ten repeats of 1:10, then two of 35 seconds, then one of 5:00. The console
stores 50 workouts, each of up to 30 sets, each set of up to 15 subsets, and saves each one
as it is entered rather than on a separate command.[^f901]

Programming a set is a count of repeats followed by an interval, both confirmed with ENTER,
and a second ENTER closes the set. Three modifiers change what that set does:[^f901]

- REPEAT SET runs the whole set again a stated number of times, up to 99. The manual notes
  a vocabulary difference worth knowing when workouts come from elsewhere: what the
  controller calls a repeating set, Hy-Tek's Workout Manager calls a circuit set.
- DEC. INTERVAL shortens the interval by a fixed number of seconds after every repeat, so
  20 repeats can start at 1:00 and tighten by a second each time.
- COUNT DOWN switches a set from the default count-up to counting down to zero, shown on
  the LCD as `U` or `D`.

The horn, on displays that have one, is programmed in run mode as a number of tones and a
pace. Set to the number of swimmers in a lane and the gap between them, it sends each
swimmer off in turn; set to a count and a longer interval, it marks goal splits through a
long swim.[^f901]

## Driving several displays

The console addresses displays by channel, numbered 1 to 10 with 10 entered as `0`, using
the SELECT SCBD key. Selecting a channel and then loading a workout and set binds that
workout to that display, and repeating the sequence binds a different workout to the next
one.[^f901] CTS frames this as one workout per line of an eight-lane scoreboard, with no
timing console involved.[^sheet]

Double-clicking START/STOP starts every loaded workout at once, and double-clicking it
again stops them all. A single workout can be edited, stopped or restarted without
disturbing the others, by selecting its channel first.[^f901]

## Hy-Tek Workout Manager

Workouts written on a computer can be loaded instead of keyed in. F901 documents no
protocol of its own. It sends the reader to Workout Manager's own instructions and tells
them to pick the download aimed at the CTS pace clock software that runs on a timing
console, naming the System 6, the System 5 and the Swim IV, so to the software the
controller looks like one of those consoles.[^f901]

The physical path is the supplied RJ45 cable into the DB9-to-RJ45 converter and on to a
serial port. The console is armed to receive by pressing ON, then EDIT MODE twice.
Downloaded workouts are afterwards editable on the keypad like any other.[^f901]

[Workout Manager](../../../software/hy-tek-workout-manager.md) was a program in its own
right when F901 was written. It is now a licensed option inside Hy-Tek's
[Team Manager](../../../software/hy-tek-team-manager.md), reached from that program's own
menu, which is why later documents credit the same download to Team Manager
instead.[^hytekpc]

## Using a scoreboard as a plain pace clock

A facility that wants its scoreboard to behave as an ordinary sweep clock has no mode for
it. The manual gives a workaround instead: program a set of 99 repeats of 60:00 counting
up, a second subset the same, and REPEAT SET 45. CTS puts the resulting run time at a
little more than a year. The same arrangement extends to 14 subsets with the fifteenth used
for the repeat, and can be copied across sets 2 to 30. CTS adds that it suits two of its
other displays as well, the [SASC9](sasc9.md) and the
[Ultimate Pace Clock](ultimate-pace-clock.md).[^f901]

Time of day is a built-in feature rather than a workaround, though a limited one.
TIME OF DAY posts the hour and minute on a module set to channel `01`, `11` or `0F`. The console has no real-time
clock, so the time has to be keyed in again after every power-off, and CTS suggests running
from the AC adapter rather than the battery when using it this way.[^f901]

## Specifications

Physical figures are from the CTS datasheet; the operating figures are from the manual.

| | |
|---|---|
| Type | Workout controller for pace clocks and scoreboards |
| Part number | `UPC-C`[^sheet][^cat08] |
| Display | 32-character LCD, 1/8 in digits[^sheet] |
| Workout capacity | 50 workouts; 30 sets per workout; 15 subsets per set[^f901] |
| Repeat limit | 99 per set[^f901] |
| Displays driven | 10, addressed by channel 1–10, `0` for 10[^f901] |
| Dimensions | 2.5 in H × 7.5 in L × 4.0 in W (6.4 × 19.1 × 10.2 cm)[^sheet] |
| Weight | 0.8 lb (0.36 kg)[^sheet] |
| Power | One 9-volt battery, or 120 VAC through transformer `015-555`[^sheet] |
| Auto power-off | Five minutes unused, when no display is attached[^f901] |
| Data | RS-232, through the adapter cable to a CTS `DC` series data cable[^f901] |
| Manufacture | Loveland, Colorado[^sheet] |

## Part numbers and accessories

The manual lists what ships in the box.[^f901]

| Part | Number |
|---|---|
| Adapter cable, 7 ft | `0002-0437` |
| DB9 to RJ45 converter | `1004-0388` |
| RJ45 cable, 14 ft | `015-342` |
| AC power adapter | `015-555` |
| Data cable, 25 ft | `25DC` |

Sources disagree on the cable supplied. The manual ships the 7 ft adapter cable and a
separate 25 ft `25DC` data cable, while the datasheet describes a 15 ft connector cable;
nothing held reconciles the two.[^f901][^sheet] Any `DC` series cable can stand in for the
25 ft one where a different length suits the deck better.[^f901]

CTS still lists the controller on its pace clocks page, and a dealer quotes it at $595.62
with a 7 to 10 day lead time.[^ctspc][^poolweb] The company's manuals index does not host
F901, so the guide is not available from CTS to a current buyer.[^manuals]

## See also

- [Ultimate Pace Clock](ultimate-pace-clock.md): the system this console was sold as part of
- [Handheld segment timer](whc-2.md): the later wireless controller for the same job
- [SASC9](sasc9.md): a display F901 names it as driving
- [Pace clocks](index.md): the pace clocks overview
- [Scoreboards](../scoreboard/index.md): the boards it can drive instead of a pace clock
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f901]: Colorado Time Systems, Pace Clock Controller User Guide (F901 Rev. 1007, ©2007).
[^hytekpc]: [Hy-Tek, TEAM MANAGER guide, Export Pace Clock](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/exportpaceclock.htm) (the pace clock feature is a product option for Team Manager).
[^f901fig]: Colorado Time Systems, Pace Clock Controller User Guide (F901 Rev. 1007), Figure 3, keyboard layout.
[^f819]: Colorado Time Systems, Ultimate Pace Clock User Guide (F819 Rev. 0903, ©1995).
[^sheet]: Colorado Time Systems, Pace Clock Controller datasheet (Rev 04/14).
[^cat08]: Colorado Time Systems, Making Time Count: High Impact Visual Display Systems catalogue, product options list.
[^poolweb]: [Poolweb, Ultimate Pace Clock Controller](https://www.poolweb.com/products/ultimate-pace-clock-controller-1) (SKU `1151-UPC-C`; price and lead time as of 2026).
[^ctspc]: [Colorado Time Systems, Pace Clocks and Shot Clocks](https://coloradotime.com/pace-clocks-shot-clocks).
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (pace clock guides F890, F891, F904, F910, F972 and F985; no F901 or F819).
