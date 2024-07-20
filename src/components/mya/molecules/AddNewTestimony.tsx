import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Textarea, Link } from "@nextui-org/react";
import { AddCommentIcon } from '../icons';

interface NewTestimonyProps {
    // Add any props here
}



const AddNewTestimony: React.FC<NewTestimonyProps> = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Button
                color="default"
                variant="solid"
                size="md"
                radius='full'
                onPress={onOpen}
            >
                <AddCommentIcon size={24} fill="currentColor" />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} classNames={{
                header: 'bg-mya-600 text-white items-center',
                closeButton: 'text-white hover:text-red-500 text-2xl top-2 right-2',
            }}>
                <ModalContent>
                    <ModalHeader>
                        <div className="flex items-center gap-2 justify-center relative w-full">
                            <div className="text-lg font-semibold">Tambahkan Testimoni</div>
                        </div>

                    </ModalHeader>
                    <ModalBody>
                        <Input
                            label="Nama"
                            placeholder="Masukkan nama Anda"
                        />
                        <Input
                            label="Jabatan"
                            placeholder="Masukkan jabatan Anda"
                        />
                        <Textarea
                            label="Testimoni"
                            placeholder="Masukkan testimoni Anda"
                            type='textarea'
                        />
                        {/* <Checkbox
                            color='default'
                        >
                             Saya &nbsp;
                            <Link href="/terms" color="danger">
                               menyetujui syarat dan ketentuan
                            </Link>
                        </Checkbox> */}

                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="solid" onPress={onClose}>
                            Batal
                        </Button>
                        <Button color="danger" variant="solid">
                            Kirim
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    );
};

export default AddNewTestimony;