import OrderItem from "@/types/mya/orderitem";
import User from "@/types/mya/user";

export default interface Order {
    orderId: number;
    userId: number;
    totalAmount: number;
    code: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    orderItems: OrderItem[];
    user: User;
}