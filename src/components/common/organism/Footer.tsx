import React, { useEffect, useState } from 'react';
import { Image, Button, Link } from '@nextui-org/react';
import { YoutubeIcon, InstagramIcon } from '@/components/mya/icons';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
    const router = useRouter();
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        const handler = (e: any) => {
            console.log('beforeinstallprompt event captured');
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleDownloadPWA = () => {
        console.log('Download button clicked');
        if (deferredPrompt) {
            console.log('Prompting installation');
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                setDeferredPrompt(null);
            });
        } else {
            console.log('No deferredPrompt available');
        }
    };

    const handleConsultationClick = () => {
        const whatsappNumber = "6281314485552";
        const message = "Halo, saya ingin berkonsultasi mengenai layanan My MYG.";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const instagram = () => {
        window.location.href = 'https://www.instagram.com/myacademy_official/';
    }

    const youtube = () => {
        window.location.href = 'https://www.youtube.com/@MultiYasykurGlobal';
    }

    return (
        <footer className="w-full flex mx-auto bg-stone-800">
            <div className="w-full flex flex-col px-16 xl:px-32 py-2 divide-y divide-stone-700">
                <div className="w-full flex py-2">
                    {/* logo */}
                    <div className="flex-1 inline-flex items-center h-24 justify-center md:justify-start">
                        <Image
                            src="/assets/images/logo/myg.png"
                            alt="logo"
                            className='h-24 w-auto'
                        />
                    </div>

                    {/* Button */}
                    <div className="items-center h-24 hidden md:flex">
                        <Button className='bg-myg-500' color='default' variant='solid' size='md' radius='full' onClick={handleDownloadPWA}>
                            <span className="text-black">Unduh Aplikasi</span>
                        </Button>
                    </div>
                </div>

                {/* Detail alamat, kontak, dan sosial media */}

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-semibold text-white py-1">Alamat</h2>
                        <p className="text-foreground font-normal font-openSans leading-normal">Beauty, cosmetic & personal care <br />
                            Griya Baladika Asri, Jl. Perintis No.11 Rt. 001 Rw. 015, Taman Kopassus, Kelurahan Drangong, Kecamatan Taktakan, Kota Serang, Provinsi Banten., Serang 42162</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-white py-1">Layanan</h2>
                        <Link href="/" className='text-white'>MYG</Link>
                        <Link href="/mya" className='text-white'>MYA</Link>
                        <Link href="/Myacademy" className='text-white'>My Academy</Link>
                        <Link href="/myBeautica" className='text-white'>My Beautyca</Link>
                        <Link className='text-white' onClick={handleConsultationClick}>
                        Konsultasi
                        </Link>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-1 flex-col gap-2">
                            <h2 className="text-lg font-semibold text-white py-1">Contact Us</h2>
                            <p className="text-white">+62 813 14485552</p>
                        </div>

                        <div className="flex flex-row gap-4 justify-end">
                            <Button isIconOnly className='bg-myg-500' variant='solid' size='sm' radius='full' onClick={instagram}>
                                <InstagramIcon size={48} fill="currentColor" />
                            </Button>
                            <Button isIconOnly className='bg-myg-500' variant='solid' size='sm' radius='full' onClick={youtube}>
                                <YoutubeIcon size={24} fill="currentColor" />
                            </Button>
                        </div>
                    </div>
                    <div className="items-center flex md:hidden">
                        <Button className='bg-myg-500' color='default' variant='solid' size='md' radius='full' onClick={handleDownloadPWA}>
                            <span className="text-black">Unduh Aplikasi</span>
                        </Button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full flex justify-start items-center py-4">
                    <p className="text-foreground font-normal font-openSans leading-normal">© 2024 MYG.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
