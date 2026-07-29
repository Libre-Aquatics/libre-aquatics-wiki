---
title: Daktronics Pushbutton
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics Pushbutton
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: Manual backup timing button (potted)
  - label: Connection
    value: 'Dual banana plug into a lane module (on-deck) or lane deck plate (in-deck)'
  - label: Buttons per lane
    value: '1, 2, or 3 (B1 / B2 / B3)'
  - label: Controller
    value: OmniSport 2000 timing console
  - label: Interchangeability
    value: Interchangeable with Colorado Time Systems buttons per Daktronics
  - label: Manual
    value: Daktronics DD1953274
    href: >-
      https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf
---

The Daktronics pushbutton is the hand-held backup timing button used with the
swim-timing systems made by Daktronics, Inc., of Brookings, South Dakota. A timer
standing behind a lane presses it as the swimmer touches the wall, and the
[OmniSport 2000](../../timers/omnisport-2000.md) timing console records that press as
a backup time for the lane. The button is the manual check on each lane's
[T-7000 series touchpad](../../touchpad/t-7000.md).[^omnisport][^ed13584]
The console reads up to three buttons per lane alongside the pad.[^omnisport][^kbcheck]
This is the arrangement the rulebooks call semi-automatic timing: World Aquatics
defines it as a system the starter initiates and timekeepers stop by hand when
the swimmer touches, and USA Swimming and the NCAA both build their orders of
precedence around how many such buttons a lane carries.[^wacr][^usas][^ncaa]
Daktronics does not publish a standalone product listing or part number for the
button; it is supplied as a component of the company's deck-cabling systems, and
Daktronics states that its buttons and Colorado Time Systems buttons are
interchangeable.[^kbcompat][^kbrecon]

## Role in the timing system

The [pushbuttons overview](index.md) covers the shared background that applies to
every backup button: the layered primary/secondary/tertiary timing structure, the
governing-body rules that require independent backup, and how button times resolve
into an official time. In a Daktronics installation the button is the secondary
layer. Across a ten-lane pool the OmniSport 2000 console times and judges
automatically from two touchpads in each lane and from as many as three backup
buttons beside them. Each button is read separately from the pad.[^omnisport]

How many buttons a lane needs is set by the governing body rather than by
Daktronics. USA Swimming will accept semi-automatic equipment as the primary
system only where two or three buttons per lane are each worked by a different
timer, and allows a single button where the semi-automatic layer is secondary;
where three button times exist and two match, that value stands, and where all
three differ the middle one is taken.[^usas] The NCAA ranks its equipment the
same way, putting two-button semi-automatic equipment immediately below automatic
equipment and one-button equipment below two manual watches.[^ncaa] Both bodies
require button times to resolve to a hundredth of a second.[^ncaa]

The same button is also used in the console's track mode, where a race can be started
from the horn start, a pushbutton, or a gun transducer, and buttons at the finish line
record times for each lane.[^ed13584]

## Use with the OmniSport 2000

During a race the console records each button press as a backup time next to the
lane's pad time. On the printed results a lane's button times carry the labels B1
through B3, a backup time is labeled B or BK, and an asterisk flags a discrepancy
between the touchpad and the backup times, so the operator can spot a lane whose
pad and buttons disagree.[^ed13584] Printing of backup times is a console printer
setting, and Daktronics' meet procedure has the operator print results with backup
times after each race.[^ed13584] Through the OmniSport 2000 Pro Swimming software,
button times pass to the meet-management computer along with touchpad,
relay-exchange, and start-reaction times.[^prosoftware]

After a start or a split the console applies an arming delay, settable from 0 to 99
seconds, during which lane inputs are ignored; it exists mainly so a finished
relay athlete can climb out without registering another touch.[^ed13584] Daktronics'
pre-meet checklist ends with a test race that is started with the horn start and
finished with all of the pushbuttons and touchpads, which checks every lane input
before competition.[^ed13584]

The button is also used as a test probe. The console's lane test screen
(menu 5, then 2) shows each lane's inputs, and Daktronics' systems check has a
technician plug a pushbutton into each touchpad and button connection in turn: the
LCD shows TP, B1, B2, or B3 for the jack under test when the wiring is
good.[^kbcheck][^kblanemod]

## Design and connection

The button is a momentary switch potted into a sealed hand-held housing on a cord
that ends in a dual banana plug; Daktronics describes its buttons as potted,
non-repairable assemblies.[^kbrecon] The plug follows the convention used across
Daktronics deck cabling: its ground tab has to seat against the black socket, or the
timing system reads nothing from that lane.[^t7000man]

