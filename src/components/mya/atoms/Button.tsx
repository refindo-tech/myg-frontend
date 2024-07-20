import { Button } from '@nextui-org/react';
import React from 'react';

interface CustomButtonProps {
    className?: string;
    children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className, ...props }) => {
    return (
        <Button className={`bg-pink-500 text-white ${className}`} {...props}>
            {children}
        </Button>
    );
};

export default CustomButton;
