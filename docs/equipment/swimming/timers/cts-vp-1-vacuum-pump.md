---
title: Colorado Time Systems VP-1 vacuum pump
description: >-
  The VP-1 is the Colorado Time Systems T-handle plunger vacuum pump and needle for adjusting
  the air inside a touchpad, documented from 2002 and later replaced by the VP-2.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: VP-1 vacuum pump
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`VP-1`'
  - label: Type
    value: Touchpad needle and vacuum pump
  - label: Used with
    value: '[TPM-D test meter](equipment/swimming/timers/cts-tpm-d-test-meter.md)'
  - label: Introduced
    value: By November 2002
  - label: Succeeded by
    value: '[VP-2](equipment/swimming/timers/cts-vp-2-vacuum-pump.md)'
  - label: Status
    value: Not in the 2008 catalogue
  - label: Manual
    value: '[Using Your Needle/Vacuum Pump (F207)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Touchpads/VacuumPump_VP-1.pdf)'
---

<!--
Research notes, CTS VP-1. Stub created 2026-10-21 while building out cts-tpm-d-test-meter.md;
built out 2026-10-23.

Held sources, read in full (sources/vendors/colorado-time-systems/):
- touchpads-deckplates/cts-needle-vacuum-pump-vp-1-instructions: F207 Rev.1102, two pages.
  Rev.1102 is read as November 2002 by the same month-year code that makes F908 Rev.0806
  August 2006; the PDF itself was made 26 January 2005. Page 1 covers venting (bare needle,
  lamps out, three seconds) with a photo of a pad on the meter, a photo of connector blocks
  and a drawing labelling touchpad plug, orange plug, connector block and needle. Page 2
  covers evacuation with the pump. Rendered with PyMuPDF and looked at: the pump photo shows a
  long cylindrical barrel that looks metal, a thin rod running to a black T-handle, and two
  clear hoses leaving the far end, one ending in a white fitting and one in a fine needle.
  The hand drawing shows the barrel held in one hand with a dark grip sleeve, the T-handle
  pulled with the other, an arrow on the end cap, one short port above and one hose below.
  The photo is embedded at only 334 px wide and no maker's name can be read on it. The sheet
  never prints a part number. The page-1 text says nothing about oil; the oil note is on
  page 2 beside the drawing. Verified from the images.
- touchpads-deckplates/cts-touchpad-manual-user-guide-f147-rev-0205: the touchpad manual,
  F147 Rev.0205, copyright 2005, PDF made 1 February 2005. Not held until this pass:
  downloaded from the Wayback capture of 17 March 2006 of
  www.coloradotime.com/manuals/touchpad-man.pdf and filed beside the other two F147 editions.
  Chapter 7 repeats the F207 procedure step for step with the same pump photo and the same
  drawing (Figures 10 and 11). Its introduction names the test meter and the "vacuum pump
  and needle" as the two maintenance aids sold by CTS; it does not print VP-1. Troubleshooting
  table and emergency in-race venting (needle in for ten seconds) match the later editions.
  Its own in-water check says the meter fills left to right, while chapter 7 says right to
  left, so the lamp discrepancy is already inside this one 2005 manual.
- accessories/cts-test-meter-instructions: F696 Rev.0205 (February 2005). The only held
  document that prints the part number: it says many pad faults are fixed with a needle and
  a vacuum pump and gives the CTS part number VP-1. A Wayback capture of 17 March 2006 of
  coloradotime.com/manuals/TestMeterInstr.pdf is the same revision with the same wording
  (byte-different file).
- touchpads-deckplates F147 Rev.201407 and Rev.202604, the F908 VP-2 sheets, the
  architectural guidelines, the Gen7 datasheet and the 2008, 2011 and 2015 catalogues: all
  read for cts-vp-2-vacuum-pump.md; none names the VP-1. The 2014 and 2026 manuals carry the
  VP-2 procedure as chapter 7 in place of this one.
- Periodicals: the VP1 hits in Swimming World 1961-03, 1977-05, 2002-09 and 2003-09 are OCR
  noise in results tables and a Versapack clothing ad. False matches.

Web, October 2026:
- Wayback CDX: www.coloradotime.com/manuals/VacuumPump.pdf captured 17 March 2006 and
  VacuumPump_VP-1.pdf captured 20 October 2007, 23 April 2016 and 11 April 2022. Every
  capture carries the same SHA-1 digest as the held file, and the live hubfs copy downloaded
  in October 2026 hashes the same, so CTS has hosted this one F207 file unchanged from at
  least 2006 to 2026. Verified. In the October 2007 crawl the VP-1 and VP-2 sheets were both
  on the site.
