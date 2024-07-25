import { Image } from "@nextui-org/image"
import { Divider } from "@nextui-org/divider"
import icons from "@/components/icons/icon"
import Link from "next/link"
const FooterMyAcademy = () => {
    const { InstagramIcon, YoutubeIcon, ArrowUp } = icons
    return (
        <>
            <footer className="min-h-[507px] bg-footer flex py-[8px] justify-center">
                <div className="container flex flex-col py-[32px] px-[40px]">
                    <div className="flex flex-row justify-between h-[76px] w-full items-center">
                        <Image
                            alt="Logo MYG"
                            height={76}
                            width={109.6}
                            src="/images/myg_logo.png"
                        />
                        <button className="hidden lg:block bg-kuning text-black font-sans py-[10px] px-[24px] rounded-full h-[40px] align-middle font-semibold">Unduh Aplikasi</button>
                    </div>
                    <div className="border-t border-gray-300 my-4"></div>
                    <div className="h-full grid lg:grid-cols-3 grid-cols-1 gap-[24px] content-between">
                        <div className="flex flex-col gap-y-5 lg:gap-y-7">
                            <h4 className="font-semibold font-sans text-[14px] text-white">Alamat</h4>
                            <p className="font-normal font-sans text-[14px] text-white/60">
                                Beauty, cosmetic & personal care
                                Griya Baladika Asri, Jl. Perintis No.11 Rt. 001 Rw. 015, Taman Kopassus, Kelurahan Drangong, Kecamatan Taktakan, Kota Serang, Provinsi Banten., Serang 42162
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-5 lg:gap-y-7">
                            <h4 className="font-semibold font-sans text-[14px] text-white">Layanan</h4>
                            <ul className="font-sans text-[14px] text-white">
                                <li>
                                    <Link href={"#"} className={"font-normal text-white/60 hover:text-white"}>MYG</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className={"font-normal text-white/60 hover:text-white"}>MYA</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className={"font-normal text-white/60 hover:text-white"}>My Academy</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className={"font-normal text-white/60 hover:text-white"}>My Beuatica</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className={"font-normal text-white/60 hover:text-white"}>Konsultasi</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className={"font-normal text-white/60 hover:text-white"}>Sertifikasi</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col gap-y-5 lg:gap-y-7">
                                <h4 className="font-semibold font-sans text-[14px] text-white">Contact Us</h4>
                                <div>
                                    <p className="font-sans text-[14px] text-white/60 hover:text-white">+62 813 14485552</p>
                                    <p className="font-sans text-[14px] text-white/60 hover:text-white">help@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-[8px]">
                                <Link href={"#"} className="p-[8px] rounded-full bg-abu/60 h-fit">
                                    <InstagramIcon />
                                </Link>
                                <Link href={"#"} className="p-[8px] rounded-full bg-abu/60 h-fit">
                                    <YoutubeIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:hidden flex flex-row justify-between items-center">
                            <button className="bg-kuning text-black font-sans py-[10px] px-[24px] rounded-full h-[40px] align-middle font-semibold">Unduh Aplikasi</button>
                            <button className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
                                <ArrowUp />
                            </button>
                        </div>
                        <div className=" flex flex-row justify-between items-center">
                            <p className="font-normal font-sans text-[14px] text-white/60 mt-auto block">&copy; 2023 - Copyright</p>
                        </div>
                        <div></div>
                        <div className="flex justify-end">
                            <button className="hidden lg:flex items-center justify-center h-12 w-12 rounded-full bg-white">
                                <ArrowUp />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default FooterMyAcademy