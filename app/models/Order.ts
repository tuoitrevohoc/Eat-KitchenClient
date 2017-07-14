/**
 * order items
 */
export interface OrderItem {
    name: string;
    price: number;
    count: number;
}

/**
 * the order
 */
export interface Order {
    id: string;
    items: OrderItem[];
    isReady: boolean;
}