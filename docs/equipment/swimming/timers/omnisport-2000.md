---
title: OmniSport 2000
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: OmniSport 2000 Timing Console
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1240-0096` (2000e console kit)'
  - label: Type
    value: Multi-sport aquatics timing console
  - label: Models
    value: 'OmniSport 2000; OmniSport 2000e (Ethernet, shipped from June 2013)'
  - label: Construction
    value: 'Aluminum, water-resistant case'
  - label: Controls
    value: 'Three 2×16-character LCDs, swappable sport inserts, keypad'
  - label: Printer
    value: 'Built-in thermal, results in under 10 seconds'
  - label: Lanes
    value: 'Up to 10; two touchpads, three buttons, and a relay platform per lane'
  - label: Sport programs
    value: 'Swimming, diving, water polo, track, pace clock'
  - label: Dimensions
    value: '4.3 in H, 20.5 in W, 9 in D (109 × 521 × 229 mm)'
  - label: Weight
    value: 10 lb (4.5 kg)
  - label: Power
    value: Mains wallpack; internal backup battery (about 10 min)
  - label: Manual
    value: Daktronics ED-13312
    href: >-
      https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf
---

The OmniSport 2000 is a multi-sport timing console made by Daktronics, Inc., of
Brookings, South Dakota. It is the head end of a Daktronics swim-timing system: the
unit that collects the finish signals from each lane's
[T-7000 series touchpad](../touchpad/t-7000.md) and
[backup pushbuttons](../semi-automatic/pushbutton/daktronics.md), receives the start pulse from the
[HS-200 Horn Start](../starter/hs-200.md), runs the race clock, drives the
scoreboard, and prints results on a built-in thermal printer.[^manual][^support] The
console ships programmed for swimming, diving, water polo, track, and pace clock
operation, selected by sliding a sport-specific key insert into the console face,
and it scores judged diving, synchronized swimming, and rodeo events through
wired and wireless judge consoles.[^manual][^support][^rodeo]

The console's first firmware release was on 16 August 2002, and later versions
encode their release dates (version 16.02.23 was released 23 February
2016).[^revhist][^manual]
Consoles shipped from June 2013 carry an Ethernet jack and are marketed as the
OmniSport 2000e; earlier consoles lack the jack and can be upgraded by
Daktronics.[^manual] Daktronics continues to list the console on an active support
page, but its ProSwimming, ProDiving, and ProSyncro software interfaces are
discontinued and no longer available for purchase; a dealer lists the 2000e console
kit at US$2,695.[^support][^prodisc][^dealer]

## Role in the timing system

The [timers overview](index.md) covers what a swim timing console is and the
governing-body requirements that apply to every console. The OmniSport 2000's part
is the Daktronics implementation. Swimming mode covers a ten-lane pool, timing and judging
it automatically from a touchpad at either end for near-end and far-end splits, from one
to three backup buttons in each lane, and from relay take-off platforms, each of these
read on its own.[^manual] Near-end deck cabling connects to the
J10 jack on the rear of the console and far-end cabling to J11; the start system
connects to the J12 start input; scoreboards, real-time data feeds, and the results
computer each have their own ports.[^manual]

## History and predecessors

The OmniSport 2000 is the third of Daktronics' OmniSport swim timing consoles and
the only one the company still documents; its predecessors survive mainly in the
interface guides of Hy-Tek's MEET MANAGER software and in period discussion among
timing operators, and Daktronics publishes no manuals or specifications for
either.[^usenet] The earliest of the line, the
[OmniSport 1000](omnisport-1000.md), was a results-and-splits console with a
serial meet-computer interface, in the field by 1996; the
[OmniSport 6000](omnisport-6000.md) followed as the top model of the line in about
1995 or 1996. Each is covered in its own article.

The OmniSport 2000's software first shipped on 16 August 2002. An early revision
note shows the new console could be configured to work as an OmniSport 6000, and
the console still offers OMNI 6000 as a selectable results-port protocol for older
meet-management software.[^revhist][^manual]

## Design and hardware

The console face carries three two-line by 16-character liquid crystal displays, a
recess for the sport insert, a numeric and menu keypad, and the built-in thermal
printer, which prints event results and console settings in under 10
seconds.[^manual] The sport inserts are keyboard overlays that reconfigure the
console for each sport: swimming (`LL-2549`), diving (`LL-2566`), water polo
(`LL-2569`), track (`LL-2573`), and pace clock (`LL-2581`).[^manual] The right LCD
warns the operator when the console is running on battery power, when the network
cable is disconnected, and when printer paper is out.[^manual]

The rear panel groups the system connections: two 1/4 in scoreboard output jacks
(J2, J3), an Ethernet jack on 2000e consoles, a serial expansion port for the Pro
software (J4), a real-time data port for matrix displays (J5), a results port for
meet-management software (J6), switch inputs for track and rodeo pushbutton timing
(J7), game-clock and shot-clock switch ports for water polo (J8, J9), the near-end
and far-end lane harness connectors (J10, J11), the start input (J12), power (J13),
and two judge-console jacks (J14, J15).[^manual] Diving supports up to nine judge
consoles and synchronized swimming up to eighteen, split across the two
jacks.[^manual] An internal backup battery keeps the timer running for
approximately 10 minutes in a power failure.[^manual]

Consoles fitted with a radio transmitter drive Daktronics scoreboards without
signal cable, using eight channels and up to eight broadcast groups so that several
consoles and scoreboard groups can share a facility.[^manual] Firmware updates load
over the serial expansion port with Daktronics' DakLoader2 utility.[^manual]

## Connectivity

Two cabling schemes bring the lane inputs to the console. An on-deck system runs a
harness along the pool deck with a lane module at each lane; the modules are
universal, daisy-chain together, and each carries one touchpad jack and three
button jacks, with the relay take-off platform plugged into (or piggy-backed onto)
button 3. Lane extension modules of 25 to 200 ft (7.6 to 61 m) span the distance
from the console to the first lane. An in-deck system instead embeds conduits and
junction boxes in the pool deck and walls, terminating in deck plates: an
individual lane plate per lane (touchpad, three buttons, lane speaker, and remote
strobe jacks), a start location plate for the horn start and auxiliary speaker, a
bulkhead plate that combines start and lane data connections, and wall plates where
the console itself is set up.[^manual] Polarity is enforced by shape rather than by
labeling: every dual banana plug carries a ground tab that has to seat against its
black socket, and a plug inserted the other way round stops the lane working.[^manual]

## Software and operation

A race of up to 66 lengths is timed automatically: the start pulse starts the race
clock, touch times log to the printer as they occur, and the console compares each
lane's finish time with its backup-button times, flagging discrepancies on the
printout.[^manual][^ed13584] The console stores approximately 50 races in a
revolving memory, clearing the oldest automatically; when the Pro Swimming software
is connected, stored races transfer to the computer.[^manual]

The operator's per-lane controls follow the lane status shown on the LCDs: lanes
can be turned off, re-armed for a split or a finish when a touch was missed or
spurious, and corrected with plus-touch and minus-touch keys; an arming delay of 0
to 99 seconds after each start and touch makes the timer ignore the pad while a
finished relay swimmer climbs out.[^manual][^ed13584] Edited and backup times are
labeled on the LCDs and printouts, and a disqualification key marks a lane so
printouts and the scoreboard show the ruling.[^manual] The always-ready start
feature runs an internal time-of-day clock whenever the console is on and records
every start signal, so a race can be recovered even if the timer was not reset when
the gun went off.[^manual]

Event orders hold up to 500 pre-programmed events numbered 1 to 999, each with a
round and a distance from which the console computes the number of lengths for the
configured pool; orders can be downloaded from Hy-Tek's MEET MANAGER, built in the
Pro software, or entered on the console, and the console requests the current start
list from the results computer as each event is selected.[^manual] The built-in
printer produces the race log, heat results with backups, lane-order and
place-order results, relay exchange printouts with start-reaction and exchange
times, and subtractive or cumulative splits.[^manual]

The console reaches its computer software over the serial expansion port or, on the
2000e, Ethernet. The OmniSport 2000 Pro Swimming software mirrors the current race,
stores and edits results (including substituting a backup time for a pad time), and
passes touchpad, button, relay-exchange, and start-reaction times to meet
management; Hy-Tek's MEET MANAGER connects through the results port or, from
version 5.0, over the network.[^manual][^prosoftware] Real-time data for matrix
displays leaves the RTD port or the network as UDP broadcast packets from a static
IP address, and up to four consoles can be named onto one network.[^manual]

The diving and synchronized-swimming programs have their own Pro interfaces. The
Pro Diving software receives judge awards through the console, handles multiple
meets with events of unlimited divers in up to 99 rounds, and scores synchronized
diving. It exchanges files with outside results packages, DiveMeets.com and E-dive among
them; Daktronics notes it does not verify dive sheets.[^prodiving]
The Pro Synchro software scores technical and free routines from two to eighteen
judge consoles (wireless RC-100 or wired JC-100); the console itself only relays
the judges' inputs in its synchro mode.[^prosynchro] Daktronics states that the
ProSwimming, ProDiving, and ProSyncro interfaces are discontinued and no longer
available for purchase, directing customers to its professional services for
upgrade options.[^prodisc]

## Other sport programs

In diving mode the console runs events of up to 25 divers in four dive orders of up
to 13 rounds, scored by 2, 3, 5, 7, or 9 judges entering awards on judge consoles
or the operator's keypad.[^manual][^ed13584] The judge consoles serve synchronized
swimming as well, with technical and free routine panels; the console alone cannot
score synchronized swimming, however, and must be set to its synchro mode and run
from the Pro Synchro computer software.[^manual][^prosynchro] Water polo mode
provides the game clock, shot clock, scores, timeouts, and player penalties, with
external game-clock and shot-clock switches on dedicated ports.[^manual][^ed13584]
Pace clock mode programs workout sequences per lane from swim, rest, pace, and
circuit steps.[^ed13584] Track mode times lane and non-lane races from pushbutton
or gun-transducer starts with up to three finish buttons per lane, and a rodeo
program scores timed and judged rodeo events with photocell or manual timing; the
rodeo program has its own operations manual.[^manual][^ed13584][^rodeo]

## OmniSport 2000e

The 2000e is the Ethernet-equipped build of the console rather than a separate
platform: the operations manual covers both, and records that the jack is absent from
anything built before June 2013, though Daktronics can fit one retrospectively.[^manual]
The network connection carries the real-time data feed and the Pro software and
MEET MANAGER links that otherwise require separate serial cables. In its aquatics
brochure Daktronics describes itself as the first in the industry to use Ethernet
connectivity in aquatics timing; that is the company's claim.[^brochure] A dealer
lists the 2000e console kit as part `0A-1240-0096`.[^dealer]

## Specifications

| | |
|---|---|
| Dimensions | 4.3 in H, 20.5 in W, 9 in D (109 × 521 × 229 mm) |
| Weight | 10 lb (4.5 kg) |
| Construction | Aluminum, water-resistant case |
| Displays | Three 2-line × 16-character LCDs |
| Controls | Sport-specific key inserts and numeric/menu keypad |
| Printer | Built-in thermal; paper 2.28 in (58 mm) wide, up to 165 ft (`SF-1034`) |
| Power | Mains wallpack transformer (J13); internal backup battery, about 10 min |
| Lanes | Up to 10, two touchpads per lane (near and far end) |
| Per-lane inputs | Touchpad, buttons B1-B3, relay take-off platform |
| Race length | Up to 66 lengths; about 50 races in revolving memory |
| Timing precision | Settable, hundredths default |
| Scoreboard outputs | Two 1/4 in jacks; radio option, 8 channels and up to 8 broadcast groups |
| Computer interfaces | Serial expansion, results, and RTD ports; Ethernet (2000e, from June 2013) |
| Judge consoles | Up to 9 (diving) or 18 (synchronized swimming) |
| Sport programs | Swimming, diving, water polo, track, pace clock; rodeo |

## Part numbers and accessories

- `0A-1240-0096`, OmniSport 2000e Ethernet timing console kit (dealer
  listing).[^dealer]
- `0A-1240-0003`, console maintenance kit: cleaning brush, `LU-1002` silicone
  lubricant, and the `W-1267` serial cable.[^manual]
- `A-1801`, USB-to-serial adapter for computers without a serial port.[^manual]
- `0A-1240-0032`, 50 ft (15.2 m) 9-pin-to-1/4 in cable for matrix displays.[^manual]
- `SF-1034`, thermal printer paper.[^manual]
- `LL-2549`, `LL-2566`, `LL-2569`, `LL-2573`, `LL-2581`, sport inserts (swimming,
  diving, water polo, track, pace clock).[^manual]

Daktronics services the console through its parts exchange and repair-and-return
programs.[^manual]

## See also

- [Timers](index.md): the timing-console overview
- [Gen7 Serial Timer](gen7-serial.md): the current Colorado Time Systems console,
  the OmniSport 2000's counterpart
- [T-7000 Series Touchpad](../touchpad/t-7000.md): the touchpad that reports to
  this console
- [Daktronics Pushbutton](../semi-automatic/pushbutton/daktronics.md): the backup button read on
  lanes B1-B3
- [HS-200 Horn Start](../starter/hs-200.md): the start system on the J12 start
  input
- [Relay take-off platforms](../relay-judging/index.md): the relay-exchange sensors
  read through button 3
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf).
[^support]: [Daktronics, OmniSport 2000 console support](https://www.daktronics.com/en-us/support/controllers/omnisport-2000) (aquatics and track timing; diving and rodeo judging via RC-100 and JC-100 controllers; built-in thermal printer).
[^revhist]: [Daktronics, All Sport & OmniSport Revision Histories (DD3679410, Rev 06, 5 November 2024)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3679410.pdf) (OmniSport 2000 initial software release 16 August 2002; OmniSport 6000 compatibility mode noted in version 3.1.7).
[^usenet]: [rec.sport.swimming, Timing Systems: Daktronics vs Colorado (August-September 1996)](https://groups.google.com/g/rec.sport.swimming/c/RSGSrRXawPA) (period Usenet discussion; the Daktronics 1000 weighed against the CTS System 5, and the OmniSport 6000 described as newly introduced).
[^ed13584]: [Daktronics, OmniSport 2000 Swimming Quick Reference (ED-13584, Rev 8, 19 August 2013)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-13584.pdf) (operation summaries and menu trees for the five sport programs).
[^prosoftware]: [Daktronics, OmniSport 2000 Pro Swimming Software Installation & Operation Manual (DD3109473)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109473.pdf).
[^prodiving]: [Daktronics, OmniSport 2000 Pro Diving Software Installation & Operation Manual (DD3109489, Rev 0, 3 August 2015)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109489.pdf).
[^prosynchro]: [Daktronics, OmniSport 2000 Pro Synchronized Swimming Software Installation & Operation Manual (DD3109495, Rev 0, 3 August 2015)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109495.pdf).
[^prodisc]: [Daktronics, Swimming software support](https://www.daktronics.com/en-us/support/components/swimming-software) ("Daktronics ProDiving, ProSyncro, and ProSwimming interfaces are no longer available for purchase and have been discontinued").
[^rodeo]: [Daktronics, OmniSport 2000 Rodeo Operations Manual (ED-14843, Rev 3, 22 January 2015)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-14843.pdf).
[^dealer]: [Olympian LED, Daktronics OmniSport 2000e Ethernet Timing Console Kit (0A-1240-0096)](https://olympianled.com/product/daktronics-omnisport-2000e-ethernet-timing-console-kit-0a-1240-0096/) (dealer listing, US$2,695).
[^brochure]: Daktronics, Aquatics Solutions brochure (DD1565872, Rev 07, June 2018), pp. 8-9 (OmniSport 2000e dimensions, weight, and the Ethernet-connectivity claim). Print document, not hosted online.
