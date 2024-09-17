import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

export interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
  userLabel: string;
  profilePicture: string | null;
}

interface AddAdminModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddAdmin: (admin: Omit<Admin, "id">) => void;
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({
  isOpen,
  onOpenChange,
  onAddAdmin,
}) => {
  const [newAdmin, setNewAdmin] = useState<Omit<Admin, "id">>({
    name: "",
    email: "",
    role: "Admin",
    userLabel: "",
    profilePicture: null,
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAdmin((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setNewAdmin((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setNewAdmin((prevState) => ({ ...prevState, profilePicture: base64String }));
        setPreviewUrl(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setNewAdmin((prevState) => ({ ...prevState, profilePicture: base64String }));
        setPreviewUrl(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleAddAdmin = () => {
    if (!validatePasswords()) return;
    onAddAdmin(newAdmin);
    onOpenChange(false);
  };

  const updatePreviewUrl = (file: File) => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      className="bg-white rounded-lg p-6 max-w-2xl w-full"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col items-center border-b pb-4">
              <h2 className="text-xl font-semibold">Tambah akun Admin</h2>
              <p className="text-sm text-gray-500">
                Lengkapi data berikut untuk menambah akun Admin
              </p>
            </ModalHeader>
            <ModalBody className="py-4">
              <Input
                label="Nama"
                placeholder="Masukkan nama Admin"
                className="mb-4"
                name="name"
                value={newAdmin.name}
                onChange={handleInputChange}
              />
              <Input
                label="Email"
                placeholder="Masukan email Admin"
                className="mb-4"
                name="email"
                value={newAdmin.email}
                onChange={handleInputChange}
              />
              <div className="flex flex-row gap-3">
                <Input
                  label="Password"
                  placeholder="Masukkan password"
                  type="password"
                  className="mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  label="Konfirmasi password"
                  placeholder="Masukkan kembali password"
                  type="password"
                  className="mb-4"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mb-4">{passwordError}</p>
              )}
              <div className="flex flex-row gap-3">
                <Select
                  label="Role"
                  placeholder="Pilih role"
                  className="mb-4"
                  name="role"
                  value={newAdmin.role}
                  onChange={(e) => handleSelectChange("role", e.target.value)}
                >
                  <SelectItem key="admin" value="Admin">
                    Admin
                  </SelectItem>
                  <SelectItem key="super_admin" value="Super Admin">
                    Super Admin
                  </SelectItem>
                </Select>
                <Select
                  label="Team"
                  placeholder="Pilih team"
                  className="mb-4"
                  name="userLabel"
                  value={newAdmin.userLabel}
                  onChange={(e) =>
                    handleSelectChange("userLabel", e.target.value)
                  }
                >
                  <SelectItem key="MYA" value="MYA">
                    MYA
                  </SelectItem>
                  <SelectItem key="My_Academy" value="My Academy">
                    My Academy
                  </SelectItem>
                  <SelectItem key="My_Beautica" value="My Beautica">
                    My Beautica
                  </SelectItem>
                </Select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Foto Profile Admin
                </label>
                <div
                  className={`border-2 border-dashed ${
                    dragActive ? "border-kuning2" : "border-gray-300"
                  } rounded-lg p-4 text-center relative`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={onButtonClick}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                    {previewUrl ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={previewUrl}
                          alt="Profile Preview"
                          className="w-32 h-32 object-cover rounded-full mb-2"
                        />
                        <p className="text-sm text-gray-500">
                          Image uploaded successfully
                        </p>
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
                        Click to Upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">
                        (Max. File size: 25 MB)
                      </p>
                    </>
                  )}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                fullWidth
                onPress={handleAddAdmin}
                variant="light"
                className="bg-kuning2 text-white font-bold"
              >
                Tambah
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddAdminModal;
