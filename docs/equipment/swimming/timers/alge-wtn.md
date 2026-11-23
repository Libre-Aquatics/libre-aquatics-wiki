---
title: ALGE WTN wireless timing network
description: >-
  WTN is ALGE-Timing's 2.4 GHz radio network that links Timy timers, push buttons, start devices,
  photocells and display boards without cables, with every device relaying for the others.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: WTN
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`WTN` (stand-alone unit); `WTN-PB`, `WTN-DB`, `WTN-WS`, `USB-WTN`'
  - label: Type
    value: 'Radio timing network'
  - label: Frequency
    value: '2.4 GHz band, 16 radio frequencies, 15 user teams'
  - label: Power
    value: '10–100 mW (10 mW factory setting)'
  - label: Range
    value: 'About 350 m in line of sight, extended by relaying'
  - label: Channels
    value: 'Five per device, `C0`–`C4`'
  - label: Connection
    value: 'Built into the [Timy3](equipment/swimming/timers/alge-timy.md); stand-alone `WTN` unit on cable `280-xx` for the Timy, Timy2 and [TdC 8000](equipment/swimming/timers/alge-tdc-8000.md)'
  - label: Introduced
    value: 'By March 2013 (earliest firmware entry)'
  - label: Status
    value: 'Current'
  - label: Manual
    value: '[WTN manual](https://alge-timing.com/downloads/userGuides/WTN-BE.pdf)'
---

<!--
Research notes, ALGE Wireless Timing Network (WTN). Surfaced 2026-11-11 while building out
alge-timy.md. Built out 2026-11-23.

Held (sources/vendors/alge-timing/), each read in full for its WTN material:
- timers-consoles/alge-wtn-manual-e26-02-18 (downloaded 2026-11-23 from ALGE's site, WTN-BE.pdf,
  28 pp.): the stand-alone WTN unit and the network. Section 1: two or more WTN-series devices
  form a network, at most 60; any device can reach another through a third. Display data, RS232
  and timing impulses travel together. EU limit 10 mW, USA 100 mW. 1.1-1.3: three-key waterproof
  keypad; display with signal bars, battery level, master/slave arrow, 4-digit numeric and
  7-character alphanumeric fields; multiport D-sub 25, power socket, yellow (display data), black
  (ground) and red (timing channel) banana sockets. 2.3: three AA cells, alkaline or NiMH (NiMH
  charged outside the unit), external 8-24 VDC; running-time table from 15 h (alkaline, 100 mW,
  -20 C, display data every tenth) to 70 h (10 mW, 20 C, one impulse a minute). 2.5: at least two
  bars needed; rSSI below -60 dB is critical (3.2.13 says -58 dB); neighbouring teams such as 1S
  and 2S should not be used side by side. 2.7: one master per network, the device with the lowest
  MAC address, re-elected if it drops out, with only the first impulse in that gap lost; this
  section says 32 devices at most, against 60 in section 1. 2.8: numeric field shows radio
  frequency (up to 16), team (1-9, A-F) and S or A. 3.1.1: 15 teams, nine single (S, separate
  frequencies, no cross-talk) and six joint (A, shared frequency; other A teams may relay but
  their data is ignored). 3.1.2: banana channel C0-C4 (C0 start, C1 finish, C2 intermediate 1,
  C3 intermediate 2 or second start, C4 intermediate 3 or second finish). 3.2.1: 10, 25, 50,
  100 mW. 3.2.3: 16 frequencies, PR1a-W cannot use all of them; set by team instead. 3.2.4/5:
  display 2400-19200 baud, RS232 2400-115200, changes propagate to the network. 3.2.6: every
  impulse arrives 0.1 s late (+/-0.0001 s here; +/-0.0002 s in 5.1.2 and 5.2). 3.2.7: 0.1 s
  lockout after each impulse. 3.2.8: pulse-hold message for a misaligned photocell, default 5 s.
  3.2.11/12: firmware via cable 283-02 from a PC, then RF-UPD passes it to the rest of the team.
  4: a new device forces resynchronization, during which impulses are held and sent afterwards
  with their delay. 5.1: TdC 8001/8000plus and Timy/Timy2 connect on cable 280-xx (25-pole);
  missed impulses are re-sent over RS485 for 90 s, after which the silent device is dropped; on
  the TdC, times delayed 0.8 s or more are marked invalid. Timy/Timy2 menu: 0.1 s correction
  marks corrected times with "t". 5.4: Timy3 W RS232 over radio is off by default. 6:
  technical data; RS485 fixed at 38400 baud. 7: SPB1 bracket, PS12A, cables 280-03/-09, 283-02,
  284-02, 000-xx, 037-10. CE declaration dated 12 November 2016 (R&TTE 1999/5/EC; EN 300 328
  v1.7.1 and v1.9.1).
