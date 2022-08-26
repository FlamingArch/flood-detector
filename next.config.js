/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    loader: "imgix",
    path: "/",
    domains: ["source.unsplash.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
