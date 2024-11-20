import client from "../gql/apolloClient";
import {
  GetHome,
  GetWorkForHome,
  type GetWorkForHomeQuery,
  type GetHomeQuery,
} from "../gql/gen/codegen";
import type { Image, Work } from "../types";
import { customImageToType, workToType } from "../utils/sanity";

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
    work: Work[];
  } = {
    heroText: homeData.data.allHome[0].heroText ?? "",
    polaroidImages:
      homeData.data.allHome[0].polaroidImages?.map(img =>
        customImageToType(img),
      ) || [],
    aboutText: homeData.data.allHome[0].aboutText ?? "",
    work: workData.data.allWork.map(work => workToType(work)) ?? [],
  };

  return data;
};
