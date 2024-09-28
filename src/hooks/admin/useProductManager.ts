import React, { useState, useEffect, useRef, ChangeEvent, DragEvent } from 'react';
import { useDisclosure } from "@nextui-org/react";

interface Product {
    productId: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string | null | File;
}

interface UseProductManagerProps {
    initialProducts: Product[];
}

export const useProductManager = ({ initialProducts }: UseProductManagerProps) => {
    const [listProduct, setListProduct] = useState<Product[]>(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
    const [filterValue, setFilterValue] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const rowsPerPage = 5;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

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

    const [dragActive, setDragActive] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>, isEditing: boolean = false) => {
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
    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === 'dragenter' || e.type === 'dragover');
    };

    // Handle drop event
    const handleDrop = (e: DragEvent<HTMLDivElement>, isEditing = false) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (isEditing) {
                setEditProduct((prevState) => ({ ...prevState, imageUrl: file }));
            } else {
                setNewProduct((prevState) => ({ ...prevState, imageUrl: file }));
            }
        }
    };

    const onButtonClick = () => {
        fileInputRef.current?.click();
    };

    // Handle input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, isEditing = false) => {
        const { name, value } = e.target;
        if (isEditing) {
            setEditProduct((prevState) => ({ ...prevState, [name]: value }));
        } else {
            setNewProduct((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    // Handle product search/filtering
    useEffect(() => {
        const filtered = listProduct.filter((product) =>
            product.title.toLowerCase().includes(filterValue.toLowerCase()) ||
            product.description.toLowerCase().includes(filterValue.toLowerCase()) ||
            product.price.toString().includes(filterValue) ||
            product.stock.toString().includes(filterValue)
        );
        setFilteredProducts(filtered);
        setPage(1);
    }, [filterValue, listProduct]);

    const handleSearch = (value: string) => {
        setFilterValue(value);
    };

    // Handle pagination
    const pages = Math.ceil(filteredProducts.length / rowsPerPage);
    const paginatedProducts = filteredProducts.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const onPreviousPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const onNextPage = () => {
        if (page < pages) setPage((prev) => prev + 1);
    };

    // Handle delete product
    const handleDeleteProduct = (productId: number, title: string) => {
        setSelectedProduct({ productId, title, description: '', price: 0, stock: 0, imageUrl: null });
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteProduct = () => {
        if (selectedProduct) {
            setListProduct(listProduct.filter((product) => product.productId !== selectedProduct.productId));
            setIsDeleteModalOpen(false);
        }
    };

    // Handle detail product
    const handleDetailProduct = (product: Product) => {
        setSelectedProduct(product);
        setIsDetailModalOpen(true);
    };

    // Handle edit product
    const handleEditProduct = (product: Product) => {
        setEditProduct(product);
        setIsEditModalOpen(true);
    };

    const confirmEditProduct = () => {
        setListProduct(listProduct.map((product) => {
            if (product.productId === editProduct.productId) {
                const updatedProduct = { ...editProduct };

                if (editProduct.imageUrl instanceof File) {
                    updatedProduct.imageUrl = URL.createObjectURL(editProduct.imageUrl);
                } else if (editProduct.imageUrl === null) {
                    updatedProduct.imageUrl = '';
                }

                return updatedProduct;
            }
            return product;
        }));
        setIsEditModalOpen(false);
    };

    // Handle add new product
    const handleAddProduct = () => {
        const newProductId = listProduct.length + 1;
        const newImageUrl = newProduct.imageUrl ? URL.createObjectURL(newProduct.imageUrl) : '';
        const newProductData: Product = {
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
            title: '',
            description: '',
            price: 0,
            stock: 0,
            imageUrl: null,
        });
    };

    return {
        listProduct,
        selectedProduct,
        filteredProducts,
        filterValue,
        page,
        rowsPerPage,
        isOpen,
        onOpen,
        onOpenChange,
        isDeleteModalOpen,
        isDetailModalOpen,
        isEditModalOpen,
        newProduct,
        editProduct,
        dragActive,
        fileInputRef,
        paginatedProducts,
        pages,
        handleSearch,
        handleFileChange,
        handleDrag,
        handleDrop,
        handleInputChange,
        onButtonClick,
        onPreviousPage,
        onNextPage,
        setPage,
        handleDeleteProduct,
        confirmDeleteProduct,
        handleDetailProduct,
        handleEditProduct,
        confirmEditProduct,
        handleAddProduct,
    };
};
