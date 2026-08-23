# Modifications 
This theme is modified to support Farsi language (right to left and proper font), with added functionalities.
To see how to use each feature, review content of exampleSite (config, menus, content, ...)

## General
* all references to iconscout and fontawsome uil- and fa- icons are removed to remove need for external dependencies. There is a local version of bootstrap-icons wich could be used with bi- .


## Farsi, Arabic and RTL
* Added Iran flag, and IranSansX font.
* Fixing different parts to support rtl (text arrangement, menus, scrollers, feature-grids, ...)
* Fixing all menu url to pageRef, and all urls in layouts to use a url.html helper. If url starts with httpL//, ... this helper keeps url untouched, but if url is internal url (like /features/) translates path to be compatible with language. (so /features/ would be /fa/features/ in farsi and /ar/features in arabic automatically).
* Displayed time for writing style content (blog, article, ...) converted to Jalali with a help of js function as page loads end, if language is farsi.


## Configurations
* modified for hugo Hugo v0.156.0 deprecations. See https://discourse.gohugo.io/t/56732 . (like fixing languageName to label in config)
* Site logo could be selected for each language seperately. 
* Site meta (like keywords, author, ...) could be set for each language seperately. 

## Blocks
All blocks have their parameters and example usage documented on top of their source file.
* text-only block, which creates a full width block only with text (no image), usefull for descriptions.
* address-osm block, which fetches location from open street maps and shows it to user. for contact pages.
* address-googlemap block, which fetches location from google map and shows it to user. for contact pages. It uses iframe style, embedding google map code, to prevent need for google apikey and apikey problems like expiration.
* address-image block, which shows location from an image (may be screenshot of user location from a map service) and shows it to user. for contact pages. Used when no reliance on external map service and api is desired (much faster load, loads in case of external service outage).

fixed for rtl
* partner-scrollers could have optional title text, which if exits, shown beside logo when scrolling. (usefull for logos without title in them, or for translations.)
* feature-grid items could have optional url, which links feature title to another page.
* contacts are arranged in middle of page, so if they are less or more than 4, it would be visually more beautiful.
* cta block fixed to show (looking for) element if actually more data is exist to show.
* hero_breadcrumb uses explicit url specified by user. (not trying to inference it)

## Shortcodes
All shortcodes have their parameters and example usage documented on top of their source file.
* quote shortcode to box and bold some part of text. text inside could be markdown. If vscode shortcut key installed (see Tools), you could select text and press cmd+k then 1 to quote text.
* imaged-paragraph shortcode to add image to a paragraph. text inside could be markdown. Image size, title and title positon, left or right and many other parameters configurable. (see imaged-paragraph for all possible parameters.) 
* download-box  shortcode to add a download link with icon and a box around part of text. text inside could be markdown. icon image should be inside site static dir, not assets dir, else it would not copy to build output. (see download-box for all possible parameters.) 
original figure shortcode of theme images also should be in static dir of site, not assets, else they will not copy to build output.

## Tools
* create_favicons.sh to create favicon set from a master logo.png file.
* vscode_snippets could be installed in vscode, to do repeated actions easier. For example, if quote shortcode shortcut key installed, user could select text and press key combination to quote text.

## writing syle content (blog, articles, posts)
Orignial theme had a blog layout, but this theme has a writing layout which could be used for blog, articles, and other writing style content. This makes creating different sections, but with same layout simple.
If you want to create a new writing style section, create a directory for it, and in _index.md of that dir, define cascade type writing to cascade type to all writings in that section, and sectionTitle you want. (for example create posts dir, and adjust _index.md inside it). See blog or articles in exampleSite. We use .Type variable (which should be "writing") to detect is content type. (Original theme used .Section to detect only "blog")
* if writing section header image is absent, image/writing-list-background.png would be used as default.
* if writing header image is absent, image/writing-single-background.png would be used as default.

## Visual sub-themes

The theme includes a Tailwind CSS 4 design-token based sub-theme system. The visual theme is independent of RTL/LTR language direction.

Set the theme in the language/site parameters:
Color and font themes are selected independently per language. In `config/_default/languages.toml`:

```toml
[en.params]
theme-colors = "ruby"
theme-fonts = "default"

[fa.params]
theme-colors = "aquamarine"
theme-fonts = "iran-sans-x"
```

If either value is omitted, it defaults to `default`. Some of upported color themes are `default`, `tanzanite`, and others. Supported font themes are `default`, `iran-sans-x`, `work-sans`, and `elegant`.

The generated HTML exposes the selections independently as `data-theme-colors` and `data-theme-fonts`. Color definitions live in `assets/css/themes/theme-colorss.css`; font definitions live in `assets/css/themes/theme-fonts.css`.

Theme colors and fonts selection is emitted as `data-theme-colors` and `data-theme-fonts` on the `<html>` element. Colors and fonts are CSS custom properties, so templates use semantic utilities such as `bg-primary`, `text-primary`, `text-theme`, `bg-surface`, `border-primary`, `font-sans`, and `font-heading`.

