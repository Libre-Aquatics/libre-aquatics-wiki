---
title: Colorado Time Systems TPM-D test meter
description: >-
  The TPM-D is the Colorado Time Systems handheld test meter for checking touchpads, pushbuttons,
  cable harnesses, deck plates and connection hubs.
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
  - label: Manual
    value: '[Test Meter Instructions (F696)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf)'
---

<!--
Research notes, TPM-D. Surfaced 2026-10-21 while building out cts-dp-7-deck-plate.md; already
named without a page on cts-cable-harness.md, touchpad/standard.md, touchpad/aquagrip.md and
semi-automatic/pushbutton/cts.md.

Sources:
- Test Meter Instructions F696 Rev.0205 (accessories/cts-test-meter-instructions): covers
  pads and buttons, harness pods, deck plates and block-mounted hubs, plus the console's
  scoreboard output. Device tests: plug the pad's or button's dual banana plug into the
  top of the meter and press the power button between the prongs; only the power light when idle,
  full red bar graph when pressed; bar lights with no press mean a short, no bars when pressed
  mean an open pad. Harness and deck plate tests: timer connected and on; meter into PRIME (harness)
  or TOUCHPAD (deck plate), then BUTTON; plugging in depresses the power switch; 4.5-5 V on the bar
  graph is good; lower means a timer, harness or plate fault or a dirty connector; clean and
  retest, then contact CTS. Mentions needle and vacuum pump VP-1 for touchpad repair. The F696
  sheet does not itself print the part number TPM-D.
- CTS shop (shop.coloradotime.com/products/test-meter-tpm-d), 2026-10-21: "Test Meter (TPM-D)",
  $375.
- Touchpad guide F147 Rev. 202604 and the Gen7 Legacy guide F1058 name the TPM-D for pad and
  button tests; the Gen7 Serial datasheet lists a touchpad meter in its touchpad system bundle.
Not found: introduction date, battery type, and whether "-D" marks a digital or later version of
an earlier TPM meter.
-->

This article is a stub. The `TPM-D` is the Colorado Time Systems test meter that checks a
touchpad or pushbutton on its own, or plugs into a [cable harness](../deck-cabling/cts-cable-harness.md)
or [deck plate](../deck-cabling/cts-dp-7-deck-plate.md) jack and shows on a bar graph whether 4.5–5 V
is reaching it from the timer.

See the [timers overview](index.md) for the shared background that applies to every CTS timing
console.
