/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      //  This is an example
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
}

module.exports = nextConfig
