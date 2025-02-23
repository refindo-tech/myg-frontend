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
        domains:["localhost"]
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
    //     // Menambahkan loader tambahan untuk memproses file CSS
    // webpack(config) {
    //     config.module.rules.push(
    //         // {
    //         //     test: /\.css$/,
    //         //     use: [
    //         //         'style-loader',
    //         //         {
    //         //             loader: 'css-loader',
    //         //             options: {
    //         //                 importLoaders: 1,
    //         //             },
    //         //         },
    //         //         // 'postcss-loader', // Memproses file CSS dengan Tailwind
    //         //     ],
    //         // },
    //         {
    //             test: /\.(eot|svg|ttf|css2|woff|woff2?)$/,
    //             use: [
    //                 'style-loader',
    //                 'file-loader',
    //                 'css-loader'
    //             ],
    //         },
    //     );
    //     return config;
    // }
};
export default withPlugins([{transpilePackages: ['my-awesome-package']}, withPWA(nextConfig)])
// export default withPWA(nextConfig);
