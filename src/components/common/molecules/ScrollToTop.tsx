// components/ScrollToTopButton.js
'use client';
import { useEffect, useState, useCallback } from 'react';
import { Button } from '@nextui-org/react';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

import { usePathname } from 'next/navigation';

const ScrollToTopButton = () => {

    const pathname = usePathname();
    const mainColor = () => {
        const services = pathname.split('/')[1].toLowerCase();
        switch (services) {
            case "mya":
                return "bg-mya-600";
            case "mybeautica":
                return "bg-mybeautica-500";
            case "myacademy":
                return "bg-myacademy-500";
            case "myg":
                return "bg-myg-500";
            case "dashboard":
                return "bg-myg-500";
            default:
                return "bg-mya-500";
        }
    };

    //   const [visible, setVisible] = useState(false);

    //   const toggleVisibility = useCallback(() => {
    //     if (window.scrollY > 300) {
    //         console.log('scrolling');
    //       setVisible(true);
    //     } else {
    //       setVisible(false);
    //     }
    //   }, []);

    const scrollToTop = () => {
        const body = document.querySelector('body');
        if (body) {
            body.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    //   useEffect(() => {
    //     window.addEventListener('scroll', toggleVisibility);
    //     return () => {
    //       window.removeEventListener('scroll', toggleVisibility);
    //     };
    //   }, []);

    return (
        <div className="fixed bottom-4 right-4">

            <Button
                color="primary"
                onClick={scrollToTop}
                radius='full'
                isIconOnly
                // className="flex items-center justify-center w-5 shadow-lg bg-mya-500 hover:bg-mya-600 text-white z-50"
                className={`flex items-center justify-center w-5 shadow-lg ${mainColor()} hover:bg-neutral-400 text-white z-50`}
            >
                <ArrowUpIcon className="h-5 w-5" />
            </Button>

        </div>
    );
};

export default ScrollToTopButton;
