---
title: DisplayLink
description: >-
  DisplayLink is the Colorado Time Systems matrix-display software of the 1990s
  and 2000s, replaced by DisplayLink Plus.
tags:
  - Software
  - Scoring
  - Timing
  - Swimming
  - Diving
  - Water polo
  - Artistic swimming
---

<!-- Research notes (do not publish):
  Local sources, all under sources/vendors/colorado-time-systems/software/:
  cts-displaylink-3.7-for-matrix-display-systems-software-user-guide-f888.pdf
  (DisplayLink 3.7 Users Guide, F888 Rev. 0404, (c)2004);
  cts-displaylink-3.6-for-myriad-and-mercury-matrix-display-systems-f837.pdf (3.6,
  F837 Rev. 0404; the -f837-2.pdf copy is a lower-resolution scan of the same
  document, byte-identical in its extraction);
  cts-displaylink-template-editor-1.5-for-matrix-and-video-display-f855.pdf
  (Template Editor v1.5 Users Guide, F855 Rev. 0404);
  cts-displaylink-aqualink-1.6-and-1.7-displaying-aquatic-sports-on-f854.pdf
  (AquaLink v1.6 & 1.7 Users Guide, F854 Rev. 0404). Display hardware comes from
  ../scoreboards-displays/cts-myriad-mercury16-display-manual-f853.pdf (F853 Rev. 0100).

  Diff of the 3.6 and 3.7 guides, which are otherwise the same document:
  - 3.6 is written for the Myriad and Mercury lines by name; 3.7 is genericized to
    matrix and video displays.
  - 3.6 imports .bmp and .gif; 3.7 adds .jpg.
  - 3.6 documents Display Intensity under the Settings menu (whole board, or per 8x8
    segment, with MIN/HALF/MAX, increment/decrement, and per-color adjustment); no such
    text appears in the 3.7 extraction. Do not conclude 3.7 dropped it. The 3.7 reference
    section is laid out differently and the extraction may simply have lost it.
  - Both guides list a Meet menu (AquaLink) in their contents, and in both extractions the
    body text for that menu is missing between the Template and Game menu entries. F854
    covers the same ground, so nothing is lost, but the gap is in the extraction, not the
    article.
  - The upgrade procedures differ in an interesting way: 3.6 has the installer delete
    MYRIADRN.AX, CTSMYRTRNS.AX and AQUALINK.OCX among five files, while 3.7 deletes six,
    including OlympxRN.ax, pOlympxScbdParams.exe, ptOlympxSim.dll and
    Industx7200_Win2k.dll. The display-driver components were renamed off the Myriad brand
    between the two releases. That is suggestive, not evidence of a hardware change, so it
    is not in the body.
  - 3.6 supports upgrading from floppy disk or CD; 3.7 documents CD only.

  Dating. No CTS document states when DisplayLink was introduced or withdrawn. The
  earliest attestation found is CTS's own advertising in the periodicals: Swimming World
  April 1996 (199604.txt line 1314, PDF page 24 of 72) announces the Mercury line, described
  there as indoor full-matrix boards built from LEDs, and says every one ships with
  DisplayLink.
  September 1996 (199609.txt line 3768, PDF page 61) repeats it and adds LSA to Hy-Tek in
  the list of meet management software it interfaces with. Swimming World February 1997
  (199702.txt line 5347, PDF page 55) introduces the multi-color Myriad. The last
  DisplayLink advertisement found is Swimming World September 2000 (200009.txt line 4043,
  PDF page 55). Printed page numbers are not recoverable from these scans, so the
  citations give month and year only. This is CTS ad copy: it dates the product but is not
  independent reporting.

  Version history. Template Editor 1.5 (F855) says it opens only 3.x template files, and
  that a 2.0 file has to be opened in DisplayLink 3.x first, which converts it. That is the
  only attestation of DisplayLink 2.0 anywhere in the corpus. AquaLink's own guide says
  multiple-timer operation arrived in AquaLink 1.2, so the module also had a 1.x history
  before the versions documented here. Standalone templates need Template Editor 1.3 or
  later.

  The supersession date is bounded, not fixed: the DisplayLink Plus release notes (in
  displaylink-plus-help/21-release-notes) record 4.0.10 as the first public release with no
  date, and date 4.0.22 to 21 October 2010.

  Catalogue check, done on a later pass and worth not repeating: the string DisplayLink
  does not appear at all in catalogs-brochures/cts-making-time-count-high-impact-visual-display-systems-complete
  (the 2008 display catalogue) or in
  start-systems/cts-complete-timing-scoring-training-and-display-solutions-2011-2011, and
  neither names Myriad or Mercury. The 2015 catalogue of the same series carries a
  DisplayLink+ section at line 943. Absence from a catalogue is weaker than a withdrawal
  notice, since a catalogue chooses what to print, but three editions in a row is worth
  something. CTS's public manuals index (coloradotime.com/support/manuals) lists no
  DisplayLink or DisplayLink Plus manual either; the only DisplayLink entry on it is F1062.

  Other DisplayLink-era documents in the collection, not yet mined: the media converter
  setup instructions F850, which end by walking the operator into the DisplayLink program,
  and the Sky-Fi WA-1 instructions, which name the DisplayLink computer as a destination
  for wireless scoreboard data.

  One defect worth knowing about in F855: the Template Data section on page 2-2 introduces
  a list of programs that can feed a template ("External PC running one of the following
  programs:") and the list is simply absent. Checked in the PDF itself with PyMuPDF, not
  just the extraction: the page has no images and no text beyond what is quoted, so the
  omission is CTS's, not the extraction's. The two items that do survive, the external
  GameLink console and ASCII text sources, are siblings of that heading rather than members
  of the missing list.

  Still open: the introduction and withdrawal dates; the 1.x and 2.0 history; part numbers
  for the software and for the GameLink console; whether GameLink was ever sold separately;
  what HWPM 110 and HWPM 220 (named in F853 as optional display equipment) are; and what
  the Swim IV timer, named in both guides, actually was.
-->

DisplayLink is a Windows program from [Colorado Time Systems](../vendors/colorado-time-systems.md)
(CTS) that drove the company's matrix displays before
[DisplayLink Plus](displaylink-plus.md) replaced it. It composed what appeared on the board
from three kinds of content: frames and slide shows built in the program itself, graphics
and animation files imported from disk, and templates that placed live timing and scoring
data at fixed positions. The data came from a CTS timing console, or from meet-management
software running on another computer, over serial ports the operator assigned.[^f888][^te15]

The program is the 3.x generation of a product line that CTS advertised from 1996, when
every Mercury display was sold with it.[^ad9604] Its aquatic-sports features are not in the
program itself but in AquaLink, a module reached from the same menu bar, with GameLink as
the team-sports counterpart.[^aqualink][^f888]

## Naming and versions

Two releases are documented in full: 3.6, whose guide is written for the
[Myriad](../equipment/common/scoreboard/myriad.md) and
[Mercury16](../equipment/common/scoreboard/mercury16.md) lines by name, and 3.7, whose guide
covers matrix and video displays without naming a product. Both guides carry the same
revision, 0404, and a 2004 copyright, so the two releases were being documented in
parallel.[^f837][^f888] Beyond the title page the differences are small: 3.7 accepts JPEG
files as well as bitmaps and GIFs, and its upgrade procedure replaces a different set of
display-driver components.[^f837][^f888]

Earlier versions are attested only in passing. Template Editor will not open a template from
DisplayLink 2.0 directly; the file has to be opened in a 3.x release first, which offers to
convert it.[^te15] AquaLink's guide dates multiple-timer support to AquaLink 1.2, so that
module also had a history before the releases documented here.[^aqualink] Neither CTS
document gives an introduction date for any of them.

Version numbers are paired across the two products. AquaLink 1.6 requires DisplayLink 3.6
and AquaLink 1.7 requires 3.7, so a facility upgrading one had to upgrade the
other.[^aqualink]

## Role in the display system

DisplayLink ran on a computer CTS supplied, usually preloaded, which sat between the timing
equipment and the board. The display itself held no content: the software rendered each
frame and transmitted it, and a coaxial run from the computer to a wall plate carried the
data to the first Ethernet card inside the display.[^f853][^f888] CTS treated that computer
as part of the display system rather than as a general-purpose PC, and warned that
installing other software on it would void the warranty.[^f888]

Only a few kinds of device could fill a template. CTS names the System 6,
[System 5](../equipment/swimming/timers/system-5.md) and
[Swim IV](../equipment/swimming/timers/swim-iv.md) sports timers, meet-management software
running on another computer, an external [GameLink console](../equipment/common/scoreboard-control/gamelink-console.md),
and plain ASCII sources.[^f888][^te15] Serial ports were assigned in a COM Port Interfaces
window, one for the timer and one for the meet-management computer, and only one
meet-management computer could be attached at a time.[^f888][^aqualink]

## Program structure

Work is split across three windows opened from the main toolbar. Frames, text and slide
shows are built in the Designer window. The Library holds what has been saved for reuse, in
folders the operator creates: templates, typed text, imported graphics and animation, and
finished slide shows, and it is what the operator works from during an event. The Active
Display mirrors the board, and content reaches the board by double-clicking an item in the
Library or dragging it onto that window.[^f888]

Above those sat a menu bar. File closes the program, saving Library changes on the way out.
Settings holds the COM port assignments, the live video options, and a switch that stops the
program transmitting so that content can be prepared on a computer with no display attached;
in 3.6 it also holds a display intensity control that adjusts the whole board or an
individual 8x8 segment, with separate red, green and blue adjustment. Template installs
templates and sends quick messages. Meet and Game open AquaLink and GameLink. Windows
reopens the three main windows, and Help reports the running version and the size of the
attached display in pixels, which is the figure a template has to be built to.[^f837][^f888]

A slide show in progress is stopped from the Active Display with the right mouse button,
either at once or when the current loop finishes.[^f888]

## Frames, slide shows and animation

The unit of content in the Designer window is the frame. A frame holds an imported graphic,
one or more text boxes typed into a text editor, or an imported animation, and a series of
frames shown in turn is a slide show. Graphics are imported as bitmaps or GIFs, with JPEG
added in 3.7; animation is imported as AVI or QuickTime. Slide shows are saved as `.SLD`
files and a single saved frame as a `.DLG` file, either to the hard drive alone or to the
hard drive and the Library together.[^f837][^f888]

Each frame carries a time and three transition attributes. The time is either indefinite,
a duration in tenths of seconds through hours, or a rate of up to thirty frames per second
for animation built out of still frames. The three attributes govern how the frame arrives,
what it does while it is up, and how it leaves. Arrival and departure offer a straight cut,
a drag, a reveal, a louver effect that works in stripes, a sparkle that fills in random
pixels, a radar sweep and a cover, most of them with a choice of direction and a speed of
slow, medium or fast. While the frame is up it can simply hold, blink, invert, or toggle
every pixel between its two states.[^f837][^f888] An imported animation cannot use any of
this: its attributes are fixed, and only the sound switch stays available.[^f888]

## Templates

A template is a `.tpl` file that names the data items a board should show and fixes where
each one sits. Templates are installed into the Library through DisplayLink's own Template
menu; the editor cannot install them.[^te15] Sending a template to the Active Display
switches the board to live data, and the operator moves from one kind of content to
another, a template to a graphic to a slide show, by dragging the next item out of the
Library.[^f888]

Templates were designed in Template Editor, a separate program sold alongside DisplayLink
and documented in its own guide.[^te15] The editor works at the pixel dimensions of the
board, with a color palette matched to the display type, optional splitting of the design
area in half for two-timer layouts, and a properties window that reports the height, width
and corner coordinates of the selected item so that items can be aligned exactly. Alongside
any TrueType font installed on the computer, it offers fixed-width DisplayLink fonts in five
sizes from 3 × 5 pixels to 15 × 17, each a fixed size that cannot be scaled.[^te15]

The data items available depend on which modules are installed. Across the sports the
editor covers the aquatic side with swimming, diving, water polo, synchronized swimming,
team scores and a pace clock, and baseball, football, basketball, hockey, volleyball,
wrestling and soccer on the team-sport side, with a small set of items available to every
template: static text, the computer's time of day, a quick message area, a graphic and an
animation.[^te15] Items that normally repeat, such as a lane number or a team name, are
placed as a group: the editor asks how many are wanted and what number to start at, and
lays them out.[^te15]

Two features work around the fixed nature of a template. A quick message is a reserved
region that the operator fills at any time from the main window, with saved messages kept
in a history and each line either static or scrolling.[^f888] A standalone template, written
from the editor's File menu and requiring Template Editor 1.3 or later, is downloaded into
the display itself, so that a board can show data from a CTS timer or a GameLink keyboard
with no computer in the path at all. CTS treated this as a fallback for use when that computer was
unavailable, and required standalone templates to be designed in yellow whatever the
board's own colors.[^te15][^f888]

## AquaLink

AquaLink is the aquatic-sports module, reached from the Meet menu, and it covers swimming,
diving, water polo and synchronized swimming. It holds the names, affiliations and
scores that a template displays, and decides where the current event and heat number comes
from.[^aqualink]

Names reached the module four ways. The operator could type up to ten swimmers per heat
during the meet, or enter a whole meet in advance and step through it heat by heat. Where
meet-management software was in use, the entire event and heat list could be transferred
in one pass, either from a floppy disk written on the meet-management computer or over the
serial link, or the module could request each heat as it came up. CTS discouraged the last
method as the slowest, and noted that a serial transfer of that kind returns surnames only,
which in turn restricts how names can be formatted on the board.[^aqualink]

Event and heat numbers ran in one of two modes. In automatic mode the timing console
advances them, so the names on the board change when the console changes what it is timing.
In manual mode the operator holds that control, which is what allows names to be typed or
corrected during the session.[^aqualink]

Divers' names were typed in diving order into a single list, or downloaded from the diving
program on a CTS console, which required moving the serial cable and reassigning the COM
port for the transfer.[^aqualink] Team scores were entered for up to ten teams and sorted by
name or score, and from Hy-Tek Meet Manager 8.2 or later they could be downloaded
instead.[^aqualink]

Two features connect the module to the race itself. Auto Template Switching nominates a
template to appear when the start system fires or the operator presses start, and another to
appear when the console is reset at the end of the race, which suits a board too small to
show everything at once.[^aqualink] Multiple timer operation, from AquaLink 1.2, takes the
output of two consoles at once, whether a matched pair or one console of each generation,
onto a template designed for two; swimmer names and affiliations remain available for the
first timer only.[^aqualink]

## GameLink

GameLink is the team-sports counterpart, reached from the Game menu, and opens a window for
entering the statistics a game board shows, such as the clock, the score, the team names and
the period.[^f888] CTS also applied the name to hardware: an external
[GameLink console](../equipment/common/scoreboard-control/gamelink-console.md) and keyboard listed
among the devices that can feed a template, and named again as the source a standalone
template reads when no display computer is attached.[^te15]

## Displays it drove

The 3.6 guide names the displays directly: Myriad, Mercury16 and Outdoor Mercury16, with an
allowance for whatever CTS built next.[^f837] The separate display manual covers Myriad,
Mercury16 and the Mercury16 Sun Series together, and describes a board assembled from 8 × 8
pixel modules in module boxes, each row with its own controller and Ethernet card.[^f853]
The 3.7 guide drops the product names and describes its targets as matrix and video
displays.[^f888] Shared background on how those boards are built and powered is on the
[scoreboards overview](../equipment/common/scoreboard/index.md).

## Installation and system requirements

DisplayLink 3.x runs under Windows NT 4.0 with Service Pack 3 or later, or Windows 2000,
and installs to `C:\DisplayLink3`.[^f837][^f888] A single initialization file,
`DSPLYNK.INI`, holds the local configuration, including the Library folders and their
contents, and CTS advised keeping a copy of it against a rebuild.[^f888]

Upgrading was a manual procedure. A specific list of program and system files had to be
deleted before the new release was installed, because the installer would not overwrite
them, and a mismatched set produced errors at run time. Version 3.6 could also be upgraded
from floppy disk, by copying five files into place by hand and rebooting.[^f837][^f888]

## Compared with DisplayLink Plus

DisplayLink Plus is a different program rather than a later version of this one. It folded
the separate pieces together: the sports modules and the template editor are reached from a
single toolbar, where 3.x split them across menus and a second application. The template
format changed with it, and a 3.x template cannot be opened in DisplayLink
Plus.[^dlplushelp] The DisplayLink Plus release notes record 4.0.10 as its first public
release and date 4.0.22 to October 2010, which puts the changeover around then.[^relnotes]
CTS catalogues bracket the same period from the other side: neither the 2008 display
catalogue nor the 2011 general catalogue mentions DisplayLink or the Myriad and Mercury
displays at all, and by 2015 the catalogue is selling DisplayLink Plus under its own
name.[^cat08disp][^cat11][^cat15] A catalogue prints what is on sale that year rather than
recording what has been withdrawn, so this dates the disappearance loosely at best. CTS no longer lists a manual for either program, so the
3.x guides survive only in copies already distributed.[^manuals] Template Editor returned as an optional separate program in 2020, as the
[Standalone Template Editor](standalone-template-editor.md).[^relnotes]

## See also

- [DisplayLink Plus](displaylink-plus.md): the program that replaced it
- [Scoreboards](../equipment/common/scoreboard/index.md): the boards it drove
- [System 5](../equipment/swimming/timers/system-5.md) and
  [System 6](../equipment/swimming/timers/system-6.md): the consoles that supplied its data
- [Software](index.md): the software section overview
- [Colorado Time Systems](../vendors/colorado-time-systems.md): the vendor

See everything tagged [Software](../categories.md).

## References

[^f888]: Colorado Time Systems, DisplayLink 3.7 Users Guide (F888 Rev. 0404, ©2004). CTS no longer publishes it.
[^f837]: Colorado Time Systems, DisplayLink 3.6 Users Guide, for Myriad and Mercury Matrix Display Systems (F837 Rev. 0404, ©2004).
[^te15]: Colorado Time Systems, Template Editor v1.5 Users Guide (F855 Rev. 0404, ©2004).
[^aqualink]: Colorado Time Systems, AquaLink v1.6 & 1.7 Users Guide (F854 Rev. 0404, ©2004).
[^f853]: Colorado Time Systems, Myriad/Mercury16 Display Manual (F853 Rev. 0100).
[^ad9604]: Colorado Time Systems advertisement, *Swimming World*, April 1996 (Mercury LED full-matrix displays, each supplied with DisplayLink).
[^dlplushelp]: Colorado Time Systems, Display Link Plus Help (help file shipped with the software).
[^relnotes]: Colorado Time Systems, Display Link Plus Help, Release Notes topic.
[^cat08disp]: Colorado Time Systems, Making Time Count: High Impact Visual Display Systems (2008 catalogue).
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2011).
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2015), DisplayLink+ section.
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (no entry for either DisplayLink program).
