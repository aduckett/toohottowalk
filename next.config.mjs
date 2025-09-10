/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add remote hosts if you use external images, e.g. Instagram CDN
      // { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
  },
};
export default nextConfig;
