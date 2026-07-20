/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from /santhosh790.github.io/
  // Remove basePath if using custom domain
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig
