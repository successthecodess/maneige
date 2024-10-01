/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maneige-s3-images.s3.amazonaws.com",
        port: "",
        pathname: "/**",  // This allows all image paths under this hostname
      },
    ],
  },
};

export default nextConfig;
