"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getTeamMembers() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching team members:", error);
    return [];
  }

  return data;
}

export async function getTeamMember(id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error) {
    console.error("Error fetching team member:", error);
    return null;
  }

  return data;
}

export async function createTeamMember(member) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("team_members")
    .insert([
      {
        name: member.name,
        role: member.role,
        location: member.location,
        quote: member.quote,
        superpower: member.superpower,
        motto: member.motto,
        loves: member.loves,
        image_url: member.image_url,
        disney_image_url: member.disney_image_url,
        order_index: member.order_index,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);
  
  revalidatePath("/admin/team");
  revalidatePath("/team");
  return data;
}

export async function updateTeamMember(id, updates) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("team_members")
    .update({
      name: updates.name,
      role: updates.role,
      location: updates.location,
      quote: updates.quote,
      superpower: updates.superpower,
      motto: updates.motto,
      loves: updates.loves,
      image_url: updates.image_url,
      disney_image_url: updates.disney_image_url,
      order_index: updates.order_index,
      updated_at: new Date().toISOString(),
    })
    .eq("id", Number(id))
    .select()
    .single();

  if (error) throw new Error(error.message);
  
  revalidatePath("/admin/team");
  revalidatePath("/team");
  return data;
}

export async function deleteTeamMember(id) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from("team_members")
    .delete()
    .eq("id", Number(id));

  if (error) throw new Error(error.message);
  
  revalidatePath("/admin/team");
  revalidatePath("/team");
  return { success: true };
}

export async function reorderTeamMembers(memberIds) {
  const supabase = await createClient();
  
  const updates = memberIds.map((id, index) => ({
    id,
    order_index: index,
  }));

  const { error } = await supabase
    .from("team_members")
    .upsert(updates);

  if (error) throw new Error(error.message);
  
  revalidatePath("/admin/team");
  revalidatePath("/team");
  return { success: true };
}
