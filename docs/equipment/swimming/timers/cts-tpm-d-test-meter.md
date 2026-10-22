---
title: Colorado Time Systems TPM-D test meter
description: >-
  The TPM-D is the Colorado Time Systems handheld test meter for checking touchpads, pushbuttons,
  cable harnesses, deck plates, connection hubs and a timing console's scoreboard output.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: TPM-D test meter
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`TPM-D`'
  - label: Type
    value: Timing system test meter
  - label: Connection
    value: Dual banana sockets (top), dual banana prongs (bottom), 1/4 in phone jack (side)
  - label: Introduced
    value: By 1998
  - label: Manual
    value: '[Test Meter Instructions (F696)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf)'
---

<!--
Research notes, TPM-D. Stub created 2026-10-21 while building out cts-dp-7-deck-plate.md; built
out 2026-10-21. Named without a page before that on cts-cable-harness.md, touchpad/standard.md,
touchpad/aquagrip.md and semi-automatic/pushbutton/cts.md.

Held sources, read (all under sources/vendors/colorado-time-systems/):
- accessories/cts-test-meter-instructions (F696 Rev.0205), whole sheet, three pages. The text
  does not print the part number TPM-D. Its photo of the meter, rendered at 400 dpi with
  PyMuPDF, shows the panel: TOUCHPAD/BUTTON over two banana sockets on the top edge, with a
  small white fitting beside them (probably the needle holder the pump sheets mention; not
  labelled, so inferred); the CTS logo in its "Inc." form; a SCOREBOARD DATA lamp; a bar graph
  scaled VOLTS 3, 4, 5 from left to right, with a legend reading, for TOUCHPAD PRESSED, BAD at
  the low end and GOOD at the high end, and for RELEASED the reverse; SCOREBOARD DATA CABLE
  beside a jack on the left side; a POWER ON lamp; and POWER ON / DECKPLATE/CABLE HARNESS along
  the bottom edge over two banana prongs, with the power button between them. Tests: pad and
  button (plug in at the top, hold the power button; only the power lamp when idle, full bar
  when pressed; bar lit at rest means a shorted pad, no bar when pressed an open pad; a button
  failing either reading is replaced); harness (timer connected and on, meter into PRIME then
  BUTTON on each pod; the pod presses the power switch; 4.5-5 V good; lower means timer,
  harness or dirty connector; clean per the deck plate and harness cleaning sheet, retest, then
  call CTS); deck plate and under-block hub (TOUCHPAD, then BUTTON A (RJP), B and C; same
  reading); scoreboard output (scoreboard cable into the side jack, console showing running
  time; lamp bright yellow when data flows; solid red, solid green or dark means no data). The
  sheet calls the side jack a "phono" jack; it is a 1/4 in phone jack. Names VP-1 as the pump.
- touchpads-deckplates/cts-standard-and-aquagrip-touchpads-user-guide-f147 (Rev. 202604) and
  the 2014 revision (Rev. 201407): the same four meter procedures, word for word as F696;
  "touchpad test meter" and "vacuum pump and needle" as the two maintenance aids; the
  in-water check (test each mounted pad on the meter while a swimmer touches it; the meter
  should light fully "from left to right"); needle kept in a receptacle on top of the meter;
  figure captions "Touchpad Meter" and "Touchpad Test".
- touchpads-deckplates/cts-needle-vacuum-pump-vp-1-instructions (F207 Rev.1102) and
  cts-trigger-vacuum-pump-vp-2-instructions-f908 (F908 Rev.200909; the -alt file is identical):
  venting a shorted pad with the needle alone until the meter lamps go out, then wait three
  seconds; evacuating an open pad with the pump until the meter is fully lit, then wait for the
  lamps to start going out, wait five seconds, withdraw. Both say the lamps fill and empty
  "from right to left", which disagrees with F147's "left to right" and with the panel's scale.
  Flagged in text.
- software/cts-system-5-swimming-software-user-guide-f506 (F506 Rev. 0698, 1998), appendix A:
  pads and buttons can be checked "with the touchpad button/tester (Model TPM-D) or ohm meter".
  Readings with nothing touching the pad: 0-20 on the tester is good, 40-50 defective, 20-40
  not to be trusted; touching the pad should read full scale (or under 100 ohms on an
  ohmmeter); a weak battery gives false readings. Cable harness check in the same appendix
  uses a voltmeter: 5 V at each jack, or 3 V if the console's low pad voltage option is on.
  The System 6 guide F870 (Rev. 20241107) and its Manualslib and Spanish copies repeat the
  TPM-D sentence. So the TPM-D name dates from at least June 1998, and the 1998 text reads the
  meter on a 0-50 scale, while the 2005 sheet shows a 3-5 V bar graph. Whether the meter was
  redesigned, or the 1998 text describes the same bar graph in other units, is not settled.
