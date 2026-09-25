import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.abcz.workers.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;