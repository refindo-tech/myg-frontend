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
            <div className="w-full bg-white px-4 py-3 text-left text-gray-800 break-words max-w-full rounded-3xl justify-center items-center border-dashed border-2 border-mya-500 mt-4">
                {/* <div className="mx-auto text-xl font-semibold"><strong>Syarat</strong></div> */}
                <ul className="list-disc px-2 pl-6">
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#belanja">Belanja Produk Minimal 10 Juta</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#sosmed">Aktif Sosial Media</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#menggunakan">Sudah Menggunakan Produk MYA</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#menaati">Menaati Peraturan MYA</a>
                    </li>
                    <li>
                        <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#wajibjualan">Wajib Jualan</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DistributorReq;