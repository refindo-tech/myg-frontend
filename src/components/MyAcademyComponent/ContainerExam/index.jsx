'use client'
// import { Card } from "@nextui-org/card"
// import { Button } from "@nextui-org/button"
// import { Image } from "@nextui-org/image"
import CardExam from "@/components/MyAcademyComponent/CardExam"
import { useState, useEffect } from 'react'
const ContainerExam = ({ bgcard, title, listExam }) => {
    const [dataExam, setDataExam] = useState(null)
    useEffect(() => {
        setDataExam(listExam)
    }, [listExam])
    console.log('data examm', dataExam)
    return (
        <>
            {dataExam && dataExam.length !== 0 && (
                <div className="w-[90%] lg:container mx-auto flex flex-col py-[60px] gap-3 lg:gap-14">
                    {title && <h3 className="font-bold font-playfair text-xl lg:text-5xl">{title}</h3>}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-5 gap-y-3 lg:gap-y-5">
                        {dataExam ? (dataExam.map((exam, index) => (
                            <CardExam bgcard={bgcard} key={index} exam={exam} />))) :
                            (<></>)
                        }
                        {/* <CardComingSoon bgcard={bgcard}/>
                            <CardComingSoon bgcard={bgcard}/>
                            <CardComingSoon bgcard={bgcard}/> */}
                    </div>
                </div>
            )}
        </>
    )
}
export default ContainerExam