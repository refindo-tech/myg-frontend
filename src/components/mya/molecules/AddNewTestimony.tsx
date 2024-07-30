import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea, Link } from "@nextui-org/react";
import { AddCommentIcon } from '../icons';
import TestimonyService from '@/lib/testimonyService';
import Swal from 'sweetalert2';

interface NewTestimonyProps {
    // Add any props here
}

const AddNewTestimony: React.FC<NewTestimonyProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [testimony, setTestimony] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [position, setPosition] = useState<string>('');

    const postTestimony = async () => {
        console.log({ testimony, name, position });
        try {
            const response = await TestimonyService.postTestimony(testimony);
            if (response) {
                Swal.fire({
                    title: 'Testimoni berhasil ditambahkan',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                onClose();
                setTestimony('');
                setName('');
                setPosition('');
            }
        } catch (error) {
            Swal.fire({
                title: 'Gagal menambahkan testimoni',
                icon: 'error',
                showConfirmButton: true
            });
        }
    };

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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            label="Jabatan"
                            placeholder="Masukkan jabatan Anda"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                        <Textarea
                            label="Testimoni"
                            placeholder="Masukkan testimoni Anda"
                            value={testimony}
                            onChange={(e) => setTestimony(e.target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="solid" onPress={onClose}>
                            Batal
                        </Button>
                        <Button color="danger" variant="solid" onPress={postTestimony}>
                            Kirim
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AddNewTestimony;
