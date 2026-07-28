const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/vr-vlog" : "",
  assetPrefix: isGitHubPages ? "/vr-vlog/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
