// ListServicePage.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Button, Input, Avatar, Card, Table, TableHeader, TableColumn, TableBody,
  TableRow, TableCell, Pagination, Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, useDisclosure, Image
} from "@nextui-org/react";
import { SearchIcon, TrashIcon, AddCircleIcon, EditIcon, DetailIcon } from "@/components/adminComponent/icon";
import ServiceForm from "@/components/adminComponent/layanan/ServiceForm";  // Import the ServiceForm component

// Types
interface Service {
  serviceId: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string | null;
}

// Utility functions
const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number).replace("IDR", "IDR ");
};

// Initial data
const initialServices: Service[] = [
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

const ListServicePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [filteredServices, setFilteredServices] = useState<Service[]>(initialServices);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete" | "detail" | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const filtered = services.filter((service) =>
      service.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      service.description.toLowerCase().includes(filterValue.toLowerCase()) ||
      service.price.toString().includes(filterValue)
    );
    setFilteredServices(filtered);
    setPage(1);
  }, [filterValue, services]);

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  const pages = Math.ceil(filteredServices.length / rowsPerPage);
  const paginatedServices = filteredServices.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSelectedService(prev => prev ? { ...prev, [name]: name === "price" ? parseFloat(value) : value } : null);
  };

  const handleFileChange = (imageUrl: string | null) => {
    setSelectedService(prev => prev ? { ...prev, imageUrl } : null);
  };

  const handleModalOpen = (mode: "add" | "edit" | "delete" | "detail", service?: Service) => {
    setModalMode(mode);
    setSelectedService(service || { serviceId: services.length + 1, title: "", description: "", price: 0, imageUrl: null });
    onOpen();
  };

  const handleConfirm = () => {
    if (!selectedService) return;

    switch (modalMode) {
      case "add":
        setServices([...services, selectedService]);
        break;
      case "edit":
        setServices(services.map(s => s.serviceId === selectedService.serviceId ? selectedService : s));
        break;
      case "delete":
        setServices(services.filter(s => s.serviceId !== selectedService.serviceId));
        break;
    }

    onOpenChange();
  };


  return (
    <div className="w-full h-full px-6 py-6">
      <div className="font-openSans text-4xl text-abugelap mb-6">List Service</div>
      <Card className="bg-white rounded-2xl border p-6">
        {/* Search and Add Service buttons */}
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search Layanan..."
            value={filterValue}
            onChange={(e) => handleSearch(e.target.value)}
            startContent={<SearchIcon />}
            fullWidth
            className="max-w-[20rem]"
          />
          <Button
            className="bg-kuning2"
            variant="light"
            startContent={<AddCircleIcon />}
            onPress={() => handleModalOpen("add")}
          >
            Tambah Service
          </Button>
        </div>

        {/* Table of Services */}
        <Table>
          <TableHeader>
            <TableColumn>No</TableColumn>
            <TableColumn>Nama Layanan</TableColumn>
            <TableColumn>Deskripsi</TableColumn>
            <TableColumn>Harga</TableColumn>
            <TableColumn className="flex justify-center items-center">Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {paginatedServices.map((service, index) => (
              <TableRow key={service.serviceId}>
                <TableCell><div>{index + 1}</div></TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar radius="sm" src={service.imageUrl || ''} />
                    <div>{service.title}</div>
                  </div>
                </TableCell>
                <TableCell><div>{service.description}</div></TableCell>
                <TableCell><div>{formatToRupiah(service.price)}</div></TableCell>
                <TableCell className="flex justify-center items-center">
                  <Button variant="light" startContent={<DetailIcon />} onClick={() => handleModalOpen("detail", service)}>Detail</Button>
                  <Button variant="light" startContent={<EditIcon />} onClick={() => handleModalOpen("edit", service)}>Edit</Button>
                  <Button variant="light" startContent={<TrashIcon />} onClick={() => handleModalOpen("delete", service)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex mt-4 items-center justify-center">
          <div className="flex w-[40%] justify-center items-center gap-2">
            <Button isDisabled={page <= 1} size="sm" variant="flat" onPress={() => setPage(prev => prev - 1)}>Previous</Button>
            <Pagination isCompact total={pages} initialPage={page} onChange={(page) => setPage(page)} variant="light" />
            <Button isDisabled={page >= pages} size="sm" variant="flat" onPress={() => setPage(prev => prev + 1)}>Next</Button>
          </div>
        </div>
      </Card>

      {/* Modal for Add/Edit/Delete/Detail */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center border-b pb-4">
                <h2 className="text-xl font-semibold">
                  {modalMode === "add" ? "Tambah Layanan" : 
                   modalMode === "edit" ? "Edit Layanan" :
                   modalMode === "delete" ? "Confirm Deletion" : "Detail Service"}
                </h2>
                {(modalMode === "add" || modalMode === "edit") && (
                  <p className="text-sm text-gray-500">
                    {modalMode === "add" ? "Lengkapi data berikut untuk menambah Layanan" : "Ubah data layanan berikut"}
                  </p>
                )}
              </ModalHeader>
              <ModalBody className="py-4">
                {modalMode === "delete" ? (
                  <p>Are you sure you want to delete <strong>{selectedService?.title}</strong>?</p>
                ) : modalMode === "detail" ? (
                  <div className="flex gap-4">
                    <Image
                      src={selectedService?.imageUrl || ''}
                      alt="Service Image"
                      width={300}
                      height={300}
                    />
                    <div>
                      <div className="font-bold">{selectedService?.title}</div>
                      <div>Harga: {formatToRupiah(selectedService?.price || 0)}</div>
                      <div>Deskripsi: {selectedService?.description}</div>
                    </div>
                  </div>
                ) : selectedService && (
                  <ServiceForm
                    service={selectedService}
                    onInputChange={handleInputChange}
                    onFileChange={handleFileChange}
                  />
                )}
              </ModalBody>
              <ModalFooter>
                {modalMode !== "detail" && (
                  <Button
                    fullWidth
                    onPress={() => {
                      handleConfirm();
                      onClose();
                    }}
                    className={modalMode === "delete" ? "bg-danger text-white font-bold" : "bg-kuning2 text-white font-bold"}
                  >
                    {modalMode === "add" ? "Tambah" : modalMode === "edit" ? "Simpan Perubahan" : "Delete"}
                  </Button>
                )}
                {modalMode === "detail" && (
                  <Button variant="bordered" onPress={onClose}>
                    Close
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ListServicePage;