- timers-consoles/alge-wtn-pb-manual-e23-11-02 (WTN-PB-BE.pdf, 8 pp.): device list (dropped by the
  text extraction); transport lock under the battery cover; channel by holding the button at
  switch-on; factory reset sets C1; rotary team switch inside the battery compartment, 15 teams,
  position 0 factory test; upper LED trigger and battery, lower LED link quality to the nearest
  neighbour; one 1.5 V C cell, about 52 h at 20 C and about 8 h at -20 C. CE declaration
  12 November 2016.
- scoreboards-displays/alge-wtn-db-manual-e23-11-02 (WTN-DB-BE.pdf, 12 pp.): 16-position rotary
  team switch (0 = test mode), clip mount on the board with the switch side facing down, powered
  and switched by the board (no battery), 4-pin Amphenol plug, LED green/orange/red for link
  quality; baud rate and power can only be set from another WTN in the team; firmware by RF-UPD;
  24 mA at 12 V, 5-24 VDC. Its update section names the WTN-WS by mistake.
- accessories/alge-usb-wtn-manual-e200228 (USB-WTN-BE.pdf, 8 pp.): adapter first made to link a
  WTN to a PC over USB, now a general interface; two USB serial converters, a toggle between
  RS485 and display-board banana sockets; examples with WTN, TdC8000/8001, Timy3, Timy/Timy2,
  ASC3, D-LINE, GAZ5; about 0.1 kg.
- catalogs-brochures/alge-wtn-leaflet (WTN-PE.pdf, 4 pp., undated; PDF metadata 2013-07-26,
  unverified), alge-wtn-db-leaflet, alge-wtn-ws-leaflet: same technical data, 16 frequencies,
  350 m; WTN-WS sends WS2 anemometer readings to the timer and takes display data back, powered
  by the board or by a battery on cable 292-05. Drawings label one timer "Timy2W".
- timers-consoles/alge-timy3-general-manual-e25-03-10: 1 (integrated radio modem); 4.5 Timy3-to-
  Timy3 sync (off, passive, active once, active every minute; passive units ask before accepting
  a change over 0.0005 s); 6.1-6.2 radio update of the WTN module and of all team devices, "up to
  20 minutes", against "15-45 minutes" in 10.2; 9.3.1.2 0.1 s correction automatic for the
  internal WTN, E-START W correction setting needed to pass radio times out as impulses; 9.3.5
  WTN delay only with an external WTN; 9.3.7 channel usage for socket mode; 9.4 board data by
  cable, by radio or both; 9.9 the Timy3 is master and time server, must be switched on first and
  not cycled (resync can lose impulses in the first 5 minutes); an external WTN lets a Timy2 work
  almost the same, except that the Timy3 can power its module down and the Timy2's channels are
  physically triggered on its banana sockets; 9.9.1 module off by default; 9.9.2 status screen
  (neighbours, team members, teams on frequency, 10-100 mW, LQI, RSSI -127/-65/+20, firmware);
  9.9.3 power 10/25/50/100 mW; 9.9.4 teams 1-9 A-F; 9.9.5 socket mode, nine channels, "t" prefix;
  9.9.6 lost-string statistics; 9.9.7 parameter broadcast. 11: 2.4 GHz, 16 frequencies, 10-100 mW,
  5 channels, about 350 m.
