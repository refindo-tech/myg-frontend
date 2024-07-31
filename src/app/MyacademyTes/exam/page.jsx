'use client'
import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/button"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import FooterMyAcademy from "@/components/MyAcademyComponent/FooterMyAcademy"
import CardComingSoonEvent from "@/components/MyAcademyComponent/CardComingSoon"
import { getPastTraining, getRecommendationTraining, getRecommendationExam, getPastExam} from '@/helpers/fetchAPI'
import ComingSoonEvent from '@/components/MyAcademyComponent/ComingSoonEvent'
import ContainerExam from '@/components/MyAcademyComponent/ContainerExam'
import Link from "next/link"
const ExamPage = () => {
    const [listExam, setListExam] = useState(null)
    const [listPastExam, setListPastExam] = useState(null)
    const [material, setMaterial] = useState([])
    const [openListSoonExam, setOpenListSoonExam] = useState(true)
    const [openListPastExam, setOpenListPastExam] = useState(false)
    const handleOpenListSoonExam = () => {
        setOpenListPastExam(false)
        setOpenListSoonExam(true)
    }
    const handleOpenListPastExam = () => {
        setOpenListSoonExam(false)
        setOpenListPastExam(true)
    }
    useEffect(() => {
        const fetchData = async () => {
            // const response = await getListMaterial()
            // if(response){
            //     console.log('response list material',response)
            //     setMaterial(response.results)
            // }
            const responseSoonExam = await getRecommendationExam(4)
            if (responseSoonExam) {
                setListExam(responseSoonExam.results)
            }
            const responsePastExam = await getPastExam(4)
            if (responsePastExam) {
                setListPastExam(responsePastExam.results)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <NavbarMyAcademy color={'zinc'} />
            {/*gap-3  lg:gap-y-[60px] */}
            <div className="w-[90%] lg:container mx-auto flex flex-col min-h-screen pt-[92px] mb-[50px]">
                <div className="flex flex-col gap-3 lg:gap-y-[30px]">
                    <h3 className="text-[48px] font-playfair font-bold text-active lg:text-abumuda">Daftar Ujian</h3>
                    <div className="flex flex-row gap-x-[12px]">
                        <Button
                            variant="solid"
                            size="md"
                            onClick={() => handleOpenListSoonExam()}
                            className={`font-semibold text-[16px] font-sans ${openListSoonExam ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'}`}>
                            Sedang diadakan
                        </Button>
                        <Button
                            variant="solid"
                            size="md"
                            onClick={() => handleOpenListPastExam()}
                            className={`font-semibold text-[16px] font-sans ${openListPastExam ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'}`}>
                            Sudah diadakan
                        </Button>
                    </div>
                </div>
                {openListSoonExam &&
                    // <ComingSoonEvent bgcard={'bg-white'} listTraining={listTraining} />
                    <ContainerExam bgcard={'bg-white'} listExam={listExam} />
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
                {openListPastExam &&
                    // <ComingSoonEvent bgcard={'bg-white'} listTraining={listPastTraining} />
                    <ContainerExam bgcard={'bg-white'} listExam={listPastExam} />
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
            <FooterMyAcademy />
        </>
    )
}
export default ExamPage