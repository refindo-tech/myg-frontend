'use client'
import React from 'react'
import { useState } from 'react'
import { TimeInput } from '@nextui-org/react'
import * as datePackage from "@internationalized/date"
interface propsTimeInput {
    value: Date | null;
    isDisabled:boolean;
    handleInput: (params:any) => void
}
const TimeEventInput:React.FC<propsTimeInput> = ({
    value,
    isDisabled,
    handleInput
}) => {
    const timeValue = value ? datePackage.parseTime(value.toISOString().substring(11, 19)) : null
    return (
        <TimeInput
            color='warning'
            label="Waktu"
            variant='bordered'
            value={timeValue}
            isDisabled={isDisabled}
            onChange={(value)=>{handleInput(value)}}
        />
    )
}
export default TimeEventInput