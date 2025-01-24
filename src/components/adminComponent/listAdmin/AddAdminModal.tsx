import React, { useState, useRef, useEffect, useMemo } from "react";
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

interface Admin {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  userLabel: string;
  userProfile: {
    fullName: string;
    profilePicture: File | null;
  };
}

const userLabelOptions = {
  MYA: "MYA",
  MY_ACADEMI: "My Academy",
  MY_BEAUTICA: "My Beautica",
};

interface AddAdminModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddAdmin: (formData: FormData) => void;
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({
  isOpen,
  onOpenChange,
  onAddAdmin,
}) => {
  const initialAdminState: Admin = {
    email: "",
    password: "",
    confirmPassword: "",
    role: "ADMIN",
    userLabel: "",
    userProfile: {
      fullName: "",
      profilePicture: null,
    },
  };

  const [newAdmin, setNewAdmin] = useState<Admin>(initialAdminState);
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const isEmailInvalid = useMemo(() => {
    if (!touchedFields.email) return false;
    return !validateEmail(newAdmin.email);
  }, [newAdmin.email, touchedFields.email]);

  const isPasswordInvalid = useMemo(() => {
    if (!touchedFields.password) return false;
    return newAdmin.password.length < 6;
  }, [newAdmin.password, touchedFields.password]);

  const isConfirmPasswordInvalid = useMemo(() => {
    if (!touchedFields.confirmPassword) return false;
    return newAdmin.password !== newAdmin.confirmPassword;
  }, [newAdmin.password, newAdmin.confirmPassword, touchedFields.confirmPassword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setNewAdmin(prev => ({
        ...prev,
        userProfile: { ...prev.userProfile, fullName: value }
      }));
    } else {
      setNewAdmin(prev => ({ ...prev, [name]: value }));
    }
    setTouchedFields(prev => ({ ...prev, [name]: true }));
  };

  const handleSelectChange = (value: string) => {
    setNewAdmin(prev => ({ ...prev, userLabel: value }));
  };    

  const MAX_FILE_SIZE = 25 * 1024 * 1024;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setError("File size too large. Max file size is 25MB");
        return;
      }
      setNewAdmin(prev => ({
        ...prev,
        userProfile: { ...prev.userProfile, profilePicture: file }
      }));
      setPreviewUrl(URL.createObjectURL(file));
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
      if (file.size > MAX_FILE_SIZE) {
        setError("File size too large. Max file size is 25MB");
        return;
      }
      setNewAdmin(prev => ({
        ...prev,
        userProfile: { ...prev.userProfile, profilePicture: file }
      }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleAddAdmin = () => {
    if (isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid) {
      return;
    }

    const formData = new FormData();
    formData.append('name', newAdmin.userProfile.fullName); // Use 'name' instead of 'userProfile[fullName]'
    formData.append('email', newAdmin.email);
    formData.append('password', newAdmin.password);
    formData.append('confirmPassword', newAdmin.confirmPassword);
    formData.append('role', newAdmin.role);
    formData.append('userLabel', newAdmin.userLabel);

    if (newAdmin.userProfile.profilePicture) {
      formData.append('profilePicture', newAdmin.userProfile.profilePicture);
    }
    onAddAdmin(formData);
    clearForm();
    onOpenChange(false);
  };

  const clearForm = () => {
    setNewAdmin(initialAdminState);
    setPreviewUrl(null);
    setTouchedFields({
      email: false,
      password: false,
      confirmPassword: false,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (!isOpen) {
      clearForm();
    }
  }, [isOpen]);

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
                name="fullName"
                value={newAdmin.userProfile.fullName}
                onChange={handleInputChange}
              />
              <Input
                label="Email"
                placeholder="Masukan email Admin"
                className="mb-4"
                name="email"
                value={newAdmin.email}
                onChange={handleInputChange}
                isInvalid={isEmailInvalid}
                errorMessage={isEmailInvalid && "Please enter a valid email address"}
              />
              <div className="flex flex-row gap-3">
                <Input
                  label="Password"
                  placeholder="Masukkan password"
                  type="password"
                  className="mb-4"
                  name="password"
                  value={newAdmin.password}
                  onChange={handleInputChange}
                  isInvalid={isPasswordInvalid}
                  errorMessage={isPasswordInvalid && "Password must be at least 6 characters long"}
                />
                <Input
                  label="Konfirmasi password"
                  placeholder="Masukkan kembali password"
                  type="password"
                  className="mb-4"
                  name="confirmPassword"
                  value={newAdmin.confirmPassword}
                  onChange={handleInputChange}
                  isInvalid={isConfirmPasswordInvalid}
                  errorMessage={isConfirmPasswordInvalid && "Passwords do not match"}
                />
              </div>
              <div className="flex flex-row gap-3">
                <Input
                  isReadOnly
                  label="Role"
                  placeholder="Pilih role"
                  className="mb-4"
                  name="role"
                  value={newAdmin.role}
                  onChange={handleInputChange}
                />
                <Select
                  label="Team"
                  placeholder="Pilih team"
                  className="mb-4"
                  name="userLabel"
                  value={newAdmin.userLabel}
                  onChange={(e) => handleSelectChange(e.target.value)}
                >
                  {Object.entries(userLabelOptions).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
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
                isDisabled={isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid}
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
