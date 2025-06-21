/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';
import withPlugins from 'next-compose-plugins'

const prod = process.env.NEXT_NODE_ENV === 'production';

const withPWA = nextPWA({
    dest: 'public',
    disable: prod ? false : true,
});

const nextConfig = {
    images:{
        domains:[
            "localhost",
            "http://92.112.192.81",
            "myg.app",
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
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
                source: '/admin',
                destination: '/admin/listAdmin',
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
export default withPlugins([{transpilePackages: ['my-awesome-package']}, withPWA(nextConfig)])
// export default withPWA(nextConfig);
