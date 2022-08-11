import { getConfig, AssetsApi, ListAssetsResponse, EthNetwork } from "@imtbl/core-sdk";

// Inspired by this: https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
const ethNetwork = process.env.REACT_APP_ETHNETWORK as EthNetwork

// Get a list of assets
// Inspired from Immutable Core SDK documentation
export const getUserAssets = async (user: string): Promise<ListAssetsResponse> => {
    const config = getConfig(ethNetwork);
    const assetApi = new AssetsApi(config.api);

    const response = await assetApi.listAssets({
        user: user
    })
    return response.data;
};
