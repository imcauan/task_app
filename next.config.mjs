import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333",
            }
        ]
    }
};

export default withNextIntl(nextConfig);
