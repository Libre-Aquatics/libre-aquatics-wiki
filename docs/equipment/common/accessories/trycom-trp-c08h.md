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
    value: '151 × 111 × 26 mm (2005); 151 × 75 × 26 mm (from 2007)'
  - label: Weight
    value: '395 g'
  - label: Power
    value: 'USB bus, or 10–30 V DC external'
  - label: Introduced
    value: '2005'
  - label: Status
    value: 'No longer listed by Trycom (last listed 2022)'
  - label: Manual
    value: 'TRP-C08H User''s Manual, Rev 1.0 (December 2005) and Rev 1.7 (February 2014)'
---

<!--
Research notes, Trycom TRP-C08H. Surfaced 2026-11-07 while building out swiss-timing-int131.md
(the INT131 panel drawing carries the TRP-C08H's own legend). Built out into a full article
2026-11-17.

Documents held under sources/vendors/trycom/accessories/ and read in full:
  - TRP-C08H User's Manual, Rev 1.0, printed December 2005, 13 pp., PDF created 10 January 2006
    (Elsist copy). Trycom then at Yingge Township, Taipei. Pages 4, 6, 10 and 13 rendered with
    PyMuPDF for the panel drawing, DB-9 pinout, wiring and termination figures. Verified from it:
    two RS232 (DTE, DB-9 male) and two RS422/485 over one USB link, four COM ports; RS422/485
    format and rate detected automatically, RS485 direction switched automatically; 256-byte
    buffers; 1.2 to 115.2 kbit/s; 3000 V DC isolation and surge protection on the RS422/485
    side; 1,250 m; a 10-way screw terminal block (COMA and COMB each TX+/D+, TX-/D-, RX+, RX-,
    then DC 10-30V and GND) to AWG 12; DIN rail; 10-30 V DC 500 mA from the terminal block or a
    5.5 x 2.1 mm jack, or USB bus power at 220 mA, chosen by a slide switch beside the USB
    socket; 1.5 W; 151 x 111 x 26 mm, 395 g; -20 to 65 C; CE. LEDs PWR, RXA, TXA, RXB, TXB, the
    manual tying A and B to the RS422/485 ports COM-A and COM-B. DB-9: 1 DCD, 2 RXD, 3 TXD, 4 DTR,
    5 GND, 6 DSR, 7 RTS, 8 CTS, 9 RI. No terminating resistor fitted; the figures show 120 ohm
    across each pair at the line ends. Driver: Prolific PL-2303 from the CD, removal tool
    DRemover98_2k; Windows 98, ME, 2000, XP, CE 3.0, Linux, Mac OS. Test programs DEMO.EXE and
    the TRPCOM utility (screenshot shows version 1.1). Two figures are reused from other Trycom
    products: the termination drawing shows a unit with RS232 screw terminals, and the RS485
    figure is a TRP-C06 converter wired to a TRP-C60 I/O module with an 18-30 V supply. The
    panel label reads "Made in Taiwan" and states 3 kV opto-isolation.
  - TRP-C08H User's Manual, Rev 1.7, printed February 2014, 20 pp., PDF created 12 May 2014
    (Acceed copy, acceed.com/produkte/manuals/trycom/C08H_MANU.pdf). Trycom then at No. 35
    Zhongxing Road, Guishan Township, Taoyuan County. Describes revised hardware: USB 2.0
    controller, 512-byte FIFO per direction, 300 bit/s to 256 kbit/s, +/-15 kV ESD on all lines,
    USB power 260 mA, 0 to 65 C, 151 x 75 x 26 mm, 395 g, DIN rail optional or panel mount.
    Drivers: Android, Windows 98 to 8.1 including Vista 32/64, CE 5.0 to 7.0, Linux, Mac OS.
    Installation is by MSSetup.exe/MSUninst.exe and the device appears as "High-Speed USB Multi
    Serial Compound Device"; the uninstall section once calls the unit "MCSTRP-C08H". The LED
    list now ties RXB/TXB to the RS232 port. Contradiction inside the document: the features
    say no external supply is needed, but the power section still describes the USB PWR/EXT PWR
    switch, the screw-terminal input and a DC adapter. RS485 test uses a Trycom TRP-C28 module.
  - TRP-C08H datasheet, 1 p., PDF created 24 April 2013 (Acceed copy,
    acceed.com/produkte/pdfcatalog/trycom/TRP-C08H.pdf). Same figures as Rev 1.7, adds that each
    port has its own rate and format and that custom rates can be set; driver list stops at CE
    3.0.

Chip, inferred not stated: no Trycom document names the bridge in the later hardware. The
installer names and Device Manager string are those of the MosChip MCS7840 family (driver sites
list them under VID 9710, PID 7840), and the MCS7840 datasheet's feature list has the same
512-byte FIFO line. ASIX's AX78140 page (read 2026-11-17) calls that chip pin- and
driver-compatible with the MCS7840 but does not mention MosChip; driver sites list MCS78x0 drivers
under both MosChip and ASIX. Elsist's download area offers both Prolific and ASIX drivers for its
Trycom range. The ASIX link is therefore not cited in the article body.

Trycom web page history (Wayback Machine captures of trycom.com.tw/TRP-C08H.htm, 14 distinct
versions 2006-07-20 to 2022-01-17):
  - 2006-07-20 and 2006-09-24: matches Rev 1.0 (151 x 111 mm, 220 mA, -20 to 65 C), except the
    spec line gives 1.2 to 256 kbit/s while the intro on the same page says 115.2 kbit/s.
    Accessories: PWR-AD 15 V 1.2 A adapter, LI-USB-A/B 1.8 m cable, DIN rail kit.
  - 2007-12-05 and 2008-02-09: 151 x 75 x 26 mm; 300 bit/s to 256 kbit/s (the February 2008
    copy lists discrete rates from 75 bit/s); external 12 V/220 mA; -10 to 50 C operating, -20
    to 70 C storage; drivers still 98 to XP and CE 3.0; adapter PWR-AD 15 V 0.8 A; T-snap DIN
    adapter. Data bits listed as 5 to 8 or 16.
  - 2008-12-03: same, adapter now PWR-AD 12 V 1 A.
  - 2009-07-18: 260 mA by USB power; Vista 32/64 added. 2012-07-11: Windows 7 added.
  - 2013-08-21: matches the 2013 datasheet and Rev 1.7 (ESD, 0 to 65 C, Win 8.1, Android, CE
    5.0-7.0); cable LI-USBH-AB.
  - 2022-01-17 (last capture): Win10 added; cable LI-USB2.0-A/B. Copyright 2022 on other pages.
  - By March 2023 the site lists TRP-C08 version 3.0, TRP-C08D and TRP-C08E and has no
    TRP-C08H page. TRP-C08E (2023 capture): two RS232 and two RS422/485, 512-byte FIFO, 300 bit/s
    to 256 kbit/s, 260 mA, 0 to 65 C, 151 x 75 x 26 mm, 395 g, drivers to Windows 11; it lists
    surge and ESD protection but no isolation figure. Trycom does not call it a successor.
  - The same site lists other family members captured over the years: TRP-C08 (one port, from
    2003), TRP-C08S, TRP-C08U, TRP-C08M, TRP-C08X. Not researched; no pages.
Dates for the change to the narrower case: between 2006-09-24 and 2007-12-05.

Distributors: Elsist (Italy) store page, read 2026-11-17, sells TRP-C08 v3.0 (Prolific
PL2303GC) and TRP-C08D (Prolific PL2543) only; it keeps a login-protected TRP-C08H manual dated
05/04/2006 (day/month order unclear; an earlier read on 2026-11-07 noted 4 May 2006). A search
snippet earlier marked the TRP-C08H EOL at Elsist; not seen directly. Acceed (Germany), read
2026-11-17, still has a TRP-C08H product page at 155 EUR net with the Rev 1.7 manual; parts of
that page's text (aluminium case, warranty, FCC) are not in any Trycom document and were not
used. A search-engine summary attributing the PL2303GC chip, 6 Mbit/s and 260 mA to the
TRP-C08H mixed the TRP-C08 v3.0 and TRP-C08H pages; the PL2303GC belongs to the TRP-C08 v3.0.

INT131: Swiss Timing's manual (November 2007) repeats Rev 1.0's figures and the PL-2303 driver,
though by then Trycom's web page already showed the revised case. Which hardware revision is
inside a given INT131 is not documented.

Accessory part numbers above (PWR-AD, LI-USB, T-snap, DIN-RAIL-R) are named here only, not in
the article, and have no pages.

Sources:
  - Trycom Technology, TRP-C08H User's Manual, Rev 1.0, December 2005 (https://cdn.elsist.biz/Various/Trycom/TRP-C08H.pdf)
  - Trycom Technology, TRP-C08H User's Manual, Rev 1.7, February 2014 (https://acceed.com/produkte/manuals/trycom/C08H_MANU.pdf)
  - Trycom Technology, TRP-C08H datasheet, 2013 (https://acceed.com/produkte/pdfcatalog/trycom/TRP-C08H.pdf)
  - Trycom Technology, TRP-C08H product page, Wayback captures 2006-2022 (http://www.trycom.com.tw/TRP-C08H.htm)
  - Trycom Technology, TRP-C08E product page, Wayback capture 2023 (http://www.trycom.com.tw/TRP-C08E.htm)
  - Trycom Technology home page (https://trycom.com.tw), read 2026-11-17
  - Elsist, Serial USB Converters TRP-C08x (https://www.elsist.biz/en/prodotto/convertitori-usb-seriale-trp-c08x/)
  - Acceed, TRP-C08H (https://acceed.com/en/product/trp-c08h)
  - ASIX, AX78140 product page (https://www.asix.com.tw/en/product/Interface/USB_Bridge/AX78140)
  - MosChip, MCS7840 datasheet, mirror (https://elcodis.com/parts/6114923/mcs7840_p7.html)
  - Swiss Timing, User's Manual INT131, 3434.502.02, version 1.2, November 2007 (https://www.swisstiming.com/pdfs/3434.502.02.pdf)
  - Carmanah support article on PL-2303 adapters under Windows 10/11, September 2025
-->

The TRP-C08H is a USB-to-serial converter made by [Trycom Technology](../../../vendors/trycom.md)
of Taiwan. A single USB connection gives the host computer four COM ports: two RS232 and two
RS422/485, the latter galvanically isolated.[^manual] Trycom documented it from December 2005 and
listed it on its website until 2022, in two hardware versions.[^manual][^manual14][^web2022] In
aquatics it is the base of the Swiss Timing [INT131](swiss-timing-int131.md), the cabled link
between judges' keypads and Swiss Timing's diving and artistic swimming scoring
software.[^int131]

## Role in the timing system

This section covers where the converter appears in aquatics. Trycom sells the TRP-C08H as a
general industrial converter, with nothing in its documents specific to sport.[^manual] Swiss Timing took the unit,
fixed its own connector block to one end, and sold the result as the INT131 under part number
`3434.790`.[^int131] The INT131 article covers that product, its Tuchel connectors and its use with
[Omega MTE keypads](../../diving/omega-mte-keypads.md); this page covers the Trycom unit itself.
The INT131 manual of November 2007 repeats the figures and the Prolific driver from Trycom's 2005
manual, so it describes the first version of the hardware. Which version is inside a particular
INT131 is not documented.[^int131][^web2007]

## Hardware versions

Trycom changed the TRP-C08H's hardware while keeping the part number. The manual's revision
history is not published, but the 2005 and 2014 manuals and the archived product pages show two
distinct versions.[^manual][^manual14][^web2006][^web2007][^web2013]

| | First version | Later version |
|---|---|---|
| Documented by | Manual Rev 1.0 (December 2005); web page 2006 | Web page from December 2007; datasheet 2013; manual Rev 1.7 (February 2014) |
| Case | 151 × 111 × 26 mm | 151 × 75 × 26 mm |
| Serial rates | 1.2–115.2 kbit/s | 300 bit/s to 256 kbit/s |
| Buffer | 256 bytes each way | 512-byte FIFO each way |
| USB | 1.0, 1.1 and 2.0 compatible | USB 2.0 controller |
| USB bus current | 220 mA | 260 mA |
| Operating temperature | −20 to 65 °C | 0 to 65 °C (−10 to 50 °C on the 2007–2008 pages) |
| Driver | Prolific PL-2303 | Installed as a "High-Speed USB Multi Serial Compound Device" |

The narrower case first appears on a capture of Trycom's page from December 2007; captures from
July and September 2006 still give the original dimensions.[^web2006][^web2007] Later pages added
±15 kV electrostatic-discharge protection on all serial lines and newer Windows drivers, and the
2013 datasheet and 2014 manual match the last version of the page.[^web2013][^datasheet][^manual14]

Trycom's own figures are not always consistent. The 2006 page gives 115.2 kbit/s in its
introduction and 256 kbit/s in its specification list.[^web2006] The 2014 manual says the unit
needs no external power supply, yet the same manual still describes the switch, terminal block
and adapter for one.[^manual14]

## Design and construction

This section describes the unit as drawn in the 2005 manual. The two 9-pin RS232 sockets, labelled
COMC and COMD, sit on one short end of the case. The opposite end carries a 10-way screw terminal
block for wires up to AWG 12: four terminals for each of the two RS422/485 ports (COMA and COMB),
then the external supply and ground. The USB type B socket, the power-source switch and a DC jack
are on one side, and the case has a DIN-rail clip on the back.[^manual] The later version can be
fixed to a DIN rail with an optional adapter or screwed to a panel.[^manual14]

Five LEDs on the front show power and the transmit and receive activity of ports A and B. The 2005
manual ties A and B to the two RS422/485 ports, while the 2014 manual ties B to an RS232
port.[^manual][^manual14] The front label states that opto-isolators give 3 kV of protection on
the RS422/485 lines.[^manual]

## Serial ports and wiring

Both RS232 ports are wired as data terminal equipment, the same as a PC's own serial port, and carry
the full set of modem-control signals. A device that is also DTE, such as another computer, needs a
null-modem cable; a DCE device takes a straight-through cable. Hardware handshaking works only
when RTS/CTS flow control is selected in the software.[^manual]

| Pin | Signal | Pin | Signal |
|---|---|---|---|
| 1 | DCD | 6 | DSR |
| 2 | RXD | 7 | RTS |
| 3 | TXD | 8 | CTS |
| 4 | DTR | 9 | RI |
| 5 | GND | | |

Each RS422/485 port works in one of two modes, and the converter chooses between them itself. In
RS422 mode the four terminals form two differential pairs, one for each direction, and are wired
crosswise to the far device: the converter's TX+ to the device's RX+, and so on. In RS485 mode only
the first two terminals (D+ and D−) are used, several devices can share the pair, and the converter
switches the line between sending and receiving without a control signal from the software. Data
format and speed are also detected automatically. Lines may run up to 1,250 m (4,000 ft).[^manual]

The unit has no termination resistors. The manual leaves them to the installer and shows a 120 Ω
resistor across each pair at the ends of the line.[^manual]

## Power

The converter can draw its power from the USB bus or from an external supply, chosen with a slide
switch next to the USB socket. The external input accepts 10–30 V DC at up to 500 mA through
either the two supply terminals or a 5.5 × 2.1 mm DC jack, and the unit consumes 1.5 W. On USB
power it draws 220 mA in the first version and 260 mA in the later one.[^manual][^manual14] Trycom
offered a mains adapter as an option.[^web2006][^web2013]

## Drivers and compatibility

This section covers the software side of both versions. The first version uses the PL-2303
USB-to-serial chip from [Prolific Technology](../../../vendors/prolific.md). Its CD carries
Prolific's driver and a separate tool for removing old driver versions, with support listed for
Windows 98, ME, 2000, XP and CE 3.0, Linux and Mac OS. Windows numbers the four ports itself, so
they do not take predictable COM numbers.[^manual] Swiss Timing ships the same Prolific driver with
the INT131.[^int131] A 2025 support article from Carmanah reports that current Windows 10 and 11
drivers refuse adapters built on Prolific's older PL-2303 chip revisions.[^carmanah] Trycom's
manual does not say which revision the TRP-C08H uses.

The 2014 manual installs a different driver, with Windows unsigned-driver warnings that the user is
told to accept. It names the device "High-Speed USB Multi Serial Compound Device" and once calls the
unit "MCSTRP-C08H". Its driver list runs from Windows 98 to Windows 8.1, with CE 5.0–7.0, Android,
Linux and Mac OS; the last version of the product page added Windows 10.[^manual14][^web2022]
Trycom does not name the chip in this version. The device name, the installer and the 512-byte FIFO
all match the MCS7840, a USB 2.0 bridge with four serial ports from
[MosChip Semiconductor](../../../vendors/moschip.md), so the later TRP-C08H is probably built on
that chip.[^mcs7840] A unit's version can therefore
matter when choosing a driver for an older INT131 or TRP-C08H.

Both manuals give loop-back test procedures and Trycom test programs (DEMO.EXE in 2005, TRPCOM in
2014) for checking each port.[^manual][^manual14]

## Product line and status

The TRP-C08H belongs to Trycom's TRP-C08 series of USB converters. Trycom's product page for it
was last archived in January 2022. By March 2023 the company's site listed the
[TRP-C08 version 3.0](trycom-trp-c08.md), the [TRP-C08D](trycom-trp-c08d.md) and the
[TRP-C08E](trycom-trp-c08e.md) in the series, and no longer the TRP-C08H.[^web2022][^c08e]

The TRP-C08E has the same port layout and almost the same specification as the later TRP-C08H:
two RS232 and two RS422/485 ports, a 512-byte FIFO, 300 bit/s to 256 kbit/s, and the
151 × 75 × 26 mm, 395 g case. Unlike the TRP-C08H, its page gives no isolation voltage. Trycom does
not describe the TRP-C08E as the TRP-C08H's replacement.[^c08e][^web2022]

As of November 2026 an Italian distributor no longer sells the TRP-C08H but still offers its
manual, and a German distributor still has a product page for it.[^elsist][^acceed]

## Compared with the INT131

The INT131 is a TRP-C08H with a Swiss Timing connector block fixed to one end, which makes it
198 × 84 × 30 mm and 450 g. The block replaces the RS422/485 screw terminals with Tuchel sockets,
adds a Tuchel power input, and feeds power out on the RS422 sockets for connected devices. Swiss
Timing tells users not to use the Trycom DC jack. The INT131 article gives the full
comparison.[^int131][^manual]

## Specifications

Figures are from the 2005 manual for the first version and the 2014 manual for the later
version.[^manual][^manual14]

| Specification | First version (2005) | Later version (2014) |
|---|---|---|
| Host connection | USB 1.0, 1.1 or 2.0, type B socket, up to 12 Mbit/s | USB 2.0, type B socket |
| Serial ports | 2 × RS232 (DTE, 9-pin D-sub); 2 × RS422/485 (screw terminals) | Same |
| RS422 | 4-wire full duplex | Same |
| RS485 | 2-wire half duplex, automatic direction control | Same |
| Data rate | 1.2–115.2 kbit/s, automatic | 300 bit/s to 256 kbit/s, automatic |
| Data formats | 5–8 data bits; 1, 1.5 or 2 stop bits; none, odd, even, mark or space parity | Same |
| Buffer | 256 bytes each way | 512-byte FIFO each way |
| RS422/485 distance | Up to 1,250 m (4,000 ft) | Same |
| Isolation | 3,000 V DC on the RS422/485 side | Same |
| Line protection | Surge, short circuit and voltage spikes on RS422/485 | Adds ±15 kV ESD on all serial lines |
| Terminals | Screw, to AWG 12 | Screw, AWG 12–30 |
| Power | USB bus, 220 mA; or 10–30 V DC external, 1.5 W | USB bus, 260 mA; external input still described |
| Operating temperature | −20 to 65 °C | 0 to 65 °C |
| Storage temperature | −20 to 65 °C | −20 to 65 °C |
| Humidity | 10–90 %, non-condensing | Same |
| Dimensions | 151 × 111 × 26 mm | 151 × 75 × 26 mm |
| Weight | 395 g | 395 g |
| Mounting | DIN rail | DIN rail (optional) or panel |
| Conformity | CE | Not stated |

## Part numbers and accessories

This section lists the converter and the products built on or alongside it.

| Item | Part number | Article |
|---|---|---|
| Converter | `TRP-C08H` | This article |
| Swiss Timing version | `3434.790` | [INT131](swiss-timing-int131.md) |
| One-port converter | `TRP-C08` | [TRP-C08](trycom-trp-c08.md) |
| One RS232 and one RS422/485 port | `TRP-C08D` | [TRP-C08D](trycom-trp-c08d.md) |
| Two RS232 and two RS422/485 ports | `TRP-C08E` | [TRP-C08E](trycom-trp-c08e.md) |

## See also

- [INT131](swiss-timing-int131.md): the Swiss Timing converter built on the TRP-C08H
- [TRP-C08E](trycom-trp-c08e.md): Trycom's current four-port converter in the same series
- [Omega MTE keypads](../../diving/omega-mte-keypads.md): the judges' keypads the INT131 connects
- [Timers](../../swimming/timers/index.md): the timing-console overview
- [Trycom Technology](../../../vendors/trycom.md): the manufacturer
- [MosChip Semiconductor](../../../vendors/moschip.md) and [Prolific Technology](../../../vendors/prolific.md): makers of the USB bridge chips
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Trycom Technology, TRP-C08H User's Manual](https://cdn.elsist.biz/Various/Trycom/TRP-C08H.pdf) (Rev 1.0, December 2005; Elsist copy).
[^manual14]: [Trycom Technology, TRP-C08H User's Manual](https://acceed.com/produkte/manuals/trycom/C08H_MANU.pdf) (Rev 1.7, February 2014; Acceed copy).
[^datasheet]: [Trycom Technology, TRP-C08H datasheet](https://acceed.com/produkte/pdfcatalog/trycom/TRP-C08H.pdf) (2013; Acceed copy).
[^web2006]: [Trycom Technology, TRP-C08H product page](https://web.archive.org/web/20060720172108/http://www.trycom.com.tw:80/TRP-C08H.htm) (archived July 2006).
[^web2007]: [Trycom Technology, TRP-C08H product page](https://web.archive.org/web/20071205062834/http://www.trycom.com.tw:80/TRP-C08H.htm) (archived December 2007).
[^web2013]: [Trycom Technology, TRP-C08H product page](https://web.archive.org/web/20130821203510/http://www.trycom.com.tw:80/TRP-C08H.htm) (archived August 2013).
[^web2022]: [Trycom Technology, TRP-C08H product page](https://web.archive.org/web/20220117213229/http://www.trycom.com.tw/TRP-C08H.htm) (archived January 2022).
[^c08e]: [Trycom Technology, TRP-C08E product page](https://web.archive.org/web/2023/http://www.trycom.com.tw/TRP-C08E.htm) (archived March 2023).
[^int131]: [Swiss Timing, User's Manual INT131](https://www.swisstiming.com/pdfs/3434.502.02.pdf) (3434.502.02, version 1.2, November 2007).
[^carmanah]: [Carmanah, Why does my serial to USB adapter not work in Windows 10/11?](https://support.carmanah.com/article/445-serial-to-usb-adapter-issue) (September 2025).
[^mcs7840]: [MosChip, MCS7840 USB 2.0 to four serial ports datasheet](https://elcodis.com/parts/6114923/mcs7840_p7.html) (third-party mirror).
[^elsist]: [Elsist, Serial USB Converters TRP-C08x](https://www.elsist.biz/en/prodotto/convertitori-usb-seriale-trp-c08x/).
[^acceed]: [Acceed, TRP-C08H](https://acceed.com/en/product/trp-c08h).
