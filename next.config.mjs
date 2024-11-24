import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // '@public' alias'ını 'public' dizinine yönlendirmek için
    config.resolve.alias['@public'] = path.resolve('public');
    return config;
  }
};

export default nextConfig;
