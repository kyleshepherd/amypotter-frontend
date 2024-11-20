import client from "../gql/apolloClient";
import { GetHome, type GetHomeQuery } from "../gql/gen/codegen";
import type { Image } from "../types";
import { customImageToType } from "../utils/sanity";

export const load = async () => {
  const data = await client.query<GetHomeQuery>({
    query: GetHome,
  });

  const homeData: {
    heroText: string;
    polaroidImages: Image[];
  } = {
    heroText: data.data.allHome[0].heroText ?? "",
    polaroidImages:
      data.data.allHome[0].polaroidImages?.map(img => customImageToType(img)) ||
      [],
  };

  return homeData;
};
