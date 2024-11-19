import client from "../gql/apolloClient";
import { GetHome, type GetHomeQuery } from "../gql/gen/codegen";
import type { Image } from "../types";
import { customImageToType } from "../utils/sanity";

export const load = async () => {
  const data = await client.query<GetHomeQuery>({
    query: GetHome,
  });

  const images = data.data.allHome[0].scrollImages;

  const homeData: {
    heroText: string;
    scrollImages: Image[];
  } = {
    heroText: data.data.allHome[0].heroText ?? "",
    scrollImages:
      data.data.allHome[0].scrollImages?.map(img => customImageToType(img)) ||
      [],
  };

  return {
    heroText: homeData.heroText,
    scrollImages: homeData.scrollImages,
  };
};
