"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useLayoutEffect } from "react";
import AddMateri from "@/components/adminComponent/listEvent/atom/AddMateri";
import Link from "next/link";
import icons from "@/components/icons/icon";
import ModalAddMateri from "@/components/adminComponent/listEvent/organism/ModalAddMateri";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import {
  EventDetailResponse,
  ListEventData,
} from "@/types/myAcademy/admin/listEvent";

export default function DetailEvent() {
  const path = usePathname();
  const idTraining = path.split("/")[3];
  const [detailData, setDetailData] = useState<ListEventData | null>(null);
  const { EditEventIcon } = icons;
  const [isOn, setIsOn] = React.useState(false);
  const handleModal = () => {
    setIsOn((prev) => !prev);
  };
  useLayoutEffect(() => {
    const fetchAPI = async () => {
      const response = await ListEventServices.detailEvent(
        parseInt(idTraining)
      );
      if (response) {
        const data: EventDetailResponse = response.data;
        if (data.meta.success) {
          setDetailData(data.results || null);
        }
      }
    };
    fetchAPI();
  }, [idTraining]);
  useEffect(() => {
    if (detailData) {
      console.log(detailData);
    }
  });
  return (
    <div className="min-h-screen w-full p-6">
      <h5 className="font-sans text-base text-gray-700">1 September 2024</h5>
      <h1 className="font-sans text-2xl text-gray-700">Detail Acara</h1>
      {detailData && (
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
              <AddMateri handleModal={handleModal} />
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
                  {detailData.trainingName}
                </h2>
                <p className=" ">
                  {detailData.description}
                </p>
                <p className="text-yellow-700">27 Juli 2024</p>
                <p className="">{detailData.address}</p>
                <p className="font-semibold text-2xl lg:text-4xl">
                  {detailData.price}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:text-xl text-xs font-sans">
            <div className="flex flex-col gap-5">
              <h3 className="font-medium font-serif lg:text-4xl text-2xl">
                Deskripsi Acara
              </h3>
              <p className=" text-gray-400">
                {detailData.description}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">
                Cara Mendaftar
              </h3>
              <div className="pl-6">
                <ol className="list-decimal font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                  <li>
                    Klik tombol &apos;Daftar Sekarang&apos; di halaman acara.
                  </li>
                  <li>isi formulir pendaftaran dengan data lengkap Anda.</li>
                  <li>{`Pilih sesi '${detailData.trainingName}'.`} </li>
                  <li>
                    Lakukan pembayaran sesuai dengan instruksi yang diberikan.
                  </li>
                  <li>
                    Konfirmasi pendaftaran Anda melalui email yang akan
                    diberikan setelah pembayaran.
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">
                Pertanyaan dan Kontak
              </h3>
              <div>
                <p className="font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                  Pertanyaan dan Kontak:
                </p>
                <p className="font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                  Untuk pertanyaan lebih lanjut Anda dapat menghubugi kontak
                  kami di:
                </p>
                <div className="pl-6">
                  <ol className="list-disc font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                    <li>
                      Email:{" "}
                      <span className="font-sans text-xs lg:text-xl font-bold text-abumuda text-wrap">
                        info@beautyacademy.com
                      </span>
                    </li>
                    <li>
                      Telepon:{" "}
                      <span className="font-sans text-xs lg:text-xl font-bold text-abumuda text-wrap">
                        (081) 314-485-552
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ModalAddMateri isOn={isOn} handleModal={handleModal} />
    </div>
  );
}