- catalogs-brochures/alge-timy3-product-leaflet: 15 frequencies (manual says 16).
- timers-consoles/alge-timy-tracktimer-manual-e23-11-02, 4: WTN-PB in socket mode from four lanes,
  up to nine channels; E-START W cannot be a socket device and stays in standard mode.
- start-systems/alge-e-start-w-manual-e23-10-31, 1.1-2.4: device list (WTN, Timy3 W/WP, PR1aW,
  WTN-DB, WTN-WS, WTN-PB, BANG W, E-Start W); EU 10 mW, USA 100 mW, power changeable only from a
  WTN or Timy3; 15 teams on a screwdriver switch, position 0 factory test. Its boilerplate, and
  that of the cabled e-Start manual, puts WTN in a "4.2 GHz" band: a transposition of 2.4 GHz.
- start-systems/alge-bang2-manual-e23-11-14, 2.1, 2.7.6-2.7.7, 6.3: BANG2 has cable and WTN, takes a
  radio false start from an e-Start W or WTN-PB on a set channel (C4 default) in team 1 by
  default; 16 teams, 10 mW, about 300 m. BANG2 leaflet V200601 gives the same radio figures.
- catalogs-brochures/alge-general-catalogue-2017: p. 10 Timy3 with built-in WTN; pp. 12-13
  WTN-Set 1/2 training sets (Timy3 W or WP, two PR1aW, reflectors, tripods, case KL-WTN-SET),
  "15 different radio channels", late radio data delivered and corrected to the original impulse;
  p. 16 BANG W (radio only) and BANG CW (cable start, radio false start); p. 24 PR1aW, 15 teams,
  5 channels, up to 38 h; p. 30 USB-WTN; pp. 35-36 WTN overview: 2.4 GHz, 15 teams, 10-100 mW,
  5 channels, 350 m with every device acting as a repeater, 3 x AA, cables 280-03, 283-02, 284-02,
  WTN-PB on an internal C cell for about 50 h, WTN-DB powered through the board's 4-pin Amphenol
  plug; p. 60 WTN-WS with the WS2 anemometer; pp. 81-84 show jumping with WTN, WTN-PB for
  time-outs, PR1aW-RT and PR1aW-dT photocells; p. 93 radio semi-automatic swimming, one WTN-PB per
  lane; p. 108 diving with a Timy3 W per judge, a WTN and a USB-WTN.
- catalogs-brochures/alge-aquatic-sports-catalogue-swimming-ke-2026: p. 3 radio semi-automatic
  system (Timy3 WP, BANG2, BANG-HS, e-Start W, WTN-PB per lane, D-LINE with WTN-DB, up to eight
  lanes); p. 17 diving scoring over WTN with a Timy3 W per judge and a USB-WTN; p. 18 water polo
  list includes a WTN and a WTN-PB.
- catalogs-brochures/alge-athletics-start-devices-brochure-v1510.1: e-Start W sends to BANG W, a
  WTN or a Timy3 WP; WTN-PB for the recaller; BANG CW takes the radio false start.
- scoreboards-displays/alge-d-line-d-sat-manual-e240226: cable 324-1.5 powers a power bank plus a
  WTN-DB or WTN-WS on the board's Amphenol socket.
Web (read 2026-11-23):
- alge-timing.com/en/categories/radio-systems: WTN, WTN-DB, WTN-PB, WTN-WS, TED2 (433 MHz, for long
  distances) and the WTN set.
