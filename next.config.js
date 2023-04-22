/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.weatherbit.io"],
  },
};

module.exports = nextConfig;
// serverComponentsExternalPackages: ["@tremor/react"],
