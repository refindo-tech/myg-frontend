'use client'
import { Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
const LimitPage = () => {
    const [value, setValue] = useState('1')
    const handleValue = (value)=>{
        setValue(value)
    }
    return (
        <div 
            className='flex flex-row gap-3 items-center'
        >
            <p>Page</p>
            <Select
                className='w-[76px]'
                // defaultSelectedKeys={[1]}
                selectedKeys={[value]}
                variant='bordered'
                onChange={(e)=>handleValue(e.target.value)}
            >
                <SelectItem key={'1'} className='p-0 rounded-md text-center'>1</SelectItem>
                <SelectItem key={'5'} className='p-0 rounded-md text-center'>5</SelectItem>
                <SelectItem key={'10'} className='p-0 rounded-md text-center'>10</SelectItem>
                <SelectItem key={'15'} className='p-0 rounded-md text-center'>15</SelectItem>
            </Select>
            <p>of 10</p>
        </div>
    )
}
export default LimitPage