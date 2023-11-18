/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
      {
        source: "/home/news",
        destination: "/basinda-biz",
      },
    ];
  },
};

module.exports = nextConfig;
