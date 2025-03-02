"use client"
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
interface DeleteEventModalProps {
  isOpen: boolean;
  trainingName:string;
  onOpenChange: (open: boolean) => void;
  // onDeleteAdmin: () => void;
  idTraining: number | null;
}

const DeleteEventModal: React.FC<DeleteEventModalProps> = ({
  isOpen,
  trainingName,
  onOpenChange,
  // onDeleteAdmin,
  idTraining,
}) => {
  const router = useRouter()
  const handleDeleteEvent = async () => {
    try {
      if (idTraining) {
        const { data } = await ListEventServices.deleteEvent(idTraining);
        if (data.meta.success) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Event has been successfully Deleted.",
          });
          router.refresh()
        }
      }
    } catch (error: any) {
      console.error("Failed to add Admin:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text:
          error.response?.data?.meta?.message ||
          error.message ||
          "Unknown error occurred while delete event.",
      });
    }
  };
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
                Are you sure you want to delete event{" "}
                <strong>{trainingName}</strong>?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  // onDeleteAdmin();
                  handleDeleteEvent()
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

export default DeleteEventModal;
