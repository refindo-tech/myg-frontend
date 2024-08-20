
export default interface OrderItem {
    orderItemId: number;
    orderId: number;
    productId: number;
    quantity: number;
    price: string;
    total: number;
    product: Product;
}

interface Product {
    name: string;
    productImages: string[];
}