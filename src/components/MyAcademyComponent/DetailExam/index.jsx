'use client'
import { Image } from "@nextui-org/image"
import ContainerExam from "@/components/MyAcademyComponent//ContainerExam"
import Footer from "@/components/MyAcademyComponent/Footer"
import FooterMyAcademy from "@/components/MyAcademyComponent/FooterMyAcademy"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import Review from '@/components/MyAcademyComponent/Review'
import FAQAcademy from "@/components/MyAcademyComponent/FAQMyAcademy"
import { Button } from '@nextui-org/button'
import { Link } from "@nextui-org/link"
import icons from '@/components/icons/icon'
import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation"
import { formattedDate, formattedDateAndDay, formattedTime } from "@/helpers/formattedDate"
import { formatRupiah } from "@/helpers/formatRupiah"
const DetailExam = ({ detailExam, listRecommendationExam }) => {
    const pathname = usePathname()
    const { CloudIcon, CollectionIcon } = icons
    const [data, setData] = useState({})
    useEffect(() => {
        setData(detailExam)
    }, [detailExam])
    console.log('ini dataaa', data)
    return (
        <>
            {data &&
                <div>
                    <div className="relative top-0 left-0">
                        <NavbarMyAcademy color={'white'} />
                        <div className=" h-[60vh] lg:h-screen flex items-center justify-center bg-[url('/images/bg-detailcomingsoon.png')] backdrop-contrast-0 bg-cover bg-center bg-no-repeat w-full px-[5%] lg:pt-0">
                            <div className="lg:grid lg:grid-cols-2 flex flex-col  container gap-y-3 mt-[200px] lg:mt-[100px]">
                                <div className="flex flex-col lg:gap-12 gap-3 max-w-[580px] sm:min-h-[15vh] md:min-h-[15vh] justify-center">
                                    <h3 className="font-playfair text-white text-xl lg:text-5xl font-medium">{data.title}</h3>
                                    <p className="font-sans font-normal lg:text-lg text-xs text-white">
                                        {/* Pelajari teknik kecantikan alami menggunakan bahan-bahan organik dan metode tradisional. */}
                                        {detailExam.description}
                                    </p>
                                    <Button
                                    as={Link}
                                    href={`${data.linkMaps}`}
                                    className=" w-fit px-3 flex flex-row gap-3 justify-center h-5 lg:h-12 items-center rounded-lg text-white bg-[#06ADFE] hover:text-opacity-75 hover:cursor-pointer">
                                        <div className="h-5 w-5 hidden lg:block">
                                            <CloudIcon />
                                        </div>
                                        <span className='text-xs lg:text-lg'>View in maps</span>
                                    </Button>
                                </div>
                                <div className="rounded-xl bg-white w-full md:w-[60%] py-[30px] gap-6 shadow-2xl lg:shadow-none mx-auto">
                                    <div className="w-[90%] mx-auto flex flex-col gap-3">
                                        <h3 className="font-playfair text-black text-3xl lg:text-5xl font-bold">Date & Time</h3>
                                        <p className="font-sans font-normal text-xs lg:text-lg">
                                            {formattedDateAndDay(detailExam.dateStart)}
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            {/* <button className="flex flex-row items-center h-12 gap-2 rounded-lg border-2 border-active justify-center">
                                        <CollectionIcon />
                                        <p className="font-sans text-xs lg:text-sm text-active font-semibold">Add to Collection</p>
                                    </button> */}
                                            <Button
                                                as={Link}
                                                href={`${pathname}/payment`}
                                                className="flex flex-row items-center h-12 rounded-lg bg-active justify-center text-white">
                                                <p className="font-sans text-xs lg:text-sm font-semibold">Daftar</p>
                                            </Button>
                                            <div className="flex flex-row items-center h-12 rounded-lg justify-center text-black">
                                                <p className="font-sans text-xs lg:text-sm font-semibold">No Refund</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full">
                        <div className="container mx-auto my-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-y-6">
                            <div className="w-[90%] mx-auto flex flex-col gap-y-6">
                                <div className="flex flex-col gap-y-3">
                                    <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Deskripsi Acara</h3>
                                    <p className="font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                        {data.description}
                                    </p>
                                </div>
                                {/* <div className="flex flex-col gap-y-3">
                                    <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Agenda Acara</h3>
                                    <div className="pl-6 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                        <ol className="list-disc">
                                            <li>
                                                <p>10:00 - 10:15: Pembukaan dan pengenalan</p>
                                                <div className="pl-11 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                                    <ol className="list-disc">
                                                        <li>Selamat datang dan perkenalan dengan instruktur.</li>
                                                        <li>Gambaran umum tentang workshop dan tujuan.</li>
                                                    </ol>
                                                </div>
                                            </li>
                                            <li>
                                                <p>10:15 - 11:00: Pembuatan produk kecantikan alami</p>
                                                <div className="pl-11 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                                    <ol className="list-disc">
                                                        <li>Demonstrasi cara membuat masker wajah alami.</li>
                                                        <li>Panduan membuat scrub tubuh dengan bahan bahan organik.</li>
                                                        <li>Sesi tanya jawab interaktif.</li>
                                                    </ol>
                                                </div>
                                            </li>
                                            <li>
                                                <p>11:00 - 11:15: Istirahat</p>
                                                <div className="pl-11 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                                    <ol className="list-disc">
                                                        <li>Waktu untuk beristirahat sejenak dan menikmati refreshment yang sudah disiapkan</li>
                                                    </ol>
                                                </div>
                                            </li>
                                            <li>
                                                <p>11:15 - 11:45: Tips perawatan kulit dan rambut</p>
                                                <div className="pl-11 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                                    <ol className="list-disc">
                                                        <li>Teknik perawatan kulit dengan bahan alami.</li>
                                                        <li>Rekomendasi perawatan rambut untuk berbagai jenis rambut.</li>
                                                    </ol>
                                                </div>
                                            </li>
                                            <li>
                                                <p>11:45 - 12:00: Penutupan dan Networking</p>
                                                <div className="pl-11 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                                    <ol className="list-disc">
                                                        <li>Ringkasan materi yang telah dipelajari.</li>
                                                        <li>Kesempatan untuk berinteraksi dengan instruktur dan peserta lainnya.</li>
                                                    </ol>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div> */}
                                <div className="flex flex-col gap-y-3">
                                    <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Lokasi dan Tanggal</h3>
                                    <div>
                                        <p className="font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                            Tanggal: <span className="font-sans text-xs lg:text-xl font-bold text-abumuda text-wrap">{formattedDate(data.dateStart)}</span>
                                        </p>
                                        <p className="font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                            Waktu: <span className="font-sans text-xs lg:text-xl font-bold text-abumuda text-wrap">{formattedTime(data.dateStart, data.dateFinish)}</span>
                                        </p>
                                        <div className="font-sans text-xs lg:text-xl font-normal flex flex-row text-abumuda text-wrap">
                                            <p>Lokasi:</p> 
                                            <p className="pl-3 font-sans text-xs lg:text-xl font-bold text-abumuda text-wrap">{`${data.address}`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Cara Mendaftar</h3>
                                    <div className="pl-6">
                                        <ol className="list-decimal font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                            <li>Klik tombol &apos;Daftar Sekarang&apos; di halaman acara.</li>
                                            <li>isi formulir pendaftaran dengan data lengkap Anda.</li>
                                            <li>{`Pilih sesi '${data.title}'.`} </li>
                                            <li>Lakukan pembayaran sesuai dengan instruksi yang diberikan.</li>
                                            <li>Konfirmasi pendaftaran Anda melalui email yang akan diberikan setelah pembayaran.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Pertanyaan dan Kontak</h3>
                                    <div>
                                        <p className="font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">Pertanyaan dan Kontak:</p>
                                        <p className="font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">Untuk pertanyaan lebih lanjut Anda dapat menghubugi kontak kami di:</p>
                                        <div className="pl-6">
                                            <ol className="list-disc font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                                <li>Email: <span className="font-sans text-xs lg:text-xl font-bold text-abumuda text-wrap">info@beautyacademy.com</span></li>
                                                <li>Telepon: <span className="font-sans text-xs lg:text-xl font-bold text-abumuda text-wrap">(081) 314-485-552</span></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[90%] flex flex-col mx-auto gap-y-6">
                                <Image
                                    alt="brosur"
                                    src={`${data.brosur}`}
                                    width={'100%'}
                                />
                                <div className="flex flex-col gap-y-3 w-[70%]">
                                    <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Biaya Pendaftaran</h3>
                                    <h3 className="font-bold font-sans text-2xl lg:text-3xl py-2 px-7 rounded-lg bg-active text-white text-center">{formatRupiah(data.price)}</h3>
                                </div>
                                <div className="flex flex-col gap-y-3 lg:gap-y-7">
                                    <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Lokasi Acara</h3>
                                    <iframe src={`https://www.google.com/maps/embed?pb=${data.embedMaps}`} width={'100%'} height={300} style={{border:'0px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
                                    <p className="text-wrap font-sans text-xs lg:text-xl font-normal text-abumuda">
                                        {`${data.address}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-birumuda">
                            <ContainerExam bgcard={'bg-white'} title={'Daftar Acara Lainnya'} listExam={listRecommendationExam} />
                        </div>
                        <Review />
                        <FAQAcademy />
                        <Footer/>
                        {/* <FooterMyAcademy /> */}
                    </div>
                </div>}
        </>
    )
}
export default DetailExam