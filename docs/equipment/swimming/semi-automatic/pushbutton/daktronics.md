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
    value: Cross-compatible with Colorado Time Systems buttons
  - label: Manual
    value: Daktronics DD1953274
    href: >-
      https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf
---

The Daktronics pushbutton is the hand-held backup timing button used with the
swim-timing systems made by Daktronics, Inc., of Brookings, South Dakota. A timer
standing behind a lane presses it as the swimmer touches the wall, which records a
backup time for that lane on the
[OmniSport 2000](../../timers/omnisport-2000.md) timing console; it is the
human-operated check on the
[T-7000 series touchpad](../../touchpad/t-7000.md) at each lane.[^omnisport][^ed13584]
The console reads up to three buttons per lane alongside the pad.[^omnisport][^kbcheck]
Daktronics does not publish a standalone product listing or part number for the
button; it is supplied as a component of the company's deck-cabling systems, and
Daktronics states that its buttons and Colorado Time Systems buttons are
interchangeable.[^kbcompat][^kbrecon]

## Role in the timing system

The [pushbuttons overview](index.md) covers the shared background that applies to
every backup button: the layered primary/secondary/tertiary timing structure, the
governing-body rules that require independent backup, and how button times resolve
into an official time. The Daktronics button's part is the secondary layer of a
Daktronics installation. Across a ten-lane pool the OmniSport 2000 console times and
judges automatically from two touchpads in each lane and from one to three backup
buttons beside them, reading every button separately from the pad.[^omnisport] The
same button also serves the console's track mode, where a race can be started from
the horn start, a pushbutton, or a gun transducer, and buttons at the finish line
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
relay athlete can leave the pool without adding a touch.[^ed13584] Daktronics'
pre-meet checklist ends with a test race that is started with the horn start and
finished with all of the pushbuttons and touchpads, verifying every lane input
before competition.[^ed13584]

The button doubles as the system's test probe. The console's lane test screen
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
connections.[^t7000man][^kbcheck] Daktronics states that its pushbuttons and
Colorado Time Systems pushbuttons are cross-compatible, so either maker's button
can be used on either maker's lane wiring; the KB answer is simply "Yes; they are
cross compatible."[^kbcompat]

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
| Interchangeability | Cross-compatible with Colorado Time Systems pushbuttons |
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
[^omnisport]: [Daktronics, Touchpad support](https://www.daktronics.com/en-us/support/hardware-components/Touchpads) (OmniSport timing of up to 10 lanes with two touchpads and one, two, or three backup buttons per lane).
[^kbcompat]: [Daktronics, Are Daktronics and Colorado Timing System push buttons cross compatible? (KB DD2017009)](https://www.daktronics.com/en-us/support/kb/DD2017009) ("Yes; they are cross compatible").
[^kbrecon]: [Daktronics, Can touchpads, push buttons, or lane modules be reconditioned or repaired? (KB DD2416737)](https://www.daktronics.com/en-us/support/kb/DD2416737) (potted push buttons are non-repairable; replace with new).
[^kbcheck]: [Daktronics, How to perform an Aquatics Systems Check (KB DD3536111)](https://www.daktronics.com/en-us/support/kb/DD3536111) (test mode via menu 5-2; a button in each touchpad/button connection shows TP, B1, B2, B3 on the console LCD).
[^kblanemod]: [Daktronics, How to test a Daktronics Lane Module (KB 000009528)](https://www.daktronics.com/en-us/support/kb/000009528) (a standard push button plugged into the lane module jacks verifies each input on the console LCD).
[^kbclean]: [Daktronics, How do I maintain or clean a pool's OmniSport 2000 and timing system? (KB DD2425415)](https://www.daktronics.com/en-us/support/kb/DD2425415) (brush cleaning and silicone lubricant for deck plates and lane modules; LU-1002; maintenance kit 0A-1240-0003).
[^prosoftware]: [Daktronics, OmniSport 2000 Pro Swimming Software Installation & Operation Manual (DD3109473)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109473.pdf) (gathers touchpad, button, relay-exchange, and start-reaction times).
