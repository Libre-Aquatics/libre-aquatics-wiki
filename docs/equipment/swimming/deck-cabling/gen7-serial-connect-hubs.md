---
title: Colorado Time Systems Gen7 serial connect hubs
seoTitle: CTS Gen7 serial connect hubs
description: >-
  The Gen7 serial connect hubs are Colorado Time Systems' keyed, colour-coded titanium
  connection nodes for the timer, starter, scoreboard and bulkheads on a Gen7 Serial
  installation, set into the deck or built into a Gen7 wall plate.
updated: 2026-10-16
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Gen7 serial connect hubs
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`TDPI-T1`, `TDPI-S2`, `TDPI-BH3`, `TDPI-BH4`, `TDPI-SC5` (in-deck); `WPI-S2` (starter, wall plate)'
  - label: Type
    value: In-deck and wall-plate connection nodes
  - label: Models
    value: Timer, starter, scoreboard, bulkhead (in-deck and on-bulkhead)
  - label: Timer
    value: Gen7 Serial Timer
    href: equipment/swimming/timers/gen7-serial.md
  - label: Connection
    value: Keyed, colour-coded, wet-pluggable multi-pin socket with titanium pins
  - label: Mounting
    value: 4 × 4 × 6 in PVC junction box; 1.5 in PVC conduit between boxes
  - label: Patent
    value: US 10,137,353
  - label: Source
    value: '[CTS, Gen7 Swim Timing Serial Connect Hubs](https://coloradotime.com/products/gen7-swim-timing-serial-connect-hubs)'
---

<!--
Research notes, Gen7 serial connect hubs. Stub surfaced 2026-10-10 while building out
cts-titanium-deckplate.md; built out 2026-10-16.

Local sources read (sources/vendors/colorado-time-systems/):
- timers-consoles/cts-gen7-serial-connect-hubs: two-page datasheet, REV 09/22, PlayCore
  branding. Page 2 table: TDPI-T1 timer, TDPI-S2 starter, TDPI-BH3 bulkhead in-deck, TDPI-BH4
  bulkhead on the bulkhead, TDPI-SC5 scoreboard, each described as a titanium connect. Page 1
  rendered and inspected: four square plates whose socket collars are red (Timer Connect),
  green (Start Connect), gray (Scoreboard Connect) and blue (Bulkhead Connect), and a plain
  Connect Hub Cover. Feature list (paraphrased): keyed and colour-coded so each part has one
  place; titanium pins; wet-pluggable connector that pushes water off the contacts as it mates;
  self-diagnostics on the connectors; detects whether something is connected; fits a 4 x 4 x 6
  in PVC junction box; 1.5 in PVC conduit between deckplate and wallplate boxes.
- timers-consoles/cts-gen7-serial-swim-timing-gen7: Gen7 Serial datasheet, REV 10/24. Hubs
  are keyed and colour-coded; each checks its location for a connection twice a second; on-board
  memory keeps troubleshooting data; screw-on cap; no chemical cleaning; floor plates can be
  power-washed; timer, start, scoreboard and bulkhead hubs mount in the deck or in wallplates.
  Separately: "Wallplates" feature LED status indicators; feature table lists "Smart wallplates
  and deckplates" and floorplates that can replace outdoor tombstones; parts list names
  connect hubs, wallplates and timer, starter, scoreboard and bulkhead cables without part
  numbers.
- timers-consoles/cts-serial-timer-user-guide-f1034-rev-202603: R-015-715-xx, black end to the
  timer, white end (red key) to the timer node, deck or wall plate; starter to
  a start node over R-015-706-xx (green keyway) or straight to the timer. Course setups are set
  up at installation and new ones need CTS support. Diagnostics cover deck wiring and harnesses;
  inputs open, closed, shorted or corroded; bulkheads and harnesses must be plugged into the
  right deckplate, wallplate or timer connection before testing; start input testable at near
  end, far end and on the timer. Battery figures are given for 10-node and 60-node
  in-deck systems. The 2018 revision (F1034 Rev 201807) has the same Timer-node sentence.
