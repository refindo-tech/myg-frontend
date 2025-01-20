import React from 'react';
import { Select, SelectItem } from '@nextui-org/react'
interface propsSelectInput{
    handleInput: (params:any) => void
}
const StatusEventInput:React.FC<propsSelectInput> = ({handleInput}) => {
    const data = [
        {key: "active", label: "Active"},
        {key: "passed", label: "Passed"},
    ];
    return (
        <Select
            color='warning'
            label="Status"
            variant='bordered'
            items={data}
            placeholder="Pilih status"
            onChange={(e)=>{handleInput(e)}}
        >
            {(data)=><SelectItem key={data.label}>{data.label}</SelectItem>}
        </Select>
    )
}
export default StatusEventInput