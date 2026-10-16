---
title: Colorado Time Systems wall plate
description: >-
  The Colorado Time Systems wall plate is the pre-wired aluminium panel on the pool wall where a
  CTS timing console, start system and scoreboard connect to in-deck wiring.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Colorado Time Systems wall plate
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Type
    value: Wall connection panel
  - label: Dimensions
    value: 15 × 15 × 0.25 in (38.1 × 38.1 × 0.64 cm)
---

<!--
Research notes, CTS wall plate. Surfaced 2026-10-08 while writing the deck-cabling overview.

Read: CTS Architectural Guidelines (System 6 edition) and Gen7 Legacy Architectural Guidelines,
wall plate page (sources/vendors/colorado-time-systems/catalogs-brochures/). Conduit from the deck
boxes ends here, and the plate also has connections for the console, the scoreboard, the
starter with its speaker and microphone, and diving judging terminals. 15 x 15 x 0.25 in aluminium panel,
pre-wired with terminals, fitted into a 12 x 12 x 6 in box that the building contractor provides (CTS prefers PVC
where code allows), mounted 18-36 in above the floor indoors or above the deck outdoors, flush
or recessed. Optional cover 16 x 16 x 2 in with a 13.5 x 11.5 in opening. Scoreboard data runs
in 1 in conduit from a single-gang box at the scoreboard to the wall box.
F897 and F1023 cleaning sheets: clean the sockets with alcohol and a soft toothbrush and grease
them, except the fiber-optic scoreboard data connection; never use descaler on a wall plate.
The console's 50-pin cable plugs into the wall plate. Start systems connect with CMP-WPxx
cables (start-system pages). On Gen7 Serial systems the in-deck cable R-015-715-xx goes into a
"Timer" node in the wall plate or deck (F1034); the Championship Elite page cites WPI-S2 nodes.

Wall plate versions (researched 2026-10-16 for gen7-serial-connect-hubs.md):
- Universal Wall Plate, the parallel-wired plate. CTS product page coloradotime.com/products/
  universal-wallplate and its sheet "Universal Wall Plates" (Rev 03/14; filed as
  touchpads-deckplates/cts-universal-wall-plates-rev-0314): 15 x 15 x 0.25 in aluminium, all wiring and terminals included;
  options WLPA (near end), WLPA-F (near and far end), WLPA-S (near end and short course),
  WLPA-FS (all three), K-DV diving, K-12 twelve lanes; blank plates for later expansion. The
  photo shows a red multi-pin timing socket for each of the short course and the two pool ends,
  each with start and speaker jacks, start-system, strobe and speedlight connectors, scoreboard and aux
  sockets, two fiber outputs and a row of judging-terminal jacks. Covers C-WLP-01 (new) and
  C-WLP-02 (retrofit, made to fit "standard ABS wall plates"), 16 x 16 x 2 in anodised
  aluminium, needing 20 in of clearance in the direction the cover opens.
- An earlier ABS plate is implied by the C-WLP-02 retrofit cover; no other detail found.
- Gen7 wall plates: the Gen7 Serial datasheet (REV 10/24) and product page describe "smart"
  wall plates with LED status lights and an office wall plate that lets the timer stay in a
  secure room; the Gen7 connect hubs (timer, starter, scoreboard, bulkhead) can be mounted in
  them. F1064 Rev 202606 gives the starter node in a wall plate as WPI-S2 (TDPI-S2 in the deck);
  no other WPI- number published. F1064 calls the parallel plate the "legacy wallplate", reached
  by a CMP-WPxx cable. No part number or photo of the Gen7 plate itself found.
- HS Sports lists a "Colorado Timing Wall Plate"; a search summary gave CE-3310, aluminium, up
  to 12 lanes; the page did not render, so unverified.

Still to research: the Gen7 wall plate's part numbers, layout and which nodes it carries as
standard; multi-end and diving-well layouts.
-->

This article is a stub. CTS makes its parallel-wired wall plate as a pre-wired 15 × 15 in (38.1 ×
38.1 cm) aluminium panel, set in the pool wall, where in-deck wiring from the deck plates ends
and the timing console, start system and scoreboard connect; its Gen7 wall plates instead hold
the [Gen7 serial connect hubs](gen7-serial-connect-hubs.md) as nodes on the timer's bus.

See the [deck cabling overview](index.md) for the shared background that applies to every
deck plate and harness.
