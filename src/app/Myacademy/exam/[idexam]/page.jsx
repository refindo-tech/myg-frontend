"use client"
import {useState, useEffect} from 'react'
import { usePathname } from "next/navigation"
import NavbarMyAcademy from "@/components/MyAcademyComponent/NavbarMyAcademy"
import ViewMaterial from "@/components/MyAcademyComponent/ViewMaterial"
import DetailComingSoonEvent from "@/components/MyAcademyComponent/DetailComingSoonEvent"
import DetailExam from '@/components/MyAcademyComponent/DetailExam'
import {getDetailTraining,getDetailExam, getRecommendationExam} from '@/helpers/fetchAPI'
const DetailExamPage = () =>{
    const pathname = usePathname()
    const idExam = pathname.split('/').pop()
    const [detailExam, setDetailExam] = useState({})
    useEffect(()=>{
        const fetchInit = async()=>{
            const data = await getDetailExam(idExam)
            if(data){
                setDetailExam(data.results)
            }
        }
        fetchInit()
    },[idExam])
    const [listExam, setListExam]=useState(null)
    useEffect(()=>{
        const fetchListExam = async()=>{
            const response=await getRecommendationExam(4)
            if(response){
                setListExam(response.results)
            }
        }
        fetchListExam()
    },[])
    console.log(detailExam)
    return(
        <>
            {/* <NavbarMyAcademy/> */}
                {detailExam&&detailExam.type === 'past' &&
                    (<ViewMaterial/>)
                }
                {detailExam&&detailExam.type === 'soon' &&
                    (<DetailExam detailExam={detailExam} listRecommendationExam={listExam}/>)
                }
        </>
    )
}
export default DetailExamPage