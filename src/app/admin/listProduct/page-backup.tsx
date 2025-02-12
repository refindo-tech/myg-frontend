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
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
  Image,
} from "@nextui-org/react";
import {
  SearchIcon,
  TrashIcon,
  AddCircleIcon,
  EditIcon,
  DetailIcon,
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
  const [selectedProduct, setSelectedProduct] = useState<{ productId: number, title: string, description: string, price: number, stock: number, imageUrl: string } | null>(null);
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
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, isEditing: boolean = false) => {
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
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, isEditing: boolean = false) => {
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
    const filtered = listProduct.filter((product) =>
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
    const handleDeleteProduct = (productId: number, title:string) => {
        setSelectedProduct({ productId, title, description: "", price: 0, stock: 0, imageUrl: "" });
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteProduct = () => {
        if (selectedProduct) {
            setListProduct(listProduct.filter((product) => product.productId !== selectedProduct.productId));
            setIsDeleteModalOpen(false);
        }
    };

    // Handle detail Product
    const handleDetailProduct = (Product: { productId: number, title: string, description: string, price: number, stock: number, imageUrl: string }) => {
        setSelectedProduct(Product);
        setIsDetailModalOpen(true);
    };

    // Handle edit Product
    const handleEditProduct = (Product: { productId: number, title: string, description: string, price: number, stock: number, imageUrl: string }) => {
        setEditProduct(Product);
        setIsEditModalOpen(true);
    };

    const confirmEditProduct = () => {
        setListProduct(listProduct.map((product) => {
            if (product.productId === editProduct.productId) {
                const updatedProduct = { ...editProduct };

                if (editProduct.imageUrl instanceof File) {
                    updatedProduct.imageUrl = URL.createObjectURL(editProduct.imageUrl);
                }else if (editProduct.imageUrl === null) {
                    updatedProduct.imageUrl = "";
                }

                return updatedProduct as { productId: number, title: string, description: string, price: number, stock: number, imageUrl: string };
            }
            return product;
        }));
        setIsEditModalOpen(false);
    }

    // Pagination Button
    const onPreviousPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
      };
    
      const onNextPage = () => {
        if (page < pages) setPage((prev) => prev + 1);
      };

    // function to update the product list
    const handleAddProduct = () => {
        const newProductId =  listProduct.length + 1;
        const newImageUrl = newProduct.imageUrl ? URL.createObjectURL(newProduct.imageUrl) : "";
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
          <Table>
            <TableHeader>
              <TableColumn>No</TableColumn>
              <TableColumn>Nama Produk</TableColumn>
              <TableColumn>Deskripsi</TableColumn>
              <TableColumn>Harga</TableColumn>
              <TableColumn>Stok</TableColumn>
              <TableColumn className="flex justify-center items-center">
                Action
              </TableColumn>
            </TableHeader>
            <TableBody>
              {paginatedProducts.map((product, index) => (
                <TableRow key={product.productId}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar src={product.imageUrl} radius="sm" />
                      <div>{product.title}</div>
                    </div>
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{formatToRupiah(product.price)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell className="flex justify-center items-center ">
                    <Button
                      variant="light"
                      startContent={<DetailIcon />}
                      onPress={() => handleDetailProduct(product)}
                    >
                      Detail
                    </Button>
                    <Button
                      variant="light"
                      startContent={<EditIcon />}
                      onPress={() => handleEditProduct(product)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="light"
                      startContent={<TrashIcon />}
                      onPress={() =>
                        handleDeleteProduct(product.productId, product.title)
                      }
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex mt-4 items-center justify-center">
            <div className="flex w-[40%] justify-center items-center gap-2">
              <Button
                variant="light"
                onPress={onPreviousPage}
                disabled={page === 1}
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
                variant="light"
                onPress={onNextPage}
                disabled={page === pages}
              >
                Next
              </Button>
            </div>
          </div>

          {/* Delete Modal */}
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            placement="top-center"
          >
            <ModalContent>
              <ModalHeader>Delete Product</ModalHeader>
              <ModalBody>
                <div>
                  Are you sure you want to delete{" "}
                  <span className="font-bold">{selectedProduct?.title}</span>?
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  onPress={() => setIsDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="light"
                  onPress={confirmDeleteProduct}
                  className="bg-danger text-white"
                >
                  Delete
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Detail Modal */}
          <Modal
            isOpen={isDetailModalOpen}
            onClose={() => setIsDetailModalOpen(false)}
            placement="top-center"
            className="bg-white rounded-lg p-6 max-w-2xl w-full"
          >
            <ModalContent>
              <ModalHeader>Detail Product</ModalHeader>
              <ModalBody>
                <div className="flex gap-4">
                  <Image
                    src={selectedProduct?.imageUrl}
                    radius="sm"
                    width={300}
                    height={300}
                  />
                  <div>
                    <div className="font-bold">{selectedProduct?.title}</div>
                    <div>{selectedProduct?.description}</div>
                    <div>Harga: {selectedProduct?.price}</div>
                    <div>Stok: {selectedProduct?.stock}</div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  onPress={() => setIsDetailModalOpen(false)}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Modal for Edit */}
          <Modal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            placement="top-center"
            className="bg-white rounded-lg p-6 max-w-2xl w-full"
          >
            <ModalContent>
              <ModalHeader className="flex flex-col items-center border-b pb-4">
                <h2 className="text-xl font-semibold">Edit Layanan</h2>
                <p className="text-sm text-gray-500">
                  Ubah data layanan berikut
                </p>
              </ModalHeader>
              <ModalBody className="py-4">
                  <div className="flex flex-row gap-3">
                    <Input
                      name="title"
                      label="Nama Produk"
                      value={editProduct.title}
                      onChange={(e) => handleInputChange(e, true)}
                    />

                    <Input
                      name="price"
                      label="Harga"
                      type="number"
                      value={editProduct.price.toString()}
                      onChange={(e) => handleInputChange(e, true)}
                    />
                  </div>

                  <Input
                    name="stock"
                    label="Stok"
                    type="number"
                    value={editProduct.stock.toString()}
                    onChange={(e) => handleInputChange(e, true)}
                  />

                  <Textarea
                    name="description"
                    label="Deskripsi"
                    value={editProduct.description}
                    onChange={(e) => handleInputChange(e, true)}
                  />

                  {/* Foto Produk */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Gambar Produk
                    </label>
                    <div
                        className={`border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center ${
                            dragActive ? "border-blue-500" : ""
                        }rounded-lg p-4 text-center relative`}
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={(e) => handleDrop(e, true)}
                        onClick={onButtonClick}
                    >
                        <Input
                            type="file"
                            ref={fileInputRef}
                            onChange={(e) => handleFileChange(e, true)}
                            className="hidden"
                            accept="image/*"
                        />
                        {editProduct.imageUrl ? (
                            <div className="flex flex-col items-center">
                                <Image
                                    src={typeof editProduct.imageUrl === "string" ? editProduct.imageUrl : URL.createObjectURL(editProduct.imageUrl)}
                                    alt="product"
                                    className="w-32 h-32 object-cover rounded-lg mb-2"
                                />
                                <p className="text-sm text-gray-500">
                                    {typeof editProduct.imageUrl === "string" ? "Image uploaded" : "Change image"}
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
                                    Drag and drop your image here
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
                  variant="light"
                  onPress={confirmEditProduct}
                  className="bg-kuning2 text-white font-bold"
                >
                  Simpan Perubahan
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>


            {/* Modal for Add */}
            <Modal
                isOpen={isOpen}
                onClose={onOpenChange}
                placement="top-center"
                className="bg-white rounded-lg p-6 max-w-2xl w-full"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col items-center border-b pb-4">
                        <h2 className="text-xl font-semibold">Tambah Produk</h2>
                        <p className="text-sm text-gray-500">
                            Lengkapi data berikut untuk menambahkan produk baru
                        </p>
                    </ModalHeader>
                    <ModalBody className="py-4">
                        <div className="flex flex-row gap-3">
                            <Input
                                name="title"
                                label="Nama Produk"
                                value={newProduct.title}
                                onChange={handleInputChange}
                            />

                            <Input
                                name="price"
                                label="Harga"
                                type="number"
                                value={newProduct.price.toString()}
                                onChange={handleInputChange}
                            />
                        </div>

                        <Input
                            name="stock"
                            label="Stok"
                            type="number"
                            value={newProduct.stock.toString()}
                            onChange={handleInputChange}
                        />

                        <Textarea
                            name="description"
                            label="Deskripsi"
                            value={newProduct.description}
                            onChange={handleInputChange}
                        />

                        {/* Foto Produk */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                Gambar Produk
                            </label>
                            <div
                                className={`border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center ${
                                    dragActive ? "border-blue-500" : ""
                                }rounded-lg p-4 text-center relative`}
                                onDragEnter={handleDrag}
                                onDragOver={handleDrag}
                                onDragLeave={handleDrag}
                                onDrop={handleDrop}
                                onClick={onButtonClick}
                            >
                                <Input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                {newProduct.imageUrl ? (
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={URL.createObjectURL(newProduct.imageUrl)}
                                            alt="product"
                                            className="w-32 h-32 object-cover rounded-lg mb-2"
                                        />
                                        <p className="text-sm text-gray-500">
                                            Image uploaded
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex justify-center mb-2">
                                            <svg
                                                xmlns="http://www.w3.org
                                                /2000/svg"
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
                                            Drag and drop your image here
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
                            variant="light"
                            onPress={handleAddProduct}
                            className="bg-kuning2 text-white font-bold"
                        >
                            Tambah Produk
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Card>
      </div>
    );

};

export default ListProductPage;