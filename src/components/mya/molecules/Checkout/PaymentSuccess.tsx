import React from "react";

const PaymentSuccess: React.FC = () => {
    return (
        <div className="flex flex-col justify-center p-5 text-center bg-red-50 shadow-md max-w-[447px] rounded-[32px]">
            <h1 className="text-2xl font-bold leading-9 text-zinc-800">
                Pembayaran sukses!
            </h1>
            <p className="mt-3 text-lg leading-8 text-default-500">
                Selamat, pembayaran Anda telah berhasil. Produk Anda akan segera dikirim. Bukti transaksi telah kami kirimkan melalui WhatsApp.
            </p>
            <img
                src="/assets/images/icons/bag.svg"
                alt="Success icon"
                className="self-center mt-6 max-w-full aspect-[0.93] w-[167px]"
            />
        </div>
    );
};

export default PaymentSuccess;