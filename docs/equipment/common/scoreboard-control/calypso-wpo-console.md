---
title: Swiss Timing Calypso WPO console
description: >-
  The Calypso WPO console is Swiss Timing's keypad controller for water polo: it runs the game
  clock, shot clocks, scores, fouls, exclusions and timeouts and drives Calypso and Piccolo
  scoreboards, shot clocks and a horn.
tags:
  - Equipment
  - Scoring
  - Timing
  - Water polo
infoboxTitle: Calypso WPO console
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3403.900` (dealer listing)'
  - label: Type
    value: Water polo game and shot-clock controller
  - label: Also called
    value: WPO Saturn console, Saturn Waterpolo controller
  - label: Display
    value: 240 × 128 pixel LCD
  - label: Scoreboards
    value: '[Calypso](equipment/common/scoreboard/calypso.md), [Piccolo](equipment/common/scoreboard/piccolo.md)'
  - label: Connection
    value: RS422 scoreboard port; RS232 to a PC; external start/stop, possession and timeout inputs; Bluetooth option
  - label: Dimensions
    value: 90 × 285 × 205 mm (H × L × D)
  - label: Weight
    value: 1.3 kg
  - label: Power
    value: 9–18 V DC
  - label: Manual
    value: Calypso WPO Console Instructions for Use (3403.504.02, version 2.7, January 2026)
---

<!--
Research notes, Calypso WPO console. Stub surfaced while building out calypso.md; built out
2026-10-08.

Read in full (sources/vendors/swiss-timing/):
- timers-consoles/swiss-timing-wpo-calypso-console-user-manual-3403.504.02: "Calypso WPO Console
  Instructions for use", v2.7, January 2026 (PDF created 12 January 2026), 39 pages, English.
  Running header on many pages "WPO Saturn Console". Version history: 1.0 initial; 2.0 "Waterpolo
  version"; 2.1 pinning table fixed; 2.2 new photos; 2.3 30 s/20 s shot-clock reset; 2.4
  scoreboard examples; 2.5 and 2.6 coach's external timeout; 2.7 added 3.2.6 and updated
  configurations. The 3.2.x arrangement pages were viewed as rendered images: each shows the
  Console set screen (Ext. S/S, Ext. Poss., Ext. Timeout ticks), the Shotclock settings screen
  (Shot clock, Time 1 25 s, Time 2 15 s, Duration 2 s, Link S/S, No stop, 1/10s) and which of
  up to two external boxes (a start/stop toggle and a reset button) are cabled. Seven
  arrangements: console switch only; external start/stop for game time; console for game time
  plus external reset; external start/stop and reset; console for game time plus external
  external start/stop with shot-clock reset; and two two-box arrangements (3.2.6, 3.2.7). The
  coach's timeout contact is normally open by default.
  Firmware example "Ver. 1.63"; firmware files named 2054.xxx.fpr or .mot; loaded from a PC with
  FlashSimple (device H8S/2134F, direct connection, 9600 baud, user mode) over RS232 cable
  9051.1307, about 4 minutes, followed by "All def. & Save".
  Time of day: the manual says a Saturn board can receive the clock time from the console (and nothing else).
  Settings: periods 0-9 (default 4) plus extra periods; period length default 8 min; extra
  periods default 2 of 3 min; three break lengths, defaults 2, 3 and 5 min; count down by
  default; tenths in the last minute; shot clock Time 1 25 s, Time 2 15 s (0-99), horn 2 s
  (0-15); timeouts 2 (0-3), 60 s (0-99), horn 15 s before end; horn lengths for period end 3 s,
  one minute left 1 s, pause and timeout 3 s, before end of timeout 1 s; optional one-second
  horn 30 s before the end of a break; scoreboard 6/8/10 lines (default 6). Fouls/score options
  reference "909, 919 or 929" and "908 or higher" tables, apparently Swiss Timing scoreboard
  model codes; not identified. Up to 16 players a side; player names unavailable in the Calypso
  water polo version; team names need module 3400.740.
  8.1: H 90 x L 285 x D 205 mm, 1.3 kg. 8.2: damp microfibre cloth, a little soapy water if very
  dirty. 8.3: store -10 to 60 C, work 0 to 45 C.
  10: SCB RS422 Tuchel 7-pin female (1 +12 V, 3/4 TX1 -/+, 5/6 TX2 -/+, 7 ground); PC RS232
  Sub-D 9 (2 TX, 3 RX, 5 ground); POSSESSION 3-pin (home, visitors, common); START/STOP + RESET
  3-pin (reset, start/stop, common); START/STOP 3-pin; DC 9-18 V DIN 4-pin male; horn on banana
  terminals. With the Bluetooth option fitted, TX1 (pins 1-2 per the warning; the table puts TX1
  on 3-4) is lost, so boards go on the other pair; the manual's two statements of the pin numbers
  disagree, and the text avoids pin numbers.
- timers-consoles/swiss-timing-calypso-user-manual-3403.500 (v2.2, August 2016): Calypso is
  compatible with Quantum, "Saturn controller" or ARES; appendix 5.1 "Calypso with waterpolo
  controller" shows 6-, 8-, 10-line horizontal and vertical layouts.
- timers-consoles/swiss-timing-calypso-alphanum-user-manual-3403.507 (v1.2, June 2018), 2.3: the
  alphanumeric line takes either the Calypso protocol, listed as coming from Quantum, ARES or a
  "Saturn Calypso Waterpolo", or the
  Saturn protocol ("Saturn console", team names). This is the clearest statement that the water
  polo console is a Saturn-family console speaking Calypso protocol.
- pace-clocks/swiss-timing-wpo-shotclock-user-manual-3403.511 (v1.1/1.2, March 2014): shot clock
  kit cable joins the power and horn unit to a Saturn console or an ARES; unit has
  Tuchel 7-pin DATA IN and DATA OUT and Harting 5-pin RS485 outputs to the clocks.
- pace-clocks/swiss-timing-wpo-gt-shotclock-user-manual-3403.514.02 (v1.1, September 2023): kit
  includes a cable for a "WPO Saturn" console; shot clock with game time 3403.790.

Web, read 2026-10-08:
- AVK Group (Austrian Swiss Timing representative): "OMEGA CALYPSO Waterpolo controller" 3403.900
  (https://www.avkgroup.at/catalog/3403.900/): water polo only, 285 x 210 x 84 mm, 1.5 kg, FINA
  requirements, software updatable. "OMEGA Multisport controller SATURN 2" 3500.900
  (https://www.avkgroup.at/catalog/3500.900/): 34 keys (16 software-defined), start/stop switch,
  5.4 in 240 x 128 monochrome graphics LCD, 115-230 VAC adapter, IP43, 285 x 210 x 84 mm, 1.5 kg.
  STWP water polo system (https://www.avkgroup.at/catalog/STWP/): Calypso water polo controller
  with 240 x 128 LCD and a connected start/stop/reset button, Calypso or Montreal shot clocks,
  Coyote horn, Calypso or video board; "World Aquatics Approved" (dealer claim). Identical
  dimensions, weight and display for the two controllers suggest one hardware platform with
  different software; inferred, not stated by any source. The AVK size and weight disagree
  with the manual's 90 x 285 x 205 mm and 1.3 kg; flagged in the text.
- Swiss Timing, Saturn 2 datasheet DOCM_SCB_Saturn2_0913_EN.pdf (PDF May 2013): Saturn 2
  multisport scoreboards succeed the Saturn (used at Athens, Beijing, Torino, Vancouver, Sochi);
  the controller has a 240 x 128 LCD and links to the boards by RS485; software for basketball,
  volleyball, handball, hockey, netball, tennis, badminton, table tennis, indoor football (no
  water polo). Controller article number not in the datasheet.
- Swiss Timing, Calypso LED shot clocks datasheet DOCM_WP_CalypsoShotClock_1020_EN.pdf (code
  Calypso_Shot Clocks/10-2015, PDF October 2020): clocks are "connected to and synchronized with
  Saturn Waterpolo controller"; kit includes a "connection cable to Saturn WPO controller" and a
  "Start/Stop button for WPO controller"; 30/20 s clocks.
- Swiss Timing, Montreal LED shot clocks datasheet DOCM_WP_MontrealLEDshotClocks_0913_EN.pdf
  (MONTREAL_SHOT_CLOCKS_WP_3435_1303, PDF May 2013): kit 3435.904, synchronised with "an optional
  Calypso Water polo controller".
- AVK, Coyote horn 3435.900 (https://www.avkgroup.at/catalog/3435.900/): 115/230 VAC, supplies
  24 V DC to the shot clocks, 113 dB at 1 m, Tuchel 3-pin power, 2 Tuchel 7-pin data, 2 Harting
  5-pin; 210 x 350 x 225 mm, 7.8 kg.
- World Aquatics Competition Regulations 2026, Part Six (local copy rules/world-aquatics/
  wa-competition-regulations-2026): four 8-minute periods (4.1); intervals 2, 5 and 2 minutes
  (4.3); a tie goes to a penalty shootout (4.4.2); two 1-minute timeouts per team per match
  (5.1, 5.3); possession limited to 28 s (9.1, 9.3) with an 18 s limit after certain restarts
  (9.10); exclusions end after 18 s (10.5.2.1); shot clocks visible to officials and players
  (21.12).

Not found: a Swiss Timing product page or datasheet for the console itself; an introduction date;
any independent (non-dealer) account of it in use; what the 909/919/929 tables are; whether the
possession input drives a possession arrow on the board.
-->

The Calypso WPO console is the keypad controller that Swiss Timing makes for water polo. From the
officials' table it keeps the score and runs the game clock, the shot clocks, team fouls,
exclusions and timeouts, and sends them to [Calypso](../scoreboard/calypso.md) or
[Piccolo](../scoreboard/piccolo.md) scoreboards. It also drives Swiss Timing's
[water polo shot clocks](../pace-clock/swiss-timing-shot-clocks.md) and a horn.[^manual] The
manual's running header calls it the WPO Saturn Console, and the shot-clock documents call it
the Saturn Waterpolo or WPO Saturn controller.[^manual][^shotds][^shot2023] A Swiss Timing
representative in Austria lists it as the Omega Calypso Waterpolo controller, article
`3403.900`.[^avkwpo] The general background on scoreboard controllers is on the
[scoreboard control overview](index.md).

## Naming and the Saturn family

Saturn is Swiss Timing's line of multisport indoor scoreboards. Its controller has a 240 × 128
pixel LCD and connects to the boards over RS485, and the current Saturn 2 controller comes loaded
with rules for basketball, volleyball, handball, hockey and other hall sports.[^saturn2] Water
polo is not among them. The water polo console belongs to the same family. Swiss Timing's own
documents call it a Saturn console, its manual's version history lists version 2.0 as the
"Waterpolo version", and the manual notes that a Saturn scoreboard can show the console's clock
time.[^manual][^shot2023]

The difference is the protocol it speaks. Swiss Timing's manual for the Calypso alphanumeric
line distinguishes the "Saturn Calypso Waterpolo", which sends the Calypso protocol used by its
Quantum and ARES timers, from the plain Saturn console, which sends the Saturn
protocol.[^alpha] That fits the console's two names: a Saturn controller, set up to drive Calypso boards for
water polo.

Austrian dealer AVK lists the two controllers with the same 285 × 210 × 84 mm case, the same
1.5 kg weight and the same 240 × 128 display, which suggests one hardware platform loaded with
different software.[^avkwpo][^avksat][^avkstwp] Swiss Timing does not say so directly. The
console's own manual gives different figures for its case, 90 × 285 × 205 mm and
1.3 kg.[^manual]

## Role in the scoreboard system

In a water polo installation the console is the centre of the officials' table. A cable from
its scoreboard port carries data to the Calypso or Piccolo boards. The shot clocks take their
data and power from a separate power and horn unit, which is cabled back to the console. That
unit sounds when the possession time runs out.[^manual][^shot2014][^shot2023] Swiss Timing's
[Quantum Aquatics](../../swimming/timers/quantum.md) and [ARES 21](../../swimming/timers/ares-21.md)
timers can also drive Calypso boards, and the ARES had its own
[water polo program](../../../software/ares-water-polo.md) and could run the same shot
clocks.[^calypso][^shot2014] The console does the job without a timing system behind it.

## Design and controls

The console is a desk unit with a monochrome graphic display in the middle of its face. Four
function keys sit above the display, four below and several on each side, and each key's job is
shown on the screen next to it. To the right is a numeric keypad that doubles as a phone-style
letter pad for names. There are also ESC, Shift, Horn, Enter, CLR and two arrow keys, and a
START/STOP toggle switch that runs the game clock.[^manual]

The main menu has four entries:[^manual]

- Console set: firmware version, external-control settings, scoreboard and Bluetooth options,
  team and player names, and the firmware upload.
- Time: the clock and calendar. An internal battery keeps the clock running for 30 days with
  the console switched off, and settings are kept indefinitely.
- Select: the game settings for each sport, saved per sport, with a reset to the factory values
  for one sport or for all.
- Play: running a match.

## Game settings

Settings are saved separately for every sport. The water polo defaults are shown below, set against the
current World Aquatics rules.[^manual][^wacr]

| Setting | Console range | Default | World Aquatics, 2026 |
|---|---|---|---|
| Periods | 0–9 | 4 | 4 |
| Period length | Minutes and seconds | 8 min | 8 min of actual play |
| Extra periods | Configurable | 2 of 3 min | None; a tie goes to a penalty shootout |
| Breaks | Three preset lengths | 2, 3 and 5 min | 2 min, 5 min at half time, 2 min |
| Clock direction | Up or down | Down | Not specified |
| Possession time | 0–99 s, two values | 25 s and 15 s | 28 s, and 18 s after certain restarts |
| Timeouts | 0–3, per game or per period | 2 per game | 2 per team per match |
| Timeout length | 0–99 s | 60 s | 1 min |

The console's defaults do not match the current possession rule, and the manual does not agree
with itself either. Its headings and version history refer to resetting the shot clock to 30 s
and 20 s, while its settings screens and default table show 25 s and 15 s.[^manual] Swiss
Timing's 2015 shot-clock datasheet also describes the clocks as 30/20 s.[^shotds] World Aquatics
now allows 28 s of possession, and 18 s after a penalty throw, a corner throw and some other
restarts.[^wacr] An operator has to set both values by hand before a match played under current
rules. Likewise, the factory extra periods have no place in a World Aquatics match, which is
decided by a shootout when it ends level.[^wacr]

Other settings cover the scoreboard and the horn:[^manual]

- Tenths of a second during the last minute of a period, and during the last 10 s of possession.
- Whether game time stops when the shot clock reaches zero. The shot clock can also be started
  together with the game time, or blanked when the remaining game time is shorter than a full
  possession.
- Six programmable exclusion times, a maximum number of personal fouls per player, and whether
  the console asks for the player's number with each goal or foul.
- Horn lengths at the close of each period, with one minute to go in the final period, at the
  close of a break or timeout, and a warning before a timeout ends. An optional one-second horn can
  sound 30 s before a break ends.
- The scoreboard type: Calypso or Piccolo, horizontal or vertical, and 6, 8 or 10 lines.

## Running a match

On entering Play the console asks whether to pick up the last game or begin afresh. It will not
start while the START/STOP switch is in the START position.[^manual]

The screen is split into the game area in the middle and a column for each team. Raising the
switch starts the period. The operator adds goals, team fouls, exclusions and timeouts with the
function keys beside each team, and takes them back with Shift. If player tracking is enabled,
the console asks for a cap number with each goal or foul. It tracks which players are in the pool,
and drops a player from the lineup on reaching the foul limit or on being excluded. Exclusions
count down on the board, and the operator can correct them or reassign them to another
player.[^manual]

Game time can be corrected while stopped, down to the tenth of a second, together with the
possession time and each team's exclusion times. When game time is changed, the console offers
to shift all the exclusion clocks by the same amount. A countdown of any length can be shown at
any stoppage, for example for a warm-up.[^manual]

The period does not advance by itself, so that scores can be corrected first. When a
period ends the operator moves on and chooses whether to reset team fouls, timeouts, both or
neither. A preset break or no break can then be shown before the next period. After the final
period the console offers an extra period or ends the game. After GAME OVER the game cannot
be restarted.[^manual]

## External controls

The console can share control with switches on the deck. A start/stop box and a reset button
plug into two 3-pin sockets on the back.[^manual][^shotds] The manual shows seven
arrangements. At one extreme the console's own switch runs everything. At the other, one
external switch runs the game clock and a second one starts, stops and resets the shot clock.
In between, the external box takes over the shot clock only, or the game clock only.[^manual]
On the reset button a single press returns the shot clock to the first possession time and a
double press to the second.[^manual]

A third socket takes a coach's timeout contact, normally open by default. A coach's request
can start the timeout immediately or wait for the operator to confirm it. At the start of the
third period the console asks whether the teams have changed ends, so that the two coaches'
buttons can be swapped. If play resumes before a timeout has run out, setting the switch to
START clears it.[^manual] A further 3-pin socket labelled POSSESSION has contacts for the home
and visiting teams. The manual gives its pinout but does not describe how it is used.[^manual]

## Scoreboards and peripherals

The console's examples show water polo layouts on six-line horizontal and ten-line vertical
Calypso boards, and on a Piccolo. Each team's score, timeouts and up to three exclusion clocks
are shown, plus the period and game time.[^manual] Team names need an optional team-name module,
article [`3400.740`](calypso-team-name-module.md). The water polo version cannot send player
names.[^manual] A test function sends a test pattern to the boards, though not every board type
supports it.[^manual]

With the optional internal Bluetooth module the console can pair with Bluetooth-equipped
scoreboards that share its password. It steps through each board it finds and asks whether to
link it. The module takes over one of the two transmit pairs on the scoreboard socket, so wired
boards must then use the other one.[^manual]

Shot clocks are supplied as kits of two or four with a power and horn unit, 30 m and 70 m cable
reels and a cable to the console.[^shot2014][^shot2023] Dealer AVK offers two shot-clock
families with the console, the Calypso clocks and the larger
[Montreal shot clocks](../pace-clock/montreal-shot-clocks.md), together with the
[Coyote horn](../pace-clock/coyote-horn.md).[^avkstwp][^montreal]

## Connections

The rear panel carries:[^manual]

| Socket | Connector | Use |
|---|---|---|
| SCB | Tuchel 7-pin female | RS422 to the scoreboards: +12 V, two transmit pairs, ground |
| PC | 9-pin Sub-D | RS232, for firmware updates |
| POSSESSION | 3-pin | Home and visitors contacts, common |
| START/STOP + RESET | 3-pin | External start/stop and shot-clock reset |
| START/STOP | 3-pin | Second external start/stop |
| POWER | DIN 4-pin male | 9–18 V DC |
| HORN | Banana terminals | Horn output |

## Firmware

New firmware is loaded from a PC. The console connects to the PC's serial port, directly or
through a USB adapter, with a straight 9-pin cable (Swiss Timing `9051.1307`).
[FlashSimple](../../../software/flashsimple.md), a program Swiss Timing provides for download,
writes the file to the console's Renesas H8S/2134F microcontroller in about four
minutes.[^manual] After an update the manual requires the operator to restore all sports to
their factory settings, which erases any saved settings.[^manual] The firmware shown in the
2026 manual is version 1.63.[^manual]

## Care and maintenance

Swiss Timing asks for the console to be wiped with a soft cloth, slightly damp, or with a
little soapy water if it is very dirty, keeping water out of the openings. It is stored clean
and dry.[^manual]

## Specifications

| Specification | Value |
|---|---|
| Display | Monochrome graphic LCD, 240 × 128 pixels[^avkstwp] |
| Controls | Function keys, numeric keypad, START/STOP switch |
| Players per team | Up to 16 |
| Scoreboard output | RS422, Tuchel 7-pin; two transmit pairs |
| PC port | RS232, 9-pin Sub-D |
| External inputs | Start/stop, start/stop and reset, possession, coach's timeout |
| Wireless | Optional internal Bluetooth module |
| Power | 9–18 V DC, DIN 4-pin |
| Clock backup | 30 days on the internal battery |
| Dimensions | 90 × 285 × 205 mm (manual); 285 × 210 × 84 mm (dealer) |
| Weight | 1.3 kg (manual); 1.5 kg (dealer) |
| Operating temperature | 0–45 °C |
| Storage temperature | −10–60 °C |

## Part numbers and accessories

- `3403.900`: Omega Calypso Waterpolo controller, per AVK.[^avkwpo]
- `3400.740`: [team-name module](calypso-team-name-module.md), needed to send team names.[^manual]
- `9051.1307`: RS232 cable for firmware updates.[^manual]
- `3403.950.CA`, `3403.951.CA`, `3403.790`: [Calypso water polo shot clocks](../pace-clock/swiss-timing-shot-clocks.md).[^shot2023][^avkshot]
- `3435.904`: [Montreal shot clocks](../pace-clock/montreal-shot-clocks.md) with game clock.[^montreal]
- `3435.900`: [Coyote horn](../pace-clock/coyote-horn.md).[^avkcoyote]
- `3500.900`: [Saturn 2](../scoreboard/saturn-2.md) multisport controller, the hall-sports
  counterpart.[^avksat]

## See also

- [Calypso](../scoreboard/calypso.md) and [Piccolo](../scoreboard/piccolo.md): the scoreboards it drives
- [Swiss Timing water polo shot clocks](../pace-clock/swiss-timing-shot-clocks.md): the possession clocks it runs
- [Saturn 2](../scoreboard/saturn-2.md): the multisport scoreboard family it belongs to
- [WTTC-1 Tabletop Controller](wttc-1.md): the Colorado Time Systems water polo controller
- [Water polo equipment](../../water-polo/index.md): the water polo equipment overview
- [Scoreboard control](index.md): the scoreboard control overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: Swiss Timing, Calypso WPO Console Instructions for Use (3403.504.02, version 2.7, January 2026).
[^alpha]: Swiss Timing, Calypso Alphanumerical 17-character Line User's Manual (3403.507, version 1.2, June 2018), 2.3.
[^calypso]: Swiss Timing, Calypso 8-digit LED Scoreboard User's Manual (3403.500, version 2.2, August 2016).
[^shot2014]: [Swiss Timing, Water polo Shot Clocks User's Manual (3403.511)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3403.511_WPO_Shotclock_User_Manual.pdf) (March 2014).
[^shot2023]: Swiss Timing, WPO Shot Clocks User's Manual (3403.514.02, version 1.1, September 2023).
[^shotds]: [Swiss Timing, Calypso LED Shot Clocks datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_WP_CalypsoShotClock_1020_EN.pdf) (Calypso_Shot Clocks/10-2015).
[^montreal]: [Swiss Timing, Montreal LED Shot Clocks datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_WP_MontrealLEDshotClocks_0913_EN.pdf) (2013).
[^saturn2]: [Swiss Timing, Saturn 2 Multisport Scoreboard datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_SCB_Saturn2_0913_EN.pdf) (2013).
[^avkwpo]: [AVK Group, Omega Calypso Waterpolo controller (3403.900)](https://www.avkgroup.at/catalog/3403.900/) (Swiss Timing representative).
[^avksat]: [AVK Group, Omega Multisport controller Saturn 2 (3500.900)](https://www.avkgroup.at/catalog/3500.900/).
[^avkstwp]: [AVK Group, Water polo scoring and timing system (STWP)](https://www.avkgroup.at/catalog/STWP/).
[^avkshot]: [AVK Group, Omega Calypso shot clocks](https://www.avkgroup.at/catalog/3403.951.CA/).
[^avkcoyote]: [AVK Group, Coyote Horn (3435.900)](https://www.avkgroup.at/catalog/3435.900/).
[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), Part Six, 4, 5 and 9.
