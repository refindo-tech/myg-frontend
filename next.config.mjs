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
};

import nextPWA from 'next-pwa';

const withPWA = nextPWA({
    dest: 'public'
});

export default withPWA(nextConfig);
