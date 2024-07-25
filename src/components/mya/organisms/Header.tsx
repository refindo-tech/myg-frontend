import React from "react";
import NavigationBar from "@/components/common/molecules/NavigationBar";


interface HeaderProps {
    logo?: string; // The URL of the logo
}

const defaultLogo = "/assets/images/logo/mya1.png"
const Header: React.FC<HeaderProps> = ({ logo = defaultLogo }) => {
    const navItems = [
        { label: "Home", isActive: true, href: "/mya" },
        { label: "Syarat dan Ketentuan", isActive: false, href: "/mya/term" },
        { label: "Konsultasi", isActive: false, href: "/consultation" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white w-full mx-auto">
            <NavigationBar logo={logo} navItems={navItems} service="mya" />
        </header>
    );
};

export default Header;
