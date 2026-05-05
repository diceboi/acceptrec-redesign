-- ==========================================
-- ACCEPT REC REDESIGN - BLOG SEO UPDATES
-- ==========================================

-- SEO mezők hozzáadása a blogs táblához
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS seo_title TEXT;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS seo_description TEXT;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS seo_keywords TEXT;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS og_image TEXT;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS canonical_url TEXT;

-- 2. Blog storage bucket létrehozása
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog', 'blog', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS (ha szükséges)
CREATE POLICY "Blog Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'blog');
CREATE POLICY "Blog Admin Insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog');
CREATE POLICY "Blog Admin Update" ON storage.objects FOR UPDATE USING (bucket_id = 'blog');
CREATE POLICY "Blog Admin Delete" ON storage.objects FOR DELETE USING (bucket_id = 'blog');
