/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      { source: "/actionapi/:path*", destination: "/api/web/actions/:path*" },
    ];
  },
};

module.exports = nextConfig;
