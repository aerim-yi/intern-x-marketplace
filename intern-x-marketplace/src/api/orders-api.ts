// Get a list of orders from a particular collection
import { getConfig, OrdersApi, ListOrdersResponse, EthNetwork } from "@imtbl/core-sdk";

// Inspired by this: https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
const network = process.env.REACT_APP_ETHNETWORK as EthNetwork

export const getOrders = async (sellTokenAddress: string): Promise<ListOrdersResponse> => {
    const config = getConfig(network);
    const ordersApi = new OrdersApi(config.api);

    const response = await ordersApi.listOrders({
        sellTokenAddress: sellTokenAddress
    });

    return response.data
};
