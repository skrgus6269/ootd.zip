/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['img.freepik.com', 'www.google.es', 'image.msscdn.net', ""]
  },
};

module.exports = nextConfig;