- start-systems/cts-championship-elite-start-system-user-instructions-f1064, Rev 202606:
  R-015-706-xx, 8 m or 15 m, from the Elite's WALLPLATE connector to the starter node,
  TDPI-S2 when set in the deck and WPI-S2 when in a wall plate; the cable carries the start signal and the lane
  speaker audio. The same WALLPLATE connector takes CMP-WPxx to a legacy wall plate, which
  carries start, audio, speedlight signal and strobe power. Only source for any WPI- number.
- timers-consoles/cts-gen7-serial-swim-timing-video: CTS slide video "Gen7 Serial Swim Timing"
  (3:15, youtube.com/watch?v=pfd3J5qrf9g), slide PNGs held. 0:57 bulkhead: wet-pluggable floor
  plates poolside and in the bulkhead, blue socket. 1:08: the bus lets the timer, start
  system, deck clocks, portable scoreboards and bulkheads connect wherever the facility
  chooses. 1:11 hub features as the 10/24 datasheet plus reporting of compromised wire
  terminations and corrosion, mounting in floor or wall. 1:42 Start Connect, green, for the
  Championship or Infinity starter. 2:24 Lane Quick Connect Hub, dark gray, same feature list,
  no part number and no stated purpose. 2:40 Timer Connect, red. 2:57 Scoreboard Connect,
  light gray, for deck clocks and portable scoreboards. Shared housing: square plate, four
  corner screws, GEN7 moulded at the top, CTS name down the left, radial ribs round a central
  multi-pin socket whose collar is coloured, key notch below the socket.
- Searched the tracker and the whole tree for TDPI, WPI-, R-015-706 and R-015-715: only the
  documents above (periodical hits were OCR noise). All rows already scanned.

Web (fetched 2026-10-16):
- CTS "Gen7 Serial Scoreboard Connect Hub" datasheet, REV 09/22 (two pages; hosted as
  coloradotime.com/hubfs/PDFs/data sheets/Gen7_Serial_SB_Connect.pdf; filed as
  timers-consoles/cts-gen7-serial-scoreboard-connect-hub): TDPI-SC5 only; callout says the hub
  is keyed gray and takes scoreboard equipment only; banner says the titanium pins are
  electrically passive when nothing is plugged in; same feature list as the combined sheet.
- DisplayLink Plus (DL+) and the scoreboard hub. The wiki's maintainer reports a scoreboard
  node mounted in a Gen7 wall plate (not an in-deck TDPI-SC5; that facility has no in-deck
  scoreboard node) which connects to the facility's DL+ computer (first-hand, 2026-10-16). This
  also confirms that a wall-plate scoreboard node exists, whose WPI- part number CTS has not
  published. No CTS document found says this in so many words. What the documents give:
  the scoreboard hub is for scoreboard equipment only (SB Connect sheet); the timer's in-deck
  cable carries timing and scoreboard data (F1041 Rev C); a DL+ computer driving an LED video
  board takes the Gen7 timer's RS-485 scoreboard data, which carries names, team scores and
  results from Gen7 Swimming v2023/v2026 and DL+ v4.6/v4.7 (F1034 Rev 202603 Appendix C); the
  F1041 on-deck sheet shows the timer's own scoreboard output going to an Otter board or a
  "MATRIX / DL+" computer. Searched: CTS manuals page, hubs and Gen7 Serial product pages, CTS
  support videos (titles only; "Gen7 Serial Hardware Connections" not viewable here).
  Worth confirming from the plate's label or a CTS installation drawing before stating it.
- CTS hubs product page (coloradotime.com/products/gen7-swim-timing-serial-connect-hubs):
  same five parts; reports input connections, wire terminations and corrosion; current, no
  discontinued marker, quote only; documents F1066, F1041, F1044, F1049, F1034-1.
- F1041 Gen7 Serial Quick Start Guide, Rev C (filed as timers-consoles/cts-gen7-serial-quick-start-guide-f1041-rev-c):
  the R-015-715-XX run from the timer's IN DECK socket to the red timer hub is labelled the
  in-deck timing and scoreboard connection.
