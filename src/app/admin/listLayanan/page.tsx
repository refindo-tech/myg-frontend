"use client";
import React, { useState, useEffect } from "react";
import {
  Button, Input, Card, Table, TableHeader, TableColumn, TableBody,
  TableRow, TableCell, Pagination, Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, useDisclosure
} from "@nextui-org/react";
import Image from 'next/image';
import { SearchIcon, TrashIcon, AddCircleIcon, EditIcon } from "@/components/adminComponent/icon";
import ServiceForm from "@/components/adminComponent/layanan/ServiceModal";
import { getAllLayanan, createLayanan, updateLayananById, deleteLayananById } from "@/lib/admin/listLayanan/listLayananServiceAPI";
import { formatRupiah } from "@/helpers/formatRupiah";
import api from '@/axios/axiosConfig';

interface Service {
  serviceId: number;
  title: string;
  description: string;
  price: number;
  imageFile?: File | string | null;
  imageUrl?: string;
}

const ListServicePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete" | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [imageUrls, setImageUrls] = useState<Record<number, string>>({});

  // Cleanup URL.createObjectURL resources on component unmount
  useEffect(() => {
    return () => {
      Object.values(imageUrls).forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [imageUrls]);

  useEffect(() => {
    // Fetch all services from the backend
    const fetchServices = async () => {
      try {
        const data = await getAllLayanan();
        // Map the API response to ensure price is a number and absolute image URL
        const mappedServices = data.results.map((service: any) => ({
          ...service,
          price: parseFloat(service.price) || 0,
          // Keep imageUrl from API response but convert to absolute URL if needed
        }));
        setServices(mappedServices);
        setFilteredServices(mappedServices);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    // Filter services based on search input
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

  const handleFileChange = (imageFile: File | null) => {
    setSelectedService(prev => prev ? { ...prev, imageFile } : null);
    
    // Create blob URL for preview
    if (imageFile && selectedService?.serviceId) {
      const url = URL.createObjectURL(imageFile);
      setImageUrls(prev => ({ ...prev, [selectedService.serviceId]: url }));
    }
  };

  const handleModalOpen = (mode: "add" | "edit" | "delete", service?: Service) => {
    setModalMode(mode);
    setSelectedService(service || { serviceId: services.length + 1, title: "", description: "", price: 0, imageFile: null });
    onOpen();
  };

  const handleConfirm = async () => {
    if (!selectedService) return;

    try {
      switch (modalMode) {
        case "add":
          const newService = await createLayanan(selectedService);
          setServices([...services, newService.results]);
          break;
        case "edit":
          const updatedService = await updateLayananById(selectedService.serviceId, selectedService);
          setServices(services.map(s => s.serviceId === updatedService.results.serviceId ? updatedService.results : s));
          break;
        case "delete":
          await deleteLayananById(selectedService.serviceId);
          setServices(services.filter(s => s.serviceId !== selectedService.serviceId));
          
          // Clean up any blob URLs
          if (imageUrls[selectedService.serviceId]) {
            URL.revokeObjectURL(imageUrls[selectedService.serviceId]);
            setImageUrls(prev => {
              const newUrls = {...prev};
              delete newUrls[selectedService.serviceId];
              return newUrls;
            });
          }
          break;
      }
      onOpenChange(); // Close modal on successful action
    } catch (error) {
      console.error("Operation failed", error);
    }
  };

  // Helper function to get image source - now handles relative paths
  const getImageSrc = (service: Service): string => {
    // First check for API returned imageUrl
    if (service.imageUrl) {
      // Fix the path: ensure it starts with a slash or is an absolute URL
      if (service.imageUrl.startsWith('http')) {
        return service.imageUrl;
      } else {
        // Convert relative path to absolute URL

        // Replace backslashes with forward slashes for web URLs
        const normalizedPath = service.imageUrl.replace(/\\/g, '/');
        
        // Add leading slash if needed
        const pathWithSlash = normalizedPath.startsWith('/') 
          ? normalizedPath 
          : `/${normalizedPath}`;
          
        return `${api.defaults.baseURL}${pathWithSlash}`;
      }
    }
    
    // Then check for local imageFile
    if (!service.imageFile) return '/placeholder-image.jpg'; // Provide a placeholder
    
    if (typeof service.imageFile === 'string') {
      return service.imageFile;
    }
    
    // Check if we already have a blob URL for this service
    if (imageUrls[service.serviceId]) {
      return imageUrls[service.serviceId];
    }
    
    // Create and store a new blob URL
    const url = URL.createObjectURL(service.imageFile);
    setImageUrls(prev => ({ ...prev, [service.serviceId]: url }));
    return url;
  };

  return (
    <div className="w-full h-full px-6 py-6">
      <div className="font-openSans text-4xl text-abugelap mb-6">List Service</div>
      <Card className="bg-white rounded-2xl border p-6">
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

        <Table>
          <TableHeader>
            <TableColumn>No</TableColumn>
            <TableColumn>Poster Layanan</TableColumn>
            <TableColumn>Nama Layanan</TableColumn>
            <TableColumn>Deskripsi</TableColumn>
            <TableColumn>Harga</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {paginatedServices.map((service, index) => (
              <TableRow key={service.serviceId}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Image
                    src={getImageSrc(service)} 
                    alt="Service Poster" 
                    className="w-32 h-32 object-cover rounded-lg mb-2"
                    width={100}
                    height={100}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {service.title}
                  </div>
                </TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>{formatRupiah(service.price)}</TableCell>
                <TableCell>
                  <Button variant="light" startContent={<EditIcon />} onClick={() => handleModalOpen("edit", service)}>Edit</Button>
                  <Button variant="light" startContent={<TrashIcon />} onClick={() => handleModalOpen("delete", service)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex mt-4 items-center justify-center">
          <div className="flex w-[40%] justify-center items-center gap-2">
            <Button isDisabled={page <= 1} size="sm" variant="flat" onPress={() => setPage(prev => prev - 1)}>Previous</Button>
            <Pagination isCompact total={pages} initialPage={page} onChange={(page) => setPage(page)} variant="light" />
            <Button isDisabled={page >= pages} size="sm" variant="flat" onPress={() => setPage(prev => prev + 1)}>Next</Button>
          </div>
        </div>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                {modalMode === "add" ? "Tambah Layanan" : modalMode === "edit" ? "Edit Layanan" : "Confirm Deletion"}
              </ModalHeader>
              <ModalBody>
                {modalMode === "delete" ? (
                  <p>Are you sure you want to delete <strong>{selectedService?.title}</strong>?</p>
                ) : (
                  selectedService && (
                    <ServiceForm
                      service={selectedService}
                      onInputChange={handleInputChange}
                      onFileChange={handleFileChange}
                    />
                  )
                )}
              </ModalBody>
              <ModalFooter>
                <Button onPress={() => { handleConfirm(); onClose(); }} className={modalMode === "delete" ? "bg-danger text-white" : "bg-kuning2 text-white"}>
                  {modalMode === "add" ? "Tambah" : modalMode === "edit" ? "Simpan Perubahan" : "Delete"}
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