-- Velnix Solutions: verified blogs cleanup
-- Run in Supabase SQL Editor or through authenticated Supabase MCP.
-- This migration changes only verified metadata corrections. It does not delete rows,
-- create synthetic FAQs, change published IDs/dates/images, or invent slugs.

begin;

-- Verified title corrections: remove accidental whitespace and fix clear grammar.
update public.blogs
set title = 'How Predictive Modeling Transforms Business Decisions in 2026'
where id = '4f359e03-a51c-44f1-b3e3-5be7dd3b48bc'
  and title = 'How Predictive Modeling Transforms Business Decisions in 2026  ';

update public.blogs
set title = 'How ChatGPT Integration Transforms Business Applications in 2026'
where id = 'dc8d30a0-7c95-4f25-9e91-416036a42d74'
  and title = 'How ChatGPT Integration  transform Business Applications in 2026';

update public.blogs
set title = 'How Natural Language Processing Is Transforming Business Communication in 2026'
where id = '206a76ec-f606-42f7-850e-e9d79ac1de95'
  and title = ' How Natural Language Processing Is Transforming Business Communication in 2026';

update public.blogs
set title = 'How AI Chatbots Transform Customer Support in 2026'
where id = '0b669507-3a40-4ec4-826a-db4a007021b0'
  and title = ' How AI Chatbots Transform Customer Support in 2026';

update public.blogs
set title = 'How Machine & Deep Learning Drive Intelligent Business Solutions in 2026'
where id = '5e05c5b3-23c5-4b60-a03c-2488a9ba5866'
  and title = ' How Machine & Deep Learning Drive Intelligent Business Solutions in 2026';

update public.blogs
set title = 'AI Isn''t the Future—It''s the Advantage You''re Missing Today'
where id = '09d1e49b-8288-4ec5-810a-8013b62c5777'
  and title = 'AI Isn''t the Future—It''s the Advantage Your Missing Today';

-- The article topic directly supports this focus keyword.
update public.blogs
set focus_keyword = 'computer vision'
where id = '37cd9540-04fe-45d2-9d47-2f7080c92328'
  and (focus_keyword is null or btrim(focus_keyword) = '');

-- Replace the confirmed missing EHR Storage object with the verified production
-- asset. The application will continue to read this value from blogs.image_url.
update public.blogs
set image_url = 'https://korkozxilsxaslokckif.supabase.co/storage/v1/object/public/blog-images/a71acc4c-dd7c-49dd-b7f1-e3efcabb34a1/cover-1788781557881-1ixqs41t6v1.avif'
where id = 'f50561fa-4aa6-4035-b260-ccdea40898c3'
  and image_url = 'https://korkozxilsxaslokckif.supabase.co/storage/v1/object/public/blog-images/0.7646483726426966.png';

commit;

-- Post-migration verification queries:
select id, title, focus_keyword, image_url
from public.blogs
where id in (
  '4f359e03-a51c-44f1-b3e3-5be7dd3b48bc',
  'dc8d30a0-7c95-4f25-9e91-416036a42d74',
  '206a76ec-f606-42f7-850e-e9d79ac1de95',
  '0b669507-3a40-4ec4-826a-db4a007021b0',
  '5e05c5b3-23c5-4b60-a03c-2488a9ba5866',
  '09d1e49b-8288-4ec5-810a-8013b62c5777',
  '37cd9540-04fe-45d2-9d47-2f7080c92328'
)
order by created_at desc;

-- Structural audit queries requiring an authenticated SQL role:
-- select column_name, data_type, is_nullable, column_default
-- from information_schema.columns
-- where table_schema = 'public' and table_name = 'blogs'
-- order by ordinal_position;
-- select indexname, indexdef from pg_indexes where schemaname = 'public' and tablename = 'blogs';
-- select policyname, cmd, roles, qual, with_check from pg_policies where schemaname = 'public' and tablename = 'blogs';
-- select tgname, pg_get_triggerdef(oid) from pg_trigger where tgrelid = 'public.blogs'::regclass and not tgisinternal;
