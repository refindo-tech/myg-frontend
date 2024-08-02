import React from "react";
import NavigationBar from "@/components/common/molecules/NavigationBar";


interface HeaderProps {
    logo?: string; // The URL of the logo
}

const defaultLogo = "/assets/images/logo/myg.png"
const Header: React.FC<HeaderProps> = ({ logo = defaultLogo }) => {
    const navItems = [
        { label: "Home", isActive: true, href: "/" },
        { label: "MyAcademy", isActive: false, href: "/Myacademy" },
        { label: "MYA", isActive: false, href: "/mya" },
        { label: "My Beautica", isActive: false, href: "/myBeautica" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white w-full mx-auto">
            <NavigationBar logo={logo} navItems={navItems} service="myg" />
        </header>
    );
};

export default Header;
