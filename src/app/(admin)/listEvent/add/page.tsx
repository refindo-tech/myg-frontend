import React from 'react'
import { Card } from '@nextui-org/card'
import FormAddEvent from '@/components/adminComponent/listEvent/organism/FormAddEvent'
const AddEvent = () => {
    return (
        <div
            className=' max-h-full overflow-y-auto p-6'
        >
            <h5 className='font-sans text-base text-gray-700'>1 September 2024</h5>
            <h5 className='font-sans text-2xl text-gray-700'>Tambah Acara</h5>
            <div
                className='flex justify-center'
            >
                <Card
                    shadow='lg'
                    className='w-full p-8 bg-white mt-9'
                >
                    <FormAddEvent />
                </Card>
            </div>
        </div>
    )
}
export default AddEvent