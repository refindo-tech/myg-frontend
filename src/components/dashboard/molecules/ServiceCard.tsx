import { useRouter } from "next/navigation";
import React from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Service {
    name: string;
    logo: string;
    description: string;
    image: string;
}

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    // Implement your component logic here
    const router = useRouter();
    function handleServiceClick() {
        router.push(`/${service.name}`);
    }
    return (
        <Card className={`w-full rounded-2xl shadow-md p-1 flex flex-col justify-between 'bg-white'`}>
            <CardBody className="justify-between items-center">
                <div className="flex items-center gap-2 justify-center min-h-24 max-h-36">
                <Image
                    src={service.logo}
                    alt={service.name}
                    className="object-cover w-48"
                />
                </div>
                <div className='flex flex-col w-full py-2'>
                    <p className="text-sm font-normal font-openSans text-default-700 leading-normal mt-1 text-center">{service.description}</p>
                </div>
                <div className="overflow-visible bottom-0 flex justify-center items-center w-full bg-neutral-50 rounded-xl">
                    <Image
                        className="object-cover w-full h-48 rounded-xl"
                        src={service.image}
                        alt={service.name}
                        isZoomed
                    />
                </div>
            </CardBody>
            <CardFooter className="flex justify-between items-center px-4">
                <Button className="bg-myg-500 w-full text-white font-semibold rounded-xl" onClick={handleServiceClick}>
                    Lihat Layanan
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ServiceCard;