---
title: Colorado Time Systems Gen7 wired judging
description: >-
  Gen7 wired judging is the Colorado Time Systems diving and artistic swimming judging
  system of cabled terminals, breakout boxes and a USB interface hub, released in 2016.
tags:
  - Equipment
  - Diving
  - Artistic swimming
  - Scoring
infoboxTitle: Gen7 wired judging
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`JT-01` (terminal), `CB-01` (breakout box), `IH-01` (interface hub); systems `JSYS-3` to `JSYS-15`'
  - label: Type
    value: Wired judging system
  - label: Display
    value: Backlit LCD on each terminal
  - label: Connection
    value: 4-pin RS-485 bus; USB from the interface hub to the computer
  - label: Power
    value: 12 V DC, 1 A maximum, from the hub's supply, or USB alone
  - label: Software
    value: Gen7 Diving; [Gen7 Artistic Swimming](software/gen7-artistic-swimming.md)
  - label: Introduced
    value: '2016'
  - label: Manual
    value: '[Diving Installation and User Guide (F1022 Rev 202510)](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Gen7%20Diving/Gen7Diving_F1022.pdf)'
---

<!--
Research notes, CTS Gen7 wired judging (Gen7 Diving hardware). Built out from the stub
2026-10-13.

Sources read in full:
  - timers-consoles/cts-diving-installation-and-user-guide-f1022 (F1022 Rev 202510, (c)2025,
    42 PDF pages, printed pages to 33). Text extraction read end to end; pages 5-10 rendered
    with PyMuPDF to read the figures. Facts used: product identification (Wired Judging,
    JT-01, CB-01, IH-01); power table (12 V DC, system 1 A; JT-01 25 mA with backlight, IH-01
    75 mA; on USB 0.5 A maximum, terminal 10 mA with no backlight, hub 50 mA); supply must be a
    US/Canada-listed ITE supply to UL 62368-1 / CSA C22.2 No. 62368-1, LPS, Class 2, 12 V 1 A,
    and one ships with each IH-01; altitude limit 2000 m (6500 ft). Topology, judge-number
    entry, terminal modes, backlight, CB-01 port rules, IH-01 ports, scoreboard cables,
    legacy converter, split-panel diagram, software screens, meet-management link,
    simultaneous events, DisplayLink template notes, troubleshooting table.
    Figures: the IH-01 drawing shows RS-485, USB (labelled 5V .5A) and a 12VDC 1A backlight
    jack with LED at one end, and a CTS-232 phono jack with LED and a second RS-485 port at
    the other. The CB-01 drawing shows four judges' ports and one I/O port on a long side; the
    split-panel diagram draws five connectors on each long face, so eight judge ports and two
    I/O per box is inferred, not stated. JT-01 drawing: keys 0, .5, 1-10, a REQUEST
    CHANGE/CLEAR key and a SEND/ENTER key. Diagram cable labels: R-015-569 (USB, computer to
    hub), R-015-674-30 (hub to breakout), R-015-674-05 (breakout to terminal), R-015-674-75
    (breakout to breakout across the pool). The -05/-30/-75 suffixes look like lengths in
    metres (75 m matches the architectural guide's 246 ft maximum), but no source says so.
    Discrepancy: the split-panel diagram is titled for a 14-judge synchronized diving system,
    while the text beside it describes two 7-judge simultaneous panels and an 11-judge
    synchro panel on the same hardware.
    Troubleshooting oddity: the software refuses events of more than 8 divers when no IH-01
    is connected; the guide gives only the fix (connect the hub), not the reason.
  - software/cts-gen7-diving-lightning (Gen7 Diving datasheet). Footers read REV 08/23 on
    pages 1-2 and REV 04/41 on page 3, evidently a typo. JSYS-3/5/7/11/15 by judge count;
    synchronized diving only on JSYS-11 and -15; simultaneous events only on JSYS-15. Each
    package includes terminals, breakout box(es), hub, software and cables. Software claims:
    compatible with DiveMeets, ieDive, OmadaTrak; World Aquatics (incl. mixed synchro), USA
    Diving, NCAA and high school rules; touch-optimised; works with terminals or with flash
    cards keyed in by hand.
  - catalogs-brochures/cts-gen7-legacy-architectural-guidelines, Gen7 Diving page: standalone,
    does not need the Gen7 Legacy timer; portable; cable options up to 246 ft (75 m); scoring
    to CTS scoreboards wired or wirelessly; 3, 5, 7, 11 or 15 judge packages.
  - software/displaylink-plus-help/22 and 21: Gen7 Diving v1.2.0+ embeds leaderboard data in
    the scoreboard feed; release notes add Gen7 Diving leaderboard support for up to 63 divers
    (between v4.3.9 and v4.4.0) and fix the Gen7 Diving short event title in v4.4.0 (Dec 2021).

Web (October 2026):
  - CTS product page https://coloradotime.com/products/gen7-diving-equipment : same features
    and package table as the datasheet; events used at; says World Aquatics and USA Diving ask
    for wired judging at elite events; software release notes, latest v1.5.9 (10 April 2026);
    v1.5.8 added Omega UNT4 output for Daktronics numeric boards and support for CTS USB-485
    cables; v1.5.0 (October 2025) added combined events, high school dive-sheet checks,
    keyboard award entry and the Indiana export; v1.5.1 corrected firmware version labels;
    IH-01 and JT-01 firmware v2.1.5; an update from before v1.2.2 forces a firmware update of
    every terminal and hub.
  - CTS blog https://coloradotime.com/blog/the-2023-usa-diving-national-championships-to-use-gen7-diving-at-the-mylan-park-aquatic-center
    (undated, early 2023): USA Diving used Gen7 Diving at the 2022 Winter Nationals at Mylan
    Park, Morgantown WV, and the 2023 Nationals (17-24 May 2023) were to use it there.
  - SwimSwam reprints of CTS releases, 10 June 2015 and 25 May 2016 (details recorded when
    wireless-judging.md was written; both now behind a paywall, HTTP 402, and the Athletic
    Business copies return 403). 2015: preview at USA Diving synchronized nationals and the
    FINA Puerto Rico Grand Prix after FINA and USA Diving asked for wired terminals. 2016:
    release; used at USA Diving winter and synchronized nationals, UANA Puerto Rico Grand
    Prix, Big Ten and NCAA championships; planned for the 2016 Olympic trials in
    Indianapolis; rules supported FINA incl. mixed synchro, USA Diving, NCAA, high school
    incl. CIF springboard.
  - Searched for a World Aquatics or USA Diving rule requiring wired terminals: none found.
    The claim rests on CTS's releases and product page, so it is attributed in the text.
  - CTS blog "New product spotlight: USB2USB device" (developed summer 2020): the USB Connect
    device that F1022 offers as the meet-management link. Stub created.

Still to research: prices; JT-01 and CB-01 dimensions and weight (none published); the
CB-01 port count stated rather than inferred; Gen7 Artistic Swimming software; whether the
Gen7 Legacy or Serial timer ever ran Gen7 Diving; the licence that enables the RS-232 legacy
output.
-->

Colorado Time Systems (CTS) Gen7 wired judging is a cabled system for collecting diving and
artistic swimming judges' scores. It has three parts: a `JT-01` terminal for each judge,
`CB-01` breakout boxes, and an `IH-01` interface hub. The hub connects by USB to a computer
running Gen7 Diving or [Gen7 Artistic Swimming](../../software/gen7-artistic-swimming.md).[^f1022]
CTS released the system in May 2016. It says it built the system because World Aquatics (then
FINA) and USA Diving had asked for wired terminals at national and international
events.[^ss2015][^ss2016] It is sold in packages of 3 to 15 judges, part numbers `JSYS-3` to
`JSYS-15`.[^gen7ds]

## Role in the scoring system

This section places the system among CTS's judging products; how a diving panel is scored in
general is covered in the [diving equipment overview](index.md).

Earlier CTS judging terminals reported to a timing console. The wired
[judging terminals](judging-terminals.md) of the System 5 and System 6 were cabled to an
interface box at the console, and the later [wireless judging](wireless-judging.md) terminals
reached it by radio.[^s5jt][^f941] Gen7 wired judging leaves the timing console out. A laptop
or tablet runs the scoring software, and the interface hub links that computer to the
judges.[^f1022] CTS's architectural guidelines describe it as self-contained, with no
[Gen7 Legacy](../swimming/timers/gen7-legacy.md) timer required.[^arch] The same computer sends
results to the scoreboard and to a meet-management program.[^f1022]

## History

This section covers the system's release and its use at championships.

In June 2015 CTS said that World Aquatics and USA Diving now wanted wired judging terminals at
national and international events, where wireless terminals had been the norm. It showed
prototype wired terminals at the USA Diving synchronized national championships and at a FINA
Grand Prix in Puerto Rico, and said it planned to release them later that year.[^ss2015] The
release came in May 2016. CTS said by then the equipment had been used at the USA Diving winter
and synchronized nationals, the UANA Puerto Rico Grand Prix and the Big Ten and NCAA
championships, and that it would be used at the 2016 US Olympic diving trials in
Indianapolis.[^ss2016] The governing bodies' request is documented in CTS's releases rather
than in a published World Aquatics or USA Diving rule.

USA Diving used the system at its 2022 Winter National Championships at the Mylan Park Aquatic
Center in Morgantown, West Virginia. The 2023 National Championships were scheduled at the same
pool with the same equipment, according to CTS.[^blog2023] As of 2026, CTS lists the system as
a current product. The software release notes on its product page run to version 1.5.9 of
April 2026.[^product]

## Design and construction

This section describes the three hardware parts.

The `JT-01` judges' terminal is a tabletop unit with a backlit LCD above a sealed keypad. CTS
says the screen can be read in sunlight outdoors as well as indoors.[^gen7ds][^arch] The manual's
drawing shows score keys for 0, .5 and 1 to 10, so marks can be entered in half points. Two
larger keys sit beside the screen: REQUEST CHANGE/CLEAR on the left and SEND/ENTER on the
right.[^f1022] The request-change key alerts the operator when a judge needs to correct a mark
already sent.[^gen7ds] The terminal shows the diver's name and team or country, the dive and its
degree of difficulty, and its own terminal number. Once a dive's scoring is final it can also
show the other judges' marks.[^gen7ds][^arch] Each terminal has a single 4-pin connector and
locking cable.[^f1022][^gen7ds]

The `CB-01` cable breakout box joins the terminals to the bus. Each box has an
Input/Output port at each side for the link to the hub or to the next box. The rest of its
ports are for judges.[^f1022] The manual's drawing shows four judges' ports beside one I/O port
on one face. All the ports are wired alike, but CTS advises keeping box-to-box and hub links on
the I/O ports. A spare I/O port on the last box in a chain can take one more terminal.[^f1022]

The `IH-01` interface hub converts between the computer's USB and the RS-485 bus. One end
carries an RS-485 port, a USB socket and a 12 V DC jack with a status LED. The other end has a
second RS-485 port and a quarter-inch phono socket labelled CTS-232, with its own LED.[^f1022]
The two RS-485 ports are interchangeable. Either one supplies power and data to the terminals
and data to a scoreboard.[^f1022]

## Operation

This section covers how the terminals are set up and run from the software.

A terminal switches on when it is cabled to a powered hub and asks for a judge number. That
number then appears in the software, where a name can be attached to it. After that the
terminal waits for the software.[^f1022] To change the number, the terminal must be reset,
by unplugging it, or through a reset command that the software sends to every terminal.
Duplicate judge numbers stop terminals from sending marks.[^f1022]

The software sets the terminal mode. Judges Call shows each judge's number, name and panel
letter so judges can find their seats. Judging mode opens the terminals for marks. A waiting
mode tells the panel to stand by while the operator deals with a problem.[^f1022] Where one
judge must give several marks, the software prompts for each in turn.[^f1022] The operator can
also move entry from the terminals to the computer and type marks in, and CTS says Gen7 Diving
works with flash cards keyed in by hand.[^f1022][^gen7ds] A Judges Hardware setting chooses
whether each terminal shows the full panel's marks once they are in. CTS suggests this for pools
where the scoreboard is out of the judges' view.[^f1022]

### Split panels and simultaneous events

The panel layout is set in software rather than by recabling.[^f1022] With one breakout box on
each side of the pool, a panel can be split across the pool. CTS's examples are a seven-judge
diving panel seated four and three, and halving an artistic swimming panel between the two
sides as another.[^f1022]

Several events can share one bus. Each event has its own computer and hub. One computer sets a
system count, the terminals are reset, and each then asks for a system or event ID before its
judge number.[^f1022] Exactly one computer must be event ID 1, which coordinates the bus. If none
is, communication stops and the terminals stay on their waiting screen.[^f1022] The manual's
worked example is a 1-metre and a 3-metre event of seven judges each. Each panel puts three
judges on the side nearer its board and four on the far side.[^f1022] The same cabling, reset
to a single system, takes an 11-judge synchronized diving panel.[^f1022] That drawing is titled
as a 14-judge synchronized diving system, which matches neither layout described in the text
beside it.[^f1022]

Sources differ on how many events can run at once. The manual allows up to four. The datasheet
and product page list simultaneous events only for the `JSYS-15` package, without a
number.[^f1022][^gen7ds][^product]

### Gen7 Diving software

Gen7 Diving organises a competition as meets, events and divers. Each event takes its degrees of
difficulty either from the NFHS table or from the World Aquatics formula. CTS lists NCAA, USA
Diving, World Aquatics and high school rule sets.[^f1022][^gen7ds] Per event the operator sets the dive count,
the panel size and the number of cast-out marks. A combined event runs several
event types, such as girls and boys, at the same time.[^f1022] The dive order can follow entry
order or meet-management order, be random, or follow the previous round's finish, forward or
reversed.[^f1022] The running screen shows the points each diver needs to overtake the top three
places. It also gives an average time per dive over the last ten dives and an estimated
finishing time.[^f1022]

Gen7 Diving exchanges data with a meet-management computer over a serial link. CTS names
[DiveMeets](../../software/divemeets.md), [ieDive](../../software/iedive.md) and
[OmadaTrak](../../software/omadatrak.md) as compatible programs.[^gen7ds][^f1022] Entries are
imported before an event. Each dive's marks go back once every judge has scored or, in Hold
mode, once the operator sends them.[^f1022] Names can be exported as an XML file for
[DisplayLink Plus](../../software/displaylink-plus.md) or as CSV, with a variant for the Indiana
high school association's reporting system.[^f1022] The manual's troubleshooting table notes
that the software refuses events of more than eight divers when no hub is connected.[^f1022]

## Connections

This section covers cabling, power and scoreboard output.

The basic chain runs from the computer to the hub by USB. A cable then runs from a hub RS-485
port to a breakout box, and from the box to each terminal.[^f1022] The manual's diagrams label
these runs `R-015-569` for the USB cable, `R-015-674-30` from hub to box, `R-015-674-05` from
box to terminal and `R-015-674-75` between boxes across the pool.[^f1022] CTS offers cables up to
246 ft (75 m) long.[^arch]

The bus can run on USB power alone, which suits a small system without a scoreboard. In that
case the terminal backlights cannot be used.[^f1022] The external supply that ships with each
hub is needed for backlights, for scoreboard data, and for long cable runs. The manual sets
the threshold at 100 ft (30 m) in one passage and at 75 m in another.[^f1022] On large systems
CTS advises powering every hub and, where possible, placing a hub on each side of the pool,
because underpowered terminals reset at random.[^f1022]

Scoreboard data shares the judges' bus. A scoreboard cable can be taken
from any free RS-485 port on a hub or a breakout box, once the hub has external
power.[^f1022]

- An `R-015-674-xx` cable goes directly to a numeric board such as a CTS
  [Otter](../common/scoreboard/otter.md) diving scoreboard.[^f1022]
- An `R-015-707-x` cable feeds the scoreboard node of a Gen7 [wall plate](../swimming/deck-cabling/cts-wall-plate.md)
  or deck plate. The plate's LED for that node turns red if power is too low for scoreboard
  data.[^f1022]
- Older RS-232 scoreboards are driven from the CTS-232 port through an `R-xxxDC` cable. The hub
  then acts as a legacy scoreboard converter, a function that is off by default and needs a
  licence. In this role the data source can be a Gen7 timer as well as the diving
  laptop.[^f1022]

DisplayLink Plus reads the same bus. In its templates a Gen7 Diving event ID appears as the
pool number, and the timer number names the computer port the diving data arrives on.[^f1022]
From Gen7 Diving version 1.2.0 the scoreboard feed also carries leaderboard data, so a
standings board needs no second connection.[^dlhelp] Version 1.5.8 added an Omega
[UNT4](../common/scoreboard/unt4.md) output for Daktronics numeric scoreboards.[^product]

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado[^f1022] |
| Components | `JT-01` judges' terminal, `CB-01` cable breakout box, `IH-01` interface hub[^f1022] |
| Bus | 4-pin RS-485, power and data[^f1022] |
| Computer link | USB from `IH-01`[^f1022] |
| Legacy scoreboard output | RS-232 on quarter-inch phono socket, licensed feature[^f1022] |
| System power | 12 V DC, 1 A maximum[^f1022] |
| Power on USB alone | 0.5 A maximum; no terminal backlight[^f1022] |
| `JT-01` current | 25 mA with backlight; 10 mA on USB power[^f1022] |
| `IH-01` current | 75 mA; 50 mA on USB power[^f1022] |
| External supply | Listed ITE supply to UL 62368-1 and CSA C22.2 No. 62368-1, LPS, Class 2, 12 V DC 1 A; one ships with each hub[^f1022] |
| Maximum cable run | 246 ft (75 m)[^arch] |
| Altitude | Below 2000 m (6500 ft)[^f1022] |
| Judges per package | 3, 5, 7, 11 or 15[^gen7ds] |
| Software | Gen7 Diving; Gen7 Artistic Swimming[^f1022] |

CTS publishes no dimensions or weights for the terminal, breakout box or hub.

## Part numbers and accessories

This section lists the packages and parts CTS names.

| Package | Judges | Synchronized diving | Simultaneous events |
|---|---|---|---|
| `JSYS-3` | 3 | No | No |
| `JSYS-5` | 5 | No | No |
| `JSYS-7` | 7 | No | No |
| `JSYS-11` | 11 | Yes | No |
| `JSYS-15` | 15 | Yes | Yes |

Each package includes its terminals, one or more breakout boxes, an interface hub, the Gen7
Diving software and the cables.[^gen7ds] The datasheet's third page carries the revision mark
"REV: 04/41", evidently a misprint, where its other pages read 08/23.[^gen7ds]

- `JT-01`, judges' terminal.[^f1022]
- `CB-01`, cable breakout box.[^f1022]
- `IH-01`, interface hub, supplied with its power supply.[^f1022]
- `R-015-674-05`, `R-015-674-30`, `R-015-674-75`, RS-485 bus cables as labelled in the
  manual's diagrams; `R-015-674-xx` also connects a numeric scoreboard.[^f1022]
- `R-015-569`, USB cable from computer to hub.[^f1022]
- `R-015-707-x`, scoreboard cable to a Gen7 wall plate or deck plate.[^f1022]
- `R-xxxDC`, cable from the CTS-232 port to a legacy scoreboard.[^f1022]
- [USB Connect](../swimming/timers/cts-usb-connect.md) (`USB2USB`), coupler for the
  meet-management link. The alternative is two USB-to-serial adapters, linked through a gender
  changer and a null modem.[^f1022][^usb2usb]

## See also

- [Colorado Time Systems judging terminals](judging-terminals.md): the wired terminals for the System 5 and System 6
- [Colorado Time Systems wireless judging](wireless-judging.md): the radio terminals used before it at elite events
- [Daktronics JC-100](jc-100.md): a competing wired judge console
- [Diving equipment](index.md): the diving equipment overview
- [Colorado Time Systems](../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../index.md): the equipment reference

## References

[^f1022]: [Colorado Time Systems, Diving Installation and User Guide (F1022 Rev 202510)](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Gen7%20Diving/Gen7Diving_F1022.pdf).
[^gen7ds]: [Colorado Time Systems, Gen7 Diving datasheet](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Gen7_Diving.pdf) (Rev 08/23).
[^product]: [Colorado Time Systems, Gen7 Diving Equipment](https://coloradotime.com/products/gen7-diving-equipment) (product page and release notes, October 2026).
[^arch]: Colorado Time Systems, Gen7 Legacy Architectural Guidelines, Gen7 Diving.
[^dlhelp]: Colorado Time Systems, DisplayLink Plus help, How to Set up a Diving Leader Board.
[^blog2023]: [Colorado Time Systems, The 2023 USA Diving National Championships to Use Gen7 Diving at the Mylan Park Aquatic Center](https://coloradotime.com/blog/the-2023-usa-diving-national-championships-to-use-gen7-diving-at-the-mylan-park-aquatic-center).
[^usb2usb]: [Colorado Time Systems, New Product Spotlight: USB2USB Device](https://coloradotime.com/blog/new-product-spotlight-usb2usb-device).
[^ss2015]: [SwimSwam, USA Diving Reacts to Sneak Peek of Colorado Time Systems' Next Generation Diving Equipment](https://swimswam.com/usa-diving-reacts-to-sneak-peek-of-colorado-time-systemsnext-generation-diving-equipment/) (CTS release, June 2015).
[^ss2016]: [SwimSwam, Colorado Time Systems Releases Next Generation Diving Equipment](https://swimswam.com/colorado-time-systems-releases-next-generation-diving-equipment/) (CTS release, May 2016).
[^s5jt]: [Colorado Time Systems, System 5 Judging Terminals datasheet](https://web.archive.org/web/20050410101255/http://www.coloradotime.com:80/pdf/System%205%20Judging%20terminals.pdf) (Revised 06/04).
[^f941]: [Colorado Time Systems, Wireless Judging 900 MHz Frequency User Guide (F941 Rev. 20110720)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Judging%20Terminals/WirelessJudging-F941.pdf).
