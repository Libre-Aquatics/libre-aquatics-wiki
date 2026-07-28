---
title: OmniSport 1000
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: OmniSport 1000
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: Swim timing console
  - label: Introduced
    value: In the field by 1996; earliest of the OmniSport line
  - label: Results interface
    value: 'RS-232 serial, 25-pin PORT 1 connector on the console top'
  - label: Meet software
    value: Hy-Tek MEET MANAGER (dedicated interface)
  - label: Succeeded by
    value: >-
      [OmniSport 6000](equipment/swimming/timers/omnisport-6000.md), then
      [OmniSport 2000](equipment/swimming/timers/omnisport-2000.md)
  - label: Status
    value: Discontinued; no longer documented by Daktronics
  - label: Manual
    value: Hy-Tek interface guide
    href: 'https://hytek.active.com/user_guides_html/swmm8/dak1000.htm'
---

The OmniSport 1000 is a discontinued swim timing console made by Daktronics, Inc.,
of Brookings, South Dakota, and the earliest of the company's OmniSport line. It
recorded race results and split times for each lane and passed them to the meet
computer over a serial connection.[^hytek1000] Daktronics publishes no manual,
specification sheet, or product page for the console, so its surviving record is
the interface guide of Hy-Tek's MEET MANAGER meet-management software, which
carried a dedicated OmniSport 1000 interface, and period discussion among timing
operators.[^hytek1000][^usenet] The [timers overview](index.md) covers what a swim
timing console does; the OmniSport 1000's successors are covered in the
[OmniSport 2000](omnisport-2000.md#history-and-predecessors) article.

## Results interface

What is documented about the console is its results side. The meet computer
connects by an RS-232 serial cable to a female 25-pin connector labeled PORT 1 on
the top of the console, with a USB-to-serial adapter serving computers without a
serial port.[^hytek1000] During a meet the Hy-Tek interface captures times in the
background: each lane's touch is stored as the athlete finishes, and the interface
buffers the data on the computer's hard drive, writing a race out when the timing
operator presses the reset button on the console.[^hytek1000]

Results carry both finish times and split times and are retrieved by event and
heat or by race number. The interface distinguishes sessions across multiple days
of a meet, checks imported data against the expected event, heat, split count,
athlete count, and lanes, prompting the operator on any discrepancy, and marks
lanes with no competitor as no-shows.[^hytek1000]

## Compared with the System 5 and later OmniSport consoles

The console was in the field by 1996: buyers on the rec.sport.swimming newsgroup
that year weighed the Daktronics 1000 against the
[Colorado Time Systems System 5](system-5.md), the competing console of the
day.[^usenet] In the same discussion an operator described the newly introduced
[OmniSport 6000](omnisport-6000.md) as making Daktronics comparable to the
Colorado system, an assessment from the period that also places the 6000's launch
at about 1995 or 1996 and the 1000 as the older, lower-tier console.[^usenet] The
line passed from the 6000 to the [OmniSport 2000](omnisport-2000.md), whose
software first shipped
on 16 August 2002 and which could be configured to emulate a 6000 for existing
meet-management installations.[^revhist]

## Documentation status

Daktronics no longer documents the OmniSport 1000: it appears in neither the
company's support pages nor its discontinued-product resources, and no manual or
document number for it is published. Its hardware specifications, including the
number of lanes and the deck inputs it accepted, are therefore not publicly
recorded; the details above are those preserved by Hy-Tek's interface
documentation.[^hytek1000]

## See also

- [Timers](index.md): the timing-console overview
- [OmniSport 6000](omnisport-6000.md): the console that succeeded it
- [OmniSport 2000](omnisport-2000.md): the current Daktronics console, with the
  line's history
- [System 5](system-5.md): the Colorado Time Systems console the 1000 was weighed
  against in its day
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^hytek1000]: [Hy-Tek, MEET MANAGER interface guide, Daktronics OmniSport 1000](https://hytek.active.com/user_guides_html/swmm8/dak1000.htm) (serial connection, background capture, result retrieval, and import checks).
[^usenet]: [rec.sport.swimming, Timing Systems: Daktronics vs Colorado (August-September 1996)](https://groups.google.com/g/rec.sport.swimming/c/RSGSrRXawPA) (period Usenet discussion; the Daktronics 1000 weighed against the CTS System 5, and the OmniSport 6000 described as newly introduced).
[^revhist]: [Daktronics, All Sport & OmniSport Revision Histories (DD3679410, Rev 06, 5 November 2024)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3679410.pdf) (OmniSport 2000 initial software release 16 August 2002; OmniSport 6000 compatibility mode).