- alge-timing.com/en/product/1981/wtn: mesh network, all devices transceivers; 80 x 140 x 40 mm,
  360 g, 3 x AA; accessories 280-03, USB-WTN, WTN-DB, WTN-PB, WTN-WS, 283-02, 284-02, 295-02,
  296-02; firmware 23.33.
- /759/wtn-pb: 185 x 50 x 45 mm, 186 g, one C cell about 50 h at 20 C, C0-C4, can act as a hub.
- /1980/wtn-db: 145 x 90 x 75 mm, 198 g, 15 teams, 350 m, can act as a hub, battery cable 292-05.
- /1257/wtn-ws: 150 x 120 x 75 mm, 238 g; WS2 or WS3 anemometer.
- /2233/usb-wtn: 75 x 65 x 35 mm, 88 g; with 280-03 cable and USB-mini cable.
- /2361/wireless-timing-network-set: WTN-SET1 (Timy3 W) and WTN-SET2 (Timy3 WP).
- alge-timing.com/alge/download/uC/Change_WTN.txt, "Changes for the WTN Family": 52 entries,
  13.33 (15 March 2013) to 23.33 (7 March 2023). 13.61 (June 2013) refers to new WTN hardware;
  13.82 (August 2013) first WTN-WS link; 13.B2/13.B4 (November 2013) a new BANG device; 14.31
  (5 March 2014) first WTN-PB implementation; 15.21 (February 2015) socket mode on all channels;
  15.71 (July 2015) e-Start W and WTN-PB default delay 0.1 s; 18.62 (June 2018) SJS2 and SJC2;
  19.91 (September 2019) BANG2 firmware; 22.32 (7 March 2022) support for a "WTN2 system".
- Searches for an FCC ID, an ALGE launch announcement or press coverage found nothing (2026-11-23).
- ALGE-Swim USA systems page (alge-swimusa.com/systems/): radio semi-automatic package with one
  WTN-PB per lane plus one for the start.
Not established: launch date (the firmware history begins in March 2013 but already speaks of
new hardware, so WTN is older); what "WTN2" is; whether a Timy2W was a product or a drawing
label; FCC identifier; the USB-WTN's own part number beyond its name.
-->

WTN, the Wireless Timing Network, is the radio system that [ALGE-Timing](../../../vendors/alge-timing.md)
uses in place of timing cables. It works in the 2.4 GHz band and carries timing impulses,
display-board data and serial data to a PC over the same link.[^manual][^cat2017] The radio is
built into the [Timy3](alge-timy.md) timer and into ALGE's radio push buttons, photocells, start
devices and display-board receivers. A stand-alone `WTN` unit adds it to older ALGE timers
over a cable.[^manual][^estartw] ALGE describes the network as a mesh in which every device both
sends and receives and can pass on messages for the others.[^product][^manual]

See the [timers overview](index.md) for the shared background on timing consoles.

## Role in the timing system

A WTN network takes over the jobs that cables do in a wired ALGE system. A photocell or push button
sends its impulse to the timer by radio, and the running time goes back out over the same link to
a display board and to the results PC.[^cat2017][^leaflet] In swimming, ALGE uses it for its radio
semi-automatic package, in which each lane's timekeeper holds a radio push button instead of a
cabled one, and for diving scoring, in which each judge enters marks on a Timy3 W.[^cat2026]

## Network design

Two or more WTN-series devices make a network, and a device that cannot reach another directly can
reach it through a third. The 2017 catalogue says this lets each device act as a repeater, so the
network can reach beyond the range of a single link.[^manual][^cat2017] The WTN manual gives two
different limits on network size: 60 devices in its description and 32 in its section on the
master unit.[^manual]

One device in each network is the master and keeps the others synchronized. It is the device with
the lowest MAC address. If it drops out, for instance with a flat battery, the rest choose a new
master, and the first impulse sent during the changeover is lost.[^manual] A new device joining
also forces a resynchronization. Impulses triggered while it runs are held and sent once it ends,
tagged with their delay.[^manual] With a Timy3 in the network, the Timy3 is both master and time
server, so ALGE advises switching it on first and not cycling it during a competition; a restart
can lose impulses for up to five minutes while the network settles.[^timy3]

