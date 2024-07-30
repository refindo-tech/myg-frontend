'use client'
import { useState, useEffect } from 'react'
import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import NavbarAcademy from '@/components/MyAcademyComponent/NavbarMyAcademy'
import { getDetailTraining, getDetailMateri } from "@/helpers/fetchAPI"
import { usePathname } from 'next/navigation'
import { formattedDateAndDay } from '@/helpers/formattedDate'

const ViewMaterial = () => {
    const pathname = usePathname()
    const idTraining = pathname.split('/').pop()
    const [dataTraining, setDataTraining] = useState({})
    const [dataMateri, setDataMateri] = useState({})
    useEffect(() => {
        if (idTraining) {
            const fetchData = async () => {
                const responseTraining = await getDetailTraining(idTraining)
                console.log('ini responseTraining', responseTraining)
                if (responseTraining) {
                    setDataTraining(responseTraining.results)
                }
                const responseMateri = await getDetailMateri(idTraining)
                if (responseMateri) {
                    setDataMateri(responseMateri.results)
                }
            }
            fetchData()
        }
    }, [idTraining])
    console.log('data traininggg', dataTraining)
    return (
        <>
            {/* <div className='bg-white shadow-xl'>
                <NavbarAcademy />
            </div> */}
            <div className="relative top-0 left-0 bg-white h-[60px] lg:h-[92px] shadow-xl">
                <NavbarAcademy />
            </div>
            <div className="w-full bg-gray-200 py-[60px]">
                <Card className="min-h-screen container mx-auto py-[44px] flex flex-col gap-y-[44px] ">
                    <div className="w-[90%] mx-auto">
                        <h3 className="font-semibold font-playfair text-[36px] text-biru">{`${dataTraining.trainingName}`}</h3>
                        {/* <p className="font-sans text-[18px] font-normal text-stone-900 mt-[10px]">Saturday, July 14, 2024 at 10:00 WIB</p> */}
                        <p className="font-sans text-[18px] font-normal text-stone-900 mt-[10px]">{formattedDateAndDay(dataTraining.dateStart)}</p>
                    </div>
                    {!dataMateri.youtubeVideo && !dataMateri.youtubeVideo == '' &&
                        (<div className="w-[90%] mx-auto ">
                            <iframe src="https://www.youtube-nocookie.com/embed/Ht83QKbvO6c" width="100%" height={500} className="rounded-lg" />
                        </div>)
                    }
                    {!dataMateri.ebook && !dataMateri.ebook == '' && (
                        <div className="w-[90%] mx-auto flex flex-row gap-x-[20px]">
                            <Card className="min-h-[30vh] sm:w-[50%] lg:w-[30%] py-3">
                                <h4 className="text-zinc text-roboto font-medium text-[24px] w-[90%] mx-auto my-3 text-center">Workshop Kecantikan Alami</h4>
                                <div className="w-[100px] mx-auto">
                                    <Image
                                        alt="pdflogo"
                                        src="/images/pdf.png"
                                        width={100}
                                        className="mx-auto"
                                    />
                                </div>
                                <div className="flex justify-end p-3">
                                    <Button color="primary" variant="solid" size="sm">Download</Button>
                                </div>
                            </Card>
                            <Card className="min-h-[30vh] sm:w-[50%] lg:w-[30%] py-3">
                                <h4 className="text-zinc text-roboto font-medium text-[24px] w-[90%] mx-auto my-3 text-center">Workshop Kecantikan Alami</h4>
                                <div className="w-[100px] mx-auto h-[134px] flex items-center">
                                    <Image
                                        alt="pptlogo"
                                        src="/images/ppt.png"
                                        width={100}
                                        className="mx-auto"
                                    />
                                </div>
                                <div className="flex justify-end p-3">
                                    <Button color="primary" variant="solid" size="sm">Download</Button>
                                </div>
                            </Card>
                        </div>
                    )}
                </Card>
            </div>
        </>

    )
}
export default ViewMaterial