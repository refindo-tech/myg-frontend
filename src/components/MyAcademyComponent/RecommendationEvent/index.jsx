'use client'
import { useEffect, useState } from 'react'
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import icons from "@/components/icons/icon"
import formattedDate from '@/helpers/formattedDate'
import { getRecommendationTraining } from '@/helpers/fetchAPI'
const RecommendationEvent = () => {
    const { PlaceIcon, CalendarIcon } = icons
    const [dataRecommendation, setDataRecommendation] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const data = await getRecommendationTraining(1)
            if (data) {
                console.log(data)
                const [trainingData] = data.results
                setDataRecommendation(trainingData)
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        console.log('ini data recommendation', dataRecommendation)
    }, [dataRecommendation])
    // const formattedDate = (date)=>{
    //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return new Date(date).toLocaleDateString('id-ID', options);
    // }
    return (
        <div className=" min-h-[480px] lg:min-h-[648px] lg:bg-birumuda flex items-center justify-center">
            <div className="w-[90%] lg:container flex flex-col gap-y-5 lg:gap-y-8">
                <h3 className="font-playfair text-biru lg:text-black lg:font-bold text-xl lg:text-5xl">Acara Pilihan Bulan Ini</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] gap-y-5 lg:gap-y-8 gap-x-[20px] items-center">
                    <Image
                        alt="Recommendation Event"
                        // width={700}
                        // height={440}
                        src="/images/recommendation_event.png"
                        className=""
                    />
                    <div className="flex flex-col gap-y-[12px] h-64 lg:h-[356px]">
                        <h3 className="font-playfair text-biru lg:text-black font-semibold text-xl lg:text-4xl text-wrap">{dataRecommendation.trainingName}</h3>
                        <p className="text-zinc text-xs lg:text-xl font-sans">
                            {dataRecommendation.description}
                        </p>
                        <div className="grid grid-cols-2 gap-[24px]">
                            <div className="flex flex-col gap-y-2 lg:gap-y-3">
                                <div className="flex flex-row items-center gap-[8px]">
                                    <PlaceIcon className="h-[18px] [w-18px] lg:h-[30px] lg:[w-30px] text-zinc" />
                                    <h4 className="font-playfair font-semibold text-xs lg:text-2xl text-zinc">Where</h4>
                                </div>
                                <p className="font-sans font-normal lg:font-semibold text-xs lg:text-xl text-zinc text-wrap">
                                    Gedung Kesenian Kemayoran, Kemayoran, Jakarta Pusat.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 lg:gap-y-3">
                                <div className="flex flex-row items-center gap-[8px]">
                                    <CalendarIcon className="h-[18px] [w-18px] lg:h-[30px] lg:[w-30px] text-zinc" />
                                    <h4 className="font-playfair font-semibold text-xs lg:text-2xl text-zinc">When</h4>
                                </div>
                                <div className="text-xs lg:text-xl">
                                    {dataRecommendation.dateTraining&&<p className="font-sans font-normal lg:font-semibold  text-zinc text-wrap">
                                        {/* 10-21 Juni 2024 */}
                                        {formattedDate(dataRecommendation.dateTraining)}
                                    </p>}
                                    <p className="font-sans font-normal lg:font-semibold  text-zinc text-wrap">
                                        10:00 - 12:00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button color="primary" variant="solid" size="md"
                            className="font-sans font-semibold border-[2px] text-[8px] lg:text-sm py-[12px] w-16 h-6 lg:w-[148px] lg:h-[48px]">
                            <span className="block lg:hidden">Daftar Acara</span>
                            <span className="hidden lg:block">Gabung Acara Ini</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecommendationEvent