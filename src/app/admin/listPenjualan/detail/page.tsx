"using client";
import React from "react";
import { Card, CardBody, Divider, Input } from "@nextui-org/react";
import Image from "next/image";

interface Product {
  name: string;
  quantity: number;
  totalPrice: string;
  imageUrl: string;
}

interface TransactionDetails {
  kodeTransaksi: string;
  nama: string;
  nomorTelepon: string;
  virtualAccount: string;
  products: Product[];
  totalProduk: number;
  subtotal: string;
  ongkosKirim: string;
  totalPembayaran: string;
  metodePembayaran: string;
}

const transactionDetails: TransactionDetails = {
  kodeTransaksi: "P0001",
  nama: "John doe",
  nomorTelepon: "082373647728",
  virtualAccount: "122 082373647728",
  products: [
    {
      name: "Luxury Body Brightening Lotion (Almond)",
      quantity: 33,
      totalPrice: "Rp.100.000,00",
      imageUrl: "/api/placeholder/100/100"
    },
    {
      name: "Milky Infused",
      quantity: 33,
      totalPrice: "Rp.100.000,00",
      imageUrl: "/api/placeholder/100/100"
    },
    {
      name: "Ultimate Rejuve Serum",
      quantity: 33,
      totalPrice: "Rp.100.000,00",
      imageUrl: "/api/placeholder/100/100"
    }
  ],
  totalProduk: 99,
  subtotal: "Rp.9.900.000,00",
  ongkosKirim: "Rp.12.000,00",
  totalPembayaran: "Rp.9.912.000,00",
  metodePembayaran: "Bank BCA (debet otomatis)"
};

export default function TransactionDetails() {
  return (
    <div className="w-full h-full px-6 py-6">
        <div className="font-openSans text-4xl text-abugelap mb-6">
          Detail Penjualan Produk
        </div>

        <div className="flex flex-row gap-5">
            {/* card informasi pembeli */}
            <div className="w-2/3">
                <Card className="bg-white rounded-2xl border p-6 gap-3">
                    <div className="text-xl font-bold mb-2">Informasi Pembeli</div>
                    <Input
                        isDisabled
                        type="text"
                        label="Kode Transaksi"
                        value={transactionDetails.kodeTransaksi}
                        className="w-full"
                    />
                    <div className="flex flex-row gap-3 w-full">
                        <Input
                            isDisabled
                            type="text"
                            label="Nama"
                            value={transactionDetails.nama}
                            className="w-1/2"
                        />
                        <Input
                            isDisabled
                            type="text"
                            label="Nomor Telepon"
                            value={transactionDetails.nomorTelepon}
                            className="w-1/2"
                        />
                    </div>

                    <CardBody>
                    {transactionDetails.products.map((product, index) => (
                        <div key={index} className="flex mb-4 bg-pink3 rounded-lg p-3">
                            <div className="w-24 h-24 mr-4">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={100}
                                height={100}
                                objectFit="cover"
                                className="bg-blue-200"
                            />
                            </div>
                            <div className="flex-grow">
                            <p className="font-semibold">{product.name}</p>
                            <p>Qty: {product.quantity}</p>
                            </div>
                            <div className="text-right">
                            <p className="font-semibold">Total harga</p>
                            <p>{product.totalPrice}</p>
                            </div>
                        </div>
                        ))}
                    </CardBody>

                    {/* metode pembayaran */}
                    <div className="text-xl font-bold mb-2">Metode Pembayaran</div>
                    <Input
                        isDisabled
                        type="text"
                        label="Metode Pembayaran"
                        value={transactionDetails.metodePembayaran}
                        className="w-full"
                    />
                </Card>
            </div>

            {/* card pembayaran */}
            <div className="w-1/3">
                <Card className="bg-white rounded-2xl border p-6 gap-5">
                    <div className="text-xl font-bold mb-2">No. Virtual account</div>
                    <div>
                        <p className="text-xl font-bold mb-2 text-pink4">{transactionDetails.virtualAccount}</p>
                    </div>
                    <div className="text-xl font-bold mb-2">Ringkasan belanja</div>
                    <div className="flex justify-between">
                        <div>
                            <p>Total produk</p>
                            <p>Subtotal</p>
                            <p>Ongkos kirim</p>
                            <p className="font-bold">Total pembayaran</p>
                        </div>
                        <div className="text-right">
                            <p>{transactionDetails.totalProduk}</p>
                            <p>{transactionDetails.subtotal}</p>
                            <p>{transactionDetails.ongkosKirim}</p>
                            <p className="font-bold">{transactionDetails.totalPembayaran}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
  );
}