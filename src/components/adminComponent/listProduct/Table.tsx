import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Avatar, Button } from "@nextui-org/react";
import {
    SearchIcon,
    TrashIcon,
    AddCircleIcon,
    EditIcon,
    DetailIcon,
} from "@/components/adminComponent/icon";

interface Product {
    productId: number;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    stock: number;
}

interface ProductTableProps {
    products: Product[];
    onDetail: (product: Product) => void;
    onEdit: (product: Product) => void;
    onDelete: (productId: number, productTitle: string) => void;
}

export const formatToRupiah = (number: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(number)
      .replace("IDR", "IDR ");
  };

const ProductTable: React.FC<ProductTableProps> = ({ products, onDetail, onEdit, onDelete }) => {
    return (
        <Table>
            <TableHeader>
                <TableColumn>No</TableColumn>
                <TableColumn>Nama Produk</TableColumn>
                <TableColumn>Deskripsi</TableColumn>
                <TableColumn>Harga</TableColumn>
                <TableColumn>Stok</TableColumn>
                <TableColumn className="flex justify-center items-center">Action</TableColumn>
            </TableHeader>
            <TableBody>
                {products.map((product, index) => (
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
                        <TableCell className="flex justify-center items-center">
                            <Button variant="light" startContent={<DetailIcon />} onPress={() => onDetail(product)}>Detail</Button>
                            <Button variant="light" startContent={<EditIcon />} onPress={() => onEdit(product)}>Edit</Button>
                            <Button variant="light" startContent={<TrashIcon />} onPress={() => onDelete(product.productId, product.title)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ProductTable;
