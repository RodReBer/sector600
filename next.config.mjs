/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Disable server components
  experimental: {
    appDir: true,
    serverActions: false,
  },
  
  // Properly handle env vars
  env: {
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
    // Add other public env vars here if needed
  },
  
  // Increase memory limit for build process
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' };
    return config;
  },
}

export default nextConfig
