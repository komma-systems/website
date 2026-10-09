import { presentations, type Presentation } from "./catalog"

const SITE_NAME = "KOMMA"
const SITE_URL = "https://komma.systems"

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function renderPresentation(presentation: Presentation): string {
  const title = escapeHtml(presentation.title)
  const summary = escapeHtml(presentation.summary)
  const path = escapeHtml(presentation.path)

  return `<article class="card">
        <h2><a href="${path}">${title}</a></h2>
        <p>${summary}</p>
        <a class="open" href="${path}">Open presentation</a>
      </article>`
}

function renderIndex(): string {
  const list =
    presentations.length > 0
      ? presentations.map(renderPresentation).join("\n")
      : `<p class="empty">No presentations yet.</p>`

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Presentations · ${SITE_NAME}</title>
    <meta name="description" content="Latest presentations from ${SITE_NAME}." />
    <link rel="icon" href="${SITE_URL}/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Silkscreen&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400&display=swap" />
    <style>
      :root { color-scheme: dark; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        background: #000;
        color: #fff;
        font-family: "Source Serif 4", Georgia, serif;
        font-weight: 300;
      }
      a { color: inherit; }
      .wrap { max-width: 760px; margin: 0 auto; padding: 48px 24px 72px; }
      header { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
      .mark {
        font-family: Silkscreen, monospace;
        font-size: 18px;
        letter-spacing: 0.04em;
        text-decoration: none;
      }
      .kicker {
        margin: 0;
        font-family: "IBM Plex Mono", ui-monospace, monospace;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.62);
      }
      h1 { margin: 48px 0 28px; font-size: clamp(36px, 6vw, 56px); font-weight: 300; letter-spacing: -0.03em; }
      .list { display: flex; flex-direction: column; gap: 16px; }
      .card {
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 16px;
        padding: 22px 22px 20px;
        background: #0a0a0a;
      }
      .card h2 { margin: 0 0 10px; font-size: 28px; font-weight: 400; letter-spacing: -0.02em; }
      .card h2 a { text-decoration: none; }
      .card h2 a:hover { text-decoration: underline; }
      .card p { margin: 0 0 16px; font-size: 18px; line-height: 1.45; color: rgba(255, 255, 255, 0.82); }
      .open {
        font-family: "IBM Plex Mono", ui-monospace, monospace;
        font-size: 13px;
        letter-spacing: 0.02em;
      }
      .empty { color: rgba(255, 255, 255, 0.62); }
      footer { margin-top: 48px; font-family: "IBM Plex Mono", ui-monospace, monospace; font-size: 12px; }
      footer a { color: rgba(255, 255, 255, 0.62); }
    </style>
  </head>
  <body>
    <div class="wrap">
      <header>
        <a class="mark" href="${SITE_URL}">${SITE_NAME}</a>
        <p class="kicker">Presentations</p>
      </header>
      <h1>Latest presentations</h1>
      <div class="list">
        ${list}
      </div>
      <footer><a href="${SITE_URL}">komma.systems</a></footer>
    </div>
  </body>
</html>`
}

function withMethod(response: Response, method: string): Response {
  if (method !== "HEAD") return response
  return new Response(null, { status: response.status, headers: response.headers })
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url)
    console.log(
      JSON.stringify({
        message: "incoming request",
        method: request.method,
        path: url.pathname,
      }),
    )

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      })
    }

    if (url.pathname === "/") {
      return withMethod(
        new Response(renderIndex(), {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=60",
            "X-Content-Type-Options": "nosniff",
          },
        }),
        request.method,
      )
    }

    if (url.pathname === "/presentations.json") {
      return withMethod(
        new Response(JSON.stringify({ presentations }, null, 2), {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=60",
            "X-Content-Type-Options": "nosniff",
          },
        }),
        request.method,
      )
    }

    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
