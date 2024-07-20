import React from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { EyeIcon } from "@heroicons/react/24/solid";

interface ProductCardProps {
    category: string;
    name: string;
    views: number;
    description: string;
    image: string;
    price: string;
    isDetail?: boolean;
}

//cut description to 100 characters
const cutDescription = (description: string, length = 85) => {
    if (description.length > length) {
        return description.slice(0, length) + ' (...)';
    }
    return description;
};

const ProductCard: React.FC<ProductCardProps> = (
    { category, name, views, description, image, price, isDetail = false }
) => {
    // Implement your component logic here

    return (
        <Card className={`w-full rounded-2xl shadow-md p-1 flex flex-col justify-between ${isDetail ? 'bg-white' : 'bg-mya-100'}`}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col flex-1 items-start">
                <span className="text-default-500 text-xs font-normal font-openSans uppercase">{category}</span>
                <p className="pt-2 -mb-3 text-black text-2xl font-medium font-playfair leading-8">{name}</p>
            </CardHeader>
            <CardBody className="flex-0 justify-end items-end">
                <div className='flex flex-col w-full py-2'>
                    <div className="flex items-center gap-2">
                        <EyeIcon className="h-4 w-4 text-default-300" />
                        <span className="text-default-500 text-xs font-normal">{'Dilihat ' + views + ' orang'}</span>
                    </div>
                    <p className="text-sm font-normal font-openSans text-default-700 leading-normal mt-1">{cutDescription(description)} </p>
                </div>
                <div className="overflow-visible bottom-0 flex justify-center items-center w-full bg-neutral-50 rounded-xl">
                    <img
                        className="object-contain w-full h-64 rounded-xl"
                        src={image}
                        alt={name}
                    />
                </div>
            </CardBody>
            <CardFooter className="flex justify-between items-center px-4">
                <span className="text-default-700 text-lg md:text-sm xl:text-lg font-normal font-openSans">{price}</span>
                <Button className="bg-mya-600 text-mya-100 font-semibold rounded-xl">+ Keranjang</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;