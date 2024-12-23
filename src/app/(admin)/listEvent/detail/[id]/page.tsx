'use client'
import React from "react";
import Image from "next/image";
import AddMateri from "@/components/adminComponent/listEvent/atom/AddMateri";
import Link from "next/link";
import icons from "@/components/icons/icon";
import ModalAddMateri from "@/components/adminComponent/listEvent/organism/ModalAddMateri";
export default function DetailEvent() {
  const { EditEventIcon } = icons;
  const [isOn, setIsOn] = React.useState(false)
  const handleModal = () =>{
    setIsOn((prev)=>(!prev))
  }
  return (
    <div className="min-h-screen w-full p-6">
      <h5 className="font-sans text-base text-gray-700">1 September 2024</h5>
      <h1 className="font-sans text-2xl text-gray-700">Detail Acara</h1>
      <div className="w-full lg:w-fit lg:max-w-4xl h-fit rounded-lg p-5 lg:p-8 bg-white shadow-xl mt-8 mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="w-full flex justify-end flex-row gap-3">
            <Link
              href={"/listEvent/edit/1"}
              aria-label="add event"
              className="bg-kuning2 text-abugelap flex flex-row gap-3 items-center px-6 rounded-xl"
            >
              <EditEventIcon />
              <p className="font-sans font-semibold text-base">Edit Acara</p>
            </Link>
            <AddMateri handleModal={handleModal}/>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center">
            <div className="w-full lg:w-[460px] min-h-[500px] lg:h-[650px] rounded-xl relative">
              <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0">
                <Image
                  src={"/images/brosurmyacademi.png"}
                  alt="brosur"
                  fill
                  style={{ borderRadius: "12px" }}
                />
              </div>
            </div>
            <div className="lg:max-w-[468px] flex flex-col gap-5 font-sans text-lg lg:text-xl text-gray-700">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Workshop Kecantikan Alami
              </h2>
              <p className=" ">
                Pelajari teknik kecantikan alami menggunakan bahan-bahan organik
                dan metode tradisional.
              </p>
              <p className="text-yellow-700">27 Juli 2024</p>
              <p className="">
                RT.13/RW.6, Kb. Kosong, Kec. Kemayoran, Kota Jakarta Pusat,
                Daerah Khusus Ibukota Jakarta 10630
              </p>
              <p className="font-semibold text-2xl lg:text-4xl">
                Rp. 1.600.00,00
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 font-sans">
            <h3 className="font-medium font-serif lg:text-4xl text-2xl">
              Deskripsi Acara
            </h3>
            <p className="text-base text-gray-400">
              Workshop Kecantikanv Alami adalah sesi pelatihan yang dirancang
              untuk mengajarkan teknik-teknik kecantikan menggunakan bahan-bahan
              organik dan metode tradisional. Dalam workshop ini, peserta akan
              belajar cara membuat produk kecantikan alami, tips perawatan kulit
              dan rambut, serta manfaat kesehatan dari bahan-bahan alami yang
              sering kita temui sehari-hari.
            </p>
          </div>
        </div>
      </div>
      <ModalAddMateri isOn={isOn} handleModal={handleModal}/>
    </div>
  );
}
