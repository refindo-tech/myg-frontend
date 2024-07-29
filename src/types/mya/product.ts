export default interface Product {
    productId: number;
    name: string;
    description: string;
    category: string;
    price: {
        RETAIL: number;
        AGENT: number;
        DISTRIBUTOR: number;
    };
    stock: number;
    productImages: string;
    type: string;
    uploadedBy: number;
    createdAt: string;
    updatedAt: string;
}