---
title: Daktronics RTOP
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics RTOP
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: Relay take-off platform
  - label: Models
    value: 'RTOP-2020, 2220, 2420, 2023, 2723, 3223 (six sizes)'
  - label: Sensing
    value: 'Capacitive; senses human contact, not force'
  - label: Accuracy
    value: 1/100 second
  - label: Manufacturer tolerance
    value: None; 0.00 s or higher is a legal exchange
  - label: Sizes
    value: '19.7 × 20 in – 32 × 23 in (500 × 508 mm – 813 × 584 mm)'
  - label: Thickness
    value: '0.5 in (13 mm)'
  - label: Weight
    value: '8–12.5 lb (3.6–5.7 kg)'
  - label: Power
    value: Two AA batteries in an on-platform electronics box
  - label: Mounting
    value: Cam-buckle straps around the starting block
  - label: Connection
    value: Dual banana plug into the lane's button 3 jack
  - label: Controller
    value: OmniSport 2000 (version 8.3.27 or newer) or a Daktronics pace clock
  - label: Manual
    value: 'Daktronics ED-13312, section 9'
    href: >-
      https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf
---

The Daktronics RTOP (relay take-off platform) is a family of starting-block
platforms made by Daktronics, Inc., of Brookings, South Dakota, that sense the
instant a relay swimmer's feet leave the block. The platform reports the
departure to the
[OmniSport 2000](../timers/omnisport-2000.md) timing console, which compares it
with the incoming swimmer's [touchpad](../touchpad/t-7000.md) finish: a positive
difference is a legal exchange and a negative difference an early one.[^manual]
Unlike the mechanical platforms of other makers, the RTOP detects the swimmer
capacitively, sensing human contact rather than pressure or force, an approach
Daktronics patented in the 2000s.[^patent][^support] Shared background on how relay
exchanges are judged and ruled on is in the
[relay take-off platforms overview](index.md).

Daktronics lists the RTOP both on an active support page and among its discontinued
product resources, so a facility may encounter it described either
way.[^support][^discontinued]

## Design and construction

The platform is built around a capacitive sensor mat: electrodes in the mat hold an
electric field that the swimmer's body influences, and the electronics detect the
change in capacitance when the body leaves. Daktronics' patent (US 7,403,135, by
Kurt R. Kaski, Allen J. VanBemmel, and Jason C. Warne; priority December 2003,
granted July 2008) describes automatic recalibration that separates the swimmer's
presence from environmental drift, and its background section states that earlier
force-measurement approaches were limited to an accuracy of about plus or minus
0.03 seconds.[^patent] Because the reading is capacitive rather than mechanical,
Daktronics states the platform is not affected by loose or vibrating blocks, the
weight of the swimmer, or hop starts; on a hop start the platform reports every
departure and the console judges the exchange from the last one.[^manual] The same
principle is why Daktronics advises against a towel on the block: material between
the swimmer's skin and the platform can make it trigger early.[^manual] The
[Colorado Time Systems RJP](cts.md), the other United States platform, instead
registers the mechanical unloading of its top and leading edge.[^ctsrjp]

The platform itself is lightweight plastic, with a bend that faces the pool and a
gray electronics box on the underside carrying a red status LED and two AA
batteries. The LED flashes when the platform is working; a solid or dark LED means
the batteries need replacing. Daktronics schedules that before each meet, and again at
about two days of competition or 20 hours of running time.[^manual] The console
also reports on the platform: the letter R appears on the lane's LCD when the
platform's batteries are weak, and disappears entirely when they are
dead.[^manual]

## Exchange judging and the zero point

Every manufacturer defines its own zero point for the exchange differential.
Daktronics states that there is no manufacturer's tolerance to set on its RTOPs:
its FAQ gives an exchange of 0.0 seconds or higher as safe and minus 0.01 or lower
as a disqualification.[^manual] This differs from the fixed 0.01
second that Colorado Time Systems adds in favor of a safe take-off and the minus
0.03 second tolerance reported for Omega equipment; the
[relay take-off platforms overview](index.md) covers how governing bodies defer to
the manufacturer on this point. Daktronics states the RTOP meets and exceeds the
requirements of the NCAA, USA Swimming, FINA, and NFHS, while noting that such
bodies write rules rather than approve equipment; these are the company's
claims.[^manual] Its brochure likewise describes the RTOP as the most accurate in
the industry, which is a marketing claim.[^brochure]

## Connection and use with the OmniSport 2000

The platform's dual banana cord plugs into a button jack on the lane's deck cabling,
usually button 3, which sits on the lane module in an on-deck system and on the deck plate
in an in-deck one. The connectors stack, so where a lane uses all three backup buttons the RTOP
piggy-backs onto a button plug. Daktronics recommends dedicating button 3 to the
platform so the console setting can stay fixed.[^manual] On the console, the relay
take-off menu sets the platform type (button or Daktronics), the button input used,
and an arm time, the window between the touchpad time and the platform time within
which a departure is treated as the exchange; Daktronics suggests 0.8
seconds.[^manual] The console needs firmware version 8.3.27 or newer to operate
the RTOP, and the Pro Swimming software (version 1.1.18 or newer) exposes the same
settings from its configuration dialog.[^manual]

During relay events the console times the exchanges and prints each one with the
race data: the race log marks platform departures with an R by length and lane,
start-reaction times with an S, and the results printout lists the exchange
differential for each leg.[^manual] In individual events the console ignores the
platforms for everything except the start reaction time, and events with in-water
starts produce no reaction times.[^manual] The pre-session test is built into the
platform: with the RTOP connected its red LED flashes, and placing a hand flat on
the surface for two seconds and pulling it away turns the LED solid for about a
second before it flashes again, while the times appear on the console
printouts.[^manual][^kbtest]

