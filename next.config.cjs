/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: { unoptimized: true },
  images: {
    unoptimized: true,
  },
  /* config options here */
};

module.exports = nextConfig;
