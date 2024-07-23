import React from "react";
import { Link, NavbarMenuItem } from "@nextui-org/react";

interface NavItem {
    label: string;
    isActive: boolean;
    href: string;
}

interface NavigationProps {
    NavItems: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ NavItems }) => {
    const handleConsultationClick = () => {
        const whatsappNumber = "62895620930010";
        const message = "Halo, saya ingin berkonsultasi mengenai layanan My Beautica.";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      };

    return (
        <div className="p-1 justify-start items-center gap-16 flex ">
            {NavItems.map((item, index) => (
                <Link
                    key={index}
                    onClick={item.label === "Konsultasi" ? handleConsultationClick : undefined}
                    href={item.label === "Konsultasi" ? "#" : item.href}
                    className={`font-semibold font-playfair leading-tight ${item.isActive ? "text-mya-500" : "text-foreground"}`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
