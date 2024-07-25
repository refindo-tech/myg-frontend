'use client'
import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { useState, useEffect } from 'react'

import formattedDate from '@/helpers/formattedDate'
const CardComingSoon = ({ bgcard, training }) => {
    const [detailTraining, setDetailTraining] = useState(null)
    // const [getMaterial, setGetMaterial] = useState(null)
    useEffect(() => {
        setDetailTraining(training)
        // setGetMaterial(training.materials)
        console.log('ini training', training)
    }, [training])
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
                        <div className="min-h-[172px] w-4/5 bg-gray-100 mx-auto">
                            p anj
                        </div>
                        <div className="flex flex-row items-center justify-between w-[90%] mx-auto my-[24px]">
                            <div className="text-[8px] lg:text-sm">
                                <p>{formattedDate(detailTraining.dateTraining)}</p>
                                <p>10:00 - 12:00 WIB</p>
                            </div>
                            <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/MyacademyTes/material/${detailTraining.trainingId}`}>Daftar Acara</Button>
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