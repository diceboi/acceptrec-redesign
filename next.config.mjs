/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tools/rate-calculator',
        destination: '/technology/rate-calculator',
        permanent: true,
      },
      {
        source: '/tools/quote-builder',
        destination: '/technology/quote-builder',
        permanent: true,
      },
      // SEO Legacy Redirects
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/team',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/for-employers',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/for-employers/shortlisted-candidates',
        destination: '/candidates',
        permanent: true,
      },
      {
        source: '/onboarding-process',
        destination: '/registration',
        permanent: true,
      },
      {
        source: '/for-candidates',
        destination: '/candidates',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      {
        source: '/offices/tamworth-recruitment',
        destination: '/offices',
        permanent: true,
      },
      {
        source: '/offices/leicester-recruitment',
        destination: '/offices',
        permanent: true,
      },
      {
        source: '/offices/coventry-recruitment',
        destination: '/offices',
        permanent: true,
      },
      {
        source: '/covid-19',
        destination: '/',
        permanent: true,
      },
      {
        source: '/manual-handling',
        destination: '/candidates',
        permanent: true,
      },
      {
        source: '/refer-a-friend',
        destination: '/candidates',
        permanent: true,
      },
      {
        source: '/clients/national-temporary-worker-day',
        destination: '/employers',
        permanent: true,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.acceptrec.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cfjcontsrjvrqxabwvyl.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
