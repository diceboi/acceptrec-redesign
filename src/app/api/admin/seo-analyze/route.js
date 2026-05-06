import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { title, content, excerpt, targetKeyword } = await req.json();

    // Strip HTML tags to save tokens
    const cleanContent = content.replace(/<[^>]*>?/gm, "").substring(0, 4000);

    const prompt = `
      You are an SEO expert. Analyze the following blog post and provide SEO recommendations.
      
      TITLE: ${title}
      EXCERPT: ${excerpt}
      CONTENT: ${cleanContent}
      TARGET KEYWORD: ${targetKeyword || "Not specified"}

      Return a JSON object with the following structure:
      {
        "seoTitle": "A catchy, SEO-optimized title (max 60 chars)",
        "seoDescription": "A compelling meta description (max 160 chars)",
        "seoKeywords": "3-5 comma-separated keywords",
        "analysis": [
          { "type": "success|warning|error", "message": "Feedback message" }
        ],
        "readabilityScore": 0-100
      }

      Focus on Hungarian language if the content is in Hungarian. Be concise and professional.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant that specializes in SEO optimization for blogs." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content);

    return NextResponse.json(result);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json({ error: "Failed to analyze SEO" }, { status: 500 });
  }
}
