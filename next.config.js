/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/montshejohn.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/montshejohn.github.io/' : '',
}

module.exports = nextConfig
