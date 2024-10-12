import NameEventInput from '../atom/NameEventInput.jsx'
import CaptionThumnailInput from '../atom/CaptionThumbnailInput.jsx'
import AlamatEventInput from '../atom/AlamatEventInput.jsx'
import HargaEventInput from '../atom/HargaEventInput.jsx'
import StatusEventInput from '../atom/StatusEventInput.jsx'
import DateEventInput from '../atom/DateEventInput.jsx'
import TimeEventInput from '../atom/TimeInputEvent.jsx'
import JudulEventInput from '../atom/JudulEventInput.jsx'
import icons from '@/components/icons/icon.tsx'
import DeskripsiEventInput from '../atom/DeskripsiEventInput.jsx'
import SubmitAddEvent from '../atom/SubmitAddEvent.jsx'
import PosterEventInput from '../atom/PosterEventInput.jsx'
import AddMateri from '../atom/AddMateri.jsx'
const FormEditEvent = ()=>{
    const {SkrupIcon} = icons
    return(
        <div className='flex flex-col gap-10'>
            <div className='flex justify-end'>
                <AddMateri/>
            </div>
            <NameEventInput/>
            <CaptionThumnailInput/>
            <PosterEventInput/>
            <AlamatEventInput/>
            <div className='flex flex-row gap-5'>
                <HargaEventInput/>
                <StatusEventInput/>
            </div>
            <div className='flex flex-row gap-5'>
                <DateEventInput/>
                <TimeEventInput/>
            </div>
            <div className='w-full border-t-1 border-gray-300 '></div>
            <h3 className='font-semibold text-lg'>Deskripsi</h3>
            <JudulEventInput/>
            <DeskripsiEventInput/>
            <div className='w-full flex flex-row items-center gap-2'>
                <div className='w-full border-t-1 border-gray-300'></div>
                <SkrupIcon/>
            </div>
            <div className='flex justify-end'>
                <SubmitAddEvent/>
            </div>
        </div>
    )
}
export default FormEditEvent