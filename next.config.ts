import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "videos.pexels.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "fs-home-improvements.vercel.app" }],
        destination: "https://fshome-improvements.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fshome-improvements.co.uk" }],
        destination: "https://fshome-improvements.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
