import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import Product from '@/types/mya/product';
import OrderService from '@/lib/mya/orderService';

import CartService from '@/lib/mya/cartService';

//sweeetalert
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { rupiah, category } from '@/lib/mya/helpers';

interface ProductDetailCardProps {
    product: Product;
}

//sweeetalert modal

type Quantity = number;

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ product }) => {
    const router = useRouter();
    const { addToCart } = CartService;
    const { orderProduct } = OrderService;
    //order reactive variable
    const [quantity, setQuantity] = useState<Quantity>(1);

    const increaseOrder = () => {
        setQuantity(quantity + 1);
    }
    const decreaseOrder = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    //handle order product
    const handleOrderProduct = async (productId: number, quantity: number) => {
        try {
            const response = await orderProduct(productId, { quantity });
            if (response.isError) {
                console.log("Error ordering product", response.isError);
                return;
            }
            swal.fire({
                title: 'Berhasil memesan produk!',
                text: 'Silahkan cek pesanan anda',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });

            //redirect to order page
            router.push('/mya/checkout/' + response.orderId);

        } catch (error) {
            console.log("Error ordering product", error);
        }
    }
    

    const handleAddToCart = async (productId: number, quantity: number) => {
        try {
            const response = await addToCart(productId, quantity);
            if (response.isError) {
                console.log("Error adding to cart", response.isError);
                return;
            }
            swal.fire({
                title: 'Berhasil menambahkan ke keranjang!',
                // text: 'Silahkan cek keranjang anda',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log("Error adding to cart", error);
        }
    }

    return (
        <Card 
        // className="w-full bg-mya-100 rounded-2xl shadow-md p-1 flex flex-col justify-between"
        className={`w-full flex flex-col justify-start p-8`}
        shadow='none'
        
        >
            <CardHeader className="pb-0 px-4 flex-col items-start flex-grow gap-2">
                <span className="text-default-500 text-xs font-normal font-openSans uppercase">{category(product.category)}</span>
                <h4 className="text-black text-2xl font-medium font-playfair leading-8">{product.name}</h4>
                <span className="text-default-500 text-xs font-normal">Terjual 6rb+ produk/bulan . Stok Total : {product.stock} pcs</span>
                <div className='flex flex-col w-full'>
                    <div className="flex items-center gap-2">
                        <EyeIcon className="h-5 w-5 text-default-500" />
                        <span className="text-default-500 text-xs font-normal">{'Dilihat orang'}</span>
                    </div>
                </div>
                <span className="text-default-700 py-1 text-lg md:text-sm xl:text-lg font-normal font-openSans">{rupiah(product.price.RETAIL)}</span>
                <div className="flex gap-2 w-full">
                    <div className="flex-1 border border-gray rounded-xl p-2">
                        <div className="flex gap-2 items-center">
                            <Button onClick={decreaseOrder} variant='bordered' radius='full' isIconOnly className="bg-white font-semibold flex items-center w-6 h-6 flex-none">
                                <MinusIcon className="h-2 w-2" />
                            </Button>
                            <span className="text-default-500 text-xs font-normal font-openSans justify-center items-center">
                                {quantity}
                                </span>
                            <Button onClick= {increaseOrder} variant='bordered' radius='full' isIconOnly className="bg-white font-semibold flex items-center w-6 h-6 flex-none">
                                <PlusIcon className="h-2 w-2" />
                            </Button>
                        </div>
                    </div>
                    <Button className="bg-mya-600 w-full text-mya-100 font-semibold rounded-xl" onClick={() => handleOrderProduct(product.productId, quantity)}>
                        Beli Sekarang
                    </Button>
                    <Button className="bg-white border border-mya-600 w-full text-mya-600 font-semibold rounded-xl" onClick={() => handleAddToCart(product.productId, quantity)}>
                        + Keranjang
                        </Button>
                </div>
            </CardHeader>
            <CardBody className="">
                <p className="text-sm text-justify font-normal font-openSans text-default-400 leading-shallow">{product.description}</p>
            </CardBody>
        </Card>
    );
};

export default ProductDetailCard;