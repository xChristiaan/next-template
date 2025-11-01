/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const contentlayer = await import("next-contentlayer").catch(() => ({
  withContentlayer: (config) => config,
}))

export default contentlayer.withContentlayer(nextConfig)
