"use client";
import React from "react";
import StatusEventInput from "../atom/StatusEventInput.jsx";
import DateEventInput from "../atom/DateEventInput.jsx";
import TimeEventInput from "../atom/TimeInputEvent.jsx";
import icons from "@/components/icons/icon";
import SubmitAddEvent from "../atom/SubmitAddEvent";
import PosterEventInput from "../atom/PosterEventInput";
import InputField from "../atom/InputField";
import { useState } from "react";
import {
  inputMaterial,
  inputEventData,
} from "@/types/myAcademy/admin/listEvent";
// import NameEventInput from "../atom/NameEventInput.jsx";
// import CaptionThumnailInput from "../atom/CaptionThumbnailInput.jsx";
// import AlamatEventInput from "../atom/AlamatEventInput.jsx";
// import HargaEventInput from "../atom/HargaEventInput.jsx";
// import JudulEventInput from "../atom/JudulEventInput.jsx";
// import DeskripsiEventInput from "../atom/DeskripsiEventInput.jsx";

const FormAddEvent = () => {
  const initMaterial: inputMaterial = {
    title: "",
    description: "",
    type: "OFFLINE",
    banner: "",
    brosur: "",
    formRegistration: undefined,
    ebook: undefined,
    youtubeVideo: undefined,
    zoomRecord: undefined,
  };
  const initDataEvent: inputEventData = {
    trainingName: "",
    description: "",
    dateStart: new Date(),
    dateFinish: undefined,
    adress: "",
    price: undefined,
    embedMaps: undefined,
    linkMaps: undefined,
    materi: "",
    benefit: "",
    thumbnail: "",
    materials: [initMaterial],
  };
  const [dataMaterial, setDataMaterial] = useState<inputMaterial>(initMaterial);
  const [dataEvent, setDataEvent] = useState<inputEventData>(initDataEvent);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (
      name === "title" ||
      name === "description" ||
      name === "type" ||
      name === "membershipLevel" ||
      name === "banner" ||
      name === "brosur" ||
      name === "ebook" ||
      name === "youtubeVideo" ||
      name === "zoomRecord"
    ) {
      setDataMaterial((prevMaterial) => ({
        ...prevMaterial,
        [name]: value,
      }));
    } else {
      setDataEvent((prevDataEvent) => ({ ...prevDataEvent, [name]: value }));
    }
  };
  const printAllData = () => {
    const result = { ...dataEvent, ["materials"]: [dataMaterial] };
    console.log(result);
  };
  const { SkrupIcon } = icons;
  return (
    <div className="flex flex-col gap-5 lg:gap-10 max-h-[100%]">
      <InputField
        label="Judul Acara"
        id="title"
        name="title"
        placeholder="Masukkan judul acara"
        value={dataMaterial.title}
        onChange={handleInputChange}
      />
      <InputField
        label="Caption Thumbnail"
        id="thumbnail"
        name="thumbnail"
        placeholder="Masukkan text"
        value={dataEvent.thumbnail}
        onChange={handleInputChange}
      />
      <PosterEventInput label={"Poster Acara"} id={"posteracara"} />
      <InputField
        label="Alamat"
        id="adress"
        name="adress"
        placeholder="Masukkan alamat"
        value={dataEvent.adress}
        onChange={handleInputChange}
      />
      <InputField
        label="Link Maps"
        id="linkMaps"
        name="linkMaps"
        placeholder="Masukkan text"
        value={dataEvent.linkMaps}
        onChange={handleInputChange}
      />
      <InputField
        label="tambahkan Maps"
        id="embedMaps"
        name="embedMaps"
        placeholder="Masukkan text"
        value={dataEvent.embedMaps}
        onChange={handleInputChange}
      />
      <div className="flex flex-col lg:flex-row gap-5">
        <InputField
          type="number"
          label="Harga"
          id="price"
          name="price"
          placeholder="Masukkan harga"
          value={dataEvent.price}
          onChange={handleInputChange}
        />
        <StatusEventInput />
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <DateEventInput />
        <TimeEventInput />
      </div>
      <div className="w-full border-t-1 border-gray-300 "></div>
      <h3 className="font-semibold text-lg">Deskripsi</h3>
      {/* <JudulEventInput /> */}
      <InputField
        label="Deskripsi"
        id="description"
        name="description"
        placeholder="Masukkan text"
        value={dataMaterial.description}
        onChange={handleInputChange}
      />
      <div className="w-full flex flex-row items-center gap-2">
        <div className="w-full border-t-1 border-gray-300"></div>
        <SkrupIcon />
      </div>
      <div className="flex justify-end">
        <div className="w-[300px]">
          <SubmitAddEvent onClick={printAllData} />
        </div>
      </div>
    </div>
  );
};
export default FormAddEvent;
