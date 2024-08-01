import React from 'react';
import Testimony from '@/types/testimony';
import { Avatar, } from '@nextui-org/react';
import { YoutubeIcon, AddCommentIcon } from '@/components/mya/icons';

import AddNewTestimony from '@components/mya/molecules/AddNewTestimony';

import useTestimonies from '@/hooks/useTestimonies';

interface TestimonialSectionProps {
    testimonials?: Testimony[];
    service?: string;
}

const Testimonial: React.FC<Testimony> = (testimony) => {

    // Random Avatar sementara
    function randomAvatar() {
        const avatars = [
            "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Felix",
            "https://api.dicebear.com/9.x/rings/svg",
            "https://api.dicebear.com/9.x/thumbs/svg?seed=Felix",
        ];
        return avatars[Math.floor(Math.random() * avatars.length)];
    }

    return (
        <div className="relative px-8 py-10 bg-zinc-100 rounded-[14px] shadow flex-col items-center gap-5 inline-flex min-h-full">
            <div className='flex-1 w-full h-full flex flex-col items-center justify-center'>
                <div className="absolute -top-8 text-black text-[120px] font-normal font-['Open Sans'] leading-normal">“</div>
                <div className="relative flex-col flex py-4 min-h-[150px] xl:min-h-[100px] items-center justify-center">
                    <div className="w-full text-center text-black text-normal font-normal font-['Open Sans'] leading-normal"> "{testimony.comment}"</div>
                </div>
            </div>

            {/* User Info */}
            <div className="justify-start bottom-0 gap-4 flex flex-col md:flex-row items-center md:w-full">
                <Avatar
                    src={randomAvatar()}
                    alt="Avatar"
                    size="lg"
                    className="flex-none"
                />
                <div className="justify-start items-start inline-flex h-full">
                    <div className="flex-col justify-start items-center md:items-start flex">
                        <div className="text-black text-lg font-semibold font-['Open Sans']">{testimony.name}</div>
                        <div className="text-center text-black text-sm font-normal font-['Open Sans']">{testimony.role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const TestimonialSection: React.FC<TestimonialSectionProps> = ({ service = "mya" }) => {
    const { data: testimonials, isLoading: testimoniesLoading } = useTestimonies.all({ limit: 3 });
    if (testimoniesLoading) return <div>Loading...</div>;

    const mainColor = (service: string) => {
        switch (service) {
            case "mya":
                return "text-mya-600";
            case "mybeautica":
                return "text-mybeautica-500";
            case "myacademy":
                return "text-myacademy-500";
            case "myg":
                return "text-myg-500";
            default:
                return "text-mya-500";
        }
    };

    return (
        <section className="w-full max-w-[1420px] mx-auto bg-white p-8 xl:px-32">
            <div className="w-full items-center flex flex-col lg:flex-row gap-8">
                <div className="h-full relative flex md:basis-2/5 justify-center items-center flex-col pr-0 md:pr-8 overflow-visible">
                    {/* <div className="absolute -top-30 right-0 text-mya-600 text-[532px] font-normal font-['Open Sans'] leading-normal z-0 blur-2xl">?</div> */}
                    <div className={`absolute -top-30 right-0 ${mainColor(service)} text-[532px] font-normal font-['Open Sans'] leading-normal z-0 blur-2xl pointer-events-none`}>?</div>
                    <div className="w-full text-right text-zinc-700 text-6xl md:text-6xl xl:text-7xl font-bold font-playfair leading-shallow z-10">Apa Kata Pembeli Sebelumnya?</div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 md:basis-3/5">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                    ))}

                    {/* Input Testimonial */}

                    <div className="px-8 py-10 bg-zinc-100 rounded-[14px] shadow flex-col items-center gap-5 inline-flex min-h-full">
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