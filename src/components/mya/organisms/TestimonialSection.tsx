import React from 'react';
import { Card, CardBody, Avatar, Button } from '@nextui-org/react';
import { YoutubeIcon, AddCommentIcon } from '../icons';

import AddNewTestimony from '@components/mya/molecules/AddNewTestimony';

interface TestimonialProps {
    quote: string;
    name: string;
    role: string;
    avatar?: string;
}

interface TestimonialSectionProps {
    testimonials: TestimonialProps[];
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, avatar }) => {
    return (
        <div className="relative px-8 py-10 bg-zinc-100 rounded-[14px] shadow flex-col items-center gap-5 inline-flex min-h-full">
            <div className='flex-1 w-full h-full flex flex-col items-center justify-center'>
                <div className="absolute -top-8 text-black text-[120px] font-normal font-['Open Sans'] leading-normal">“</div>
                <div className="relative flex-col flex py-4 min-h-[150px] xl:min-h-[100px] items-center justify-center">
                    <div className="w-full text-center text-black text-normal font-normal font-['Open Sans'] leading-normal"> "{quote}" </div>
                </div>
            </div>

            {/* User Info */}
            <div className="justify-start bottom-0 gap-4 flex flex-col md:flex-row items-center md:w-full">
                <Avatar
                    src={avatar}
                    alt="Avatar"
                    size="lg"
                    className="flex-none"
                />
                <div className="justify-start items-start inline-flex h-full">
                    <div className="flex-col justify-start items-center md:items-start flex">
                        <div className="text-black text-lg font-semibold font-['Open Sans']">{name}</div>
                        <div className="text-center text-black text-sm font-normal font-['Open Sans']">{role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
    return (
        <section className="w-full max-w-[1420px] mx-auto bg-white p-8 xl:px-32">
            <div className="w-full items-center flex flex-col lg:flex-row gap-8">
                <div className="h-full relative flex md:basis-2/5 justify-center items-center flex-col pr-0 md:pr-8 overflow-visible">
                    <div className="absolute -top-30 right-0 text-mya-600 text-[532px] font-normal font-['Open Sans'] leading-normal z-0 blur-2xl">?</div>
                    <div className="w-full text-right text-zinc-700 text-6xl md:text-6xl xl:text-7xl font-bold font-playfair leading-shallow z-10">Apa Kata Pembeli Sebelumnya?</div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 md:basis-3/5">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                    ))}

                    {/* Input Testimonial */}

                    <div className="flex px-8 py-10 bg-zinc-100 rounded-[14px] shadow flex-col items-center gap-5 inline-flex min-h-full">
                        <div className='flex-1 w-full h-full flex flex-row lg:flex-col xl:flex-row items-center justify-center gap-5'>
                            <div className="w-full h-full p-5 rounded-xl shadow border border-dashed border-black flex-col justify-center items-center gap-2 inline-flex">
                                <div className="self-stretch text-center text-black text-normal font-normal font-['Open Sans'] leading-normal">Berikan Pendapatmu disini!</div>
                                <AddNewTestimony />
                            </div>
                            <div className="w-full h-full px-3 bg-red-50 rounded-xl shadow flex-col justify-center items-center gap-3 inline-flex">
                                <div className="text-center text-black text-normal font-normal font-['Open Sans'] leading-normal">Lihat lainnya di</div>
                                <div className="self-stretch px-2 py-1.5 bg-zinc-100 rounded justify-end items-center gap-2.5 inline-flex">
                                    <YoutubeIcon size={48} fill="currentColor" />
                                    <div className="text-center text-black text-normal font-bold font-['Open Sans'] leading-normal">Youtube</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;