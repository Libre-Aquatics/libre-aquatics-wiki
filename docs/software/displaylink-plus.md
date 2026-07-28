---
title: DisplayLink Plus
tags:
  - Software
  - Scoring
  - Timing
  - Swimming
  - Diving
  - Water polo
  - Artistic swimming
---

DisplayLink Plus is a Windows program from [Colorado Time Systems](../vendors/colorado-time-systems.md) (CTS)
that drives the company's matrix and LED video displays. It composes what appears on the
board from three kinds of content: templates, which lay out live timing and scoring data in
fixed positions; sequences, which play a preset series of items in turn; and media files
sent straight to the board. The data that fills a template arrives from CTS timing
consoles, CTS wireless tabletop controllers, CTS Synchro Meet Manager, and meet-management
or FinishLynx software connected to the DisplayLink computer.[^help] CTS presents it as the
software for its LED video displays, and describes it as content-management software written
for aquatic facilities.[^ledvideo]

## Naming and versions

The product's name is written several ways in CTS's own material. The company's website and
shop, and the release notes inside the software, use DisplayLink Plus, DisplayLink+ and the
abbreviation DL+; the help file's own topic pages spell it Display Link Plus with a
space.[^help][^relnotes][^dlplus][^shop] This article uses DisplayLink Plus throughout. The
name distinguishes the 4.x program from the earlier DisplayLink 3.x software it replaced,
which is a separate application and not an earlier version of the same one.

The first public release was version 4.0.10. As of 2026 the current release is 4.7.0, issued
16 December 2025.[^relnotes][^dlplus]

## Role in the display system

DisplayLink Plus sits between the timing equipment and the display, and does not time or
score anything itself. A timing console such as the [Gen7 Serial Timer](../equipment/swimming/timers/gen7-serial.md)
or [System 6](../equipment/swimming/timers/system-6.md) runs the race and emits scoreboard
data; DisplayLink Plus receives that data, places it in the positions a template defines,
and renders the finished frame to the board. The fonts, colors, layout, background graphics
and sponsor content are all set in DisplayLink Plus rather than on the timer.

The board is driven as a video output. CTS states that DisplayLink Plus sends the whole of
the computer's monitor, with the board showing one region of it. Two consequences follow: a
template has to be built at the board's exact pixel dimensions, and anyone restreaming the
output has to crop it. CTS's example is a 544 × 272 template on a computer set to
1920 × 1080, cropped by 1376 pixels on the right and 808 at the bottom to leave just the
board.[^f1062]

The hardware between the computer and the board has changed over the years. For older
installations, CTS's troubleshooting notes name the CVC, CDC and VPU video processors, and
specify that a CVC must be set to PC mode for the computer's output to appear on the
board.[^help] A 2021 CTS document lists five display controllers it has shipped that can
produce a video output suitable for streaming: the MCTRL-300, MCTRL-600 and MIC-VPU-01,
which need a pass-through capture device, and the VX4 and MCTRL-660, which do not. The link
from the computer to the controller is a video cable, most commonly HDMI to DVI, though CTS
has also used DVI to DVI and DisplayPort.[^f1062]

## Program structure

The main window is divided into four panes whose positions are fixed, though most can be
resized or undocked. The Toolbar in the upper left is the entry point to every function.
The Library in the lower left holds the templates, images, videos and sequences the operator
has saved; its default location is the Windows Documents folder. The Active Display in the
upper center mirrors exactly what the board is currently showing. The Main Work Area in the
lower center holds a tab for each toolbar function the operator has opened, with a Preview
tab that is always present and cannot be closed.[^help]

Live data does not render in the Preview tab. Timing and scoring values, quick messages and
time of day appear only in the Active Display and on the board itself, so a template that
looks empty in Preview may still be correct.[^help]

Content reaches the board by double-clicking an item in the Library, dragging it to the
Active Display, or selecting it and pressing Enter. Right-clicking the Active Display offers
Pause Display, which freezes a changing item such as a running sequence while the operator
prepares the next one, and Clear Display, which blanks the board.[^help]

## Templates

A template is a file, with the extension `.tpl`, that names which data items to show, where
on the board each one sits, and how each is formatted. Templates are built in Template
Editor, which is the one toolbar function that opens in its own window rather than as a tab
in the Main Work Area.[^help]

Items are dragged onto the board surface from an Available Items list. The Core Items tab
holds the sport-neutral elements: static text, a quick-message placeholder, rectangle, round
rectangle, ellipse, line, image and computer time of day. The remaining tabs are grouped by
data source, so a swim-meet template draws lane, place, time, event and heat from the CTS
Aquatic Sports - Swimming tab.[^help]

