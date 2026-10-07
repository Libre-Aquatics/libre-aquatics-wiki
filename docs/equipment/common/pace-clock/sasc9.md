---
title: Colorado Time Systems SASC9
description: >-
  The SASC9 is a Colorado Time Systems LED pace clock and water polo shot clock with
  9-inch digits, sold in two-digit and four-digit models in the early 2000s.
tags:
  - Equipment
  - Timing
infoboxTitle: SASC9
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`SASC9-4`, `SASC9-2`'
  - label: Type
    value: Pace clock and water polo shot clock
  - label: Manual
    value: None held; described on CTS's 2002 product page
---

<!--
Research notes, SASC9.

Sole attestation, and it is thin. The pace clock controller user guide (F901 Rev. 1007,
©2007) names it twice, both times in the same context: the section on using a scoreboard as
a plain pace clock says the technique is "also useful for SASC 9 and Ultimate Pace Clock",
and the body of that section repeats the pairing, in a sentence CTS prints as "The controller
can also be used with the SASC9 and the Ultimate Pace Clock". Note the manual spells it both ways, "SASC 9" with a space in the
contents-level line and "SASC9" closed up in the body. Search both forms.

Nothing else. A grep of the entire sources tree for "SASC" returns only those two lines in
the two F901 typesettings; every other match is the given name Sascha in swimming results,
or fragments of "RSA SC" meet codes in Swim News result tables, or a binary match inside a
Daktronics PDF stream that is not text. No CTS datasheet, catalogue, manual or price list
held names it. It is not on coloradotime.com's current product pages or manuals index.

What can be inferred, and it is only inference: the sentence pairs it with the Ultimate
Pace Clock as a thing the controller drives, so it is a display of some kind rather than a
controller or an accessory. The name does not follow any CTS part-number pattern covered on
this wiki, which run to letter prefixes like PC-, PCW-, UPC-, LED-R, CAD- and WA-. The
trailing 9 could be a model number or a digit count. Do not write any of that as fact.

Still to research: what it is. The likeliest sources are a CTS catalogue or price list from
the late 1990s or 2000s, none of which is held for that period, or a dealer listing. Ask
the user for a CTS catalogue of that era before building this out; the name is currently
supported by one clause in one manual.

Update, October 2026 (found while building out ultimate-pace-clock.md). The paragraphs above
predate this and are superseded where they say nothing else is known. CTS had a product page,
coloradotime.com/aquaticproducts/light_reflective/prod_sasc9.asp, archived from 4 December 2002
(https://web.archive.org/web/20021204152416/http://www.coloradotime.com:80/aquaticproducts/light_reflective/prod_sasc9.asp).
It names the product "SASC9 4-digit or 2-digit Aquatics Pace Clock/Shot Clock". What it says:
one display serves as a programmable pace clock and as a water polo shot clock; two or four
digits; red or green LEDs, for indoor use; 9 in digits, readable at up to 50 m by CTS's figure;
deck or wall mounting. The four-digit SASC9-4 is programmed by the Ultimate Pace Clock
Controller (UPC-C), the earliest use of that part number found, or by the pace clock program
on a System 5 or Swim IV; an external switch puts it in water polo mode, run from the timer's
water polo software. The two-digit SASC9-2 is a shot clock only. Both run on AC. SASC9-4:
27 in wide, 11.25 in high, 4 in deep, 10 lb. SASC9-2: 13.5 x 11.25 x 4 in, 6.5 lb. The S/A
prefix is still unexplained; SC presumably shot clock and 9 the digit height, but no source
says so. Still open: dates, price, and its relation to the later PC- Pace Clock/Shot Clock line.
-->

This article is a stub. The `SASC9` is a Colorado Time Systems LED display with 9 in digits
that works as a water polo shot clock and, in its four-digit `SASC9-4` form, as a pace clock
programmed from the [pace clock controller](upc-c.md) or a CTS timer; CTS listed it on its
website from 2002 to 2004.

See the overview of [pace clocks](index.md) for the shared background.
