// Get a list of collections
import { getConfig, CollectionsApi, ListCollectionsResponse } from "@imtbl/core-sdk";

const GetYourCollections = async (pageSize: number): Promise<ListCollectionsResponse> => {
  const config = getConfig("ropsten");
  const collectionsApi = new CollectionsApi(config.api);

  const response = await collectionsApi.listCollections({
    pageSize,
  })

  return response.data;
};

export default GetYourCollections