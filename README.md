# Anastasia Adeler — portfolio

Static site for GitHub Pages: https://kabanizza.github.io/anastasiaadeler.github.io/

## Editing

- All content is in `index.html`. Publications are plain `<a>` blocks inside `#rows` — copy one block, then edit year, title, outlet and URL.
- Styles are Tailwind CSS, compiled in advance (no CDN). After changing any Tailwind class in `index.html`, rebuild:

```sh
npm install
npm run build:css
```

The compiled file `assets/styles.css` is committed and served directly.

## Files

- `assets/styles.css` — compiled, minified CSS
- `assets/img/` — responsive hero and about images (WebP + JPEG fallbacks)
- `src/input.css`, `tailwind.config.js` — Tailwind source and configuration
- `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`
- `robots.txt`, `sitemap.xml`

If the site moves to a custom domain, update `canonical`, `og:url`, `og:image`, `twitter:image`, `robots.txt`, `sitemap.xml` and the JSON-LD `url`/`image`.
