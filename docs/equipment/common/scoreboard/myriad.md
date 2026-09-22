---
title: Colorado Time Systems Myriad
description: >-
  The Myriad is a discontinued Colorado Time Systems LED matrix display whose
  two-color pixels gave it a wider palette than the Mercury16 sold beside it.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: Myriad
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Type
    value: Two-color LED matrix display
  - label: Pixel
    value: Nine diodes, four red and five green
  - label: Palette
    value: 256 shades, per Colorado Time Systems
  - label: Pixel spacing
    value: 1.4 in between centers
  - label: Module
    value: 32 × 8 pixels, about 4 × 1 ft
  - label: Power
    value: 115 VAC ±10% at 2.5 A per module, or 230 VAC ±10% at 1.3 A, 50–60 Hz
  - label: Software
    value: '[DisplayLink](software/displaylink.md)'
  - label: Introduced
    value: Announced January 1997
  - label: Status
    value: Out of production; last marketed 2004-2005
  - label: Manual
    value: Myriad/Mercury16 Display Manual (F853 Rev. 0100)
---

<!--
Research notes, Myriad. Built out from a stub in September 2026.

Sources used, and what each one actually supports.

F853, the Myriad/Mercury16 Display Manual, Rev. 0100 and therefore January 2000, held at
sources/vendors/colorado-time-systems/scoreboards-displays/cts-myriad-mercury16-display-manual-f853.pdf
with a text extraction beside it. One manual for Myriad, Mercury16 and the Mercury16
Sun Series together. It is the source for the electrical and environmental figures, the
installation method, the theory of operations and the service procedures. Two cautions.
First, it almost never separates the models: the only place it treats them differently is
the environmental table, where Myriad and Mercury16 get 0 to 50 C and the Sun Series gets
-10 to 70 C. Everything else in it is written for both, so nothing from F853 should be
presented here as distinctively Myriad. Second, the table of contents promises a glossary
of display board definitions at 4-1, and there is no glossary: page 4-1 of the printed
manual is the technical support page. This was checked against the PDF with PyMuPDF and not
just the extraction. The file has no glossary on any of its 24 pages, and pages 6, 18, 22 and
24 carry nothing but a page number or are blank. The omission is CTS's, not the
extraction's.

The construction and palette figures come from CTS's own Myriad product page, which the
company ran under coloradotime.com/aquaticproducts/myriad/ and which survives in the
Internet Archive. Eight successful captures, 19 December 2002 to 24 December 2004; the
text does not change between the first and the last. That page is where the nine-diode pixel, the four
red and five green split, the 256 shades, the 1.4 inch center spacing, the conformal
coating and the module arithmetic all come from. It is CTS marketing copy, not independent
reporting, and the article attributes it accordingly. A parallel page existed under
arenaproducts/, so the board was sold outside aquatics too, and the aquatic page ran a
sibling animations.asp listing two libraries of pre-made aquatic animations by name.

The customer list is the same page's customers.asp, captured 3 September 2003. Five aquatic
installations with pixel dimensions: George Mason University, Fairfax VA, 160 x 80;
University of Texas, Austin TX, 192 x 80; MIT, Cambridge MA, 160 x 88; Delta State
University, Cleveland MS, 160 x 88; Fort Bend ISD, Houston TX, 96 x 80. The Texas entry
corroborates the January 1997 announcement, which had said the first Myriad was going to
the Lee and Joe Jamail Texas Swim Center, so the installation happened. No date is given
for any of the five.

Dating. Swimming World January 1997 (199701.txt line 4821) carries the announcement in its
Product World: FYI column, a page that reprints press releases, so it is CTS's own copy
appearing as news rather than reporting. It gives red and green diodes per pixel cluster,
256 color combinations, and the Texas first installation. This is earlier than the February
1997 advertisement the previous version of this page cited, so the infobox date moved.
Advertising then runs to Swimming Technique April 2001 (200104.txt line 5231), the
April-June issue; Swimming World September 2000 (200009.txt line 4043) is the last one in
that title, and an earlier pass stopped there and missed the three later Swimming Technique
printings of October 2000, January 2001 and April 2001. ST 200107 and 200110 are held and
carry none, so April 2001 is the corpus-bounded end. From March
1997 the copy sells Myriad and Mercury together rather than Myriad alone, and from March
1999 it writes "Mercury 16" beside Myriad. Two later apparent hits, Swimming Technique
October 2003 and Swimming World June 2004, are the ordinary English word and not the
product. Do not re-chase them.

