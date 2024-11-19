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
    scrollHeroImage: Image;
    scrollHeroAnchor: string;
  } = {
    heroText: data.data.allHome[0].heroText ?? "",
    scrollHeroImage: customImageToType(data.data.allHome[0].scrollHeroImage),
    scrollHeroAnchor: data.data.allHome[0].scrollHeroAnchor ?? "top",
  };

  return homeData;
};
