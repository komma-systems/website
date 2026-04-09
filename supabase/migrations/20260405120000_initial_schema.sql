-- pgcrypto provides gen_random_uuid() in the extensions schema
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

CREATE TABLE collaborators (
  id uuid PRIMARY KEY DEFAULT extensions.gen_random_uuid(),
  github_username text NOT NULL UNIQUE,
  display_name text,
  role text CHECK (role IN ('collaborator', 'core')),
  joined_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT extensions.gen_random_uuid(),
  name text NOT NULL,
  description text,
  wiki_content text,
  status text
);

CREATE TABLE collaborator_projects (
  collaborator_id uuid NOT NULL REFERENCES collaborators (id),
  project_id uuid NOT NULL REFERENCES projects (id),
  role_on_project text,
  PRIMARY KEY (collaborator_id, project_id)
);

CREATE TABLE agreements (
  id uuid PRIMARY KEY DEFAULT extensions.gen_random_uuid(),
  collaborator_id uuid REFERENCES collaborators (id),
  title text,
  type text CHECK (type IN ('framework', 'ip_assignment', 'works_contract')),
  signed_at timestamptz,
  document_url text
);

CREATE TABLE mgp_ledger (
  id uuid PRIMARY KEY DEFAULT extensions.gen_random_uuid(),
  collaborator_id uuid REFERENCES collaborators (id),
  amount numeric NOT NULL,
  reason text,
  issued_at timestamptz NOT NULL DEFAULT now(),
  issued_by text
);
