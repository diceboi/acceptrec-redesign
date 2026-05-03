-- Jobs tábla a WordPress-ből szinkronizált és admin által szerkeszthető állásokhoz
create table if not exists jobs (
  id              bigint generated always as identity primary key,
  title           text not null,
  slug            text unique not null,
  location        text,
  category        text,
  job_type        text,
  contract_type   text,
  salary_from     numeric,
  salary_to       numeric,
  salary_fix      numeric,
  short_description text,
  long_description  text,
  required_skills   text,
  daily_duties      text,
  benefits          text,
  shift             text,
  whatsapp_number   text default '447495995406',
  positions         int default 1,
  published         boolean default true,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now(),
  wp_id             int unique  -- WordPress databaseId, upsert-hez
);

-- RLS: public read only published jobs
alter table jobs enable row level security;

create policy "Public can read published jobs"
  on jobs for select
  using (published = true);

create policy "Service role full access"
  on jobs for all
  using (true)
  with check (true);
