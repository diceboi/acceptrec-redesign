import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

const WP_GRAPHQL_URL = "https://admin.acceptrec.co.uk/graphql";

const JOBS_QUERY = `
query getJoblist {
  joblists(first: 1000, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        databaseId
        title
        slug
        joblists {
          shortDescription
          longDescription
          requiredSkills
          dailyDuties
          benefits
          shift
          location
          category
          jobType
          contractType
          salary {
            fix
            from
            to
          }
        }
      }
    }
  }
}
`;

function generateSlug(title, databaseId) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
  return `${base}-${databaseId}`;
}

export async function GET(request) {
  // Simple secret-based protection
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.SYNC_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Fetch jobs from WordPress GraphQL
    const wpResponse = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: JOBS_QUERY }),
      cache: "no-store",
    });

    if (!wpResponse.ok) {
      throw new Error(`WordPress GraphQL error: ${wpResponse.status}`);
    }

    const wpData = await wpResponse.json();

    if (wpData.errors) {
      throw new Error(
        `GraphQL errors: ${wpData.errors.map((e) => e.message).join(", ")}`
      );
    }

    const edges = wpData?.data?.joblists?.edges || [];

    if (edges.length === 0) {
      return NextResponse.json({
        message: "No jobs found in WordPress",
        synced: 0,
      });
    }

    // 2. Transform WP data → Supabase rows
    const rows = edges.map(({ node }) => {
      const j = node.joblists;
      const categories = Array.isArray(j.category)
        ? j.category.join(", ")
        : j.category || "";

      return {
        wp_id: node.databaseId,
        title: node.title,
        slug: generateSlug(node.title, node.databaseId),
        location: j.location || "",
        category: categories,
        job_type: j.jobType || "",
        contract_type: j.contractType || "",
        salary_from: j.salary?.from ? Number(j.salary.from) : null,
        salary_to: j.salary?.to ? Number(j.salary.to) : null,
        salary_fix: j.salary?.fix ? Number(j.salary.fix) : null,
        short_description: j.shortDescription || "",
        long_description: j.longDescription || "",
        required_skills: j.requiredSkills || "",
        daily_duties: j.dailyDuties || "",
        benefits: j.benefits || "",
        shift: j.shift || "",
        whatsapp_number: "447495995406",
        positions: 1,
        published: true,
      };
    });

    // 3. Upsert into Supabase (wp_id is unique key)
    const supabase = await createClient();
    const { error, count } = await supabase
      .from("jobs")
      .upsert(rows, {
        onConflict: "wp_id",
        ignoreDuplicates: false,
      })
      .select("id", { count: "exact" });

    if (error) throw new Error(`Supabase upsert error: ${error.message}`);

    return NextResponse.json({
      message: "Sync complete",
      synced: rows.length,
      wpJobsFound: edges.length,
    });
  } catch (err) {
    console.error("Sync jobs error:", err);
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
