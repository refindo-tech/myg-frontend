"use client";
import React, { useState, useRef, useEffect } from "react";

import ProductTable from "@/components/adminComponent/listProduct/Table";
import PaginationControl from "@/components/adminComponent/listProduct/Pagination";
import DeleteProductModal from "@/components/adminComponent/listProduct/DeleteModal";
import DetailProductModal from "@/components/adminComponent/listProduct/DetailModal";
import EditProductModal from "@/components/adminComponent/listProduct/EditModal";
import AddProductModal from "@/components/adminComponent/listProduct/AddModal";

import {
  Button,
  Input,
  Card,
  useDisclosure,
} from "@nextui-org/react";
import {
  SearchIcon,
  AddCircleIcon,
} from "@/components/adminComponent/icon";

// Initial data for Product
const Products = [
  {
    productId: 1,
    title: "Product 1",
    description: "Description 1",
    price: 100000,
    stock: 10,
    imageUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    productId: 2,
    title: "Product 2",
    description: "Description 2",
    price: 200000,
    stock: 5,
    imageUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    productId: 3,
    title: "Product 3",
    description: "Description 3",
    price: 300000,
    stock: 8,
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

const ListProductPage = () => {
  const [listProduct, setListProduct] = useState(Products);
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    productId: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
  } | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: null as File | null,
  });

  const [editProduct, setEditProduct] = useState({
    productId: 0,
    title: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: null as string | File | null,
  });

  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isEditing: boolean = false
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (isEditing) {
        setEditProduct((prevState) => ({ ...prevState, imageUrl: file }));
      } else {
        setNewProduct((prevState) => ({ ...prevState, imageUrl: file }));
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
  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    isEditing: boolean = false
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (isEditing) {
        setEditProduct((prevState) => ({
          ...prevState,
          imageUrl: e.dataTransfer.files[0],
        }));
      } else {
        setNewProduct((prevState) => ({
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

  // Handle new product input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    isEditing: boolean = false
  ) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditProduct((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setNewProduct((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  // handle search product
  useEffect(() => {
    const filtered = listProduct.filter(
      (product) =>
        product.title.toLowerCase().includes(filterValue.toLowerCase()) ||
        product.description.toLowerCase().includes(filterValue.toLowerCase()) ||
        product.price.toString().includes(filterValue) ||
        product.stock.toString().includes(filterValue)
    );
    setFilteredProducts(filtered);
    setPage(1); // Reset to first page when filtering
  }, [filterValue, listProduct]);

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  // Handle pagination
  const pages = Math.ceil(filteredProducts.length / rowsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Handle delete Product
  const handleDeleteProduct = (productId: number, title: string) => {
    setSelectedProduct({
      productId,
      title,
      description: "",
      price: 0,
      stock: 0,
      imageUrl: "",
    });
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteProduct = () => {
    if (selectedProduct) {
      setListProduct(
        listProduct.filter(
          (product) => product.productId !== selectedProduct.productId
        )
      );
      setIsDeleteModalOpen(false);
    }
  };

  // Handle detail Product
  const handleDetailProduct = (Product: {
    productId: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
  }) => {
    setSelectedProduct(Product);
    setIsDetailModalOpen(true);
  };

  // Handle edit Product
  const handleEditProduct = (Product: {
    productId: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
  }) => {
    setEditProduct(Product);
    setIsEditModalOpen(true);
  };

  const confirmEditProduct = () => {
    setListProduct(
      listProduct.map((product) => {
        if (product.productId === editProduct.productId) {
          const updatedProduct = { ...editProduct };

          if (editProduct.imageUrl instanceof File) {
            updatedProduct.imageUrl = URL.createObjectURL(editProduct.imageUrl);
          } else if (editProduct.imageUrl === null) {
            updatedProduct.imageUrl = "";
          }

          return updatedProduct as {
            productId: number;
            title: string;
            description: string;
            price: number;
            stock: number;
            imageUrl: string;
          };
        }
        return product;
      })
    );
    setIsEditModalOpen(false);
  };

  // Pagination Button
  const onPreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (page < pages) setPage((prev) => prev + 1);
  };

  // function to update the product list
  const handleAddProduct = () => {
    const newProductId = listProduct.length + 1;
    const newImageUrl = newProduct.imageUrl
      ? URL.createObjectURL(newProduct.imageUrl)
      : "";
    const newProductData = {
      productId: newProductId,
      title: newProduct.title,
      description: newProduct.description,
      price: newProduct.price,
      stock: newProduct.stock,
      imageUrl: newImageUrl,
    };

    setListProduct([...listProduct, newProductData]);
    onOpenChange();

    setNewProduct({
      title: "",
      description: "",
      price: 0,
      stock: 0,
      imageUrl: null,
    });
  };

  return (
    <div className="w-full h-full px-6 py-6">
      {/* Page Header */}
      <div className="font-openSans text-4xl text-abugelap mb-6">
        List Product
      </div>

      {/* Card Container */}
      <Card className="bg-white rounded-2xl border p-6">
        {/* Search and Add Product */}
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search products..."
            startContent={<SearchIcon />}
            className="max-w-[20rem]"
            value={filterValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Button
            className="bg-kuning2"
            variant="light"
            startContent={<AddCircleIcon />}
            onPress={onOpen}
          >
            Tambah Produk
          </Button>
        </div>

        {/* Table */}
        <ProductTable
          products={paginatedProducts}
          onDetail={handleDetailProduct}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />

        {/* Pagination */}
        <PaginationControl
          pages={pages}
          page={page}
          onPrevious={onPreviousPage}
          onNext={onNextPage}
          onPageChange={setPage}
        />

        {/* Delete Modal */}
        <DeleteProductModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          product={selectedProduct}
          onDelete={confirmDeleteProduct}
        />

        {/* Detail Modal */}
        <DetailProductModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          product={selectedProduct}
        />

        {/* Modal for Edit */}
        <EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={editProduct}
          onInputChange={confirmEditProduct}
          onFileChange={(e) => handleFileChange(e, true)}
          onSave={confirmEditProduct}
          dragActive={dragActive}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          fileInputRef={fileInputRef}
        />

        {/* Modal for Add */}
        <AddProductModal
          isOpen={isOpen}
          onClose={onOpenChange}
          product={newProduct}
          onInputChange={handleInputChange}
          onFileChange={handleFileChange}
          onAdd={handleAddProduct}
          dragActive={dragActive}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          fileInputRef={fileInputRef}
        />
      </Card>
    </div>
  );
};

export default ListProductPage;
