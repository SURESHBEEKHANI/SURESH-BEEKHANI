-- Optional SEO metadata used by BlogAdmin.tsx.
-- Run in Supabase SQL Editor before saving slug/search-intent values.

begin;

alter table public.blogs
  add column if not exists slug text,
  add column if not exists search_intent text;

create unique index if not exists blogs_published_slug_unique
  on public.blogs (slug)
  where status = 'published' and slug is not null and btrim(slug) <> '';

commit;

-- Verification:
-- select column_name, data_type
-- from information_schema.columns
-- where table_schema = 'public'
--   and table_name = 'blogs'
--   and column_name in ('slug', 'search_intent');