import React from 'react'
import {Button} from '@nextui-org/react'

interface propsSubmitAddEvent {
    onClick: (params:any) => void;
}
const SubmitAddEvent:React.FC<propsSubmitAddEvent> = ({onClick}) =>{
    return(
        <Button
            size='lg'
            className='bg-yellow-500 text-base text-abugelap w-full font-semibold'
            onPress={onClick}
        >
            Submit
        </Button>
    )
}
export default SubmitAddEvent