"use server";

import { createClient } from "@/utils/supabase/server";

export async function getUsers() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }
  return data;
}

export async function toggleUserApproval(id, currentStatus) {
  const supabase = await createClient();
  
  // Verify requester is admin
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");
  
  const { data: requester } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
    
  if (requester?.role !== 'admin') throw new Error("Unauthorized");

  const { error } = await supabase
    .from("profiles")
    .update({ is_approved: !currentStatus })
    .eq("id", id);
    
  if (error) throw new Error(error.message);
}

export async function updateUserRole(id, role) {
  const supabase = await createClient();
  
  // Verify requester is admin
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");
  
  const { data: requester } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
    
  if (requester?.role !== 'admin') throw new Error("Unauthorized");

  const { error } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", id);
    
  if (error) throw new Error(error.message);
}

export async function getPendingUsers() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, created_at")
    .eq("is_approved", false)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching pending users:", error);
    return [];
  }
  return data;
}

export async function approveAllUsers() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");
  
  const { data: requester } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
    
  if (requester?.role !== 'admin') throw new Error("Unauthorized");

  const { error } = await supabase
    .from("profiles")
    .update({ is_approved: true })
    .eq("is_approved", false);
    
  if (error) throw new Error(error.message);
}
