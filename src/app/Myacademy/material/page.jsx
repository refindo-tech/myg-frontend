'use client'
import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/button"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import Footer from "@/components/MyAcademyComponent/Footer"
import FooterMyAcademy from "@/components/MyAcademyComponent/FooterMyAcademy"
import CardComingSoonEvent from "@/components/MyAcademyComponent/CardComingSoon"
import { getPastTraining, getRecommendationTraining } from '@/helpers/fetchAPI'
import ComingSoonEvent from '@/components/MyAcademyComponent/ComingSoonEvent'
import Link from "next/link"
const Material = () => {
    const [listTraining, setListTraining] = useState(null)
    const [listPastTraining, setListPastTraining] = useState(null)
    const [material, setMaterial] = useState([])
    const [openListSoonTraining, setOpenListSoonTraining] = useState(true)
    const [openListPastTraining, setOpenListPastTraining] = useState(false)
    const handleOpenListSoonTraining = () => {
        setOpenListPastTraining(false)
        setOpenListSoonTraining(true)
    }
    const handleOpenListPastTraining = () => {
        setOpenListSoonTraining(false)
        setOpenListPastTraining(true)
    }
    useEffect(() => {
        const fetchData = async () => {
            // const response = await getListMaterial()
            // if(response){
            //     console.log('response list material',response)
            //     setMaterial(response.results)
            // }
            const responseTraining = await getRecommendationTraining(4)
            if (responseTraining) {
                setListTraining(responseTraining.results)
            }
            const responsePastTraining = await getPastTraining(4)
            if (responsePastTraining) {
                setListPastTraining(responsePastTraining.results)
            }
        }
        fetchData()
    }, [])
    console.log('ini material', material)
    return (
        <>
            <NavbarMyAcademy color={'zinc'} />
            {/*gap-3  lg:gap-y-[60px] */}
            <div className="w-[90%] lg:container mx-auto flex flex-col min-h-screen pt-[92px] mb-[50px]">
                <div className="flex flex-col gap-3 lg:gap-y-[30px]">
                    <h3 className="text-[48px] font-playfair font-bold text-active lg:text-abumuda">Daftar Acara</h3>
                    <div className="flex flex-row gap-x-[12px]">
                        <Button
                            variant="solid"
                            size="md"
                            onClick={() => handleOpenListSoonTraining()}
                            className={`font-semibold text-[16px] font-sans ${openListSoonTraining ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'}`}>
                            Sedang diadakan
                        </Button>
                        <Button
                            variant="solid"
                            size="md"
                            onClick={() => handleOpenListPastTraining()}
                            className={`font-semibold text-[16px] font-sans ${openListPastTraining ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'}`}>
                            Sudah diadakan
                        </Button>
                    </div>
                </div>
                {openListSoonTraining &&
                    <ComingSoonEvent bgcard={'bg-white'} listTraining={listTraining} />
                    // <div className=" container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-y-[40px] lg:gap-x-[24px]">
                    //     {/* <CardComingSoonEvent bgcard={'bg-white'} material={material}/> */}
                    //     {/* <CardComingSoonEvent />
                    //     <CardComingSoonEvent />
                    //     <CardComingSoonEvent />
                    //     <CardComingSoonEvent />
                    //     <CardComingSoonEvent />
                    //     <CardComingSoonEvent />
                    //     <CardComingSoonEvent /> */}
                    // </div>
                }
                {openListPastTraining &&
                    <ComingSoonEvent bgcard={'bg-white'} listTraining={listPastTraining} />
                    // <div className=" container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-y-[40px] lg:gap-x-[24px]">
                    //     <CardComingSoonEvent />
                    // <CardComingSoonEvent />
                    // <CardComingSoonEvent />
                    // <CardComingSoonEvent />
                    // <CardComingSoonEvent />
                    // <CardComingSoonEvent />
                    // <CardComingSoonEvent />
                    // <CardComingSoonEvent />
                    // </div>
                }
            </div>
            <Footer/>
            {/* <FooterMyAcademy /> */}
        </>
    )
}
export default Material