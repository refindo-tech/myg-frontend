import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { AddCommentIcon } from '../icons';
import TestimonyService from '@/lib/testimonyService';
import Swal from 'sweetalert2';

interface NewTestimonyProps {
    // Add any props here
}

interface ValidationError {
    instancePath: string;
    message: string;
}

const AddNewTestimony: React.FC<NewTestimonyProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [comment, setTestimony] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [role, setPosition] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const postTestimony = async () => {
        try {
            const response = await TestimonyService.postTestimony({ name, email, role, comment });
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
                setEmail('');
            }
        } catch (error) {
            Swal.fire({
                title: 'Gagal menambahkan testimoni',
                icon: 'error',
                showConfirmButton: true
            });
        }
    };

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postTestimony();
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
                <ModalContent as={'form'} onSubmit={handleSubmit}>
                    <ModalHeader>
                        <div className="flex items-center gap-2 justify-center relative w-full">
                            <div className="text-lg font-semibold">Tambahkan Testimoni</div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <Input
                            label="Nama"
                            placeholder="Masukkan nama Anda"
                            type='text'
                            isInvalid={!name}
                            errorMessage= "Harap mengisi nama anda"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            label="Email"
                            placeholder="Masukkan email Anda"
                            type='email'
                            // isRequired
                            isInvalid={!email || !validateEmail(email)}
                            errorMessage= "Harap masukan email dengan benar."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label="Jabatan"
                            placeholder="Masukkan jabatan Anda"
                            type='text'
                            isInvalid={!role}
                            errorMessage='Harap masukan peran anda.'
                            value={role}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                        <Textarea
                            label="Testimoni"
                            placeholder="Masukkan testimoni Anda"
                            validationBehavior='native'
                            isInvalid={!comment}
                            errorMessage= "Testimoni tidak boleh kosong"
                            value={comment}
                            onChange={(e) => setTestimony(e.target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="solid" onPress={onClose}>
                            Batal
                        </Button>
                        <Button color="danger" variant="solid" type='submit'>
                            Kirim
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AddNewTestimony;
