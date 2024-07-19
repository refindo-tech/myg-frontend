import React from 'react';
import ProductCard from '@components/mya/molecules/ProductCard';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Product {
    // category: string;
    name: string;
    views: number;
    description: string;
    image: string;
    price: string;
}

interface RecommendationSectionProps {
    title: string;
    recommendedProducts: Product[];
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ title, recommendedProducts }) => {
    return (
        <section
            className="w-full max-w-[1420px] mx-auto bg-white p-8"
        >
            <div className="text-5xl text-mya-600 font-medium mb-8 font-playfair">{title}</div>
            <div className="flex flex-col md:flex-row gap-8 h-full">
                <Card shadow="none" className='flex-1 flex md:basis-3/5'>
                    <CardBody className="overflow-hidden p-0 h-96 flex rounded-xl items-center justify-center bg-neutral-100">
                        <Image
                            shadow="none"
                            radius="lg"
                            width="auto"
                            alt={recommendedProducts[0].name}
                            className="w-full object-cover"
                            src={recommendedProducts[0].image}
                        />
                    </CardBody>
                    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                        <h4 className='text-black text-2xl font-medium font-playfair leading-8 py-2'>{recommendedProducts[0].name}</h4>
                        <div className="text-sm font-normal font-openSans text-default-700 leading-normal">{recommendedProducts[0].description}</div>
                        <span className="text-black font-bold text-xl md:text-sm xl:text-xl font-normal font-openSans py-2">{recommendedProducts[0].price}</span>
                    </CardFooter>
                </Card>
                <div className="flex-1 flex flex-row md:basis-2/5 grid grid-cols-1 gap-8">
                    {recommendedProducts.slice(1).map((product, index) => (
                        <Card key={index} shadow="none">
                            <CardBody className="overflow-hidden p-0 h-96 md:h-36 flex rounded-xl items-center justify-center bg-neutral-100">
                                <Image
                                    shadow="none"
                                    radius="lg"
                                    width="auto"
                                    height={200}
                                    alt={product.name}
                                    className="h-full md:h-36 w-auto object-cover"
                                    src={product.image}
                                />
                            </CardBody>
                            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start flex-grow">
                                <h4 className='text-black text-2xl font-medium font-playfair leading-8 py-2'>{product.name}</h4>
                                <div className="text-sm font-normal font-openSans text-default-700 leading-normal">{product.description}</div>
                                <span className="text-black font-bold text-xl md:text-sm xl:text-xl font-normal font-openSans py-2">{product.price}</span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendationSection;