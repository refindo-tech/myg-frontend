import React from 'react';
//import svg from assets
import stripes from '@assets/decorations/stripes.svg';
import dots from '@assets/decorations/dots.svg';

//className for styling
interface StripesProps {
    className?: string;
}

const Stripes: React.FC<StripesProps> = (
    { className = "" }
) => {
    // Implement your component logic here

    return (
        <img 
        src={stripes} 
        alt="stripes" 
        className= {className}
        />
    );
};

const Dots: React.FC<StripesProps> = (
    { className = "" }
) => {
    // Implement your component logic here

    return (
        <img 
        src={dots} 
        alt="dots" 
        className= {className}
        />
    );
};

export { Stripes, Dots };