Withdrawal is bounded rather than dated, and the article says so. The product page was
still live and unchanged in December 2004, and the parallel arena page was still returning
a page in March 2005 and gone by March 2006. The 2004 documentation refresh is the useful
signal: F837, the DisplayLink 3.6 guide, is titled for Myriad and Mercury by name and its
introduction names Myriad, Mercury16 and Outdoor Mercury16, while F888 (DisplayLink 3.7),
F854 (AquaLink) and F855 (Template Editor), all carrying the same Rev. 0404, drop the model
names for "matrix display systems". A grep of the CTS corpus confirms the three later
guides never say Myriad or Mercury anywhere. The DisplayLink Plus help has no trace of
either name. By the 2008 display catalogue the matrix line is single color, red or amber,
at 18, 30 or 50 mm spacing, which is a different product at a different pitch; the Myriad's
1.4 in is about 35.6 mm. The DisplayLink article's research comment records the same
supersession from the software side and should not be duplicated here.

The media converter instructions F850 (Rev. 0206, February 2006), under
scoreboards-displays/, are the one piece of evidence for what happened to installed boards
afterwards. They walk an operator through bridging a laptop's twisted-pair Ethernet to the
coax wall plate, and tell the reader explicitly not to reuse the old T connector and
terminator cap. They also mention a Local/Remote switch on the wall plate where a facility
has more than one. F850 never says Myriad, so the link to this board is by architecture
rather than by name, and the article puts it that way.

CTS still hosts a Mercury & Myriad Troubleshooting Guide at
coloradotime.com/support/mercury-myriad-troubleshooting-guide, which reproduces the
six-step isolation procedure from F853 section 2.2. Verified live. The manual itself used
to be at coloradotime.com/manuals/Myriad-Mercury-manual.pdf, captured there in March 2006;
that URL now returns 404, and the current manuals index has no Myriad entry, so the
infobox names the document without linking it.

Dead ends, recorded so they are not repeated. No part number for a Myriad board, a module
or an 8x8 has been found in any held document, on the archived product pages, or in the
catalogues; the boards were quoted per installation and the customer list is given in
pixels, which is consistent with there being no catalogue model number to find. A patent
search turned up nothing assigned to CTS covering the pixel or the display; the closest art
found, US 5,184,114, is a General Electric and Integrated Systems Engineering filing that
never mentions CTS, and it is not cited here because it has no established connection. The
CTS case studies held all describe later full-color video displays, not Myriad. The 2008
and 2011 catalogues do not name it.

Still open. What HWPM 110 and HWPM 220 are: F853 names both as optional display equipment
and never explains either, and a grep of the whole sources tree finds them nowhere else.
Whether Myriad was ever sold with a Sun Series style outdoor variant of its own, as
Mercury16 was. What a Myriad cost. When the last one was decommissioned. Whether the arena
and stadium product lines used different module hardware.

A finding for the Mercury16 page, noted there too: the archived Mercury 16 product page
answers what the 16 in the name means. CTS said the indoor Mercury 16 pixel is four diodes
of a single color, red or green, giving 16 shades, and the Outdoor Sun Series pixel is five
red diodes, also 16 shades. Against Myriad's nine-diode two-color pixel and 256 shades,
the number in each name is its shade count.
-->

The Myriad is a discontinued [Colorado Time Systems](../../../vendors/colorado-time-systems.md)
(CTS) LED matrix display, announced in 1997 as the two-color member of the pair of
full-matrix boards the company built in that generation.[^sw9701][^web02] Where the
[Mercury16](mercury16.md) beside it lit each pixel in one color, the Myriad mixed red and
green diodes in every pixel, which CTS said let the board render 256 shades.[^web02][^webmerc]
A dedicated computer running [DisplayLink](../../../software/displaylink.md) composed
what either line showed.[^f837]

## Role in the timing system

A Myriad is an output device: it shows what a timing console or a meet-management computer
has already worked out, by way of the DisplayLink computer that formats it. Nothing about
that arrangement is particular to this board, and the
[scoreboards overview](index.md) carries the shared account of how a CTS matrix display is
built, powered and cabled. The sections below cover only what is particular to the Myriad.

## Announcement and marketing