Every impulse reaches the timer 0.1 s after it was triggered, a fixed delay that the timer can
subtract to recover the true time of day. The manual gives the tolerance on that delay as
±0.0001 s in one section and ±0.0002 s in two others.[^manual] The Timy3 corrects the delay
automatically for its own radio; a Timy or Timy2 on an external unit must have the correction
switched on, and marks corrected times with a "t".[^manual][^timy3] An impulse that a
device fails to confirm is re-sent with its delay attached, and reaches a cabled timer over the
RS485 line of its connecting cable. After 90 seconds without confirmation the silent device is
dropped from the network.[^manual]

## Teams, frequencies and power

Networks are separated by team. There are 15 teams: nine single teams, 1–9, each on its own
frequency, and six joint teams, A–F, that share a frequency. Joint-team devices can relay one
another's traffic but ignore each other's data, which ALGE intends for neighbouring venues such as
two show-jumping rings.[^manual][^estartw] Devices without a display, such as the push button and
the display-board receiver, set their team on a 16-position rotary switch whose position 0 is a
factory test mode.[^pbmanual][^dbmanual] The WTN manual advises against running adjacent single
teams such as 1S and 2S side by side, because their frequencies interfere.[^manual]

Sources count the radio settings differently. The WTN and Timy3 manuals, the WTN leaflets and the
BANG2 documents give 16 frequencies or 16 teams. The 2017 catalogue, the Timy3 leaflet, the product
pages and the device manuals' team sections give 15.[^manual][^timy3][^bang2][^cat2017][^leaflet] Fifteen is
the number of teams a user can choose; the device manuals show 16 switch positions, one of them
the factory test setting.[^pbmanual][^dbmanual]

Transmit power is 10, 25, 50 or 100 mW. The factory setting is 10 mW, which the manuals give as
the European limit, against 100 mW in the United States.[^manual][^estartw] At 10 mW the range is
about 350 m in line of sight.[^manual] The BANG2 manual and leaflet give its radio about 300 m
instead.[^bang2] The e-Start and e-Start W manuals state that WTN works in the 4.2 GHz band, which
does not match the 2.4 GHz given in every other ALGE source.[^estartw]

## Devices

This section lists the devices ALGE names as members of the WTN series.

| Device | Role |
|---|---|
| `WTN` | Stand-alone unit with display, keypad and three AA cells; links a timer, display board, photocell or PC to the network[^manual][^product] |
| [Timy3 W and WP](alge-timy.md) | Timer with the radio built in; module off by default[^timy3] |
| [`WTN-PB`](../semi-automatic/pushbutton/alge-wtn-pb.md) | Radio push button[^pbmanual] |
| [`WTN-DB`](../../common/scoreboard-control/alge-wtn-db.md) | Receiver that clips to an ALGE display board and is powered by it[^dbmanual] |
| [`WTN-WS`](alge-wtn-ws.md) | Radio link for an anemometer and its display board (athletics)[^leaflet] |
| [`PR1aW`](alge-pr1aw.md) | Photocell with the radio built in[^cat2017] |
| [E-START W](../starter/alge-e-start.md) | Electronic start device with flash[^estartw] |
| [BANG W, BANG CW and BANG2](../starter/alge-bang.md) | Start speaker systems with the radio built in[^cat2017][^bang2] |
| [`USB-WTN`](alge-usb-wtn.md) | USB adapter, first made to link a WTN unit to a PC[^usbwtn] |

The stand-alone unit connects to a Timy, Timy2, [TdC 8000](alge-tdc-8000.md) or TdC 8001 timer over
a 25-pin cable, `280-03` or `280-09`, which carries timing channels 0–4, display-board data and the
RS485 line for late impulses.[^manual] The Timy3 manual says a Timy2 with an external unit works
almost like a Timy3, with two differences: the Timy3 can switch its module off to save power, and
on the Timy2 the radio impulses also appear on the banana sockets.[^timy3]

