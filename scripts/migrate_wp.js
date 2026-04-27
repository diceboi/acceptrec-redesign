require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Ideálisan Service Role Key kéne a bypashez RLS, de most az RLS publikus mindenre.

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const GRAPHQL_ENDPOINT = 'https://admin.acceptrec.co.uk/graphql';

// 1. Kategóriák lekérése
const QUERY_CATEGORIES = `
  query getCategories {
    categories(first: 100) {
      nodes {
        categoryId
        name
        slug
      }
    }
  }
`;

// 2. Posztok lekérése
const QUERY_POSTS = `
  query getPosts {
    posts(first: 100) {
      edges {
        node {
          id
          date
          title
          slug
          excerpt
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          blocks {
            saveContent
          }
        }
      }
    }
  }
`;

async function fetchGraphQL(query) {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    throw new Error("Failed to fetch GraphQL API");
  }
  return json.data;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

async function runMigration() {
  console.log("🚀 Starting WP to Supabase Migration...");

  // 1. Fetch data from WordPress
  console.log("Fetching categories from WP...");
  const catData = await fetchGraphQL(QUERY_CATEGORIES);
  const wpCategories = catData.categories.nodes;

  console.log("Fetching posts from WP...");
  const postData = await fetchGraphQL(QUERY_POSTS);
  const wpPosts = postData.posts.edges.map(e => e.node);

  console.log(`Found ${wpCategories.length} categories and ${wpPosts.length} posts.`);

  // 2. Insert Categories into Supabase
  console.log("Upserting categories...");
  const catSet = new Set(wpCategories.map(c => c.slug || slugify(c.name)));
  // Extract categories from posts too just in case
  wpPosts.forEach(p => {
    if (p.categories?.nodes) {
      p.categories.nodes.forEach(c => catSet.add(c.slug || slugify(c.name)));
    }
  });

  const catArray = Array.from(catSet).filter(Boolean);
  for (const catSlug of catArray) {
    const name = wpCategories.find(c => (c.slug || slugify(c.name)) === catSlug)?.name || catSlug.replace(/-/g, ' ');
    await supabase.from('blog_categories').upsert({
      slug: catSlug,
      name: name
    }, { onConflict: 'slug' });
  }

  // 3. Insert Tags into Supabase
  console.log("Upserting tags...");
  const tagSet = new Set();
  wpPosts.forEach(p => {
    if (p.tags?.nodes) {
      p.tags.nodes.forEach(t => tagSet.add(t.slug || slugify(t.name)));
    }
  });

  const tagArray = Array.from(tagSet).filter(Boolean);
  for (const tagSlug of tagArray) {
    const tagName = tagSlug.replace(/-/g, ' '); // Simple format
    await supabase.from('blog_tags').upsert({
      slug: tagSlug,
      name: tagName
    }, { onConflict: 'slug' });
  }

  // 4. Insert Posts
  console.log("Inserting posts...");
  for (const post of wpPosts) {
    // Generate HTML from blocks
    const contentHtml = post.blocks ? post.blocks.map(b => b.saveContent).join("\n") : "";
    const coverImage = post.featuredImage?.node?.sourceUrl || null;
    const authorName = post.author?.node?.name || "Admin";
    const categorySlug = post.categories?.nodes?.[0]?.slug || slugify(post.categories?.nodes?.[0]?.name || "");

    console.log(`- Importing: ${post.title}`);

    // Check if post exists
    const { data: existingPost } = await supabase.from('blogs').select('id').eq('slug', post.slug).single();

    let blogId;
    if (existingPost) {
      blogId = existingPost.id;
      await supabase.from('blogs').update({
        title: post.title,
        excerpt: post.excerpt,
        content: contentHtml,
        cover_image: coverImage,
        category_slug: categorySlug || null,
        author: authorName,
        published: true, // Assuming WP posts are published
        created_at: new Date(post.date).toISOString()
      }).eq('id', blogId);
    } else {
      const { data: newPost, error } = await supabase.from('blogs').insert({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: contentHtml,
        cover_image: coverImage,
        category_slug: categorySlug || null,
        author: authorName,
        published: true,
        created_at: new Date(post.date).toISOString()
      }).select().single();

      if (error) {
        console.error("Error inserting post:", post.slug, error);
        continue;
      }
      blogId = newPost.id;
    }

    // Insert post tags
    if (post.tags?.nodes?.length > 0) {
      // Clear old tags
      await supabase.from('blog_post_tags').delete().eq('blog_id', blogId);
      
      const tagInserts = post.tags.nodes.map(t => ({
        blog_id: blogId,
        tag_slug: t.slug || slugify(t.name)
      }));
      await supabase.from('blog_post_tags').insert(tagInserts);
    }
  }

  console.log("✅ Migration completed successfully!");
}

runMigration().catch(console.error);
