import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2hkikoio21fzhnco.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
