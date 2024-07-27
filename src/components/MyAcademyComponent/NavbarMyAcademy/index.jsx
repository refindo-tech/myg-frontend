"use client"
import {useState, useEffect} from 'react'
import { Image } from "@nextui-org/image"
import icons from "@/components/icons/icon"
import Link from "next/link"
const NavbarMyAcademy = ({color}) => {
    const { AvatarIcon, SearchIcon, HamburgerIcon } = icons
    const [isHamburgerActive, setHamburgerActive] = useState(false)
    const handleHamburgerIcon = () =>{
        setHamburgerActive(!isHamburgerActive)
    }
    return (
        <>
            <nav className="absolute top-0 left-0 right-0 h-[60px] lg:h-[92px] flex justify-center items-center bg-white lg:bg-transparent shadow-xl lg:shadow-none z-20">
                <div className="container h-[60px] flex flex-row justify-between items-center px-6 lg:px-0">
                    <Image
                        // width={138}
                        alt="MyAcademyLogo"
                        src="/myAcademyLogo.png"
                        className=" h-[29px] w-[82px] lg:w-[138px] lg:h-[50px]"
                    />
                    <button className="block lg:hidden rounded-lg bg-active p-1 text-white" onClick={handleHamburgerIcon}>
                        <HamburgerIcon />
                    </button>
                    <div className={`hidden lg:flex gap-x-[12px] font-playfair text-[20px] text-${color}`}>
                        <Link
                            href={"#"}
                            className="py-4 px-5 active:text-active"
                        >Home</Link>
                        <Link
                            href={"#"}
                            className="py-4 px-5"
                        >Your Material</Link>
                        <Link
                            href={"#"}
                            className="py-4 px-5"
                        >Discussion</Link>
                    </div>
                    <div className="hidden lg:flex flex-row items-center gap-x-[16px]">
                        <div className="bg-transparent rounded-full relative ">
                            <input
                                type="text"
                                placeholder="i'am looking for.."
                                className={`text-[14px] text-${color} font-sans italic py-[8px] px-[16px] rounded-full bg-transparent border border-${color} focus:outline-none pr-10 placeholder:text-${color}`}
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6 text-white h-[20px]"
                                >
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* <SearchIcon className={"absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}/> */}
                        </div>
                        <div className="hidden lg:flex flex-row items-center gap-x-[8px]">
                            <div className="h-[32px] w-[32px] rounded-full bg-primary flex items-center justify-center">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg> */}
                                <AvatarIcon />
                            </div>
                            <Link href={"/"} className={`font-inter text-[16px] text-${color}`}>Login</Link>
                        </div>
                    </div>
                    {/* <img src="/myAcademyLogo.png" alt="LogoMyAcademy" /> */}
                </div>
            </nav>
            {isHamburgerActive&&
                <div className="absolute top-[60px] lg:top-[92px] left-0 right-0 bg-white text-zinc p-4 z-20 shadow-xl border-t-1 border-zinc/50">
                    <div className="flex flex-col gap-4 font-playfair font-semibold text-sm">
                        <p>Home</p>
                        <p>Material</p>
                        <p>Konsultasi</p>
                    </div>
                </div>
            }
        </>
    )
}
export default NavbarMyAcademy