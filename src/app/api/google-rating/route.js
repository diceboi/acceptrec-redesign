import { NextResponse } from "next/server";

// Accept Recruitment – Leicester (main branch)
// Place ID found via Google Places API text search
const PLACE_QUERY = "Accept Recruitment Leicester UK";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  try {
    // Step 1: Find the place
    const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(PLACE_QUERY)}&inputtype=textquery&fields=place_id,name,rating,user_ratings_total&key=${apiKey}`;

    const searchRes = await fetch(searchUrl, { next: { revalidate: 3600 } }); // cache 1 hour
    const searchData = await searchRes.json();

    const candidate = searchData?.candidates?.[0];

    if (!candidate) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 });
    }

    return NextResponse.json({
      rating: candidate.rating ?? null,
      total: candidate.user_ratings_total ?? null,
      name: candidate.name ?? null,
    });
  } catch (err) {
    console.error("Google Places API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch rating" },
      { status: 500 },
    );
  }
}