Where the button plugs in depends on the installation. An on-deck system runs a
cable harness along the deck with a lane module at each lane, and the module carries
the touchpad jack and the button jacks; an in-deck system terminates each lane's
wiring at a deck plate set into the pool deck, with jacks labeled TP, B1, B2, and B3
for the pad and the three buttons, alongside the lane's speaker and start
connections.[^t7000man][^kbcheck]

## Cross-compatibility with Colorado Time Systems

Daktronics states that its pushbuttons and Colorado Time Systems pushbuttons are
cross-compatible, so either maker's button can be used on either maker's lane
wiring; the company's knowledge-base answer is simply "Yes; they are cross
compatible."[^kbcompat] The claim is Daktronics' own. Colorado Time Systems
publishes no position on it, neither confirming the interchange nor warning
against other makers' buttons.

Independent sources speak to the connector itself, though not to the claim of
interchangeability. Colorado Time Systems describes its own backup button as
ending in a dual banana plug, the same connector Daktronics
specifies.[^ctsmeter][^t7000man] The double banana plug is an industry-standard
part on 0.75 in (19.05 mm) centres, and by long convention a tab on one pole
marks ground, which is what Daktronics depends on when it warns that the tab
must seat against the black socket.[^banana] A third manufacturer's manual
places the two makers in the same electrical class: International Sports Timing
tells installers that its own equipment, Colorado and Daktronics all take a
normally-open connection, while Omega takes a normally-closed one.[^ist] The independent
vendor Superior Swim Timing works on the same assumption, selling buttons and
adapters on the basis that anything terminating in a banana plug will mate with
either maker's harness.[^sst] Neither manufacturer, though, publishes the actual
spacing of its own plug, so the mechanical fit rests on inference from the
standard rather than on a published figure.

An interchangeable button still does not guarantee an interchangeable time. The
Colorado Time Systems System 5 and System 6 subtract a fixed 0.15 s from button
times in hardware, an allowance for the delay between a swimmer's touch and the
timer's thumb that Daktronics, Omega and Superior Swim Timing equipment does not
make. The console applies that correction, so the same button can yield a
different recorded time depending on what it is plugged into.[^reyda]

## Care and maintenance

The banana plug and the jacks it mates with are the maintenance points, because
pool water corrodes the contacts. At setup, Daktronics has the male pins of every
deck-cabling banana connector coated with a small amount of silicone from the
maintenance kit before plugging in.[^ed13584] After every event the deck plates or
lane modules are cleaned with a .22 caliber brass or fiber bristle brush and
refilled with fresh silicone lubricant; Daktronics sells the lubricant as LU-1002
and a complete maintenance kit as `0A-1240-0003`.[^kbclean]

The button itself is not serviced. Daktronics lists its potted pushbuttons, along
with its touchpads and lane modules, as non-repairable items with no
repair-and-return option; a failed button is replaced with a new one.[^kbrecon]

## Specifications

| | |
|---|---|
| Type | Manual momentary backup timing button, potted housing |
| Connector | Dual banana plug (ground tab aligns with the black jack) |
| Connection points | Lane module button jacks (on-deck) or deck plate B1/B2/B3 jacks (in-deck) |
| Buttons per lane | 1, 2, or 3, read independently of the touchpad |
| Controller | OmniSport 2000 timing console (up to 10 lanes) |
| Printout labels | B1-B3 per button; B or BK backup time; asterisk on pad/backup discrepancy |
| Interchangeability | Daktronics states its buttons and Colorado Time Systems buttons interchange; CTS publishes no position |
| Serviceability | Non-repairable (potted); replaced rather than repaired |
| Maintenance kit | `0A-1240-0003` (brush and LU-1002 silicone lubricant) |

## Part numbers and accessories

- `0A-1240-0003`, maintenance kit containing a cleaning brush and LU-1002 silicone
  lubricant for the deck plates and lane modules the button plugs into.[^kbclean]

Daktronics does not publish a part number for the button itself, which is supplied as a
component of the company's deck-cabling systems.[^kbrecon]

## See also

- [Pushbuttons](index.md): the pushbutton overview and governing-body requirements
- [Colorado Time Systems Pushbutton](cts.md): the interchangeable CTS button
- [T-7000 Series Touchpad](../../touchpad/t-7000.md): the primary lane input the button
  backs up
- [HS-200 Horn Start](../../starter/hs-200.md): the Daktronics start system on the other
  side of the timing system
