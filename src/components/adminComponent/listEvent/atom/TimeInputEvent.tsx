'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { TimeInput } from '@nextui-org/react'
// import * as datePackage from "@internationalized/date"
import {Time} from "@internationalized/date"
interface propsTimeInput {
    dateStart: Date |string
    value: any;
    isDisabled:boolean;
    handleInput: (params:any, paramsDate: Date | string) => void
}
const TimeEventInput:React.FC<propsTimeInput> = ({
    value,
    dateStart,
    isDisabled,
    handleInput
}) => {
    // const [hour, setHour] = useState<number|undefined>(undefined)
    // const [minute, setMinute] = useState<number|undefined>(undefined)
    // // const timeValue = value ? datePackage.parseTime(value.toISOString().substring(11, 19)) : null
    // useEffect(()=>{
    //     if(value){
    //         setMinute(val)
    //     }
    // },[value])
    // const timeValue = value ? new Time(value.hour, value.minute) : null
    // console.log(timeValue)
    return (
        <TimeInput
            color='warning'
            label="Waktu"
            variant='bordered'
            value={value}
            isDisabled={isDisabled}
            onChange={(value)=>{handleInput(value, dateStart)}}
        />
    )
}
export default TimeEventInput