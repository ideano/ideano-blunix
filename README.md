# Hugo Theme Ideano

A flexible, responsive Hugo theme for professional, consulting, service, and business websites. The theme combines the original block-based block-based design with multilingual support, RTL support, reusable shortcodes, configurable visual themes, responsive images, analytics integrations, and interactive content blocks.

This repository contains the original theme together with project-specific extensions and fixes, including Farsi/Arabic RTL support, additional blocks, themeable colors and fonts, analytics integrations, and the reusable **parties** components.

## Highlights

- **Block-based pages** — Build pages by composing reusable blocks from front matter.
- **Responsive design** — Mobile-first layouts with Tailwind CSS utilities.
- **Multilingual and RTL support** — Language-specific content, logos, metadata, URLs, fonts, and RTL layout support.
- **Writing sections** — Use one `writing` content type for blogs, articles, posts, and similar sections.
- **Responsive images** — Hugo image resources are resized and served with responsive `srcset`/WebP output where applicable.
- **Interactive parties components** — Display party/brand logos as a scrolling strip or animated showcase with accessible modals.
- **Visual sub-themes** — Select color and font themes independently for each language/site configuration.
- **Reusable shortcodes** — Quotes, image paragraphs, download boxes, summaries, columns, lists, and figures.
- **Contact/map blocks** — OpenStreetMap, Google Maps iframe, or static location-image alternatives.
- **SEO-oriented output** — Standard Hugo metadata plus OpenGraph/Twitter-card support from the theme templates.
- **Optional analytics** — Google Analytics 4, Microsoft Clarity, Cloudflare Web Analytics, Plausible, Matomo, Umami, and Open Web Analytics.
- **No runtime dependency on Node.js for users** — A compiled stylesheet is included for normal theme consumption.

## Requirements

For normal site usage, use a recent Hugo release compatible with the theme. The theme was updated for Hugo v0.156.0 deprecations.

For theme development or CSS recompilation:

- Hugo
- Node.js and npm

The distributed `static/css/style.css` is already compiled, so Node.js/npm is not required merely to use the theme.

## Installation

### Hugo Module

Initialize your site as a module if necessary:

```bash
hugo mod init github.com/<your-username>/<your-site>
```

Add the theme to `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/ideano/hugo-theme-ideano"
```

Then fetch it:

```bash
hugo mod get -u
```

When using Hugo Modules, do not also set `theme = "..."` for the imported theme.

### Git submodule

```bash
git submodule add https://github.com/ideano/hugo-theme-ideano.git themes/hugo-theme-ideano
```

Then enable it:

```toml
theme = "hugo-theme-ideano"
```

### Local theme

```bash
mkdir -p themes
git clone https://github.com/ideano/hugo-theme-ideano.git themes/hugo-theme-ideano
```

Then set:

```toml
theme = "hugo-theme-ideano"
```

If the site was cloned with the theme as a submodule:

```bash
git clone --recurse-submodules <your-site-repo>
```

or:

```bash
git submodule update --init --recursive
```

## Basic configuration

A minimal site configuration can look like:

```toml
baseURL = "https://example.com/"
locale = "en"
title = "Your Company"
```

Site parameters live in `config/_default/params.toml`. For example:

```toml
logo = "/images/logo.svg"
footer_logo = "/images/logo-full.svg"
featured_image = "featured.webp"

[[contact]]
name = "contact@example.com"
icon = "bi-envelope"
link = "mailto:contact@example.com"

[[contact]]
name = "+1 234 567 890"
icon = "bi-telephone"
link = "tel:+1234567890"
```

See `exampleSite/` for a complete configuration and content example.

## Multilingual and RTL sites

Languages are configured in `config/_default/languages.toml`. Each language can have its own content directory, title, logo, metadata, visual color theme, and font theme.

```toml
[en]
label = "English"
locale = "en-us"
contentDir = "content/en"
title = "Your Company"
weight = 1

[fa]
label = "فارسی"
locale = "fa-ir"
contentDir = "content/fa"
title = "شرکت شما"
weight = 2
```

The theme includes RTL fixes for navigation, text arrangement, scrollers, feature grids, and other components. Internal URLs are resolved through the theme's URL helpers so language prefixes are preserved automatically.

For Farsi content, writing dates are converted to Jalali on page load.

## Block-based page system

Pages are assembled from reusable blocks in front matter. Each block has a `block` name and block-specific parameters.