- F1066 Gen7 Networking Information (F1066/202201, filed beside F1041): network settings only;
  nothing on hubs.
- CTS blog "Serial or Legacy, Which Gen7 Timer is Right for You?": two-way communication
  between the timer and nodes such as deck plates and wall plates; course configurations
  checked against the in-deck connections; office wallplate lets the timer stay in a secure
  office. No date or author.
- Gen7 Serial product page: Gen7 wallplates with LED indicators, an office wallplate, a
  related "Universal Wallplate" product; Quick Connect Deckplate marked discontinued.
- US 10,137,353 B2 (Google Patents): application 15/120,577 filed 20 February 2015, priority
  provisional 61/944,670 of 26 February 2014, published US 2017/0095722 A1 on 6 April 2017,
  granted 27 November 2018; inventors Chris Stockinger, Eric Solanyk, Anne Jordan, Brett
  Anderson, Craig Jacobs, Pete Schiel; assignee Everlast Climbing Industries (CTS). Claims a
  network of located nodes and a control device that shows them on a map of the pool and lets
  the user pick and configure them for an event. Description: each node has a unique identifier
  and stored coordinates from a pool origin, held redundantly so a replacement takes over a known
  location; node kinds include course connection nodes (the patent's name for what are
  traditionally wall plates, possibly in walls, tombstones, monuments or parapets), hub nodes at
  lane ends, scoreboard nodes, floor plate nodes in the deck, bulkhead nodes with a bulkhead
  plate, and moveable nodes such as harnesses. Keying and diagnostics not in the part read.
- US 11,192,016 B2: component detection by electrical signature; summarised on
  cts-titanium-deckplate.md; not re-read.
- Wall plates: CTS Universal Wallplate page and its datasheet "Universal Wall Plates" (Rev
  03/14, filed as touchpads-deckplates/cts-universal-wall-plates-rev-0314): 15 x 15 x 0.25 in aluminium panel, wiring included; options
  WLPA, WLPA-F, WLPA-S, WLPA-FS (near end, far end, short course), K-DV diving, K-12 twelve
  lanes; blank plates for expansion; photo shows timing connectors for the short course and both
  pool ends, with start, speaker, strobe and speedlight jacks, scoreboard and fiber outputs and
  judging-terminal jacks. No nodes and no LEDs: this is the parallel plate F1064 calls legacy.
  Covers C-WLP-01 (new) and C-WLP-02 (retrofit, fits standard ABS wall plates, so an older ABS
  plate existed). HS Sports lists a "Colorado Timing Wall Plate" (search summary gave CE-3310,
  aluminium, up to 12 lanes); page did not render, unverified.

Not found: any WPI- part beyond WPI-S2; part numbers or photos of the Gen7 wall plate itself;
which hubs the Gen7 wall plate holds as standard; pin count; dimensions; BH3 versus BH4
colour (one blue plate shown); the Lane Quick Connect hub's part number and job; launch date
beyond the Gen7 Serial announcement of April 2017.
-->

The Gen7 serial connect hubs are the connection points of the in-deck system that serves the
[Gen7 Serial Timer](../timers/gen7-serial.md) made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). Each hub is a node on
the system's serial bus. There is a separate hub for the timer, the start system, the
scoreboard and the bulkheads, and each is keyed and colour-coded so that only its own cable
fits.[^hubsds] Most are set into the deck as `TDPI-` parts, but the same nodes can also be built
into a Gen7 wall plate; the starter's wall-plate node is `WPI-S2`.[^g7ds][^f1064] CTS calls the
bus an "intelligent" system, and its patent covers the networked-node design.[^hubsds][^patentnode]

## Role in the timing system

This section places the hubs in a Gen7 Serial installation. On an older, parallel-wired CTS
in-deck system, each lane's deck plate has its own cable back to one wall plate, and the timer,
the start system and the scoreboard all connect there.[^archg7][^uwp] On a Gen7 Serial system the lane wiring ends instead at the
[Titanium Deckplate](cts-titanium-deckplate.md) in each lane, which is itself a node on the bus,
and the timer, start system, scoreboard and bulkheads each plug into a hub of their own
wherever the facility put one.[^g7ds][^blog] CTS's presentation of the system says the bus
lets the facility choose those places, including points for deck clocks and portable
scoreboards.[^g7video]

