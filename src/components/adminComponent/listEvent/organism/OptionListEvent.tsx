import React from 'react'
import LimitPage from '../atom/LimitPage'
import SearchInput from '../atom/SearchInput.jsx'
import AddEvent from '../atom/AddEvent'
interface propsOptionListEvent {
    handleLimit:(e:number)=>void
}
const OptionListEvent:React.FC<propsOptionListEvent> = ({handleLimit})=>{
    return(
        <div
            className='flex flex-col gap-y-3 lg:flex-row justify-between mb-8'
        >
            <LimitPage setLimit={handleLimit}/>
            <div className='flex gap-5 justify-end'>
                <SearchInput/>
                <AddEvent/>
            </div>
        </div>
    )
}
export default OptionListEvent