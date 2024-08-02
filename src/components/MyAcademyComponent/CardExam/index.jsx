'use client'
import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { Image } from '@nextui-org/image'
import { useState, useEffect } from 'react'

import { formattedDate, formattedDateAndDay, formattedTime } from '@/helpers/formattedDate'
const CardExam = ({ bgcard, exam }) => {
    const [detailExam, setDetailExam] = useState(null)
    // const [getMaterial, setGetMaterial] = useState(null)
    useEffect(() => {
        setDetailExam(exam)
        // setGetMaterial(exam.materials)
        console.log('ini exam', exam)
    }, [exam])
    // useEffect(() => {
    //     console.log('ini materi', getMaterial)
    // }, [getMaterial])
    // const [dataMaterial] =getMaterial
    // console.log(dataMaterial)
    // const [getMaterial] = detailExam.materials
    return (
        <>
            {detailExam &&
                <Card className={`flex flex-col ${bgcard} pt-2 lg:pt-8 gap-y-[10px] lg:gap-y-[32px]`}>
                    <div className="flex-1 flex flex-col gap-y-[4px] w-[90%] mx-auto">
                        <span className="text-zinc text-roboto text-[8px] lg:text-xs font-bold">NEW</span>
                        <h3 className="text-zinc text-roboto font-medium text-xs lg:text-2xl">{detailExam.title}</h3>
                        {/* <h3 className="text-zinc text-roboto font-medium text-xs lg:text-2xl">Workshop Kecantikan Alami</h3> */}
                        <p className="font-sans text-[8px] lg:text-sm font-normal">
                            {detailExam.description}
                            {/* Pelajari teknik kecantikan alami menggunakan bahan-bahan organik dan metode tradisional. */}
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="w-4/5 flex items-center mx-auto">
                            <Image
                                alt="tes"
                                src={`${detailExam.banner}`}
                                width={'100%'}
                                height={172}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[90%] mx-auto my-[24px]">
                            <div className="text-[8px] lg:text-sm">
                                <p>{formattedDate(detailExam.dateStart)}</p>
                                <p>{formattedTime(detailExam.dateStart, detailExam.dateFinish)}</p>
                            </div>
                            {new Date(detailExam.dateFinish) <= new Date() ? (
                                <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/Myacademy/exam/${detailExam.examId}`}>Lihat Ujian</Button>
                            ) : (
                                <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/Myacademy/exam/${detailExam.examId}`}>Daftar Ujian</Button>
                            )}
                            {/* {detailExam.materials.map((material, index)=>(
                                <Button as={Link} color="primary" size="sm" className="text-[8px] lg:text-base" href={`/MyacademyTes/material/${material.materialId}`} key={index}>Daftar Acara</Button>
                            ))} */}
                        </div>
                    </div>
                </Card>}
        </>
    )
}
export default CardExam