- A web search for the part number with the CTS name found nothing outside CTS's own
  documents. Lab-supply listings show aluminium-bodied hand vacuum pumps of a broadly similar
  layout (Nalgene, Buerkle), but nothing ties any of them to this pump. Maker not identified.
- CTS shop (October 2026): lists only the VP-2.

Inferred, not stated by any source:
- That the VP-2 replaced the VP-1. The VP-1 is named up to February 2005, the first VP-2
  sheet is August 2006, the 2008 and later catalogues list only the VP-2, and the touchpad
  manual's pump chapter changes from this pump (2005) to the VP-2 (2014). No CTS text says so.
- The Status row: "no longer listed" rests on the catalogues and shop, not on a
  discontinuation notice. The sheet itself is still hosted.
Not found: introduction date before 2002, pump maker and model, barrel material (looks metal
in the photo, not stated), dimensions, needle gauge or part number, hose length, price.
-->

The VP-1 is a hand vacuum pump with a hollow needle, sold by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) for adjusting the air
sealed inside a CTS [touchpad](../touchpad/index.md). It is a plunger pump worked by a
T-handle. The pump draws air out of a pad that does not register a touch, and the needle on its
own lets air into a pad that signals without being touched.[^f207] Its instruction sheet is
F207 Rev.1102, and CTS's test meter sheet of February 2005 gives the part number
VP-1.[^f207][^f696] By August 2006 CTS had documented a different pump, the
[VP-2](cts-vp-2-vacuum-pump.md), and CTS's 2008 catalogue lists only
that pump.[^f908a][^mtc]

## Role in the timing system

This section places the pump among CTS's touchpad maintenance tools.

The amount of air sealed in a CTS touchpad decides how hard a swimmer has to press it; the
[touchpads overview](../touchpad/index.md) covers that background. The 2005 edition of CTS's
touchpad manual lists two maintenance aids that the company sells: a touchpad test meter, and a
vacuum pump with a needle.[^f147early] The pump it shows is the VP-1. During any
adjustment the pad is plugged into the [TPM-D test meter](cts-tpm-d-test-meter.md), and the
needle is kept in a receptacle on top of that meter between uses.[^f207]

The same manual expects pads to need adjusting at installation, and says that pads adjusted
then should not need it again.[^f147early]

## Design and construction

This section describes the pump as CTS's 2002 sheet and 2005 manual show it.

The VP-1 is a long cylindrical pump. A rod runs out of one end of the barrel to a black
T-handle, and two clear plastic hoses leave the other end.[^f207] The operator holds the
barrel in one hand and works the handle in and out with the other, in full, even strokes.[^f207]
An arrow is moulded into the end of the pump. The hose on the port below that arrow is the
vacuum side, and the pump is held with the arrow pointing up while it is used.[^f207] The
photograph in CTS's sheet shows the needle on the end of one hose.[^f207]

An oil hole sits on top of the pump, and CTS recommends a few drops there so that the
plunger moves smoothly.[^f207] Neither the sheet nor the manual names the pump's maker, and
no brand can be read in their photographs.[^f207][^f147early]

## Adding and releasing air

This section covers the two adjustments the needle and pump are used for.

Both adjustments are made with the pad out of the water and its plug in the test meter. The
orange rubber plug in the pad's connector block, which the needle goes through, must be dry,
and the cable end of the pad must not be splashed while the needle is in. Water that gets into
a pad destroys it.[^f207] CTS also warns never to lift a pad by its cable. A rough needle tip
is cleaned up first by rolling it while drawing it over stone or concrete.[^f207]

A shorted pad, one that keeps signalling the timer, has too little air. To vent it, the
operator inserts the bare needle, with no pump attached, into the middle of the orange plug,
seating it fully without force. Once the meter's red lamps go out, the needle stays in for
three more seconds and is then withdrawn.[^f207]

An open pad, one that does not signal when touched with a fingertip, has too much air. To
evacuate it, the operator fits the needle to the hose on the pump's vacuum side, pushes it
into the plug, and pumps until every lamp on the meter is lit, which shows that the pad's
switch has closed. The operator then stops, waits until the lamps start to go out, counts five
seconds and pulls the needle. It goes back in its receptacle on the meter afterwards.[^f207]

The sources disagree on the direction in which the lamps travel. The VP-1 sheet and the pump
chapter of the 2005 manual say right to left.[^f207][^f147early] The in-water check in the
same manual says the meter fills left to right, which matches the meter's printed volt
scale.[^f147early][^f696]

## Diagnosis

This section covers how the 2005 manual decides which adjustment a pad needs.

