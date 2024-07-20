import React, {useState} from 'react';
import { EyeIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

interface ProductDetailCardProps {
    category: string;
    name: string;
    views: number;
    description: string;
    price: string;
}

type Order = number;

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ category, name, views, description, price }) => {
    // Implement your component logic here
    // Add and Minus Button

    //order reactive variable
    const [order, setOrder] = useState<Order>(1);

    const increaseOrder = () => {
        setOrder(order + 1);
    }
    const decreaseOrder = () => {
        if (order > 1) {
            setOrder(order - 1);
        }
    }

    return (
        <Card 
        // className="w-full bg-mya-100 rounded-2xl shadow-md p-1 flex flex-col justify-between"
        className={`w-full flex flex-col justify-start p-8`}
        shadow='none'
        
        >
            <CardHeader className="pb-0 px-4 flex-col items-start flex-grow gap-2">
                <span className="text-default-500 text-xs font-normal font-openSans uppercase">{category}</span>
                <h4 className="text-black text-2xl font-medium font-playfair leading-8">{name}</h4>
                <span className="text-default-500 text-xs font-normal">Terjual 6rb+ produk/bulan . Stok Total : 2.000 pcs</span>
                <div className='flex flex-col w-full'>
                    <div className="flex items-center gap-2">
                        <EyeIcon className="h-5 w-5 text-default-500" />
                        <span className="text-default-500 text-xs font-normal">{'Dilihat ' + views + ' orang'}</span>
                    </div>
                </div>
                <span className="text-default-700 py-1 text-lg md:text-sm xl:text-lg font-normal font-openSans">{price}</span>
                <div className="flex gap-2 w-full">
                    <div className="flex-1 border border-gray rounded-xl p-2">
                        <div className="flex gap-2 items-center">
                            <Button onClick={decreaseOrder} variant='bordered' radius='full' isIconOnly className="bg-white font-semibold flex items-center w-6 h-6 flex-none">
                                <MinusIcon className="h-2 w-2" />
                            </Button>
                            <span className="text-default-500 text-xs font-normal font-openSans justify-center items-center">
                                {order}
                                </span>
                            <Button onClick= {increaseOrder} variant='bordered' radius='full' isIconOnly className="bg-white font-semibold flex items-center w-6 h-6 flex-none">
                                <PlusIcon className="h-2 w-2" />
                            </Button>
                        </div>
                    </div>
                    <Button className="bg-mya-600 w-full text-mya-100 font-semibold rounded-xl">Beli Sekarang</Button>
                    <Button className="bg-white border border-mya-600 w-full text-mya-600 font-semibold rounded-xl">+ Keranjang</Button>
                </div>
            </CardHeader>
            <CardBody className="">
                <p className="text-sm font-normal font-openSans text-default-400 leading-shallow">{description} </p>
            </CardBody>
        </Card>
    );
};

export default ProductDetailCard;