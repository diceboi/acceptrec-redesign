-- Add ref, internal_title, and client_name columns to jobs table
ALTER TABLE public.jobs ADD COLUMN IF NOT EXISTS ref TEXT;
ALTER TABLE public.jobs ADD COLUMN IF NOT EXISTS internal_title TEXT;
ALTER TABLE public.jobs ADD COLUMN IF NOT EXISTS client_name TEXT;

-- Backfill ref for existing rows if not already done
UPDATE public.jobs SET ref = 'AR-' || id WHERE ref IS NULL;
