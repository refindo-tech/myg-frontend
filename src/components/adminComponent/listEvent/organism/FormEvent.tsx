"use client";
import React from "react";
// import StatusEventInput from "../atom/StatusEventInput";
import DateEventInput from "../atom/DateEventInput";
import TimeEventInput from "../atom/TimeInputEvent";
import icons from "@/components/icons/icon";
import SubmitAddEvent from "../atom/SubmitAddEvent";
import PosterEventInput from "../atom/PosterEventInput";
import InputField from "../atom/InputField";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect } from "react";
import {
  inputMaterial,
  inputEventData,
} from "@/types/myAcademy/admin/listEvent";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import { EventDetailResponse } from "@/types/myAcademy/admin/listEvent";
const FormEvent = () => {
  const initMaterial: inputMaterial = {
    title: "",
    description: "",
    type: "OFFLINE",
    banner: undefined,
    brosur: undefined,
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
    address: "",
    price: undefined,
    embedMaps: undefined,
    linkMaps: undefined,
    materi: "",
    benefit: "",
    materials: [initMaterial],
  };
  const path = usePathname();
  const idTraining = path.split("/")[3];
  const [error, setError] = useState<string | undefined>(undefined)
  const [dateStart, setDateStart] = useState<Date | undefined>(undefined);
  const [disabledTime, setDisabledTime] = useState<boolean>(true);
  const [dataMaterial, setDataMaterial] = useState<inputMaterial>(initMaterial);
  const [dataEvent, setDataEvent] = useState<inputEventData>(initDataEvent);
  // const [status, setStatus] = useState<"Active" | "Passed" | undefined>(
  //   undefined
  // );
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
  // const handleSelectInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = e.target;
  //   if (value === "Active" || value === "Passed") {
  //     setStatus(value);
  //   }
  // };
  const handleDateInput = (value: any | undefined) => {
    if (value !== undefined) {
      const dateAbsolute = new Date( value.year, value.month-1, value.day);
      setDateStart(dateAbsolute);
      setDataEvent((prev)=>({...prev,["dateStart"]:dateAbsolute}))
    }
  };
  const handleTimeInput = (value: any | undefined) => {
    // console.log(value.hour,value.minute)
    if (value !== undefined && dateStart !== undefined) {
      const dateAbsolute = new Date(dateStart);
      const updateHours = dateAbsolute.setHours(value.hour);
      const updateMinute = dateAbsolute.setMinutes(value.minute);
      if(updateHours && updateMinute){
        setDateStart(dateAbsolute)
        setDataEvent((prev)=>({...prev,["dateStart"]:dateAbsolute}))
      }
    }
  };
  const MAX_FILE_SIZE = 25 * 1024 * 1024;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (file.size > MAX_FILE_SIZE) {
          setError("File size too large. Max file size is 25MB");
          return;
        }
          setDataMaterial((prev) => ({
            ...prev,
            brosur: file,
          }));
          // setPreviewUrl(URL.createObjectURL(file));
      }
    };
  useLayoutEffect(() => {
    const fetchAPI = async () => {
      const response = await ListEventServices.detailEvent(
        parseInt(idTraining)
      );
      if (response) {
        const data: EventDetailResponse = response.data;
        if (data.meta.success) {
          const eventDetails = data.results
          setDataEvent((prevDataEvent) =>
            Object.assign({}, prevDataEvent, {
              ...eventDetails,
              dateStart: eventDetails.dateStart
              ? new Date(eventDetails.dateStart)
                : prevDataEvent.dateStart,
                dateFinish: undefined
              })
            );
            if(data.results.materials){
              setDataMaterial(data.results.materials[0])
            }
            setDisabledTime(false)
        }
      }
    };
    fetchAPI();
  }, [idTraining]);
  useEffect(() => {
    if (dateStart !== undefined) {
      setDisabledTime(false)
      console.log(dateStart);
    }
  }, [dateStart]);
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
        label="Deskripsi"
        id="description"
        name="description"
        placeholder="Masukkan text"
        value={dataMaterial.description}
        onChange={handleInputChange}
      />
      <PosterEventInput
        id={"posteracara"}
        label={"Poster Acara"} 
        hasPoster={dataMaterial.brosur}
        onChange={handleFileChange}
      />
      <InputField
        label="Alamat"
        id="address"
        name="address"
        placeholder="Masukkan alamat"
        value={dataEvent.address}
        onChange={handleInputChange}
      />
      <InputField
        label="Materi"
        id="materi"
        name="materi"
        placeholder="Masukkan materi"
        value={dataEvent.materi}
        onChange={handleInputChange}
      />
      <InputField
        label="Benefit"
        id="benefit"
        name="benefit"
        placeholder="Masukkan benefit"
        value={dataEvent.benefit}
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
        {/* <StatusEventInput handleInput={handleSelectInput}/> */}
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <DateEventInput value={dataEvent.dateStart} handleInput={handleDateInput} />
        <TimeEventInput value={dataEvent.dateStart} isDisabled={disabledTime} handleInput={handleTimeInput}/>
      </div>
      <InputField
        label="Link Maps"
        id="linkMaps"
        name="linkMaps"
        placeholder="Masukkan text"
        value={dataEvent.linkMaps}
        onChange={handleInputChange}
      />
      <InputField
        label="Sematkan Maps"
        id="embedMaps"
        name="embedMaps"
        placeholder="Masukkan text"
        value={dataEvent.embedMaps}
        onChange={handleInputChange}
      />
      <div className="flex justify-end">
        <div className="w-[300px]">
          <SubmitAddEvent onClick={printAllData} />
        </div>
      </div>
    </div>
  );
};
export default FormEvent;
