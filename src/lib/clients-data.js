"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getClients() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching clients:", error);
    return [];
  }

  return data;
}

export async function getClient(id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching client:", error);
    return null;
  }

  return data;
}

export async function createClientRecord(client) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("clients")
    .insert([
      {
        client_code: client.client_code,
        name: client.name,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);
  
  revalidatePath("/admin/clients");
  return data;
}

export async function updateClientRecord(id, updates) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("clients")
    .update({
      client_code: updates.client_code,
      name: updates.name,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  
  revalidatePath("/admin/clients");
  return data;
}

export async function deleteClientRecord(id) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from("clients")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  
  revalidatePath("/admin/clients");
  return { success: true };
}
