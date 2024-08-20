import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Product from "@/types/mya/product";
import { imageUrl, cutDescription } from "@/lib/mya/helpers";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@nextui-org/react";

interface HeroData {
  title: string;
  description: string;
  imageUrl: string;
}

interface HeroProps {
  heroData: HeroData;
}

const Hero: React.FC<HeroProps> = ({ heroData }) => {
  const router = useRouter();

  function redirectToHome() {
    //to #produk id, smooth scroll
    //check if on home page
    const produkElement = document.getElementById("layanan");
    if (produkElement) {
      produkElement.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  }
  return (
    <section className="relative py-12 md:pt-12 px-4 w-full h-full md:h-[600px]" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.imageUrl}
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-myg-500 to-black opacity-50 z-0"></div>

      <div className="z-10 mx-auto flex flex-col md:flex-row justify-between items-center xl:px-36 h-full">
        <div className="flex flex-col md:w-[75%] lg:w-[50%] px-2 md:px-16 justify-center items-start text-left z-10">
          <h1 className="text-white text-4xl md:text-5xl font-medium font-playfair leading-tight">
            {heroData.title}
          </h1>
          <p className="text-white text-lg font-normal font-openSans leading-7 mt-4">
            {heroData.description}
          </p>
          <Button
            className="bg-myg-500 text-white font-semibold rounded-xl mt-6 px-6 py-3"
            onClick={redirectToHome}
          >
            Lihat Layanan Kami
          </Button>
        </div>
      </div>
      {/* Image behinde the text */}
    </section>
  );
};

export default Hero;
