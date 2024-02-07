/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // DANGER ZONEEEEEEEEE
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
