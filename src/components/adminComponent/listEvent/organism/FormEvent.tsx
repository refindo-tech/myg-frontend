"use client";
import React from "react";
// import StatusEventInput from "../atom/StatusEventInput";
import DateEventInput from "../atom/DateEventInput";
import TimeEventInput from "../atom/TimeInputEvent";
import TextAreaInput from "../atom/TextAreaInput";
import icons from "@/components/icons/icon";
import SubmitAddEvent from "../atom/SubmitAddEvent";
import PosterEventInput from "../atom/PosterEventInput";
import InputField from "../atom/InputField";
import AddMateri from "../atom/AddMateri";
import ModalAddMateri from "./ModalAddMateri";
import { Card } from "@nextui-org/card";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect } from "react";
import {
  inputMaterial,
  inputEventData,
} from "@/types/myAcademy/admin/listEvent";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import { EventDetailResponse } from "@/types/myAcademy/admin/listEvent";
import { Time } from "@internationalized/date";
interface propsFormEvent {
  onAddEvent?: (params: FormData) => void;
  onEditEvent?: (trainingId: number, formData: FormData) => void;
}
const FormEvent: React.FC<propsFormEvent> = ({ onAddEvent, onEditEvent }) => {
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
  const [dateStart, setDateStart] = useState<Date | undefined>(undefined);
  const [disabledTime, setDisabledTime] = useState<boolean>(true);
  const [dataMaterial, setDataMaterial] = useState<inputMaterial>(initMaterial);
  const [timeValue, setTimeValue] = useState<any>(undefined);
  const [dataEvent, setDataEvent] = useState<inputEventData>(initDataEvent);
  const [isOn, setIsOn] = React.useState(false);
  const handleModal = () => {
    setIsOn((prev) => !prev);
  };
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
  const submitData = async () => {
    // e: React.FormEvent<HTMLFormElement>
    // e.preventDefault();
    const formData = new FormData();
    formData.append("title", dataMaterial.title);
    formData.append("description", dataMaterial.description);
    formData.append("address", dataEvent.address);
    formData.append("materi", dataEvent.materi);
    formData.append("benefit", dataEvent.benefit);
    formData.append("price", dataEvent.price ? String(dataEvent.price) : "");
    formData.append(
      "dateStart",
      dataEvent.dateStart ? dataEvent.dateStart.toISOString() : ""
    );
    formData.append("linkMaps", dataEvent.linkMaps || "");
    formData.append("embedMaps", dataEvent.embedMaps || "");
    formData.append(
      "posteracara",
      dataMaterial.brosur ? dataMaterial.brosur : ""
    );
    if (dataMaterial.youtubeVideo) {
      formData.append("youtubeVideo", dataMaterial.youtubeVideo || "");
    }
    if (dataMaterial.ebook) {
      formData.append("ebook", dataMaterial.ebook || "");
    }
    if (onAddEvent) {
      onAddEvent(formData);
    } else if (onEditEvent) {
      onEditEvent(parseInt(idTraining), formData);
    }
  };
  const handleDateInput = (value: any | undefined) => {
    if (value !== undefined) {
      const dateAbsolute = new Date(value.year, value.month - 1, value.day);
      setDateStart(dateAbsolute);
      setDataEvent((prev) => ({ ...prev, ["dateStart"]: dateAbsolute }));
    }
  };
  const handleTimeInput = (value: any | undefined, dateStart:Date|string) => {
    if (value !== undefined && dateStart !== undefined) {
      const timeValue = value ? new Time(value.hour, value.minute) : null;
      setTimeValue(timeValue);
      const currentDate = new Date(dateStart);
      const updatedDateStart = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        value.hour, // Update jam
        value.minute, // Update menit
        value.second || 0, // Update detik jika ada
        value.millisecond || 0 // Update millisecond jika ada
      );
      setDateStart(updatedDateStart)
      console.log('Input Value:', value);
      console.log('Date Start:', currentDate);
      console.log('Time Value:', timeValue);
      console.log('Updated Date Start:', updatedDateStart);
      
    }
  };
  const MAX_FILE_SIZE = 25 * 1024 * 1024;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        // setError("File size too large. Max file size is 25MB");
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
          const eventDetails = data.results;
        // Ensure dateStart is a Date object
        const dateStart = typeof eventDetails.dateStart === 'string'
          ? new Date(eventDetails.dateStart)
          : eventDetails.dateStart;
          setDataEvent((prevDataEvent) =>
            Object.assign({}, prevDataEvent, {
              ...eventDetails,
              dateStart: dateStart
                ? new Date(dateStart)
                : prevDataEvent.dateStart,
              dateFinish: undefined,
            })
          );
          if(dateStart){
            const hour = dateStart.getHours()
            const minute = dateStart.getMinutes()
            const timeValue = dateStart ? new Time(hour, minute) : null;
            setTimeValue(timeValue)
          }
          if (data.results.materials) {
            setDataMaterial(data.results.materials[0]);
          }
          setDisabledTime(false);
        }
      }
    };
    if (idTraining) {
      fetchAPI();
    }
  }, [idTraining]);
  useEffect(() => {
    if (dateStart !== undefined) {
      setDisabledTime(false);
      setDataEvent((prev)=>({...prev, ["dateStart"]:new Date(dateStart)}))
      console.log("tess",dateStart);
    }
  }, [dateStart]);
  return (
    <article className="flex justify-center min-h-screen w-full">
      <Card
        shadow="lg"
        className="w-full p-8 bg-white mt-9 flex flex-col items-end gap-5 mb-5"
      >
        <AddMateri handleModal={handleModal} />
        <ModalAddMateri
          stateData={dataEvent}
          handleInputChange={handleInputChange}
          isOn={isOn}
          handleModal={handleModal}
        />
        <form
          className="flex flex-col gap-5 lg:gap-10 max-h-[100%] w-full"
          onSubmit={submitData}
        >
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
          <TextAreaInput
            label="Materi"
            id="materi"
            name="materi"
            placeholder="Masukkan materi"
            value={dataEvent.materi}
            onChange={handleInputChange}
          />
          <TextAreaInput
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
            <DateEventInput
              value={dataEvent.dateStart}
              handleInput={handleDateInput}
            />
            <TimeEventInput
              dateStart={dataEvent.dateStart}
              value={timeValue}
              isDisabled={disabledTime}
              handleInput={handleTimeInput}
            />
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
            isRequired={false}
            value={dataEvent.embedMaps}
            onChange={handleInputChange}
          />
          <div className="flex justify-end">
            <div className="w-[300px]">
              <SubmitAddEvent type="submit" />
            </div>
          </div>
        </form>
      </Card>
    </article>
  );
};
export default FormEvent;
// const printAllData = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const result = { ...dataEvent, ["materials"]: [dataMaterial] };
//   console.log(result);
// };