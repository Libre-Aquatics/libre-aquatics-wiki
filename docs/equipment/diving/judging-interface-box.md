---
title: Colorado Time Systems judging interface box
description: >-
  The judging interface box is the Colorado Time Systems box that gathers up to ten wired
  judging terminals and joins them to the judges port of a System 5 or System 6 console.
tags:
  - Equipment
  - Diving
  - Artistic swimming
  - Scoring
infoboxTitle: Judging interface box
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Type
    value: Wired judging interface
  - label: Connection
    value: Numbered jacks for 1/4 in plugs from the terminals; one five-pin round cable to the console
  - label: Consoles
    value: '[System 5](equipment/swimming/timers/system-5.md), [System 6](equipment/swimming/timers/system-6.md)'
  - label: Terminals
    value: Up to 10 [judging terminals](equipment/diving/judging-terminals.md)
  - label: Introduced
    value: By 1998
  - label: Succeeded by
    value: '[Wireless interface box](equipment/diving/wireless-judging.md) (`WIO`)'
  - label: Manual
    value: Covered in the console sport guides F511, F874 and F871
---

<!--
Research notes, CTS judging interface box. Stub created 2026-10-19 while building out
judging-terminals.md; built out 2026-10-23.

Held sources, read for this page (sources/vendors/colorado-time-systems/):
- software/cts-system-5-synchronized-swimming-software-user-guide-f511 (F511 Rev 0698,
  copyright 1998; the -alt copy has the same text). Package list: an optional "Judging V I/O
  Box" and remote judging consoles. Setup: each console's data cable goes to the numbered
  connector matching the judge number; a Judging V data cable with five-pin round connectors at
  both ends runs from the box output to the Diving-Expansion I/O connector; consoles need the
  System 5 external supply. Figure 2-A (rendered and looked at) draws the System 5, power
  adapter, printer, timing button, the box as a plain rectangle, and seven consoles cabled to
  it; it shows no detail of the box. Figures cannot be selected unless consoles are attached
  through the box (error message otherwise). Routines asks whether the consoles will be used if
  it finds the box connected. Figures: up to four panels of up to ten judges (40 in all), one
  console per panel whose operator keys in the swimmer ID, figure number and each judge's mark;
  the console shows Judx with x the panel number. Routines: one console per judge. The guide
  uses both "Judging V interface box" and "Judging V I/O box".
- software/...-f874 (F874 Rev 0604, copyright 2004; System 6 synchro, routines only). Package
  list: the box and consoles offered as an option. Each terminal cable ends in a male 1/4 in
  audio plug at either end and goes to the judge's numbered connector; the box-to-console cable has five-pin
  round connectors at both ends into the System 6's Judges I/O. Nine judge channels.
- software/...-f871 (F871 Rev. 20100817, copyright 2010). Calls the wired box the judging
  interface box, the judging I/O box and "IO", beside the wireless "WIO"; the box must be
  connected before Diving is entered; terminal cables are 1/4 in phono on each end; box goes
  to Judges I/O (Figure 2-B, rendered: a plain box between the System 6 and two terminals).
  Setup menu has Judging Interface on/off; header shows Standard (wired) Judges' Interface.
  Number of judges per session must match the terminals connected: extra terminals ignored,
  too few means no award is ever computed. The WIO plugs into a USB "CTS Expansion Port"
  instead.
- F871 Rev. 20191210 (downloaded from coloradotime.com hubfs, October 2026, not filed): the
  wired passages are unchanged, and adds the phrase "standard interface box (IO)". So the wired
  box is still documented in 2019.
- software/...-f506 (System 5 swimming guide F506 Rev 0698): I/O panel figure labels the port
  Judges I/O; its spec list gives that port as RS-232 at plus/minus 12 V and 12 VDC at 0.5 A; text
  says the DIN connector takes the judging expansion hardware and other CTS expansion devices.
  The same guide's contents list calls it the Diving I/O expansion port. The 2004 System 5
  brochure (catalogs-brochures/cts-system-5-brochure-2004) calls it an expansion port for diving
  and other sports. So the System 5 port has four names across CTS documents.
- software/...-f870 (System 6 swimming guide): Judges I/O is a DIN connector for the judging
  expansion hardware and other expansion devices. No electrical spec found for it.
