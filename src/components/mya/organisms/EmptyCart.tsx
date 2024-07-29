import React from 'react';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

const EmptyCart: React.FC = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center p-5 text-center bg-red-50 shadow-md max-w-[447px] rounded-[32px]">
              <img
                src="/assets/images/icons/bag.svg"
                alt="Success icon"
                className="self-center max-w-full aspect-[0.93] w-[167px]"
              />
              <h1 className="text-2xl font-bold leading-9 text-zinc-800">
                Keranjang Anda kosong
              </h1>
              <p className="mt-3 text-lg leading-8 text-default-500">
                Yuk, belanja sekarang dan temukan produk yang Anda sukai!
              </p>

              <Button className="mt-6 bg-rose-400 text-white font-semibold rounded-xl px-6 py-3" onClick={() => router.push('/mya')}>
                Belanja Sekarang
              </Button>


            </div>
    );
};

export default EmptyCart;