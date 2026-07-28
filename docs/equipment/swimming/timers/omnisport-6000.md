---
title: OmniSport 6000
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: OmniSport 6000
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: Swim timing console
  - label: Introduced
    value: About 1995 or 1996
  - label: Programs
    value: Swimming; pace clock
  - label: Results interface
    value: 9-pin null-modem serial cable from COM PORT 1
  - label: Meet software
    value: >-
      Hy-Tek MEET MANAGER (dedicated interface); Workout Manager pace-clock
      downloads
  - label: Succeeded by
    value: >-
      [OmniSport 2000](equipment/swimming/timers/omnisport-2000.md) (2002),
      which retains OMNI 6000 protocols
  - label: Status
    value: Discontinued; no longer documented by Daktronics
  - label: Manual
    value: Hy-Tek interface guide
    href: 'https://hytek.active.com/user_guides_html/swmm7/dak6000.htm'
---

The OmniSport 6000 is a discontinued swim timing console made by Daktronics, Inc.,
of Brookings, South Dakota, the top model of the company's OmniSport line in the
second half of the 1990s, between the earlier [OmniSport 1000](omnisport-1000.md)
and the [OmniSport 2000](omnisport-2000.md) of 2002. It recorded each lane's touch
and split times and passed results to the meet computer over a serial
connection.[^hytek6000] Daktronics publishes no manual or specifications for the
console; its surviving record is the interface documentation of Hy-Tek's
meet-management software, the compatibility provisions that the OmniSport 2000
still carries for it, and period discussion among timing
operators.[^hytek6000][^manual2000][^usenet] The [timers overview](index.md)
covers what a swim timing console does.

## Results interface

Hy-Tek's MEET MANAGER carried a dedicated OmniSport 6000 interface across several
of its versions. The meet computer connects with a 9-pin null-modem serial cable
from the jack labeled COM PORT 1 on the timer to a serial port on the
computer.[^hytek6000] As each athlete touches the pad, a time is stored; results
carry finish and split times and are retrieved by event and heat or by race
number. The console maintains multiple stored meets, each with its own date and
time stamp, and older data remains accessible for corrections. The console could
not store results for preliminaries and finals of the same event within one stored
meet, so Hy-Tek recommended powering the console off and on before every session to
open a fresh dataset.[^hytek6000]

## Pace clock program

The console also ran a pace clock program for training. Hy-Tek's Workout Manager
downloaded up to ten workouts, one per lane, from the team-management software
directly to the 6000's pace clock program, with up to 64 sets per lane carrying
the repeats, the interval for each set, and the rest period after it; the same
feature served the Colorado Time Systems 4, 5, and 6 consoles and, later, the
OmniSport 2000.[^hytekwm]

## Compared with the System 5 and the OmniSport 2000

The 6000 arrived in about 1995 or 1996: operators on the rec.sport.swimming
newsgroup in 1996 described it as newly introduced, and one poster's assessment
was that it made Daktronics comparable to the Colorado system of the day, then
represented by the [System 5](system-5.md); another operator reported running more
than 150 meets on Daktronics equipment with minimal problems. These are period
opinions from the discussion, not measurements.[^usenet]

The [OmniSport 2000](omnisport-2000.md) succeeded it when its software first
shipped on 16 August 2002. An early revision note shows the new console could be
configured to work as an OmniSport 6000, and the current console still offers
OMNI 6000 as a selectable bi-directional protocol on its results port, noting that
older versions of Hy-Tek MEET MANAGER may require the OmniSport 6000 data;
selecting it also transmits OmniSport 6000 item numbers on the real-time data
output.[^revhist][^manual2000]

## Documentation status

Daktronics no longer documents the OmniSport 6000: it appears in neither the
company's support pages nor its discontinued-product resources, and no manual or
document number for it is published. Its hardware specifications, including the
number of lanes and the deck inputs it accepted, are therefore not publicly
recorded; the details above are those preserved by Hy-Tek's documentation and by
the OmniSport 2000's own manual and revision history.[^hytek6000][^manual2000][^revhist]

## See also

- [Timers](index.md): the timing-console overview
- [OmniSport 2000](omnisport-2000.md): the successor console, which retains the
  6000's protocols
- [OmniSport 1000](omnisport-1000.md): the earlier console in the line
- [System 5](system-5.md): the Colorado Time Systems console the 6000 competed
  against in its day
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^hytek6000]: [Hy-Tek, MEET MANAGER interface guide, Daktronics OmniSport 6000](https://hytek.active.com/user_guides_html/swmm7/dak6000.htm) (serial connection, stored meets, result retrieval, and the prelims/finals session limitation).
[^hytekwm]: [Hy-Tek, TEAM MANAGER guide, Export Pace Clock](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/exportpaceclock.htm) (workout downloads to the CTS 4, 5, or 6 or the Daktronics 6000 or 2000; ten lanes, 64 sets per lane).
[^usenet]: [rec.sport.swimming, Timing Systems: Daktronics vs Colorado (August-September 1996)](https://groups.google.com/g/rec.sport.swimming/c/RSGSrRXawPA) (period Usenet discussion; the OmniSport 6000 described as newly introduced and weighed against the CTS System 5).
[^revhist]: [Daktronics, All Sport & OmniSport Revision Histories (DD3679410, Rev 06, 5 November 2024)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3679410.pdf) (OmniSport 2000 initial software release 16 August 2002; OmniSport 6000 compatibility mode noted in version 3.1.7).
[^manual2000]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), Setup Comm Ports menu (OMNI 6000 bi-directional results protocol and OmniSport 6000 RTD item numbers).
