"use client"
import {useState, useEffect} from 'react'
import { usePathname } from "next/navigation"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import ViewMaterial from "@/components/MyAcademyComponent/ViewMaterial"
import DetailComingSoonEvent from "@/components/MyAcademyComponent/DetailComingSoonEvent"
import {getDetailTraining} from '@/helpers/fetchAPI'
const DetailMaterial = () =>{
    const pathname = usePathname()
    const idTraining = pathname.split('/').pop()
    const [detailTraining, setDetailTraining] = useState({})
    useEffect(()=>{
        const fetchInit = async()=>{
            const data = await getDetailTraining(idTraining)
            if(data){
                setDetailTraining(data.results)
            }
        }
        fetchInit()
    },[idTraining])
    console.log(detailTraining)
    return(
        <>
            {/* <NavbarMyAcademy/> */}
                {detailTraining&&detailTraining.type === 'past' &&
                    (<ViewMaterial/>)
                }
                {detailTraining&&detailTraining.type === 'soon' &&
                    (<DetailComingSoonEvent/>)
                }
        </>
    )
}
export default DetailMaterial