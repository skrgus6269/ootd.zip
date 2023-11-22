/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['img.freepik.com', 'www.google.es', 'image.msscdn.net', "", 'ootdzip.s3.ap-northeast-2.amazonaws.com']
  },
};

module.exports = nextConfig;
