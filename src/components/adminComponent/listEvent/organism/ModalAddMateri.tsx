'use client'
import React from "react"
import {X} from 'lucide-react'
import YoutubeInput from "../atom/YoutubeInput";
import PosterEventInput from "../atom/PosterEventInput";
import SubmitAddEvent from "../atom/SubmitAddEvent";
export default function ModalAddMateri ({isOn, handleModal}: {isOn:boolean, handleModal:()=>void;}) {
    return(
        <>{isOn&&
        <div className="w-ful h-full absolute top-0 left-0 right-0 bottom-0 bg-gray-600/50 flex items-center justify-center z-50">
            <div className="min-h-[50%] w-[60%] bg-white shadow-xl rounded-2xl p-8 flex flex-col">
                <div className="flex justify-end">
                    <button
                        className="bg-kuning2 text-white p-1 rounded-xl"
                        onClick={handleModal}
                    >
                        <X />
                    </button>
                </div>
                <h2 className="font-playfair text-2xl lg:text-4xl font-semibold text-center text-gray-700">Tambah Materi</h2>
                <div className="w-full h-full flex items-center justify-center flex-col gap-5 p-8">
                    <YoutubeInput />
                    <PosterEventInput label={"Poster"} id={"posteracara"}/>
                    <SubmitAddEvent />
                </div>
            </div>
        </div>
        }
        </>
    )
}