---
title: Swiss Timing Quantum Mobile Harness
description: >-
  The Quantum Mobile Harness is Swiss Timing's on-deck lane cabling for the Quantum Aquatics
  timer: a chain of addressed lane modules, one per lane, carrying touchpad, starting-block and
  pushbutton contacts to the console over one powered data cable.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Quantum Mobile Harness
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3480.950`, `3480.958`, `3480.956` (Primary sets); `3480.960`, `3480.968`, `3480.966` (Primary & Secondary sets)'
  - label: Type
    value: Mobile lane harness
  - label: Lanes
    value: Modules numbered 0–9; up to ten per pool end
  - label: Connection
    value: Tuchel 7-pin data bus to the Quantum `HA1` or `HA2` input
  - label: Timer
    value: Quantum Aquatics
    href: equipment/swimming/timers/quantum.md
  - label: Dimensions
    value: 105 × 105 × 36 mm per module, plus 3 m cable
  - label: Weight
    value: 0.760 kg (Primary); 0.865 kg (Primary & Secondary)
  - label: Manual
    value: '[Quantum Mobile Harness User''s Manual (3480.500.02)](https://web.archive.org/web/20230315150623/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.500.02.pdf)'
---

<!--
Research notes, Quantum Mobile Harness. Stub surfaced while building out quantum.md; built out
2026-10-08, when the page moved from timers/ to the new deck-cabling/ category.

Sources read in full (local copies under sources/vendors/swiss-timing/):
- timers-consoles/swiss-timing-aqu-harness-user-manual-3480.500.02: Quantum Mobile Harness
  User's Manual, v1.1, August 2019 (v1.1 revised the programmer and chaining sections). Module
  case printed with its lane number, lanes 0-9; banana sockets yellow (OCP5 touchpad), white
  (OSB11 block), red (OIT button); sockets joined by a white line are common; lane coding done
  at the factory, programmer for on-site replacement. Sets 3480.950/958/956 (Primary 10/8/6
  lanes) and 3480.960/968/966 (Primary & Secondary). Spares 3480.75X and 3480.76X, at most two
  per harness lane (the manual's wording is ambiguous; read here as two spare modules per
  harness). Console cable 1892.025 (25 m, standard), 1892.050 (50 m on drum), 1892.075 (75 m on
  drum). Tu7p male lead of each module into the Tu7p female socket of the previous one. Up to 10
  modules per pool end; terminator 3480.770 on the last. Module H 105 x W 105 x D 36 mm plus 3 m
  cable; 0.760 kg Primary, 0.865 kg P&S. Clean with a wet cloth, no additives; fill the banana
  sockets with Rhodorsil B431 paste (Rhodia silicone), 9038.7047. Store -10 to 60 C, use 0 to 45 C.
- timers-consoles/swiss-timing-quantum-harness-datasheet-harness-3480-1303: two-page harness
  datasheet, code HARNESS_3480_1303, PDF dated 22 May 2013, still hosted by Swiss Timing as
  DOCM_AQ_HarnessSwimmingPool_0913_EN.pdf (filed from the sources/ root on 2026-10-08). Adds:
  per-lane module numbers 3480.750-759 (Primary, lanes 0-9) and 3480.760-769 (P&S, lanes 0-9);
  kit contents (transport case 9072.6005; 6-lane set has lanes 1-6, 8-lane set lanes 1-8,
  10-lane set lanes 0-9; terminator 3480.770; one OIT3-1T pushbutton 2872.003 per lane; one
  1892.025 cable described as Tu7P male to Tu7P female, 0.5 mm2, 25 m; 100 g of Rhodorsil paste
  9038.7047; manual DOC3480.500). Options list spares as 3480.923 (Primary) and 3480.924 (P&S),
  which disagrees with the manual's 3480.75X/76X; both are given in the text. Weight printed as
  "0.760 gr" / "0.865 gr", which can only mean kg. "Top features" list (weather resistant,
  waterproof, stainless steel contacts, screwed wiring contacts, and "floor level maximum 4 mm")
  is vendor copy; the 4 mm item reads like deck-plate text and is not repeated in the article.
  Photos: a red box with a large white lane number, the colour-coded sockets in two rows on top,
  a grey lead ending in a black round plug and a round socket on the side. One photographed
  module is numbered 11 (outside the documented 0-9 range) and is captioned 3480.924; the
  programmer is captioned 3480.731. Neither is explained.
- timers-consoles/swiss-timing-aqu-quantum-concept-3480.508.02, v1.4: Primary harness modules
  send five contacts (touchpad, relay break detection, three buttons); P&S send ten. Section 5.7:
  module numbers must match lanes; nearest module to HA1 and/or HA2 by 1892.025; longer cables on
  winders listed as 1892.050 or 1892.100 (100 m), which the harness manual does not list (it
  lists 1892.075). HA1/HA2 pinout (Tu 7-pin female): pin 1 PRY +12 V, 2 SDY +12 V, 3/4 PRY data
  +/-, 5/6 SDY data +/-, 7 ground; the Primary console has only the PRY pins. Cabling diagrams
  (figs 4-7): finish-end harness to HA1, intermediate (25/50 m) end harness to HA2, start systems
  on START1/START2. Fig. 7's caption says "Inter PRY & SDY" but the drawing labels the inter-end
  harness as a Primary 3480.95x set; an internal inconsistency, not used in the text.
- touchpads-deckplates/swiss-timing-aqu-concept-0017.509.02 (Swimming Concept v4.9, January
  2017), 3.4.3: shows two flat red harness modules with sockets in two rows on top and a cable
  gland on one end, captioned w x h x d 125 x 35 x 105 mm plus 3 m cable. Neither the size nor
  the shape matches the 2013 datasheet photos or the 2019 manual figures (105 x 105 x 36). Could
  be a later or earlier module design or a drawing reused from another product; unresolved and
  flagged in the text.
- timers-consoles/swiss-timing-aqu-quantum-sw-user-manual-3480.509.02 (v1.4, October 2019):
  pool configuration asks which side has a harness and on which connector; which devices are on
  each module; module-number to lane mapping, with the example of modules 3 and 5 used as lanes
  1 and 2; module ids turn green when communicating; race window lane number green/orange/red
  for module communication; a button disconnects all harness modules and blocks timing pulses;
  deck plates and harness modules cleaned and re-greased weekly and after every use.
- timers-consoles/swiss-timing-aqu-programmer-user-manual-3480.501.02 (v1.1, 8 January 2019):
  RFID programmer, held within 1 cm of the module's antenna mark; P&S write needs the module
  cabled to the Quantum and the HA1 harness deselected in software, then two writes (one marked
  with a star) for the two circuits.
- Quantum Aquatics datasheet, Quantum AQ/10-2015
  (https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_Quantum_1015_EN.pdf):
  console current 0.55 A (Primary) / 1.1 A (P&S) without harness modules, 1.00 A / 2.0 A with 24
  harness modules. Read 2026-10-08. The 24-module figure implies more than one harness on a
  console (two ends of up to ten, plus spares); inferred.
- accessories/swiss-timing-aqu-odb10-user-manual-3494.501.02: the ODB10-SW holds the fixed-wiring
  equivalent of these modules (harness circuits 3494.600) in racks labelled HA1 PRY/SDY and HA2
  PRY/SDY, confirming HA1 = finish end and HA2 = the 50 m end.

Web, read 2026-10-08: searches for the 3480.95x/96x part numbers found no tender, dealer listing
or press coverage; AVK Group (avkgroup.at) lists the ODB10 but not the harness; Swiss Timing's
swimming page does not mention it. US 4,156,870 (SSIH, filed 1977) describes the same
module-per-lane bus idea and is cited on the deck-cabling overview, not here, since nothing ties
it to this product.

Still to research: the 3409.91x "harness set for mobile installations" numbers in the OCP5
datasheet (4/6/8/10 lanes), possibly an earlier generation, not reconciled; whether the modules
work with ARES 21 (ARES used its own HA1/HA2 harness inputs per the Richmond Hill club document,
but no source says the Quantum modules are compatible); prices; the 125 x 35 x 105 mm drawing.
-->

The Quantum Mobile Harness is the on-deck lane cabling that Swiss Timing makes for its
[Quantum Aquatics](../timers/quantum.md) timer. It is a chain of small modules, one per lane,
into which each lane's touchpad, starting block and pushbuttons plug. One cable runs from the
chain to the timer and carries both power and data.[^harness][^concept] Each module stores a
lane number, so the timer identifies a lane by the module's address rather than by the wire the
signal arrives on.[^programmer][^sw] Swiss Timing sells it in Primary sets for a single timer and
Primary & Secondary sets for a pair of timers, in 6-, 8- and 10-lane sizes.[^harness] The general
background on on-deck harnesses and in-deck plates is on the
[deck cabling overview](index.md).

## Role in the timing system

The harness is the mobile half of Quantum's lane cabling. A pool with permanent wiring instead
has a deck plate at each lane, cabled back to an [ODB10-SW](odb10-sw.md) distribution box in the
timing room. The box holds the fixed-installation equivalent of the harness modules and
connects to the same timer inputs.[^odb10][^swconcept] The mobile harness needs no
construction work. It is laid along the deck before a session and packed away afterwards.

Swiss Timing's cabling diagrams place one harness at each pool end that has touchpads. The
finish-end harness goes into the timer's HA1 input and the harness at the far end of a 25 m or
50 m course into HA2. The start systems connect separately to START1 and START2.[^concept] The
ODB10-SW manual labels its racks the same way, HA1 for the finish and HA2 for the 50 m
end.[^odb10]

## Design and construction

Each module is a red case, 105 × 105 × 36 mm, printed with its lane number. It has a 3 m lead
that plugs into the next module towards the timer.[^harness][^ds2013] The top face carries
banana sockets, colour-coded by device:[^harness]

| Socket colour | Device |
|---|---|
| Yellow | [OCP5](../touchpad/ocp5.md) touchpad |
| White | OSB11 starting block, which carries the relay break detection |
| Red | OIT pushbutton (up to three per lane) |

Sockets linked by a printed white line are the common return and are joined inside the case.
A lane can also be run on three pushbuttons alone, without a touchpad.[^harness]

Swiss Timing's 2017 swimming concept manual pictures a different module. It shows a flat red
bar with two rows of sockets and its cable leaving one end, and gives its size as 125 × 35 ×
105 mm with a 3 m cable.[^swconcept] The 2013 datasheet and the 2019 harness manual both give
105 × 105 × 36 mm and show the square, numbered case. The documents do not say whether the
concept manual shows a different version of the module or an unrelated drawing.[^ds2013][^harness]

## Primary and Primary & Secondary modules

Quantum comes in a Primary version with one timer and a Primary & Secondary version that
contains two complete timers and a data switch for choosing which one's results are
used.[^concept] The harness comes in
matching versions:

- A Primary module sends five contacts to the timer: the touchpad, the relay break detection
  from the block, and three buttons.[^concept]
- A Primary & Secondary module does the same job but adds a second electronic circuit, so each
  contact reaches both timers. It sends ten contacts in all, and it is the heavier of the two
  at 0.865 kg against 0.760 kg.[^harness][^concept]

Both versions still use one cable per pool end. Each harness input on the timer is a 7-pin
Tuchel socket. A Primary & Secondary timer carries a +12 V supply and a differential data pair
for each circuit on it, plus a shared ground. The Primary timer wires only the primary
pins.[^concept] The harness takes its power from the timer. The Quantum datasheet puts the
timer's typical draw at 0.55 A for a Primary unit with no harness modules connected, rising to
1.00 A with 24 modules. For a Primary & Secondary unit the figures are 1.1 A and 2.0 A.[^ds]

## Lane addressing

Swiss Timing programs each module's lane number at the factory, and the number printed on the
case shows which lane it is set to.[^harness] Replacing a module on site uses the
[Programmer AQ](../timers/programmer-aq.md), a hand-held RFID unit. It reads or writes the lane
number when held within 1 cm of the antenna mark on the module.[^programmer] Writing a Primary
module needs only the programmer. A Primary & Secondary module holds two circuits, so it must be
cabled to a Quantum while it is written. The operator deselects the HA1 harness in the timing
software, writes one circuit, reselects the harness and writes the other, then checks in the
software that the module appears in the right lane.[^programmer] The Programmer AQ also writes
the lane numbers of the ODB10-SW's harness circuits.[^programmer]

The stored number is a module address, and the software decides which pool lane each address
stands for. In the pool configuration screen the operator marks which ends have a harness and
on which input. They also mark which devices are fitted at each module, and match module
numbers to lanes. Swiss Timing's example uses modules 3 and 5 as lanes 1 and 2 so that two
swimmers can race in the central lanes.[^sw] The timer polls the chain and reports every module it finds.
During a race each lane number on screen is green while the timer is talking to that lane's
module, orange while it is trying, and red if the module cannot be found. A single control
disconnects every harness module and blocks incoming timing pulses until it is
reconnected.[^sw]

## Chaining and connection to the timer

Each module's lead ends in a male 7-pin Tuchel plug, which goes into the female socket of the
module before it in the chain. Up to ten modules chain at each pool end. The last module takes a
terminator plug, part number `3480.770`, which comes with each set.[^harness][^ds2013]

A 25 m [Quantum harness cable](quantum-harness-cable.md) (`1892.025`) from the first module to
the timer is supplied as standard.[^harness] For longer runs the harness manual lists 50 m and
75 m cables on drums (`1892.050` and `1892.075`). The Quantum Concept manual instead lists the 50 m
cable and a 100 m one (`1892.100`) on winders, and does not mention the 75 m
length.[^harness][^concept] Neither document says whether the 100 m cable replaced the 75 m one.

## Care and maintenance

After each use Swiss Timing asks for the modules to be wiped with a damp cloth, using water
without additives. The banana sockets are then filled with silicone paste, Rhodorsil B431,
part number `9038.7047`.[^harness] According to the Quantum software manual, cleaning and
regreasing should happen weekly as well as after every use.[^sw] The modules are stored clean
and dry, between −10 and 60 °C, and are rated for use between 0 and 45 °C.[^harness]

## Specifications

| Specification | Value |
|---|---|
| Lane numbers | 0–9, set at the factory, rewritable with the Programmer AQ |
| Modules per pool end | Up to 10 |
| Contacts per module | 5 (Primary); 10 (Primary & Secondary) |
| Device sockets | Banana: yellow touchpad, white starting block, red pushbuttons |
| Chain connector | Tuchel 7-pin, male plug into the previous module's female socket |
| Module size | 105 × 105 × 36 mm, plus 3 m cable |
| Module weight | 0.760 kg (Primary); 0.865 kg (Primary & Secondary) |
| Cable to timer | 25 m standard; 50, 75 or 100 m on drums (see text) |
| Power | From the timer over the harness cable (+12 V per circuit) |
| Operating temperature | 0–45 °C |
| Storage temperature | −10–60 °C |

## Part numbers and accessories

- `3480.950`, `3480.958`, `3480.956`: Primary harness sets for 10, 8 and 6 lanes.[^harness]
- `3480.960`, `3480.968`, `3480.966`: Primary & Secondary harness sets for 10, 8 and 6
  lanes.[^harness]
- `3480.750`–`3480.759`: Primary modules for lanes 0–9; `3480.760`–`3480.769`: Primary &
  Secondary modules for lanes 0–9. The 6-lane sets contain lanes 1–6, the 8-lane sets lanes 1–8,
  and the 10-lane sets lanes 0–9.[^ds2013]
- Spare modules, at most two per harness: the harness manual numbers them `3480.75X` (Primary)
  and `3480.76X` (Primary & Secondary), while the 2013 datasheet lists them as `3480.923` and
  `3480.924`.[^harness][^ds2013]
- `3480.921`, `3480.922`: [Programmer AQ](../timers/programmer-aq.md) sets, each with a Primary or
  a Primary & Secondary module.[^harness]
- `3480.770`: [Quantum harness terminator](quantum-harness-terminator.md), one per set.[^ds2013]
- `1892.025`, `1892.050`, `1892.075`, `1892.100`: [Quantum harness cables](quantum-harness-cable.md),
  25 m to 100 m.[^harness][^concept]
- `2872.003`: [OIT3 pushbutton](../semi-automatic/pushbutton/swiss-timing.md), one per lane in each
  set.[^ds2013]
- `9038.7047`: Rhodorsil silicone paste, 100 g, for the sockets.[^ds2013]
- `9072.6005`: transport case.[^ds2013]

## See also

- [Quantum Aquatics](../timers/quantum.md): the timer the harness serves
- [ODB10-SW](odb10-sw.md) and [Swiss Timing deck plate](swiss-timing-deck-plate.md): the fixed-wiring alternative
- [Programmer AQ](../timers/programmer-aq.md): the RFID tool that sets the lane numbers
- [OCP5 Touchpad](../touchpad/ocp5.md): the touchpad that plugs into the yellow sockets
- [Deck cabling](index.md): the deck-cabling overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^harness]: [Swiss Timing, Quantum Mobile Harness User's Manual (3480.500.02, v1.1, August 2019)](https://web.archive.org/web/20230315150623/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.500.02.pdf).
[^ds2013]: [Swiss Timing, Aquatics Harness Swimming Pool datasheet (HARNESS_3480_1303)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_HarnessSwimmingPool_0913_EN.pdf) (2013; kit contents).
[^concept]: [Swiss Timing, Quantum Concept Swimming User's Manual (3480.508.02, v1.4, July 2015)](https://web.archive.org/web/20230315150630/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.508.02.pdf).
[^swconcept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02.pdf), 3.4.3 Harness.
[^sw]: [Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, v1.4, October 2019)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.509.02.pdf).
[^programmer]: [Swiss Timing, Programmer AQ User's Manual (3480.501.02, v1.1, January 2019)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.501.02.pdf).
[^odb10]: [Swiss Timing, ODB10-SW User's Manual (3494.501.02, v1.7, December 2018)](https://web.archive.org/web/20230315150617/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3494.501.02.pdf).
[^ds]: [Swiss Timing, Quantum Aquatics datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_Quantum_1015_EN.pdf) (Quantum AQ/10-2015).
