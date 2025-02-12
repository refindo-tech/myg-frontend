"use client"
import React from 'react'
import { Card } from '@nextui-org/card'
import FormEvent from '@/components/adminComponent/listEvent/organism/FormEvent'
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import Swal from 'sweetalert2';
const AddEvent = () => {
    const handleAddEvent = async (formData:FormData) => {
        try {
            const { data } = await ListEventServices.createEvent(formData)
            if(data.meta.success){
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Event has been successfully added.',
                });
            }
        } catch (error:any) {
            console.error("Failed to add Admin:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: error.response?.data?.meta?.message || error.message || 'Unknown error occurred while adding event.',
            });
        }
    }
    return (
        <div
            className=' max-h-full overflow-y-auto p-6'
        >
            <h5 className='font-sans text-base text-gray-700'>{new Date().toLocaleDateString('id-ID',{day:"numeric", month:"long", year:"numeric"})}</h5>
            <h5 className='font-sans text-2xl text-gray-700'>Tambah Acara</h5>
            <FormEvent onAddEvent={handleAddEvent}/>
            {/* <div
                className='flex justify-center'
            >
                <Card
                    shadow='lg'
                    className='w-full p-8 bg-white mt-9'
                >
                </Card>
            </div> */}
        </div>
    )
}
export default AddEvent