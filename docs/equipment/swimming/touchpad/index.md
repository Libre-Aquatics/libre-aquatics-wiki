---
title: Touchpads
tags:
  - Equipment
  - Timing
  - Swimming
---

A touchpad, or touch panel, is the pressure-sensitive board hung at the end of a
swimming lane that records the swimmer's finish and turn. When a hand or foot
touches the panel it closes an internal switch and sends a timing signal to the
[timing console](../timers/index.md), which stops that lane's clock. In a fully
automatic officiating setup a touchpad stands at both ends of every lane, backed up
by pushbuttons, so the swimmer's own touch, not a human timekeeper, records the
official time.

## History and development

Automatic touchpad timing grew out of a timing dispute at the 1960 Rome Olympic
Games, where two swimmers were recorded at the same time by a panel of judges with
hand stopwatches.[^waomega] Machine timing was already in use there. Rome's official
report records thirty timekeepers for the pool's ten lanes, each lane fitted with an
apparatus connected to the starter's pistol, and the finishes recorded by timekeepers
pressing three independent buttons per lane, with the hand timekeeping service running
alongside.[^rome60] The dispute showed that a finish taken by people could still be
contested, which is the argument for letting the swimmer's own touch stop the clock. The
button arrangement Rome used is covered on the
[semi-automatic timing overview](../semi-automatic/index.md).

Touch boards reached the Games within four years. The official report of the 1964 Tokyo
Games records a fully automatic finish-order apparatus, triggered from the starter's
pistol and reading the finish from a then-new touch board, which the Games made their
official timer that year.[^tokyo64] The Munich 1972 report traces the contact mats of its
primary system back to those Tokyo pads, and marks one change: by 1972 the built-in
sensing was electronic, where at Tokyo it had been pneumatic.[^munich72]
World Aquatics, writing about its Omega partnership, instead dates the touch panel to the
1967 Pan American Games and the 1968 Mexico City Olympic Games.[^waomega] The
organising-committee reports are the more authoritative source for what was installed at
their own Games, and the Munich note about pneumatic boards suggests the later date
belongs to the electronic pad rather than to touch boards as such.

By letting the swimmer's own touch stop the clock, the panels made the finish self-timed
to a hundredth of a second and removed reliance on human timekeepers.[^waomega] Colorado
Time Systems, founded in 1972, has built touchpads on the same all-plastic, air-filled
design since then.[^datasheet][^watiming]

## How a touchpad works

A touchpad must ignore the constant wave action and turbulence of a racing pool yet
register the light touch of a finishing or turning swimmer, then close a switch that
signals the timer. Manufacturers meet this requirement in different ways. Colorado Time Systems uses an air-filled panel whose sensitivity is
set by its internal air pressure, and the
[Daktronics T-7000 series](t-7000.md) uses layered conductive
plates.[^datasheet][^watiming] A third approach appears in a 1995 Seiko Instruments
patent, which describes a panel switch overlaid with a fine mesh so that a swimmer's
touch bears on the raised points of the mesh and closes the switch, while the load of
wave action spread across the whole face does not.[^seikopad] That a panel must tell a
real touch from accidental water contact is a long-standing engineering problem: a 1992
Seiko patent for a swimming-race timing system covers the same
discrimination.[^seiko] Neither patent is tied to a product on sale, and Seiko publishes
no sensing principle for the touch plates it currently makes.[^seikojp]

## Governing-body requirements

Under World Aquatics facilities rules the equipment records each swimmer's time to a
hundredth of a second and must not interfere with starts, turns, or the pool's
overflow system.[^frules] The rules set a touch panel's minimum size at 2.4 m wide
and 0.9 m high with a thickness of 0.01 m, positioned to extend 0.3 m above and
0.6 m below the water surface, wired independently per lane, and finished in a bright
colour bearing the end-wall line markings. The panel is installed in the centre of
each lane and may be portable so the operator can remove it when no race is being
held. Its sensitivity must be such that water turbulence cannot trigger it but a
light hand touch can, and it must be sensitive along the top edge.[^frules]

## Products

Several companies make aquatic touchpads and timing equipment; besides Colorado Time
Systems, the principal manufacturers are
[Swiss Timing](../../../vendors/swiss-timing.md) (Omega),
[Daktronics](../../../vendors/daktronics.md), and
[Seiko](../../../vendors/seiko.md).[^watiming] This section catalogs the swimming touchpads covered on this wiki,
which are those made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS), Daktronics and
Seiko. The CTS panel is all-plastic and air-filled, with sensitivity set by internal air
pressure, and the Daktronics panel uses three conductive stainless-steel plates and reads
a touch as a change in electrical charge; Seiko gives the panel material and dimensions
of its plates but no sensing principle.[^datasheet][^watiming][^seikojp]

