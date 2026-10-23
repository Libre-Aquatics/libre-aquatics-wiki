---
title: Colorado Time Systems VP-2 vacuum pump
description: >-
  The VP-2 is the Colorado Time Systems hand-squeezed vacuum pump and needle for adjusting the
  air inside a touchpad, used with the TPM-D test meter and sold since 2006.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: VP-2 vacuum pump
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`VP-2`'
  - label: Type
    value: Touchpad needle and vacuum pump
  - label: Used with
    value: '[TPM-D test meter](equipment/swimming/timers/cts-tpm-d-test-meter.md)'
  - label: Introduced
    value: By August 2006
  - label: Predecessor
    value: '[VP-1](equipment/swimming/timers/cts-vp-1-vacuum-pump.md)'
  - label: Status
    value: Current (2026)
  - label: Manual
    value: '[Using Your Needle/Vacuum Pump (F908)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Touchpads/VP-2_Trigger_Vacuum_Pump_F908.pdf)'
---

<!--
Research notes, CTS VP-2. Stub created 2026-10-21 while building out cts-tpm-d-test-meter.md
(already named without a page on touchpad/standard.md and touchpad/aquagrip.md); built out
2026-10-22.

Held sources, read in full (sources/vendors/colorado-time-systems/):
- touchpads-deckplates/cts-trigger-vacuum-pump-vp-2-instructions-f908: F908 Rev.200909, two
  pages; PDF created 28 September 2009. The -alt copy is the same text (diffed). Venting a
  shorted pad uses the needle on its own; evacuating an open pad uses the pump: switch set to
  vacuum, needle cover off, deburr, cover back on, needle onto the clear hose, cover off,
  needle into the orange plug, squeeze and release the handles until the meter is fully lit,
  stop, wait for the lamps to start going out, five more seconds, withdraw, cover the needle
  and put it back in its holder on the meter. Rendered at 400 dpi with PyMuPDF: the photo
  captioned as the vacuum and pressure ports shows a grey plastic pistol-grip pump with a
  squeeze handle, a small lever under the head, a callout for the vacuum/pressure switch on
  the side of the head, a ribbed hose fitting at the front, and "mityvac" moulded into the
  grip. No gauge is visible. Verified from the image.
- touchpads-deckplates/cts-needle-vacuum-pump-vp-1-instructions: F207 Rev.1102 (PDF made
  January 2005), the VP-1 sheet. Same venting procedure; evacuation with a T-handle plunger
  pump held arrow up, vacuum hose identified by its port below a moulded arrow, oil hole on
  top. No switch, no needle cover.
- touchpads-deckplates/cts-standard-and-aquagrip-touchpads-user-guide-f147 (Rev. 202604) and
  cts-touchpads-user-guide-f147 (Rev. 201407): both list "touchpad test meter" and "vacuum
  pump and needle" as the two maintenance aids sold by CTS, and carry the F908 procedure as
  their chapter 7, with the same switch and figure. Troubleshooting table: firm pad = right;
  spongy pad that still works = too much air, leave it unless it floats or loses
  sensitivity, then evacuate; firm pad that reads shorted = too little air (excess vacuum),
  vent. When evacuation does not cure an open pad, the listed causes are: venting skipped
  after evacuation, pump hose on the wrong air inlet, water in the vacuum hose, a broken wire
  in the cable. Emergency in-race fix for a pad stuck shorted: dry the plug, needle in for
  ten seconds, retest after the meet. In-water check: meter fills "from left to right".
- accessories/cts-test-meter-instructions (F696 Rev.0205): names VP-1 as the pump.
- touchpads-deckplates/cts-aquagrip-touchpads (undated sheet): accessories list "VP-2:
  Vacuum pump" after the TPM-D.
- Catalogues: Making Time Count (2008), Complete Timing, Scoring, Training and Display
  Solutions 2011 and 2015: VP-2 vacuum pump listed with the TPM-D in the touchpad section.
- Architectural guidelines (two System 6 copies, same text) and the Gen7 Legacy edition: the
  pump adds or releases air to set a pad's sensitivity, and is used with the test meter; the
  meter's entry says a pump is needed to make adjustments.
