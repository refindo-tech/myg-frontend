import EditButtonEvent from '../atom/EditButtonEvent.jsx'
import DeleteButtonEvent from '../atom/DeleteButtonEvent.jsx'
const ActionEvent = ()=>{
    return(
        <div
            className='flex flex-row gap-2'
        >
            <EditButtonEvent/>
            <DeleteButtonEvent/>
        </div>
    )
}
export default ActionEvent