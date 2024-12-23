"use client";
import React from "react";
import { Card } from "@nextui-org/card";
import FormEditEvent from "@/components/adminComponent/listEvent/organism/FormEditEvent";
import AddMateri from "@/components/adminComponent/listEvent/atom/AddMateri";
import ModalAddMateri from "@/components/adminComponent/listEvent/organism/ModalAddMateri";
const EditEvent = () => {
  const [isOn, setIsOn] = React.useState(false);
  const handleModal = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div className="min-h-screen w-full p-6">
      <h5 className="font-sans text-base text-gray-700">1 September 2024</h5>
      <h1 className="font-sans text-2xl text-gray-700">Edit Acara</h1>
      <article className="flex justify-center min-h-screen w-full">
        <Card shadow="lg" className="w-full p-8 bg-white mt-9">
          <div className="flex justify-end mb-5">
            <AddMateri handleModal={handleModal} />
          </div>
          <FormEditEvent />
        </Card>
      </article>
      <ModalAddMateri isOn={isOn} handleModal={handleModal} />
    </div>
  );
};
export default EditEvent;
