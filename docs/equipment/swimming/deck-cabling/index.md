---
title: Deck cabling
seoTitle: Swim timing deck plates and harnesses
description: "Swimming timing deck cabling: on-deck harnesses and lane modules, in-deck plates, wall plates and distribution boxes, how the timer tells lanes apart, care, rules, and models from each manufacturer."
tags:
  - Equipment
  - Timing
  - Swimming
---

<!--
Research notes, deck cabling overview. Written 2026-10-08 when this category was split out of
timers/ (it held quantum-mobile-harness.md and odb10-sw.md under a loose "Cables and
Accessories" nav group).

Name: "deck cabling" is the term the vendors use. CTS and Daktronics manuals say "deck cabling"
or "deck wiring" (the OmniSport 2000 manual has a "Deck Cabling & Lane Modules" section); Swiss
Timing's concept manuals split the subject into "Mobile cabling" and "Fix cabling".

Sources read for this page (all local copies under sources/vendors unless a URL is given):
- CTS Architectural Guidelines, System 6 edition (catalogs-brochures/cts-architectural-guidelines,
  and an identical -2 copy): deck plate and wall plate pages 14-18, site worksheet. Deck plate
  pre-wired with up to 200 ft (61 m) of cable, potted collar into a 4 x 4 x 6 in PVC box, screwed
  to the tile, floor level with box top within 0.25 in; box under the block platform, 3 in clear
  all round; outside-lane plates also wired for the starter; at most 12 boxes per 2 in conduit
  run and four per 1 in run; in-deck wiring under 5 V and grounded in the console; bulkhead
  provisions or cable tray above water with an 8 x 8 x 8 in box. Wall plate 15 x 15 x 0.25 in
  aluminium in a 12 x 12 x 6 in box, 18-36 in above floor, flush. Worksheet names Carlon E989NNR,
  Carlon E987 and Scepter JB446 deck boxes. No URL found; cited as a print document.
- CTS Gen7 Legacy Architectural Guidelines (catalogs-brochures/cts-gen7-legacy-architectural-
  guidelines): same deck-plate text minus QuickConnect, adds Titanium deckplate and patent
  8,602,815, and changes the conduit rule to 12 per 2 in, four per 1.5 in, two per 1 in, plus
  "conduit drainage is strongly recommended". The conflict with the System 6 edition (four per
  1 in) is flagged in the text; the later edition is preferred.
- CTS F897 Rev. 201111 (deck plate, cable harness and wall plate cleaning), F1023 Rev. 201602
  (titanium deck plate and wall plate cleaning), F881 Rev. 1204 (QuickConnect deck plate
  instructions), F696 Rev. 0205 (test meter), F147 Rev. 201407 and Rev. 202604 (touchpad guide,
  meter tests and cleaning), F870 Rev. 20241107 (System 6 swimming software guide: "Wiring
  Systems", cable harness described as a multi-conductor cable; near/far-end harness inputs for
  lanes 1-10, with a further connector each for lanes 11 and 12, and a second set of inputs for a backup timer; touchpads
  and button A on the primary harness, buttons B and C on a separate backup-button harness),
  F1034 Rev 202603 (Gen7 Serial: R-015-715-xx in-deck cable to a Timer node; serial harnesses
  chained for primary and backup up to 20 lanes; input detection for in-deck only; deckplates
  measure speedlight current; timing connections 12 V at 2.5 A in-deck, 200 mA on-deck).
- Daktronics OmniSport 2000 manual ED-13312 Rev 16 (23 May 2019), "Deck Cabling & Lane
  Modules", "In-deck System"; T-7000 manual DD1953274 (lane interface and green Phoenix
  connector troubleshooting); Aquatics Maintenance Checklist DD3691471 (brass brush TH-1024/1025,
  silicone grease LU-1002); Aquatics Solutions brochure (deck harness systems page).
