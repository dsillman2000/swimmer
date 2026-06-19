# Swimmer — Project Instructions

## Overview

Jekyll static-site theme (fork of Poole) using Tailwind CSS v4 for styling. Ruby 3.3.0, Jekyll 4.x, no TypeScript.

## Commands

| Task | Command |
|------|---------|
| Install all deps | `make install` |
| Build CSS | `make css` |
| Dev server (localhost:4000) | `make serve` |
| Production build | `make build` |
| Clean build artifacts | `make clean` |

There are no linters, type checkers, or automated tests configured.

## Tech Stack

- **SSG:** Jekyll 4.x (Ruby, Bundler)
- **CSS:** Tailwind CSS v4 via `@tailwindcss/cli` (no Sass/PostCSS)
- **Templates:** Liquid + HTML (`_layouts/`, `_includes/`)
- **Content:** Markdown with YAML front matter (`_posts/`)
- **Build orchestration:** GNU Make
- **Node:** managed via fnm; dev dependencies are `@tailwindcss/cli` and `puppeteer`

## CSS Architecture

All CSS lives in `_css/` as modular plain CSS files imported into `_css/styles.css`:

| File | Concern |
|------|---------|
| `theme.css` | Design tokens, CSS custom properties, light/dark color schemes |
| `base.css` | Reset, body, links, images, tables |
| `type.css` | Typography (headings, paragraphs, lists, blockquotes) |
| `layout.css` | Page container, footer |
| `masthead.css` | Site header, dark mode toggle button |
| `posts.css` | Blog post and page styles, related posts |
| `pagination.css` | Older/Newer pagination links |
| `code.css` | Code blocks and inline code |
| `syntax.css` | Rouge syntax highlighting (light + dark) |
| `message.css` | Callout/message box |
| `toc.css` | Table of contents |

`make css` compiles `_css/styles.css` → `styles.css` (minified). Always run `make css` (or `make serve`/`make build`) after changing any CSS.

## Code Style

- 2-space indentation, LF line endings, UTF-8 (see `.editorconfig`)
- BEM-like class names: `.site-container`, `.masthead-title`, `.post-date`
- Use CSS custom properties (defined in `_css/theme.css`) for all colors and theming
- Mobile-first responsive design; `max-width: 45rem` container; breakpoint at `30em`
- Fonts: Inter (body) + Roboto Mono (code), loaded from Google Fonts CDN

## Dark Mode

Two mechanisms — both must stay in sync:

1. **System preference:** `@media (prefers-color-scheme: dark)` in `_css/theme.css`
2. **Manual toggle:** `[data-theme="dark"]` attribute on `<html>`, set by vanilla JS in `_layouts/default.html`

User preference is persisted in `localStorage` and applied before render in `_includes/head.html` to prevent flash of wrong theme.

## Content & Layouts

- Posts go in `_posts/` with filename format `YYYY-MM-DD-slug.md`
- Front matter requires `layout: post` and `title:`
- Layouts inherit: `post.html` / `page.html` → `default.html`
- Homepage (`index.html`) uses `jekyll-paginate` for post listing
- Static pages: `about.md`, `archive.md`, `404.html`

## Safety Boundaries

- Do not commit secrets or API keys
- Do not modify `Gemfile.lock` or `package-lock.json` manually — use `bundle` / `npm`
- `_site/` and `.jekyll-cache/` are gitignored build artifacts
- `.agents/` directory is gitignored and not part of the theme
