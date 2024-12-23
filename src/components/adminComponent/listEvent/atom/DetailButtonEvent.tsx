import icons from '@/components/icons/icon'
import Link from 'next/link'
import { Tooltip } from '@nextui-org/react'

const DetailButtonEvent:React.FC<{href:string}> = ({href})=>{
    const {EyeFilledIcon} = icons
    return(
        <Tooltip content="Detail event">
            <Link
                prefetch
                href={href}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
            >
                <EyeFilledIcon />
            </Link>
        </Tooltip>
    )
}
export default DetailButtonEvent