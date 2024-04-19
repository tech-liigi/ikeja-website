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
    NEXT_PUBLIC_SANITY_PROJECT_ID: "gmexoua8",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "skIUfdHzIMuA0HOxfRJuzPJnWhg9CUsvZ1Z81eZR0NeGr4R5wZiBLW3gXob8O1bTYK2MJumXm3wCMTtHd9Ei8BnLHmwy5Stx6mIhglmTjHPqLLDf5k4BfSwmdZIvFCcpJvvY6BPalMM1TTiVoTAwS8C8EtsQBTwCETTWms0PgRexNpvlbQnB",
  },
};

export default nextConfig;
