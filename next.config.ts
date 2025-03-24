import type { NextConfig } from "next";

const MyApi = process.env.NEXT_PUBLIC_API_URL;
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["touch.bytecareltd.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Frontend API route
        destination: `${MyApi}/api/:path*`, // Backend API
      },
    ];
  },
}; 
export default nextConfig;
