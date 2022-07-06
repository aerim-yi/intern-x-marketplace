// Get a list of orders from a particular collection
import { getConfig, OrdersApi, ListOrdersResponse } from "@imtbl/core-sdk";

export const getOrders = async (sell_token_address: string): Promise<ListOrdersResponse> => {
    const config = getConfig("ropsten");
    const ordersApi = new OrdersApi(config.api);

    const response = await ordersApi.listOrders({
        sellTokenAddress: sell_token_address
    });

    return response.data
};
