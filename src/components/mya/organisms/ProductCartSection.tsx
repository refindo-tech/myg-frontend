import React from 'react';
import OrderProductCard from '@/components/mya/molecules/Checkout/OrderProductCard';
import { Checkbox, Button } from '@nextui-org/react';

interface Product {
  imageUrl: string;
  name: string;
  price: string;
  quantity: number;
  totalPrice: string;
}

interface ProductCartSectionProps {
  products: Product[];
}

const ProductCartSection: React.FC<ProductCartSectionProps> = ({ products }) => {
  return (
      <section className="flex flex-col max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <header className="flex flex-col justify-center p-6 text-2xl bg-white border-b border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 justify-center my-auto leading-[133%] text-zinc-700">
                {/* <input type="checkbox" className="shrink-0 my-auto w-5 h-5 bg-white rounded-md border border-rose-400 border-solid" />
                <label>Pilih produk</label> */}
                <Checkbox color="danger" size='md' className="my-auto">
                <span className='font-playfair text-lg pl-4'>Pilih produk</span>
                </Checkbox>

              </div>
              {/* <button className="text-rose-400 leading-[150%]">Hapus</button> */}
              <Button variant='ghost' size='lg' className="border-none font-playfair text-lg text-rose-400 leading-[150%]">Hapus</Button>
            </div>
          </header>
          {products.map((product, index) => (
            <OrderProductCard key={index} products={product} isCheck={false} />
          ))}
        </div>
      </section>
  );
};

export default ProductCartSection;