The manual's troubleshooting table reads the meter together with how the pad feels. A firm pad
that lights the whole bar when touched and stays dark otherwise is correct. A spongy pad that
reads the same way has too much air, and is evacuated only if it floats or loses
sensitivity. A firm pad that lights the bar without being touched has too little air and is
vented.[^f147early] When an evacuation fails to cure an open pad, the table points to venting
skipped after the evacuation, the pump hose fitted to the wrong inlet, water in the vacuum
hose, or a broken wire in the pad's cable.[^f147early] For a pad that shorts in the middle of
a meet, the manual allows the plug to be dried with a towel and the needle left in it for ten
seconds. CTS warns that this can damage the pad and that the pad should be checked properly
after the meet.[^f147early]

## Compared with the VP-2

This section sets out how the VP-1 differs from the pump CTS documented after it.

The [VP-2](cts-vp-2-vacuum-pump.md) is a pistol-grip pump squeezed with one hand, where the
VP-1 is pushed and pulled with two.[^f207][^f908a] The VP-1 selects vacuum by which hose is
used. The 2006 VP-2 does the same with a front and a top port, and the 2009 VP-2 has a
vacuum/pressure switch instead.[^f207][^f908a][^f908] The VP-2 sheets also have the operator
cap the needle between steps, which the VP-1 sheet does not mention. The steps at the pad
are the same for both pumps.[^f207][^f908]

CTS's test meter sheet and touchpad manual of February 2005 still describe the
VP-1.[^f696][^f147early] The first VP-2 sheet is dated August 2006, and the 2008 catalogue
lists only the VP-2.[^f908a][^mtc] The 2014 edition of the touchpad manual carries the VP-2 procedure in the
chapter that held the VP-1 procedure in 2005.[^f147old][^f147early] No CTS document says the
VP-2 replaced the VP-1; that is inferred from these dates.

## Documentation

This section lists where CTS has published the VP-1 instructions.

| Document | Date | Notes |
|---|---|---|
| F207 Rev.1102, Using Your Needle/Vacuum Pump | November 2002 | The VP-1 sheet[^f207] |
| F147 Rev.0205, Touchpad Manual | February 2005 | Same procedure and figures as chapter 7[^f147early] |
| F696 Rev.0205, Test Meter Instructions | February 2005 | Names the part number VP-1[^f696] |

The same F207 file was on CTS's website by March 2006 and is still hosted as of 2026.[^f207]

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado[^f207] |
| Operation | Two-hand plunger pump with T-handle[^f207] |
| Mode selection | Choice of hose; vacuum hose on the port below the moulded arrow[^f207] |
| Connection to the pad | Needle through the orange plug on the connector block, via clear hose[^f207] |
| Maintenance | Oil, a few drops, through the hole on top[^f207] |
| Used with | TPM-D test meter[^f207][^f696] |

## Part numbers and accessories

This section lists the parts the sources name with the pump.

- `VP-1`, the vacuum pump.[^f696]
- [`TPM-D`](cts-tpm-d-test-meter.md), the test meter used with it, which holds the
  needle.[^f207]
- [`VP-2`](cts-vp-2-vacuum-pump.md), the later squeeze-handle pump.[^f908]

## See also

- [VP-2 vacuum pump](cts-vp-2-vacuum-pump.md): the later pump
- [TPM-D test meter](cts-tpm-d-test-meter.md): the meter used during adjustment
- [Standard touchpad](../touchpad/standard.md): the pad it adjusts
- [Touchpads](../touchpad/index.md): the touchpads overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f207]: [Colorado Time Systems, Using Your Needle/Vacuum Pump (F207 Rev.1102)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Touchpads/VacuumPump_VP-1.pdf), VP-1.
[^f147early]: [Colorado Time Systems, Touchpad Manual (F147 Rev.0205)](https://web.archive.org/web/20060317232112/http://www.coloradotime.com/manuals/touchpad-man.pdf) (2005).
[^f147old]: Colorado Time Systems, Touchpads User Guide (F147, Rev. 201407, July 2014).
[^f696]: [Colorado Time Systems, Test Meter Instructions (F696 Rev. 0205)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf).
[^f908]: [Colorado Time Systems, Using Your Needle/Vacuum Pump (F908 Rev.200909)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Touchpads/VP-2_Trigger_Vacuum_Pump_F908.pdf).
[^f908a]: [Colorado Time Systems, Using Your Needle/Vacuum Pump (F908 Rev.0806)](https://web.archive.org/web/20071020212845/http://www.coloradotime.com/manuals/TriggerVacuumPump_VP-2.pdf).
[^mtc]: Colorado Time Systems, Making Time Count (2008 catalogue), touchpad accessories.
