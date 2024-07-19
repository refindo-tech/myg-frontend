import React, { useState, useEffect, ReactNode } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Button } from '@nextui-org/react';

interface CarouselProps {
    children: ReactNode[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

const CarouselSection: React.FC<CarouselProps> = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <section className="max-w-screen mx-auto bg-white p-8">
            <div className='relative overflow-hidden rounded-lg bg-mya-600'>
                <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button color="danger" isIconOnly onClick={prev} radius='full' variant='faded'>
                        <ChevronLeftIcon className="w-6 h-6" color='pink' />
                    </Button>
                    <Button color="danger" isIconOnly onClick={next} radius='full' variant='faded'>
                        <ChevronRightIcon className="w-6 h-6" color='pink' />
                    </Button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {slides.map((_, i) => (
                            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselSection;
