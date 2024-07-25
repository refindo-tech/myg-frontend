"use client"
// import React from "react";
import { useState } from 'react'
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
const Tes = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent justify='end'>
                    <NavbarContent>
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarContent>
                    <NavbarContent className="hidden sm:flex gap-4">
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#" aria-current="page">
                                Customers
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Integrations
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                </NavbarContent>
                {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent> */}
                {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat" className='hidden lg:flex'>
                    Sign Up
                </Button>
                </NavbarItem>
            </NavbarContent> */}
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            {/* <div className="w-[360px] h-[414px] relative">
                <div className="w-[360px] h-[306px] left-0 top-0 absolute">
                    <img className="w-[360px] h-[305.26px] left-0 top-0 absolute" src="https://via.placeholder.com/360x305" />
                    <div className="w-[360px] h-[306px] left-0 top-0 absolute bg-neutral-700/opacity-60" />
                    <div className="w-[312px] h-[153.14px] left-[27px] top-[43.71px] absolute flex-col justify-start items-start gap-[13.86px] inline-flex">
                        <div className="self-stretch h-[70.40px] flex-col justify-start items-start gap-[10.40px] flex">
                            <div className="self-stretch text-white text-xl font-medium font-['Playfair Display'] leading-7">Workshop Kecantikan Alami</div>
                            <div className="w-[279px] text-white text-xs font-normal font-['Open Sans'] leading-none">Pelajari teknik kecantikan alami menggunakan bahan-bahan organik dan metode tradisional.</div>
                        </div>
                        <div className="h-[17.33px] px-[6.93px] bg-sky-600 rounded-[5.20px] shadow justify-center items-center gap-[5.20px] inline-flex">
                            <div className="text-white text-[6.93px] font-semibold font-['Open Sans'] leading-[10.40px]">Lihat Layanan kami</div>
                        </div>
                    </div>
                </div>
                <div className="h-[216px] px-[14.61px] py-[18.26px] left-[43px] top-[198px] absolute bg-white rounded-lg shadow flex-col justify-start items-start gap-[14.61px] inline-flex">
                    <div className="text-black text-3xl font-bold font-['Playfair Display'] leading-[29.22px]">Date & Time</div>
                    <div className="w-[255.65px] text-zinc-700 text-[10.96px] font-normal font-['Open Sans'] leading-[17.04px]">Saturday, July 14, 2024 at 10:00 WIB</div>
                    <div className="self-stretch h-[102.26px] flex-col justify-start items-start gap-[7.30px] flex">
                        <div className="w-[250.78px] h-[29.22px] px-[7.30px] rounded-[4.87px] border border-sky-500 justify-center items-center gap-[7.30px] inline-flex">
                            <div className="w-[12.17px] h-[12.17px] justify-center items-center flex">
                                <div className="w-[12.17px] h-[12.17px] relative">
                                </div>
                            </div>
                            <div className="text-sky-500 text-[8.52px] font-semibold font-['Open Sans'] leading-3">Add to Collection</div>
                        </div>
                        <div className="w-[250.78px] h-[29.22px] px-[7.30px] bg-sky-500 rounded-[4.87px] justify-center items-center gap-[7.30px] inline-flex">
                            <div className="text-white text-[8.52px] font-semibold font-['Open Sans'] leading-3">Daftar</div>
                        </div>
                        <div className="w-[250.78px] h-[29.22px] px-[7.30px] rounded-[4.87px] justify-center items-center gap-[7.30px] inline-flex">
                            <div className="text-zinc-700 text-[8.52px] font-semibold font-['Open Sans'] leading-3">No Refund</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Tes