/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    return config;
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
