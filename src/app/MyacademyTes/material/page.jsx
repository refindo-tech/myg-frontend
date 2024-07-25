'use client'
import {useState, useEffect} from 'react'
import { Button } from "@nextui-org/button"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import FooterMyAcademy from "@/components/MyAcademyComponent/FooterMyAcademy"
import CardComingSoonEvent from "@/components/MyAcademyComponent/CardComingSoon"
import {getListMaterial} from '@/helpers/fetchAPI'
import ComingSoonEvent from '@/components/MyAcademyComponent/ComingSoonEvent'
import Link from "next/link"
const Material = () => {
    const [material, setMaterial] = useState([])
    const [openListSoonMateri, setOpenListSoonMateri] = useState(true)
    const [openListPastMateri, setOpenListPastMateri] = useState(false)
    const handleOpenListSoonMateri = () =>{
        setOpenListPastMateri(false)
        setOpenListSoonMateri(true)
    }
    const handleOpenListPastMateri = () =>{
        setOpenListSoonMateri(false)
        setOpenListPastMateri(true)
    }
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await getListMaterial()
            if(response){
                console.log('response list material',response)
                setMaterial(response.results)
            }
        }
        fetchData()
    },[])
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
                        onClick={()=>handleOpenListSoonMateri()}
                        className={`font-semibold text-[16px] font-sans ${openListSoonMateri?'bg-primary-500 text-white':'bg-white text-primary-500'}`}>
                            Sedang diadakan
                        </Button>
                        <Button 
                        variant="solid" 
                        size="md" 
                        onClick={()=>handleOpenListPastMateri()}
                        className={`font-semibold text-[16px] font-sans ${openListPastMateri?'bg-primary-500 text-white':'bg-white text-primary-500'}`}>
                            Sudah diadakan
                        </Button>
                    </div>
                </div>
                {openListSoonMateri&&                    
                <ComingSoonEvent bgcard={'bg-white'} listMaterial={material}/>
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
                {openListPastMateri&&
                <div className=" container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-y-[40px] lg:gap-x-[24px]">
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                </div>}
            </div>
            <FooterMyAcademy />
        </>
    )
}
export default Material