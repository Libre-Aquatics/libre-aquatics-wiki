---
title: Colorado Time Systems judging terminals
description: >-
  Colorado Time Systems judging terminals are wired keypads that send diving and
  synchronized swimming scores to a System 5 or System 6 console through a judging
  interface box.
tags:
  - Equipment
  - Diving
  - Artistic swimming
  - Scoring
infoboxTitle: Judging terminals
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Type
    value: Wired judges' terminal
  - label: Display
    value: 0.5 in LCD, in two windows
  - label: Keypad
    value: Sealed tactile keys; digits, .5, decimal point, Clear Entry, Send
  - label: Connection
    value: Cable with 1/4 in phono plugs to a [judging interface box](equipment/diving/judging-interface-box.md) at the console
  - label: Consoles
    value: '[System 5](equipment/swimming/timers/system-5.md), [System 6](equipment/swimming/timers/system-6.md)'
  - label: Terminals per console
    value: Up to 10
  - label: Dimensions
    value: 11.45 × 5.75 × 1.5 in (29.1 × 14.6 × 3.8 cm)
  - label: Power
    value: From the console's external power supply
  - label: Status
    value: Discontinued; replaced by wireless judging by 2011
  - label: Manual
    value: Covered in the System 5 and System 6 diving and synchronized swimming guides (F511, F871, F874)
---

<!--
Research notes, CTS wired judging terminals for the System 5 and System 6. Stub created while
building out wireless-judging.md; built out to a full article 2026-10-19.

CTS product pages, all re-fetched 2026-10-19 with curl from the Internet Archive (WebFetch is
blocked there):
- "Remote Judging Terminal", archived 4 December 2002, under
  aquaticproducts/light_reflective/prod_remote_judging.asp:
  - for diving and synchro on the System 5, which takes up to 10 terminals;
  - one terminal per judging station, cabled into jacks on a judging interface box;
  - powered through the System 5's external power;
  - sealed tactile keyboard with a half-inch LCD;
  - 11.45 in wide x 1.5 in high x 5.75 in deep, with the weight field left blank.
  - It sells the terminals as removing the need for runners and for keying scores by hand.
- "System 5 Judging Terminals" sheet, Revised 06/04 (PDF metadata: created 8 June 2004, title
  "System 5 Judging terminals.qxd"). Same content, for the System 5 Diving and Synchronized
  Swimming packages. It writes the size as 11.45 in w x 5.75 in h x 1.5 in d, swapping the
  2002 page's height and depth. For a desk keypad the 2002 labelling (1.5 in high) is the more
  plausible, but neither is verified, so the infobox gives the bare triple. The sheet also
  carries CTS's line that it is the official scoring display supplier to United States Diving
  and Synchronized Swimming.
- "Judging Terminals", posted 9 June 2012, archived January 2013: diving only, compatible with
  the System 5 or System 6, up to ten, same size and LCD, powered from the timing console's
  external power. It calls CTS "the Official Scoring System of USA Diving". The page's
  navigation already lists the wireless IO box and wireless terminals beside it.

Held guides (sources/vendors/colorado-time-systems/software/):
- F511, System 5 Synchronized Swimming User Guide Rev 0698 (two identical copies held). The
  terminals are "remote judging consoles" and the box is the "Judging V interface box".
  - Each console's data cable goes to the box's numbered jack matching the judge number.
  - A five-pin round cable runs from the box to the System 5's Diving-Expansion I/O connector.
  - The consoles need the System 5's external power supply, with a warning to use only the
    recommended one.
  - At start-up Routines asks whether remote consoles will be used.
  - Figure 2-G shows the console.
- F874, System 6 Synchronized Swimming User Guide Rev 0604. Same procedure.
  - Each cable ends in a 1/4 in male audio plug on each end.
  - The five-pin round cable goes to the System 6's Judges I/O connector.
  - Operation: the LCD shows the console's judge number. The judge keys the technical merit
    mark, checks it and presses Send, or presses Clear Entry and re-keys it; then does the same
    for artistic merit. A wrong mark already sent is fixed by the operator with the edit
    technical score and edit artistic score keys.
  - Figure 2-G (rendered with PyMuPDF): a wide flat console labelled Remote Judging Console,
    two LCD windows (the small upper one reading Jud1), keys 1-9, .5, 0 and a decimal point,
    Clear Entry and Send keys, and a data cable socket at the top right.
- F871, System 6 Diving guide Rev. 20100817.
  - Calls the terminals "standard JTs" or remote judging terminals, sold as a diving option.
  - Each terminal runs to the judging interface box on a cable with a 1/4 in phono plug on
    each end; the box goes to Judges I/O.
  - Figure 2-B shows the System 6, its external power supply, the interface box and two
    terminals.
  - The number of judges set for the session must match the terminals in use.
  - The operator can override a terminal's mark with the judge keys.
  - The screen header shows "Standard (wired)" or "Wireless" judges' interface.
  - Balks and failed dives are keyed on the console with wired terminals; only the wireless
    referee terminal (JT ID 0) can send them.
  - A setup option turns the judging interface on or off.
