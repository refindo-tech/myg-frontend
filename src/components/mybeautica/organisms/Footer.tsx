import React from "react";
import { Button, Image } from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";

const FooterComponent = () => {
  return (
    <footer className="bg-stone-800 flex flex-col text-white py-8 px-6 w-full xl:px-32">
      <div className="flex flex-col xl:flex-row xl:justify-between pb-3 border-b">
        <div className="flex">
          <Image
            className="w-[109.60px] h-[76px] mb-4 md:mb-0"
            src={images.myg_logo.src}
            alt="MYG Logo"
          />
        </div>
        <div className="hidden xl:flex">
          <Button className="bg-yellow-400 text-stone-800 font-semibold rounded-full px-4 py-2 mb-4">
            Unduh Aplikasi
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-3 gap-6 xl:flex-row xl:justify-between">
        <div>
          <h4 className="text-lg font-semibold">Alamat</h4>
          <p className="text-sm opacity-60 leading-tight">
            Beauty, cosmetic & personal care
            <br />
            Griya Baladika Asri, Jl. Perintis No.11 Rt. 001 Rw. 015, Taman
            Kopassus, Kelurahan Drangong, Kecamatan Taktakan, Kota Serang,
            Provinsi Banten., Serang 42162
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Layanan</h4>
          <ul className="text-sm opacity-60 leading-tight space-y-1">
            <li>MYG</li>
            <li>MYA</li>
            <li>My Academy</li>
            <li>My Beautica</li>
            <li>Konsultasi</li>
            <li>Sertifikasi</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between xl:gap-20">
            <div className="flex text-lg font-semibold">Contact us</div>
            <div className="flex flex-row gap-3 ">
              <Button isIconOnly variant="light" className="border">
                <icons.InstagramIcon />
              </Button>

              <Button isIconOnly variant="light" className="border">
                <icons.YoutubeIcon />
              </Button>
            </div>
          </div>
          <p className="text-sm opacity-60 leading-tight space-y-1">
            +62 813 14485552
            <br />
            help@gmail.com
          </p>
        </div>
        <div className="flex xl:hidden">
          <Button className="bg-yellow-400 text-stone-800 font-semibold rounded-full px-4 py-2 mb-4">
            Unduh Aplikasi
          </Button>
        </div>
      </div>
      <div className="text-xs opacity-40">&copy; 2023 — Copyright</div>
    </footer>
  );
};

export default FooterComponent;
