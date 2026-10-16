---
title: Daktronics lane module
description: >-
  The Daktronics lane module is the on-deck connection box for one lane of an OmniSport 2000
  swimming system, taking a touchpad and three backup buttons; identical modules daisy-chain
  along the deck, and the console reads each lane from its module's place in the chain.
updated: 2026-10-16
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics lane module
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1056-0146` (Lane Module IV); also `0A-1056-0103`, `0F-1056-0064`'
  - label: Type
    value: On-deck lane module
  - label: Models
    value: OmniSport Lane Module IV
  - label: Inputs
    value: Touchpad; buttons 1, 2 and 3 (relay platform on button 3)
  - label: Connection
    value: Daisy chain over a four-wire lead (ground, data, clock, power); four-pin plug to the console
  - label: Timer
    value: OmniSport 2000
    href: equipment/swimming/timers/omnisport-2000.md
  - label: Lanes
    value: 1–10 per pool end
  - label: Status
    value: Not repairable; sold new only
  - label: Manual
    value: '[OmniSport 2000 Timing Console Operation Manual (ED-13312)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf)'
---

<!--
Research notes, Daktronics lane module. Stub surfaced 2026-10-08 while writing the deck-cabling
overview; built out 2026-10-16.

Local sources read (sources/vendors/daktronics/):
- timers-consoles/daktronics-omnisport-2000-timing-console-operation-manual-p1240-ed-13312-23
  (ED-13312 Rev 16, 23 May 2019). Deck cabling chapter, pp. 5-9, pages rendered with PyMuPDF.
  Figure 4 (on-deck installation): extension module, six lane modules, push buttons, relay
  platforms, touchpads; HS-200 lane speakers run on their own cable, not through the modules.
  Figure 5, zoomed: panel reads OMNISPORT LANE MODULE IV, DAKTRONICS, INC.; jack pairs (red and
  black) for BUTTON 1, 2, 3 and TOUCHPAD; TO NEXT LANE is a row of four jacks, three black and
  one red; sticker ASSY # 0A-1056-0146, S/N 1008, dated 07/08/03, REV 01; panel legend LL-2575,
  REV 02; yellow lead leaving one end through a strain relief. Figure 9: the lead ends in a black
  moulded block plugged into the next module's TO NEXT LANE jacks. Figure 13, zoomed: LANE
  EXTENSION MODULE II, ASSY # 0A-1056-0150, S/N 1328, 09/01/06, REV 04, legend LL-2582, REV 00,
  TO NEXT LANE jacks (three black, one red) and a lead to the console. Text: modules are
  universal, the console knows each module by its place in the chain; a touchpad plus as many as
  three buttons; one button goes in BUTTON 1; the relay platform plugs into BUTTON 3, stacked on
  the third button's plug when three are used; lane cable fits one way; keep modules away from
  swimmers and out of standing water; never join the far-end chain to the near-end chain; a bad
  lane is fixed by replacing its module; extension in 25, 50, 100 and 200 ft; four-pin plug to
  J10 NEAR END or J11 FAR END. Mixed touchpad polarity causes phantom touches. Rear-panel pinout
  (appendix): J10 pins 1-BLK GND, 2-BLK LM NEAR, 3-BLK CLK NEAR, 4-RED +VUNREG; J11 the same for
  the far end. Settings: Number of Lanes 1-10; Lane Order NRM or REV (REV when the console is at
  the last-lane end; in-deck with a lane interface stays NRM); LM INPUT NEAR or BOTH; Primary Time
  J10 with 1, 2 or 3 buttons for up to 10 lanes (J7 is a separate one-button switch input for up
  to 8 lanes). Test menu 5-2 shows TP and B1-B3 by lane. In-deck figure 14: lane deck plates wired
  to an "LMI" (lane module interface) behind wall plate 1; bulkhead plates carry a lane interface.
  Maintenance kit 0A-1240-0003, brush and silicone each setup and takedown.
- timers-consoles/daktronics-omnisport-2000-swimming-quick-reference (ED-13584): a status mark
  flags a lane module problem; menu tree 5-2 LANE MODULES, 4-2-2 LM INPUT; silicone list
  includes lane modules and deck extensions.
- touchpads-deckplates/daktronics-t-7000-series-touchpads-installation-and-maintenance-manual
  (DD1953274): functional test via 5-2; touchpad idles near 0.25 VDC and drops to about 0 V when
  pressed; 0 V at the module's TOUCHPAD jack with the pad unplugged means a bad module input, swap
  to confirm; bow out the banana pin leaves for a tighter fit. In-deck lane interface: green
  Phoenix connectors, measure pins 1 and 5.
- touchpads-deckplates/daktronics-aquatics-maintenance-manual-manualslib (DD3691471, July 2017):
  inspect modules for damage and corrosion, brass brushes TH-1024/TH-1025, silicone grease
  LU-1002.
- catalogs-brochures/daktronics-aquatics-solutions-brochure (DD1565872): the brochure calls
  the on-deck modules sealed and durable; in-deck uses permanent plates; three-button backup.
- software/daktronics-omnisport-2000-pro-swimming-software (DD3109473): Test tab shows module
  inputs; lane order set by which lane's module connects to the console; 1-10 lanes.
- timers-consoles/daktronics-all-sport-omnisport-revision-histories (DD3679410): v4.1.23 (23 Jan
  2004) removed a Hy-Tek timeout when no button times came from the lane modules; a production
  test fix for the lane module test; nothing on module hardware.

Web (2026-10-16):
- Daktronics KB 000009528 "How to test a Daktronics Lane Module": lists modules 0A-1056-0146,
  0A-1056-0103, 0F-1056-0064 without saying which is which generation; bench test two modules at
  a time on J10 (no reason given); a pushbutton held on TOUCHPAD for two minutes should show TP
  for two seconds only; then B1, B2, B3 in lane 1.
- Daktronics KB DD2416737: T-6000 and T-7000 touchpads, lane modules and potted push buttons are
  not repairable; new sale only.
- Minnesota Swimming, "Timing Systems 101" (officials' clinic slides by Kelly Czech, PDF created
  11 November 2024, gomotionapp.com): the module chain is a serial bus passing encoded touch and
  button data; polarity matters on Daktronics, whereas CTS System 6 inputs are simple contact
  closures where it does not. Independent of Daktronics.
- Dealers: Scoreboard Enterprises listed "Daktronics Lane Module IV - Part 0A-1056-0146" at
  US$345 (search summary; page now 404); eBay listings exist. Not cited.
- Patents: none found for the module; the deck cabling overview covers the 1977 SSIH patent for
  a similar powered chain.

Not found: internal circuit; what Lane Modules I to III were or when; which of 0A-1056-0103 and
0F-1056-0064 is which; dimensions; lead length; whether the OmniSport 6000 or 1000 used it.
-->

The Daktronics lane module is the on-deck connection box for one lane of a
[Daktronics](../../../vendors/daktronics.md) [OmniSport 2000](../timers/omnisport-2000.md)
swimming system. Each module takes that lane's [touchpad](../touchpad/t-7000.md) and up to three
backup [pushbuttons](../semi-automatic/pushbutton/daktronics.md), and the modules plug into one
another in a chain along the deck. Every module is identical, so any one can serve any lane:
the console works out which lane a module belongs to from its place in the chain.[^manual] The model
shown in Daktronics' 2019 manual is the OmniSport Lane Module IV, `0A-1056-0146`.[^manual][^kblanemod]

## Role in the timing system

This section places the module in a Daktronics installation. A pool without wiring under the
deck uses lane modules: one per lane, linked one after another, with a
[lane extension module](daktronics-lane-extension-module.md) carrying the chain back to the
console. A pool with in-deck wiring uses permanent [deck plates](daktronics-deck-plate.md)
instead, wired to a [lane interface](daktronics-lane-interface.md) behind the wall
plate.[^manual] Daktronics points to servicing as the advantage of the on-deck system: when one
lane fails, only that lane's module is replaced, not the whole harness.[^manual] The start
system's lane speakers do not use the modules and are wired separately.[^manual]

See the [deck cabling overview](index.md) for how other manufacturers' harnesses identify each
lane.

## Design and construction

This section describes the module itself. The module is a small box with a printed face panel
and, in the Lane Module IV shown in Daktronics' manual, a yellow lead leaving one end through a
strain relief.[^manual] Its panel carries four pairs of banana jacks, one red and one black in
each pair, labelled BUTTON 1, BUTTON 2, BUTTON 3 and TOUCHPAD, and a row of four jacks labelled
TO NEXT LANE.[^manual] The lead from the next module down the line ends in a moulded plug that
fits those four jacks only one way round.[^manual] Daktronics describes the modules as sealed
and durable.[^brochure]

The console's lane harness sockets carry four lines: a ground, a lane-module data line, a clock
line and an unregulated supply. The TO NEXT LANE jacks match them with three black jacks and a
red one.[^manual] The modules are powered and clocked from the console, not passive junctions. A Minnesota
Swimming training presentation for officials describes the chain as a serial bus that passes
each lane's touches and button presses to the console as coded data.[^mnswim] It also notes the
practical consequence: on a Daktronics system the orientation of each plug matters, while on a
CTS System 6, whose inputs are simple contact closures, it does not.[^mnswim]

The label on the module photographed in the 2019 manual is dated July 2003.[^manual] Daktronics
also lists `0A-1056-0103` and `0F-1056-0064` as lane modules, without saying how they differ
from the Lane Module IV; earlier models numbered I to III have not been documented.[^kblanemod]

## Lane identification

This section covers how the console numbers the lanes. Because the modules carry no lane number
of their own, the console counts them from the end of the chain that plugs into it. If the
console sits beside lane 1, the lane order is left at normal; if it sits at the far side, next
to the last lane, the operator sets the order to reversed. A wrong setting shows at once,
because lane 1's results appear in the last lane.[^manual] The number of lanes is set from 1 to
10.[^manual]

The near end and the far end each have their own chain. The near-end chain plugs into the
console's J10 socket and the far-end chain, used for split times, into J11; Daktronics warns
never to join the two chains together.[^manual] A setting tells the console whether modules are
connected at one end of the pool or at both.[^manual] The OmniSport 2000 Pro software offers
the same lane-order, lane-count and end settings.[^prosoftware]

## Connection to the timer

This section covers what plugs into the module and how the chain reaches the console. Touchpads,
buttons and relay platforms use dual banana plugs, and the black jack always takes the side of the
plug that carries the ground tab. If some touchpads are plugged in one way and some the other, the reversed pads
register touches that nobody made.[^manual][^t7000man] One backup button goes into BUTTON 1. A
[relay take-off platform](../relay-judging/daktronics.md) goes into BUTTON 3, and if three
buttons are already in use its plug stacks on top of the third button's plug.[^manual]

The chain reaches the console through a lane extension module, which joins the module nearest
the console to the console's four-pin socket. Daktronics makes it in 25, 50, 100 and 200 ft
(7.6, 15.2, 30.5 and 61 m) lengths.[^manual] With the console set to take its primary times from
J10, it reads one, two or three buttons per lane for up to ten lanes.[^manual]

## Testing and troubleshooting

This section covers checking a module. The console's lane module test, menu 5-2, shows each
input as it is pressed: TP for a touchpad and B1, B2 or B3 for a button, in the lane it belongs
to. Daktronics asks for every device to be tested this way before each session.[^manual][^t7000man]
During a race the console also marks a lane whose module has a problem.[^ed13584]

A touchpad that is plugged in and not being pressed shows about 0.25 V across its plug, falling
to about 0 V when pressed. If the module's TOUCHPAD jack reads 0 V with the touchpad
unplugged, the module's input is probably faulty, and swapping in a known-good module confirms
it.[^t7000man] Daktronics' bench test connects no more than two modules at a time to the
console's J10 socket. A pushbutton held down on the TOUCHPAD jack for two minutes should make TP
appear for two seconds and then clear; a TP that stays on or keeps flashing marks a faulty
module.[^kblanemod]

Lane modules cannot be repaired. Daktronics lists them, with its touchpads and potted
pushbuttons, as items sold new only, with no repair-and-return service.[^kbrecon]

## Care and maintenance

This section covers routine care. Daktronics asks for the modules to be placed out of the
swimmers' way and not left sitting in water, and for cables on the deck to be covered with a mat
in walkways.[^manual] The jacks and plugs are cleaned with a brush and coated with silicone
lubricant at every setup and every teardown. The console's maintenance kit,
`0A-1240-0003`, supplies both.[^manual][^ed13584] Daktronics' maintenance checklist adds a visual
inspection of each module, its connector and its cable for damage and corrosion, and names the
brushes as `TH-1024` and `TH-1025` and the silicone grease as `LU-1002`.[^maint] A banana plug
that fits loosely can be tightened by bowing its spring leaves outward slightly.[^t7000man]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota |
| Part number | `0A-1056-0146` (Lane Module IV); `0A-1056-0103` and `0F-1056-0064` also listed[^kblanemod] |
| Panel legend | `LL-2575`[^manual] |
| Inputs | Touchpad; buttons 1–3; relay platform on button 3[^manual] |
| Chain link | Four jacks (three black, one red); ground, data, clock and unregulated supply[^manual] |
| Lanes | 1–10 per chain; separate near-end and far-end chains[^manual] |
| Console | OmniSport 2000, sockets J10 (near end) and J11 (far end)[^manual] |
| Extension | Lane extension module, 25–200 ft (7.6–61 m)[^manual] |
| Repair | Not repairable; replace with new[^kbrecon] |

## Part numbers and accessories

This section lists the parts used with the module.

- `0A-1056-0146`, OmniSport Lane Module IV.[^manual][^kblanemod]
- `0A-1056-0103` and `0F-1056-0064`, also listed by Daktronics as lane modules.[^kblanemod]
- `0A-1056-0150`, Lane Extension Module II, the lead from the chain to the console; see
  [lane extension module](daktronics-lane-extension-module.md).[^manual]
- `0A-1240-0003`, OmniSport 2000 console maintenance kit, with brush and silicone.[^manual]
- `TH-1024` and `TH-1025`, brass brushes; `LU-1002`, silicone grease.[^maint]

## See also

- [Daktronics lane extension module](daktronics-lane-extension-module.md): the lead from the chain to the console
- [Daktronics deck plates](daktronics-deck-plate.md) and [Daktronics lane interface](daktronics-lane-interface.md): the in-deck alternative
- [OmniSport 2000](../timers/omnisport-2000.md): the console the modules serve
- [T-7000 series touchpad](../touchpad/t-7000.md), [Daktronics pushbuttons](../semi-automatic/pushbutton/daktronics.md) and [Daktronics relay take-off platform](../relay-judging/daktronics.md): the devices that plug into a module
- [Quantum Mobile Harness](quantum-mobile-harness.md) and [Colorado Time Systems cable harness](cts-cable-harness.md): other manufacturers' on-deck harnesses
- [Deck cabling](index.md): the deck-cabling overview
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), deck cabling, settings and pinouts.
[^ed13584]: [Daktronics, OmniSport 2000 Swimming Quick Reference (ED-13584, Rev 8, 19 August 2013)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-13584.pdf).
[^t7000man]: [Daktronics, T-7000 Series Touchpads Installation & Maintenance Manual (DD1953274)](https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf), connections and troubleshooting.
[^prosoftware]: [Daktronics, OmniSport 2000 Pro Swimming Software Installation & Operation Manual (DD3109473)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109473.pdf), pool configuration.
[^kblanemod]: [Daktronics, How to test a Daktronics Lane Module (KB 000009528)](https://www.daktronics.com/en-us/support/kb/000009528).
[^kbrecon]: [Daktronics, Can touchpads, push buttons, or lane modules be reconditioned or repaired? (KB DD2416737)](https://www.daktronics.com/en-us/support/kb/DD2416737).
[^brochure]: Daktronics, Aquatics Solutions brochure (DD1565872, Rev 07, June 2018), deck harness systems. Print document, not hosted online.
[^maint]: Daktronics, Aquatics Maintenance Checklist (DD3691471, July 2017), on-deck equipment.
[^mnswim]: [Minnesota Swimming, Timing Systems 101](https://www.gomotionapp.com/czmnlsc/UserFiles/File/Officials/Clinics/eq101-nov2024_044097.pdf) (officials' clinic slides, November 2024).
