// components/AddProductModal.tsx
import React, { ChangeEvent, DragEvent, RefObject } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button, Textarea, Image } from "@nextui-org/react";

interface Product {
    title: string;
    price: number;
    stock: number;
    description: string;
    imageUrl: File | null;
}

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
    onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    dragActive: boolean;
    handleDrag: (e: DragEvent<HTMLDivElement>) => void;
    handleDrop: (e: DragEvent<HTMLDivElement>) => void;
    fileInputRef: RefObject<HTMLInputElement>;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
    isOpen,
    onClose,
    product,
    onInputChange,
    onFileChange,
    onAdd,
    dragActive,
    handleDrag,
    handleDrop,
    fileInputRef
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
            <ModalContent>
                <ModalHeader className="flex flex-col items-center border-b pb-4">
                    <h2 className="text-xl font-semibold">Tambah Produk</h2>
                    <p className="text-sm text-gray-500">Lengkapi data berikut untuk menambahkan produk baru</p>
                </ModalHeader>
                <ModalBody className="py-4">
                    <div className="flex flex-row gap-3">
                        <Input
                            name="title"
                            label="Nama Produk"
                            value={product.title}
                            onChange={onInputChange}
                        />
                        <Input
                            name="price"
                            label="Harga"
                            type="number"
                            value={product.price.toString()}
                            onChange={onInputChange}
                        />
                    </div>
                    <Input
                        name="stock"
                        label="Stok"
                        type="number"
                        value={product.stock.toString()}
                        onChange={onInputChange}
                    />
                    <Textarea
                        name="description"
                        label="Deskripsi"
                        value={product.description}
                        onChange={onInputChange}
                    />
                    {/* Product Image */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Gambar Produk</label>
                        <div
                            className={`border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center ${
                                dragActive ? "border-blue-500" : ""
                            } rounded-lg p-4 text-center relative`}
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Input
                                type="file"
                                ref={fileInputRef}
                                onChange={onFileChange}
                                className="hidden"
                                accept="image/*"
                            />
                            {product.imageUrl ? (
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={URL.createObjectURL(product.imageUrl)}
                                        alt="product"
                                        className="w-32 h-32 object-cover rounded-lg mb-2"
                                    />
                                    <p className="text-sm text-gray-500">Image uploaded</p>
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Drag and drop your image here
                                    </p>
                                    <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
                                </>
                            )}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button fullWidth variant="light" onPress={onAdd} className="bg-kuning2 text-white font-bold">
                        Tambah Produk
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddProductModal;
