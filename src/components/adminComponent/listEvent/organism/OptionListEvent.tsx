import React from 'react'
import LimitPage from '../atom/LimitPage'
import SearchInput from '../atom/SearchInput'
import AddEvent from '../atom/AddEvent'
interface propsOptionListEvent {
    totalData:number;
    handleLimit:(e:number)=>void;
    onSearch:(params: string | undefined)=>void
}
const OptionListEvent:React.FC<propsOptionListEvent> = ({totalData,handleLimit, onSearch})=>{
    return(
        <div
            className='flex flex-col gap-y-3 lg:flex-row justify-between mb-8'
        >
            <LimitPage totalData={totalData} setLimit={handleLimit}/>
            <div className='flex gap-5 justify-end'>
                <SearchInput onSearch={onSearch}/>
                <AddEvent/>
            </div>
        </div>
    )
}
export default OptionListEvent