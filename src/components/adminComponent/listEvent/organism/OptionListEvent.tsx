import React from 'react'
import LimitPage from '../atom/LimitPage.jsx'
import SearchInput from '../atom/SearchInput.jsx'
import AddEvent from '../atom/AddEvent'
const OptionListEvent = ()=>{
    return(
        <div
            className='flex flex-col gap-y-3 lg:flex-row justify-between mb-8'
        >
            <LimitPage/>
            <div className='flex gap-5 justify-end'>
                <SearchInput/>
                <AddEvent/>
            </div>
        </div>
    )
}
export default OptionListEvent