# Performance & Accessibility Testing

This project includes Lighthouse CLI for testing performance, accessibility, SEO, and best practices.

## Quick Start

### Test Local Development Site
1. Start the  local server: `npm run build && npm run preview`.
2. Wait for the server to be ready (should show "http://localhost:4321/")
3. In a new terminal, run: `npm run lighthouse:local`
4. Reports will be saved to `lighthouse-reports/` directory
5. Each test takes ~60 seconds

### Test Production Site
```bash
npm run lighthouse:prod
```
No local server needed - tests the live site directly.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run lighthouse` | Test local site (both EN & SV pages) |
| `npm run lighthouse:local` | Same as above |
| `npm run lighthouse:local:en` | Test local English homepage only |
| `npm run lighthouse:local:sv` | Test local Swedish homepage only |
| `npm run lighthouse:prod` | Test production site (both EN & SV) |
| `npm run lighthouse:prod:en` | Test production English homepage only |
| `npm run lighthouse:prod:sv` | Test production Swedish homepage only |

## Report Location

All reports are saved as HTML files in the `lighthouse-reports/` directory:
- `local-en.html` - Local English homepage
- `local-sv.html` - Local Swedish homepage
- `prod-en.html` - Production English homepage
- `prod-sv.html` - Production Swedish homepage

Open these files in your browser to view detailed results.

## What Gets Tested

Lighthouse measures:
- **Performance** - Load time, LCP, FCP, CLS, TBT, Speed Index
- **Accessibility** - ARIA, color contrast, form labels, alt text
- **Best Practices** - HTTPS, console errors, security
- **SEO** - Meta tags, crawlability, mobile-friendliness

## Prerequisites

- For local testing: Server must be running npm run build && npm run preview
- Chrome/Chromium browser installed (used by Lighthouse)
- Patience: Each test takes 30-60 seconds

## Troubleshooting
- Wait for server to fully start before running tests

**Chrome not found**: Lighthouse requires Chrome/Chromium. Install via Homebrew:
```bash
brew install --cask google-chrome
```

**Slow performance**: This is normal. Each test takes 30-60 seconds as Lighthouse loads the page multiple times.

**Test production instead**: If local testing fails, use `npm run lighthouse:prod` to test the live site
**Slow performance**: This is normal. Each test takes 30-60 seconds as Lighthouse loads the page multiple times.