Data items that repeat once per lane or per result line are placed through a Multiple
Modules dialog, which asks how many modules to create, which module number to start at,
whether to spread them vertically or horizontally, and how many pixels to leave between
them. Module numbers are how a template item is bound to a particular lane or line, and how
the same template can be pointed at one of up to four connected timers through the
Properties palette.[^help]

Formatting is split between two controls. The toolbars across the top position an element
relative to the board, while the Properties palette on the right sets what happens inside
the element's own bounding box. Changing an element's
font resizes its bounding box automatically to fit the text, so CTS advises setting the font
before stretching an item to its final width.[^help]

Templates can carry a background image, set from the Options menu, with data items placed
over it. The Computer Time of Day item reads the clock of the DisplayLink computer, which
lets a template act as a pace clock with no timing console connected at all.[^help]

Templates written in DisplayLink 3.x are not supported and cannot be opened.[^help]

Since version 4.6.0 a template can also carry dynamic team logos, image items that are
replaced at display time with a file whose name matches the incoming team abbreviation.
Logo files live in a folder named `TemplateLogos` at the top level of the Library, and PNG
should be used where a transparent background is wanted. In swimming the logo item's module
number must match the lane's: lanes 1 to 9 use modules `01` to `09`, lane 10 uses `0A`,
lane 11 uses `17` and lane 12 uses `18`.[^help][^relnotes]

## Sports modules and data sources

Each sport has its own toolbar button opening a data manager, which is where information not
supplied by the timer is entered or imported. This section describes what each module
contributes beyond the template itself.

The Swimming module carries the most settings. Its Name Data tab holds event information and
records, which can be typed in, imported from `.scb` files on disk or removable media, or
requested live from a connected meet-management computer. An Options tab selects whether
event and heat numbers follow the timer automatically or are advanced manually, chooses the
meet-management data source, and sets swimmers' name format (first, last or full) and
capitalization. An Edit Record Tags control declares which categories of record the board may
show, pool and championship records among them.[^help]

Diving builds dive orders with diver name and team affiliation, entered by hand or imported
from a text or XML file produced by most diving meet-management programs. Several events can
be prepared in advance and assigned to different connected timers, so one timer runs the
1-meter event while another runs the 3-meter simultaneously. A diving leader board can be
produced three ways:
using the System 6 overtake spots to show the top three places with no extra cabling; wiring
System 6 COM2 to the DisplayLink computer with its output set to DisplayLink Leaderboard,
which shows as many divers as wanted but cannot coexist with a meet-management connection;
or, on Gen7 Diving v1.2.0 and later, reading leaderboard data embedded in the main
scoreboard feed.[^help]

Water polo is handled in two different places depending on which device runs the match. A
match run from a timing console uses the CTS Aquatic Sports - Water Polo template items and
the Water Polo manager; a match run from a CTS wireless tabletop controller uses the CTS
MultiSport - Water Polo items and the MultiSport manager instead.[^help]

Synchro, the artistic-swimming module, accepts data from up to four CTS systems, which may
be timing consoles or laptops running CTS Synchro Meet Manager. Routine orders carry a team
name, a team abbreviation and up to eight athlete names, entered directly or imported from a
text or XML file. CTS notes that laptops running Synchro Meet Manager are configured under
the CTS Aquatic Sports section using the ports labeled CTS Timer, despite not being
timers.[^help]

MultiSport covers the non-aquatic sports driven by CTS tabletop controllers: baseball,
basketball, football, hockey and lacrosse, soccer, volleyball, wrestling, and water polo.
Track and Field takes results from FinishLynx or Hy-Tek software, with a separate template
tab for each.[^help]

Two further modules are shared across sports. Team Scores handles team scoring for swimming
and diving, either through dedicated template items or condensed into a quick message
showing rank, abbreviation and score; it keeps separate women's, men's and combined lists,
and can sort by score on sending. Results compiles all heats of a completed swimming event
into a single ranked list.[^help]

Both, along with Track and Field, share a Display Options dialog. Display Mode selects
scrolling, which advances one line at a time, or frame-by-frame, which pages through a
screenful at a time; Display Time sets how long each state is held, with CTS suggesting
about half a second for scrolling and about two seconds for frame-by-frame; Cut-off limits
how many entries are shown; and Items Count must be set to match the number of lines the
template actually provides.[^help]

A social media feature, which searches Twitter and Instagram for content to put on the
board, is documented inconsistently and its current status is unclear. The help file's
overview and toolbar topics describe it as a working function with its own toolbar buttons,
but the release notes record it as removed in version 4.3.0 because it was broken, with a
note that it would return in a future update, and no later entry records it
returning.[^help][^relnotes]