```yaml
---
title: "Services"
description: "Professional services"

blocks:
  - block: hero-breadcrumb
    title: "Services"
    subtitle: "Expert solutions"
    background: "images/services/hero.webp"
    breadcrumb: "Services"

  - block: text-image
    title: "Custom solutions"
    text: "We provide tailored services."
    image:
      src: "images/services/consulting.webp"
      alt: "Consulting services"
    reverse: false

  - block: features-grid
    title: "What we offer"
    items:
      - icon: "bi-server"
        title: "Infrastructure"
        description: "Scalable server solutions"
      - icon: "bi-shield-check"
        title: "Security"
        description: "Enterprise-grade protection"

  - block: cta
    title: "Ready to get started?"
    text: "Contact us today."
    button:
      text: "Get in touch"
      link: "/contact/"
---
```

Blocks render in the order they appear. Parameters not used by a block are ignored, so each block can be configured independently.

### Available blocks

| Block | Purpose |
|---|---|
| `hero` | Full-width hero section with image/background content |
| `hero-breadcrumb` | Hero section with breadcrumb navigation and optional image contrast |
| `banner` | Simple banner section |
| `about` | About section with image and text |
| `text-only` | Full-width text content block |
| `text-image` | Text alongside an image |
| `address-osm` | Location block using OpenStreetMap |
| `address-googlemap` | Location block using an embedded Google Maps iframe |
| `address-image` | Location block using a static map/location image |
| `features-grid` | Feature/service grid with icons and optional links |
| `process-timeline` | Process or workflow timeline |
| `faq` | Accordion FAQ section |
| `pricing-tabs` | Tabbed pricing presentation |
| `ethics-accordion` | Expandable ethics/values content |
| `parties-scroller` | Horizontally scrolling party/brand logos |
| `parties-showcase` | Animated party/brand logo showcase with modal details |
| `contact-standard` | Standard contact information section |
| `cta` | Call-to-action section |

The source file for each block documents its parameters and usage examples at the top of the file.

## Parties

The `parties-scroller` and `parties-showcase` blocks use the same party data model:

```yaml
parties:
  - name: "Party One"
    logo: "images/parties/party-one.svg"
    description: "A short **Markdown** description."
    alt: "Party One logo"
    url: "https://example.com"
  - name: "Party Two"
    logo: "images/parties/party-two.webp"
    description: "Another party description."
    alt: "Party Two logo"
```

Every party uses the following fields:

| Parameter | Required | Description |
|---|---|---|
| `name` | Recommended | Display name and fallback for `alt` |
| `logo` | Yes | Local image path or remote image URL |
| `description` | No | Description shown by the showcase modal; Markdown is rendered |
| `alt` | No | Logo alternative text; defaults to `name` |
| `url` | No | Website URL; the showcase only displays the website link when present |

### `parties-scroller`

A compact horizontal logo strip. It supports scrolling direction, speed, start delay, display time, background color, and gradients.

```yaml
- block: parties-scroller
  color: "primary"
  gradient: "center-dark"
  gradient_direction: "horizontal"
  direction: "left"
  speed: 80
  start_delay: "0s"
  display_time: 0
  parties:
    - name: "Party One"
      logo: "images/parties/party-one.svg"
      description: "Description"
      alt: "Party One logo"
      url: "https://example.com"
```

### `parties-showcase`

An interactive logo showcase. Clicking a logo opens an accessible modal containing the logo, name, Markdown-rendered description, and an optional website link.

```yaml
- block: parties-showcase
  id: "parties"
  title: "Our parties"
  text: "Organizations we've had the opportunity to work with."
  animation: "orbit"
  parties:
    - name: "Party One"
      logo: "images/parties/party-one.svg"
      description: "A short **Markdown** description."
      alt: "Party One logo"
      url: "https://example.com"
```

Supported animation modes:

`static`, `marquee`, `orbit`, `carousel`, `fade`, `shuffle`, `float`, `wave`, `stack`, `scatter`, `ticker`, `reveal`, `scroll`, `zoom`, `grid-pulse`, `radar`, `constellation`, and `featured`.

Animation automatically falls back to a static presentation when the visitor has `prefers-reduced-motion: reduce` enabled.

## Shortcodes

All custom shortcodes document their parameters at the top of their source file.

### Quote

Use `quote` to emphasize and box content. The shortcode body supports Markdown.

### Imaged paragraph

Use `imaged-paragraph` to place an image beside paragraph content. It supports configurable image size, title, title position, and image side.

### Download box

Use `download-box` to create a download link with an icon and styled content. Icons/images used by this shortcode should be placed under the site's `static/` directory so Hugo copies them to the generated site.

### Summary

Use `summary` for a summary box with an optional title and icon. The shortcode body supports Markdown.

### Columns and list columns

Use `columns` and `list-columns` for multi-column content layouts.

