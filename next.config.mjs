/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes the whole site to the `out` folder
  output: "export",
  // `/about` -> `/about/index.html`, so plain static hosts (cPanel, S3, Netlify) serve every page
  trailingSlash: true,
  // No image server in a static export — images are served straight from /public
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
