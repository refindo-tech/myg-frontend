import React from 'react';
import ProductCard from '@components/mya/molecules/ProductCard';
import Product from '@/types/mya/product';

interface ProductSectionProps {
    title: string;
    products: Product[];
    isDetail?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products, isDetail=false }) => {
    return (
        <section
            // className="w-full max-w-[1420px] mx-auto bg-white py-8 px-8 xl:px-32"
            className={`w-full mx-auto py-8 px-8 xl:px-32 ${isDetail ? 'bg-mya-100' : 'bg-white'}`}
        >
            <div className="text-5xl text-mya-600 font-medium mb-8 font-playfair">{title}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} isDetail={isDetail} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;