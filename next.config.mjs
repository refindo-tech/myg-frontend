import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/mya',
                destination: '/mya/home',
                permanent: true,
            },
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
            {
                source: '/myBeautica',
                destination: '/myBeautica/home',
                permanent: true,
            },
            {
                source: '/Myacademy',
                destination: '/MyacademyTes',
                permanent: true,
            }
        ];
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "upgrade-insecure-requests",
                    },
                    {
                        key: 'Referrer-Policy',
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    }
                ],
            },
        ];
    },
};

// const prod = process.env.NODE_ENV === 'production';
const withPWA = nextPWA({
    dest: 'public',
    // disable: prod ? false : true,
});

export default withPWA(nextConfig);
