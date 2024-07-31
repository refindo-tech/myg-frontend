import React from "react";
import { Link, NavbarMenuItem } from "@nextui-org/react";

import { usePathname } from "next/navigation";

interface NavItem {
    label: string;
    isActive: boolean;
    href: string;
}

interface NavigationProps {
    NavItems: NavItem[];
    service?: string;
}

const Navigation: React.FC<NavigationProps> = ({ NavItems, service = "mya" }) => {

    //handle active navigation
    const pathname = usePathname();
    // NavItems.forEach((item) => {
    //     // item.isActive = pathname === item.href;
    //     if (pathname === item.href || (item.label === "Home" && pathname === `/${service}/home`)) {
    //         item.isActive = true;
    //     }
    //     else {
    //         item.isActive = false;
    //     }
    // }
    // );

    //more concise way
    const isActive = (item: NavItem) => {
        return pathname === item.href || (item.label === "Home" && pathname === `/${service}/home`);
    }

    console.log(pathname);

    const handleConsultationClick = () => {
        const whatsappNumber = "6281314485552";
        const message = "Halo, saya ingin berkonsultasi mengenai layanan My MYG.";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    //main color based on service
    const mainColor = (service: string) => {
        switch (service) {
            case "mya":
                return "text-mya-500";
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
        <div className="p-1 justify-start items-center gap-16 flex ">
            {NavItems.map((item, index) => (
                <Link
                    key={index}
                    onClick={item.label === "Konsultasi" ? handleConsultationClick : undefined}
                    href={item.label === "Konsultasi" ? "#" : item.href}
                    className={`font-semibold font-playfair leading-tight ${isActive(item) ? mainColor(service) : "text-default-500"}`}
                >
                    <span>{item.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
