/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    deviceSizes: [640, 1024, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
