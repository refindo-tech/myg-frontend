'use client'
import { Textarea } from '@nextui-org/react'
import React,{useState, useEffect} from 'react';
interface propsInputField {
    type?: string;
    color?: "warning" | "danger" | "default" | "primary" | "secondary" | undefined;
    label: string;
    id: string;
    name: string;
    value: any;
    isRequired?: boolean
    variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const TextAreaInput:React.FC<propsInputField> = ({
    type="text",
    color="warning",
    label,
    value,
    id,
    name,
    isRequired=true,
    variant="bordered",
    placeholder,
    onChange
}) => {
    const [errorMessage, setErrorMessage] = useState<string|undefined>(undefined)
    const [isInvalid, setIsInvalid] = useState<boolean>(false)
    const [isInteract, setIsInteract] = useState<boolean>(false)
    useEffect(()=>{
        if(isInteract && value === ""){
            setIsInvalid(true)
            setErrorMessage(`${label} must fill`)
        }
        // else if(value !== ""){
        //     setIsInvalid(false)
        //     setIsNull(false)
        // }
    },[value, isInteract, label])
    return (
        <Textarea
            id={id}
            name={name}
            value={value}
            type={type}
            color={color}
            label={label}
            variant={variant}
            isInvalid={isInvalid}
            errorMessage={errorMessage}
            isRequired={isRequired}
            placeholder={placeholder}
            onChange={(e)=>{
                onChange(e)
                setIsInteract(true)
            }}
        />
    )
}
export default TextAreaInput