- timers-consoles/cts-gen7-serial-swim-timing-gen7 (Gen7 Serial datasheet, undated): the
  TP-GEN7-6, -8 and -10 touchpad systems include a primary harness, the touchpad manual, a
  PB-6 per lane plus a spare, a touchpad meter and a vacuum pump; pads sold separately.
- Periodicals: the "vacuum pump" hits (Swimming World 1975-09 and 1976-09, Swimming
  Technique 1982-11) are pool-cleaning vacuum equipment, not this. False matches.

Web, October 2026:
- Wayback CDX for coloradotime.com: www.coloradotime.com/manuals/TriggerVacuumPump_VP-2.pdf
  captured 20 October 2007; coloradotime.com/manuals/VP-2_trigger vacuum pump_F908.pdf
  (2016) and the current hubfs URL (2022, 2023; live, 200). The 2007 capture is F908
  Rev.0806, PDF created 21 August 2006. Read in full. Same procedures, but the pump shown is a
  different white pistol-grip pump with two ports, a vacuum port on the front and a pressure
  port on top; the hose is moved to the front port if found on the top one. No switch, no
  brand visible. So the hardware changed between the 2006 and 2009 revisions. Verified.
  VacuumPump_VP-1.pdf captured 2007 and a VacuumPump.pdf in 2006 (not read; VP-1 page).
- CTS shop (shop.coloradotime.com/products/vacuum-pump-vp-2): "Vacuum pump (VP-2)", $165.00,
  US pricing; one-line description says it lets you add or release air from touchpads; no
  specifications, no maker named; 50% restocking fee on returns.
- Mityvac identification: brand verified from the 2009 photo only. Model not identified. The
  pump has a vacuum/pressure switch and no gauge; Mityvac's Selectline/Silverline gauge
  models (MV8010, MV8510) do not match; a gauge-less dual pump such as the MV8255 might, but
  this is a guess. Retailer boilerplate says Mityvac brought out a plastic squeeze-handle
  vacuum/pressure pump in 2009, which fits the F908 revision date, but that is unverified
  marketing copy. See vendors/mityvac.md.
- Google Patents not searched further for this page: the pad's air-chamber principle
  belongs on the touchpad pages, which already cover it.

Discrepancies, flagged in the text:
- Lamp direction: F908, F207 and F147's pump chapter say right to left; F147's in-water check
  says left to right, which matches the meter's 3-4-5 V scale (cts-tpm-d-test-meter.md).
- Pressure: CTS's shop text and architectural guidelines say the pump adds or releases air,
  but no CTS procedure uses the pressure side; air is added with the bare needle.
- Introduction: F696 (February 2005) still names the VP-1; F908 Rev.0806 (August 2006) is the
  first VP-2 document found. That the VP-2 replaced the VP-1 is inferred from those dates.
Not found: dimensions, weight, needle gauge or part number, hose length, warranty term.
-->

The VP-2 is a hand vacuum pump with a hollow needle, sold by Colorado Time Systems (CTS) for
adjusting the air sealed inside a CTS [touchpad](../touchpad/index.md). It draws air out of a pad that
will not register a touch; the needle on its own lets air into a pad that signals without
one.[^f908] The pad's state is watched on a [TPM-D test meter](cts-tpm-d-test-meter.md)
during the adjustment, and the needle is kept in a holder on top of that meter.[^f908][^f147] The earliest VP-2 instructions found date from August 2006.[^f908a] As of
2026, CTS sells the pump for $165.[^shop]

## Role in the timing system

This section places the pump among CTS's touchpad maintenance tools.

A CTS touchpad closes its switch by air pressure, and the amount of air in the pad sets how
hard a touch must be. The [touchpads overview](../touchpad/index.md) covers that background. CTS's
touchpad manual names two tools for keeping pads in adjustment, the test meter and the
"vacuum pump and needle".[^f147] Its architectural guidelines describe the pair the same way:
the meter shows whether a pad responds correctly, and the pump changes its air.[^arch] CTS
sells both as separate accessories,[^aquagrip][^cat15] and the touchpad systems for its
[Gen7](gen7-serial.md) serial timer include one of each.[^gen7]

The manual expects most pads to need adjusting once, after installation. Pads that pass
that first check should then need no further adjustment.[^f147]

## Design and construction

This section describes the pump in the two forms CTS has documented.

