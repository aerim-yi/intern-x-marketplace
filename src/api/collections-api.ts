import { getConfig, CollectionsApi, ListCollectionsResponse, EthNetwork } from "@imtbl/core-sdk";

// Inspired by this: https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
const ethNetwork = process.env.REACT_APP_ETHNETWORK as EthNetwork

// Get a list of collections
// Inspired from Immutable Core SDK documentation
export const getCollections = async (): Promise<ListCollectionsResponse> => {
  const config = getConfig(ethNetwork);
  const collectionsApi = new CollectionsApi(config.api);

  const response = await collectionsApi.listCollections()
  return response.data;
};
