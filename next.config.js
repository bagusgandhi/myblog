/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com','ghost.bagusgandhi.my.id', 'static.ghost.org'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = nextConfig
