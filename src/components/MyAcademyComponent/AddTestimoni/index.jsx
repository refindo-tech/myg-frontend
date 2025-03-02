'use client'
import { Card } from "@nextui-org/card"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { addTestimoni } from "@/helpers/fetchAPI";
import { YoutubeIcon } from '@/components/mya/icons';
import icons from "@/components/icons/icon"
import { useState } from "react";
const AddTestimoni = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const handleName = (value) => {
        setName(value)
    }
    const handlecomment = (value) => {
        setComment(value)
    }
    const handleSubmit = () => {
        const postData = async () => {
            const response = await addTestimoni(name, comment)
            if (response) {
                return true
            }
        }
        postData()
    }
    const { BubbleChat, YoutubeIcon } = icons
    return (
        <>
            <Card className="min-h-[272px] w-full py-5 bg-gray-200 gap-y-[20px]">
                <div className="w-[80%] h-full mx-auto flex flex-row justify-between items-center gap-3">
                    <div className="w-1/2 border-2 border-gray-500 border-dashed rounded-xl flex flex-col gap-5 py-16 text-center">
                        <p>Berikan pendapatmu disini!</p>
                        <div className="">
                            <Button
                                onPress={onOpen}
                                className="flex justify-center h-14 w-12 rounded-full mx-auto bg-gray-300 items-center"
                            >
                                <BubbleChat />
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full bg-birumuda shadow-xl flex items-center justify-center rounded-xl">
                        <div className="text-center flex flex-col items-center justify-center">
                            <p>
                                Lihat lainnya di
                            </p>
                            <div className="self-stretch px-2 py-1.5 bg-zinc-100 rounded justify-end items-center gap-2.5 inline-flex text-red-600">
                                <YoutubeIcon size={48} fill="currentColor" />
                                <div className="text-center text-black text-normal font-bold font-['Open Sans'] leading-normal">Youtube</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add Testimoni</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    type="text"
                                    label="Name"
                                    placeholder="Masukkan Nama"
                                    variant="bordered"
                                    value={name}
                                    onChange={(e) => { handleName(e.target.value) }}
                                />
                                <Textarea
                                    label="Testimoni"
                                    variant="bordered"
                                    placeholder="Tulis Testimoni"
                                    height={300}
                                    value={comment}
                                    onChange={(e) => { handlecomment(e.target.value) }}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={(e) => {
                                    const post = handleSubmit()
                                    if (post) {
                                        onClose
                                    }
                                }}>
                                    Save Testimoni
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddTestimoni