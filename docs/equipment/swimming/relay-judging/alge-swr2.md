---
title: ALGE SWR 2 relay take-off pad
description: >-
  The SWR 2 is an ALGE-Timing stainless-steel relay take-off pad that fits onto an existing
  starting block, made for the SWIM 2000 system and still catalogued in 2013.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SWR 2
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`SWR 2` (also written `SWR2`)'
  - label: Type
    value: 'Relay take-off pad'
  - label: Connection
    value: 'Starting-block socket of an [SWT](equipment/swimming/deck-cabling/alge-swt.md) or SWT2 lane terminal'
  - label: Dimensions
    value: '500 × 500 × 20 mm'
  - label: Introduced
    value: 'By January 2002'
  - label: Succeeded by
    value: '[SWR7](equipment/swimming/relay-judging/alge-swr7.md) (inferred)'
  - label: Status
    value: 'Discontinued'
---

<!--
Research notes, ALGE SWR 2 relay take-off pad. Surfaced 2026-11-11 while building out
equipment/swimming/timers/alge-swim-2000.md. Built out 2026-11-23.

Held sources (sources/vendors/alge-timing/), read in full for the pad and relay channel; pages
with photos rendered with PyMuPDF:
- timers-consoles/alge-swim2000-architectural-guideline-e02-01-24, section 6 (p. 15): a mobile
  relay-judging detector that fits most existing blocks through several mounting options; for
  competition only, to be taken off for public sessions. Photo: a flat grey plate with ALGE-TIMING
  lettering in two corners and four small holes. Section 5.1: the SO2 block has the detector
  built in and needs no change for public use. Verified.
- catalogs-brochures/alge-swim2000-brochure-2002, p. 3: "SWR 2 relay start pad" for existing blocks,
  other sizes and designs on request; each SWT has jacks for one touchpad, up to three 023-02
  buttons and one SO 2 or SWR 2; five channels per lane per side. Verified.
- timers-consoles/alge-swim2000-manual-e020222 (English) and the German D-020222: 3.3.1.1 relay
  tolerance -0.03 s, based on ALGE's and other makers' comparisons with high-speed video showing
  0.023-0.027 s; tolerance only colours the time red. 3.3.2.2 reaction time in training when the
  load on the block passes 5 kg. 3.11.1 settings file: the window size used on the relay channel
  (Fehlstartzeit=2), trigger on closing before the start (Startflanke1=0) and on opening after it
  (Startflanke2=1), and a repeating beep in the headset after an early relay start. These settings
  belong to the relay channel, so they apply equally to the SO2. Verified.
- catalogs-brochures/alge-swimming-catalogue-v1.113-2013: p. 8 "Relay Start Pad SWR 2", the best
  solution for existing blocks in ALGE's words, other sizes on request, same photo as 2002. p. 10
  "Relay-Take Off Sensor SWR2": stainless steel 1.4571, surface treated; gives relay exchange,
  block-off or reaction times; fixed to most blocks with straps that come with it, so the block needs
  no drilling or other preparation; ALGE describes the non-slip surface as indestructible and unchanged after
  years of use (vendor claim); integrated sensor; 500 x 500 x 20 mm. Photo: grey plate strapped
  onto a block with blue straps. The page's FINA/SSCH/AAU/NCAA/LEN compliance line sits with the
  blocks above it; p. 8 makes the same claim for all components. The text extraction attaches an
  "LDPE" line to the SWR2 table that belongs to the SO5. p. 10 adds that with the new SWT2 the
  jump-off duration can be measured. Verified.
- 2017 general catalogue and 2026 aquatics catalogue: SWR7 and SWR7M only, no SWR 2. Verified.
- timers-consoles/alge-timer-s4-manual-e06-04-18 and the S4 installation guide E-97-03-24: no relay
  pad named. The 1994 S4 drawing's "False Start Detector R1" is covered at alge-r1.md.
