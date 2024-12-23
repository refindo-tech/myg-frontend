import icons from '@/components/icons/icon'
import { Tooltip } from '@nextui-org/react'
import Link from 'next/link'
const EditButtonEvent:React.FC<{href:string;}>= ({href})=>{
    const {EditIcon} = icons
    return(
        <Tooltip content="Edit event">
            <Link 
                prefetch
                href={href}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
            >
                <EditIcon />
            </Link>
        </Tooltip>
    )
}
export default EditButtonEvent