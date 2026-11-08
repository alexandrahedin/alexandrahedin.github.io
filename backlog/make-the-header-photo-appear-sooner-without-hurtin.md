---
id: y4sx
title: Make the header photo appear sooner without hurting LCP
kind: task
status: doing
size: S
created: 2026-11-08
updated: 2026-11-08
tags: [performance]
sessions: [cse_017t6DF1vM5XSgnrTAbnTB1U]
---

The header photo loads lazy with low priority. Making it eager raised Lighthouse LCP from 1.65s to 2.0s (the LCP element is the h1 text, which waits for the EB Garamond font). Options to try: a tiny blurred placeholder (inline base64 or dominant color) behind the photo, or a smaller first image for phones. Measure with 3 Lighthouse runs each against main.

Done: a 20 px lossless WebP copy of the header photo (~850 bytes base64) is inlined behind the lazy photo, blurred with CSS. Lossy WebP at that size shifted the colors to grey-blue, so lossless it is. Lighthouse mobile, 3 runs each against a local nginx: main LCP 1576/1651/1650 ms, score 96–99; branch LCP 1576/1726/1651 ms, score 100. LCP element is still the h1. A smaller first image for phones was not tried.
