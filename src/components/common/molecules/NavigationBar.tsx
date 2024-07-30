import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Image,
    Button,
} from "@nextui-org/react";
import Navigation from "@/components/common/molecules/Navigation";
import UserActions from "@/components/common/molecules/UserAction";
import SearchBar from "@/components/common/molecules/SearchBar";

import { useRouter } from "next/navigation";

interface navItems {
    label: string;
    isActive: boolean;
    href: string;
}

interface NavigationBarProps {
    logo: string; // The URL of the logo
    navItems: navItems[];
    service?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ logo, navItems, service = "mya" }) => {

    const router = useRouter();
    const handleHome = () => {
        switch (service) {
            case "mya":
                router.push("/mya");
                break;
            case "mybeautica":
                router.push("/mybeautica");
                break;
            case "myacademy":
                router.push("/myacademy");
                break;
            case "myg":
                router.push("/");
                break;
            default:
                router.push("/");
                break;
        }
    }

    return (
        <Navbar
                isBordered
                className="py-2 bg-white shadow inline-flex mx-auto w-full"
            >
                <NavbarContent className="items-center gap-4 flex" justify="start">
                    <NavbarBrand className="flex-none" onClick={handleHome}>
                        <Image
                            src={logo}
                            alt="Company logo"
                            width={76}
                            height={76}
                            className="object-contain"
                        />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex" justify="center">
                    <Navigation NavItems={navItems} service={service} />
                </NavbarContent>
                <NavbarContent justify="end" as="div" className="items-center">
                    <SearchBar />
                    {/* <Button className='bg-myg-500' color='default' variant='solid' size='md' radius='full'>
                            <span className="text-black">Unduh Aplikasi</span>
                        </Button> */}
                    <UserActions NavItems={navItems} />
                </NavbarContent>
            </Navbar>
    );
};

export default NavigationBar;