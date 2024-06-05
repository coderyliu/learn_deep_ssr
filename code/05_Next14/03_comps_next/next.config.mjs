/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.music.126.net"
      }
    ]
  }
};

export default nextConfig;
