import { Input } from '@nextui-org/react'
import React from 'react';
interface propsInputField {
    type?: string;
    color?: "warning" | "danger" | "default" | "primary" | "secondary" | undefined;
    label: string;
    id: string;
    name: string;
    value: any;
    variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
    placeholder: string;
    onChange: (params:any) => void
}
const InputField:React.FC<propsInputField> = ({
    type="text",
    color="warning",
    label,
    value,
    id,
    name,
    variant="bordered",
    placeholder,
    onChange
}) => {
    return (
        <Input
            id={id}
            name={name}
            value={value}
            type={type}
            color={color}
            label={label}
            variant={variant}
            placeholder={placeholder}
            onChange={(e)=>{
                onChange(e)
            }
            }
        />
    )
}
export default InputField