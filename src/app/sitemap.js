import { getPublicPosts } from '@/lib/blog-data';

export default async function sitemap() {
  const baseUrl = 'https://www.acceptrec.co.uk';

  // Static pages
  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'daily' },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/employers', priority: 0.8 },
    { path: '/candidates', priority: 0.7 },
    { path: '/offices', priority: 0.9 },
    { path: '/offices/leicester', priority: 0.9 },
    { path: '/offices/coventry', priority: 0.9 },
    { path: '/offices/tamworth', priority: 0.9 },
    { path: '/industries', priority: 0.8 },
    { path: '/industries/logistics', priority: 0.8 },
    { path: '/industries/manufacturing', priority: 0.8 },
    { path: '/industries/food-production', priority: 0.8 },
    { path: '/industries/ecommerce', priority: 0.7 },
    { path: '/driving-recruitment', priority: 0.8 },
    { path: '/permanent-recruitment', priority: 0.8 },
    { path: '/temporary-staffing', priority: 0.8 },
    { path: '/industrial-staffing', priority: 0.8 },
    { path: '/warehouse-staffing', priority: 0.8 },
    { path: '/on-site-managed-services', priority: 0.8 },
    { path: '/technology', priority: 0.7 },
    { path: '/technology/acceptpulse', priority: 0.6 },
    { path: '/technology/acceptconnect', priority: 0.6 },
    { path: '/technology/acceptmentor', priority: 0.6 },
    { path: '/technology/acceptrewards', priority: 0.6 },
    { path: '/technology/smart-matching', priority: 0.6 },
    { path: '/technology/worker-ratings', priority: 0.6 },
    { path: '/technology/client-portal', priority: 0.6 },
    { path: '/technology/client-feedback', priority: 0.6 },
    { path: '/technology/daily-hours', priority: 0.6 },
    { path: '/technology/quote-builder', priority: 0.6 },
    { path: '/technology/rate-calculator', priority: 0.6 },
    { path: '/jobs', priority: 0.9, changeFrequency: 'daily' },
    { path: '/drivers', priority: 0.8 },
    { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
    { path: '/faq', priority: 0.6 },
    { path: '/registration', priority: 0.8 },
    { path: '/get-started', priority: 0.8 },
    { path: '/case-studies', priority: 0.7 },
    { path: '/case-studies/inpost', priority: 0.7 },
    { path: '/case-studies/vistry', priority: 0.7 },
    { path: '/case-studies/poundstretcher', priority: 0.7 },
    { path: '/team', priority: 0.6 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/gdpr', priority: 0.3 },
    { path: '/complaints-policy', priority: 0.3 },
    { path: '/modern-slavery-statement', priority: 0.3 },
    { path: '/why-accept', priority: 0.7 },
    { path: '/join-our-team', priority: 0.7 },
    { path: '/innovation-partners', priority: 0.6 },
    { path: '/pay-query', priority: 0.5 },
    { path: '/roi-calculator', priority: 0.5 },
    { path: '/success-stories', priority: 0.7 },
    { path: '/employers/rewards', priority: 0.6 },
    { path: '/clients/intelligence', priority: 0.6 },
  ];

  const staticEntries = staticPages.map(({ path, priority = 0.7, changeFrequency = 'weekly' }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  // Dynamic blog posts
  let blogEntries = [];
  try {
    const { posts } = await getPublicPosts(1, 1000, null);
    blogEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch (e) {
    // If blog data fails, continue with static pages only
  }

  return [...staticEntries, ...blogEntries];
}
