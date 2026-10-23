---
title: SynchroMM
description: >-
  SynchroMM, also sold as Wireless Synchro and later as Artistic Swimming Meet Management, is
  Colorado Time Systems' discontinued Windows program for scoring synchronized (artistic)
  swimming from wireless judging terminals.
tags:
  - Software
  - Artistic swimming
  - Scoring
  - Meet management
---

<!--
Research notes, SynchroMM. Stub surfaced while building out the WA-3; built out to a full
article 2026-10-22. No user guide for the program itself has been found, held or online; the
article is assembled from CTS's datasheets, product page and the guides of the hardware that
works with it.

Sources:
  - CTS datasheet "Artistic Swimming" (Rev 05/23; PDF created 24 May 2023), downloaded
    2026-10-22 from coloradotime.com/hubfs/CTS Website Assets/Datasheets/SynchroMM.pdf, held as
    sources/vendors/colorado-time-systems/software/cts-synchromm-artistic-swimming-datasheet.
    Calls the program Artistic Swimming Meet Management Software (SynchroMM). Features: follows
    the meet's order; figures, including figures judged at several stations and combined;
    "2013 World Aquatics and 2014 USA Artistic Swimming rules" with penalties, figure
    descriptions and degrees of difficulty, and the then-current scoring changes (the governing
    bodies were FINA and USA Synchro in those years; the datasheet uses today's names); reports
    printable or exportable to PDF (start lists and results for figures and routines,
    aggregate totals, medal count); a judges' evaluation module; import and export between
    meets; reads all files from the earlier DOS program; CTS says it is the only software
    guaranteed to work with CTS scoreboards. Takes awards from wireless judging terminals or
    typed in; calculates free and technical routines; sends to any CTS aquatic scoreboard by a
    wireless scoreboard adapter or cable. Page 2: R-8700-0159 SynchroMM PC software;
    SYNCHRO-03 package = two portable scoreboards with interconnect cabling, two wireless
    scoreboard adapters (WA-2), one copy of the software, caddy or stand extra; boards show
    three components (Execution, Impression/Overall Impression, Difficulty/Elements) plus
    routine number and total; WJT-003 one per judge plus one or two spares; WIO-003 one plus an
    optional spare. Windows Vista, Windows 7 or later.
  - CTS sheet "Wireless Synchro" (Revised 09/13), held as software/cts-wireless-synchro: the
    same system under the name Wireless Synchro; scores single- or multi-component; .NET
    Framework 4.0 on Windows XP SP3 or later; same part numbers, with "(2) Wireless Adapters"
    unnamed; carries an "Official Timing and Scoring Partner" line.
  - CTS Artistic Swimming product page (coloradotime.com/products/artistic-swimming, read
    2026-10-22): marked DISCONTINUED; repeats the datasheet features; part list names WA-3
    adapters in SYNCHRO-03; system requirements .NET 4.0 (included), Windows XP SP3, Vista, 7 or
    later; manuals linked are F961 and F941; one software download, "Synchro.1.106", dated
    15 April 2009, stored under a System6 downloads folder (a 1.5 MB binary; headers only
    checked, file not downloaded or run, so whether it is the PC program or the System 6
    console program is not established).
  - CTS wireless judging guides F941 (900 MHz, Rev 20110720) and F961 (2.4 GHz, Rev 201106),
    held under accessories/: laptop connects to the WIO by USB and needs the Wireless Synchro
    software, where the channel is set; the program runs the WIO for synchro; channels 31
    (900 MHz) and 12 (2.4 GHz); simultaneous events on separate laptops, channels at least 6
    (900) or 2 (2.4) apart; judges' change requests work with SynchroMM and the System 6, not
    the System 5; in synchro the terminal shows routine number, judge number and the next score
    wanted; troubleshooting belongs to the console or Synchro MM operator.
  - Adapter guides: WA-1 Sky-Fi F929 (Rev 201401, scoreboards-displays/): a laptop running
    SynchroMM sends through cable R-0002-0428 and USB-serial adapter 015-467, both ordered
    separately. WA-2 F987 (Rev 201411 and 201605, reference/cts-web/): USB cable R-015-203;
    the COM port the laptop assigns is chosen in SynchroMM; switch 8 up on both adapters.
    WA-3 F1045 (scoreboards-displays/): USB cable R-015-606; same COM-port and switch-8 steps.
    WA-3 datasheet and archived cts-adp pages (2014, 2018, 2020) repeat the laptop use.
  - DisplayLink Plus help, Synchronized Swimming topic (software/displaylink-plus-help/12):
    data from up to four CTS systems, laptops running Synchro MM or sports consoles, on the CTS
    Timer COM ports; team and athlete lists can be imported as text or XML exported from Synchro
    MM; separate events can be assigned to separate laptops, for example one at each end of
    the pool.
  - CTS 2011 catalogue (start-systems/cts-complete-timing-scoring-...-2011): lists Wireless
    Synchro Software with the wireless judging terminals for synchro, and calls CTS the
    official scoring system of USA Synchro (CTS's claim).
  - CTS System 6 Synchronized Swimming guide F874 (Rev 0604, 2004): the console-based program
    scores routines only (technical and artistic scores, ranking), with optional judging I/O box
    and remote judging consoles. System 5 guide F511 (Rev 0698): figures and routines on the
    console.
  - World Aquatics Competition Regulations 2026, Part Seven (rules/world-aquatics/): figures
    judged by one to four panels of four to six judges (5.5), averaged with high and low
    dropped and multiplied by degree of difficulty (5.7); routines judged by two panels of five,
    Elements and Artistic Impression (6.5.6), with Difficulty and Synchronisation Technical
    Controllers checking predeclared difficulty from coach cards. That is a different structure
    from the three components the SynchroMM scoreboards display.
Naming: SynchroMM, Synchro MM, Wireless Synchro MM, Wireless Synchro, Artistic Swimming Meet
Management Software. The August 2020 CTS site menu's "Artistic Swimming Software" and
"Artistic Swimming Package" are the same product under the newer name, as the current product
page shows (same part numbers R-8700-0159 and SYNCHRO-03).
Still to research: release date and version history; when it was discontinued; what the DOS
predecessor was called; whether it was ever updated past the 2013/2014 rules.
-->

SynchroMM is a Windows program from [Colorado Time Systems](../vendors/colorado-time-systems.md)
(CTS) for scoring synchronized swimming, the sport now called artistic swimming. It collects the
judges' awards from CTS [wireless judging terminals](../equipment/diving/wireless-judging.md), or
takes them typed in, calculates figure and routine scores, and sends the results to a CTS
scoreboard.[^datasheet][^sheet] CTS sold it under part number `R-8700-0159`, alone or in a
package with scoreboards and wireless adapters.[^datasheet] As of 2026 CTS lists the product as
discontinued.[^product]

## Naming

CTS has used several names for the program. Its 2013 sheet calls it Wireless Synchro, and its
judging and adapter guides write Wireless Synchro MM, Synchro MM and SynchroMM.[^sheet][^f941][^f1045]
After the sport was renamed, CTS relabeled it Artistic Swimming Meet Management Software and
kept SynchroMM in brackets.[^datasheet][^product] The part numbers did not change.[^sheet][^datasheet]

## System components

This section lists the parts of a SynchroMM installation. A complete system has four parts:
the program on a laptop, a wireless interface box (`WIO-003`) cabled to the laptop by USB, one
wireless judging terminal (`WJT-003`) per judge, and a scoreboard.[^sheet][^f961] CTS advises one
or two spare terminals and, optionally, a spare interface.[^datasheet] The judging guides cover
both the 900 MHz and 2.4 GHz generations of the terminals, and the program works with
either.[^f941][^f961]

The `SYNCHRO-03` package adds two portable scoreboards with the cables to join them, two
wireless scoreboard adapters and one copy of the program. A caddy or stand for the boards is
ordered separately.[^datasheet] The sources differ on which adapter the package holds. The 2023
datasheet names the [WA-2](../equipment/common/scoreboard-control/wa-2.md), the current product
page names its successor, the [WA-3](../equipment/common/scoreboard-control/wa-3.md), and the
2013 sheet does not name a model.[^datasheet][^product][^sheet]

CTS's requirements also changed over time. The 2013 sheet asks for Microsoft .NET Framework 4.0
on Windows XP Service Pack 3 or later. The 2023 datasheet lists Windows Vista, Windows 7 or later.
The product page lists all three and says the framework is included.[^sheet][^datasheet][^product]

## Scoring and operation

This section covers how the program runs a meet. According to CTS, the program follows the
order of a meet and handles both figures and routines. Figures judged at several stations can
be combined into one result, and routine scores are calculated for both technical and free
routines.[^datasheet] Judges' awards come from the terminals or can be entered at the
laptop.[^sheet][^datasheet]

The program controls the wireless interface. The operator sets the radio channel in the
program, and each terminal is set to match.[^f941][^f961] During a routine each terminal shows
the routine number, the judge's number and which score it expects next. A judge who has sent a
score can ask to change it. SynchroMM, like the System 6 console, supports that request, while
the older System 5 console does not.[^f941] For simultaneous events, each event uses its own
laptop and interface on a separate channel, at least six channels apart at 900 MHz and two at
2.4 GHz.[^f941][^f961] The judging guides leave troubleshooting to the SynchroMM operator rather
than the judges.[^f941]

Other features CTS lists are reports, a judges' evaluation module and meet data
transfer.[^datasheet] A medal count, aggregate totals, and start lists and results for both routines
and figures can be printed or saved as PDF files. Meet data can be exported from one meet and
imported into the next, and the program reads files from CTS's earlier DOS synchro
program.[^datasheet]

## Scoreboard and video display output

This section covers how results reach a display. CTS says SynchroMM can send scores to any CTS
aquatic scoreboard, either by cable or through a wireless scoreboard adapter.[^datasheet] Each
generation of adapter guide describes the laptop link:

| Adapter | Laptop connection | Source |
|---|---|---|
| [WA-1](../equipment/common/scoreboard-control/wa-1.md) (Sky-Fi) | Cable `R-0002-0428` and USB-to-serial adapter `015-467`, both ordered separately | [^f929] |
| WA-2 | USB cable `R-015-203` | [^f987] |
| WA-3 | USB cable `R-015-606` | [^f1045] |

With the WA-2 and WA-3, the laptop assigns the adapter a COM port, which the operator then
selects in SynchroMM, and both adapters in the pair are set with configuration switch 8
up.[^f987][^f1045] The scoreboards show three scoring components (execution, impression and
difficulty), with the routine number and the total score.[^datasheet]

For video and matrix boards, [DisplayLink Plus](displaylink-plus.md) can take synchro data from
up to four CTS sources at once, each a laptop running SynchroMM or a CTS sports console, through
its timer COM ports. The routine order with team and athlete names can be imported as a text or
XML file exported from SynchroMM. Each laptop can run its own event, such as one at each end of
the pool.[^dlp] CTS describes SynchroMM as the only software guaranteed to work with its
scoreboards.[^datasheet]

## Rule support

This section covers which competition rules the program follows. CTS states support for the
2013 rules of the international federation and the 2014 rules of the US national body. That
support covers penalties, figure descriptions and degrees of difficulty.[^datasheet] The 2023
datasheet calls those bodies World Aquatics and USA Artistic Swimming. In 2013 and 2014 those bodies were
still FINA and USA Synchro, so the datasheet applies their later names to the older rule
sets.[^datasheet]

The current World Aquatics rules judge routines differently from the three components that
SynchroMM displays. Routines now go to two panels of five judges, one for elements and one for
artistic impression, while technical controllers check each team's predeclared difficulty
against a coach card.[^wacr] No CTS source says that SynchroMM was updated for this structure.

## Compared with console scoring

This section sets SynchroMM beside the other ways CTS and Daktronics have scored the sport. CTS
earlier scored synchro on its timing consoles. The [System 5](../equipment/swimming/timers/system-5.md)
program, from 1998, handled both figures and routines. The 2004
[System 6](../equipment/swimming/timers/system-6.md) program covers routines only, with
technical and artistic scores, rankings, and optional wired judging consoles through an
interface box.[^f511][^f874] SynchroMM runs on a PC instead, covers both figures and routines, and
takes its scores from the wireless terminals.[^datasheet][^f941] Daktronics took a
similar approach with [OmniSport Pro Synchro](omnisport-pro-synchro.md), a Windows program that
scores the sport through its OmniSport 2000 console.

CTS's 2011 catalogue lists the wireless synchro software and terminals together, and describes CTS
as "the Official Scoring System of USA Synchro".[^cat2011]

## See also

- [Colorado Time Systems wireless judging](../equipment/diving/wireless-judging.md): the terminals and interface it reads
- [WA-3](../equipment/common/scoreboard-control/wa-3.md), [WA-2](../equipment/common/scoreboard-control/wa-2.md) and [WA-1](../equipment/common/scoreboard-control/wa-1.md): the wireless scoreboard adapters it drives
- [DisplayLink Plus](displaylink-plus.md): the CTS video display program that takes its data
- [OmniSport Pro Synchro](omnisport-pro-synchro.md): the Daktronics equivalent
- [Colorado Time Systems](../vendors/colorado-time-systems.md): the publisher
- [Software](index.md): the software overview

## References

[^datasheet]: [Colorado Time Systems, Artistic Swimming (SynchroMM) datasheet](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/SynchroMM.pdf) (Rev 05/23).
[^sheet]: Colorado Time Systems, Wireless Synchro product sheet (revised 09/13).
[^product]: [Colorado Time Systems, Artistic Swimming](https://coloradotime.com/products/artistic-swimming) (product page, marked discontinued).
[^f941]: [Colorado Time Systems, Wireless Judging 900 MHz User Guide (F941)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Judging%20Terminals/WirelessJudging-F941.pdf) (Rev 20110720).
[^f961]: [Colorado Time Systems, Wireless Judging 2.4 GHz User Guide (F961)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Diving%20and%20Synchro/Judging%20Terminals/wireless_judging_2ghz.pdf) (Rev 201106).
[^f929]: Colorado Time Systems, Sky-Fi Wireless Adapter (WA-1) User Instructions (F929, Rev 201401).
[^f987]: Colorado Time Systems, Wireless Scoreboard Adapter WA-2 User Guide (F987, Rev 201605).
[^f1045]: Colorado Time Systems, 2.4 GHz Wireless Adapter WA-3 User Guide (F1045).
[^dlp]: Colorado Time Systems, DisplayLink Plus help, Synchronized Swimming.
[^cat2011]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2011), page 13.
[^f874]: Colorado Time Systems, Synchronized Swimming for the System 6 Sports Timer (F874, Rev 0604).
[^f511]: Colorado Time Systems, Synchronized Swimming for the System 5 Sports Timer (F511, Rev 0698).
[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), Part Seven, 5.5 and 6.5–6.6.
