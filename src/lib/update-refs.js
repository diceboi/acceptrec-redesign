"use server";

import { createClient } from "@/utils/supabase/server";

const ROLE_CODES = [
  { keywords: ["hgv 1", "class 1", "c1"], code: "C1" },
  { keywords: ["hgv 2", "class 2", "c2"], code: "C2" },
  { keywords: ["7.5t", "7.5 tonne"], code: "75T" },
  { keywords: ["van driver"], code: "VAN" },
  { keywords: ["multi-drop", "multidrop"], code: "MD" },
  { keywords: ["counterbalance", "flt cb"], code: "FLTCB" },
  { keywords: ["reach truck", "flt reach"], code: "FLTR" },
  { keywords: ["bendi", "flexi"], code: "FLTB" },
  { keywords: ["flt"], code: "FLT" },
  { keywords: ["warehouse", "wh "], code: "WH" },
  { keywords: ["picker", "packer", "pk "], code: "PK" },
  { keywords: ["production"], code: "PROD" },
  { keywords: ["general", "gen "], code: "GEN" },
  { keywords: ["admin", "office"], code: "ADM" },
];

const LOCATION_CODES = {
  "leicester": "LEI",
  "coventry": "COV",
  "tamworth": "TAM",
  "northampton": "NTH",
  "nottingham": "NOT",
  "derby": "DER",
  "birmingham": "BIR",
  "milton keynes": "MK",
  "mk": "MK"
};

function getRoleCode(text) {
  if (!text) return "GEN";
  const t = text.toLowerCase();
  for (const mapping of ROLE_CODES) {
    if (mapping.keywords.some(k => t.includes(k))) return mapping.code;
  }
  return "GEN";
}

function getLocationCode(text) {
  if (!text) return "LEI";
  const t = text.toLowerCase();
  for (const [name, code] of Object.entries(LOCATION_CODES)) {
    if (t.includes(name)) return code;
  }
  return "LEI";
}

export async function updateAllJobRefs() {
  const supabase = await createClient();
  const { data: jobs, error } = await supabase.from("jobs").select("*").order("created_at", { ascending: true });

  if (error) return { error: error.message };

  const counts = {}; // Keep track of sequences per role-loc pair

  const updates = [];
  for (const job of jobs) {
    const roleText = job.internal_title || job.title;
    const roleCode = getRoleCode(roleText);
    const locCode = getLocationCode(job.location);
    const key = `${roleCode}-${locCode}`;
    
    counts[key] = (counts[key] || 0) + 1;
    const seq = counts[key].toString().padStart(3, "0");
    const newRef = `JOB-${roleCode}-${locCode}-${seq}`;
    
    updates.push(supabase.from("jobs").update({ ref: newRef }).eq("id", job.id));
  }

  await Promise.all(updates);
  return { success: true, updated: updates.length };
}
