---
title: swimlib
description: >-
  swimlib is an open-source TypeScript library that reads and writes the swimming
  interchange formats, including SDIF, HY3 and EV3.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, swimlib.

Already cited on the HY3 and CL2 pages before it had one of its own; this page closes that
gap. Surfaced again while building out SDIF, where its handling of the three formats is the
most precise available statement of how closely CL2 tracks SDIF.

Source. The repository at github.com/dmanusrex/swimlib and its README. No other source was
consulted, and nothing here is independently verified; the claims below are the project's
own description of itself.

Recorded from the README: TypeScript, no runtime dependencies, targets Node 20 or later and
browsers. Reads and writes SDIF (SD3), HY3, EV3, REC and STD/ST2. Reads CL2 only, and does
so by running its SDIF parser with mandatory-field checks relaxed and checksum validation
switched off, which is why the CL2 page uses it as evidence for how near the two formats
are. HY3 checksums are verified; CL2 checksums are not. Round-trip fidelity is claimed as
byte-identical for REC and STD/ST2, and for SDIF and HY3 only where the library wrote the
file itself, with third-party files coming back with padding normalized to the
specification. That last detail is worth keeping: it implies real files in circulation are
padded in ways the specification does not require.

The HY3 page dates the project to September 2026 and names dmanusrex as the author. Neither
a release history nor a licence was recorded on this pass.

Two further implementations were found alongside it and each needs its own page if this
wiki is to cover the ground: tdsmith/sdif, a Python library from 2023 under Apache 2.0
working from the same 1998 document, and the older reverse-engineering work by Michael
Walsh and Troy DeLano that the HY3 page already cites.

Still to research: licence, release history, who dmanusrex is, whether the library is used
by anything else, and what its STD/ST2 and REC support covers, since those two formats are
not yet described anywhere on this wiki.
-->

This article is a stub. swimlib is an open-source TypeScript library with no runtime
dependencies that reads and writes the swimming interchange formats, covering
[SDIF](sdif.md), [HY3](hy3.md), [EV3](ev3.md), REC and STD/ST2, and reading
[CL2](cl2.md) by relaxing its SDIF parser.

It is the modern counterpart to the volunteer reverse-engineering that documented Hy-Tek's
formats in the first place; see the [software overview](index.md) for what this section
covers.
