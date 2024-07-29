import React from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Product from '@/types/mya/product';
import { rupiah, cutDescription, imageUrl, category } from '@/lib/mya/helpers';

interface ProductCardProps {
    product: Product;
    isDetail?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = (
    { product, isDetail = false }
) => {
    return (
        <Card className={`w-full rounded-2xl shadow-md p-1 flex flex-col justify-between ${isDetail ? 'bg-white' : 'bg-mya-100'}`}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col flex-1 items-start">
                <span className="text-default-500 text-xs font-normal font-openSans uppercase">{category(product.category)}</span>
                {/* <p className="pt-2 -mb-3 text-black text-2xl font-medium font-playfair leading-8">
                    {product.name}
                </p> */}
                <Link
                    // onClick={() => router.push(`/mya/product/${product.productId}`)}
                    href={`/mya/product/${product.productId}`}
                    className="pt-2 -mb-3 text-black text-2xl font-medium font-playfair leading-8 hover:text-mya-600"
                >
                    {product.name}
                </Link>
            </CardHeader>
            <CardBody className="flex-0 justify-end items-end">
                <div className='flex flex-col w-full py-2'>
                    <div className="flex items-center gap-2">
                        <EyeIcon className="h-4 w-4 text-default-300" />
                        <span className="text-default-500 text-xs font-normal">{'Dilihat orang'}</span>
                    </div>
                    <p className="text-sm font-normal font-openSans text-default-700 leading-normal mt-1">{cutDescription(product.description)}</p>
                </div>
                <div className="overflow-visible bottom-0 flex justify-center items-center w-full bg-neutral-50 rounded-xl">
                    <img
                        className="object-cover w-full h-48 rounded-xl"
                        src={imageUrl(product.productImages[0])}
                        alt={product.name}
                    />
                </div>
            </CardBody>
            <CardFooter className="flex justify-between items-center px-4">
                <span className="text-default-700 text-lg md:text-sm xl:text-lg font-normal font-openSans">{rupiah(product.price.RETAIL)}</span>
                <Button className="bg-mya-600 text-mya-100 font-semibold rounded-xl">+ Keranjang</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;