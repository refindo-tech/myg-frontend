import React from 'react';
import EditButtonEvent from '../atom/EditButtonEvent.jsx'
import DeleteButtonEvent from '../atom/DeleteButtonEvent.jsx'
type context = "default" | "edit" | "delete" | "add";
interface propsActionEvent{
    handleActionTable: (params: context) => void
}
const ActionEvent:React.FC <propsActionEvent> = ({handleActionTable})=>{
    
    return(
        <div
            className='flex flex-row gap-2'
        >
            <EditButtonEvent handleAction={handleActionTable}/>
            <DeleteButtonEvent/>
        </div>
    )
}
export default ActionEvent