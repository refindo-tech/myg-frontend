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
                // Menambahkan header ke semua rute
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "upgrade-insecure-requests",
                    },
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