- System 5 Diving software datasheet: judges' marks typed on the keyboard or sent from the
  optional judging terminals are totalled automatically.

Catalogues and other CTS documents:
- System 5 brochure (2004) lists judging terminals among accessories.
- Architectural guidelines list remote judging terminals (for diving) among the System 6's
  inputs.
- 2008 Making Time Count catalogue: remote judging terminals for System 6 diving and synchro.
- 2011 catalogue: wireless judging terminals only, for diving (System 6 or 5) and synchro.
  So the wired terminals left the catalogue between 2008 and 2011. The wireless 900 MHz guide
  is in wireless-judging.md.
- Universal Wall Plates sheet, Rev 03/14: a diving option kit K-DV, and a judging-terminal
  option in the intro. Whether K-DV carries judging jacks is not stated.
- GW Henderson Aquatic Center case study: remote judging terminals among the installed CTS
  equipment.

Periodicals: no CTS judging terminal advertisement found. The hits for "judging console" are
Nevco (1971-72) and Cox (1973), different companies.

Not found: part numbers for the terminal, the box or the cables; price; cable lengths; when the
terminals were introduced (System 5 era at the latest, 1998 guide); the weight.
-->

Colorado Time Systems (CTS) judging terminals are wired keypads that diving and synchronized
swimming judges use to send their marks to a CTS
[System 5](../swimming/timers/system-5.md) or [System 6](../swimming/timers/system-6.md)
timing console.[^web2002][^f871] Each terminal is cabled to a
[judging interface box](judging-interface-box.md) beside the console, which passes the marks
on, and a console takes up to ten terminals.[^web2002][^s5jt] CTS sold them as an option for its
diving and synchronized swimming software from the System 5 era at the latest. By 2011 the
catalogue offered only [wireless judging terminals](wireless-judging.md) in their
place.[^f511][^mtc2008][^cat2011]

## Role in the scoring system

This section places the terminals in a CTS scoring setup; judging equipment in general is
covered in the [diving equipment overview](index.md). Without terminals, the console operator
keys every judge's mark into the console by hand, and marks from judges around the pool have to
be collected by runners. CTS promoted the terminals as removing both jobs.[^web2002][^s5jt]

The console software totals the marks. In diving it works out the award, and in synchronized
swimming it totals the routine.[^s5diving][^f871][^f874] The operator can still change any mark.
In diving the operator can override any mark sent from a terminal, using the judge keys along
the top of the console. In synchronized swimming a mark sent in error is corrected with the
console's edit keys.[^f871][^f874]

## Design and construction

The terminal is a flat, wide console with sealed tactile keys and a half-inch liquid crystal
display.[^web2002][^s5jt] A drawing in the synchronized swimming guide shows two display windows,
a small upper one that shows the judge number (for example Jud1) and a larger one below it. The
keypad has the digits, a .5 key for half-point marks, a decimal point, and Clear Entry and Send
keys. The data cable plugs in at the top right.[^f874]

CTS gave the size as 11.45 by 5.75 by 1.5 in (29.1 by 14.6 by 3.8 cm). Its 2002 web page labels
these as width, depth and height. Its 2004 and 2012 sheets label them as width, height and
depth.[^web2002][^s5jt][^cts2012] For a desk keypad the 2002 reading, 1.5 in high, is the more
likely, but neither source settles it. No weight was published: the 2002 page left the field
blank.[^web2002]

## Connection to the console

This section covers how the terminals are wired. Each terminal has its own data cable with a
1/4 in phono plug at each end, running to a numbered jack on the judging interface box. The jack
number is the judge number, so a terminal becomes judge 3 by being plugged into jack 3.[^f511][^f874][^f871]
A single cable with five-pin round connectors then joins the box to the console:[^f511][^f874]

- on the System 5, to the connector labelled Diving-Expansion I/O
- on the System 6, to the connector labelled Judges I/O

The terminals have no batteries or power supply of their own. They are powered from the
console, and both the System 5 guide and CTS's sheets require the console's external power
supply to be connected when terminals are in use. The System 5 guide warns that only the
recommended supply should be used.[^f511][^s5jt]

CTS's universal wall plates for in-deck installations list judging terminals among their
options, and a diving option kit, `K-DV`. The sheet does not say what the kit contains.[^wallplate]

## Operation

This section covers what the judge and the operator do in each sport.

### Diving

