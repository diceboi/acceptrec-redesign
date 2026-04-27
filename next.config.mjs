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
    ],
  },
};

export default nextConfig;
