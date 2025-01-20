import React from 'react'
import { DatePicker } from '@nextui-org/react'
import * as dateFormated from '@internationalized/date';

interface propsDateInput {
    value: Date | null | undefined;
    handleInput: (params:any) => void
}
const DateEventInput:React.FC<propsDateInput> = ({handleInput, value}) => {
    const dateValue = value ? dateFormated.parseDate(value.toISOString().split('T')[0]) : null;
    return (
        <DatePicker
            value={dateValue}
            color='warning'
            label="Tanggal"
            variant='bordered'
            onChange={(value)=>{handleInput(value)}}
        />
    )
}
export default DateEventInput