### Figure

The figure shortcode can be used for theme images. Images that must be copied unchanged to the generated site should be placed in the site's `static/` directory.

## Visual sub-themes

Colors and fonts are selected independently. Configure them per language/site in `config/_default/languages.toml`:

```toml
[en.params]
theme-colors = "ruby"
theme-fonts = "default"

[fa.params]
theme-colors = "aquamarine"
theme-fonts = "iran-sans-x"
```

If omitted, both default to `default`.

The generated `<html>` element exposes these choices as `data-theme-colors` and `data-theme-fonts`. The theme uses CSS custom properties and semantic utilities such as `bg-primary`, `text-primary`, `text-theme`, `bg-surface`, `border-primary`, `font-sans`, and `font-heading`.

The repository includes color and font theme definitions under `assets/css/themes/`.

### Theme-aware colors

Button `color` and `hover_color` parameters accept the following theme-aware semantic colors. Their actual values come from the selected color theme:

```text
primary
secondary
accent
success
info
danger
warning
light
dark
```

The theme also provides semantic tokens for general page styling:

```text
background
surface
text
text-muted
border
```

Theme-aware variants include the following CSS custom properties and utilities where supported:

```text
primary:        --theme-primary, --theme-primary-dark, --theme-primary-light, --theme-primary-soft, --theme-on-primary
secondary:      --theme-secondary, --theme-secondary-dark, --theme-secondary-light
accent:         --theme-accent, --theme-accent-dark, --theme-accent-light
success:        --theme-success, --theme-success-dark, --theme-success-light
info:           --theme-info, --theme-info-dark, --theme-info-light
danger:         --theme-danger, --theme-danger-dark, --theme-danger-light
warning:        --theme-warning, --theme-warning-dark, --theme-warning-light
light:          --theme-light
dark:           --theme-dark
background:     --theme-background
surface:        --theme-surface
text:           --theme-text, --theme-text-muted
border:         --theme-border
```

For example, theme-aware utility classes include `bg-primary`, `bg-primary-dark`, `bg-primary-light`, `text-primary`, `text-primary-dark`, `text-primary-light`, `text-on-primary`, `border-primary`, `bg-secondary`, `text-success`, `bg-warning`, `border-danger`, `bg-background`, `bg-surface`, `text-theme`, `text-theme-muted`, and `border-theme`.

### Fixed colors

Button `color` and `hover_color` parameters also accept standard CSS named colors. These are fixed colors and do not change when the selected theme changes:

```text
aliceblue, antiquewhite, aqua, aquamarine, azure, beige, bisque, black,
blanchedalmond, blue, blueviolet, brown, burlywood, cadetblue, chartreuse,
chocolate, coral, cornflowerblue, cornsilk, crimson, cyan, darkblue,
darkcyan, darkgoldenrod, darkgray, darkgreen, darkkhaki, darkmagenta,
darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkseagreen,
darkslateblue, darkslategray, darkturquoise, darkviolet, deeppink,
deepskyblue, dimgray, dodgerblue, firebrick, floralwhite, forestgreen,
fuchsia, gainsboro, ghostwhite, gold, goldenrod, gray, green, greenyellow,
honeydew, hotpink, indianred, indigo, ivory, khaki, lavender,
lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral, lightcyan,
lightgoldenrodyellow, lightgray, lightgreen, lightpink, lightsalmon,
lightseagreen, lightskyblue, lightslategray, lightsteelblue, lightyellow,
lime, limegreen, linen, magenta, maroon, mediumaquamarine, mediumblue,
mediumorchid, mediumpurple, mediumseagreen, mediumslateblue,
mediumspringgreen, mediumturquoise, mediumvioletred, midnightblue,
mintcream, mistyrose, moccasin, navajowhite, navy, oldlace, olive,
olivedrab, orange, orangered, orchid, palegoldenrod, palegreen,
paleturquoise, palevioletred, papayawhip, peachpuff, peru, pink, plum,
powderblue, purple, rebeccapurple, red, rosybrown, royalblue, saddlebrown,
salmon, sandybrown, seagreen, seashell, sienna, silver, skyblue,
slateblue, slategray, snow, springgreen, steelblue, tan, teal, thistle,
tomato, turquoise, violet, wheat, white, whitesmoke, yellow, yellowgreen
```

Each fixed color exposes `--color-<name>`, `--color-<name>-dark`, and `--color-<name>-on` custom properties. Fixed colors are independent of the selected theme.

**Important:** `light` and `dark` are flat theme-aware colors and do not have their own `-dark`/`-light` variants. When `color="light"` or `color="dark"` is used for a button, provide an explicit `hover_color` instead of relying on an automatically generated `*-dark` hover color.

