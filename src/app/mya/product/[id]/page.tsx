'use client';
import useProducts from '@hooks/mya/useProducts';
import DetailPage from '@components/mya/templates/DetailPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';

import { useRouter } from 'next/navigation';

const heroData = {
  title: "Raih Kulit Sehat dan Berseri dengan MYA Beauty",
  description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
  imageUrl: "/assets/images/hero/hero.png",
};

// id from url, e.g. /product/[id]/page.tsx
export default function Product({ params }: { params: { id: string } }) {

  const router = useRouter();

  const { data: heroProducts, isLoading: heroLoading } = useProducts.all({ limit: 1 });
  const { data: relatedProducts, isLoading: relatedLoading } = useProducts.all({ limit: 4 }); 
  const { data: product, isLoading: productLoading, isError: productError } = useProducts.byId(Number(params.id));
  const isHeroLoading = heroLoading || relatedLoading || productLoading;
  if (isHeroLoading) return <LoadingPage />;

  if (productError) {
    router.push('/mya/home');
    return <LoadingPage />;
  }

  return (
    <DetailPage
      product={product}
      heroData={heroData}
      heroProduct={heroProducts[0]}
      relatedProducts={relatedProducts}
    />
  );
}