- Filed this pass from the Wayback Machine (captures of 10 April 2005, all Revised 5/04 or
  06/04): accessories/cts-system-5-judging-terminals-datasheet and
  cts-system-6-judging-terminals-datasheet: a limit of ten terminals, each cabled back to the
  box and plugged into a jack on it (the System 6 sheet says "jacks in the I/O
  box" in the same sentence); terminals powered from the console's external supply.
  software/cts-system-5- and cts-system-6-synchronized-swimming-software-datasheet: routine
  scores from 1 to 10 judges on the System 5, 1 to 9 on the System 6.
- Web: CTS Remote Judging Terminal page, December 2002 capture (curl of the id_ snapshot):
  the System 5 accepts as many as ten terminals, whose
  cables are run back to the box and plugged into its jacks. CTS Judging Terminals page posted 9 June 2012 (January 2013 capture): same
  wording, now naming both consoles. The 2012 site menu lists a Wireless IO Box product but no
  wired box. Wayback CDX for coloradotime.com/aquaticproducts/ and /pdf/ found no page for the
  box itself.
- Other "interface box" hits are different products: the WIO-001/WIO-003 wireless box
  (wireless-judging.md), the box the scoreboard catalogues supply with the 1220/1230 clocks
  to set rental time, the "I/O box" in Championship Start guide F875 (a wall-plate
  alternative for start cabling), and Gen7 Diving's interface hub and breakout boxes
  (gen7-wired-judging.md).
Not found: part number, number of jacks (ten inferred from the ten-terminal limit; F511 draws
seven), enclosure, dimensions, photo, price, whether the box itself has electronics or only
wiring, and whether the 12 V on the System 5 port is what powers the terminals (CTS says only
that they run from the console's external supply).
-->

The judging interface box is the Colorado Time Systems (CTS) box that connects wired
[judging terminals](judging-terminals.md) to the timing console, either a
[System 5](../swimming/timers/system-5.md) or a [System 6](../swimming/timers/system-6.md). Each terminal plugs into a numbered
jack on the box, and a single cable runs from the box to the console's judges port.[^f511][^f874]
CTS sold it as an option with its diving and synchronized swimming software, from the System 5
era by 1998, and the 2019 System 6 diving guide still documents it.[^f511][^f871b] CTS's
documents give it no part number.

## Role in the judging system

This section places the box between the terminals and the console; judging equipment in
general is covered in the [diving equipment overview](index.md).

The terminals are not cabled to the console individually. Each one runs to the box, and the box has one output cable to the
console.[^f511][^f874] CTS packed the box and the terminals together as one option. The System 5
synchronized swimming package lists an optional "Judging V I/O Box and Remote Judging
Consoles", and the System 6 package an optional judging I/O box with consoles.[^f511][^f874]

A console takes up to ten terminals through the box.[^web2002][^s5jt][^s6jt] The number used
depends on the program. System 5 synchronized swimming routines take marks from one to ten
judges, and System 6 routines from one to nine.[^s5syn][^s6syn][^f874] In System 6 diving the
number of judges is set per session and has to match the terminals plugged in. The software
ignores extra terminals, and with too few it never completes a dive's award.[^f871]

## Naming

This section covers the names CTS has used for the box and the port it connects to.

CTS has no single name for the box. The 1998 System 5 guide calls it the Judging V interface
box and the Judging V I/O box, following that console's naming of its sport programs.[^f511]
The 2004 System 6 guide and sheets use judging interface box and judging I/O box, sometimes in
the same sentence.[^f874][^s6jt] The 2010 and 2019 System 6 diving guides add the short form
IO, set against WIO for the wireless interface box.[^f871][^f871b]

The console port also goes by several names. On the System 5 the guide that installs the box calls
it the Diving-Expansion I/O connector.[^f511] The System 5 swimming guide labels the same
connector Judges I/O on its panel drawing and calls it the diving I/O expansion port in its
contents list, and the 2004 brochure calls it an expansion port for diving and other
sports.[^f506][^brochure] On the System 6 it is Judges I/O throughout.[^f874][^f871]

## Connection to the console

This section covers the cabling at each end of the box.

Each terminal's data cable has a 1/4 in plug at each end. One end goes into the terminal and
the other into the numbered jack on the box that matches the judge's number, so the jack a
terminal uses decides which judge it is.[^f511][^f874] The System 6 diving guide describes the
same cable as having 1/4 in phono connectors.[^f871]

A separate data cable with five-pin round connectors at both ends joins the box's output to
the console.[^f511][^f874] On both consoles that port is a DIN connector that CTS reserves for
judging hardware and other expansion devices.[^f506][^f870] The System 5 guide rates it as an
RS-232 port that also supplies 12 V DC at 0.5 A.[^f506]

The terminals have no power source of their own. CTS's sheets and the System 5 guide say they
run from the console's external power supply, which must be connected whenever they are in
use.[^s5jt][^s6jt][^f511] CTS does not describe a power input on the box itself.

## Detection by the console

This section covers how the console software reacts to the box.

The console software checks for the box when a sport program starts, so the box has to be
connected first. On the System 5, the Figures part of synchronized swimming will not load without it,
and shows an error message instead.[^f511] If the box is present when Routines starts, the
program asks whether the terminals will be used to score.[^f511] In Figures, each panel of
judges shares one terminal. Its operator keys the swimmer's number, the figure number and each
judge's mark in turn, and the terminal shows the panel number. Up to four panels of ten judges
can send marks this way.[^f511]

On the System 6, the diving guide asks for the box to be connected before Diving is
entered.[^f871] A setup option switches the judging interface on or off. When the wired box is
connected, the screen header shows the standard (wired) judges' interface.[^f871][^f871b]

## Compared with later CTS judging

This section sets out how the box differs from the interfaces that replaced it.

The wireless system keeps a box at the console, the wireless interface box (`WIO-001` or
`WIO-003`), but it reaches the terminals by radio. It connects by USB, to a
System 6 socket that CTS labels CTS Expansion Port, and not to Judges I/O.[^f871][^f871b] The
[wireless judging](wireless-judging.md) article covers it. For Gen7, CTS went back to cables
with a different design: terminals daisy-chained through `CB-01` breakout boxes to an `IH-01`
interface hub, which connects to a computer by USB.[^f1022] The
[Gen7 wired judging](gen7-wired-judging.md) article covers that system.

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado |
| Terminals | Up to 10[^web2002][^s5jt][^s6jt] |
| Terminal side | Numbered jacks, one per judge, for 1/4 in plugs[^f511][^f874] |
| Console side | One cable with five-pin round connectors at both ends[^f511][^f874] |
| Console port | System 5 Diving-Expansion I/O (Judges I/O); System 6 Judges I/O[^f511][^f506][^f874] |
| Port rating (System 5) | RS-232, with 12 V DC at 0.5 A[^f506] |
| Terminal power | Console's external power supply[^s5jt][^s6jt][^f511] |
| Part number | Not published |

## Part numbers and accessories

CTS's documents give no part numbers for the wired judging equipment. They name:

- the judging interface box, also called the I/O box[^f511][^s6jt]
- one [judging terminal](judging-terminals.md) per judge, or per panel in System 5
  Figures[^f511][^web2002]
- one terminal data cable with 1/4 in plugs for each terminal[^f874]
- one cable with five-pin round connectors from the box to the console[^f511][^f874]
- the console's external power supply, which must be connected while terminals are used[^f511]

## See also

- [Judging terminals](judging-terminals.md): the terminals that plug into the box
- [Wireless judging](wireless-judging.md): the radio system with its own interface box
- [Gen7 wired judging](gen7-wired-judging.md): the later cabled system
- [System 5](../swimming/timers/system-5.md) and [System 6](../swimming/timers/system-6.md): the consoles it connects to
- [Diving equipment](index.md): the diving equipment overview
- [Colorado Time Systems](../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../index.md): the equipment reference

## References

[^f511]: Colorado Time Systems, Synchronized Swimming for the System 5 Sports Timer Software User Guide (F511 Rev 0698), setup and Figures.
[^f874]: Colorado Time Systems, Synchronized Swimming for the System 6 Sports Timer Software User Guide (F874 Rev 0604), setup.
[^f871]: Colorado Time Systems, Diving for the System 6 Sports Timer Software User Guide (F871 Rev. 20100817).
[^f871b]: [Colorado Time Systems, Diving for the System 6 Sports Timer Software User Guide (F871 Rev. 20191210)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/System6/System_6_Diving_Manual_F871.pdf).
[^f506]: [Colorado Time Systems, Swimming 5 for the System 5 Sports Timer user guide (F506, Rev. 0698)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System5/System5swim-man.pdf), I/O panel.
[^f870]: Colorado Time Systems, Swimming for the System 6 Sports Timer Software User Guide (F870), I/O panel.
[^brochure]: [Colorado Time Systems, System 5 brochure (updated June 2004)](https://www.yumpu.com/en/document/view/38874710/system-5-brochurepdf-colorado-time-systems).
[^web2002]: [Colorado Time Systems, Remote Judging Terminal](https://web.archive.org/web/20021204120257/http://www.coloradotime.com:80/aquaticproducts/light_reflective/prod_remote_judging.asp) (archived December 2002).
[^s5jt]: [Colorado Time Systems, System 5 Judging Terminals datasheet](https://web.archive.org/web/20050410101255/http://www.coloradotime.com:80/pdf/System%205%20Judging%20terminals.pdf) (Revised 06/04).
[^s6jt]: [Colorado Time Systems, System 6 Judging Terminals datasheet](https://web.archive.org/web/20050410102542/http://www.coloradotime.com:80/pdf/System%206%20Judging%20terminals.pdf) (Revised 06/04).
[^s5syn]: [Colorado Time Systems, System 5 Synchronized Swimming software datasheet](https://web.archive.org/web/20050410112042/http://www.coloradotime.com:80/pdf/System%205%20Software%20Synchro.pdf) (Revised 06/04).
[^s6syn]: [Colorado Time Systems, System 6 Synchronized Swimming software datasheet](https://web.archive.org/web/20050410082725/http://www.coloradotime.com:80/pdf/System%206%20Software%20Synchro.pdf) (Revised 5/04).
[^f1022]: [Colorado Time Systems, Diving Installation and User Guide (F1022 Rev 202510)](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Gen7%20Diving/Gen7Diving_F1022.pdf), for Gen7.
