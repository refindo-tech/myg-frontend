export default interface CartItem {
    cartItemId: number;
    cartId: number;
    productId: number;
    quantity: number;
    product: {
        name: string;
        price: {
            RETAIL: number;
            AGENT: number;
            DISTRIBUTOR: number;
        };
        productImages: string;
    };
}