| Product | Model or prefix | Surface | Connector | Status |
|---|---|---|---|---|
| [AquaGrip touchpad](aquagrip.md) | `TP-…G` (gutter) / `TP-…GF` (flat-wall) | Patented AquaGrip non-slip texture | 10 ft cable, dual banana plug | Current |
| Standard touchpad | `TP-…` / `TP-…F` | Textured non-skid surface | 10 ft cable, dual banana plug | Discontinued |
| [T-7000 series touchpad](t-7000.md) | Daktronics `T-7060`–`T-7096`, `FT-7150`–`FT-7240T` | Non-slip textured stainless steel; three conductive plates | Dual banana plug; OmniSport 2000 | Documented; also listed under Daktronics' discontinued-product resources |
| [Seiko AQUA touch plate](seiko-aqua-touch-plate.md) | None published in Japanese; `TP-3000` on Seiko's older English pages | High-impact resin panel, 2,400 mm wide | Lane box per lane, then the `PT-9000` printing timer | Current |
| [Seiko full-frame touch plate](seiko-full-frame-touch-plate.md) | None published in Japanese; `TP-3019` on Seiko's older English pages | High-impact resin panel, 1,900 mm wide | Lane box per lane, then the `PT-9000` printing timer | Current |

CTS has built touchpads on the same all-plastic, air-filled design since 1972; its
current line is the AquaGrip touchpad, which adds a patented non-slip surface texture
over the Standard touchpad it has replaced, and a single user guide (F147) covers
both.[^aquagrip][^standard][^f147] Seiko sells two plates of the same resin
construction in different widths, and certifies only the wider one to World Aquatics
rules; the narrower plate is listed for Japanese domestic competition
alone.[^seikojp][^seikoff]

The [AquaGrip touchpad](aquagrip.md) article covers the CTS panel in full, the
[T-7000 series touchpad](t-7000.md) article covers the Daktronics stainless-plate pad,
and the [Seiko AQUA Touch Plate](seiko-aqua-touch-plate.md) and
[Seiko Full-Frame Touch Plate](seiko-full-frame-touch-plate.md) articles cover the two
Seiko plates; this page is the shared overview they refer back to.

## See also

- [Timers](../timers/index.md): the timing console a touchpad reports to
- [Start systems](../starter/index.md): the starter equipment on the other side of
  the timing system
- [Equipment](../../index.md): the equipment reference
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md),
  [Daktronics](../../../vendors/daktronics.md) and [Seiko](../../../vendors/seiko.md):
  the manufacturers

## References

[^frules]: [World Aquatics, Facilities Rules 2021–2025](https://resources.fina.org/fina/document/2022/02/08/77c3058d-b549-4543-8524-ad51a857864e/210805-Facilities-Rules_clean.pdf), FR 2.3 Automatic Officiating Equipment for Swimming (touch panels: FR 2.3.4).
[^f147]: [Colorado Time Systems, Standard and AquaGrip Touchpads User Guide (F147)](https://spanish.coloradotime.com/manuals/touchpad-man.pdf).
[^datasheet]: [Colorado Time Systems, AquaGrip Touchpads datasheet](https://coloradotime.com/products/aquagrip-touchpads).
[^aquagrip]: [Colorado Time Systems, AquaGrip Touchpads](https://coloradotime.com/products/aquagrip-touchpads).
[^standard]: [Colorado Time Systems, Standard Touchpads](https://coloradotime.com/products/standard-touchpads).
[^waomega]: [World Aquatics, How Omega keeps advancing timekeeping in swimming](https://www.worldaquatics.com/news/3251540/how-omega-keeps-advancing-timekeeping-in-swimming-a-partnership-celebrating-50-years) (on the Rome 1960 finish dispute and the move to touchpad timing).
[^watiming]: [Wikipedia, Aquatic timing system](https://en.wikipedia.org/wiki/Aquatic_timing_system).
[^rome60]: [Rome Organising Committee, Official Report of the 1960 Olympic Games, v.1](https://digital.la84.org/digital/collection/p17103coll8/id/19376/) (LA84 Foundation; thirty timekeepers, three buttons per lane, hand timing alongside).
[^tokyo64]: [Tokyo Organising Committee, Official Report of the 1964 Olympic Games, v.1](https://digital.la84.org/digital/collection/p17103coll8/id/27446/), p. 177 (LA84 Foundation; touch board adopted as the official timer).
[^munich72]: [Munich Organising Committee, Official Report of the 1972 Olympic Games, v.1](https://digital.la84.org/digital/collection/p17103coll8/id/24816/) (LA84 Foundation; contact mats first used in Tokyo 1964, electronic rather than pneumatic).
[^seiko]: [Google Patents, EP0557888B1, Timing system for swimming race](https://patents.google.com/patent/EP0557888B1/en) (Seiko Instruments; touchpad sensing that distinguishes a swimmer's touch from accidental water contact; priority 1992).
[^seikopad]: [Google Patents, JPH08257196A, 競泳用タッチ板](https://patents.google.com/patent/JPH08257196A/en) (Seiko Instruments; inventor Michio Tomita; a panel switch under a fine mesh; filed 1995, lapsed 2012).
[^seikojp]: [Seiko Time Creation, タッチプレート（AQUAタイプ）](https://www.seiko-stc.co.jp/products/detail/sts_1257.html) (Japanese product page; panel material and dimensions, with no sensing principle given).
[^seikoff]: [Seiko Time Creation, タッチプレート（1,900mmフルフレームタイプ）](https://www.seiko-stc.co.jp/products/detail/sts_1313.html) (Japan Swimming Federation Class A, with no World Aquatics line).
