import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Frontend API route
        destination: "https://touch.bytecareltd.com/api/:path*", // Backend API
      },
    ];
  },
};
export default nextConfig;
