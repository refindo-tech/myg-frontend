'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import { getDetailTraining } from '@/helpers/fetchAPI'
import { formatRupiah } from '@/helpers/formatRupiah'
import { formattedDateAndDay } from '@/helpers/formattedDate'
import icons from "@/components/icons/icon"
import Image from 'next/image'
const Payment = () => {
    const pathname = usePathname()
    const idTraining = pathname.split('/')
    const [detailTraining, setDetailTraining] = useState({})
    const [petunjukATM, setPetunjukATM] = useState(false)
    const [petunjukmBanking, setPetunjukmBanking] = useState(false)
    useEffect(() => {
        const fetchInit = async () => {
            const data = await getDetailTraining(idTraining[3])
            if (data) {
                setDetailTraining(data.results)
            }
        }
        fetchInit()
    }, [idTraining])
    console.log(detailTraining)
    const { ChevronDown, ChevronUp } = icons
    const handlePetunjukATM = () => {
        setPetunjukATM(!petunjukATM)
    }
    const handlePetunjukmBanking = () => {
        setPetunjukmBanking(!petunjukmBanking)
    }
    return (
        <div className="w-full bg-birumuda min-h-screen flex items-center justify-center px-[10px] mt-[60px] lg:mt-[92px]">
            <NavbarMyAcademy className='shadow-xl' />
            <div className="w-full lg:w-[50%] flex flex-col items-center gap-9 pt-24 lg:pt-32 transition-all duration-500">
                <div className="text-abumuda font-playfair text-center font-semibold">
                    <h3 className="text-3xl text-active">Daftar Acara My Academy</h3>
                    <p className="text-sm">Lengkapi data berikut untuk melanjutkan pendaftaran</p>
                </div>
                <div className="bg-white w-full rounded-xl min-h-screen flex items-center py-8">
                    <div className="min-h-[90%] w-[90%] mx-auto rounded-xl bg-birumuda flex flex-col gap-6 py-5">
                        <div className="flex flex-col gap-3 text-center w-[90%] mx-auto">
                            <h3 className="font-sans text-xl font-semibold text-black">Pendaftaran Sedang Diproses</h3>
                            <p className="text-base">{`${formattedDateAndDay(detailTraining.dateStart)}`}</p>
                            <p className="text-base">
                                Selanjutnya Anda dapat melakukan <span className="font-bold">{`Book Seat ${detailTraining.trainingName}`}</span> melalui pembayaran berikut
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="text-start text-base font-semibold indent-3">Rekening Tujuan</p>
                                <div className="bg-white p-3 rounded-xl flex flex-row items-center justify-between px-3 h-[78px]">
                                    <p className="text-zinc text-base font-semibold">A.N. Mia Fahmiani</p>
                                    {/* <p>logo</p> */}
                                    <Image
                                        alt='BCA Logo'
                                        src={'/images/bca.png'}
                                        width={100}
                                        height={40}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto flex flex-col rounded-2xl bg-white">
                            <h3 className="text-center text-2xl font-bold font-sans p-7">Rp. 1.000.000,00</h3>
                            <div className="flex flex-col gap-4 text-xl font-semibold p-3">
                                <h3 className="text-zinc font-sans">Nomor Rekening</h3>
                                <h3 className="text-active font-sans">5420326969</h3>
                            </div>
                            <div className="flex flex-col gap-5 text-zinc p-3">
                                <h3 className="text-xl font-bold">Sisa Pembayaran</h3>
                                <p className="text-sm">Sisa pembayaran akan diinformasikan via WhatsApp</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-row justify-between items-center text-zinc text-sm">
                                        <p className="truncate pr-3">{`Harga Workshop ${detailTraining.trainingName}`}</p>
                                        <p className="font-bold min-w-[90px] ">{`${formatRupiah(detailTraining.price)}`}</p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center text-zinc text-sm">
                                        <p>Book Seat</p>
                                        <p className="font-bold">{`Rp. 1.000.000,00`}</p>
                                    </div>
                                    <div className="border-t-1 border-zinc"></div>
                                </div>
                                <div className="flex flex-row justify-between text-sm lg:text-lg font-bold text-zinc">
                                    <p>Sisa Pembayaran</p>
                                    <p>{`${formatRupiah(detailTraining.price - 1000000)}`}</p>
                                </div>
                                <Button as={Link} href={'https://wa.me/6281314485552'} type="solid" color='primary' className='h-12 px-3 w-full'>Kirim bukti pembayaran</Button>
                                <div className="flex flex-col gap-4">
                                    <div className='flex flex-col gap-3'>
                                        <div className="flex flex-row justify-between text-base text-zinc">
                                            <p className="text-zinc font-semibold">Petunjuk transfer ATM</p>
                                            {petunjukATM ? (
                                                <>
                                                    <ChevronUp onClick={handlePetunjukATM} className='hover:cursor-pointer w-6 h-6' />
                                                </>) : (
                                                <>
                                                    <ChevronDown onClick={handlePetunjukATM} className='hover:cursor-pointer w-6 h-6' />
                                                </>)}
                                        </div>
                                        {petunjukATM &&
                                            <div className='pl-6'>
                                                <ol className='list-disc'>
                                                    <li>{`Pilih 'Transaksi' > 'Transfer' > Ke Rekening 'BCA'`}</li>
                                                    <li>Masukkan nomor rekening yang tertera</li>
                                                    <li>Foto atau Screenshoot bukti transfer</li>
                                                    <li>Konfirmasi sudah transfer dengan mengirim bukti transfer ke WA +6281314485552</li>
                                                </ol>
                                            </div>
                                        }
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className="flex flex-row justify-between text-base text-zinc">
                                            <p className="text-zinc font-semibold">Petunjuk transfer m-Banking</p>
                                            {petunjukmBanking ? (
                                                <>
                                                    <ChevronUp onClick={handlePetunjukmBanking} className='hover:cursor-pointer w-6 h-6' />
                                                </>) : (
                                                <>
                                                    <ChevronDown onClick={handlePetunjukmBanking} className='hover:cursor-pointer w-6 h-6' />
                                                </>)}
                                        </div>
                                        {petunjukmBanking &&
                                            <div className='pl-6'>
                                                <ol className='list-disc'>
                                                    <li>{`Pilih 'Transaksi' > 'Transfer' > Ke Rekening 'BCA'`}</li>
                                                    <li>Masukkan nomor rekening yang tertera</li>
                                                    <li>Foto atau Screenshoot bukti transfer</li>
                                                    <li>Konfirmasi sudah transfer dengan mengirim bukti transfer ke WA +6281314485552</li>
                                                </ol>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-6">
                            {/* <Button variant="bordered" color='primary' className='h-12 px-3 w-[50%] mx-auto'>Detail Pendaftaran</Button> */}
                            <Button as={Link} href='/Myacademy' variant="bordered" color='primary' className='h-12 px-3 w-[50%] mx-auto'>Kembali ke Beranda</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment