/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.okasie.be", "cdn.okasie.be"],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
