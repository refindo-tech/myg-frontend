"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { X } from "lucide-react";
import YoutubeInput from "../atom/YoutubeInput";
import PosterEventInput from "../atom/PosterEventInput";
import SubmitAddEvent from "../atom/SubmitAddEvent";
import InputField from "../atom/InputField";
import { inputMaterial } from "@/types/myAcademy/admin/listEvent";
interface propsModalAddMateri {
  isOn: boolean;
  handleModal: () => void;
  stateData: inputMaterial;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ModalAddMateri: React.FC<propsModalAddMateri> = ({
  isOn,
  handleModal,
  stateData,
  handleInputChange,
}) => {
  return (
      <Modal isOpen={isOn} onOpenChange={handleModal} placement="top-center" size={"3xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1 font-playfair text-2xl lg:text-4xl font-semibold text-center text-gray-700">
                Tambah Materi
              </ModalHeader>
              <ModalBody>
                <InputField
                  label="Youtube"
                  id="youtubeVideo"
                  name="youtubeVideo"
                  placeholder="Masukkan URL"
                  value={stateData.youtubeVideo}
                  onChange={handleInputChange}
                />
                <InputField
                  label="E-book"
                  id="ebook"
                  name="ebook"
                  placeholder="Masukkan URL e-book"
                  value={stateData.ebook}
                  onChange={handleInputChange}
                />
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Confirm
                </Button> */}
                <SubmitAddEvent label="Tambah" type="button" onClick={onClose}/>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
};
export default ModalAddMateri;
