---
title: Standalone Template Editor
description: >-
  The Standalone Template Editor is the Colorado Time Systems DisplayLink Plus
  template designer sold as a separate application.
tags:
  - Software
  - Scoring
---

<!-- Research notes (do not publish):
  Sources, all checked 2026-09-17:
  - shop.coloradotime.com/products/standalone-template-editor-for-displaylink-customers-r-470-121
    (title, part number R-470-121, USD 49.95, the one-sentence description of building
    templates away from the DisplayLink computer, delivery by emailed download link, and
    a no-return statement).
  - coloradotime.com/standalone-template-editor-download (the download itself; it offers
    version 4.7.0 and states that a license is required).
  - coloradotime.com/blog/standalone-template-editor-for-displaylink (CTS's own write-up:
    why it was made, the capability list, and the offer of a free license to facilities
    whose video display was installed within the previous two years). The post carries no
    date, so the two-year window has no fixed start and the offer may be stale.
  - prweb.com/releases/colorado_time_systems_releases_the_standalone_template_editor_for_displaylink/prweb17700887.htm
    (2 February 2021, quoting Rick Connell, Vice President and General Manager). This is a
    CTS press release, not independent reporting.
  - The DisplayLink Plus release notes (displaylink-plus-help/21-release-notes under
    sources/vendors/colorado-time-systems/software/) for v4.3.14, 5 March 2020, which
    records Template Editor work delivered in both the integrated and the standalone
    program.

  The version question is settled and no longer needs the installer: the download page
  offers 4.7.0, which is the current DisplayLink Plus version (16 December 2025), so the
  standalone build carries DL+ version numbers. This wiki's maintainer reports the same
  from their own installation, and also reports finding no About screen in the program,
  which fits CTS publishing no separate release notes for it. The body claims the version
  tracking from the download page rather than from that report.

  Note the date gap: the code shipped inside DL+ v4.3.14 in March 2020, and CTS announced
  the separate product in February 2021, eleven months later. Both dates are in the body,
  because neither one alone describes when it appeared.

  The help-topic PDFs in displaylink-plus-help/ were printed from
  C:\Program Files\Colorado Time Systems\Standalone Template Editor\, numbered 01- to 22-
  in help-chapter order, which is how we know the standalone install carries the whole DL+
  help file rather than a cut-down one.

  Checked on a later pass: CTS's manuals index at coloradotime.com/support/manuals lists
  no document for this program, nor for DisplayLink Plus itself, which is independent
  support for the Documentation status section rather than an inference from the shop page
  alone.

  Still open: system requirements (CTS states only that it runs on a Windows computer);
  whether the standalone build omits anything the integrated editor has, which CTS's own
  material never addresses; and whether the free-license offer still stands.
-->

The Standalone Template Editor is the [DisplayLink Plus](displaylink-plus.md) template
designer packaged as a separate application, sold by
[Colorado Time Systems](../vendors/colorado-time-systems.md) under part number
`R-470-121` for USD 49.95. It exists so that templates can be built somewhere other than
the display computer: it installs on any Windows machine without DisplayLink Plus present,
and the finished templates are carried back to the computer that drives the
board.[^shop][^blog]

CTS's reason for making it was that the facility's DisplayLink Plus computer usually lives
in an office and stays there, which tied template design to that one machine. The company says customers asked for the change.[^blog][^prweb]

## Naming and versions

The standalone build carries DisplayLink Plus version numbers rather than its own. CTS's
download page offers version 4.7.0, which is the current DisplayLink Plus release, issued
16 December 2025.[^download][^relnotes]

Two dates describe its arrival, eleven months apart. The DisplayLink Plus release notes
record the work in version 4.3.14 on 5 March 2020, delivered to the integrated editor and
the standalone program together.[^relnotes] CTS then announced the separate product on
2 February 2021, in a press release quoting Rick Connell, its vice president and general
manager.[^prweb]

## What it does

The editor is the one described in the [DisplayLink Plus](displaylink-plus.md) article and
works the same way: items are dragged from the Available Items list onto a template sized to
the board, positioned with the alignment toolbars, and adjusted through the Properties
column. By CTS's account a customer can keep any number of templates, for every sport the
software covers, and can place data fields, set a font's color, size and style, and put an
image behind the whole template.[^blog][^help]

What the standalone build cannot do, CTS does not say. Its own material describes only the
change of location, never a missing feature, and the company publishes no separate manual
or release notes against which the two could be compared.[^blog][^download]

## Licensing and delivery

The program requires a license. Buying one produces an email with the download link rather
than an immediate download, and CTS states the purchase is not returnable.[^shop] CTS
publishes the installer separately from the license, so the software can be downloaded
before a license is bought.[^download]

CTS has also offered the license at no charge to facilities whose video display was
installed within the previous two years, through a form on its own page about the program.
That page carries no date, so there is no telling what two-year window it means, or whether
the offer still stands.[^blog]

## Documentation status

There is no separate user guide. CTS's manuals index lists none for this program, nor for
DisplayLink Plus itself.[^manuals] The installation carries the DisplayLink Plus help
file whole, which is where this wiki's copy of that help came from, so the documentation a
buyer receives describes the larger program.[^help]

## See also

- [DisplayLink Plus](displaylink-plus.md): the program it belongs to, and where the editor
  itself is described
- [DisplayLink](displaylink.md): the earlier software, whose own Template Editor was also a
  separate application
- [Software](index.md): the software section overview
- [Colorado Time Systems](../vendors/colorado-time-systems.md): the vendor

See everything tagged [Software](../categories.md).

## References

[^shop]: [Colorado Time Systems, Standalone Template Editor for DisplayLink Customers (R-470-121)](https://shop.coloradotime.com/products/standalone-template-editor-for-displaylink-customers-r-470-121) (`R-470-121`, USD 49.95; emailed download link; not returnable).
[^download]: [Colorado Time Systems, Standalone Template Editor download](https://coloradotime.com/standalone-template-editor-download) (version 4.7.0; a license is required).
[^blog]: [Colorado Time Systems, Standalone Template Editor for DisplayLink+](https://coloradotime.com/blog/standalone-template-editor-for-displaylink) (undated; capabilities, and the free-license offer for displays installed within two years).
[^prweb]: [PRWeb, Colorado Time Systems Releases the Standalone Template Editor for DisplayLink+](https://www.prweb.com/releases/colorado_time_systems_releases_the_standalone_template_editor_for_displaylink/prweb17700887.htm) (2 February 2021; a CTS press release, quoting Rick Connell).
[^relnotes]: Colorado Time Systems, Display Link Plus Help, Release Notes topic (v4.3.14, 5 March 2020; v4.7.0, 16 December 2025).
[^help]: Colorado Time Systems, Display Link Plus Help, Template Editor topic (shipped with the standalone installation).
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (no entry for the Standalone Template Editor or DisplayLink Plus).
