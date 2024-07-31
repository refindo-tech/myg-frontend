"use client"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import FooterMyAcademy from "@/components/MyAcademyComponent/FooterMyAcademy"
import Promotion from "@/components/MyAcademyComponent/Promotion"
import Review from "@/components/MyAcademyComponent/Review"
import RecommendationEvent from "@/components/MyAcademyComponent/RecommendationEvent"
import ComingSoonEvent from "@/components/MyAcademyComponent/ComingSoonEvent"
import ContainerExam from '@/components/MyAcademyComponent/ContainerExam'
import Link from "next/link"
import FAQMyAcademy from '@/components/MyAcademyComponent/FAQMyAcademy'
import { Image } from "@nextui-org/image"
import { getRecommendationTraining, getRecommendationExam } from "@/helpers/fetchAPI"
import { useState, useEffect } from "react"
const MyAcademyTes = () => {
    const [listTraining, setListTraining] = useState(null)
    const [listExam, setListExam] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const responseTraining = await getRecommendationTraining(4)
            if (responseTraining) {
                setListTraining(responseTraining.results)
            }
            const responseExam = await getRecommendationExam(4)
            if (responseExam) {
                setListExam(responseExam.results)
            }
        }
        fetchData()
    }, [])
    // useEffect(()=>{
    //     console.log(listMaterial)
    // },[listMaterial])
    return (
        <>
            <NavbarMyAcademy color={'white'} />
            <div className="min-h-[50vh] lg:min-h-screen grid sm:grid-cols-1 lg:grid-cols-2 w-full bg-[url('/images/bghomemyacademy.png')] bg-no-repeat lg:bg-cover md:bg-left lg:bg-center">
                <div className="flex flex-wrap h-full items-center text-wrap bg-gradient-to-b lg:bg-gradient-to-r from-birumuda from-60% to-transparent pt-[92px]">
                    <div className="w-[90%] md:w-[60%] mx-auto flex flex-col gap-3 lg:gap-12 pt-9">
                        <h3 className="font-playfair text-xl lg:text-5xl font-bold text-active lg:text-black">Raih Kecantikan Sejati Bersama My Academy, My Beauty Wellness</h3>
                        <p className="font-sans text-xs lg:text-lg font-normal">Temukan rahasia kecantikan dan kesehatan melalui program pelatihan eksklusif kami. Bergabunglah dengan komunitas kami dan mulai perjalanan Anda menuju kesejahteraan yang lebih baik.</p>
                        <Link href={'/MyacademyTes/material'} className="h-4 lg:h-12 bg-primary-500 lg:bg-active text-white flex items-center justify-center lg:px-3 font-semibold rounded-lg w-20 lg:w-36 text-[8px] lg:text-sm">Lihat acara kami</Link>
                    </div>
                    <div className="w-full flex justify-end md:w-full lg:hidden">
                        <Image
                            alt='heroteacher'
                            src='/images/heroteachercopy.png'
                        />
                    </div>
                </div>
            </div>
            <ComingSoonEvent bgcard={'bg-birumuda'} title={'Daftar Acara'} listTraining={listTraining} />
            <RecommendationEvent />
            <ContainerExam bgcard={'bg-birumuda'} title={'Daftar Ujian'} listExam={listExam} />
            <div className="hidden lg:block mb-[60px]">
                <Promotion />
                <Review />
            </div>
            <FAQMyAcademy />
            <FooterMyAcademy />
        </>
    )
}
export default MyAcademyTes