Which nodes make up a course is set when the system is installed, and the timer's software
then offers those course setups; adding a new one needs CTS support.[^f1034] CTS's patent on
the system describes each node as carrying an identifier and a stored position measured from a
corner of the pool, so that the timer can draw the pool, let the operator pick the nodes for an
event and hand a replacement node the position of the one it replaced.[^patentnode]

See the [deck cabling overview](index.md) for the background shared by every deck plate and
harness, including how other systems identify each lane.

## Hub types

This section lists the hubs by job. Each one is told apart by the colour of the collar round
its socket and by the key that stops the wrong cable going in.[^hubsds]

| Hub | Part number | Colour | What plugs in |
|---|---|---|---|
| Timer connect | `TDPI-T1` | Red | The timer's in-deck cable, which carries timing and scoreboard data[^f1034][^f1041] |
| Starter connect | `TDPI-S2` (`WPI-S2` in a wall plate) | Green | The start system, with its lane-speaker audio[^f1064] |
| Scoreboard connect | `TDPI-SC5` | Light gray | Scoreboard equipment only, such as deck clocks and portable scoreboards[^sbds][^g7video] |
| Bulkhead connect, in-deck | `TDPI-BH3` | Blue | The deck end of a bulkhead link[^hubsds] |
| Bulkhead connect, on bulkhead | `TDPI-BH4` | Blue | The bulkhead end of the same link[^hubsds] |

The datasheet photograph shows one plate of each colour, so it does not say whether the two
bulkhead parts differ in colour.[^hubsds] It calls the scoreboard hub gray, while CTS's video
calls it light gray to set it apart from a dark gray Lane Quick Connect hub.[^g7video] That
sixth hub has the same housing and features as the others, but it is missing from the datasheet
and the product page, and CTS has not published its part number or said what plugs into
it.[^hubsds][^product]

## In the deck and in wall plates

This section covers where the hubs can be mounted. The `TDPI-` parts are in-deck nodes. Each
is a floor plate fitted to a 4 × 4 × 6 in PVC junction box, the same box size CTS uses for its
deck plates, and the boxes are joined by 1.5 in PVC conduit.[^hubsds][^archg7] Outdoors, CTS
offers these floor plates in place of the older deck "tombstones".[^g7ds]

The same node types can instead be mounted in a wall plate. CTS lists the timer, start,
scoreboard and bulkhead hubs as mountable in the deck or in wallplates, and the Gen7 Serial
Timer manual allows for the timer node to sit in either place.[^g7ds][^f1034]
The Championship Elite manual gives the starter's two versions by number: `TDPI-S2` in the deck
and `WPI-S2` in a wall plate.[^f1064] No other `WPI-` number has been published, so the wall-plate
versions of the timer, scoreboard and bulkhead nodes are presumed but not confirmed. CTS's
patent treats wall plates the same way, as one kind of node on the bus.[^patentnode]

Only the Gen7 wall plate can hold nodes. CTS describes it as a "smart" plate with LED
indicators that show the system's status, and an office version lets the timer stay in a
locked room rather than at the timing table.[^g7ds][^blog] CTS's earlier aluminium
[wall plate](cts-wall-plate.md) is a parallel-wired panel. It has fixed sockets for short-course,
near-end and far-end timing, start, speaker, scoreboard and judging terminals, and no
nodes.[^uwp] A start system reaches one of those through a `CMP-WPxx` cable instead of the Gen7
starter cable.[^f1064]

## Design and construction

All of the hubs share one housing. Each is a square plate fixed with four corner screws, with
"GEN7" moulded at the top and the CTS name down one side. Radial ribs surround a round
multi-pin socket in the centre, whose collar carries the hub's colour, and a notch below the
socket lines up the plug.[^hubsds][^g7video] The pins are titanium, and CTS says they carry no current while nothing is plugged in.[^hubsds][^sbds] CTS describes the
connector as wet-pluggable, meaning that mating the plug pushes water off the contacts, so a
bulkhead connection no longer has to be kept dry.[^hubsds][^g7video] When nothing is plugged in,
a screw-on cap, supplied with the hub, closes the socket.[^g7ds]

CTS has not published the pin count, the plate's dimensions or the hubs' weight.

## Detection and diagnostics

This section covers what the hubs report. According to CTS, each hub checks twice a second
whether something is connected at its location, reports on its input connections, its wire
terminations and any corrosion, and keeps troubleshooting data in on-board memory.[^g7ds][^product]
These are CTS's descriptions, and no independent test of them has been found.

The results appear on the timer's diagnostics screen, which treats the in-deck wiring and the
on-deck harnesses alike. Before a test, any bulkheads and harnesses are plugged into the right deckplate, wall
plate or timer connection. With the pool empty every input should read open, and a walk round
the deck pressing each pad, button and relay platform should turn each one closed; an input
that reads shorted or corroded points to water or oxide in that part of the wiring. The start
input can be tested at the near end, at the far end and on the timer itself.[^f1034]

A separate CTS patent describes one way to identify connected equipment: a processor sends a
voltage step into the device and compares the response with stored
signatures.[^patentdetect] CTS has not said whether the hubs use that method.

## Connection to the timer

This section covers the cables. The timer reaches the bus through one cable, `R-015-715-xx`.
Its black end goes into the timer's in-deck socket and its white end, with a red key, into a
timer node in the deck or a wall plate.[^f1034] CTS's quick start guide labels this run the
in-deck timing and scoreboard connection, and shows a direct cable from the timer to a
scoreboard only as an option.[^f1041]

The start system has two routes. It can be wired straight to the timer, with one cable for the
start signal and one for the speaker, or it can plug into a starter node through
`R-015-706-xx`, which has a green key.[^f1034] On the Championship Elite that cable runs from
the starter's WALLPLATE connector, comes in 8 m and 15 m lengths, and carries both the start
signal and the audio for the lane speakers into the deck.[^f1064]

Scoreboard data travels the same way. The timer sends it onto the bus through its in-deck
cable, and the scoreboard hub is the point on the bus reserved for scoreboard
equipment.[^f1041][^sbds] One kind of scoreboard equipment is the computer running CTS's
DisplayLink Plus (DL+) software for an LED video board, which takes the Gen7 timer's RS-485
scoreboard data. That link also lets the board show names, team totals and full results sent by
the timer, so the DL+ computer needs no connection of its own to the meet-management
software.[^f1034]

A movable bulkhead connects through a pair of hubs: `TDPI-BH4` on the bulkhead and `TDPI-BH3`
in the deck beside it.[^hubsds] CTS's video presents this as the end of keeping bulkhead plugs
dry.[^g7video]

## Care and maintenance

CTS's instructions for the hubs are short. Debris is removed from the socket, no chemical
cleaner is used, and the cap goes back on when the hub is not in use; the floor plates can be
power-washed.[^g7ds][^product] CTS describes the hubs as needing almost no maintenance.[^hubsds]
The Gen7 Serial Timer manual disagrees in part. Its general cleaning steps for cable and in-deck
connectors call for rubbing alcohol and silicone grease, without saying whether the hubs are
excluded.[^f1034] This article follows the hub documents as the more specific source.

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado |
| Part number | `TDPI-T1`, `TDPI-S2`, `TDPI-BH3`, `TDPI-BH4`, `TDPI-SC5`; `WPI-S2`[^hubsds][^f1064] |
| Timer | Gen7 Serial Timer |
| Connector | Keyed, colour-coded, wet-pluggable multi-pin socket; titanium pins[^hubsds] |
| Colours | Timer red; starter green; scoreboard light gray; bulkhead blue[^hubsds][^g7video] |
| Mounting | In the deck over a 4 × 4 × 6 in PVC junction box, or in a Gen7 wall plate[^hubsds][^g7ds] |
| Conduit | 1.5 in PVC between boxes[^hubsds] |
| Monitoring | Connection check twice a second; on-board memory (CTS)[^g7ds] |
| Timer cable | `R-015-715-xx`[^f1034] |
| Starter cable | `R-015-706-xx`, 8 m or 15 m[^f1064] |
| Patent | US 10,137,353 (filed 2015, granted 2018)[^patentnode] |
| Earliest dated document | Datasheet, REV 09/22 |

## Part numbers and accessories

This section lists the hubs and the parts used with them.

- `TDPI-T1`, timer connect.[^hubsds]
- `TDPI-S2`, starter connect, in the deck; `WPI-S2`, the same node in a wall plate.[^hubsds][^f1064]
- `TDPI-BH3`, bulkhead connect in the deck; `TDPI-BH4`, bulkhead connect on the bulkhead.[^hubsds]
- `TDPI-SC5`, scoreboard connect.[^hubsds]
- Connect hub cover, the cap for an unused hub; no part number published.[^hubsds]
- `R-015-715-xx`, timer to timer node.[^f1034]
- `R-015-706-xx`, start system to starter node, 8 m or 15 m.[^f1064]
- `CMP-WPxx`, the cable a start system uses on an older parallel wall plate instead.[^f1064]

## See also

- [Titanium Deckplate](cts-titanium-deckplate.md): the lane plate that shares the bus
- [Colorado Time Systems wall plate](cts-wall-plate.md): the parallel-wired plate that predates Gen7
- [Gen7 Serial Timer](../timers/gen7-serial.md): the timer the hubs serve
- [Championship Elite Start System](../starter/championship-elite-start-system.md): the start system that plugs into the starter node
- [Deck cabling](index.md): the deck-cabling overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^sbds]: [Colorado Time Systems, Gen7 Serial Scoreboard Connect Hub](https://coloradotime.com/hubfs/PDFs/data%20sheets/Gen7_Serial_SB_Connect.pdf) (datasheet REV 09/22).
[^hubsds]: [Colorado Time Systems, Gen7 Serial Connect Hubs](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Gen7_Connect_Hubs.pdf) (datasheet REV 09/22).
[^product]: [Colorado Time Systems, Gen7 Swim Timing Serial Connect Hubs](https://coloradotime.com/products/gen7-swim-timing-serial-connect-hubs) (product page).
[^g7ds]: [Colorado Time Systems, Gen7 Serial Swim Timing](https://coloradotime.com/products/gen7-swim-timing-serial) (datasheet REV 10/24 and product page).
[^blog]: [Colorado Time Systems, Serial or Legacy, Which Gen7 Timer is Right for You?](https://coloradotime.com/blog/serial-or-legacy-which-gen7-timer-is-right-for-you).
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034 Rev 202603)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf), connections and diagnostics.
[^f1041]: [Colorado Time Systems, Gen7 Serial Quick Start Guide (F1041 Rev C)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7_Serial_Quick_Start_Guide_F1041.pdf).
[^f1064]: [Colorado Time Systems, Championship Elite Start System User Instructions (F1064)](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Elite/Championship%20Elite%20Starter_F1064.pdf), connections.
[^g7video]: [Colorado Time Systems, Gen7 Serial Swim Timing](https://www.youtube.com/watch?v=pfd3J5qrf9g) (video, 3:15), connect hub slides.
[^archg7]: Colorado Time Systems, Gen7 Legacy Architectural Guidelines (©2026), deck plates, conduit and wall box.
[^uwp]: [Colorado Time Systems, Universal Wallplate](https://coloradotime.com/products/universal-wallplate) (product page and Universal Wall Plates sheet, Rev 03/14).
[^patentnode]: [US Patent 10,137,353 B2, System for timing and scoring aquatic sports in pools](https://patents.google.com/patent/US10137353B2/en) (filed 2015, granted 2018).
[^patentdetect]: [US Patent 11,192,016 B2, Apparatus and method for the detection of timing components in swimming pools](https://patents.google.com/patent/US11192016B2/en) (priority 2014).
