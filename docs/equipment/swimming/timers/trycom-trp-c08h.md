---
title: Trycom TRP-C08H converter
description: >-
  The TRP-C08H is a Trycom Technology USB converter with two RS232 and two isolated RS422/485
  ports, the base unit of the Swiss Timing INT131.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: TRP-C08H
infobox:
  - label: Manufacturer
    value: '[Trycom Technology](vendors/trycom.md)'
  - label: Part number
    value: '`TRP-C08H`'
  - label: Type
    value: USB to serial converter
  - label: Connection
    value: USB type B; two RS232 on 9-pin D-sub; two RS422/485 on screw terminals
  - label: Dimensions
    value: '151 × 111 × 26 mm'
  - label: Weight
    value: '395 g'
  - label: Status
    value: 'No longer listed by Trycom'
  - label: Manual
    value: 'TRP-C08H User''s Manual (Rev 1.0, December 2005)'
---

<!--
Research notes, Trycom TRP-C08H. Surfaced 2026-11-07 while building out swiss-timing-int131.md:
the INT131 panel drawing carries the legend "TRP-C08H USB To 4-Port RS232/422/485 Isolated
Converter".

Held and read in full: sources/vendors/trycom/accessories/trycom-trp-c08h-user-manual-rev1.0-2005
("TRP-C08H User's Manual, USB To 4-Port RS232/422/485 Isolated Converter", printed December 2005,
Rev 1.0; 13 pp.; PDF created 10 January 2006; copy hosted by the Italian distributor Elsist at
cdn.elsist.biz/Various/Trycom/TRP-C08H.pdf). Verified from it:
  - Trycom Technology Co., Ltd, then of Yingge Township, Taipei, Taiwan (trycom.com.tw).
  - Two RS232 (DTE, DB-9 male) and two RS422/485 ports over one USB link, the four ports showing up
    as COM ports; RS422 four-wire full duplex, RS485 two-wire half duplex with automatic direction
    control; 256-byte buffers; 1.2 to 115.2 kbit/s; 3000 V DC isolation and surge protection on
    the RS422/485 side; up to 4000 ft (1250 m).
  - RS422/485 and power on screw terminals (to AWG 12); DIN-rail mountable; external 10-30 V DC,
    500 mA, through a two-pin terminal block or a 5.5 x 2.1 mm jack, or USB bus power (220 mA),
    chosen by a dipswitch; 1.5 W external consumption.
  - 151 x 111 x 26 mm, 395 g, -20 to 65 C, 10-90 % humidity, CE.
  - Driver: Prolific PL-2303 on CD, with a DRemover98_2k removal tool; Windows 98, ME, 2000, XP,
    CE 3.0, Linux, Mac OS. No terminating resistor fitted; loop-back test utilities on the CD.
The Swiss Timing INT131 manual (3434.502.02, version 1.2, November 2007) reuses this manual's
introduction, feature list, specification list, serial and power notes and driver steps almost
word for word, with the name changed. Its own changes: 198 x 84 x 30 mm and 450 g, Tuchel sockets,
power fed out on the RS422 lines, a 4-pin Tuchel supply input and an instruction not to use the
jack. Verified by comparing the two texts.

Status: Elsist's Trycom page (elsist.biz/en/prodotto/convertitori-usb-seriale-trp-c08x/, read
2026-11-07) keeps the TRP-C08H manual (updated 4 May 2006) but sells only the TRP-C08 version 3.0
and TRP-C08D. Trycom's own site (trycom.com.tw, read 2026-11-07), now at Guishan District, Taoyuan
City, lists the TRP-C08 version 3.0, TRP-C08D and TRP-C08E (two RS232 and two RS422/485 ports) and
not the TRP-C08H. Whether the TRP-C08E is its direct successor is not stated. A search-result
snippet of another Elsist listing marked the TRP-C08H as an end-of-life product; not seen directly.

Sources:
  - Trycom Technology, TRP-C08H User's Manual, Rev 1.0, December 2005 (https://cdn.elsist.biz/Various/Trycom/TRP-C08H.pdf)
  - Elsist, Serial USB Converters TRP-C08x (https://www.elsist.biz/en/prodotto/convertitori-usb-seriale-trp-c08x/)
  - Trycom Technology home page (http://www.trycom.com.tw)
  - Swiss Timing, User's Manual INT131, 3434.502.02, version 1.2, November 2007 (https://www.swisstiming.com/pdfs/3434.502.02.pdf)
-->

This article is a stub. The `TRP-C08H` is a [Trycom Technology](../../../vendors/trycom.md) USB
converter with two RS232 and two isolated RS422/485 ports, and Swiss Timing built its
[INT131](swiss-timing-int131.md) converter around it.

See the [timers overview](index.md) for the shared background that applies to every timing
console.