Swimming World printed the Myriad announcement in January 1997, in a column that reprinted
manufacturers' press releases. CTS described the board there as its newest full-matrix LED
display technology, credited the combination of red and green diodes in each pixel cluster
with 256 color combinations, and said the first one would go to the Lee and Joe Jamail
Texas Swim Center at the University of Texas at Austin.[^sw9701] A University of Texas
board of 192 × 80 pixels later appeared on the company's own customer list, so that
installation went ahead.[^webcust]

CTS advertising in the swimming press followed from February 1997 and ran to at least
April 2001. The earliest advertisements sell the Myriad alone; from March
1997 the copy pairs it with the Mercury line, and by March 1999 the two names appear
together as a single offer.[^ad9702][^ad9703][^ad9903][^ad0009][^ad0104] All of this is the
company's own copy rather than independent coverage, and the claims in it are CTS's.

## Pixels and color

CTS built the Myriad pixel from nine diodes, four of them red and five green, and put the
pixel centers 1.4 in apart. Driving the two colors at different intensities is what
produced the 256 shades the company advertised.[^web02] DisplayLink exposed that control directly: its
display-intensity dialog adjusts red, green and blue levels separately, for the board as a
whole or for one 8x8 module at a time.[^f837] No source describes a blue diode in a
Myriad pixel, so that third control appears to belong to the program rather than to this
board.

The diodes sit on a circuit board finished with a conformal coating, which CTS said
protected the components where pool air would otherwise attack them.[^web02]

## Sizes and configuration

There is no standard Myriad size. The board is assembled from modules and quoted per
facility, and CTS expressed a configuration as pixels across by pixels high rather than as
a model number.[^web02]

The unit of assembly is an 8 × 8 pixel board about a foot square, four of which fill one
module measuring roughly 4 × 1 ft and 32 × 8 pixels. Modules stack and abut to whatever
rectangle the facility needs.[^web02][^f853] The five aquatic installations CTS
listed on its own site show the range in practice:[^webcust]

| Facility | Configuration |
|---|---|
| University of Texas, Austin, Texas | 192 × 80 |
| George Mason University, Fairfax, Virginia | 160 × 80 |
| Massachusetts Institute of Technology, Cambridge, Massachusetts | 160 × 88 |
| Delta State University, Cleveland, Mississippi | 160 × 88 |
| Fort Bend ISD, Houston, Texas | 96 × 80 |

Because the size varies, DisplayLink reports the attached board's dimensions in its About
window, and the guide tells operators to check there before drawing artwork, since the
program neither scales nor centers an image that does not fit.[^f837]

## Software and options

DisplayLink drove the board, and every Myriad was supplied with it.[^web02][^f837] The
[DisplayLink](../../../software/displaylink.md) article covers the program itself. Beyond
it, CTS sold four additions for a matrix display:[^web02]

- [ScheduleLink](../../../software/schedulelink.md), for running advertisements and
  messages to a timetable
- the [GameLink console](../scoreboard-control/gamelink-console.md), which let more than
  one person work on the score at once
- Template Editor, for laying out where names, times and graphics sit on the board
- animation libraries, supplied ready-made

CTS listed two aquatic libraries by name. Between them the sequences included a wave,
fireworks, a record breaker, a shark attack, a perfect ten and a request for quiet at the
start.[^webanim]

The manual adds two more parts to the list of what a display is built from,
[HWPM 110 and HWPM 220](hwpm.md), which it calls optional equipment and never
explains.[^f853]

## Installation and later support

CTS stated that its matrix displays were to be installed by company personnel only, and
that the boards held no user-serviceable parts beyond those the manual covers.[^f853] The
mounting method, the Unistrut framework it hangs on and the circuit planning behind it are
common to the whole matrix generation and are set out on the
[scoreboards overview](index.md).

Installed boards outlasted the computers that had driven them. By February 2006 CTS was
publishing instructions for putting a media converter between a laptop's Ethernet port and
the coaxial wall plate, with a warning not to reuse the T connector and terminator cap the
earlier DisplayLink machines had needed, and a note about setting a wall plate to Local
where a facility had several.[^f850] Those instructions name no display model, so they apply to this
board by architecture rather than by name. CTS continues to publish a troubleshooting guide
for the two lines, which reproduces the isolation procedure from the printed
manual.[^tshoot][^f853]

## Compared with the Mercury16

The two boards share a manual, a module, a mounting method and a control program. They
differ in the pixel. CTS gave the indoor Mercury16 four diodes of a single color per pixel,
red or green, for 16 shades, and the Outdoor Sun Series version five red diodes, also for
16 shades. The Myriad's nine mixed diodes give it the wider palette of the two.[^web02][^webmerc]

