import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // '@public' alias'ını 'public' dizinine yönlendirmek için
    config.resolve.alias['@public'] = path.resolve('public');
        if (!isServer) {
      config.resolve.fallback = {
        canvas: false, // canvas modülünü tarayıcı tarafında devre dışı bırak
      };
    }
    return config;
  }
};

export default nextConfig;
