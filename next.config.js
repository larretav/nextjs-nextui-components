/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
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
