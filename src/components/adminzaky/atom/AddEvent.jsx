import { Button } from '@nextui-org/react'
import icons from '@/components/icons/icon.tsx'
const AddEvent = () => {
    const { PlusCircleIcon } = icons
    return (
        <Button
            aria-label='add event'
            size='lg'
            className='bg-yellow-500 text-abugelap flex flex-row gap-3'
        >
            <PlusCircleIcon/>
            <p className='font-sans font-semibold text-base'>Tambah Acara</p>
        </Button>
    )
}
export default AddEvent