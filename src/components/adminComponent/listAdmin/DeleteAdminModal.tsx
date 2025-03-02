import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface DeleteAdminModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onDeleteAdmin: () => void;
  adminName: string;
}

const DeleteAdminModal: React.FC<DeleteAdminModalProps> = ({
  isOpen,
  onOpenChange,
  onDeleteAdmin,
  adminName,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Confirm Deletion
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to delete <strong>{adminName}</strong>?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onDeleteAdmin();
                  onClose();
                }}
              >
                Confirm
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteAdminModal;