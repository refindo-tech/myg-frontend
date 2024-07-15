"use client"
import { Image } from "@nextui-org/image"
import icons from "@/components/icons/icon"
import Link from "next/link"
const NavbarMyAcademy = () => {
    const { AvatarIcon, SearchIcon } = icons
    return (
        <>
            <nav className="h-[92px] flex justify-center items-center bg-gray-500">
                <div className="container h-[60px] flex flex-row justify-between items-center">
                    <Image
                        width={138}
                        alt="MyAcademyLogo"
                        src="/myAcademyLogo.png"
                    />
                    <div className="flex gap-x-[12px] font-playfair text-[20px] text-white">
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
                    <div className="flex flex-row items-center gap-x-[16px]">
                        <div className="bg-transparent rounded-full relative ">
                            <input
                                type="text"
                                placeholder="i'am looking for.."
                                className="text-[14px] text-white font-sans italic py-[8px] px-[16px] rounded-full bg-transparent border border-white focus:outline-none pr-10 placeholder:text-white"
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
                        <div className="flex flex-row items-center gap-x-[8px]">
                            <div className="h-[32px] w-[32px] rounded-full bg-primary flex items-center justify-center">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg> */}
                                <AvatarIcon />
                            </div>
                            <Link href={"/"} className="font-inter text-[16px] text-white">Login</Link>
                        </div>
                    </div>
                    {/* <img src="/myAcademyLogo.png" alt="LogoMyAcademy" /> */}
                </div>
            </nav>
        </>
    )
}
export default NavbarMyAcademy