- timers-consoles/cts-serial-timer-user-guide-f1034-rev-202603 and cts-legacy-timer-user-guide-
  f1058: in the lane status table, a pad or button shown shorted, corroded or closed should be
  tested on the TPM-D; if it passes, suspect the deck plate or harness. Gen7 swimming guide
  F1034 Rev 201807: for a shorted touchpad, "check the air" with the TPM-D.
- touchpads-deckplates/cts-aquagrip-touchpads (AquaGrip sheet, undated): accessory list, TPM-D
  shows a pad's open or closed state and also tests buttons, data cable, deck plates and the
  scoreboard; VP-2 vacuum pump.
- Catalogues: Complete Timing, Scoring, Training and Display Solutions 2011 and 2015, and
  Making Time Count (2008): TPM-D, touchpad test meter, listed beside VP-2.
- Architectural guidelines (two copies) and Gen7 Legacy architectural guidelines: the test
  meter checks a pad's sensitivity to touch and is used with the vacuum pump when adjusting.
- Warranty: SS2 start system guide F503 (Rev. 0897, copyright 1993) and the Enhanced Support
  Options sheet put test meters under the one-year warranty, not the two-year one.
- Daktronics T-7000 touchpad manual DD1953274: Daktronics' warranty also names test meters;
  not about this product.
- The Swimming World June 1982 hit for "test meter" was a false match.
Web, October 2026:
- CTS shop (shop.coloradotime.com/products/test-meter-tpm-d): "Test Meter (TPM-D)", $375.00,
  US orders; lists what it tests. No battery or dimensions.
- Pool360 (distributor) listing CYC-35-8616, manufacturer part TPMD, about 1 lb: from a search
  summary only; the page returned 403. Not cited.
Not found: battery type, dimensions, the meaning of "-D", any earlier TPM.
-->

The TPM-D is a handheld test meter made by Colorado Time Systems (CTS) for finding faults in a
swim timing system. It checks a [touchpad](../touchpad/index.md) or pushbutton on its own,
reads the voltage a [cable harness](../deck-cabling/cts-cable-harness.md) or
[deck plate](../deck-cabling/cts-dp-7-deck-plate.md) delivers to a lane, and confirms that a
timing console is sending scoreboard data.[^f696] CTS's System 5 manual already names it in
1998.[^f506] CTS sells it for $375 as of 2026.[^shop]

## Role in the timing system

This section places the meter among the other ways CTS suggests isolating a finish fault.

CTS divides a finish system into three parts: the pad or button, the wiring across or under
the deck, and the console itself. Its manuals check them in that order.[^f506] The meter
checks the first two. Pads and buttons need nothing else; for the wiring the console must be
on, because it supplies the voltage the meter reads.[^f696] The Gen7 guides point to it from their
lane status screen. A pad or button that shows as shorted, corroded or closed should be tried
on the TPM-D. If it passes there, the deck plate or harness is the next suspect.[^f1034]
CTS's 1998 System 5 guide offers an ohmmeter as the alternative for pads and buttons, and a
voltmeter for the harness.[^f506]

## Design and construction

This section describes the meter's panel and connectors.

The meter is a small box with a connector on three sides. Two banana sockets on the top edge,
marked TOUCHPAD/BUTTON, take the dual banana plug of a pad or button. The bottom edge, marked
DECKPLATE/CABLE HARNESS, carries a pair of banana prongs that plug into the jacks a pad would use. A 1/4 in
jack on the left side takes a scoreboard data cable.[^f696] The power button sits between the
bottom prongs, so pushing the meter fully into a jack switches it on. For the top sockets it is
pressed by hand.[^f696]

The face carries a red bar graph marked 3, 4 and 5 volts, a POWER ON lamp and a SCOREBOARD
DATA lamp. A legend under the bar graph reads a pressed pad as good at the high end and a
released pad as good at the low end.[^f696] The touchpad guides describe a holder on top of
the meter for the needle used to adjust a pad's air.[^f147][^vp2]

The System 5 guide describes readings on a different scale. It treats 0 to 20 as a sound pad
at rest, 40 to 50 as defective and anything between as untrustworthy, with a full-scale
reading when the pad is touched. It also warns that a weak battery gives false
results.[^f506] The 2005 instruction sheet gives no numbers for a pad, only an empty or full
bar.[^f696] The sources do not say whether the meter changed between the two documents.

## Testing pads and buttons

This section covers the test of a single pad or button off the deck.

The pad's or button's plug goes into the top sockets and the operator holds the power button.
At rest only the power lamp should light. Any lit bar means a shorted pad, one that signals the
console without being touched. Pressing the pad face with a fingertip should light the whole
bar. A pad that stays dark is open and will not register a touch.[^f696] A pushbutton is read
the same way, and CTS says to replace one that gives either wrong reading.[^f696]

CTS also uses the meter for the in-water check after installation. Each pad is tried in turn
on the meter while a swimmer touches it, before the pads are plugged into the deck.[^f147]

## Testing harnesses and deck plates

This section covers the voltage tests on the wiring that feeds each lane.

