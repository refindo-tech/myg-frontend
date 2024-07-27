"use client"
import {useState, useEffect} from 'react'
import { usePathname } from "next/navigation"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import ViewMaterial from "@/components/MyAcademyComponent/ViewMaterial"
import DetailComingSoonEvent from "@/components/MyAcademyComponent/DetailComingSoonEvent"
import {getDetailTraining,getRecommendationTraining} from '@/helpers/fetchAPI'
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
    const [listTraining, setListTraining]=useState(null)
    useEffect(()=>{
        const fetchListTraining = async()=>{
            const response=await getRecommendationTraining(4)
            if(response){
                setListTraining(response.results)
            }
        }
        fetchListTraining()
    },[])
    return(
        <>
            {/* <NavbarMyAcademy/> */}
                {detailTraining&&detailTraining.type === 'past' &&
                    (<ViewMaterial/>)
                }
                {detailTraining&&detailTraining.type === 'soon' &&
                    (<DetailComingSoonEvent detailTraining={detailTraining} listRecommendationTraining={listTraining}/>)
                }
        </>
    )
}
export default DetailMaterial