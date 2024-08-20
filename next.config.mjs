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
            // {
            //     source: '/Myacademy',
            //     destination: '/Myacademy/',
            //     permanent: true,
            // }
        ];
    },
};

import nextPWA from 'next-pwa';

// const prod = process.env.NODE_ENV === 'production';
const withPWA = nextPWA({
    dest: 'public',
    // disable: prod ? false : true,
});

export default withPWA(nextConfig);
