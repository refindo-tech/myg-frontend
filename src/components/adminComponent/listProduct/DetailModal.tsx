// components/DetailProductModal.tsx
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image } from "@nextui-org/react";

interface Product {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    stock: number;
}

interface DetailProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

const DetailProductModal: React.FC<DetailProductModalProps> = ({ isOpen, onClose, product }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
            <ModalContent>
                <ModalHeader>Detail Product</ModalHeader>
                <ModalBody>
                    <div className="flex gap-4">
                        <Image src={product?.imageUrl} radius="sm" width={300} height={300} />
                        <div>
                            <div className="font-bold">{product?.title}</div>
                            <div>{product?.description}</div>
                            <div>Harga: {product?.price}</div>
                            <div>Stok: {product?.stock}</div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant="bordered" onPress={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DetailProductModal;
