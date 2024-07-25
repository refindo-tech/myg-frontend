"use client"
import { useState } from 'react'
import icons from '@/components/icons/icon'
import Image from 'next/image'
const FAQMyAcademy = () => {
    const { PlusIcon, MinusIcon } = icons
    const [itemFAQ, setItemFaq] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
    })
    const handleFAQ = (item) => {
        setItemFaq((prevItemFAQ) => ({
            ...prevItemFAQ,
            [item]: !prevItemFAQ[item],
        }))
        console.log(item)
    }
    return (
        <div className="container mx-auto flex flex-col py-5 lg:py-[90px] gap-y-5 lg:gap-y-[75px]">
            <div className='relative mx-auto flex h-11 lg:h-32 items-center'>
                <h1 className="font-bold font-sans text-4xl lg:text-[65px] text-gray-900 w-32 lg:w-[230px] text-center">FAQ<span className="font-bold font-sans text-3xl lg:text-[50px] text-gray-900">S</span></h1>
                <Image alt='blurcircle'
                    src='/images/blurcircle.png'
                    className='absolute top- h-10 w-16 sm:h-[98px] sm:w-[170px]'
                    width={170}
                    height={98}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[90%] mx-auto text-wrap">
                <div className='flex flex-col gap-y-4'>
                    <div className=" border-b-2 border-abumuda pb-4 lg:pb-8">
                        <div className={`flex flex-row justify-between items-start ${itemFAQ.item1 ? 'text-primary-500' : 'text-abugelap'}`}>
                            <h3 className='font-sans text-xs lg:text-lg font-bold '>Bagaimana cara mendaftar untuk acara ini? </h3>
                            <button className='p-2' onClick={() => handleFAQ('item1')}>
                                {itemFAQ.item1 ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </button>
                        </div>
                        {itemFAQ.item1 && (
                            <p className='font-sans font-normal text-[10px] lg:text-lg text-abugelap'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint ipsam asperiores debitis, velit quia laudantium fugit nam illo doloribus ullam accusantium quod magnam porro cumque placeat eius amet vero?
                            </p>
                        )}
                    </div>
                    <div className="border-b-2 border-abumuda pb-4 lg:pb-8">
                        <div className={`flex flex-row justify-between items-start ${itemFAQ.item2 ? 'text-primary-500' : 'text-abugelap'}`}>
                            <h3 className='font-sans text-xs lg:text-lg font-bold '>Apakah ada diskon untuk pendaftaran kelompok? </h3>
                            <button className='p-2' onClick={() => handleFAQ('item2')}>
                                {itemFAQ.item2 ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </button>
                        </div>
                        {itemFAQ.item2 && (
                            <p className='font-sans font-normal text-[10px] lg:text-lg text-abugelap'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint ipsam asperiores debitis, velit quia laudantium fugit nam illo doloribus ullam accusantium quod magnam porro cumque placeat eius amet vero?
                            </p>
                        )}
                    </div>
                    <div className="border-b-2 border-abumuda pb-4 lg:pb-8">
                        <div className={`flex flex-row justify-between items-start ${itemFAQ.item3 ? 'text-primary-500' : 'text-abugelap'}`}>
                            <h3 className='font-sans text-xs lg:text-lg font-bold '>Apa yang harus saya bawa saat menghadiri acara? </h3>
                            <button className='p-2' onClick={() => handleFAQ('item3')}>
                                {itemFAQ.item3 ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </button>
                        </div>
                        {itemFAQ.item3 && (
                            <p className='font-sans font-normal text-[10px] lg:text-lg text-abugelap'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint ipsam asperiores debitis, velit quia laudantium fugit nam illo doloribus ullam accusantium quod magnam porro cumque placeat eius amet vero?
                            </p>
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div className="border-b-2 border-abumuda pb-4 lg:pb-8">
                        <div className={`flex flex-row justify-between items-start ${itemFAQ.item4 ? 'text-primary-500' : 'text-abugelap'}`}>
                            <h3 className='font-sans text-xs lg:text-lg font-bold '>Apa saja yang termasuk biaya pendaftaran? </h3>
                            <button className='p-2' onClick={() => handleFAQ('item4')}>
                                {itemFAQ.item4 ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </button>
                        </div>
                        {itemFAQ.item4 && (
                            <p className='font-sans font-normal text-[10px] lg:text-lg text-abugelap'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint ipsam asperiores debitis, velit quia laudantium fugit nam illo doloribus ullam accusantium quod magnam porro cumque placeat eius amet vero?
                            </p>
                        )}
                    </div>
                    <div className="border-b-2 border-abumuda pb-4 lg:pb-8">
                        <div className={`flex flex-row justify-between items-start ${itemFAQ.item5 ? 'text-primary-500' : 'text-abugelap'}`}>
                            <h3 className='font-sans text-xs lg:text-lg font-bold '>Apakah persayaratn mengikuti acara ini? </h3>
                            <button className='p-2' onClick={() => handleFAQ('item5')}>
                                {itemFAQ.item5 ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </button>
                        </div>
                        {itemFAQ.item5 && (
                            <p className='font-sans font-normal text-[10px] lg:text-lg text-abugelap'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint ipsam asperiores debitis, velit quia laudantium fugit nam illo doloribus ullam accusantium quod magnam porro cumque placeat eius amet vero?
                            </p>
                        )}
                    </div>
                    <div className="border-b-2 border-abumuda pb-4 lg:pb-8">
                        <div className={`flex flex-row justify-between items-start ${itemFAQ.item6 ? 'text-primary-500' : 'text-abugelap'}`}>
                            <h3 className='font-sans text-xs lg:text-lg font-bold '>Bagaimana jika tidak bisa hadir setelah mendaftar?</h3>
                            <button className='p-2' onClick={() => handleFAQ('item6')}>
                                {itemFAQ.item6 ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </button>
                        </div>
                        {itemFAQ.item6 && (
                            <p className='font-sans font-normal text-[10px] lg:text-lg text-abugelap'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint ipsam asperiores debitis, velit quia laudantium fugit nam illo doloribus ullam accusantium quod magnam porro cumque placeat eius amet vero?
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default FAQMyAcademy