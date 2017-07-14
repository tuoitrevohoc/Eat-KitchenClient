import {Order} from "../models/Order";
/**
 * this eat api client
 */
export class EatApiClient {

    /**
     * the base url
     */
    baseUrl = "http://localhost:49833";

    /**
     * the the list of orders
     */
    getOrders() {
        return this.request<Order[]>("/api/orders");
    }


    setOrderReady(orderId: string) {
        return this.request<Boolean>("/api/orders/" + orderId,
            {
                body: "true",
                method: "PATCH"
            }
        );
    }

    /**
     * send request
     * @param endPoint
     * @param request
     * @returns {Promise<any>}
     */
    async request<T>(endPoint: string, options: RequestInit = {}):
        Promise<T> {
        options.mode = 'cors';
        options.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        const result = await fetch(this.baseUrl + endPoint, options);
        return result.json() as Promise<T>;
    }
}