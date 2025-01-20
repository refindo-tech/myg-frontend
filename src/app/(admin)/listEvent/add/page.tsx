import React from 'react'
import { Card } from '@nextui-org/card'
import FormEvent from '@/components/adminComponent/listEvent/organism/FormEvent'
const AddEvent = () => {
    return (
        <div
            className=' max-h-full overflow-y-auto p-6'
        >
            <h5 className='font-sans text-base text-gray-700'>{new Date().toLocaleDateString('id-ID',{day:"numeric", month:"long", year:"numeric"})}</h5>
            <h5 className='font-sans text-2xl text-gray-700'>Tambah Acara</h5>
            <div
                className='flex justify-center'
            >
                <Card
                    shadow='lg'
                    className='w-full p-8 bg-white mt-9'
                >
                    <FormEvent />
                </Card>
            </div>
        </div>
    )
}
export default AddEvent