- [Timers](../../timers/index.md): the timing console the button reports to
- [Equipment](../../../index.md): the equipment reference

## References

[^t7000man]: [Daktronics, T-7000 Series Touchpads Installation & Maintenance Manual (DD1953274)](https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf) (lane module and deck plate connections; ground-tab rule for dual banana plugs).
[^ed13584]: [Daktronics, OmniSport 2000 Swimming Quick Reference (ED-13584, Rev 8, 19 August 2013)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-13584.pdf) (printout labels, backups printing, arming delay, pre-meet test race, silicone at setup, track-mode starts).
[^omnisport]: [Daktronics, Touchpad support](https://www.daktronics.com/en-us/support/hardware-components/Touchpads) (ten lanes timed by OmniSport, each with a pair of touchpads and up to three backup buttons).
[^kbcompat]: [Daktronics, Are Daktronics and Colorado Timing System push buttons cross compatible? (KB DD2017009)](https://www.daktronics.com/en-us/support/kb/DD2017009) ("Yes; they are cross compatible").
[^kbrecon]: [Daktronics, Can touchpads, push buttons, or lane modules be reconditioned or repaired? (KB DD2416737)](https://www.daktronics.com/en-us/support/kb/DD2416737) (potted push buttons are non-repairable; replace with new).
[^kbcheck]: [Daktronics, How to perform an Aquatics Systems Check (KB DD3536111)](https://www.daktronics.com/en-us/support/kb/DD3536111) (test mode via menu 5-2; a button in each touchpad/button connection shows TP, B1, B2, B3 on the console LCD).
[^kblanemod]: [Daktronics, How to test a Daktronics Lane Module (KB 000009528)](https://www.daktronics.com/en-us/support/kb/000009528) (a standard push button plugged into the lane module jacks verifies each input on the console LCD).
[^kbclean]: [Daktronics, How do I maintain or clean a pool's OmniSport 2000 and timing system? (KB DD2425415)](https://www.daktronics.com/en-us/support/kb/DD2425415) (brush cleaning and silicone lubricant for deck plates and lane modules; LU-1002; maintenance kit 0A-1240-0003).
[^prosoftware]: [Daktronics, OmniSport 2000 Pro Swimming Software Installation & Operation Manual (DD3109473)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109473.pdf) (gathers touchpad, button, relay-exchange, and start-reaction times).
[^usas]: [USA Swimming, 2025 Rulebook](https://websitedevsa.blob.core.windows.net/sitefinity/docs/default-source/governance/governance-lsc-website/rules_policies/rulebooks/2025-mini-rulebook.pdf), 102.23 Timing Rules (system types, button counts, and resolution of disagreeing times).
[^ncaa]: [NCAA, 2025-26 and 2026-27 Swimming and Diving Rules Book](https://ncaaorg.s3.amazonaws.com/championships/sports/swimdive/rules/PRXSW_RulesBook.pdf), 1-4-4 Automatic Judging and Timing Equipment (semiautomatic device definition) and the equipment priority levels.
[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), 15.16.1.3 (Semi-Automatic Officiating Equipment stopped by timekeepers pressing a button).
[^ctsmeter]: [Colorado Time Systems, Test Meter Instructions (F696 Rev. 0205)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf) (the CTS backup button terminates in a dual banana plug; deck-plate receptacle names).
[^banana]: [Wikipedia, Banana connector](https://en.wikipedia.org/wiki/Banana_connector) (double plugs on 0.75 in / 19.05 mm centres; the tab on one pole conventionally marks ground).
[^ist]: [International Sports Timing, SWIMSTART Operating Instructions (rev. 06/30/2005)](https://www.recsupply.com/RSC/Documents/International%20Sports%20Timing%20(IST)/IST-Swimstart-Manual.pdf), §1.4 (IST, Colorado and Daktronics normally open; Omega normally closed), hosted by dealer Rec Supply.
[^sst]: [Superior Swim Timing, Buttons and cables](https://superiorswimtiming.com/buttons-cables/) (adapters offered for Colorado Time Systems, Daktronics, and any other banana-plug system).
[^reyda]: Cliff Reyda, [More Than You Ever Wanted to Know About Timing at Swim Meets](https://www.pacswim.org/userfiles/cms/documents/1320/more-than-you-ever-wanted-to-know-about-timing-at-swim-meets.pdf) (Pacific Swimming, 23 February 2018), the author's own interpretation, not USA Swimming policy.
