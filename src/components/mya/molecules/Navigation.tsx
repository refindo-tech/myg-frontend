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
    return (
        <div className="p-1 justify-start items-center gap-16 flex ">
            {NavItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={`font-semibold font-playfair leading-tight ${item.isActive ? "text-mya-500" : "text-foreground"}`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
