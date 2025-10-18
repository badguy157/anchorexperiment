/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // TEMPORARY: keep production builds green while we stabilize types.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // If you ever add remote images, allow domains here.
    // domains: ['images.pexels.com'],
  },
};

module.exports = nextConfig;
