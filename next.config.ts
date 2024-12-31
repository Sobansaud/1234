// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// import { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     typedRoutes: true,
//   },
// };

// export default nextConfig;









const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,  // Set typedRoutes to true if not already
  },
  typescript: {
    ignoreBuildErrors: false,  // Make sure TypeScript build errors are not ignored
  },
  eslint: {
    ignoreDuringBuilds: false,  // Ensure ESLint doesn't skip errors during builds
  },
};

module.exports = nextConfig;







// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     typedRoutes: true,
//   },
// };


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true, // Enables React strict mode
//   swcMinify: true, // Enables SWC compiler for minification
//   eslint: {
//     // Skip ESLint checks during builds (set to false if you want to enforce linting)
//     ignoreDuringBuilds: false,
//   },
//   images: {
//     // Specify allowed image domains if using external images
//     domains: ["your-domain.com"],
//   },
//   typescript: {
//     // Skip TypeScript checks during builds (set to false if you want to enforce type safety)
//     ignoreBuildErrors: false,
//   },
// };

// export default nextConfig;

