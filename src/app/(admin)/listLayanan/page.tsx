"use client";
import React, { useState, useRef, useEffect } from "react";
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
  Textarea,
  Tab,
  Image,
} from "@nextui-org/react";
import {
  SearchIcon,
  TrashIcon,
  AddCircleIcon,
  EditIcon,
  DetailIcon,
} from "@/components/adminComponent/icon";

// Initial data for Service
const Service = [
  {
    serviceId: 1,
    title: "Service 1",
    description: "Description 1",
    price: 100000,
    imageUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    serviceId: 2,
    title: "Service 2",
    description: "Description 2",
    price: 200000,
    imageUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    serviceId: 3,
    title: "Service 3",
    description: "Description 3",
    price: 300000,
    imageUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
];

export const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace("IDR", "IDR ");
};

const statusColorMap: { [key: string]: string } = {
  active: "success",
  inactive: "danger",
};

const ListServicePage = () => {
  const [listService, setListService] = useState(Service);
  const [filteredService, setFilteredService] = useState(Service);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{ serviceId: number; title: string; description: string; price: number; imageUrl: string } | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [newService, setNewService] = useState({
    title: "",
    description: "",
    price: 0,
    imageUrl: null as File | null,
  });

  const [editingService, setEditingService] = useState({
    serviceId: 0,
    title: "",
    description: "",
    price: 0,
    imageUrl: null as string | File | null,
  });

  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, isEditing: boolean = false) => {
    const file = e.target.files?.[0];
    if (file) {
      if (isEditing) {
        setEditingService((prevState) => ({ ...prevState, imageUrl: file }));
      } else {
        setNewService((prevState) => ({ ...prevState, imageUrl: file }));
      }
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
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, isEditing: boolean = false) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (isEditing) {
        setEditingService((prevState) => ({
          ...prevState,
          imageUrl: e.dataTransfer.files[0],
        }));
      } else {
        setNewService((prevState) => ({
          ...prevState,
          imageUrl: e.dataTransfer.files[0],
        }));
      }
    }
  };

  // Trigger file input click
  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle new service input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    isEditing: boolean = false
  ) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditingService((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setNewService((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  // handle search Service
  useEffect(() => {
    const filtered = listService.filter((service) =>
      service.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      service.description.toLowerCase().includes(filterValue.toLowerCase()) ||
      service.price.toString().includes(filterValue)
    );
    setFilteredService(filtered);
    setPage(1); // Reset to first page when filtering
  }, [filterValue, listService]);

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  // Pagination logic
  const pages = Math.ceil(filteredService.length / rowsPerPage);
  const paginatedProducts = filteredService.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Delete Service function
  const handleDeleteService = (serviceId: number, title: string) => {
    setSelectedService({ serviceId, title, description: "", price: 0, imageUrl: "" });
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteService = () => {
    if (selectedService) {
      setListService(listService.filter((Service) => Service.serviceId !== selectedService.serviceId));
      console.log(`Service with id ${selectedService.serviceId} deleted`);
      setIsDeleteModalOpen(false);
      setSelectedService(null);
    }
  };

  // Detail Service function
  const handleDetailService = (Service: { serviceId: number; title: string; description: string; price: number; imageUrl: string }) => {
    setSelectedService(Service);
    setIsDetailModalOpen(true);
  };

  // Edit Service function
  const handleEditService = (service: { serviceId: number; title: string; description: string; price: number; imageUrl: string }) => {
    setEditingService(service);
    setIsEditModalOpen(true);
  };

  const confirmEditService = () => {
    setListService(listService.map((service) => {
      if (service.serviceId === editingService.serviceId) {
        // Create a new object with all properties of editingService
        const updatedService = { ...editingService };
        
        // Ensure imageUrl is a string
        if (updatedService.imageUrl instanceof File) {
          updatedService.imageUrl = URL.createObjectURL(updatedService.imageUrl);
        } else if (updatedService.imageUrl === null) {
          updatedService.imageUrl = ""; // or a default image URL
        }
        
        return updatedService as { serviceId: number; title: string; description: string; price: number; imageUrl: string };
      }
      return service;
    }));
    console.log(`Service with id ${editingService.serviceId} edited`);
    setIsEditModalOpen(false);
  };

  // Pagination button handlers
  const onPreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (page < pages) setPage((prev) => prev + 1);
  };

  // Function to update a Service
  const handleAddService = () => {
    const newServiceId = listService.length + 1;
    const newImageUrl = newService.imageUrl ? URL.createObjectURL(newService.imageUrl) : "";
    const newServiceData = {
      serviceId: newServiceId,
      title: newService.title,
      description: newService.description,
      price: newService.price,
      imageUrl: newImageUrl,
    };

    setListService([...listService, newServiceData]); // Add to the list
    onOpenChange(); // Close modal

    // Reset the form after submission
    setNewService({
      title: "",
      description: "",
      price: 0,
      imageUrl: null,
    });
  };

  return (
    <div className="w-full h-full px-6 py-6">
      {/* Page Header */}
      <div className="font-openSans text-4xl text-abugelap mb-6">
        List Service
      </div>

      {/* Card Container */}
      <Card className="bg-white rounded-2xl border p-6">
        {/* Search and Add Service */}
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search Layanan..."
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
            Tambah Service
          </Button>
        </div>

        {/* Table to display Service */}
        <Table>
          <TableHeader>
          <TableColumn>No</TableColumn>
            <TableColumn>Nama Layanan</TableColumn>
            <TableColumn>Deskripsi</TableColumn>
            <TableColumn>Harga</TableColumn>
            <TableColumn className="flex justify-center items-center">Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {paginatedProducts.map((Service, index) => (
              <TableRow key={Service.serviceId}>
                <TableCell>
                  <div>{index +  1}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar radius="sm" src={Service.imageUrl} />
                    <div>{Service.title}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>{Service.description}</div>
                </TableCell>
                <TableCell>
                  <div>{formatToRupiah(Service.price)}</div>
                </TableCell>
                <TableCell className="flex justify-center items-center">
                  <Button
                    variant="light"
                    startContent={<DetailIcon />}
                    onClick={() => handleDetailService(Service)}
                  >
                  Detail
                  </Button>
                  <Button
                    variant="light"
                    startContent={<EditIcon />}
                    onClick={() => handleEditService(Service)}
                  >
                  Edit
                  </Button>
                  <Button
                    variant="light"
                    startContent={<TrashIcon />}
                    onClick={() => handleDeleteService(Service.serviceId, Service.title)}
                  >
                  Delete
                  </Button>
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

      {/* Modal for Deleting Service */}
      <Modal
        isOpen={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete <strong>{selectedService?.title}</strong>?</p>
              </ModalBody>
              <ModalFooter>
                <Button 
                  variant="bordered"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button 
                  variant="light"
                  className="bg-danger text-white"
                  onPress={() => {
                  confirmDeleteService();
                  onClose();
                }}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal for Detail Service */}
      <Modal
        isOpen={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        placement="top-center"
        className="bg-white rounded-lg p-6 max-w-2xl w-full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                Detail Service
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-4">
                  <Image
                    src={selectedService?.imageUrl}
                    alt="Service Image"
                    width={300}
                    height={300}
                  />
                  <div>
                    <div className="font-bold">{selectedService?.title}</div>
                    <div> Harga: {formatToRupiah(selectedService?.price ?? 0)}</div>
                    <div> Deskripsi: {selectedService?.description}</div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="bordered" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal for Edit Service */}
      <Modal
        isOpen={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        placement="center"
        className="bg-white rounded-lg p-6 max-w-2xl w-full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center border-b pb-4">
                <h2 className="text-xl font-semibold">Edit Layanan</h2>
                <p className="text-sm text-gray-500">
                  Ubah data layanan berikut
                </p>
              </ModalHeader>
              <ModalBody className="py-4">
                <div className="flex flex-row gap-3">
                  <Input
                    label="Nama"
                    placeholder="Masukkan nama layanan"
                    className="mb-4"
                    name="title"
                    value={editingService.title}
                    onChange={(e) => handleInputChange(e, true)}
                  />
                  <Input
                    label="Harga"
                    placeholder="Masukan harga layanan"
                    className="mb-4"
                    name="price"
                    type="number"
                    value={editingService.price.toString()}
                    onChange={(e) => handleInputChange(e, true)}
                  />
                </div>
                <Textarea
                  label="Deskripsi"
                  placeholder="Masukkan deskripsi layanan"
                  className="mb-4"
                  name="description"
                  value={editingService.description}
                  onChange={(e) => handleInputChange(e, true)}
                />

                {/* Foto layanan */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Foto layanan
                  </label>
                  <div
                    className={`border-2 border-dashed ${
                      dragActive ? "border-kuning2" : "border-gray-300"
                    } rounded-lg p-4 text-center relative`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={(e) => handleDrop(e, true)}
                    onClick={onButtonClick}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, true)}
                      accept="image/*"
                    />
                    {editingService.imageUrl ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={typeof editingService.imageUrl === 'string' ? editingService.imageUrl : URL.createObjectURL(editingService.imageUrl)}
                          alt="Service Preview"
                          className="w-32 h-32 object-cover rounded-lg mb-2"
                        />
                        <p className="text-sm text-gray-500">
                          {typeof editingService.imageUrl === 'string' ? 'Current Image' : editingService.imageUrl.name}
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
                  onPress={() => {
                    confirmEditService();
                    onClose();
                  }}
                  className="bg-kuning2 text-white font-bold"
                >
                  Simpan Perubahan
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal for Adding Service */}
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
                <h2 className="text-xl font-semibold">Tambah Layanan</h2>
                <p className="text-sm text-gray-500">
                  Lengkapi data berikut untuk menambah Layanan
                </p>
              </ModalHeader>
              <ModalBody className="py-4">
                <div className="flex flex-row gap-3">
                  <Input
                    label="Nama"
                    placeholder="Masukkan nama layanan"
                    className="mb-4"
                    name="title"
                    value={newService.title}
                    onChange={handleInputChange}
                  />
                  <Input
                    label="Harga"
                    placeholder="Masukan harga layanan"
                    className="mb-4"
                    name="price"
                    type="number"
                    value={newService.price.toString()}
                    onChange={handleInputChange}
                  />
                </div>
                <Textarea
                  label="Deskripsi"
                  placeholder="Masukkan deskripsi layanan"
                  className="mb-4"
                  name="description"
                  value={newService.description}
                  onChange={handleInputChange}
                />

                {/* Foto layanan */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Foto layanan
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
                    {newService.imageUrl ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={URL.createObjectURL(newService.imageUrl)}
                          alt="Service Preview"
                          className="w-32 h-32 object-cover rounded-lg mb-2"
                        />
                        <p className="text-sm text-gray-500">
                          {newService.imageUrl.name}
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
                  onPress={handleAddService}
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

export default ListServicePage;