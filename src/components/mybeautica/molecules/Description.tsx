import React from 'react';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  // Split description by newline and map to <p> elements
  const paragraphs = description.split('\n').map((text, index) => (
    <p key={index} className="text-zinc text-sm font-normal text-justify font-openSans xl:text-lg line-clamp-10 mb-3">
      {text}
    </p>
  ));

  return <div>{paragraphs}</div>;
};

export default Description;