## Connections to timers and meet management

Data sources are declared under Settings, which also defines the board's height, width,
resolution and color capability. Sources are assigned by COM port, up to four CTS timers or
Synchro Meet Manager laptops, plus tabletop controllers and a meet-management computer, and
the physical or wireless connections must match the ports chosen on that screen. For a
wireless link, the help file names CTS's WA-1 and WA-2 adapters, while the Gen7 manual names
the later WA-2 and WA-3.[^help][^f1034]

CTS also instructs that the scoreboard definitions on the timing console be left at their
default values when the console feeds a video board through DisplayLink Plus. Its
troubleshooting notes name those definitions as the first thing to check when data appears
in the wrong field on the board.[^help][^f1034]

The meet-management link is a serial one. For Hy-Tek Meet Manager, CTS specifies the
scoreboard interface set to its Generic Serial option, a port configured for 9600 baud, 8
data bits, no parity and 1 stop bit, and a null modem in the cable between the two
computers; a USB-to-serial adapter may stand in where a machine has no COM port. The
scoreboard interface is a separately licensed Hy-Tek feature, sometimes labeled the Alpha
scoreboard interface.[^help][^support] Once configured, DisplayLink Plus can either accept a
bulk transfer or request fresh heat and event data each time the event or heat changes.[^help]

The Gen7 consoles changed this arrangement. Gen7 Swimming can take swimmers' names itself,
either pre-loaded from `.scb` files on a USB drive or sent live over a UDP network link from
the meet-management program, and pass them on to DisplayLink Plus inside the scoreboard
data. That removes the need for a second, direct connection between the meet-management
computer and the DisplayLink computer. CTS records this as requiring DisplayLink Plus v4.6.0
or later and an RS-485 rather than RS-232 link to the display computer. Team scores and
complete event results followed over the same path, added in Gen7 Swimming v2026 with
DisplayLink Plus v4.7.0.[^f1034][^relnotes]

## Sequences, video and scheduling

A sequence is a preset series of graphics and templates played in order, built in Sequence
Editor. Each entry carries a duration, an incoming transition (none, fade, slide, cover or
uncover) and a transition time, and the editor keeps a running total of the sequence's
length as entries are added.[^help]

Graphics and video can also be sent straight to the board without a template, in JPG, GIF,
BMP or PNG for stills and AVI, MPG or WMV for video; CTS states that any file Windows Media
Player can play, using whichever codecs are installed, will play in DisplayLink Plus. Text
and live data are the exception and can only reach the board through a template. Video
cannot be placed inside a template at all, though it can serve as the background layer of a
two-layer display. Live video and DVD playback come from external sources, and pass through
the DisplayLink computer only where a video capture card is fitted, in which case a Live
Video button appears on the toolbar.[^help]

Anything that can be displayed can instead be scheduled, by giving it a clock time and a
duration, optionally repeating each day, week, month or year. The Scheduler shows these in a
day, work week, week or month view. Sending something to the board by hand takes precedence
and switches the schedule off, and the operator has to switch it back on.[^help]

Auto Switch changes the board automatically when a chosen event occurs on the timer, which
lets a meet run without an operator driving the display. An On Start trigger brings up the
racing template with names and running time at the gun, and diving's On Next Diver and On
Scores Received triggers cover the two states of a dive. Auto Switch works only on the
background layer of a two-layer display.[^help]

## Two-layer display

On boards that support it, DisplayLink Plus composes the output from a background layer and
an overlay layer, giving two Active Display panes instead of one. The background may be a
template, live video, an animation or a graphic; the overlay may only be a template. The
feature needs a board with cropped VGA output, a second monitor attached to the DisplayLink
computer, and the option enabled in Settings.[^help]

An overlay template is made transparent through the Options menu in Template Editor, after
which the editing surface shows a checkerboard where the background will show through. CTS
suggests outlining overlay text in a contrasting color, since it will be read against
whatever is playing beneath it.[^help]

Multi-layer display arrived in version 4.2.7 in November 2013 as a separately purchased
option, and was included with all installations, disabled by default, from version 4.2.10 in
February 2014.[^relnotes]

## Predecessors

DisplayLink Plus replaced DisplayLink 3.x, a different program with the same purpose. The
3.x software ran under Windows NT 4.0 Service Pack 3 or later, or Windows 2000, and drove
matrix displays. It split its work across separate components: a Designer window for
graphics, animations and slide shows, and a separate Template Editor application. Its menu
bar carried a Meet menu for AquaLink, the aquatic-sports module, and a Game menu for
GameLink, the team-sports counterpart. CTS used the GameLink name for an external console
and keyboard as well, which could drive a display with no DisplayLink computer attached at
all. AquaLink 1.6 required DisplayLink 3.6 and AquaLink 1.7 required DisplayLink
3.7.[^dl37][^aqualink][^te15]

