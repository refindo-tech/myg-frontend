// components/DeleteProductModal.tsx
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface DeleteProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: { title: string } | null;
    onDelete: () => void;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ isOpen, onClose, product, onDelete }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
            <ModalContent>
                <ModalHeader>Delete Product</ModalHeader>
                <ModalBody>
                    <div>
                        Are you sure you want to delete{" "}
                        <span className="font-bold">{product?.title}</span>?
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant="bordered" onPress={onClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="light"
                        onPress={onDelete}
                        className="bg-danger text-white"
                    >
                        Delete
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteProductModal;
