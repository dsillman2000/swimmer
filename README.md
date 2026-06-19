# Swimmer

Swimmer is David's fork of [Poole](https://getpoole.com), the foundational Jekyll theme by [@mdo](https://twitter.com/mdo). The name comes from "David's Poole" &rarr; David Schwimmer &rarr; Swimmer.

Swimmer provides a clear and concise foundational setup for any Jekyll site, furnishing a full vanilla Jekyll install with example templates, pages, posts, and styles.

<p>
  <img src="docs/screenshot-light.png" alt="Swimmer light mode" width="49%">
  <img src="docs/screenshot-dark.png" alt="Swimmer dark mode" width="49%">
</p>

## Contents

- [Usage](#usage)
- [Development](#development)
- [Author](#author)
- [License](#license)


## Usage

### 1. Install dependencies

Swimmer is built on Jekyll and uses [Tailwind CSS](https://tailwindcss.com) v4 (via `@tailwindcss/cli`) to generate its CSS. Before getting started, install all Ruby and Node dependencies:

```bash
$ make install
```

This runs `bundle install` and `npm install`. You'll need Ruby 3.3.0, Bundler, and Node (managed via fnm).

**Need syntax highlighting?** Swimmer includes support for Rouge, so install the gem to make use of the built-in styling. Read more about this in the [Jekyll docs](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting).

### 2a. Quick start

To help anyone with any level of familiarity with Jekyll quickly get started, Swimmer includes everything you need for a basic Jekyll site. To that end, just download Swimmer and start up Jekyll.

### 2b. Roll your own Jekyll site

Folks wishing to use Jekyll's templates and styles can do so with a little bit of manual labor. Download Swimmer and then copy what you need (likely `_layouts/`, `_includes/`, `_css/`, `*.html` files, `atom.xml` for RSS, and `assets/` for images and icons).

### 3. Running locally

To see your Jekyll site with Swimmer applied, start a Jekyll server. In Terminal, from `/swimmer` (or whatever your Jekyll site's root directory is named):

```bash
$ make serve
```

Open <http://localhost:4000> in your browser, and voila.

### 4. Serving it up

If you host your code on GitHub, you can use [GitHub Pages](https://pages.github.com) to host your project.

1. Push your repo to GitHub.
   1. If you're [using a custom domain name](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages), modify the `CNAME` file to point to your new domain.
   2. If you're not using a custom domain name, **modify the `baseurl` in `_config.yml`** to point to your GitHub Pages URL. Example: for a repo at `github.com/username/swimmer`, use `http://username.github.io/swimmer/`. **Be sure to include the trailing slash.**
2. Configure GitHub Pages to deploy from your default branch (or set up a GitHub Actions workflow).
3. Done! Head to your GitHub Pages URL or custom domain.

No matter your production or hosting setup, be sure to verify the `baseurl` option file and `CNAME` settings. Not applying this correctly can mean broken styles on your site.

## Development

CSS is handled via [Tailwind CSS](https://tailwindcss.com) v4. Source CSS files are located in `_css/`, compiled via `@tailwindcss/cli`, and output to `styles.css`.

## Credits

Swimmer is forked from [Poole](https://getpoole.com) by [@mdo](https://twitter.com/mdo). The original Poole project also produced the [Hyde](https://hyde.getpoole.com) and [Lanyon](https://lanyon.getpoole.com) themes.

## Author

**David Sillman**
- <https://github.com/dsillman2000>

Originally created as [Poole](https://getpoole.com) by **Mark Otto** ([@mdo](https://github.com/mdo)).


## License

Open sourced under the [MIT license](LICENSE.md).
