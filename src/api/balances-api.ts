import { getConfig, BalancesApi, ListBalancesResponse, EthNetwork } from "@imtbl/core-sdk";

// Inspired by this: https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
const ethNetwork = process.env.REACT_APP_ETHNETWORK as EthNetwork

// Get a list of assets
// Inspired from Immutable Core SDK documentation
export const getUserBalances = async (owner: string): Promise<ListBalancesResponse> => {
    const config = getConfig(ethNetwork);
    const balanceApi = new BalancesApi(config.api);

    const response = await balanceApi.listBalances({
        owner: owner
    })
    return response.data;
};
