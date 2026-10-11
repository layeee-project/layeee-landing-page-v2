/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* hosts allowed to load the dev server's scripts, for opening the site by network address */
  allowedDevOrigins: ["169.254.83.107"],
};

export default nextConfig;
