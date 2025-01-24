"use client"
import React, { useState } from 'react'
import icons from '@/components/icons/icon'
import { Tooltip } from '@nextui-org/react'
import DeleteEventModal from '../organism/DeleteEventModal'
interface propsDeleteButton{
    trainingName: string;
    idTraining: number | null;
}
const DeleteButtonEvent:React.FC<propsDeleteButton> = ({trainingName, idTraining}) => {
    const { DeleteIcon } = icons
    const [isOpen, setIsOpen] = useState<boolean>(false)
//   const [selectedId, setSelectedId] = useState<number|undefined>(undefined)
  const handleModalDelete = (open:boolean) =>{
    setIsOpen(open)
  }
//   const handleSelectedId = (id: number) =>{
//     setSelectedId(id)
//   }
    return (
        <>
        <Tooltip color="danger" content="Delete event" >
            <span 
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={()=>{
                    // onClick
                    setIsOpen((prev)=>(!prev))
                }}
            >
                <DeleteIcon />
            </span>
        </Tooltip>
        <DeleteEventModal trainingName={trainingName} idTraining={idTraining} isOpen={isOpen} onOpenChange={handleModalDelete}/>
        </>
    )
}
export default DeleteButtonEvent