---
title: Colorado Time Systems wireless judging
description: >-
  Colorado Time Systems wireless judging pairs handheld judges' terminals with a radio
  interface on the timing console, in 900 MHz and 2.4 GHz generations, for diving and
  artistic swimming scoring.
updated: 2026-10-07
tags:
  - Equipment
  - Diving
  - Artistic swimming
  - Scoring
infoboxTitle: Wireless judging
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WJT-001`, `WIO-001` (900 MHz); `WJT-003`, `WIO-003` (2.4 GHz)'
  - label: Type
    value: Wireless judging system
  - label: Connection
    value: 900 MHz or 2.4 GHz radio; USB or CTS I/O cable to the console
  - label: Dimensions
    value: 7.5 × 5 × 2 in (19 × 12.7 × 5 cm), WJT-003
  - label: Weight
    value: 17.2 oz (487 g), WJT-003
  - label: Power
    value: Two or four AA cells per terminal
  - label: Introduced
    value: By 2010
  - label: Status
    value: 2.4 GHz listed in 2026; 900 MHz sold refurbished only
  - label: Manual
    value: '[Wireless Judging 2.4 GHz Frequency User Guide (F961 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Judging%20Terminals/wireless_judging_2ghz.pdf)'
---

<!--
Research notes, CTS wireless judging. Stub created September 2026 (as "900 MHz wireless
judging") while building out the WA-1; built out October 2026 to cover both radio generations,
because the two share the terminal and interface names, the key layout, the console software and
the operating procedure, and differ in radio, channel plan and battery figures.

Documents held and read in full (sources/vendors/colorado-time-systems/):
  - accessories/...-f941: Wireless Judging 900 MHz Frequency User Guide, F941 Rev. 20110720,
    (c)2011, 8 pp. FCC statements for the WIO and the WJT both give FCC ID Q7V-3F090003X, which
    the guide calls a pre-certified Wi.232DTS module with an RP-SMA antenna connector on the WIO.
    31 channels, of which 1-8 are for sites that have neither of CTS's 900 MHz pace clocks nor a WA-1; events
    at least six channels apart (worked example 10/16/22/28). System 5 on the I/O cable is fixed
    at channel 10. System 6 needs Diving 1.216 or later. Batteries: 2 AA about 8 h, 4 AA up to
    16 h, with two dummy cells supplied to fill the empty bay. Adds a WJT "Noisy" setting
    (default off; on means transmit over interference rather than wait) that is not saved at
    power-off. The CTS-hosted copy is the same revision (PDF re-saved 2020).
  - accessories/...-f961: Wireless Judging 2.4 GHz Frequency User Guide, F961 Rev. 201106,
    (c)2011. Page 4 is an image only (the .txt has nothing for it): a CE declaration dated
    20 June 2011 for WIO-003 and WJT-003 (RoHS, EMC and low-voltage directives), and FCC
    statements naming FCC ID OUR-XBEE-PRO for both units. 12 channels; events at least two
    apart (1/3/5/7); System 5 fixed at channel 1; Diving 1.218 or later; 2 AA about 6 h, 4 AA
    up to 12 h. No Noisy setting. The CTS-hosted copy is a later revision, F961 Rev. 202007
    ((c)2020), downloaded and compared October 2026: text otherwise unchanged apart from contact
    details, but the declaration is redated 20 July 2020 against the 2011/2014 directives and
    the FCC statements now read OUR-XBEE-PRO or MCQ-XBEE3 (the Digi XBee 3), the same pair the
    WHC-2, WHC-1, WA-3 and slim pace clock manuals give.
  - accessories/...-terminals-increase: WJT-003 sheet, Revised 08/12. CTS also hosts a
    Rev 03/14 version (Datasheets/Wireless_JT.pdf, downloaded October 2026) with the same
    figures. Both: 12 channels, up to 99 terminals plus a referee terminal, 4 AA for 16 h,
    7.5 x 5 x 2 in (19 x 12.7 x 5 cm), 17.2 oz (487 g), range over 250 ft (76 m), 4-line
    display with adjustable backlight and contrast, battery level on one key press. The 16 h
    figure disagrees with F961's 12 h for four cells, and equals F941's 900 MHz figure.
  - software/...-f871: System 6 Diving guide F871 Rev. 20100817 ((c)2010). Already has the WIO
    on the System 6's USB "CTS Expansion Ports", but its channel menu offers only 1-4 and says
    those four are separate from every other CTS wireless product. The CTS-hosted copy is
    F871 Rev. 20191210 (downloaded October 2026, 56 pp.), which rewrites that menu: it names
    WIO-001 and WIO-003, identifies the 2.4 GHz kit by a silver WIO and gray side grips on the
    WJTs and the 900 MHz kit by a blue WIO and blue grips, gives 1-12 for 2.4 GHz and 31 for
    900 MHz (prefer 9-31), and adds a Release All Judges softkey that powers the terminals
    down between events. Both revisions: the WIO must be plugged in before entering Diving;
    the header shows which judges' interface is attached; a judge's change request is shown
    as a magenta box that the operator grants by pressing that judge's key; a referee
    terminal (ID 0) sends balk and failed-dive calls; WJT Management lists battery levels.
    What the 2010 four-channel scheme was (an earlier radio, or early firmware) is unresolved.
  - software/cts-wireless-synchro: Wireless Synchro sheet, Revised 09/13: WJT-003 and WIO-003
    in the synchro package R-8700-0159 / SYNCHRO-03; one terminal per judge plus one or two
    spares, one interface plus an optional spare. (The tracker row reads R-8700-0159 as the
    software alone; the sheet's layout is ambiguous.)
  - Catalogues: the 2008 display catalogue lists "Remote Judging Terminals" for System 6
    diving and synchro (no wireless); the 2011 catalogue lists "Wireless Judging Terminals"
    for diving (System 6 or System 5) and for synchro with the Wireless Synchro software; the
    2015 catalogue specifies 2.4 GHz terminals and interface boxes for both sports.
  - software/cts-gen7-diving-lightning (Rev 08/23) and timers-consoles/...-f1022 (Gen7 Diving
    F1022 Rev 202510): the Gen7 system is wired only (JT-01, CB-01, IH-01); neither mentions
    the WIO or WJT. No Gen7 support for the wireless terminals was found.

Web (October 2026):
  - CTS product pages: Wireless Judging Terminals (WJT-003), linking F961 and the datasheet,
    compatible with System 5 or System 6 through the WIO; Wireless Judging Interface Box (WIO),
    no model number on the page.
    https://coloradotime.com/products/wireless-judging-terminals-wjt-003
    https://coloradotime.com/products/wireless-judging-interface-box-wio
  - CTS shop, refurbished 900 MHz units: WJT-001 terminal $300.00 (was $425.00), sold out; WIO-001
    interface $145.00 (was $238.00), in stock, for WJT-001 or WJT-001.S terminals. Both say to buy
    them only to extend an existing 900 MHz set-up, and name the System 6 (the WIO's URL also says
    System 5). One-year warranty, 50% restocking fee.
  - Wayback Machine: CTS judging pages of June 2012 (captured January 2013 and May 2014) list
    "Wireless IO Box" and "Wireless Judging Terminal" under diving and "Wireless Judging
    Terminals" and "Wireless Synchro Package" under synchro, beside wired "Judging Terminals"
    for System 5 or System 6. A CTS news item of 9 April 2012 has USA Synchro's Toby Smith
    saying CTS supplied the judges' wireless terminals for the 2012 US national synchro
    championships in Mesa. Wired-terminal sources (2002 web page, 2004 System 5 sheet) are on
    judging-terminals.md.
  - SwimSwam republished CTS press releases (both carry a "courtesy of CTS" credit, so they are
    CTS's words): 10 June 2015, FINA and USA Diving now asking for wired terminals at national
    and international events instead of the wireless units that had been the norm, with CTS
    showing its new wired terminals at the USA Diving synchronized nationals and the FINA Puerto
    Rico Grand Prix; 25 May 2016, release of Gen7 diving equipment built to meet that request.
    Athletic Business carries the same releases (403 to fetch).
  - Rulebooks: World Aquatics Competition Regulations 2026 allow flash cards where electronic
    scoring is unavailable and have judges flag an unsafe dive through the scoring equipment;
    NCAA rules call for backup scoresheets when terminals feed a computer. Neither says anything
    about wired versus wireless, so nothing from them is used here.

Not established: introduction dates for each generation; whether the 900 MHz kit or the
2.4 GHz kit came first (both guides date from mid-2011, the 2.4 GHz declaration a month before
the 900 MHz guide); what -001.S means; WJT-001 dimensions and weight; new prices; when the
900 MHz kit was withdrawn.
-->

Colorado Time Systems (CTS) wireless judging is a system of handheld judges' terminals and a
radio interface box that sends diving and artistic swimming scores to a CTS timing console or a
laptop by radio rather than over deck cables.[^f941][^f961] CTS has built it in two radio
generations, a 900 MHz system with the terminal `WJT-001` and interface `WIO-001`, and a 2.4 GHz
system with the `WJT-003` and `WIO-003`; both work with the [System 6](../swimming/timers/system-6.md)
and [System 5](../swimming/timers/system-5.md) consoles and with the CTS synchro scoring
software.[^f871b][^ctswjt] The 2.4 GHz terminal is still listed by CTS in 2026, while the
900 MHz units are sold only as refurbished parts for existing installations.[^ctswjt][^shopwjt][^shopwio]

## Role in the scoring system

This section places the wireless system among CTS's judging products. The general background on
judging and scoring hardware is on the [diving equipment overview](index.md).

The system replaces the wired [judging terminals](judging-terminals.md) that CTS sold for the
System 5 and System 6, each cabled to a judging interface box at the console.[^s5jt][^cts2012]
With wireless judging, the interface box (WIO) is the only part cabled to the console, and each
judge holds a battery-powered terminal (WJT).[^f941] In diving, the console's Diving program
controls the interface; in synchronized swimming the interface is run from a Windows laptop
with the CTS synchro program, which CTS calls Wireless Synchro or [SynchroMM](../../software/synchromm.md).[^f941][^synchro13]
Scores can still be keyed in by hand at the console or laptop.[^f871b][^synchro13]

At elite diving events CTS now supplies wired equipment instead. In a June 2015 release, CTS
said that World Aquatics (then FINA) and USA Diving were asking for wired terminals at national
and international events in place of the wireless units that had been the norm, and in May 2016
it released [Gen7 wired judging](gen7-wired-judging.md) in response.[^ss2015][^ss2016]

## Generations

This section sets out the two radio generations and an earlier channel scheme.

The two generations share their names, key layout and console software, and differ mainly in
the radio. CTS's 2019 System 6 Diving guide tells them apart by colour: the 900 MHz kit has a
blue interface box and blue side grips on the terminals, and the 2.4 GHz kit a silver box and
gray grips.[^f871b]

| | 900 MHz | 2.4 GHz |
|---|---|---|
| Terminal and interface | `WJT-001`, `WIO-001` | `WJT-003`, `WIO-003` |
| Radio module | FCC ID `Q7V-3F090003X` (Wi.232DTS) | FCC ID `OUR-XBEE-PRO`; from 2020 also `MCQ-XBEE3` |
| Channels | 31 | 12 |
| Spacing between simultaneous events | At least 6 channels | At least 2 channels |
| Fixed channel with a System 5 | 10 | 1 |
| System 6 Diving version needed | 1.216 or later | 1.218 or later |
| Battery life, two or four AA cells | About 8 h or 16 h | About 6 h or 12 h (guide); 16 h on four cells (datasheet) |

The 900 MHz radio is the same module CTS fits to its [wireless pace clocks](../common/pace-clock/pace-clock-shot-clock.md)
and the [Sky-Fi WA-1](../common/scoreboard-control/wa-1.md) scoreboard adapter, and the 2.4 GHz
radio belongs to the Digi XBee family used in CTS's later 2.4 GHz controllers and
adapters.[^f941][^f961][^fccpro] The 2020 revision of the 2.4 GHz guide names the XBee 3 as an
alternative module.[^f961b][^fcc3]

The 2.4 GHz battery figures disagree between CTS's documents. The 2.4 GHz guide gives about
6 hours on two cells and up to 12 hours on four, while the 2012 and 2014 datasheets for the
`WJT-003` give 16 hours on four cells, which is the figure the 900 MHz guide gives for its own
terminals.[^f961][^wjtds]

The 2010 edition of the System 6 Diving guide describes a third channel plan. It already
connects a WIO to the console's USB port, but its channel setting offers only channels 1–4,
which it says are separate from every other CTS wireless product.[^f871] The 2019 edition
replaces that with the 12-channel and 31-channel plans above.[^f871b] Which radio the
four-channel scheme belonged to is not documented.

## Design and hardware

This section describes the two parts of the system.

The wireless interface (WIO) is a box with a separate antenna, fitted at set-up. It connects
to a System 6 or a laptop by USB, or to a System 5 by CTS's standard I/O cable.[^f941][^f961] On the System 6 it
plugs into either of the two USB ports labelled CTS Expansion Ports.[^f871b] All its settings
are made from the console or the synchro software; it has no controls of its own that the guides
describe.[^f941]

The wireless judging terminal (WJT) is a handheld unit with a numeric keypad, Enter and Clear
keys, CHANGE, MENU and STATUS keys, and a power button placed between CHANGE and
MENU.[^f941] The diving referee's terminal adds BALK and FAIL functions.[^f941] The `WJT-003` has a four-line display
whose backlight and contrast each judge can adjust, measures 7.5 × 5 × 2 in (19 × 12.7 × 5 cm),
weighs 17.2 oz (487 g), and has a range CTS gives as more than 250 ft (76 m).[^wjtds] CTS says
the terminals were designed for use on a pool deck.[^wjtds]

Each terminal runs on two AA cells, or four for longer sessions. When only two cells are used,
two supplied dummy cells fill the other bay so that the batteries cannot move if the terminal is
dropped.[^f941][^f961] The guides note that many facilities use rechargeable cells.[^f941]

## Console and software support

This section lists what each console and program supports.

| Host | Connection | Features |
|---|---|---|
| System 6, Diving program | USB | Channel choice, dive information on the terminals, change requests, referee terminal, terminal management |
| System 5 | CTS I/O cable | Fixed channel; no change requests |
| Laptop with Wireless Synchro (SynchroMM) | USB | Channel choice, change requests, synchro score entry |
| Gen7 | None | Uses the separate wired Gen7 terminals |

The guides limit change requests to the System 6 and SynchroMM; the System 5 does not support
them.[^f941] The Gen7 diving datasheet and the Gen7 Diving guide describe only wired
terminals, and neither mentions the WIO or WJT.[^gen7ds][^f1022]

In synchronized swimming the terminals were sold as part of a CTS package with two portable
scoreboards, two wireless scoreboard adapters and the SynchroMM software, under package number
`SYNCHRO-03`.[^synchro13] CTS's guidance for that package is one terminal per judge plus one or
two spares, and one interface box with an optional spare.[^synchro13]

## Operation

This section covers setting up the system and running an event.

### Setting up

The operator fits the antenna to the interface box and connects it to the console or laptop.
On the System 6 this must be done before the Diving program is started; otherwise the wireless
option does not appear, and the operator has to leave Diving, connect the box and start it
again.[^f871b] With the box detected, the Diving screen header shows a wireless judges'
interface rather than the standard wired one.[^f871b]

Each terminal is switched on and given a judge number, its JT ID, from 1 to 99. ID 0 is kept
for the diving referee.[^f941] The terminal's channel must match the interface's. The judge
number and channel are set from the terminal's MENU key, which also holds the backlight and
contrast settings; the guides tell judges not to change the number or channel without the
operator's agreement.[^f941] Settings survive power-off.[^f941]

### Scoring

A judge types the award and presses Enter, keying 6 for 6.0 or 65 for 6.5.[^f941] In diving,
the terminals can also display the current dive's number and degree of difficulty and the
diver's number, if the System 6 operator turns that option on.[^f871b] In synchronized
swimming, the terminal shows the routine, the judge's number and which score is due next.[^f941] STATUS shows the terminal's judge number, its
battery level and the state of its link to the interface.[^f941]

A judge who has already sent a score can press CHANGE to ask to amend it. On the System 6 the
request appears as a magenta box around that judge's score; the operator can ignore it, or grant
it by pressing that judge's key, after which the judge enters the new score.[^f871b][^f941]

The referee's terminal shows the judges' scores as they arrive. Only it can call a balk or a
failed dive. A balk lets the judges' scores through and has the System 6 apply a two-point
deduction; a failed dive blocks the other terminals and sets every score to 0.0.[^f941][^f871b]
Without a referee terminal, the console operator enters these calls with two-key combinations
on the System 6.[^f871]

### Managing terminals

The System 6's Wireless JT Management screen lists every terminal on the interface's channel
with its battery level.[^f871b] From there the operator can release one terminal, for example to
replace one with flat batteries or one logged in under the wrong number, or, in the 2019 guide,
release them all, which powers them down between events to save their batteries.[^f871b]
Terminals are released automatically when the System 6 is switched off or the interface is
unplugged; CTS warns against unplugging it during a meet.[^f871b]

## Channels and interference

This section covers channel planning, which differs between the two generations.

Simultaneous events each need their own console or laptop and their own interface box, on
separate channels, with each panel's terminals set to its own event's channel.[^f941][^f961] The
900 MHz guide asks for at least six channels between events and the 2.4 GHz guide at least
two.[^f941][^f961]

The 900 MHz system shares its first eight channels with CTS's other 900 MHz products. Its guide
keeps channels 1–8 for sites without any of those pace clocks or WA-1 adapters,
and the 2019 System 6 guide recommends channels 9–31.[^f941][^f871b]

For terminals that respond only intermittently, both guides suggest trying other channels and
checking the spacing between events. The 900 MHz terminals also have a "Noisy" setting, off by
default, that makes a terminal transmit over interference rather than wait for a clear channel;
CTS says it helps in some places and not others, and it resets to off whenever the terminal is
switched off.[^f941] The guides assign troubleshooting to the console or synchro operator rather
than the judges.[^f941]

## History

This section traces the system from CTS's wired terminals to its replacement at elite events.

CTS sold wired judging terminals for the System 5 by 2002, and its 2008 display catalogue still
lists only remote judging terminals for System 6 diving and synchro.[^cts2002][^mtc2008] The
earliest wireless reference found is the System 6 Diving guide of August 2010, which documents
the WIO and WJT with the four-channel scheme described above.[^f871] CTS's 2011 catalogue lists
wireless judging terminals under both diving, with either console, and synchro, with the
Wireless Synchro software.[^cat2011] Both radio generations have guides dated 2011: the 2.4 GHz
guide is revision 201106, with a declaration of conformity dated 20 June 2011, and the 900 MHz
guide is revision 20110720.[^f961][^f941]

By June 2012 CTS's website listed a wireless interface box and wireless judging terminal under
diving and a wireless synchro package under synchronized swimming, beside the wired terminals.[^cts2012]
CTS said its scoreboards, scoring software and wireless judges' terminals were used at the 2012
US national synchronized swimming championships in Mesa, Arizona.[^synchro2012] The 2015
catalogue specifies 2.4 GHz terminals and interface boxes for both sports.[^cat2015]

In June 2015 CTS said that World Aquatics (then FINA) and USA Diving now wanted wired judging
terminals at national and international events, and showed wired terminals at the USA Diving
synchronized nationals and a FINA Grand Prix in Puerto Rico.[^ss2015] It released
[Gen7 wired judging](gen7-wired-judging.md) in May 2016.[^ss2016] The
wireless terminals remained on sale: CTS revised the 2.4 GHz guide in 2020 and still lists the
`WJT-003` and the WIO in 2026, while the 900 MHz `WJT-001` and `WIO-001` are offered only as
refurbished units for extending an existing 900 MHz system.[^f961b][^ctswjt][^ctswio][^shopwjt][^shopwio]

## Specifications

This section gives the figures CTS publishes; it gives no size or weight for the 900 MHz
terminal or for either interface box.

| Item | Value |
|---|---|
| Radio bands | 900 MHz (`-001`) or 2.4 GHz (`-003`)[^f941][^f961] |
| Channels | 31 (900 MHz); 12 (2.4 GHz)[^f941][^f961] |
| Terminals per interface | Up to 99 judges plus one referee (2.4 GHz)[^wjtds] |
| Judge numbers | 1–99; 0 is the diving referee[^f941] |
| Range | More than 250 ft (76 m), `WJT-003`[^wjtds] |
| Display | Four lines, adjustable backlight and contrast, `WJT-003`[^wjtds] |
| Terminal dimensions | 7.5 × 5 × 2 in (19 × 12.7 × 5 cm), `WJT-003`[^wjtds] |
| Terminal weight | 17.2 oz (487 g), `WJT-003`[^wjtds] |
| Terminal power | Two or four AA cells[^f941][^f961] |
| Interface connection | USB (System 6, laptop); CTS I/O cable (System 5)[^f941][^f961] |
| Antenna connector | RP-SMA on the interface's radio module[^f941][^f961] |
| Firmware | Updated from a PC over USB; terminals first, then the interface, with terminal batteries at 75% or more[^f941] |

## Part numbers and accessories

This section lists the part numbers CTS documents.

| Part number | Description |
|---|---|
| `WJT-001` | 900 MHz wireless judging terminal; sold refurbished in 2026[^shopwjt] |
| `WIO-001` | 900 MHz wireless interface box; sold refurbished in 2026, for `WJT-001` or `WJT-001.S` terminals[^shopwio] |
| `WJT-003` | 2.4 GHz wireless judging terminal[^wjtds][^ctswjt] |
| `WIO-003` | 2.4 GHz wireless interface box[^f961][^synchro13] |
| `SYNCHRO-03` | Wireless synchro package: two portable scoreboards, two wireless adapters and SynchroMM; also given as `R-8700-0159`[^synchro13] |

## See also

- [Colorado Time Systems judging terminals](judging-terminals.md): the wired terminals for the System 5 and System 6
- [Colorado Time Systems Gen7 wired judging](gen7-wired-judging.md): the wired system that replaced it at elite events
- [SynchroMM](../../software/synchromm.md): the synchro scoring program that runs the interface
- [Sky-Fi WA-1](../common/scoreboard-control/wa-1.md): the 900 MHz scoreboard adapter that shares its channels
- [Diving equipment](index.md): the diving equipment overview
- [Colorado Time Systems](../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../index.md): the equipment reference

## References

[^f941]: [Colorado Time Systems, Wireless Judging 900 MHz Frequency User Guide (F941 Rev. 20110720)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Judging%20Terminals/WirelessJudging-F941.pdf).
[^f961]: Colorado Time Systems, Wireless Judging 2.4 GHz Frequency User Guide (F961 Rev. 201106).
[^f961b]: [Colorado Time Systems, Wireless Judging 2.4 GHz Frequency User Guide (F961 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Judging%20Terminals/wireless_judging_2ghz.pdf).
[^f871]: Colorado Time Systems, Diving for the System 6 Sports Timer Software User Guide (F871 Rev. 20100817).
[^f871b]: [Colorado Time Systems, Diving for the System 6 Sports Timer Software User Guide (F871 Rev. 20191210)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/System6/System_6_Diving_Manual_F871.pdf).
[^wjtds]: [Colorado Time Systems, Wireless Judging Terminals datasheet](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Wireless_JT.pdf) (Rev 03/14; same figures as Rev 08/12).
[^synchro13]: Colorado Time Systems, Wireless Synchro datasheet (Revised 09/13).
[^ctswjt]: [Colorado Time Systems, Wireless Judging Terminals (WJT-003)](https://coloradotime.com/products/wireless-judging-terminals-wjt-003) (October 2026).
[^ctswio]: [Colorado Time Systems, Wireless Judging Interface Box (WIO)](https://coloradotime.com/products/wireless-judging-interface-box-wio) (October 2026).
[^shopwjt]: [Colorado Time Systems shop, 900MHz Wireless Judging Terminal (WJT-001), Refurbished](https://shop.coloradotime.com/products/900mhz-wireless-judging-terminal-wjt-001-s-refurbished).
[^shopwio]: [Colorado Time Systems shop, 900MHz Wireless Interface Box (WIO-001), Refurbished](https://shop.coloradotime.com/products/900mhz-wireless-interface-box-for-system-5-6-timing-console-wio-001-s-refurbished).
[^fccpro]: [FCC ID OUR-XBEEPRO, MaxStream XBee-PRO OEM RF module](https://fccid.io/OUR-XBEEPRO) (2.4 GHz ISM band).
[^fcc3]: [FCC ID MCQ-XBEE3, Digi International XBee 3](https://fccid.io/MCQ-XBEE3) (2.4 GHz, IEEE 802.15.4).
[^gen7ds]: Colorado Time Systems, Gen7 Diving datasheet (Rev 08/23).
[^f1022]: [Colorado Time Systems, Diving Installation and User Guide (F1022 Rev 202510)](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Gen7%20Diving/Gen7Diving_F1022.pdf).
[^s5jt]: [Colorado Time Systems, System 5 Judging Terminals datasheet](https://web.archive.org/web/20050410101255/http://www.coloradotime.com:80/pdf/System%205%20Judging%20terminals.pdf) (Revised 06/04).
[^cts2002]: [Colorado Time Systems, Remote judging terminals](https://web.archive.org/web/20021204120257/http://www.coloradotime.com:80/aquaticproducts/light_reflective/prod_remote_judging.asp) (archived December 2002).
[^cts2012]: [Colorado Time Systems, Diving judging terminals](https://web.archive.org/web/20140520211818/http://www.coloradotime.com:80/category/diving-equipment/diving-judging-terminals/) (entries of June 2012, archived 2014).
[^synchro2012]: [Colorado Time Systems, CTS at 2012 US National Synchronized Swimming Championships](https://web.archive.org/web/20130629074504/http://www.coloradotime.com:80/colorado-time-systems-at-2012-swimoutlet-com-us-national-synchronized-swimming-championships/) (April 2012).
[^mtc2008]: Colorado Time Systems, Making Time Count: High Impact Visual Display Systems (2008 catalogue), diving and synchro.
[^cat2011]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011 edition), diving and synchro.
[^cat2015]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015 edition), diving and synchro.
[^ss2015]: [SwimSwam, USA Diving Reacts to Sneak Peek of Colorado Time Systems' Next Generation Diving Equipment](https://swimswam.com/usa-diving-reacts-to-sneak-peek-of-colorado-time-systemsnext-generation-diving-equipment/) (CTS release, June 2015).
[^ss2016]: [SwimSwam, Colorado Time Systems Releases Next Generation Diving Equipment](https://swimswam.com/colorado-time-systems-releases-next-generation-diving-equipment/) (CTS release, May 2016).