- Swiss Timing Swimming Concept 0017.509.02 v4.9 (January 2017) sections 1.1, 3.3, 3.4.3, 4.1;
  Quantum Concept 3480.508.02 v1.4; Quantum Mobile Harness manual 3480.500.02 v1.1; ODB10-SW
  manual 3494.501.02 v1.7; Quantum-Swimming software manual 3480.509.02 v1.4 (pool configuration,
  module-to-lane mapping, weekly re-greasing).
- US 4,156,870 (https://patents.google.com/patent/US4156870A/en): Pierre Desarzens for SSIH
  Management Services (the Omega/Tissot holding company of the time); French priority
  FR7614362, 12 May 1976; filed 6 May 1977; granted 29 May 1979. Verified: 31 conductors for ten
  lanes with a shared common, sixty without; two-conductor bus with a module per lane, address
  codes, power carried on the bus. Not verified: whether any Omega product used it.
- US 8,602,815 B2 (titanium deckplate; filed 6 September 2011, granted 10 December 2013;
  inventors Stockinger, Ryerson, Anderson) and US 11,192,016 B2 (component detection; priority
  21 February 2014, granted 7 December 2021; inventor Stockinger), both read on Google Patents.
- Richmond Hill Aquatic Club (Ontario), "Timing system physical setup at Richvale" (Word file,
  author metadata dated November-December 2025): an ARES 21 pool with a fixed deck harness and a
  portable backup harness of six chained junction boxes run to the console's HA1 input.
- World Aquatics Facilities Rules 2021-2025, FR 2.3.2.2 and FR 2.3.4.1; NCAA Swimming and Diving
  Rules 2025-26 and 2026-27, Rule 1, Section 4, Art. 4 note on below-deck conduit.

Not found: any independent (non-vendor) technical description of deck plates beyond the
patents; any Seiko or ALGE deck-cabling documentation in the local corpus.
-->

Deck cabling, in swimming timing, is the wiring between the equipment at each lane and the
[timing console](../timers/index.md). At each end of a racing pool a lane can have a
touchpad, up to three backup pushbuttons, a relay judging platform and a lane speaker, and the
console has to receive each lane's signals separately so that it can tell which lane produced
them. Facilities do this in one of two ways. An on-deck harness is laid along the pool edge for a
meet and packed away afterwards. An in-deck system runs permanent cable through conduit under
the deck to a deck plate set flush beside each starting block, with a wall plate or a
distribution box where the console plugs in.[^arch][^manual][^swconcept] This page covers both
schemes and the parts that join them to the console.

The equipment that plugs into this cabling has its own overviews: the
[touchpads overview](../touchpad/index.md), the
[pushbuttons overview](../semi-automatic/pushbutton/index.md), the
[relay take-off platforms overview](../relay-judging/index.md) and the
[external-speakers overview](../external-speaker/index.md).

## History and development

The difficulty of wiring a pool was recognised early. A patent filed in 1977 by SSIH, then
the Swiss holding company behind Omega, sets out the problem in numbers: if every starting
device, touchpad and hand button has its own wire back to the timer, a ten-lane pool needs at
least 31 conductors when the devices share one common wire, and sixty when they cannot, and
every one of the connectors has to stay watertight.[^ssih] The patent's answer was a single
two-wire cable along the deck with a small electronic module at each lane. Each device was
given an address code, the timer sent timing pulses down the line, and a module signalled a
touch by pulling the line during its device's slot. The same cable powered the modules.[^ssih]

Both approaches stayed in use. The Colorado Time Systems (CTS) on-deck harness that served the
System 6 console was still described in its manual as a multi-conductor cable, plugged into
the console with a 50-pin connector.[^f870][^f897] Daktronics and Swiss Timing built their
harnesses as chains of lane modules, closer to the 1977 design: the
[OmniSport 2000](../timers/omnisport-2000.md) chains one module per lane and joins the chain
to the console with a four-pin plug, and the [Quantum Aquatics](../timers/quantum.md) timer reads a chain of addressed
modules over a powered data bus.[^manual][^concept] CTS moved to a networked design with its
[Gen7 Serial Timer](../timers/gen7-serial.md), whose deck plates and serial harnesses are
nodes on a powered bus and can report what is plugged into them.[^f1034][^patentdetect]

## On-deck harnesses

An on-deck harness, also called a mobile harness or a cable harness, is a portable cable laid
beside the pool on the deck, with a place at each lane for that lane's equipment to plug in. It needs no construction work,
so it suits pools without in-deck wiring and temporary pools, and it can stand in when fixed
wiring fails. One Ontario club's setup notes for a pool timed with an
[ARES 21](../timers/ares-21.md) describe that arrangement: a fixed deck harness for
normal use, and a portable harness of six junction boxes chained together and run to the
console if the fixed wiring breaks.[^rhac] The cost is loose cable on a wet deck, which
Daktronics advises routing away from foot traffic and covering with a mat.[^manual]

The three main manufacturers build their harnesses differently:

- [Colorado Time Systems cable harness](cts-cable-harness.md): a multi-conductor cable with a
  pod at each lane. On a System 6 the touchpads and the first backup button plug into a primary
  harness, and the second and third buttons into a separate B and C backup-button harness. Near-
  and far-end harnesses have their own inputs on the console, and a second set of inputs allows
  a backup timer to be connected.[^f870] The Gen7 Serial uses serial harnesses instead, which
  can be linked end to end so that one console takes a primary harness and a backup harness
  across as many as 20 lanes.[^f1034]
- [Daktronics lane module](daktronics-lane-module.md): every module is identical and can go in
  any lane. Each has jacks for a touchpad and three buttons and a lane cable to the next module,
  and the console works out which lane a module is from where it sits in the chain. A lane
  extension cable of 25, 50, 100 or 200 ft (7.6, 15.2, 30.5 or 61 m) joins the nearest module to
  the console. Daktronics points out that a failed lane can be fixed by swapping its module
  rather than replacing the whole harness.[^manual]
- [Quantum Mobile Harness](quantum-mobile-harness.md): one Swiss Timing module per lane, its
  case printed with a lane number that is also stored in the module. Up to ten modules chain
  from one cable at each pool end, with a terminator plugged into the last.[^harness]

## In-deck systems

An in-deck system takes the cable off the deck. Conduit runs under the deck between junction
boxes: those set into the deck are called deck boxes, those in or on a wall are wall boxes, and
each carries a connection plate.[^manual] During a meet the only loose cables are the short
leads from each touchpad, button or platform to the plate beside its lane, and the console's
cables to the wall plate.

### Deck plates

A deck plate is set flush into the deck at each lane, usually under or beside the starting
block, and carries the jacks for that lane's equipment. CTS places the deck box under the
block's platform, between the end wall and the block legs, and asks for 3 in of clear space
around it. Each CTS plate arrives pre-wired with up to 200 ft (61 m) of cable and potted, and
is screwed to the tile over a 4 × 4 × 6 in (10.2 × 10.2 × 15.2 cm) PVC box. The finished floor
must sit level with the box's top edge to within a quarter of an inch.[^arch] At the two outside
lanes the plates also take the start-system connection.[^arch]

Each manufacturer lays out the plate differently:

- CTS has made three styles. The standard plate is a connection hub screwed over the deck box.
  The [QuickConnect deck plate](cts-quickconnect-deck-plate.md) moves the hub onto the starting
  block and leaves only a military-style connector in the deck, joined to the hub by one short
  cable. CTS requires it for relay platforms with speedlights.[^arch][^f881] The
  [Titanium Deckplate](cts-titanium-deckplate.md) has titanium jacks on a domed top so that
  water runs off between the contacts, and it can replace older 7.5 in square plates.[^tdpsheet][^patentplate]
- [Daktronics deck plates](daktronics-deck-plate.md) come in three kinds. A lane plate has jacks
  for the touchpad, three buttons, a lane speaker and a remote strobe. A start plate serves the
  horn start and the auxiliary speaker. Bulkhead plates come in pairs: the deck
  carries one and the bulkhead the other, and jumper cables link the two. The lane cables end at a lane interface behind
  the wall plate.[^manual][^t7000]
- [Swiss Timing deck plates](swiss-timing-deck-plate.md) are 153 mm square. Each carries jacks
  for a touchpad, a relay platform, three buttons and loudspeakers, wired for both a primary and
  a secondary timer. The same plate serves as a lane plate or a start plate.[^swconcept]

### Conduit and wiring

The conduit sizes limit how many deck boxes one run can serve. The two editions of CTS's
architectural guidelines agree that a 2 in run can take up to 12 boxes, but disagree on smaller
conduit. The System 6 edition allows four boxes on a 1 in run. The later Gen7 Legacy edition
allows four on 1.5 in and only two on 1 in, and it also recommends draining the
conduit.[^arch][^archg7] This page treats the later edition, the more conservative of
the two, as current. CTS keeps all in-deck wiring under 5 V, grounded at the
console.[^arch] Swiss Timing asks for ducts at least 75 mm across. That leaves room for twenty
lane cables of 6.3 mm plus four cables of 4 × 0.5 mm², the load it expects on the last duct
into the timing room of a ten-lane pool timed by two finish systems. For the lane runs it
recommends shielded, untwisted control cable of 6 × 0.5 mm².[^swconcept]

Bulkheads need their wiring planned when they are built. CTS asks architects to have the
bulkhead manufacturer provide conduit and boxes, and accepts a cable tray above the water line
as an alternative.[^arch]

### Wall plates and distribution boxes

At the other end of the conduit the cabling ends at a panel where the console connects. CTS
uses a [wall plate](cts-wall-plate.md): a 15 × 15 in (38.1 × 38.1 cm) aluminium panel, pre-wired,
set flush into a 12 × 12 × 6 in (30.5 × 30.5 × 15.2 cm) box 18–36 in (45.7–91.4 cm) above the
floor. It also takes the scoreboard, start system, speaker and microphone, and diving judging
terminal connections.[^arch] Daktronics makes several wall plates, including single-ended and
double-ended versions.[^manual] Swiss Timing terminates each deck plate's cable in an
[ODB10-SW](odb10-sw.md) distribution box in the timing room. The box holds up to four racks:
primary and secondary for the finish end and for the far end.[^odb10][^swconcept]

## How the timer identifies each lane

The console has to know which lane every signal came from. The designs differ:

| Design | How the lane is identified | Example |
|---|---|---|
| Multi-conductor harness or plate wiring | The conductors the signal arrives on | CTS System 6 cable harness and legacy deck plates[^f870] |
| Chain of identical modules | The module's position in the chain | Daktronics lane modules[^manual] |
| Chain of addressed modules | A lane number stored in each module, mapped to a lane in software | Swiss Timing Quantum Mobile Harness and ODB10-SW circuits[^sw][^programmer] |
| Networked nodes | Node identity, mapped near-end and far-end in the console's setup | CTS Gen7 Serial deck plates and harnesses[^f1034] |

The addressed designs let the operator reassign lanes. Quantum's pool setup can, for example,
make modules 3 and 5 act as lanes 1 and 2 so that two swimmers can race in the central lanes.[^sw]
The networked CTS deck plates also check what is plugged in. A Gen7 Serial deck plate recognises
the type of device in each jack and flags missing or mismatched inputs, and it measures the
current through each speedlight. This works only on in-deck systems, not on
harnesses.[^f1034] CTS's patent on this describes the plate sending a voltage step into the
attached device and matching the response against stored signatures.[^patentdetect]

## Connectors

Lane equipment plugs in with banana plugs, usually a dual plug with a ground side. Daktronics
puts a tab on the ground side of the plug, and that side goes into the black jack. A touchpad plugged in the
wrong way round can register touches nobody made.[^manual] Banana plugs are not keyed, so CTS's
detection patent notes that a touchpad can end up in a speaker jack.[^patentdetect] Each
manufacturer labels its jacks so that devices go in the right place:

- CTS deck plates have TOUCHPAD, BUTTON A (RJP), BUTTON B and BUTTON C. The harness pods have
  PRIME and BUTTON.[^ctsmeter]
- Daktronics lane modules have TOUCHPAD and BUTTON 1–3, and its lane deck plates have TP and
  B1–B3. On both, a relay platform shares the third button jack.[^manual]
- Swiss Timing uses colours: yellow for the touchpad, white for the starting block and red for
  a pushbutton.[^harness]

## Care and maintenance

CTS names corroded connectors as the most common cabling fault.[^f870] The manufacturers'
advice is broadly the same: keep the contacts greased and clean, and keep pool water off them.

- CTS: put dielectric grease in each harness or deck-plate jack before use, so that a little is
  pushed out when a plug goes in. After use, clean each jack with isopropyl alcohol and a cotton
  pipe cleaner, rinse with fresh water, and grease it again. Hang harnesses up to dry instead of
  bagging them. Diluted lime-scale remover is kept for badly scaled jacks and plugs, and CTS forbids
  it on wall plates, speedlight connectors and the 50-pin console connectors.[^f897] The titanium plate needs
  only a check for debris before each use.[^f1023] An unused QuickConnect plate gets a terminator
  plug if some plates are in use, to stop electrolysis between its contacts, and a cover plug
  otherwise.[^f881]
- Daktronics: at each setup and teardown, brush any corrosion off the connections and coat the
  plugs with silicone lubricant.[^manual]
- Swiss Timing: pot each deck plate's terminations in resin, seal the plate to the floor with
  silicone, and keep silicone paste on the external contacts. Plugging in wipes the paste off,
  so it has to be reapplied after each competition. Plates and harness modules are cleaned and
  regreased weekly and after every use.[^swconcept][^sw]

Each manufacturer also has a way to test the cabling before a meet. CTS's test meter plugs into
each jack and should read 4.5–5 V.[^ctsmeter] The OmniSport 2000 has a lane-module test that
shows each touch and button press by lane.[^manual] The Quantum software lights each module
green once it is communicating.[^sw]

## Governing-body requirements

The rules state what the wiring must achieve, not how it is built. World
Aquatics asks that automatic officiating equipment leave no exposed wires on the deck where
that is possible. It also requires each lane's equipment to be connected independently, so that
one lane can be controlled and maintained without affecting the others.[^frules] The NCAA rule
on automatic timing equipment adds a note that pools should have conduit below the deck for the
wiring of starting, timing and judging equipment.[^ncaa]

## Products

The deck-cabling articles on this wiki are listed below, grouped by manufacturer. Each page
covers the product itself, and this page is the shared overview they refer back to.

| Article | Manufacturer | Type | Installation |
|---|---|---|---|
| [Colorado Time Systems cable harness](cts-cable-harness.md) | Colorado Time Systems | Multi-conductor lane harness | On-deck |
| [QuickConnect deck plate](cts-quickconnect-deck-plate.md) | Colorado Time Systems | Deck connector and block-mounted hub | In-deck |
| [Titanium Deckplate](cts-titanium-deckplate.md) | Colorado Time Systems | Deck plate | In-deck |
| [Colorado Time Systems wall plate](cts-wall-plate.md) | Colorado Time Systems | Wall plate | In-deck |
| [Daktronics lane module](daktronics-lane-module.md) | Daktronics | Lane module harness | On-deck |
| [Daktronics deck plates](daktronics-deck-plate.md) | Daktronics | Deck plates | In-deck |
| [Quantum Mobile Harness](quantum-mobile-harness.md) | Swiss Timing | Addressed lane module harness | On-deck |
| [Quantum harness cable](quantum-harness-cable.md) | Swiss Timing | Harness-to-console cable | On-deck |
| [Quantum harness terminator](quantum-harness-terminator.md) | Swiss Timing | Bus terminator | On-deck |
| [Swiss Timing deck plate](swiss-timing-deck-plate.md) | Swiss Timing | Deck plate | In-deck |
| [ODB10-SW](odb10-sw.md) | Swiss Timing | Distribution box | In-deck |

## See also

- [Touchpads](../touchpad/index.md): the finish sensors this cabling carries
- [Pushbuttons](../semi-automatic/pushbutton/index.md): the backup buttons on each lane
- [Relay take-off platforms](../relay-judging/index.md): the relay judging equipment on the blocks
- [External speakers](../external-speaker/index.md): the lane speakers wired through the same plates
- [Timers](../timers/index.md): the timing consoles the cabling connects to
- [Equipment](../../index.md): the equipment reference

## References

[^arch]: Colorado Time Systems, Architectural Guidelines: A Guide for Designing Competitive Aquatic Facilities (deck plates and wall plates).
[^archg7]: Colorado Time Systems, Gen7 Legacy Architectural Guidelines (©2026), deck plates and conduit.
[^f870]: Colorado Time Systems, Swimming 6 for the System 6 Sports Timer Software User Guide (F870 Rev. 20241107), wiring systems.
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf).
[^f897]: [Colorado Time Systems, Cleaning Deck Plates, Cable Harnesses and Wall Plates (F897 Rev. 201111)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/CleaningDP-CH.pdf).
[^f1023]: [Colorado Time Systems, Cleaning Wall Plates and Titanium Deck Plates (F1023 Rev. 201602)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/Cleaning_titanium_deck_plates_F1023.pdf).
[^f881]: [Colorado Time Systems, Quick Connect Deck Plate Instructions (F881 Rev. 1204)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Other/QuickConnectDeckplateInstr.pdf).
[^ctsmeter]: [Colorado Time Systems, Test Meter Instructions (F696 Rev. 0205)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf) (harness-pod and deck-plate receptacle names).
[^tdpsheet]: [Colorado Time Systems, Titanium Deckplate (TDP)](https://www.coloradotime.com/titanium-deckplate/) (titanium jacks, domed top, retrofit of DP-7 plates).
[^patentplate]: [US Patent 8,602,815 B2, Swimming pool deckplate for horizontal surfaces with integrated slopes around electrical contacts](https://patents.google.com/patent/US8602815B2/en).
[^patentdetect]: [US Patent 11,192,016 B2, Apparatus and method for the detection of timing components in swimming pools](https://patents.google.com/patent/US11192016B2/en).
[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), deck cabling.
[^t7000]: [Daktronics, T-7000 Series Touchpads Installation & Maintenance Manual (DD1953274)](https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf) (lane interface troubleshooting).
[^swconcept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02.pdf).
[^concept]: [Swiss Timing, Quantum Concept Swimming User's Manual (3480.508.02, v1.4, July 2015)](https://web.archive.org/web/20230315150630/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.508.02.pdf).
[^harness]: [Swiss Timing, Quantum Mobile Harness User's Manual (3480.500.02, v1.1, August 2019)](https://web.archive.org/web/20230315150623/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.500.02.pdf).
[^programmer]: [Swiss Timing, Programmer AQ User's Manual (3480.501.02, v1.1, January 2019)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.501.02.pdf).
[^odb10]: [Swiss Timing, ODB10-SW User's Manual (3494.501.02, v1.7, December 2018)](https://web.archive.org/web/20230315150617/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3494.501.02.pdf).
[^sw]: [Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, v1.4, October 2019)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.509.02.pdf).
[^ssih]: [US Patent 4,156,870, Sports timing system](https://patents.google.com/patent/US4156870A/en) (SSIH Management Services; filed 1977, granted 1979).
[^rhac]: [Richmond Hill Aquatic Club, Timing system physical setup at Richvale](https://www.gomotionapp.com/canrhac/UserFiles/Image/QuickUpload/timing-system-physical-setup-at-richvale_095620.docx) (2025).
[^frules]: [World Aquatics, Facilities Rules 2021–2025](https://resources.fina.org/fina/document/2022/02/08/77c3058d-b549-4543-8524-ad51a857864e/210805-Facilities-Rules_clean.pdf), FR 2.3.2.2 and FR 2.3.4.1.
[^ncaa]: [NCAA, Swimming and Diving Rules Book](https://ncaaorg.s3.amazonaws.com/championships/sports/swimdive/rules/PRXSW_RulesBook.pdf), Rule 1, Section 4, Art. 4 (note on below-deck conduit).
