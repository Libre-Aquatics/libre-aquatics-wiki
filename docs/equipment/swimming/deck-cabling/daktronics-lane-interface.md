---
title: Daktronics lane interface
description: >-
  The Daktronics lane interface (lane module interface, LMI) is the unit behind an in-deck
  pool's wall plate where the lane deck plates' cables end and the OmniSport 2000 console reads
  the lanes.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics lane interface
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: In-deck lane interface
  - label: Connection
    value: Deck plate cables on green Phoenix connectors; console J10 or J11
  - label: Timer
    value: OmniSport 2000
    href: equipment/swimming/timers/omnisport-2000.md
---

<!--
Research notes, Daktronics lane interface. Surfaced 2026-10-16 while building out
daktronics-lane-module.md; already mentioned in the research comment of
daktronics-deck-plate.md.

Read: OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 23 May 2019), held at
sources/vendors/daktronics/timers-consoles/: figure 14 (typical in-deck installation) labels
"WALL PLATE #1, LMI LOCATED BEHIND PLATE", with each lane deck plate wired back to it and the
console connected at the wall plate; a bulkhead plate gets its lane signals from an interface built
into the bulkhead; the Lane Order setting says in-deck systems using a lane interface stay
on NRM, and names "lane modules/lane interface" as what feeds J10 and J11. T-7000 Series Touchpads
Installation & Maintenance Manual (DD1953274, held in touchpads-deckplates/): deck plate cables
end on green Phoenix connectors that plug onto the lane interface; with a touchpad connected,
pins 1 and 5 reading 0.25 VDC at the interface but 0 V at the plate points to a cable break or bad
termination; with the touchpad unplugged, about 0 V suggests corrosion at the Phoenix connector
or a failed pad input on the interface.

Still to research: part number; how many lanes one interface serves; whether near and far ends
need separate interfaces; the bulkhead version's part number; photos.
-->

This article is a stub. The Daktronics lane interface, or lane module interface (LMI), sits
behind the wall plate of an in-deck OmniSport 2000 installation, where each lane
[deck plate](daktronics-deck-plate.md)'s cable ends on a green Phoenix connector and the
console reads the lanes as it would a chain of [lane modules](daktronics-lane-module.md).

See the [deck cabling overview](index.md) for the shared background that applies to every
deck plate and harness.