The pump is worked with one hand. Squeezing the handle toward the grip and letting it spring
back makes one stroke.[^f908] A length of clear plastic hose runs from the pump, and the needle
fits on its free end. The needle has a cover, and between uses it is stored in a receptacle on
top of the test meter rather than with the pump.[^f908]

The 2006 instructions show a white pistol-grip pump with two ports. The vacuum port is on the
front and the pressure port is on top, and the operator moves the hose to the front port if it
has been left on the top one.[^f908a] The 2009 revision shows a different grey pump with a
single hose fitting at the front and a vacuum/pressure switch on the side of its head. The
operator checks that the switch is set to vacuum before use.[^f908] The brand name Mityvac is
moulded into the grip of the pump in the 2009 photographs, so the pump is a
[Mityvac](../../../vendors/mityvac.md) unit sold under the CTS part number. CTS's text does not
name the maker or the model.[^f908]

## Adding and releasing air

This section covers the two adjustments the pump and needle are used for.

The pad is always out of the water for either adjustment. Its plug goes into the test meter,
and the rubber plug in the pad's connector block, which is orange, has to be dry, because
water drawn into the pad destroys it.[^f908] CTS also warns against holding a pad by its cable
while working on it. The needle is deburred first if its tip is rough, by drawing it across
stone or concrete while turning it.[^f908]

A shorted pad has too little air and signals the timer without being touched. To let air in,
the operator pushes the bare needle, with no pump attached, fully into the middle of the
orange plug without forcing it. The needle stays in until the meter's lamps go out, and comes
out three seconds later.[^f908]

An open pad has too much air and does not signal when touched. For this the needle goes on the
pump hose and into the plug, and the operator pumps until the meter's bar is fully lit, which
shows that the pad's switch has closed. Pumping then stops. The needle stays in until the lamps
begin to go out, and comes out five seconds after that.[^f908] It is then covered and returned
to the meter.[^f908]

The sources disagree on which way the meter's lamps travel. The pump instructions, and the
same procedure as reprinted in the touchpad manual, say right to left.[^f908][^f147] The
manual's own in-water check says the bar fills left to right, which matches the volt scale
printed on the meter.[^f147][^f696]

CTS describes the pump as adding air as well as removing it.[^shop][^arch] None of its
procedures uses the pump's pressure side. Air is added with the needle alone, and the 2009
procedure only sets the switch to vacuum.[^f908][^f147]

## Diagnosis

This section covers how CTS's manual decides which adjustment a pad needs.

The touchpad manual's troubleshooting table combines the meter reading with how the pad's
face feels under the fingers. CTS compares a correctly filled pad to a thick magazine and an
overfilled one to foam rubber.[^f147]

| Pad feels | Meter | CTS's reading | Action |
|---|---|---|---|
| Firm | Full bar when touched, dark at rest | Correct | None |
| Spongy | Full bar when touched, dark at rest | Too much air | None while it works; evacuate if it floats or grows less sensitive |
| Firm | Lit at rest | Too little air (excess vacuum) | Vent with the needle |

Source: CTS touchpad manual, troubleshooting guide.[^f147]

The same table lists why an evacuation might fail to cure an open pad. The causes are a pad
that was not vented after it was evacuated, a pump hose on the wrong air inlet, water in the
vacuum hose, or a broken wire in the pad's cable.[^f147] For a pad that shorts during a meet,
when there is no time for the meter, the manual allows a quick fix. The plug is towelled dry
and the needle left in it for ten seconds. CTS warns that this can damage the pad and that the
pad should be tested properly after the meet.[^f147]

## Compared with the VP-1

This section sets out how the VP-2 differs from the pump CTS documented before it.

The [VP-1](cts-vp-1-vacuum-pump.md) was a T-handle plunger pump. It was held with a moulded
arrow pointing up and worked with full, even strokes, and its vacuum hose was the one on the
port below the arrow. CTS's VP-1 sheet asks for a few drops of oil in a hole on top to keep
the action smooth.[^f207] The VP-2 is squeezed rather than pushed and pulled. Its needle has a
cover, and from 2009 a switch selects vacuum in place of choosing the right port.[^f908a][^f908]
The steps at the pad are the same for both pumps.[^f207][^f908]

