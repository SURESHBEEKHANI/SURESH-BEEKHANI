-- Run this in Supabase Dashboard → SQL Editor
-- Fixes "new row violates row-level security policy" / upload path mismatch
-- for the blog-images bucket used by BlogAdmin.tsx

-- Remove old conflicting policies if they exist (adjust names to match your dashboard)
-- DROP POLICY IF EXISTS "blog_images_insert" ON storage.objects;
-- DROP POLICY IF EXISTS "blog_images_select" ON storage.objects;
-- DROP POLICY IF EXISTS "blog_images_update" ON storage.objects;
-- DROP POLICY IF EXISTS "blog_images_delete" ON storage.objects;

-- Authenticated admins upload into their own folder: {user_id}/filename.ext
CREATE POLICY "blog_images_insert"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'blog-images'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Public read (bucket should also be marked Public in Storage settings)
CREATE POLICY "blog_images_select"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Allow authenticated users to update/delete their own uploads
CREATE POLICY "blog_images_update"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'blog-images'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "blog_images_delete"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'blog-images'
  AND (storage.foldername(name))[1] = auth.uid()::text
);
