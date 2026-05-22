import type { NextConfig } from "next";

const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isCustomDomain ? "" : "/fenyxn",
  trailingSlash: true,
};

export default nextConfig;
