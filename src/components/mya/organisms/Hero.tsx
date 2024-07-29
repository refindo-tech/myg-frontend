import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Product from "@/types/mya/product";
import { imageUrl, cutDescription } from "@/lib/mya/helpers";
import { Button, Card, CardHeader, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

interface HeroData {
    title: string;
    description: string;
    imageUrl: string;
}

interface HeroProps {
    heroData: HeroData;
    showcaseProduct?: Product;
}

const Hero: React.FC<HeroProps> = ({ heroData, showcaseProduct }) => {
    const router = useRouter();
    const pathname = usePathname();

    function redirectToProductDetail() {
        if (showcaseProduct) {
            router.push(`/mya/product/${showcaseProduct.productId}`);
        }
    }

    function redirectToHome() {
        const produkElement = document.getElementById("produk");
        if (produkElement) {
            produkElement.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/mya#produk");
        }
    }

    return (
        <section className="items-center bg-mya-50 pt-12 px-4" id="hero">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center xl:px-16 h-full md:h-[600px] xl:h-[500px]">
                <div className="flex-1 flex flex-col md:basis-2/5 justify-center items-start text-left">
                    <h1 className="text-red-300 text-4xl md:text-5xl font-medium font-playfair leading-tight">
                        {heroData.title}
                    </h1>
                    <p className="text-zinc-500 text-lg font-normal font-openSans leading-7 mt-4">
                        {heroData.description}
                    </p>
                    <Button className="bg-rose-400 text-white font-semibold rounded-xl mt-6 px-6 py-3" onClick={redirectToHome}>
                        Jelajahi produk kami
                    </Button>
                </div>
                <div className="flex-1 flex flex-col md:basis-3/5 justify-center items-center mt-12 md:mt-0 relative h-full">
                    <img
                        className="w-full h-auto md:w-auto md:h-full rounded-md"
                        src={heroData.imageUrl}
                        alt="Model Image"
                    />
                    {showcaseProduct && (
                        <Card className="md:absolute bottom-28 md:bottom-5 right-0 w-72 md:w-64 h-full md:h-auto shadow-md p-1">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <Link
                                    href={`/mya/product/${showcaseProduct.productId}`}
                                    className="text-black py-2 text-md font-medium font-playfair leading-tight hover:text-mya-600"
                                >
                                    {showcaseProduct.name}
                                </Link>
                                <p className="text-tiny font-normal">{cutDescription(showcaseProduct.description, 125)}</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl h-28 w-full hover:scale-105 transition-transform duration-300"
                                    src={imageUrl(showcaseProduct.productImages)}
                                    width={270}
                                />
                            </CardBody>
                            <CardFooter className="flex justify-end items-center px-4">
                                <Button className="bg-rose-400 text-white font-semibold rounded-xl px-6 py-2" onClick={redirectToProductDetail}>
                                    Beli Sekarang
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
