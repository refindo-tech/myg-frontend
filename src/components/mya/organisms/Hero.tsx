import React from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";

interface HeroData {
    title: string;
    description: string;
    image: string;
}

const defaultHero: HeroData = {
    title: "Raih Kulit Sehat dan Berseri dengan MYA Beauty",
    description: "Perawatan kulit alami menjadi prioritas utama. Kami menghadirkan produk yang memastikan kulit Anda selalu tampak sehat dan bercahaya.",
    image: "https://via.placeholder.com/888x709",
};

interface HeroProps {
    heroData?: HeroData;
}

const Hero: React.FC<HeroProps> = ({ heroData = defaultHero }) => {
    return (
        <section
            className="items-center bg-mya-50 pt-12 px-4"
            id="hero"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center xl:px-16 h-full md:h-[600px] xl:h-[500px]">
                <div className="flex-1 flex flex-col md:basis-2/5 justify-center items-start text-left">
                    <h1 className="text-red-300 text-4xl md:text-5xl font-medium font-playfair leading-tight">
                        {heroData.title}
                    </h1>
                    <p className="text-zinc-500 text-lg font-normal font-openSans leading-7 mt-4">
                        {heroData.description}
                    </p>
                    <Button className="bg-rose-400 text-white font-semibold rounded-xl mt-6 px-6 py-3">
                        Jelajahi produk kami
                    </Button>
                </div>
                <div className="flex-1 flex flex-col md:basis-3/5 justify-center items-center mt-12 md:mt-0 relative h-full">
                    <img
                        className="w-full h-auto md:w-auto md:h-full rounded-md"
                        src={heroData.image}
                        alt="Model Image"
                    />
                    <Card className="md:absolute bottom-28 md:bottom-5 right-0 w-72 md:w-64 h-full md:h-auto shadow-md p-1">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h4 className="text-black text-md font-medium font-playfair leading-tight">Luxury Body Brightening Lotion (Almond)</h4>
                            <p className="text-tiny font-normal">Protection ekslusif bertekstur milk dengan wangi yang manis dan lembut dari almond.</p>
                            {/* <small className="text-default-500">12 Tracks</small> */}
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl h-28 w-full"
                                src="https://via.placeholder.com/250x250"
                                width={270}
                            />
                        </CardBody>
                        <CardFooter className="flex justify-end items-center px-4">
                            <Button className="bg-rose-400 text-white font-semibold rounded-xl px-6 py-2">
                                Beli Sekarang
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Hero;
