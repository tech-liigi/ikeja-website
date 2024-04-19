/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: proccess.env.NEXT_PUBLIC_SANITY_DATASET,
    SANITY_SECRET_TOKEN: process.env.SANITY_SECRET_TOKEN,
  },
};

export default nextConfig;
