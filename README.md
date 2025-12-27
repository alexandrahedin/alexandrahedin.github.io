# Alexandrahedin.se

A portfolio website for soprano Alexandra Hedin, built with Astro and optimized for performance.

## Tech Stack

### Core Framework
- **[Astro](https://astro.build/)** v5 - Static site generator with content collections

### Content Management
- **[Sveltia CMS](https://github.com/sveltia/sveltia-cms)** - Git-based CMS for managing events and biography
  - Access admin at `/admin/` (requires GitHub authentication)
  - Content stored as Markdown files in `src/content/`
  - Configuration: `public/admin/config.yml`
  - Compatible with Netlify CMS format

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** v4 - Utility-first CSS framework with Vite plugin
- **[PhotoSwipe](https://photoswipe.com/)** v5 - Responsive lightbox gallery

### Media
- **[lite-vimeo-embed](https://github.com/luwes/lite-vimeo-embed)** - Lightweight Vimeo embed facade (loaded via CDN)
- **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image optimization (AVIF, WebP, JPEG)

### Analytics
- **[PostHog](https://posthog.com/)** - Privacy-friendly analytics (deferred loading for performance)

### Fonts
- EB Garamond & Montserrat - Self-hosted for performance

## TODO:

- [x] Styling for ContentSection header images
    - [x] Dark overaly
    - [x] Check text-shadows
    - [x] Adjust positioning on mobile and tablet
        - biography: height: calc(100% + 10rem)
        - listen: 
            width: calc(100% + 10rem);
            left: -10rem;
            max-width: calc(100% + 10rem);
            (overflow hidden on <header>)
- [x] Footer navigation
- [x] Swedish content
- [x] Posthog
- [x] Github Action for deploy
- [ ] Scroll-to for navigation
- [x] Update to Astro 4
- [x] Update to latest Github deploy workflow (https://docs.astro.build/en/guides/deploy/github/)
- [x] Check PageSpeed, a11y and SEO
- [ ] Add facad to Vimeo embeds (https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/?utm_source=lighthouse&utm_medium=devtools)
- [x] Use local fonts instead of Google?
- [ ] Use local version of lite-vimeo-embed instead of jsdelivery?
- [ ] Lazy-load off-screen images
- [ ] Add possibility to skip content of image and listen sections when tabbing with keyboard
- [ ] Maybe use https://github.com/luwes/playerx for videos for more controll
- [ ] Improve main nav contrast

## Performance Optimizations

This site uses several optimizations for fast loading:

### Image Size Recommendations

**Before adding images to `src/assets/`**, resize them to reduce build times:

**Header images** (full-screen backgrounds):
- Max width: **2000-2500px**
- Keeps file sizes around 500KB-1MB
- Perfect quality for 4K displays

**Gallery images**:
- Max width: **1200-1500px**
- Thumbnails are auto-generated at 292px

**Resize images with macOS built-in `sips` command:**

```bash
# Resize a single image to 2000px max dimension (preserving aspect ratio)
sips -Z 2000 src/assets/your-image.jpg

# Resize all JPGs in src/assets folder
for img in src/assets/*.jpg; do sips -Z 2000 "$img"; done

# Resize all JPGs in gallery folder
for img in src/assets/gallery/*.jpg; do sips -Z 1500 "$img"; done
```

**Build time impact:**
- 10MB images: ~3+ minutes build time
- 500KB-1MB images: ~60-90 seconds build time

### Image Optimization Cache

The GitHub Actions workflow caches optimized images to speed up deployments. When images in `src/assets/` haven't changed, the build reuses previously optimized files instead of regenerating all image variants.

**To bypass the cache** (force regeneration of all images):
1. Go to GitHub repository → Actions tab
2. Click "Caches" in the left sidebar
3. Delete caches starting with `astro-images-`
4. Next deployment will regenerate all images

The cache automatically invalidates when any file in `src/assets/` changes.

### Other Optimizations
- **Lazy-loaded Vimeo embeds** - Scripts load only when scrolling near videos
- **Lazy-loaded images** - Gallery and header images load on-demand
- **AVIF + WebP formats** - Modern image formats for 30-50% smaller files
- **Local fonts** - No external font requests

### Performance Testing

For detailed instructions on testing site performance and accessibility with Lighthouse, see [README-lighthouse.md](README-lighthouse.md).

Quick commands:
- `npm run lighthouse:local` - Test local dev server
- `npm run lighthouse:prod` - Test production site

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
