/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1203054-5001483.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;
