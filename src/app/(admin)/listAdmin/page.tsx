"use client";
import React, { useState, useRef } from "react";
import {
  Button,
  Input,
  Avatar,
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  SelectItem,
  Tab,
} from "@nextui-org/react";
import {
  SearchIcon,
  TrashIcon,
  AddCircleIcon,
} from "@/components/adminComponent/icon";

// Initial user data
const initialUsers = [
  {
    id: 1,
    name: "Farah Adelia Putri",
    email: "farah@example.com",
    role: "Admin",
    team: "MYA",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 2,
    name: "Tony Reichert",
    email: "tony.reichert@example.com",
    role: "Admin",
    team: "MYA",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
];

const statusColorMap: { [key: string]: string } = {
  active: "success",
  inactive: "danger",
};

const ListAdminPage = () => {
  const [listAdmin, setListAdmin] = useState(initialUsers);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    role: "Admin",
    team: "",
    password: "",
    confirmPassword: "",
    profilePicture: null as File | null,
  });

  const [passwordError, setPasswordError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewAdmin((prevState) => ({ ...prevState, profilePicture: file }));
    }
  };

  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setNewAdmin((prevState) => ({
        ...prevState,
        profilePicture: e.dataTransfer.files[0],
      }));
    }
  };

  // Trigger file input click
  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle search filter
  const filteredAdmins = listAdmin.filter((admin) =>
    admin.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // Pagination logic
  const pages = Math.ceil(filteredAdmins.length / rowsPerPage);
  const paginatedAdmins = filteredAdmins.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Handle new admin input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAdmin((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle select change for role and team
  const handleSelectChange = (name: string, value: string) => {
    setNewAdmin((prevState) => ({ ...prevState, [name]: value }));
  };

  // Validate passwords
  const validatePasswords = () => {
    if (newAdmin.password !== newAdmin.confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Function to add a new admin
  const handleAddAdmin = () => {
    if (!validatePasswords()) {
      return;
    }

    const newId = listAdmin.length + 1;
    const newAvatar = newAdmin.profilePicture
      ? URL.createObjectURL(newAdmin.profilePicture)
      : "";
    const newAdminData = {
      id: newId,
      name: newAdmin.name,
      email: newAdmin.email,
      role: newAdmin.role,
      team: newAdmin.team,
      status: "active",
      avatar: newAvatar,
    };

    setListAdmin([...listAdmin, newAdminData]);
    onOpenChange();

    // Reset the form after submission
    setNewAdmin({
      name: "",
      email: "",
      role: "Admin",
      team: "",
      password: "",
      confirmPassword: "",
      profilePicture: null,
    });
  };

  // Delete admin function
  const handleDeleteAdmin = (id: number, name: string) => {
    setSelectedAdmin({ id, name });
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAdmin = () => {
    if (selectedAdmin) {
      setListAdmin(listAdmin.filter((admin) => admin.id !== selectedAdmin.id));
      console.log(`Admin with id ${selectedAdmin.id} deleted`);
      setIsDeleteModalOpen(false);
      setSelectedAdmin(null);
    }
  };

  // Pagination button handlers
  const onPreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (page < pages) setPage((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full px-6 py-6">
      {/* Page Header */}
      <div className="font-openSans text-4xl text-abugelap mb-6">
        List Akun Admin
      </div>

      {/* Card Container */}
      <Card className="bg-white rounded-2xl border p-6">
        {/* Search and Add Admin */}
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search by name..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            startContent={<SearchIcon />}
            fullWidth
            className="max-w-[20rem]"
          />
          <Button
            className="bg-kuning2"
            variant="light"
            startContent={<AddCircleIcon />}
            onPress={onOpen}
          >
            Tambah Admin
          </Button>
        </div>

        {/* Table to display admin users */}
        <Table>
          <TableHeader>
            <TableColumn>No</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {paginatedAdmins.map((admin, index) => (
              <TableRow key={admin.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar radius="sm" src={admin.avatar} />
                    <div className="flex flex-col">
                      <div>{admin.name}</div>
                      <div className="text-tiny text-default-400">
                        {admin.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>{admin.role}</div>
                  <div className="text-tiny text-default-400">{admin.team}</div>
                </TableCell>
                <TableCell>
                  <Chip
                    color={statusColorMap[admin.status] as "success" | "danger"}
                    size="sm"
                    variant="flat"
                  >
                    {admin.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  <Button
                    variant="light"
                    startContent={<TrashIcon />}
                    onClick={() => handleDeleteAdmin(admin.id, admin.name)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <div className="flex mt-4 items-center justify-center">
          <div className="flex w-[40%] justify-center items-center gap-2">
            <Button
              isDisabled={page <= 1}
              size="sm"
              variant="flat"
              onPress={onPreviousPage}
            >
              Previous
            </Button>

            <Pagination
              isCompact
              total={pages}
              initialPage={page}
              onChange={(page) => setPage(page)}
              variant="light"
            />

            <Button
              isDisabled={page >= pages}
              size="sm"
              variant="flat"
              onPress={onNextPage}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>

      {/* Modal for Deleting Admin */}
      <Modal
        isOpen={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Deletion
              </ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to delete{" "}
                  <strong>{selectedAdmin?.name}</strong>?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    confirmDeleteAdmin();
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

      {/* Modal for Adding Admin */}
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
                    name="password"
                    value={newAdmin.password}
                    onChange={handleInputChange}
                  />
                  <Input
                    label="Konfirmasi password"
                    placeholder="Masukkan kembali password"
                    type="password"
                    className="mb-4"
                    name="confirmPassword"
                    value={newAdmin.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mb-4">{passwordError}</p>
                  )}
                </div>

                <div className="flex flex-row gap-3">
                  <Select
                    label="Role"
                    placeholder="Pilih role"
                    className="mb-4"
                    name="role"
                    value={newAdmin.role}
                    onChange={(e) => handleSelectChange("role", e.target.value)}
                  >
                    <SelectItem key="admin" value="admin">
                      Admin
                    </SelectItem>
                    <SelectItem key="super_admin" value="super_admin">
                      Super Admin
                    </SelectItem>
                  </Select>
                  <Select
                    label="Team"
                    placeholder="Pilih team"
                    className="mb-4"
                    name="team"
                    value={newAdmin.team}
                    onChange={(e) => handleSelectChange("team", e.target.value)}
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

                {/* add picture profile */}
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
                    {newAdmin.profilePicture ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={URL.createObjectURL(newAdmin.profilePicture)}
                          alt="Profile Preview"
                          className="w-32 h-32 object-cover rounded-full mb-2"
                        />
                        <p className="text-sm text-gray-500">
                          {newAdmin.profilePicture.name}
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
    </div>
  );
};

export default ListAdminPage;
