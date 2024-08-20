import CartItem from './cartItem';

export default interface Cart {
    cartId: number;
    userId: number;
    cartItems: CartItem[];
}