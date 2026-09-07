-- Apply in Supabase SQL Editor after reviewing the current blogs RLS policies.
-- The BlogAdmin page requires a signed-in user before this policy can be used.
-- Do not expose the service-role key in the browser.

alter table public.blogs enable row level security;

grant select, insert, update, delete on table public.blogs to authenticated;
grant select on table public.blogs to anon;

drop policy if exists "Authenticated users can update blogs" on public.blogs;
create policy "Authenticated users can update blogs"
on public.blogs
for update
to authenticated
using (true)
with check (true);

-- Keep public reads limited to published posts.
drop policy if exists "Public can read published blogs" on public.blogs;
create policy "Public can read published blogs"
on public.blogs
for select
to anon
using (status = 'published');

drop policy if exists "Authenticated users can read blogs" on public.blogs;
create policy "Authenticated users can read blogs"
on public.blogs
for select
to authenticated
using (true);

-- Verify after applying:
-- select current_user, auth.uid(), auth.role();
-- select policyname, cmd, roles, qual, with_check
-- from pg_policies
-- where schemaname = 'public' and tablename = 'blogs';