To create a new theme, add a `[data-theme-colors="your-name"]` `[data-theme-fonts="your-name"]` block to `assets/css/themes/themes.css` and define the `--theme-*` variables. The distributed `static/css/style.css` already contains the compiled Tailwind CSS and theme utilities, so site users do not need Node.js or npm.

For maintainers, `assets/css/tailwind.css` is the Tailwind CSS 4 source. Recompile the committed stylesheet with:

```sh
npx @tailwindcss/cli -i ./assets/css/tailwind.css -o ./static/css/style.css --minify
```

The repository's existing `static/css/style.css` remains precompiled for zero-build theme consumption.



# Hugo Theme Blunix (Original Readme)

A professional, clean Hugo theme designed for consulting and service-based businesses. Features a flexible block-based page layout system, multilingual support, and modern responsive design.

## Preview

![Theme Screenshot](https://raw.githubusercontent.com/Blunix-GmbH/hugo-theme-blunix/main/images/screenshot.png)
![Theme Thumbnail](https://raw.githubusercontent.com/Blunix-GmbH/hugo-theme-blunix/main/images/tn.png)

## Features

- **Block-based page builder** — Compose pages from reusable content blocks
- **Multilingual support** — Built-in i18n with English and German translations
- **Responsive design** — Mobile-first with Tailwind CSS
- **SEO optimized** — OpenGraph, Twitter Cards, and semantic markup
- **Service business focused** — Pricing tables, contact sections, and FAQ blocks
- **Clean codebase** — Modular partials and well-organized templates

## Prerequisites

- **Hugo Extended** (v0.120.0 or later) — [Installation guide](https://gohugo.io/installation/)
- **Go** (v1.21 or later) — Required for Hugo Modules — [Installation guide](https://go.dev/doc/install)

No Node.js or npm required — CSS is pre-compiled.

## Installation

### As a Hugo Module (Recommended)

Initialize your site as a Hugo Module (if not already):

```bash
hugo mod init github.com/<your-username>/<your-site>
```

Add the theme to your `hugo.toml` (or `config/_default/hugo.toml`):

```toml
[module]
  [[module.imports]]
    path = "github.com/Blunix-GmbH/hugo-theme-blunix"
```

Then download the module:

```bash
hugo mod get -u
```

> **Note:** When using Hugo Modules, you do **not** need to set `theme = "..."` in your config. The module import replaces that directive.

### As a Git Submodule

From your Hugo site root:

```bash
git submodule add https://github.com/Blunix-GmbH/hugo-theme-blunix.git themes/hugo-theme-blunix
```

Then activate the theme in your `config.toml` or `config/_default/config.toml`:

```toml
theme = "hugo-theme-blunix"
```

### As a Local Theme Folder (No Modules/Submodules)

Copy or clone the theme directly into your site's `themes/` directory:

```bash
mkdir -p themes
git clone https://github.com/Blunix-GmbH/hugo-theme-blunix.git themes/hugo-theme-blunix
```

Then set the theme in your config:

```toml
theme = "hugo-theme-blunix"
```

### Cloning a Site That Uses This Theme as a Submodule

```bash
git clone --recurse-submodules <your-site-repo>
```

Or if you've already cloned without submodules:

```bash
git submodule update --init --recursive
```

## Configuration

### Basic Configuration

Minimum required in `config/_default/config.toml`:

```toml
baseURL = 'https://example.com/'
locale = 'en'
title = 'Your Company Name'
```

### Parameters

Configure site parameters in `config/_default/params.toml`:

```toml
logo = '/images/logo.svg'
footer_logo = '/images/logo-full.svg'
featured_image = 'featured.webp'

[[contact]]
name = "contact@example.com"
icon = "fa-solid fa-envelope"
link = "mailto:contact@example.com"

[[contact]]
name = "+1 234 567 890"
icon = "fa-solid fa-phone"
link = "tel:+1234567890"
```

### Multilingual Setup

Configure languages in `config/_default/languages.toml`:

```toml
[en]
label = "English"
locale = "en-us"
contentDir = "content/en"
title = "Your Company"
weight = 1

[de]
label = "Deutsch"
locale = "de"
contentDir = "content/de"
title = "Ihr Unternehmen"
weight = 2
```

See the `exampleSite/` directory for a complete working example.

## Block-Based Page Layout

Pages are composed from reusable "blocks" defined in front matter. The theme loops through the `blocks` array and renders each block partial.

### How It Works

1. Define blocks in your page's front matter under the `blocks` key
2. Each block must have a `block` field matching a partial name in `layouts/partials/blocks/`
3. Blocks render in the order they appear in the array
4. Additional parameters are passed to the block partial

### Example Page

```yaml
---
title: "Our Services"
description: "Professional consulting services"

blocks:
  - block: hero-breadcrumb
    title: "Services"
    subtitle: "Expert Solutions for Your Business"
    background: "/images/services/hero.webp"
    breadcrumb: "Services"

  - block: text-image
    title: "Custom Solutions"
    text: "We provide tailored consulting services..."
    image:
      src: "/images/services/consulting.webp"
      alt: "Consulting services"
    reverse: false

  - block: features-grid
    title: "What We Offer"
    items:
      - icon: "fa-solid fa-server"
        title: "Infrastructure"
        description: "Scalable server solutions"
      - icon: "fa-solid fa-shield"
        title: "Security"
        description: "Enterprise-grade protection"

  - block: cta
    title: "Ready to Get Started?"
    text: "Contact us today for a consultation"
    button:
      text: "Get in Touch"
      link: "/contact/"
---
```

## Available Blocks

This streamlined theme build includes the following blocks:

- **`hero`** — Full-width hero section with image background
- **`hero-breadcrumb`** — Hero with breadcrumb navigation
- **`banner`** — Simple banner section
- **`about`** — About section with image and text columns
- **`text-image`** — Text alongside image (left/right configurable)
- **`text-image-bg`** — Text with image and section background styling
- **`features-grid`** — Grid of features with icons
- **`process-timeline`** — Process steps timeline
- **`faq`** — Accordion-style FAQ
- **`pricing-tabs`** — Tabbed pricing tables
- **`ethics-accordion`** — Expandable ethics/values section
- **`partners-scroller`** — Scrolling partner logos
- **`contact-standard`** — Contact information section
- **`cta`** — Call-to-action section

## Multilingual Support

The theme includes translation files in `i18n/`:

- `en.yaml` — English
- `de.yaml` — German

Use translations in templates:

```go-html-template
{{ i18n "read_more" }}
{{ i18n "contact_us" }}
```

Add custom translations by extending these files in your site's `i18n/` directory.

## Theme Structure

```
hugo-theme-blunix/
├── archetypes/          # Content templates
│   └── default.md
├── assets/              # Assets for Hugo Pipes processing
│   └── images/          # Theme images (logo, icons)
├── exampleSite/         # Demo site
│   ├── config/
│   └── content/
├── i18n/                # Translation files
│   ├── en.yaml
│   └── de.yaml
├── layouts/
│   ├── _default/        # Default templates
│   │   ├── baseof.html
│   │   ├── single.html
│   │   ├── list.html
│   │   └── _markup/     # Custom render hooks
│   ├── blog/            # Blog-specific templates
│   ├── partials/
│   │   ├── blocks/      # Block components (14 blocks)
│   │   ├── components/  # Reusable UI components
│   │   ├── helpers/     # Helper partials
│   │   ├── _funcs/      # Utility functions
│   │   ├── head.html
│   │   ├── header.html
│   │   └── footer.html
│   └── shortcodes/      # Custom shortcodes
├── static/              # Static assets
│   ├── css/             # Compiled CSS
│   ├── js/              # JavaScript (Alpine.js, Prism.js)
│   ├── fonts/           # Web fonts (Nunito, EB Garamond)
│   ├── libs/            # Third-party libraries
│   └── images/          # Static images
├── go.mod               # Hugo Modules definition
├── hugo.toml            # Module configuration
├── theme.toml           # Theme metadata
└── LICENSE
```

## Updating the Theme

### Hugo Modules

```bash
hugo mod get -u github.com/Blunix-GmbH/hugo-theme-blunix
```

To pin to a specific version:

```bash
hugo mod get github.com/Blunix-GmbH/hugo-theme-blunix@v1.0.0
```

### Git Submodule

```bash
git submodule update --remote --merge themes/hugo-theme-blunix
git add themes/hugo-theme-blunix
git commit -m "Update theme to latest version"
```

## Development

### Running the Example Site

```bash
cd exampleSite
hugo server --themesDir ../..
```

### Production Build

```bash
hugo --minify
```

Output goes to `public/` directory.

## Customization

### Override Templates

To customize a theme template, copy it from the theme's `layouts/` to your site's `layouts/` directory with the same path. Your version will take precedence.

```bash
mkdir -p layouts/partials
cp themes/hugo-theme-blunix/layouts/partials/footer.html layouts/partials/footer.html
```

### Override Styles

To customize styles, copy `static/css/style.css` to your site's `static/css/` directory and modify it. Your version will take precedence.

### Add Custom Blocks

Create new blocks in your site's `layouts/partials/blocks/` directory. They'll be available alongside theme blocks.

## Linux Support

For issues, questions, or contributions, please contact Blunix GmbH or open an issue in the theme repository.

Author information: [Blunix Ansible Role - Apache2](https://github.com/Blunix-GmbH/ansible-role-apache2?tab=readme-ov-file#author-information)

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Credits

Developed and maintained by [Blunix GmbH](https://www.blunix.com)


