import React, { useRef, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import api from '@/axios/axiosConfig';

interface Service {
  serviceId: number;
  title: string;
  description: string;
  price: number;
  imageFile?: File | string | null;
  imageUrl?: string;
}

interface ServiceFormProps {
  service: Service;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFileChange: (imageFile: File | null) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ service, onInputChange, onFileChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

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
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    onFileChange(file);
  };

  // Get the image source for preview
  const getImagePreviewSrc = () => {
    if (service.imageFile) {
      if (typeof service.imageFile === 'string') {
        return service.imageFile;
      } else {
        return URL.createObjectURL(service.imageFile);
      }
    } else if (service.imageUrl) {
      // Handle relative URL paths correctly
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
    return null;
  };

  const hasImage = service.imageFile || service.imageUrl;
  const previewSrc = getImagePreviewSrc();

  return (
    <>
      <div className="flex flex-row gap-3">
        <Input
          label="Nama"
          placeholder="Masukkan nama layanan"
          className="mb-4"
          name="title"
          value={service.title}
          onChange={onInputChange}
        />
        <Input
          label="Harga"
          placeholder="Masukan harga layanan"
          className="mb-4"
          name="price"
          type="number"
          value={service.price.toString()}
          onChange={onInputChange}
        />
      </div>
      <Textarea
        label="Deskripsi"
        placeholder="Masukkan deskripsi layanan"
        className="mb-4"
        name="description"
        value={service.description}
        onChange={onInputChange}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Foto layanan</label>
        <div
          className={`border-2 border-dashed ${dragActive ? "border-kuning2" : "border-gray-300"} rounded-lg p-4 text-center relative`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
            accept="image/*"
          />
          {hasImage && previewSrc ? (
            <div className="flex flex-col items-center">
              {/* Use standard img tag instead of NextUI Image component */}
              <Image
                src={previewSrc}
                alt="Service Preview"
                className="w-32 h-32 object-cover rounded-lg mb-2"
                width={100}
                height={100}
              />
              <p className="text-sm text-gray-500">
                {service.imageFile instanceof File 
                  ? service.imageFile.name 
                  : 'Click or drag new image'}
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
              <p className="text-sm text-gray-500">Click to Upload or drag and drop</p>
              <p className="text-xs text-gray-400">(Max. File size: 25 MB)</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceForm;