import { getConfig, CollectionsApi, ListCollectionsResponse } from "@imtbl/core-sdk";

// Get a list of collections
// Inspired from Immutable Core SDK documentation
const GetYourCollections = async (): Promise<ListCollectionsResponse> => {
  const config = getConfig("ropsten");
  const collectionsApi = new CollectionsApi(config.api);

  const response = await collectionsApi.listCollections()

  return response.data;
};

export default GetYourCollections
