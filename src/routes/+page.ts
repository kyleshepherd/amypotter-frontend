import client from "../gql/apolloClient";
import {
  GetHome,
  GetWorkForHome,
  type GetWorkForHomeQuery,
  type GetHomeQuery,
} from "../gql/gen/codegen";
import type { HomeWork, Image } from "../types";
import { customImageToType, homeWorkToType } from "../utils/sanity";

export const load = async () => {
  const homeData = await client.query<GetHomeQuery>({
    query: GetHome,
  });

  const workData = await client.query<GetWorkForHomeQuery>({
    query: GetWorkForHome,
  });

  const data: {
    heroText: string;
    polaroidImages: Image[];
    aboutText: string;
    work: HomeWork[];
  } = {
    heroText: homeData.data.allHome[0].heroText ?? "",
    polaroidImages:
      homeData.data.allHome[0].polaroidImages?.map(img =>
        customImageToType(img),
      ) || [],
    aboutText: homeData.data.allHome[0].aboutText ?? "",
    work: workData.data.allWork.map(work => homeWorkToType(work)) ?? [],
  };

  return data;
};
