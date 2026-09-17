# KMK elmont – web

Web for **KMK elmont s. r. o.** (electrician, Považská Bystrica). Built with [Astro](https://astro.build) + Tailwind CSS. Static output, all content in Slovak.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview of the built site
```

## Where to edit things

| What | File |
|---|---|
| Phone, email, IČO, service area, opening hours, form key | `src/config.ts` |
| Domain (must match `SITE.url`) | `astro.config.mjs` |
| Services (each gets its own page `/sluzby/<slug>/`) | `src/data/services.ts` |
| Pages | `src/pages/*.astro` |
| Colors / fonts | `src/styles/global.css` |
| Logo, favicon, share image | `public/` |

Search the project for `TODO` to find everything that still needs real data.

### Photos
Photos are placeholders (`<Placeholder />`). Put images in `src/assets/` and replace with:

```astro
---
import { Image } from 'astro:assets';
import foto from '../assets/miso.jpg';
---
<Image src={foto} alt="Michal Kolek pri práci" class="rounded-2xl" />
```
Astro will resize and convert to WebP automatically.

### Contact form
Uses [Web3Forms](https://web3forms.com) (free, no backend). Enter `kmkelmont@gmail.com` there, copy the access key into `web3formsKey` in `src/config.ts`. Without a key the form opens the visitor's email client.

## Deploy – GitHub Pages

Repo: `git@github.com:martin-michalek/kmk-elmont.git` → site will be at
**https://martin-michalek.github.io/kmk-elmont/**

Current settings (`astro.config.mjs`):

```js
const SITE_URL = 'https://martin-michalek.github.io';
const BASE = '/kmk-elmont/';   // project page => base path needed
```

### First push

```bash
cd kmkelmont-web
mkdir -p .github/workflows && mv deploy.yml .github/workflows/deploy.yml
git init -b main
git add -A
git commit -m "Initial website"
git remote add origin git@github.com:martin-michalek/kmk-elmont.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The workflow builds and deploys on every push to `main`; first run takes ~2 minutes
(watch it in the Actions tab).

### Later: own domain

1. `astro.config.mjs`: `SITE_URL = 'https://www.vasadomena.sk'`, `BASE = '/'`
2. `src/config.ts`: same value in `SITE.url`
3. Create `public/CNAME` containing only `www.vasadomena.sk`
4. DNS at the registrar: `www` → CNAME → `martin-michalek.github.io`;
   apex domain → A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. GitHub → Settings → Pages → Custom domain + **Enforce HTTPS**

All internal links go through `u()` from `src/config.ts`, so switching `BASE` rewrites them everywhere.

> Alternatives with no base-path juggling: Cloudflare Pages or Netlify (build `npm run build`, output `dist`).

## SEO checklist (after launch)

- [x] Unique title + description per page, canonical, Open Graph
- [x] JSON-LD: `Electrician` (whole site), `Service` + `BreadcrumbList` (service pages), `FAQPage` (Cenník)
- [x] `sitemap-index.xml`, `robots.txt`, `lang="sk"`
- [ ] **Google Business Profile** – most important for local search; add its URL to `googleBusiness` in config
- [ ] Google Search Console – verify domain, submit `sitemap-index.xml`
- [ ] Add phone number (also shown in Google results)
- [ ] Real photos with descriptive `alt` texts
- [ ] Listing on Slovak directories (zoznam.sk, azet katalóg, najdiremeselnika.sk…) with the same name/address/phone
