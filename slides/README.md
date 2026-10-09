# KOMMA slides

A Cloudflare Worker that lists presentations at [slides.komma.systems](https://slides.komma.systems) and serves each deck as a static HTML file.

The catalog is [`src/catalog.ts`](src/catalog.ts). The newest presentation is the first entry. Deck files live in `public/decks/`.

## Add a presentation

1. Save the HTML file in `public/decks/` using a stable, lowercase name, for example `public/decks/my-talk.html`.
2. Prepend an entry to the `presentations` array in `src/catalog.ts` with the title, a one-line summary, and the path `/decks/my-talk.html`.

## Develop and deploy

From the repository root, with dependencies installed:

```bash
pnpm exec wrangler dev --config slides/wrangler.jsonc
pnpm exec wrangler deploy --config slides/wrangler.jsonc
```

`slides.komma.systems` is configured as a Worker custom domain. Deploying from an account that owns the `komma.systems` zone creates the DNS record and certificate. No separate DNS record is required unless a conflicting record is already there.

Until that hostname is attached, the Worker is also available on its `workers.dev` subdomain.
