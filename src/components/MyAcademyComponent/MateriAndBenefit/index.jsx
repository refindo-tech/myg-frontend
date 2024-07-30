'use client'
import { useState, useEffect } from 'react'

const MateriAndBenefit = ({ data }) => {
    const [detailTraining, setDetailTraining] = useState({})
    const { materi } = detailTraining
    const { benefit } = detailTraining
    const listMateri = materi ? materi.split('/') : [];
    const listBenefit = benefit ? benefit.split('/') : [];
    // const listMateri = materi.split('/')
    // const listBenefit = benefit.split('/')
    useEffect(() => {
        setDetailTraining(data)
        console.log(data)
    }, [data])
    console.log('ini materiiiii', listMateri)
    console.log('ini benefit', listBenefit)
    return (
        <>
            <div className="flex flex-col gap-y-3">
                <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Materi</h3>
                <div className="pl-6 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                    <ol className="list-disc">
                        {listMateri.map((item, indexmateri) => {
                            const listSubmateri = item ? item.split('=') : []
                            return (
                                <li key={`materi-${indexmateri}`}>
                                    {listSubmateri[0] ? (
                                        <p>{listSubmateri[0]}</p>
                                    ) : (
                                        <p>{item}</p>
                                    )}
                                    <div className="pl-11 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                                        <ol className="list-disc">
                                            {listSubmateri.map((item, index) => (
                                                index !== 0 &&
                                                <li key={`submateri-${index}`}>
                                                    <p>{item}</p>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            <div className="flex flex-col gap-y-3">
                <h3 className="font-playfair text-stone-950 text-xl lg:text-[36px] font-medium">Benefit</h3>
                <div className="pl-6 font-sans text-xs lg:text-xl font-normal text-abumuda text-wrap">
                    <ol className="list-disc">
                        {listBenefit.map((item, index) => (
                            <li key={`benefit-${index}`}>{item}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default MateriAndBenefit