## Operation

Each device sends on one of five channels, `C0`–`C4`. ALGE assigns `C0` to the start, `C1` to the
finish and the rest to intermediate times, or to a second start and finish.[^manual] For lane
timing the Timy3 has a socket mode, in which each radio button is registered in turn and given its
own channel, up to nine. Times taken this way carry a "t" prefix.[^timy3][^tracktimer] The TrackTimer guide calls for socket mode from four lanes upward. It
adds that the E-START W cannot be registered this way and always stays in standard mode.[^tracktimer]

Settings made on one device spread to the others. A baud-rate change on a `WTN` unit applies to
every device then in the network, and the display-board receiver can only have its baud rate and
power set this way.[^manual][^dbmanual] Firmware follows the same path. One unit is updated from a
PC over cable `283-02` and then sends the update by radio to every device in its team. The Timy3
does the same from its own menu, which the Timy3 manual says takes up to 20 minutes in one section
and 15–45 minutes in another.[^manual][^timy3] Timy3 units can also synchronize their clocks with
one another over the network, once or every minute.[^timy3]

## Use in swimming and diving

In ALGE's radio semi-automatic swimming system each of up to eight lanes has a
[`WTN-PB`](../semi-automatic/pushbutton/alge-wtn-pb.md), and the start comes from an
[E-START W](../starter/alge-e-start.md) to a [BANG2](../starter/alge-bang.md) speaker and the
Timy3 WP. A [D-LINE](../../common/scoreboard/alge-d-line.md) board takes its data through a
`WTN-DB`.[^cat2026][^swimusa] The wired alternative uses the
[MC8](../deck-cabling/alge-mc8.md) cable. A recaller can also use a `WTN-PB` to send a false start
to the BANG2 by radio.[^bang2]

For diving, ALGE's 2017 and 2026 catalogues describe a scoring system that gives every judge a
Timy3 W, with the marks sent over WTN to a results PC through a `WTN` unit and a `USB-WTN`
adapter.[^cat2017][^cat2026] The 2026 catalogue's water polo system also lists a `WTN` and a
`WTN-PB`.[^cat2026]

## History

ALGE's firmware history for "the WTN family" begins with version 13.33 of 15 March 2013, but its
June 2013 entry already refers to new WTN hardware, so the system is older than the log. ALGE has
not published a launch date.[^changelog] The log records the first `WTN-PB` firmware in March
2014. It adds BANG2 support in 2019 and support for a "WTN2 system" in March 2022, which ALGE's
pages do not otherwise describe.[^changelog] The WTN, WTN-PB and WTN-DB manuals carry a European
declaration of conformity dated 12 November 2016.[^manual][^pbmanual][^dbmanual]

## Specifications

| | |
|---|---|
| Band | 2.4 GHz |
| Frequencies and teams | 16 radio frequencies; 15 teams (nine single, six joint) |
| Transmit power | 10, 25, 50 or 100 mW; 10 mW factory setting |
| Range | About 350 m in line of sight (about 300 m in BANG2 documents) |
| Timing channels | Five per device (`C0`–`C4`); up to nine in Timy3 socket mode |
| Radio delay | 0.1 s fixed, corrected by the timer |
| Network size | 60 or 32 devices (the manual gives both) |
| Stand-alone `WTN` unit | 80 × 140 × 40 mm, 360 g; three AA cells (alkaline or NiMH) or 8–24 VDC |
| Battery life, `WTN` unit | 15–70 h depending on power, temperature and traffic |
| Interfaces, `WTN` unit | RS232 2400–115,200 baud; display board 2400–19,200 baud; RS485 at 38,400 baud |

## Part numbers and accessories

This section lists the parts ALGE sells for the network.

