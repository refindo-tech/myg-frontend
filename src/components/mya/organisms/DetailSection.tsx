import React from 'react';
import Product from '@/types/mya/product';
import ProductDetailCard from '@components/mya/molecules/ProductDetailCard';

import { imageUrl, rupiah } from '@/lib/mya/helpers';


interface DetailSectionProps {
    product: Product;
}

const DetailSection: React.FC<DetailSectionProps> = ({ product }) => {
    // Implement your component logic here

    return (
        <section
            className="w-full items-center bg-white py-4"
            id="hero"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 xl:px-16 h-full">
                
                <div className="flex flex-none flex-col w-full md:basis-1/2 justify-center items-start text-left">
                    <img
                        className="sm:rounded-2xl object-cover aspect-square w-full"
                        src={imageUrl(product.productImages)}
                        alt={product.name}
                    />
                </div>
                <div className="flex flex-col md:basis-1/2 justify-start items-center xl:mt-0 md:mt-0 relative h-full">
                    <ProductDetailCard
                        product={product}
                    />
                </div>
            </div>
        </section>
    );
};

export default DetailSection;