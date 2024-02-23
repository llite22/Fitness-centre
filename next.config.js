/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img2.fonwall.ru'
      },
      {
        protocol: 'https',
        hostname: 'img3.fonwall.ru'
      },
      {
        protocol: 'https',
        hostname: 'sun9-74.userapi.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
    ]
  }
}

module.exports = nextConfig