Earlier pass (2026-11-11), ALGE SWIM 2000 component page archived January 2001
(web.archive.org/web/20010126234700/http://www.alge-timing.com/alge/swim2000-03-e.htm): a relay pad
headed SWR1 and called SWD1 in its text, screwed onto the existing block, quartz-sand top. Not
re-read on 2026-11-23: the fetch tool cannot reach web.archive.org and a direct download was not
permitted.
Web, read 2026-11-23:
- Split Second Timing (ALGE Australia), startdev.htm and swr1.htm, undated live pages: "Relay pad
  SWR1", a relay false-start contact plate screwed onto existing blocks, stainless steel with a
  quartz-sand top against slipping, not needed with the SO2, which has it built in. so2.htm: SO2 in
  polished stainless with a sand-blasted top, the top part moves to register relay starts, rear
  panel for the mechanism and room for the SWT; an SOL2 version for pools with a lapping edge;
  existing blocks can take the SWR1. No SWR 2 page on the site; /brochures/ returned 403.
Inferences, not stated by any source: SWR1/SWD1 is the earlier screw-on pad and SWR 2 its
replacement (the 2002 documents use only SWR 2); SWR7 succeeded SWR 2 (2013 catalogue has SWR2,
2017 has SWR7).
Discrepancy: the 2002 guideline speaks of several mounting options, the 2013 catalogue only of
lashing straps with no screws; the plate in the 2002 photo has four holes.
Not established: weight; sensing mechanism; cable and plug; introduction and withdrawal dates;
whether the SWR 2 works with the SWT3.
-->

The SWR 2 is a relay take-off pad made by [ALGE-Timing](../../../vendors/alge-timing.md) for
starting blocks that have no sensor of their own. It is a 500 × 500 mm stainless-steel plate,
20 mm thick, that sits on top of an existing block and registers the moment the outgoing relay
swimmer leaves it.[^cat2013] ALGE offered it with the [SWIM 2000](../timers/alge-swim-2000.md)
system from at least 2002 and still listed it in its 2013 swimming catalogue. The 2017 catalogue
lists the [SWR7](alge-swr7.md) in its place.[^arch][^brochure][^cat2013]

See the [relay take-off platforms overview](index.md) for the shared background that applies to
every relay take-off device.

## Role in the timing system

At a relay changeover the timing system sets the incoming swimmer's touchpad time against the
instant the outgoing swimmer breaks contact with the block. A block with no sensor cannot report that
moment, so the SWR 2 adds one. ALGE's own [SO 2](../starting-blocks/alge-so2.md) block had the
sensor built in, and the SWIM 2000 documents treat the two as alternatives for the same socket.[^arch][^brochure]
According to the 2013 catalogue the pad can time a relay changeover, the moment a starter
leaves the block, or a reaction to the start signal.[^cat2013]

ALGE's 2002 guideline describes the pad as a mobile detector for competition only, to be taken off
the block again before the pool opens to the public. The SO 2, by contrast, could stay in place.[^arch]

## Design and construction

The pad is a flat plate of surface-treated stainless steel, grade 1.4571. It has a non-slip top
surface of ALGE's own design, which the 2013 catalogue says does not wear or change over years of
use.[^cat2013] ALGE's photographs show a plain grey plate lettered ALGE-TIMING in two corners.[^arch][^cat2013]
Both the 2002 brochure and the 2013 catalogue say that other sizes and designs could be made to
order.[^brochure][^cat2013] No source gives its weight or describes how the sensor inside works.

## Mounting

The two ALGE sources describe mounting differently. The 2002 architectural guideline says the pad
fits almost any existing block through a choice of mounting options, and its photograph shows four
small holes in the plate.[^arch] The 2013 catalogue says the pad is held on with lashing straps
supplied with it, so that the block needs no screws or other preparation. Its photograph shows
the plate tied onto a block with two straps.[^cat2013]

## Connection to the timer

In the SWIM 2000 system each lane end has an [SWT](../deck-cabling/alge-swt.md) swim terminal with
five timing channels: one touchpad, up to three push buttons, and one starting block, which is
either an SO 2 or an SWR 2.[^brochure] The 2013 catalogue adds that the newer SWT2 terminal can also
measure how long the swimmer's feet stay in contact as they leave the block.[^cat2013]

The SWIM 2000 software handles the relay channel the same way for either device. Before the start
signal it treats the channel closing as the event, which lets it take a training reaction time
once the load on the block passes 5 kg. After the start it treats the channel opening, the
swimmer leaving the block, as the take-off.[^manual] An early take-off sets off a repeated beep in
the officials' headset. The software also marks any take-off more than a set tolerance early in
red. ALGE recommends a tolerance of −0.03 s, citing its own and other makers' comparisons with
high-speed video, and the marking does not change the recorded time.[^manual]

## Models and naming

This section lists the names ALGE and its distributors have used for screw-on and strap-on relay pads.

| Name | Source | Mounting |
|---|---|---|
| [`SWR1`](alge-swr1.md), also `SWD1` | ALGE SWIM 2000 component page (archived January 2001); Split Second Timing | Screwed onto the block; quartz-sand top |
| `SWR 2` | 2002 brochure and guideline; 2013 catalogue p. 8 | Several mounting options (2002) |
| `SWR2` | 2013 catalogue p. 10 | Lashing straps, no screws |
| [`SWR7`, `SWR7M`](alge-swr7.md) | 2017 catalogue onward | Screws (`SWR7`) or strap (`SWR7M`) |

The 2001 page uses both SWR1 and SWD1 for one pad, and ALGE's Australian distributor still lists
the SWR1 as a screw-on plate for existing blocks.[^webcomp][^ssswr1] No source says whether the
SWR 2 replaced the SWR1 or whether the SWR7 replaced the SWR 2. The sequence of catalogues suggests
both changes, but it is inferred rather than stated.

## Compared with the SWR7

The SWR 2 is a 20 mm plate, 500 mm square.[^cat2013] The [SWR7](alge-swr7.md) is a full platform
of 740 × 560 × 40 mm that weighs 20–26 kg depending on the source; its article gives the sources.
The SWR7 comes in a screw-mounted version and a strap-mounted SWR7M, so it keeps both of the
mounting methods that ALGE's documents give for the SWR 2.

## Specifications

| | |
|---|---|
| Material | Stainless steel 1.4571, surface treated |
| Dimensions | 500 × 500 × 20 mm |
| Weight | Not stated |
| Mounting | Several options (2002); lashing straps, no screws (2013) |
| Measures | Relay exchange, block-off and reaction times |
| Connection | Starting-block socket of an SWT or SWT2 terminal |
| Rules | ALGE states compliance with the FINA, SSCH, AAU, NCAA and LEN rules[^cat2013] |

## Part numbers and accessories

This section lists the pad and the devices ALGE names alongside it.

| Part | Description |
|---|---|
| `SWR 2` | Relay take-off pad for existing blocks[^cat2013] |
| [`SO 2`](../starting-blocks/alge-so2.md) | Starting block with the sensor built in, the alternative to the pad[^arch] |
| [`SWT`](../deck-cabling/alge-swt.md), `SWT2` | Lane terminals with a starting-block socket[^brochure][^cat2013] |
| [`SWR1`](alge-swr1.md) | Earlier screw-on relay pad[^ssswr1] |

## See also

- [SWR7](alge-swr7.md): the relay take-off sensor in ALGE's later catalogues
- [SWR1](alge-swr1.md): the earlier screw-on pad
- [Relay take-off platforms](index.md): the relay take-off platforms overview
- [SWIM 2000](../timers/alge-swim-2000.md): the timing system the pad was made for
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^arch]: [ALGE, SWIM2000 Architectural Guidelines](https://www.splitsecond.com.au/manuals/swim2000-be-architectural.pdf) (Version E-02-01-24), sections 5.1 and 6.
[^brochure]: [ALGE, SWIM2000](https://www.splitsecond.com.au/brochures/swim2000-pe.pdf) (brochure, 2002; Split Second Timing copy).
[^manual]: [ALGE-Timing, SWIM2000 Manual](https://web.archive.org/web/20030323112316/http://alge-timing.com/alge/download/manual/swim2000/swim2000-be.pdf) (Version E-020222, 2002; archived), 3.3 and 3.11.1.
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013), pp. 8 and 10.
[^webcomp]: [ALGE-Timing, Components of the SWIM 2000 System](https://web.archive.org/web/20010126234700/http://www.alge-timing.com/alge/swim2000-03-e.htm) (archived January 2001).
[^ssswr1]: [Split Second Timing, Relay pad](https://www.splitsecond.com.au/swr1.htm) (ALGE Australia; undated).
