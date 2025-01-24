"use client";
import React from "react";
import { Card } from "@nextui-org/card";
import FormEvent from "@/components/adminComponent/listEvent/organism/FormEvent";
import AddMateri from "@/components/adminComponent/listEvent/atom/AddMateri";
import ModalAddMateri from "@/components/adminComponent/listEvent/organism/ModalAddMateri";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const EditEvent = () => {
  const router = useRouter()
  const [isOn, setIsOn] = React.useState(false);
  const handleEditEvent = async (trainingId:number, formData:FormData) => {
    try {
        const { data } = await ListEventServices.updateEvent(trainingId, formData)
        if(data.meta.success){
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Event has been successfully edited.',
            });
            router.push('/listEvent')
        }
    } catch (error:any) {
        console.error("Failed to add Admin:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: error.response?.data?.meta?.message || error.message || 'Unknown error occurred while aedit event.',
        });
    }
}
  const handleModal = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div className="min-h-screen w-full lg:p-6">
      <h5 className="font-sans text-base text-gray-700">{new Date().toLocaleDateString('id-ID',{day:"numeric", month:"long", year:"numeric"})}</h5>
      <h1 className="font-sans text-2xl text-gray-700">Edit Acara</h1>
      {/* <article className="flex justify-center min-h-screen w-full">
        <Card shadow="lg" className="w-full p-8 bg-white mt-9">
          <div className="flex justify-end mb-5">
            <AddMateri handleModal={handleModal} />
          </div>
        </Card>
      </article> */}
          <FormEvent onEditEvent={handleEditEvent}/>
    </div>
  );
};
export default EditEvent;
