/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
    domains: ['raw.githubusercontent.com'],
  }
}

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'githubusercontent.com',
      },
    ],
    domains: ['raw.githubusercontent.com'],
  }
}