For these tests the console is connected and switched on. On a cable harness the meter goes
into each pod's PRIME jack, then its BUTTON jack. On a deck plate, or on an under-block connection hub,
it goes into TOUCHPAD, then BUTTON A (RJP), BUTTON B and BUTTON C.[^f696] A healthy jack lights
the bar between 4.5 and 5 V. A lower reading points to the console, the harness or plate, or a
dirty connector. CTS's advice is to clean the connector and retest, and to call its support
line if the reading stays low.[^f696]

The 1998 System 5 guide gives 5 V as the voltage at each harness jack, but 3 V when that
console's low pad voltage option is selected.[^f506] The meter's instructions do not mention
the lower setting, so a console on that setting would read 3 V, below their 4.5 V threshold.[^f696]

## Checking the scoreboard output

This section covers the meter's one test that does not involve the deck.

The data cable is unplugged from the scoreboard and plugged into the meter's side jack, with
the console set to show running time. A bright yellow SCOREBOARD DATA lamp means data is
arriving. If it stays dark or shows a steady red or green, nothing is arriving. CTS says to check that
the cable is seated at both ends and that the console is sending running time before calling
support.[^f696]

## Use with the vacuum pump

This section covers the meter's role when a pad's air is adjusted.

A CTS touchpad's sensitivity depends on the air sealed inside it, as the
[touchpads overview](../touchpad/index.md) explains.[^f147] The adjustment is made out of the water, with the pad plugged into the meter
so its state can be watched.[^vp1][^vp2] To cure a shorted pad, a needle pushed into the plug
on the pad's connector block lets air in until the meter's lamps go out. To cure an open pad,
the needle is fitted to a [vacuum pump](../touchpad/cts-vp-2-vacuum-pump.md) and air is drawn
out until the bar is fully lit. Pumping stops there, and the needle comes out five seconds
after the lamps begin to go out.[^vp1][^vp2]

The sources disagree on which way the bar fills. The pump instructions say the lamps light and
go out from right to left.[^vp1][^vp2] The touchpad guide's in-water check says left to right,
which matches the 3 to 5 V scale printed on the panel.[^f147][^f696]

The 2005 meter sheet names the [VP-1](../touchpad/cts-vp-1-vacuum-pump.md) hand pump.[^f696]
CTS's 2011 and 2015 catalogues and its current shop list the TPM-D beside the VP-2
instead.[^cat11][^cat15][^shop]

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado[^f696] |
| Tests | Touchpads, pushbuttons, cable harness pods, deck plates, under-block connection hubs, scoreboard data[^f696] |
| Pad and button input | Dual banana sockets, top edge[^f696] |
| Wiring input | Dual banana prongs, bottom edge, with power button between them[^f696] |
| Scoreboard input | 1/4 in jack, left side[^f696] |
| Display | Red bar graph marked 3–5 V; POWER ON and SCOREBOARD DATA lamps[^f696] |
| Good wiring reading | 4.5–5 V[^f696] |
| Warranty | One year[^support] |
| Price | $375 (2026)[^shop] |

## Part numbers and accessories

This section lists the parts the sources name with the meter.

- `TPM-D`, the test meter.[^shop][^f506]
- [`VP-2`](../touchpad/cts-vp-2-vacuum-pump.md), the vacuum pump CTS sells beside the meter.[^shop][^vp2]
- [`VP-1`](../touchpad/cts-vp-1-vacuum-pump.md), the earlier hand pump named in the meter's
  instructions.[^f696][^vp1]

## See also

- [CTS cable harness](../deck-cabling/cts-cable-harness.md) and
  [DP-7 deck plate](../deck-cabling/cts-dp-7-deck-plate.md): wiring the meter tests
- [Standard touchpad](../touchpad/standard.md) and [AquaGrip touchpad](../touchpad/aquagrip.md):
  pads the meter checks
- [CTS pushbuttons](../semi-automatic/pushbutton/cts.md): buttons the meter checks
- [Touchpads](../touchpad/index.md): the touchpads overview
- [Timers](index.md): the timers overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f696]: [Colorado Time Systems, Test Meter Instructions (F696 Rev. 0205)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf).
[^f147]: [Colorado Time Systems, Standard and AquaGrip Touchpads User Guide (F147)](https://spanish.coloradotime.com/manuals/touchpad-man.pdf) (Rev. 202604).
[^f506]: [Colorado Time Systems, Swimming 5 for the System 5 Sports Timer user guide (F506, Rev. 0698)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System5/System5swim-man.pdf), appendix A.
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034 Rev 202603)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf), diagnostics.
[^vp1]: Colorado Time Systems, Using Your Needle/Vacuum Pump (F207 Rev. 1102), VP-1 instructions.
[^vp2]: Colorado Time Systems, Using Your Needle/Vacuum Pump (F908 Rev. 200909), VP-2 instructions.
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011), touchpad accessories.
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015), touchpad accessories.
[^support]: Colorado Time Systems, Enhanced Support Options (standard warranty information).
[^shop]: [Colorado Time Systems, Test Meter (TPM-D)](https://shop.coloradotime.com/products/test-meter-tpm-d) (shop page).
