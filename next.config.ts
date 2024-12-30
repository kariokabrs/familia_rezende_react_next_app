import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // appDir: true, // Habilita o App Router
  },
  images: {
    domains: ['example.com'], // Adiciona domínios permitidos para imagens
  },
  //webpack(config) {
    // Customizações do Webpack
   // return config;
  //},
};

export default nextConfig;
