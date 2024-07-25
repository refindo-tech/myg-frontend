import React from 'react';

const DistributorReq: React.FC = () => {
    return (
        <div className="flex flex-col max-w-full">
            <h2 className="mt-6 text-2xl font-bold leading-9 text-zinc-800 max-md:max-w-full text-center">
                Syarat menjadi Distributor
            </h2>
            <p className="self-start mt-2 text-lg leading-8 text-zinc-500 max-md:max-w-full text-center">
                Baca syarat berikut untuk melanjutkan pendaftaran menjadi distributor
            </p>
            <div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-full rounded justify-center items-center">
                {/* <div className="mx-auto text-xl font-semibold"><strong>Syarat</strong></div> */}
                <ul className="list-disc px-2 pl-6">
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#introduction">Introduction</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#getting-started">Getting Started with
                            Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#responsive-design">Responsive Design in
                            Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#theming-and-customization">Theming and
                            Customization</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#sass-maps-in-bootstrap">Sass Maps in
                            Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#best-practices">Best Practices for Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#code-samples">Code Samples for Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#conclusion">Conclusion</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#change-theme-color">Changing Theme Color in
                            Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#using-theme-color">Using Theme Color in
                            Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#number-of-colors">Number of Colors in
                            Bootstrap</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#customize-theme">Customizing a Bootstrap
                            Theme</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DistributorReq;