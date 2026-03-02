import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lsapyxmfpbrgttavcxag.supabase.co",
      },
      {
        protocol: "https",
        hostname: "xxddchpgennhtnvqnbhg.supabase.co",
      },
    ],
  },
};

export default nextConfig;
