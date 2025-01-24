import React from 'react'
import {Button} from '@nextui-org/react'

interface propsSubmitAddEvent {
    type?: "button" | "submit" | "reset" | undefined;
    label?:string
    onClick?: (params:any) => void;
}
const SubmitAddEvent:React.FC<propsSubmitAddEvent> = ({type="button", onClick, label="Submit"}) =>{
    return(
        <Button
            type={type}
            size='lg'
            className='bg-yellow-500 text-base text-abugelap w-full font-semibold'
            onPress={type === "button"  ? onClick : undefined}
        >
            {label}
        </Button>
    )
}
export default SubmitAddEvent