Daktronics platforms work only with Daktronics equipment, but the console reads
more than one vendor's platforms. Daktronics states the OmniSport 2000 can read
Swiss Timing Omega platforms and starting blocks through an Omega platform setting,
while a Daktronics RTOP does not work with a Swiss Timing Quantum or Colorado Time
Systems console, and a CTS platform does not work with the
OmniSport.[^kbcompat][^manual]

## Mounting

The platform straps to the starting block with a cam-buckle strap on each side,
pulled snug with no twists, the electronics box flat against the bottom of the
block and the excess strap tied up out of the splash. Before each session the
operator inspects the platform for cracks, verifies the sticker covering the LED
and the cable strain reliefs are intact, checks inside the electronics box for
water and a sound gasket, and cleans any corrosion off the banana plug with the
console's maintenance kit.[^manual]

## Training use

With a Daktronics pace clock the platform doubles as a training tool. Connected to
the pace clock's platform jack (program 11) together with a touchpad, the clock
displays each relay exchange time; connected with the [HS-200 Horn Start](../starter/hs-200.md),
it displays the reaction time from the start tone to the swimmer leaving the
platform.[^manual][^brochure]

## Care and maintenance

The platforms are stored dry, with cables unpinched, surfaces free of debris, and
not resting on the platform lip; Daktronics recommends its optional storage cart,
which the brochure lists as carrying up to 12 platforms.[^manual][^brochure] If a
platform stops working, the manual's checklist runs: replace the batteries, inspect
the cable, inspect and clean the banana jack, try another lane module or deck
plate, and then contact Daktronics.[^manual]

## Models

Daktronics catalogs six sizes to fit different starting blocks; all are 0.5 in
(13 mm) thick.[^brochure]

| Model | Dimensions | Weight |
|---|---|---|
| RTOP-2020 | 19.7 × 20 in (500 × 508 mm) | 8 lb (3.6 kg) |
| RTOP-2220 | 22 × 20 in (550 × 508 mm) | 8.5 lb (3.8 kg) |
| RTOP-2420 | 24 × 20 in (600 × 508 mm) | 9.1 lb (4.1 kg) |
| RTOP-2023 | 20 × 23 in (508 × 584 mm) | 9 lb (4.1 kg) |
| RTOP-2723 | 27 × 23 in (686 × 584 mm) | 11 lb (5 kg) |
| RTOP-3223 | 32 × 23 in (813 × 584 mm) | 12.5 lb (5.7 kg) |

## Specifications

| | |
|---|---|
| Sensing | Capacitive sensor mat with automatic recalibration |
| Timing accuracy | 1/100 second |
| Exchange zero point | No manufacturer tolerance; 0.00 s or higher legal, minus 0.01 or lower early |
| Construction | Plastic platform; gray underside electronics box with red status LED |
| Power | Two AA batteries; about 20 hours or two competition days |
| Thickness | 0.5 in (13 mm) |
| Mounting | Cam-buckle straps, one per side |
| Connection | Dual banana plug, stackable, into a lane button jack (button 3 typical) |
| Console requirement | OmniSport 2000 firmware 8.3.27+; Pro Swimming 1.1.18+ |
| Training controller | Daktronics pace clock, platform jack, program 11 |
| Cross-compatibility | Not usable with CTS or Swiss Timing Quantum consoles |

## See also

- [Relay take-off platforms](index.md): the shared overview, including how
  exchanges are judged and the governing-body rules
- [Colorado Time Systems RJP](cts.md): the mechanical platform from the other
  United States manufacturer
- [T-7000 Series Touchpad](../touchpad/t-7000.md): the finish input the exchange is
  judged against
- [Daktronics Pushbutton](../semi-automatic/pushbutton/daktronics.md): the backup button that
  shares the lane's button jacks
- [OmniSport 2000](../timers/omnisport-2000.md): the console that computes the
  exchange differential
- [HS-200 Horn Start](../starter/hs-200.md): the start system used for
  reaction-time training
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), section 9, Relay Take-Off Platform.
[^support]: [Daktronics, Relay Take-Off Platform support](https://www.daktronics.com/en-us/support/hardware-components/relay-take-off-platform) (senses human contact rather than force; not dependent on the athlete's weight).
[^patent]: [Google Patents, US 7,403,135: Capacitive relay takeoff swimming platform sensor system](https://patents.google.com/patent/US7403135B1/en) (Daktronics; Kaski, VanBemmel, and Warne; priority 22 December 2003, granted 22 July 2008; sensor-mat capacitance, automatic recalibration, and the prior force-based accuracy limit).
[^kbcompat]: [Daktronics, Which RTOPs, starting blocks, and third-party timing systems are compatible (KB DD2090313)](https://www.daktronics.com/en-us/support/kb/DD2090313) (OmniSport 2000 reads Omega platforms; Daktronics RTOPs incompatible with Quantum and CTS consoles).
[^kbtest]: [Daktronics, How do I test Relay Take Off Platforms (KB DD2199844)](https://www.daktronics.com/en-us/support/kb/DD2199844) (hand-flat test and LED behavior).
[^discontinued]: [Daktronics, Aquatics RTOP discontinued-product resources](https://www.daktronics.com/en-us/products/sports/aquatics/rtop).
[^brochure]: Daktronics, Aquatics Solutions brochure (DD1565872, Rev 07, June 2018), pp. 7 and 13 (model table, storage cart, training use, and the accuracy claim). Print document, not hosted online.
[^ctsrjp]: [Colorado Time Systems, Relay Judging Platforms for Competition](https://coloradotime.com/products/relay-judging-platforms-for-competition) (the mechanical top-and-leading-edge sensing of the competing platform).
