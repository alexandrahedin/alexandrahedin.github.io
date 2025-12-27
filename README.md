# Alexandrahedin.se

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

## Astro Starter Kit: Basics

```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)


### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

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

### 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
