---
id: y4sx
title: Make the header photo appear sooner without hurting LCP
kind: idea
status: idea
size: S
created: 2026-11-08
updated: 2026-11-08
tags: [performance]
---

The header photo loads lazy with low priority. Making it eager raised Lighthouse LCP from 1.65s to 2.0s (the LCP element is the h1 text, which waits for the EB Garamond font). Options to try: a tiny blurred placeholder (inline base64 or dominant color) behind the photo, or a smaller first image for phones. Measure with 3 Lighthouse runs each against main.