The environmental ratings follow the same split. F853 rates Myriad and Mercury16 alike at
0–50 °C and reserves its wider −10 to 70 °C range for the Sun Series, which is the only
place in the manual the models are treated separately.[^f853]

## Specifications

Figures marked as CTS's are from the company's own product page and advertising rather than
from a technical document.

| | |
|---|---|
| Type | Two-color LED matrix display |
| Pixel | Nine diodes, four red and five green[^web02] |
| Palette | 256 shades, per CTS[^web02][^sw9701] |
| Pixel spacing | 1.4 in between centers[^web02] |
| Sub-assembly | 8 × 8 pixels, about 1 ft square[^web02] |
| Module | 32 × 8 pixels, about 4 × 1 ft, four sub-assemblies[^web02] |
| Module weight | About 15 lb including framework[^f853] |
| Configurations | Built to order; 96 × 80 to 192 × 80 among installations CTS listed[^webcust] |
| Environmental | 0–50 °C, 90% humidity non-condensing, 0 to 3000 m[^f853] |
| Power | 115 VAC ±10% at 2.5 A per module, or 230 VAC ±10% at 1.3 A, 50–60 Hz[^f853] |
| Circuit loading | 2 A per box, four boxes maximum across one circuit[^f853] |
| Data in | Ethernet link at 5 V; RS-232 scoreboard port at ±12 V[^f853] |
| Software | DisplayLink, supplied with the display[^web02][^f837] |
| Status | Out of production; still marketed December 2004, and a sibling page survived into 2005[^web02] |

## See also

- [Mercury16](mercury16.md): the single-color board sold beside it, and its manual partner
- [DisplayLink](../../../software/displaylink.md): the program that composed what it showed
- [ScheduleLink](../../../software/schedulelink.md): the scheduling add-on CTS sold for it
- [HWPM 110 and HWPM 220](hwpm.md): the optional parts its manual names without explaining
- [Scoreboards](index.md): the display overview, with the shared matrix architecture
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f853]: Colorado Time Systems, Myriad/Mercury16 Display Manual (F853 Rev. 0100); CTS no longer hosts it.
[^f837]: Colorado Time Systems, DisplayLink 3.6 Users Guide, for Myriad and Mercury Matrix Display Systems (F837 Rev. 0404, ©2004).
[^f850]: Colorado Time Systems, Media Converter Setup Instructions (F850 Rev. 0206).
[^sw9701]: Colorado Time Systems press release, *Swimming World*, January 1997 (Product World: FYI; Myriad announcement and first installation).
[^ad9702]: Colorado Time Systems advertisement, *Swimming World*, February 1997 (multi-color Myriad, DisplayLink supplied with every display).
[^ad9703]: Colorado Time Systems advertisement, *Swimming World*, March 1997 (Myriad and Mercury displays offered together).
[^ad9903]: Colorado Time Systems advertisement, *Swimming World*, March 1999 (Mercury 16 and Myriad named as a pair).
[^ad0009]: Colorado Time Systems advertisement, *Swimming World*, September 2000 (last Myriad advertisement in that title).
[^ad0104]: Colorado Time Systems advertisement, *Swimming Technique*, April-June 2001 (latest Myriad advertisement found).
[^web02]: [Colorado Time Systems, Myriad Full Matrix Boards](https://web.archive.org/web/20021219011601/http://www.coloradotime.com/aquaticproducts/myriad/) (archived product page; captures unchanged 2002–2004).
[^webcust]: [Colorado Time Systems, Myriad Scoreboard Aquatic Center Customers](https://web.archive.org/web/20030903171242/http://www.coloradotime.com/aquaticproducts/myriad/customers.asp) (archived September 2003).
[^webanim]: [Colorado Time Systems, Aquatics Animations for Myriad Displays](https://web.archive.org/web/20021227132248/http://www.coloradotime.com/aquaticproducts/myriad/animations.asp) (archived December 2002).
[^webmerc]: [Colorado Time Systems, Full Matrix Boards: Mercury 16 and Outdoor SunSeries Mercury 16](https://web.archive.org/web/20030219123738/http://www.coloradotime.com/aquaticproducts/mercury16/) (archived product page).
[^tshoot]: [Colorado Time Systems, Mercury & Myriad Troubleshooting Guide](https://coloradotime.com/support/mercury-myriad-troubleshooting-guide).
