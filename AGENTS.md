# Swimmer — Project Instructions

## Overview

Opinionated Jekyll static-site theme (fork of Poole) with a dedicated landing page, mobile sidebar, dark mode, and Tailwind CSS v4 styling. Ruby 3.3.0, Jekyll 4.x, no TypeScript.

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
| `fonts.css` | Self-hosted Inter + Roboto Mono `@font-face` declarations |
| `theme.css` | Design tokens, CSS custom properties, light/dark color schemes |
| `base.css` | Reset, body, links, images, tables |
| `type.css` | Typography (headings, paragraphs, lists, blockquotes) |
| `syntax.css` | Rouge syntax highlighting (light + dark) |
| `code.css` | Code blocks and inline code |
| `layout.css` | Page container, landing logo, footer |
| `masthead.css` | Site header (title + tagline + dark mode toggle button) |
| `sidebar.css` | Mobile hamburger sidebar + desktop fixed sidebar with recent/related posts |
| `posts.css` | Blog post and page styles, related posts |
| `pagination.css` | Older/Newer pagination links |
| `message.css` | Callout/message box |
| `toc.css` | Table of contents |

`make css` compiles `_css/styles.css` → `styles.css` (minified). Always run `make css` (or `make serve`/`make build`) after changing any CSS.

## Code Style

- 2-space indentation, LF line endings, UTF-8 (see `.editorconfig`)
- Semantic class names: `.site-container`, `.masthead-title`, `.post-date`, `.post-sidebar`
- Use CSS custom properties (defined in `_css/theme.css`) for all colors and theming
- Mobile-first responsive design; `max-width: 45rem` container; breakpoints at `30em` (pagination) and `75rem` (sidebar)
- Fonts: Inter (body) + Roboto Mono (code), self-hosted as WOFF2 variable fonts
- No navigation bar — minimalist masthead with only site title, tagline, and dark mode toggle

## Dark Mode

Two mechanisms — both must stay in sync:

1. **System preference:** `@media (prefers-color-scheme: dark)` in `_css/theme.css`
2. **Manual toggle:** `[data-theme="dark"]` attribute on `<html>`, set by vanilla JS in `_layouts/default.html`

User preference is persisted in `localStorage` and applied before render in `_includes/head.html` to prevent flash of wrong theme.

The toggle button shows a sun icon in dark mode and a moon icon in light mode, with conditional display handled in `_css/masthead.css`.

## Content & Layouts

- Layouts inherit: `post.html` / `page.html` → `default.html`
- `default.html` wraps content in `.post-with-sidebar` + `.post-content-area` alongside the sidebar include
- Posts go in `_posts/` with filename format `YYYY-MM-DD-slug.md`
- Front matter requires `layout: post` and `title:`; optional `related:` (list of slugs) for related posts in sidebar
- Homepage (`index.md`) is a dedicated landing page with logo, not a paginated post listing
- Static pages: `about.md`, `archive.md` (grouped by month/year), `404.html`
- No navigation bar — users navigate via homepage links, sidebar, and direct URLs

## Sidebar

- **Mobile (`< 75rem`):** Fixed hamburger button (top-left) opens an overlay sidebar showing the 10 most recent posts and any `page.related` posts
- **Desktop (`>= 75rem`):** Sidebar appears as a fixed-position list to the left of the content; hamburger button is hidden
- The active post is marked with `→` prefix and bold weight

## Safety Boundaries

- Do not commit secrets or API keys
- Do not modify `Gemfile.lock` or `package-lock.json` manually — use `bundle` / `npm`
- `_site/` and `.jekyll-cache/` are gitignored build artifacts
- `.agents/` directory is gitignored and not part of the theme
