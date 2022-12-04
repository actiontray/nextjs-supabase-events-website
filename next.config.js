/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      { source: "/actionapi/:path*", destination: "/api/actionapi/:path*" },
    ];
  },
};

module.exports = nextConfig;
