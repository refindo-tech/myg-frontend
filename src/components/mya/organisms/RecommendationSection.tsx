import React from 'react';
import Product from '@/types/mya/product';
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import { rupiah, cutDescription, imageUrl } from '@/lib/mya/helpers';

interface RecommendationSectionProps {
    title: string;
    recommendedProducts: Product[];
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ title, recommendedProducts }) => {
    if (!recommendedProducts || recommendedProducts.length === 0) {
        return null; // or render a message indicating no products available
    }

    const firstProduct = recommendedProducts[0];

    return (
        <section className="w-full max-w-[1420px] mx-auto bg-white p-8 xl:px-32">
            <div className="text-5xl text-mya-600 font-medium mb-8 font-playfair">{title}</div>
            <div className="flex flex-col md:flex-row gap-8 h-full">
                <Card shadow="none" className='flex-1 flex md:basis-3/5'>
                    <CardBody className="overflow-hidden p-0 h-96 flex rounded-xl items-center justify-center bg-neutral-100">
                        <Image
                            shadow="none"
                            radius="lg"
                            width="auto"
                            alt={firstProduct.name}
                            className="w-full object-cover"
                            src={imageUrl(firstProduct.productImages)}
                        />
                    </CardBody>
                    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                        <Link
                            href={`/mya/product/${firstProduct.productId}`}
                            className="text-black text-2xl font-medium font-playfair leading-8 py-2 hover:text-mya-600"
                        >
                            {firstProduct.name}
                        </Link>
                        <div className="text-sm font-normal font-openSans text-default-700 leading-normal">
                            {cutDescription(firstProduct.description, 300)}
                        </div>
                        <span className="text-black text-xl md:text-sm xl:text-xl font-normal font-openSans py-2">
                            {rupiah(firstProduct.priceId)}
                        </span>
                    </CardFooter>
                </Card>
                <div className="flex-1 md:basis-2/5 grid grid-cols-1 gap-8">
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
                                    src={imageUrl(product.productImages)}
                                />
                            </CardBody>
                            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start flex-grow">
                                <Link
                                    href={`/mya/product/${product.productId}`}
                                    className="text-black text-2xl font-medium font-playfair leading-8 py-2 hover:text-mya-600"
                                >
                                    {product.name}
                                </Link>
                                <div className="text-sm font-normal font-openSans text-default-700 leading-normal">
                                    {cutDescription(product.description, 200)}
                                </div>
                                <span className="text-black text-xl md:text-sm xl:text-xl font-normal font-openSans py-2">
                                    {rupiah(product.priceId)}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendationSection;
