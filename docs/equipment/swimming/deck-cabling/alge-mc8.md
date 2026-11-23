---
title: ALGE MC8 push-button cable
description: >-
  The MC8 is the ALGE-Timing eight-lane cable that carries the finish push buttons of a
  semi-automatic swimming system to the multiport socket of a Timy timer, sold as the MC8-SWIM
  and later the MC8-S2.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: MC8
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`MC8-S2`; earlier `MC8-SWIM`, also drawn as `MC8-S`'
  - label: Type
    value: 'Eight-lane push-button cable'
  - label: Lanes
    value: '8, one timing channel each'
  - label: Connection
    value: 'Banana sockets for [023-02](equipment/swimming/semi-automatic/pushbutton/alge-023-02.md) push buttons; 25-pin D-sub plug to a [Timy](equipment/swimming/timers/alge-timy.md)'
  - label: Weight
    value: '3,594 g (MC8-S2)'
  - label: Status
    value: 'Current (MC8-S2)'
  - label: Source
    value: '[MC8-S2 product page](https://alge-timing.com/en/product/2282/mc8-s2)'
---

<!--
Research notes, ALGE MC8 cables. Surfaced 2026-11-11 while building out alge-timy.md.
Built out 2026-11-23.

Local sources (sources/vendors/alge-timing/), each read in full for the passages concerned and the
drawings rendered with PyMuPDF:
- catalogs-brochures/alge-swimming-catalogue-v1.113-2013, p. 3: semi-automatic package for eight
  lanes; buttons joined by a cable named MC8-SWIM; start by STB1 startbeep; GAZ5 board; timer is a
  Timy2 PXE; a FLASH lamp with its own button. Drawing shows eight small boxes in a chain, one per
  lane, each with a 023-02 button hanging from it. ALGE calls the package low priced. Verified.
- catalogs-brochures/alge-general-catalogue-2017, p. 92: text names the cable MC8-SWIM and the timer
  a Timy3 WP, with an SPP start speaker. The drawing on the same page labels the cable "Adapter
  Cable MC8-S" and again shows eight boxes, one per lane. A separate start push button is drawn
  wired to the Timy3. The SPP line appears to join the cable near the timer end; not stated in
  text, so left out of the article. Text/drawing name mismatch: verified, flagged in the body.
  Same catalogue: MC9 is a Timy3 channel expansion with nine banana-jack pairs (channels 0 to 8)
  and an RS232/RS485 socket; TIDO docking station has four photocell DIN sockets, a multiport
  socket, two RS232 DIN sockets, a headset socket, a speech amplifier and nine banana-jack pairs.
- catalogs-brochures/alge-aquatic-sports-catalogue-swimming-ke-2026, p. 3: cable named MC8-S2, timer
  Timy3 WP, start on a BANG2 with a BANG-HS headset and a 023-10 start button, D-LINE board.
  Drawing: four junction boxes, each serving two lanes. Photo: four grey boxes, each with two red
  and two black 4 mm banana sockets and cable glands, joined by grey cable, with a long home-run
  lead ending in a 25-pin D-sub plug and a short lead ending in a pair of banana plugs (one
  yellow, one black). The catalogue says the cabling is made up as needed and that the photo
  shows the eight-lane form. Product listing (txt ~l. 1213): cable from the Timy3 WP to the lanes,
  one connection point between two lanes, one 023-02 per lane. Verified.
- timers-consoles/alge-timy-tracktimer-manual-e23-11-02: section 2, the lane program needs a TIDO
  or an MC9 besides the Timy; 3.1 wired drawing (rendered p. 5) labels the cable MC8-S, four
  two-lane boxes with red/black banana socket pairs, Timy3 WP, BANG with BANG-HS and a 023-10 start
  button cabled to the BANG, D-1xSW25-8-I board. 6.1 lane mode: lane n = channel n = display
  address n. 7.1.3 channel list gives C5 as 1/100, against 1/10,000 in both general manuals.
  Verified. The drawing shows the MC8 going straight into the Timy3 with no MC9 or TIDO, which
  contradicts section 2; flagged in the body.
- timers-consoles/alge-timy3-general-manual-e25-03-10, 11 and 11.1: 25-pin D-sub "Multiport"
  carries all nine channels c0 to c8 plus RS232, RS485, display data, horn output and power;
  C0-C5 1/10,000 s, C6-C8 1/100 s; normally open contacts, max loop resistance 2000 ohm per
  channel. Verified. timy2-general-manual-e130522, 5.1 and 11.1: identical pin assignment and
  the same resolution split. Verified. The MC8 plugging into this socket is inferred from the
  photo's D-sub plug plus the pinout; no document says it in words.
- timers-consoles/alge-timy2-swim-trainer-manual-e110330: the two-lane training program (see
  alge-mc2-s.md). No MC8 mention.
- website-archive/alge-product-pages-2026-11.txt, mc8-s2.html: for 8 lanes, Timy3 W(P), 3,594 g,
  accessories TIMY3 and MC2-S. Verified.
Web (read 2026-11-23):
- alge-timing.com/en/product/2282/mc8-s2: "MC8-S2 Semiautomatic Adapter" in the Adapter category;
  same facts as the archive; image caption calls the timer end an RS-232 plug and a banana plug.
  No length, no order number.
- alge-timing.com/en/product/2279/adapter: lists swimming adapters for Timy3 (MCx-xx) and the
  MC9. alge-timing.com/en/sports/aquatics/swimming: MC8-S2 in the semi-automatic set (TIMY3 WP-S,
  023-02, 023-10, E-START W, WTN-PB, BANG-HS, D-LINE, WTN-DB), MC2-S in the training set.
- alge-swimusa.com/systems/ and /modules/ (ALGE-Swim USA, the US distributor): names the MC8-S2,
  the Timy3 WP as having nine channels covering the start plus eight lanes, one connection point between two lanes. No MC8-SWIM.
  /solutions now returns 404 (cited from it elsewhere in the wiki).
Not established: length of the home run and of the links between boxes; what the short banana
lead at the timer end is for (start input, display output or horn are all possible); whether
MC8-SWIM, MC8-S and MC8-S2 differ beyond the name and the box layout; dates of each name; how
the MC8 fits the TrackTimer statement that an MC9 or TIDO is needed.
-->

The MC8 is the cable that [ALGE-Timing](../../../vendors/alge-timing.md) sells for wiring the
finish push buttons of an eight-lane semi-automatic swimming system to a
[Timy](../timers/alge-timy.md) timer. It runs along the finish end of the pool with banana
sockets for one [023-02](../semi-automatic/pushbutton/alge-023-02.md) button per lane, and it
ends in a 25-pin D-sub plug.[^cat2026][^product] ALGE's 2013 catalogue names it `MC8-SWIM`; the
current name is `MC8-S2`.[^cat2013][^cat2026]

See the [deck cabling overview](index.md) for the shared background on lane wiring, and the
[semi-automatic timing overview](../semi-automatic/index.md) for how button finishes are judged.

## Role in the timing system

In a semi-automatic system a timekeeper at each lane presses a button as the swimmer touches,
and the timer ranks the lanes in the order the presses arrive.[^cat2013] The MC8 gives each
lane's button its own wire back to the timer, so every lane lands on a separate timing
channel.[^cat2026][^swimusa] The start signal takes channel 0 and lanes 1–8 take channels 1–8;
in the Timy's TrackTimer program, lane, channel and display-board address carry the same
number.[^tracktimer][^swimusa]

ALGE's catalogues pair the cable with a different start device in each edition. The 2013 system
uses an [STB1](../starter/alge-stb1.md) startbeep and a Timy2 PXE. The 2017 one uses a Timy3 WP
with an SPP start speaker and a start push button wired to the timer. The 2026 one uses a Timy3
WP and a [BANG2](../starter/alge-bang.md) speaker, with the starter's 023-10 button plugged into
the BANG2 rather than into the MC8.[^cat2013][^cat2017][^cat2026] In ALGE's radio alternative,
WTN-PB wireless buttons take the place of the cable.[^cat2026]

## Design and construction

The 2026 catalogue photographs the MC8-S2 as four small grey junction boxes joined in a chain
of grey cable. Each box has two red and two black banana sockets, enough for the buttons of two
neighbouring lanes, and cable glands where the cable enters and leaves.[^cat2026] ALGE's product
page and its US distributor both describe the layout as one connection point between each pair
of lanes.[^product][^swimusa] The catalogue adds that the cabling is assembled to suit the
pool, and that the photographed set is the eight-lane form.[^cat2026]

ALGE's drawings do not all show the same layout. The 2013 and 2017 catalogue drawings put a
separate box at every lane, eight in all. The 2023 TrackTimer guide and the 2026 catalogue
show four boxes, one per lane pair.[^cat2013][^cat2017][^tracktimer][^cat2026] The sources do not
say whether this marks a hardware change or only a redrawn diagram.

## Connection to the timer

The long lead from the junction boxes ends in a 25-pin D-sub plug, with a second short lead
ending in a pair of banana plugs; ALGE's product page calls the D-sub an RS-232 plug.[^cat2026][^product]
The Timy2 and Timy3 have one 25-pin socket, which ALGE calls the multiport. Its pins carry all
nine timing channels, together with the RS-232 and RS-485 interfaces, display-board data, a horn
output and power.[^timy2][^timy3] The channels are normally open contact inputs, with a maximum
loop resistance of 2000 Ω each.[^timy3] What the short banana lead connects to is not stated.

The nine channels differ in resolution. Both the Timy2 and Timy3 general manuals give channels
0–5 a precision of 1/10,000 s and channels 6–8 a precision of 1/100 s, so lanes 6–8 are timed
to the hundredth.[^timy2][^timy3] The TrackTimer guide's channel
list instead gives channel 5 as 1/100 s as well, which would include lane 5.[^tracktimer]

The TrackTimer guide also says that lane timing needs either an ALGE
[MC9](../timers/alge-mc9.md) multichannel unit or a [TIDO](../timers/alge-tido.md) docking
station besides the Timy. ALGE's 2017 catalogue describes both as boxes that bring the nine
channels out to banana sockets.[^tracktimer][^cat2017] The wired drawing in the same guide shows
the MC8 running straight to the Timy3 with neither unit, and the 2026 catalogue's cable system
lists no MC9 either.[^tracktimer][^cat2026]

## Versions and naming

This section lists the names under which the cable has appeared.

| Name | Where | Timer | Drawn boxes |
|---|---|---|---|
| `MC8-SWIM` | 2013 catalogue text and drawing | Timy2 PXE | 8, one per lane |
| `MC8-SWIM` / `MC8-S` | 2017 catalogue (text / drawing) | Timy3 WP | 8, one per lane |
| `MC8-S` | TrackTimer guide, version E23-11-02 | Timy3 WP | 4, one per lane pair |
| `MC8-S2` | 2026 catalogue, product page | Timy3 W or WP | 4, one per lane pair |

The 2017 catalogue's text and drawing disagree on the name on the same page.[^cat2017] ALGE
lists the `MC8-S2` among its adapters as a "Semiautomatic Adapter" for use with the Timy3 W or
WP.[^product] Whether the `S2` suffix marks a revised design is not stated.

## Specifications

| | |
|---|---|
| Lanes | 8, one push button and one timing channel each |
| Lane connection | Red and black banana sockets, one connection point per two lanes (MC8-S2) |
| Timer connection | 25-pin D-sub plug, plus a short lead with two banana plugs |
| Timers | Timy2 PXE (2013); Timy3 W or WP (2017 onward) |
| Weight | 3,594 g (MC8-S2) |
| Length | Not stated |

## Part numbers and accessories

This section lists the cable and the parts ALGE names with it.

| Part | Description |
|---|---|
| `MC8-S2` | Current eight-lane cable[^product] |
| `MC8-SWIM` | Name in the 2013 and 2017 catalogues[^cat2013][^cat2017] |
| [`023-02`](../semi-automatic/pushbutton/alge-023-02.md) | Finish push button, one per lane[^cat2026] |
| [`023-10`](../semi-automatic/pushbutton/alge-023-02.md) | Start push button, plugged into the BANG2[^cat2026] |
| [`MC2-S`](alge-mc2-s.md) | Two-lane training adapter, listed with the MC8-S2[^product] |

## See also

- [MC2-S Training Adapter](alge-mc2-s.md): the two-lane adapter for training
- [SWT3 Swim Terminal](alge-swt3.md): the lane terminal of ALGE's fully automatic system
- [Deck cabling](index.md): the deck-cabling overview
- [Timy](../timers/alge-timy.md): the timer the cable plugs into
- [023-02 push button](../semi-automatic/pushbutton/alge-023-02.md): the lane button
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013), p. 3.
[^cat2017]: ALGE-Timing, General catalogue (2017), pp. 30 (MC9, TIDO) and 92 (semi-automatic system).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026), p. 3.
[^product]: [ALGE-Timing, MC8-S2 Semiautomatic Adapter](https://alge-timing.com/en/product/2282/mc8-s2) (product page).
[^tracktimer]: [ALGE-Timing, Timy TrackTimer](https://alge-timing.com/downloads/userGuides/Timy-TrackTimer-BE.pdf) (version E23-11-02), sections 2, 3.1, 6.1 and 7.1.3.
[^timy2]: [ALGE-Timing, Timy2 General](https://alge-timing.com/downloads/userGuides/Timy2-Allgemein-BE.pdf) (version E130522), 5.1 and 11.1.
[^timy3]: [ALGE-Timing, Timy3 General](https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf) (version E25-03-10), 11 and 11.1.
[^swimusa]: [ALGE-Swim USA, Systems](https://www.alge-swimusa.com/systems/) and [Modules](https://www.alge-swimusa.com/modules/) (US distributor).
