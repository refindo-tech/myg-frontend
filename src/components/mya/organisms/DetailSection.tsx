import React from 'react';
import ProductDetailCard from '@components/mya/molecules/ProductDetailCard';
import { Stripes, Dots } from '@components/mya/atoms/Decorations';

interface Product {
    category: string;
    name: string;
    views: number;
    description: string;
    imageUrl: string;
    price: string;
}

interface DetailSectionProps {
    product: Product;
}

const DetailSection: React.FC<DetailSectionProps> = ({ product }) => {
    // Implement your component logic here

    return (
        <section
            className="w-full items-center bg-white py-16"
            id="hero"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 xl:px-16 h-full">
                
                <div className="flex flex-none flex-col w-full md:basis-1/2 justify-center items-start text-left">
                    <img
                        className="sm:rounded-2xl object-cover aspect-square w-full"
                        src={product.imageUrl}
                        alt={product.name}
                    />
                </div>
                <div className="flex flex-col md:basis-1/2 justify-start items-center xl:mt-0 md:mt-0 relative h-full">
                    <ProductDetailCard
                        category= {product.category}
                        name= {product.name}
                        views= {product.views}
                        description= {product.description}
                        price= {product.price}
                    />
                </div>
            </div>
        </section>
    );
};

export default DetailSection;