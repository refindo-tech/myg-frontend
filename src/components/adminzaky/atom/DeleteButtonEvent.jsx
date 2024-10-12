import icons from '@/components/icons/icon.tsx'
import { Tooltip } from '@nextui-org/react'
const DeleteButtonEvent = () => {
    const { DeleteIcon } = icons
    return (
        <Tooltip color="danger" content="Delete user">
            <span 
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={()=>{
                    alert('click')
                }}
            >
                <DeleteIcon />
            </span>
        </Tooltip>
    )
}
export default DeleteButtonEvent