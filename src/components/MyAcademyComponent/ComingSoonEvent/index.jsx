'use client'
// import { Card } from "@nextui-org/card"
// import { Button } from "@nextui-org/button"
// import { Image } from "@nextui-org/image"
import CardComingSoon from "@/components/MyAcademyComponent/CardComingSoon"
import { useState, useEffect } from 'react'
const ComingSoonEvent = ({ bgcard, title, listTraining }) => {
    const [dataTraining, setDataTraining] = useState(null)
    useEffect(() => {
        setDataTraining(listTraining)
    }, [listTraining])
    return (
        <div className="w-[90%] lg:container mx-auto flex flex-col py-[60px] gap-3 lg:gap-14">
            {title&&<h3 className="font-bold font-playfair text-xl lg:text-5xl">{title}</h3>}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-5 gap-y-3 lg:gap-y-5">
                {dataTraining ? (dataTraining.map((training, index) => (
                    <CardComingSoon bgcard={bgcard} key={index} training={training} />))) :
                    (<></>)
                }
                {/* <CardComingSoon bgcard={bgcard}/>
                <CardComingSoon bgcard={bgcard}/>
                <CardComingSoon bgcard={bgcard}/> */}
            </div>
        </div>
    )
}
export default ComingSoonEvent