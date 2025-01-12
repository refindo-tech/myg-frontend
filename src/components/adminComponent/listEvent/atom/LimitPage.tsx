'use client'
import React from 'react'
import { useEffect } from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
interface propsLimitPage {
    setLimit:(e:number)=>void
}
const LimitPage:React.FC<propsLimitPage> = ({setLimit}) => {
    const [value, setValue] = useState<string>("1")
    const handleValue = (value:string)=>{
        setValue(value)
    }
    useEffect(()=>{
        setLimit(parseInt(value))
    },[value, setLimit])
    return (
        <div 
            className='flex flex-row gap-3 items-center'
        >
            <p>Page</p>
            <Select
                aria-label='select limit'
                className='w-[76px]'
                // defaultSelectedKeys={[1]}
                selectedKeys={[value]}
                variant='bordered'
                onChange={(e)=>handleValue(e.target.value)}
            >
                <SelectItem key={"1"} className='p-0 rounded-md text-center'>1</SelectItem>
                <SelectItem key={"5"} className='p-0 rounded-md text-center'>5</SelectItem>
                <SelectItem key={"10"} className='p-0 rounded-md text-center'>10</SelectItem>
                <SelectItem key={"15"} className='p-0 rounded-md text-center'>15</SelectItem>
            </Select>
            <p>of 10</p>
        </div>
    )
}
export default LimitPage