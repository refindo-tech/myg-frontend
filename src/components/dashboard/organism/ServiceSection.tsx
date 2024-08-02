import React from 'react';
import ServiceCard from '@/components/dashboard/molecules/ServiceCard';

interface Service {
    name: string;
    logo: string;
    description: string;
    image: string;
    url: string;
}

interface ServiceSectionProps {
    title: string;
    services: Service[];
}

const ProductSection: React.FC<ServiceSectionProps> = ({ title, services }) => {
    return (
        <section
            // className="w-full max-w-[1420px] mx-auto bg-white py-8 px-8 xl:px-32"
            className= "w-full mx-auto py-8 px-8 xl:px-32 bg-myg-100"
            id='layanan'
        >
            <div className="text-5xl text-myg-700 font-medium mb-8 font-playfair">{title}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;