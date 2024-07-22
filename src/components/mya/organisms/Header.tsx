import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import Navigation from "@components/mya/molecules/Navigation";
import UserActions from "@components/mya/molecules/UserAction";
import SearchBar from "@components/mya/molecules/SearchBar";

import Image from "@components/mya/atoms/Image";

interface HeaderProps {
    logo: string; // The URL of the logo
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
    const navItems = [
        { label: "Home", isActive: true, href: "/" },
        { label: "Syarat dan Ketentuan", isActive: false, href: "/terms" },
        { label: "Konsultasi", isActive: false, href: "/consultation" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white w-full mx-auto">
            <Navbar
                isBordered
                className="py-2 bg-white shadow inline-flex mx-auto w-full"
            >
                <NavbarContent className="items-center gap-4 flex" justify="start">
                    <NavbarBrand className="flex-none">
                        <Image
                            src={logo}
                            alt="Company logo"
                            width={76}
                            height={76}
                        />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex" justify="center">
                    <Navigation NavItems={navItems} />
                </NavbarContent>
                <NavbarContent justify="end" as="div" className="items-center">
                    <SearchBar />
                    <UserActions NavItems={navItems} />
                </NavbarContent>
            </Navbar>
        </header>
    );
};

export default Header;
