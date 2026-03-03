# kytonie.me

Deployed at https://kytonie.me

## Sitemap generation

- `npm run generate:sitemap` writes `public/sitemap.xml` from static routes plus markdown slugs in `src/blogs`.
- `npm run build` now runs sitemap generation automatically before the Vite build.
- Optionally set `SITE_URL` to override the canonical base URL used in the sitemap.
