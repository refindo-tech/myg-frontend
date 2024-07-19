import React from 'react';
import ProductCard from '@components/mya/molecules/ProductCard';

interface Product {
    category: string;
    name: string;
    views: number;
    description: string;
    image: string;
    price: string;
}

interface ProductSectionProps {
    title: string;
    products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
    return (
        <section
            className="w-full max-w-[1420px] mx-auto bg-white p-8"
        >
            <div className="text-5xl text-mya-600 font-medium mb-8 font-playfair">{title}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;