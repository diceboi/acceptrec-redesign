"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// ─── Public Queries ─────────────────────────────────────────────────────────

export async function getPublicJobs() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching public jobs:", error.message, error.code, error.details);
    return [];
  }

  return data.map((job) => ({
    id: job.id,
    title: job.title,
    slug: job.slug,
    location: job.location || "",
    category: job.category || "",
    jobType: job.job_type || "",
    contractType: job.contract_type || "",
    salaryFrom: job.salary_from,
    salaryTo: job.salary_to,
    salaryFix: job.salary_fix,
    shortDescription: job.short_description || "",
    longDescription: job.long_description || "",
    requiredSkills: job.required_skills || "",
    dailyDuties: job.daily_duties || "",
    benefits: job.benefits || "",
    shift: job.shift || "",
    whatsappNumber: job.whatsapp_number || "447495995406",
    positions: job.positions || 1,
    // Derived pay label for display
    pay: job.salary_fix
      ? `£${job.salary_fix}/hour`
      : job.salary_from && job.salary_to
      ? `£${job.salary_from}–£${job.salary_to}/hour`
      : job.salary_from
      ? `£${job.salary_from}/hour`
      : "",
    // Numeric rate for filter slider (use fix or from)
    payRate: job.salary_fix ?? job.salary_from ?? 0,
  }));
}

// ─── Admin Queries ────────────────────────────────────────────────────────────

export async function getJobs() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching jobs:", error.message, "|", error.code);
    return [];
  }

  return data.map((job) => ({
    id: job.id,
    title: job.title,
    slug: job.slug,
    location: job.location,
    category: job.category,
    jobType: job.job_type,
    contractType: job.contract_type,
    salaryFrom: job.salary_from,
    salaryTo: job.salary_to,
    salaryFix: job.salary_fix,
    shortDescription: job.short_description,
    longDescription: job.long_description,
    requiredSkills: job.required_skills,
    dailyDuties: job.daily_duties,
    benefits: job.benefits,
    shift: job.shift,
    whatsappNumber: job.whatsapp_number,
    positions: job.positions,
    published: job.published,
    createdAt: job.created_at,
    updatedAt: job.updated_at,
    wpId: job.wp_id,
  }));
}

export async function getJob(id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !data) {
    console.error("Error fetching job:", error?.message, "|", error?.code);
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    location: data.location,
    category: data.category,
    jobType: data.job_type,
    contractType: data.contract_type,
    salaryFrom: data.salary_from,
    salaryTo: data.salary_to,
    salaryFix: data.salary_fix,
    shortDescription: data.short_description,
    longDescription: data.long_description,
    requiredSkills: data.required_skills,
    dailyDuties: data.daily_duties,
    benefits: data.benefits,
    shift: data.shift,
    whatsappNumber: data.whatsapp_number,
    positions: data.positions,
    published: data.published,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    wpId: data.wp_id,
  };
}

export async function createJob(job) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .insert({
      title: job.title,
      slug: job.slug,
      location: job.location,
      category: job.category,
      job_type: job.jobType,
      contract_type: job.contractType,
      salary_from: job.salaryFrom ? Number(job.salaryFrom) : null,
      salary_to: job.salaryTo ? Number(job.salaryTo) : null,
      salary_fix: job.salaryFix ? Number(job.salaryFix) : null,
      short_description: job.shortDescription,
      long_description: job.longDescription,
      required_skills: job.requiredSkills,
      daily_duties: job.dailyDuties,
      benefits: job.benefits,
      shift: job.shift,
      whatsapp_number: job.whatsappNumber,
      positions: job.positions ? Number(job.positions) : 1,
      published: job.published,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
  return data;
}

export async function updateJob(id, updates) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("jobs")
    .update({
      title: updates.title,
      slug: updates.slug,
      location: updates.location,
      category: updates.category,
      job_type: updates.jobType,
      contract_type: updates.contractType,
      salary_from: updates.salaryFrom ? Number(updates.salaryFrom) : null,
      salary_to: updates.salaryTo ? Number(updates.salaryTo) : null,
      salary_fix: updates.salaryFix ? Number(updates.salaryFix) : null,
      short_description: updates.shortDescription,
      long_description: updates.longDescription,
      required_skills: updates.requiredSkills,
      daily_duties: updates.dailyDuties,
      benefits: updates.benefits,
      shift: updates.shift,
      whatsapp_number: updates.whatsappNumber,
      positions: updates.positions ? Number(updates.positions) : 1,
      published: updates.published,
      updated_at: new Date().toISOString(),
    })
    .eq("id", Number(id));

  if (error) throw new Error(error.message);
  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
  return { success: true };
}

export async function deleteJob(id) {
  const supabase = await createClient();
  const { error } = await supabase.from("jobs").delete().eq("id", Number(id));

  if (error) throw new Error(error.message);
  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
  return { success: true };
}
