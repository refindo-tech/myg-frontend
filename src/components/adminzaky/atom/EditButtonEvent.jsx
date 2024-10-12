import icons from '@/components/icons/icon.tsx'
import { Tooltip } from '@nextui-org/react'
const EditButtonEvent = ()=>{
    const {EditIcon} = icons
    return(
        <Tooltip content="Edit user">
            <span 
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={()=>{
                    alert('click')
                }}
            >
                <EditIcon />
            </span>
        </Tooltip>
    )
}
export default EditButtonEvent