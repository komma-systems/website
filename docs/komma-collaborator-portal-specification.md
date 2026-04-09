# Komma Collaborator Portal — Specification

This document describes the intended architecture, data model, routing, and access control for the **Komma Collaborator Portal** — a gated area of the site for GitHub-authenticated collaborators and core team members.

---

## 1. Stack assumptions

| Layer | Choice |
|--------|--------|
| Framework | **Next.js** (App Router) |
| Authentication | **Auth.js v5** (formerly NextAuth) |
| OAuth provider | **GitHub** |
| Database & session storage | **Supabase** (Postgres + Supabase Auth session storage as configured for the app) |
| Styling | **Tailwind CSS** (aligned with the existing marketing site) |

---

## 2. Access tiers

### Public

- The existing marketing site remains **unchanged** and fully public.

### Collaborator

- **GitHub login** required.
- User must be **whitelisted** (represented in the `collaborators` table with `role = collaborator`).
- Sees **only their own** dashboard (`/portal/dashboard` and any routes scoped to self).
- **No** access to `/portal/admin` or other collaborators’ data.

### Core team

- **Charlie** and any designated **admin** users (`role = core` in `collaborators`).
- Can open **`/portal/admin`** and **`/portal/admin/[username]`** to list collaborators and inspect any collaborator’s dashboard-equivalent view.

---

## 3. Data model (Supabase / Postgres)

### `collaborators`

| Column | Type | Notes |
|--------|------|--------|
| `id` | `uuid` | Primary key |
| `github_username` | `text` | **Unique**; used for whitelist and URL segments |
| `display_name` | `text` | Shown in UI |
| `role` | `text` | `collaborator` \| `core` |
| `joined_at` | `timestamp` | |

### `projects`

| Column | Type | Notes |
|--------|------|--------|
| `id` | `uuid` | Primary key |
| `name` | `text` | |
| `description` | `text` | |
| `wiki_content` | `text` | Markdown |
| `status` | `text` | |

### `collaborator_projects`

| Column | Type | Notes |
|--------|------|--------|
| `collaborator_id` | `uuid` | FK → `collaborators.id` |
| `project_id` | `uuid` | FK → `projects.id` |
| `role_on_project` | `text` | Role on that project |

Composite uniqueness on `(collaborator_id, project_id)` is recommended unless multiple rows per pair are intentional.

### `agreements`

| Column | Type | Notes |
|--------|------|--------|
| `id` | `uuid` | Primary key |
| `collaborator_id` | `uuid` | FK → `collaborators.id` |
| `title` | `text` | |
| `type` | `text` | `framework` \| `ip_assignment` \| `works_contract` |
| `signed_at` | `timestamp` | |
| `document_url` | `text` | Link to stored document |

### `mgp_ledger`

| Column | Type | Notes |
|--------|------|--------|
| `id` | `uuid` | Primary key |
| `collaborator_id` | `uuid` | FK → `collaborators.id` |
| `amount` | `numeric` | |
| `reason` | `text` | |
| `issued_at` | `timestamp` | |
| `issued_by` | `text` | Identifier of issuer (e.g. admin username or system) |

**MGP balance** for a collaborator = **sum** of `amount` for that `collaborator_id`; UI also shows an **itemised log** of issuances (ordered by `issued_at`, newest first unless specified otherwise).

---

## 4. Route structure

| Path | Behaviour |
|------|-----------|
| `/portal` | Redirect to `/portal/dashboard` when authenticated (and authorised per middleware rules below). |
| `/portal/dashboard` | **Collaborator’s own** view: profile snippet, projects, agreements, MGP. |
| `/portal/admin` | **Core only**: list all collaborators. |
| `/portal/admin/[username]` | **Core only**: view corresponding to a given collaborator’s dashboard (by `github_username` or agreed slug — **must match** the unique key used in `collaborators`). |

**Note:** `[username]` should resolve against `collaborators.github_username` (or a single canonical identifier documented at implementation time).

---

## 5. Dashboard view (collaborator)

The collaborator dashboard (and the core-team per-user view) should include:

1. **Identity** — Display name and **GitHub avatar** (from session / GitHub profile as provided by Auth.js + GitHub provider).
2. **Projects** — For each project the user is on (via `collaborator_projects`):
   - Project **name**
   - **Status**
   - Their **role on project** (`role_on_project`)
   - **Wiki content** rendered from markdown (`wiki_content`)
3. **Agreements** — **Title**, **type**, **signed date** (`signed_at`), **link** to document (`document_url`).
4. **MGP** — **Balance** (sum of ledger) plus **itemised issuance log** (all relevant `mgp_ledger` rows for that collaborator).

---

## 6. Middleware and authorisation

Auth.js middleware protects **all** `/portal/*` routes.

| Condition | Result |
|-----------|--------|
| Not authenticated | Redirect to **`/login`**. |
| Authenticated but **no** row in `collaborators` (or not whitelisted) | Show **“access not yet granted”** (or equivalent). **Do not** load or expose portal data. |
| Authenticated, `role = collaborator` | May use **`/portal/dashboard`** and self-scoped data only; **deny** `/portal/admin` and other users’ data. |
| Authenticated, `role = core` | May use **`/portal/admin`** and **`/portal/admin/[username]`** in addition to own dashboard if applicable. |

Implementation detail: resolve `collaborators` by **GitHub username** (or stable GitHub user id) from the session and enforce row-level access in server components / route handlers / Supabase RLS as appropriate.

---

## 7. Security and product notes (non-functional)

- **Row Level Security (RLS)** on Supabase should mirror the above rules so the database cannot leak other collaborators’ rows even if a client is tampered with.
- **Public marketing** routes must not depend on portal session for rendering critical content.
- **`document_url`** values should point to storage with appropriate access (signed URLs or private bucket policies) so agreements are not world-readable unless intended.

---

## 8. Out of scope (for this spec)

- Exact UI components, copy, and design tokens (follow existing site + Tailwind).
- Email flows, invitation onboarding, and admin UI for editing projects/ledger (unless added in a later revision).

---

*Document version: initial. Stack and table names are fixed assumptions for implementation planning.*