## Analytics

Analytics are optional and configured under `[services]` in the site's parameters. A tracker is included only when its required identifier/token is configured.

Supported integrations:

| Tracker | Required field | Optional field |
|---|---|---|
| Google Analytics 4 | `id` | — |
| Microsoft Clarity | `id` | — |
| Cloudflare Web Analytics | `token` | — |
| Plausible | `domain` | `url` |
| Matomo | `id` | `url` |
| Umami | `id` | `url` |
| Open Web Analytics | `id` | `url` |

Example:

```toml
[services.google_analytics]
id = "G-XXXXXXXXXX"

[services.microsoft_clarity]
id = "XXXXXXXXXX"

[services.plausible]
domain = "example.com"
url = ""

[services.umami]
id = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
url = "https://analytics.example.com"
```

For Plausible, Matomo, Umami, and Open Web Analytics, `url` can point to a self-hosted/on-premise analytics server. Use the base server URL, not the script URL.

All tracker rendering is centralized in `layouts/partials/trackers.html`.

## Writing-style content

The theme uses the content type `writing` for blog posts, articles, and other writing-oriented sections.

To create a writing section, create a directory and set `type: writing` through its `_index.md` cascade. You can also define a section title there.

```yaml
---
title: "Articles"
cascade:
  type: writing
  sectionTitle: "Articles"
---
```

See the `blog` and `articles` examples in `exampleSite/` for complete examples.

Writing sections use these default header images when no custom image is provided:

- `image/writing-list-background.png`
- `image/writing-single-background.png`

## Icons and external dependencies

The modified theme removes the original Iconscout/Font Awesome dependency. A local Bootstrap Icons set is available and can be used with `bi-` icon names.

For example:

```yaml
icon: "bi-envelope"
```

## Tailwind CSS and theme development

The theme ships with a precompiled `static/css/style.css`, so end users can build the site without Node.js/npm.

When modifying the theme's Tailwind classes, maintainers should rebuild the committed stylesheet. Install the project dependencies first, then use the repository's CSS build command:

```bash
npm install
npm run build:css
```

For production output:

```bash
hugo --minify
```

The Tailwind source is under `assets/css/`. Do not rely on an uncompiled development stylesheet being available to theme users; the committed `static/css/style.css` is the distributable stylesheet.

## Development

Run the example site from the repository root:

```bash
cd exampleSite
hugo server --themesDir ../..
```

Then open the local Hugo server shown in the terminal.

For a production build:

```bash
hugo --minify
```

Hugo writes the generated site to `public/`.

## Customization and overrides

Hugo's theme lookup system allows a site's own files to override files supplied by a theme. To customize a template, copy it to the same relative path under the site's `layouts/` directory.

For example:

```bash
mkdir -p layouts/partials
cp themes/hugo-theme-ideano/layouts/partials/footer.html layouts/partials/footer.html
```

The site's copy takes precedence over the theme copy.

The same approach can be used for blocks, partials, shortcodes, CSS, and other theme files where appropriate.

To add a custom block, create a new partial under:

```text
layouts/partials/blocks/
```

and reference its filename (without `.html`) in a page's `blocks` array.

## Theme structure

The main directories are:

```text
hugo-theme-ideano/
├── archetypes/          # Content templates
├── assets/              # Tailwind, CSS, images, and Hugo assets
├── config/              # Theme/example configuration
├── exampleSite/         # Working example site
├── i18n/                # Translation files
├── layouts/             # Page templates, partials, blocks, shortcodes
├── static/              # Compiled CSS, JS, fonts, images, libraries
├── tools/               # Helper scripts and editor snippets
├── go.mod               # Hugo module definition
├── theme.toml           # Theme metadata
└── LICENSE
```

## Useful tools

`tools/create_favicons.sh` creates a favicon set from a master `logo.png`.

`tools/vscode_snippets.txt` contains optional VS Code snippets for frequently used theme content and shortcodes.

## Updating the theme

For Hugo Modules:

```bash
hugo mod get -u github.com/ideano/hugo-theme-ideano
```

To pin a specific version:

```bash
hugo mod get github.com/ideano/hugo-theme-ideano@v1.0.0
```

For a Git submodule:

```bash
git submodule update --remote --merge themes/hugo-theme-ideano
git add themes/hugo-theme-ideano
git commit -m "Update theme to latest version"
```

## License and credits

MIT License — see [LICENSE](LICENSE).

This theme is maintained by Ideano and contains the project-specific extensions and improvements documented above.
