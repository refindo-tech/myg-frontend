import React from 'react'
import { Button } from '@nextui-org/react'
import icons from '@/components/icons/icon'
const AddMateri:React.FC<{handleModal:()=>void}> = ({handleModal}) => {
    const { PlusCircleIcon } = icons
    return (
        <Button
            aria-label='add event'
            size='lg'
            className='bg-kuning2 text-abugelap flex flex-row gap-3'
            onPress={handleModal}
        >
            <PlusCircleIcon/>
            <p className='font-sans font-semibold text-base'>Tambah Materi</p>
        </Button>
    )
}
export default AddMateri