import type { NextConfig } from "next";

const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const basePath = isCustomDomain ? "" : "/fenyxn";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
