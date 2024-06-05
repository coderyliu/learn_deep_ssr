/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // 也会被注入到环境变量中，并且优先级最高
    NEXT_PUBLIC_API_URL: 'hahhah'
  },
  reactStrictMode: false, // 是否开启react严格模式
  basePath: '/music', // 设置后需要通过/music访问 而不能默认通过/了
  swcMinify: true // 编译通过turbo模式 不再使用babel+terser打包压缩了 而是使用speedWebCompiler技术(rust编写很快)
};

export default nextConfig;