CTS's test meter sheet of February 2005 still names the VP-1.[^f696] The first VP-2 sheet is
dated August 2006, and the 2008, 2011 and 2015 catalogues and the current shop list only the
VP-2.[^f908a][^mtc][^cat11][^cat15][^shop] No CTS document says the VP-2 replaced the VP-1; that
is inferred from these dates.

## Documentation

This section lists the revisions of the VP-2 instructions.

| Revision | Date | Pump shown |
|---|---|---|
| F908 Rev.0806 | August 2006 | White pump, separate vacuum and pressure ports[^f908a] |
| F908 Rev.200909 | September 2009 | Grey Mityvac pump with vacuum/pressure switch[^f908] |

The 2009 procedure is also reprinted as a chapter of the CTS touchpad manual, in both its
2014 and 2026 editions.[^f147old][^f147]

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado[^f908] |
| Pump maker | Mityvac (brand moulded on the 2009 pump)[^f908] |
| Operation | One-hand squeeze handle[^f908] |
| Mode selection | Vacuum/pressure switch (2009); separate ports (2006)[^f908][^f908a] |
| Connection to the pad | Needle through the orange plug on the connector block, via clear hose[^f908] |
| Used with | TPM-D test meter[^f908][^f147] |
| Price | $165 (2026)[^shop] |

## Part numbers and accessories

This section lists the parts the sources name with the pump.

- `VP-2`, the vacuum pump.[^shop][^cat15]
- [`TPM-D`](cts-tpm-d-test-meter.md), the test meter used with it, which holds the
  needle.[^cat15][^f908]
- [`VP-1`](cts-vp-1-vacuum-pump.md), the earlier plunger pump.[^f696][^f207]
- `TP-GEN7-6`, `TP-GEN7-8` and `TP-GEN7-10`, the Gen7 serial touchpad systems that include a
  meter and vacuum pump.[^gen7]

## See also

- [TPM-D test meter](cts-tpm-d-test-meter.md): the meter used during adjustment
- [VP-1 vacuum pump](cts-vp-1-vacuum-pump.md): the earlier pump
- [Standard touchpad](../touchpad/standard.md) and [AquaGrip touchpad](../touchpad/aquagrip.md): the pads it adjusts
- [Touchpads](../touchpad/index.md): the touchpads overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Mityvac](../../../vendors/mityvac.md): the pump brand
- [Equipment](../../index.md): the equipment reference

## References

[^f908]: [Colorado Time Systems, Using Your Needle/Vacuum Pump (F908 Rev.200909)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Touchpads/VP-2_Trigger_Vacuum_Pump_F908.pdf).
[^f908a]: [Colorado Time Systems, Using Your Needle/Vacuum Pump (F908 Rev.0806)](https://web.archive.org/web/20071020212845/http://www.coloradotime.com/manuals/TriggerVacuumPump_VP-2.pdf).
[^f207]: [Colorado Time Systems, Using Your Needle/Vacuum Pump (F207 Rev.1102)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Touchpads/VacuumPump_VP-1.pdf), VP-1.
[^f147]: [Colorado Time Systems, Standard and AquaGrip Touchpads User Guide (F147)](https://spanish.coloradotime.com/manuals/touchpad-man.pdf) (Rev. 202604).
[^f147old]: Colorado Time Systems, Touchpads User Guide (F147, Rev. 201407, July 2014), the earlier edition of the same manual.
[^f696]: [Colorado Time Systems, Test Meter Instructions (F696 Rev. 0205)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf).
[^arch]: Colorado Time Systems, Architectural Guidelines: A Guide for Designing Competitive Aquatic Facilities, touchpad accessories.
[^aquagrip]: [Colorado Time Systems, AquaGrip Touchpads](https://coloradotime.com/products/aquagrip-touchpads) (datasheet accessory list).
[^gen7]: Colorado Time Systems, Gen7 Serial Swim Timing datasheet, touchpad systems.
[^mtc]: Colorado Time Systems, Making Time Count (2008 catalogue), touchpad accessories.
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011), touchpad accessories.
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015), touchpad accessories.
[^shop]: [Colorado Time Systems, Vacuum pump (VP-2)](https://shop.coloradotime.com/products/vacuum-pump-vp-2) (shop page).