DisplayLink Plus folded all of this into one program, with the sports modules and Template
Editor reached from a single toolbar. The template format changed in the process, and 3.x
templates cannot be opened in DisplayLink Plus.[^help]

Template Editor returned as a separate application in version 4.3.14 in March 2020. This
time it is optional: the integrated editor stays, and the standalone build is sold on its
own.[^relnotes][^shop]

## Licensing and system requirements

DisplayLink Plus is licensed software, and the licensed feature list is visible from the
main window. The licensing arrangement has changed twice: version 4.3.0 in December 2018
moved to FlexNet and required existing customers to obtain new license files, and version
4.6.0 in August 2023 moved to a new licensing service and again required updated
credentials. CTS warns that upgrading from 4.4.x or earlier needs a new license file
obtained from customer support before the upgrade.[^relnotes][^dlplus]

Requirements have risen over the software's life. Version 4.2.14 in May 2015 made Windows 7
the minimum, and CTS states that version 4.7.0 requires Windows 10 or 11. Releases before
4.6.0 needed .NET Framework 3.5 SP1 installed as a prerequisite; 4.6.0 moved the program's
own runtime to .NET Framework 4.8. The software is not offered as a direct download, and CTS
directs customers to contact support for a link.[^relnotes][^dlplus] Parts of the help file
have not kept pace with this: the two-layer display topic still gives Windows Vista as a
minimum, a figure the release notes superseded in 2015.[^help][^relnotes]

Some parts of the program are sold separately. The standalone Template Editor is part number
`R-470-121`, and CTS also sells ready-made designer template packs for swimming, diving and
water polo at several board resolutions, and a Swimming Record Board Image Generator,
`R-470-122`.[^shop]

DisplayLink Plus is also a prerequisite for CTS AquaSync, the company's live-streaming
graphics overlay, which takes timing and scoring data through DisplayLink Plus and emits
NDI output for streaming software. Facilities without a CTS video board receive a reduced
build, DisplayLink Plus Lite, bundled with the AquaSync installer.[^aquasync][^aquasyncprod]

## See also

- [DisplayLink](displaylink.md): the 3.x software this program replaced
- [Standalone Template Editor](standalone-template-editor.md): the template designer sold as a separate application
- [CTS AquaSync](cts-aquasync.md): the live-streaming overlay that depends on it
- [Gen7 Serial Timer](../equipment/swimming/timers/gen7-serial.md) and [System 6](../equipment/swimming/timers/system-6.md): timing consoles that feed it
- [Colorado Time Systems](../vendors/colorado-time-systems.md): the manufacturer
- [Software](index.md): the software reference

## References

[^help]: Colorado Time Systems, Display Link Plus Help (help file shipped with the software).
[^relnotes]: Colorado Time Systems, Display Link Plus Help, Release Notes topic.
[^dlplus]: [Colorado Time Systems, DLPlus Installation Resources](https://coloradotime.com/software/dlplus).
[^shop]: [Colorado Time Systems, DisplayLink Plus](https://shop.coloradotime.com/collections/displaylink-plus).
[^ledvideo]: [Colorado Time Systems, LED Video Scoreboards](https://coloradotime.com/products/led-video-scoreboards).
[^support]: [Colorado Time Systems, DisplayLink Plus: Team Scores and Event Results](https://coloradotime.com/support/displaylink-plus-team-scores-and-event-results).
[^aquasync]: [Colorado Time Systems, CTS AquaSync](https://shop.coloradotime.com/products/cts-aquasync) (part number `R-470-123`).
[^aquasyncprod]: [Colorado Time Systems, AquaSync: Overlay Graphics for Live Streaming](https://coloradotime.com/products/aquasync-overlay-graphics-for-live-streaming).
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf), Appendix C (athlete name integration).
[^f1062]: [Colorado Time Systems, DisplayLink Video to Broadcast Software Instructions (F1062)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/LED%20Matrix%20Displays/Software/Displaylink_Video_to_Broadcast_Software_Instructions_F1062.pdf) (Rev. 202104).
[^dl37]: Colorado Time Systems, DisplayLink 3.7 Users Guide (document F888 Rev. 0404, 2004).
[^aqualink]: Colorado Time Systems, AquaLink v1.6 & 1.7 Users Guide (document F854 Rev. 0404, 2004).
[^te15]: Colorado Time Systems, Template Editor v1.5 Users Guide (document F855 Rev. 0404, 2004).
