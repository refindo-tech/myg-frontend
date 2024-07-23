'use client';
import { NextPage } from 'next';
import useProducts from '@hooks/mya/useProducts';
import DetailPage from '@components/mya/templates/DetailPage';
import LoadingPage from '@/components/mya/templates/LoadingPage';


const product = {
  category: "Perawatan wajah",
  name: "Ultimate Rejuve Serum",
  views: 200,
  description: "Body lotion with tone up effect + UV protection ekslusif bertekstur milk dengan wangi yang manis dan lembut dari almond. melembabkan, meningkatkan kecerahan kulit alami yang signifikan yang dilengkapi dengan proteksi sinar UVA & UVB Niacinamide atau dikenal juga sebagai nitocinamide, adalah salah satu zat turunan dari vitamin B3 (niacin). Dalam dunia dermatologi, zat ini digunakan untuk mengatasi jerawat dan bekasnya, mencerahkan kulit, serta mengendalikan gejala rosacea. Probiobalance memberikan hidrasi kulit, menutrisi kulit, sekaligus melembabkan kulit. Mengurangi kerutan pada kulit seperti habis botoks. memberikan nutrisi pada kulit dan melembabkan.",
  imageUrl: "/assets/images/product/placeholder/3.jpg",
  price: "Rp.120.000"
};

const heroData = {
  title: "Raih Kulit Sehat dan Berseri dengan MYA Beauty",
  description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
  imageUrl: "/assets/images/hero/menhera.png",
};

// id from url, e.g. /product/[id]/page.tsx
export default function Product({ params }: { params: { id: string } }) {
  const { data: heroProducts, isLoading: heroLoading } = useProducts.all({ limit: 1 });
  const { data: relatedProducts, isLoading: relatedLoading } = useProducts.all({ limit: 4 }); 
  const { data: product, isLoading: productLoading } = useProducts.byId(Number(params.id));
  const isHeroLoading = heroLoading || relatedLoading || productLoading;
  if (isHeroLoading) return <LoadingPage />;

  return (
    <DetailPage
      logo="https://cdn.builder.io/api/v1/image/assets/TEMP/3286fac76e3ba9a985929c27e761a770990e30ecdadb8c2ecd7a514c9a3db612?apiKey=04edd4fc20274006b83b68624fe67059&"
      product={product}
      heroData={heroData}
      heroProduct={heroProducts[0]}
      relatedProducts={relatedProducts}
    />
  );
}