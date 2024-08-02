'use client'
import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { useState, useEffect } from 'react'
import { Image } from "@nextui-org/image"

import { formattedDate, formattedTime } from '@/helpers/formattedDate'
const CardComingSoon = ({ bgcard, training }) => {
    const [detailTraining, setDetailTraining] = useState({})
    const [materials, setMaterials] = useState([])
    const [detailExam, setDetailExam] = useState({})
    // const [getMaterial, setGetMaterial] = useState(null)
    useEffect(() => {
        setDetailTraining(training)
        setMaterials(training.materials || [])
        setDetailExam(training.exam || {})
        // setGetMaterial(training.materials)
        console.log('ini training', training)
    }, [training])
    // useEffect(() => {

    // }, [detailTraining])
    // useEffect(() => {
    //     console.log('ini materi', getMaterial)
    // }, [getMaterial])
    // const [dataMaterial] =getMaterial
    // console.log(dataMaterial)
    // const [getMaterial] = detailTraining.materials
    return (
        <>
            {detailTraining &&
                <Card className={`flex flex-col ${bgcard} pt-2 lg:pt-8 gap-y-[10px] lg:gap-y-[32px]`}>
                    <div className="flex-1 flex flex-col gap-y-[4px] w-[90%] mx-auto">
                        <span className="text-zinc text-roboto text-[8px] lg:text-xs font-bold">NEW</span>
                        <h3 className="text-zinc text-roboto font-medium text-xs lg:text-2xl">{detailTraining.trainingName}</h3>
                        {/* <h3 className="text-zinc text-roboto font-medium text-xs lg:text-2xl">Workshop Kecantikan Alami</h3> */}
                        <p className="font-sans text-[8px] lg:text-sm font-normal">
                            {detailTraining.description}
                            {/* Pelajari teknik kecantikan alami menggunakan bahan-bahan organik dan metode tradisional. */}
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="min-h-[172px] w-4/5  items-center mx-auto">
                            <Image
                                alt="tes"
                                // src="/images/fef.jpg"
                                src={materials.length > 0 ? materials[0].banner : '/images/fef.jpg'}
                                width={'100%'}
                                height={480}
                                className="rounded-[8px] object-cover"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[90%] mx-auto my-[24px]">
                            <div className="text-[8px] lg:text-sm">
                                <p>{formattedDate(detailTraining.dateStart)}</p>
                                <p>{formattedTime(detailTraining.dateStart, detailTraining.dateFinish)}</p>
                            </div>
                            {new Date(detailExam.dateFinish) <= new Date() ? (
                                <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/Myacademy/material/${detailTraining.trainingId}`}>Lihat Acara</Button>
                            ) : (
                                <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/Myacademy/material/${detailTraining.trainingId}`}>Daftar Acara</Button>
                            )}
                            {/* <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/Myacademy/material/${detailTraining.trainingId}`}>Daftar Acara</Button> */}
                            {/* {detailTraining.materials.map((material, index)=>(
                                <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/MyacademyTes/material/${material.materialId}`} key={index}>Daftar Acara</Button>
                            ))} */}
                        </div>
                    </div>
                </Card>}
        </>
    )
}
export default CardComingSoon