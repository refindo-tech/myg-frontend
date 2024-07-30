import { Card } from "@nextui-org/card"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import icons from "@/components/icons/icon"
const AddTestimoni = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { BubbleChat } = icons
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
                        <div className="text-center">
                            <p>
                                Lihat lainnya di
                            </p>
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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
                                />
                                <Textarea
                                    label="Testimoni"
                                    variant="bordered"
                                    placeholder="Tulis Testimoni"
                                    height={300}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onClose}>
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