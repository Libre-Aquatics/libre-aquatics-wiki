---
title: Swiss Timing INT131 converter
description: >-
  The INT131 is a Swiss Timing USB converter that gives a computer two RS232 and two RS422/485
  serial ports, used to cable Omega MTE judges' keypads to Swiss Timing's scoring software.
tags:
  - Equipment
  - Timing
  - Scoring
  - Diving
  - Artistic swimming
infoboxTitle: INT131 converter
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3434.790`'
  - label: Type
    value: USB to serial converter
  - label: Connection
    value: USB type B; two RS232 on 9-pin D-sub; two RS422/485 on 7-pin Tuchel
  - label: Dimensions
    value: 198 × 84 × 30 mm
  - label: Weight
    value: 450 g
  - label: Power
    value: 'USB bus power, or 10–30 V DC external (adapter `3418.910`)'
  - label: Manual
    value: '[INT131 User''s Manual (3434.502.02, version 1.2, November 2007)](https://www.swisstiming.com/pdfs/3434.502.02.pdf)'
---

<!--
Research notes, Swiss Timing INT131. Surfaced 2026-10-28 while building out
swa-scoring-manager.md.

Held and read: sources/vendors/swiss-timing/accessories/swiss-timing-int131-user-manual-3434.502.02
("User's Manual INT131", 3434.502.02, v1.2, November 2007, 13 pp.). Verified from it:
  - One USB connection gives the computer four COM ports: COMA and COMB are RS422/485 on 7-pin
    female Tuchel sockets (pins 1 and 2 carry 10-30 V DC out, so a device can be powered from
    the line), COMC and COMD are RS232 on 9-pin male D-sub, wired as DTE (a null-modem cable to a
    PC port, straight-through to a DCE device).
  - Detects data format and switches RS422/485 direction and speed by itself; 1.2 to 115.2 kbit/s;
    3000 V DC isolation and surge protection on the RS422/485 side; RS422/485 runs up to 4000 ft
    (1250 m) per the sheet.
  - Power from the USB bus or 10-30 V DC on a 4-pin male Tuchel, chosen by a switch; LEDs for
    power and each port's transmit and receive.
  - 198 x 84 x 30 mm, 450 g, 10-90 % humidity non-condensing; wall-fixing holes for M4 screws.
  - Driver: Prolific PL-2303 on CD; the manual's driver notes name Windows 98, ME, 2000, XP and
    CE 3.0, Linux and Mac OS.
  - The panel drawing carries a third-party legend, "TRP-C08H USB To 4-Port RS232/422/485
    Isolated Converter", beside "INT131 3434.790 Swiss Timing", so it appears to be a rebadged
    TRP-C08H (maker not named in the manual; not researched further).
  - Operating and storage range -20 to 65 C; external supply is Swiss Timing adapter 3418.910;
    1.5 W from an external supply or 220 mA from the USB bus; CE marked.
Uses: the SY/SWA Scoring Manager manuals (3480.512.02, v1.9 2017 and v2.2 2022) and the DIV
Scoring Manager manual (3480.513.02, 2022) cable Omega MTE keypads to the scoring computer
"with the cables and INT 131 converter" from Swiss Timing, at 19,200 baud 8N1, with a secondary
port when the judging panel is split across the pool. The software manuals write "INT 131" with a
space; the device manual writes INT131.
Still to research: introduction date, other Swiss Timing systems that use it, the TRP-C08H
maker, and whether it is still supplied.

Build-out, 2026-11-07:
  - Manual re-read in full and page 2 (panel layout) rendered with PyMuPDF. The drawing shows a
    black TRP-C08H body (its own screw-terminal block for the RS422/485 lines and power, and a DC
    jack on the side) with a Swiss Timing block fixed to its lower end carrying the two Tuchel
    RS422 sockets and the 4-pin Tuchel power input. The Tuchel input is labelled "DC IN (9-30VDC)"
    on the drawing, where the text gives 10-30 V; flagged in the article. The manual's "do not use
    the power jack connector" refers to the TRP-C08H's own jack. The held PDF was re-exported from
    Word on 12 September 2025 (document properties) with the 2007 version 1.2 content, and
    Swiss Timing still publishes it at swisstiming.com/pdfs/3434.502.02.pdf (checked 2026-11-07).
  - Trycom Technology, TRP-C08H User's Manual, Rev 1.0, December 2005 (cdn.elsist.biz copy;
    filed at sources/vendors/trycom/accessories/). Read in full. The INT131 manual's introduction,
    features, specifications, serial and power sections and driver steps follow it almost word
    for word with the name changed, which confirms the rebadge. Differences, all Swiss Timing's:
    size (TRP-C08H 151 x 111 x 26 mm, 395 g), Tuchel sockets instead of screw terminals and DIN-rail
    mounting, power fed out on the RS422 lines ("optionally powered"), the 4-pin power input and
    the 3418.910 adapter. See trycom-trp-c08h.md for Trycom's figures and current status.
  - Swiss Timing instruction-manual list (swisstiming.com/download/instruction-manuals/, read
    2026-11-07): "INT131 converter USB-RS232/RS422 (3434.502.02)" next to "INT004 converter
    RS232-RS422 (3394.500.02)".
  - Scoring Manager manuals re-read for the MTE passage: SY Scoring Manager v1.9 (July 2017), SWA
    Scoring Manager v2.2 (January 2022) and DIV Scoring Manager v1.9 (January 2022, so the DIV
    version is 1.9, not 2.2). All three give the same port settings and the cabled-or-XBee choice,
    and the two artistic swimming manuals add the secondary port for judges on both sides.
  - Other uses, outside aquatics: AVK Group's catalogue entry for the Swiss Timing remote wind
    gauge 3436.910 (avkgroup.at/catalog/3436.910/, read 2026-11-07) says the gauge sends its data
    over a 7-pin Tuchel RS422 cable to an optional INT131, which also powers it, and that the INT131
    connects to a Scan'O'Vision STAR camera or a BOREAS display. Search results also cite a Swiss
    Timing Athletics Switcher Indoor manual (3459.502.02) that connects a Galactica computer through
    the INT131; both mirrors (manuals.plus, device.report) returned 403, so not verified.
  - Other held Swiss Timing manuals do not name the INT131: the PowerTime II general manual allows
    "an equivalent USB to Serial Port", and the WPO Calypso console manual a generic USB-RS232
    converter.
  - Drivers: see prolific.md for the end of Windows support for the older PL-2303 chips; which chip
    revision the INT131 contains is not documented, so the article states the risk without
    asserting it applies.
Dead ends: no dated introduction for the INT131 (the manual edition, November 2007, is the
earliest date found); no Swiss Timing price or current product page; Wayback not reachable.

Sources:
  - Swiss Timing, User's Manual INT131, 3434.502.02, version 1.2, November 2007 (https://www.swisstiming.com/pdfs/3434.502.02.pdf)
  - Trycom Technology, TRP-C08H User's Manual, Rev 1.0, December 2005 (https://cdn.elsist.biz/Various/Trycom/TRP-C08H.pdf)
  - Swiss Timing, SY Scoring Manager 3480.512.02 v1.9 (2017); SWA Scoring Manager v2.2 (2022); DIV Scoring Manager 3480.513.02 v1.9 (2022), held
  - Swiss Timing, Instruction manuals list (https://www.swisstiming.com/download/instruction-manuals/)
  - AVK Group, Remote wind gauge sirocco 3436.910 (https://www.avkgroup.at/catalog/3436.910/)
-->

The INT131 is a USB serial converter sold by Swiss Timing under part number `3434.790`. One USB
connection gives a computer four serial ports: two RS232 and two RS422/485.[^manual] In aquatics it
is the cabled link between [Omega MTE keypads](../../diving/omega-mte-keypads.md), used by judges
in diving and artistic swimming, and Swiss Timing's scoring programs.[^swa][^div] The unit is a
converter made by [Trycom Technology](../../../vendors/trycom.md) of Taiwan, the
[TRP-C08H](trycom-trp-c08h.md), to which Swiss Timing added its own connectors.[^manual][^trycom]

## Role in the timing system

This section covers where the INT131 sits. In diving and artistic swimming, each judge enters a
score on an MTE keypad, and the keypads report to a scoring computer running Swiss Timing's
[SWA Scoring Manager](../../../software/swa-scoring-manager.md) or
[DIV Scoring Manager](../../../software/div-scoring-manager.md). Swiss Timing's manuals give two
ways to connect them: a wireless XBee link, or Swiss Timing's cables and the INT131. The serial
port is set to 19,200 baud, 8 data bits, 1 stop bit and no parity.[^swa][^div][^sy] When judges
sit on both sides of the pool in a cabled installation, the software uses a secondary port for the
second group.[^swa][^sy]

Swiss Timing also uses the INT131 outside aquatics. An Austrian distributor's catalogue describes
a Swiss Timing athletics wind gauge that sends its readings to an INT131 over an RS422 cable and
takes its power from the converter on the same cable.[^avk]

## Design and construction

The INT131 has two parts. The upper part is the Trycom TRP-C08H, which carries the USB type B
socket, a power-source switch, five LEDs, two 9-pin RS232 sockets, and the converter's original
screw terminals and DC jack. A Swiss Timing block fixed to its lower end carries two 7-pin Tuchel
sockets for the RS422/485 ports and a 4-pin Tuchel power input.[^manual] The case has holes for
fixing to a wall with M4 screws.[^manual]

Swiss Timing's manual repeats Trycom's introduction, feature list and specifications almost word
for word, changing only the product name and the figures for its own version.[^manual][^trycom]
The added block makes the INT131 longer and heavier than Trycom's unit: 198 × 84 × 30 mm and
450 g, against 151 × 111 × 26 mm and 395 g.[^manual][^trycom] It also replaces the TRP-C08H's
screw terminals and DIN-rail mounting with Tuchel sockets, and adds a power output on the RS422
sockets.[^manual][^trycom]

The five LEDs show power and the transmit and receive activity of the two RS422/485 ports.[^manual]

## Connection to the computer and devices

The computer connects by an ordinary USB A-to-B cable. After the driver is installed, the four
ports appear in Windows as COM ports, numbered by the system.[^manual]

| Port | Signal | Connector | Notes |
|---|---|---|---|
| COMA, COMB | RS422/485 | 7-pin female Tuchel | Transmit and receive pairs; 10–30 V DC output on pins 1 and 2 to power a connected device |
| COMC, COMD | RS232 | 9-pin male D-sub | Wired as DTE, like a PC port |
| DC IN | Power | 4-pin male Tuchel | 10–30 V DC on pin 1, ground on pin 2 |

Because the RS232 ports are wired like a computer's own ports, a device that is itself a DTE, such
as another PC, needs a null-modem cable, and a DCE device needs a straight-through
cable.[^manual] On the RS422/485 side the converter detects the data format and switches line
direction and speed by itself, at any rate from 1.2 to 115.2 kbit/s, and the lines can run up to
1,250 m.[^manual] The RS422/485 side is isolated to 3,000 V DC and protected against surges,
short circuits and voltage spikes.[^manual]

The unit runs either from the USB bus, drawing 220 mA, or from an external 10–30 V DC supply, for
which Swiss Timing lists its adapter `3418.910`. A switch beside the USB socket selects the
source.[^manual] The manual tells users not to use the DC jack, which belongs to the underlying
Trycom unit.[^manual][^trycom] It gives the external input as 10–30 V in its text, while its panel
drawing labels the same socket 9–30 V.[^manual]

## Drivers and compatibility

The INT131 comes with a driver CD for the PL-2303 USB-to-serial chip from
[Prolific Technology](../../../vendors/prolific.md), with a separate tool for removing old driver
versions. The manual lists drivers for Windows 98, ME, 2000, XP and CE 3.0, Linux and Mac
OS.[^manual] A 2025 support article from Carmanah reports that adapters built on Prolific's older
PL-2303HXA and PL-2303X chips are not supported by current Windows 10 and 11 drivers, which flag the
chip as phased out since 2012.[^carmanah] Swiss Timing's manual does not say which chip revision the INT131 contains, so
whether this affects a given unit is not documented.

## Specifications

Figures are from the INT131 manual.[^manual]

| Specification | Value |
|---|---|
| Host connection | USB 1.0, 1.1 or 2.0, type B socket, up to 12 Mbit/s |
| Serial ports | 2 × RS232 (DTE, 9-pin D-sub); 2 × RS422/485 (7-pin Tuchel) |
| Data rate | 1.2–115.2 kbit/s, switched automatically |
| Data formats | 5–8 data bits; 1, 1.5 or 2 stop bits; none, odd, even, mark or space parity |
| Buffer | 256 bytes each way |
| RS422/485 distance | Up to 1,250 m (4,000 ft) |
| Isolation | 3,000 V DC on the RS422/485 side |
| Power | USB bus, 220 mA; or 10–30 V DC external, 1.5 W |
| Operating and storage temperature | −20 to 65 °C |
| Humidity | 10–90 %, non-condensing |
| Dimensions | 198 × 84 × 30 mm |
| Weight | 450 g |
| Conformity | CE |

## Part numbers and accessories

This section lists the INT131 and its related parts.[^manual]

| Item | Part number | Article |
|---|---|---|
| Converter | `3434.790` | This article |
| External power adapter | `3418.910` | None |
| Base converter | `TRP-C08H` | [TRP-C08H](trycom-trp-c08h.md) |
| RS232 to RS422 converter and distributor | INT004 | [INT004](swiss-timing-int004.md) |

## See also

- [Omega MTE keypads](../../diving/omega-mte-keypads.md): the judges' keypads it connects
- [SWA Scoring Manager](../../../software/swa-scoring-manager.md) and [DIV Scoring Manager](../../../software/div-scoring-manager.md): the scoring programs
- [INT004](swiss-timing-int004.md): Swiss Timing's RS232 to RS422 converter and distributor
- [Timers](index.md): the timing-console overview
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Swiss Timing, User's Manual INT131](https://www.swisstiming.com/pdfs/3434.502.02.pdf) (3434.502.02, version 1.2, November 2007).
[^trycom]: [Trycom Technology, TRP-C08H User's Manual](https://cdn.elsist.biz/Various/Trycom/TRP-C08H.pdf) (Rev 1.0, December 2005; Elsist copy).
[^swa]: Swiss Timing, SWA Scoring Manager User's Manual (3480.512.02, version 2.2, January 2022), Omega MTE Keypads.
[^sy]: Swiss Timing, SY Scoring Manager Aquatics User Manual (3480.512.02, version 1.9, July 2017), MTE Keypads.
[^div]: Swiss Timing, DIV Scoring Manager User's Manual (3480.513.02, version 1.9, January 2022).
[^avk]: [AVK Group, Remote wind gauge sirocco](https://www.avkgroup.at/catalog/3436.910/) (catalogue entry, Swiss Timing 3436.910).
[^carmanah]: [Carmanah, Why does my serial to USB adapter not work in Windows 10/11?](https://support.carmanah.com/article/445-serial-to-usb-adapter-issue) (September 2025).
