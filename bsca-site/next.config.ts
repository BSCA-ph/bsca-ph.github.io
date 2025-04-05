// next.config.ts

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com'], // Allow Unsplash for external images
  },
};

export default nextConfig;