Before a meet the operator sets how many judges each session uses, and the System 6 Diving
guide says that number must match the terminals connected. The software records only as many
marks as there are judges set.[^f871] A setup option turns the judging interface on or off. When
the wired box is connected, the System 6 screen header reads Standard (wired) Judges'
Interface.[^f871] On the judging screen each judge's mark fills in as it arrives, and the
operator can override any of them before advancing to the next dive.[^f871]

Balks and failed dives are handled at the console. The two-point deduction and the failed-dive
command are keyed on the console when wired terminals are used. Only the later wireless system
let a referee's terminal send them.[^f871]

### Synchronized swimming

Each judge's console shows its judge number. For a routine the judge keys the technical merit
mark, checks it and presses Send, then does the same for the artistic merit mark. Clear Entry
erases a mark that has not yet been sent.[^f874][^f511] When Routines starts on a System 5 with
consoles and the interface box connected, it asks whether the consoles will be used to score.[^f511]

## Compared with later CTS judging

The wireless system that replaced these terminals keeps an interface box at the console but
links the terminals to it by radio, and each terminal runs on batteries.[^f871][^cat2011] With wireless terminals a referee's terminal can send balks and
failed dives to the console, a function the wired terminals lacked.[^f871] For its Gen7 consoles
CTS returned to cables, with a separate wired system built around the `JT-01`
terminal.[^gen7] The [wireless judging](wireless-judging.md) and
[Gen7 wired judging](gen7-wired-judging.md) articles cover those systems.

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado |
| Display | 0.5 in LCD[^web2002] |
| Keys | Sealed tactile; 0–9, .5, decimal point, Clear Entry, Send[^web2002][^f874] |
| Terminals per console | Up to 10[^web2002][^cts2012] |
| Terminal cable | 1/4 in phono plug at each end, to the interface box[^f871][^f874] |
| Box to console | Five-pin round connectors; System 5 Diving-Expansion I/O or System 6 Judges I/O[^f511][^f874] |
| Power | Console's external power supply[^s5jt][^f511] |
| Dimensions | 11.45 × 5.75 × 1.5 in (29.1 × 14.6 × 3.8 cm)[^s5jt] |
| Weight | Not published[^web2002] |

## Part numbers and accessories

No CTS part number for the terminal, the interface box or the cables has been found. The
documents name:

- the judging terminal, one per judge[^web2002]
- the [judging interface box](judging-interface-box.md), with a numbered jack for each judge[^f511][^f874]
- a terminal data cable with 1/4 in phono plugs, one per terminal[^f871]
- a five-pin cable from the box to the console[^f511][^f874]
- the console's external power supply, required when terminals are used[^f511]

## See also

- [Judging interface box](judging-interface-box.md): the box the terminals plug into
- [Wireless judging](wireless-judging.md): the radio system that replaced them
- [Gen7 wired judging](gen7-wired-judging.md): CTS's current wired judging system
- [System 5](../swimming/timers/system-5.md) and [System 6](../swimming/timers/system-6.md): the consoles they work with
- [Daktronics JC-100](jc-100.md): a competing wired judge console
- [Diving equipment](index.md): the diving equipment overview
- [Colorado Time Systems](../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../index.md): the equipment reference

## References

[^web2002]: [Colorado Time Systems, Remote Judging Terminal](https://web.archive.org/web/20021204120257/http://www.coloradotime.com:80/aquaticproducts/light_reflective/prod_remote_judging.asp) (archived December 2002).
[^s5jt]: [Colorado Time Systems, System 5 Judging Terminals datasheet](https://web.archive.org/web/20050410101255/http://www.coloradotime.com:80/pdf/System%205%20Judging%20terminals.pdf) (Revised 06/04).
[^cts2012]: [Colorado Time Systems, Judging Terminals](https://web.archive.org/web/20130104045041/http://www.coloradotime.com:80/judging-terminals/) (posted June 2012, archived January 2013).
[^f511]: Colorado Time Systems, Synchronized Swimming for the System 5 Sports Timer Software User Guide (F511 Rev 0698), setup and routines.
[^f874]: Colorado Time Systems, Synchronized Swimming for the System 6 Sports Timer Software User Guide (F874 Rev 0604), remote judging consoles.
[^f871]: Colorado Time Systems, Diving for the System 6 Sports Timer Software User Guide (F871 Rev. 20100817).
[^s5diving]: Colorado Time Systems, System 5 Diving software datasheet.
[^mtc2008]: Colorado Time Systems, Making Time Count: High Impact Visual Display Systems (2008 catalogue), diving and synchronized swimming.
[^cat2011]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011 catalogue), diving and synchronized swimming.
[^wallplate]: Colorado Time Systems, Universal Wall Plates datasheet (Rev 03/14).
[^gen7]: Colorado Time Systems, Diving Installation and User Guide (F1022 Rev 202510), for Gen7.