| Part | Description |
|---|---|
| `WTN` | Stand-alone radio unit[^product] |
| [`WTN-PB`](../semi-automatic/pushbutton/alge-wtn-pb.md) | Radio push button[^pbmanual] |
| [`WTN-DB`](../../common/scoreboard-control/alge-wtn-db.md) | Display-board receiver[^dbmanual] |
| [`WTN-WS`](alge-wtn-ws.md) | Anemometer radio link[^leaflet] |
| [`USB-WTN`](alge-usb-wtn.md) | USB adapter[^usbwtn] |
| `WTN-SET1`, `WTN-SET2` | Training sets with a Timy3 W or WP and two PR1aW photocells[^cat2017] |
| `280-03`, `280-09` | 25-pin cable, `WTN` unit to timer (3 m, 9 m)[^manual] |
| `283-02` | `WTN` unit to PC serial port, 2 m[^manual] |
| `284-02` | `WTN` unit to display board, powering the unit from the board, 2 m[^manual] |
| `SPB1` | Bracket with hook-and-loop strap[^manual] |
| `PS12A` | Mains power supply[^manual] |

## See also

- [Timy](alge-timy.md): the timer with the radio built in
- [MC8 push-button cable](../deck-cabling/alge-mc8.md): the wired alternative for semi-automatic timing
- [WTN-PB](../semi-automatic/pushbutton/alge-wtn-pb.md): the radio push button
- [Timers](index.md): the timers overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Wireless Timing Network WTN manual](https://alge-timing.com/downloads/userGuides/WTN-BE.pdf) (Version E26-02-18).
[^pbmanual]: [ALGE-Timing, Wireless Timing Network Push Button manual](https://alge-timing.com/downloads/userGuides/WTN-PB-BE.pdf) (Version E23-11-02).
[^dbmanual]: [ALGE-Timing, Wireless Timing Network for Display Boards manual](https://alge-timing.com/downloads/userGuides/WTN-DB-BE.pdf) (Version E23-11-02).
[^usbwtn]: [ALGE-Timing, USB-WTN manual](https://alge-timing.com/downloads/userGuides/USB-WTN-BE.pdf) (Version E200228).
[^leaflet]: ALGE-Timing leaflets: [WTN](https://alge-timing.com/downloads/leaflets/WTN-PE.pdf); [WTN-WS](https://alge-timing.com/downloads/leaflets/WTN-WS-PE.pdf).
[^product]: [ALGE-Timing, WTN](https://alge-timing.com/en/product/1981/wtn) (product page, as of November 2026).
[^timy3]: [ALGE-Timing, Timy3 General](https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf) (version E25-03-10), 4.5, 6, 9.3, 9.9 and 11.
[^tracktimer]: [ALGE-Timing, Timy TrackTimer](https://alge-timing.com/downloads/userGuides/Timy-TrackTimer-BE.pdf) (version E23-11-02), section 4.
[^estartw]: [ALGE-Timing, e-Start W manual](https://alge-timing.com/downloads/userGuides/e-Start-W-BE.pdf) (Version E23-10-31), 1.1 and 2.3.
[^bang2]: [ALGE-Timing, Speaker System BANG2 manual](https://alge-timing.com/downloads/userGuides/BANG2-BE.pdf) (Version E23-11-14), 2.7 and 6.3.
[^cat2017]: [ALGE-Timing, The Sports Timing Experts](https://www.alge-timing.fi/images/ALGE-yleisesite_eng.compressed.pdf) (general catalogue, 2017), pp. 10–16, 24, 30, 35–36, 93 and 108.
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026), pp. 3, 17 and 18.
[^changelog]: [ALGE-Timing, Changes for the WTN Family](https://alge-timing.com/alge/download/uC/Change_WTN.txt) (firmware history, 2013–2023).
[^swimusa]: [ALGE-Swim USA, Systems](https://www.alge-swimusa.com/systems/) (US distributor).
