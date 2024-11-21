import type { PageLoad } from "./$types";
import client from "../../../gql/apolloClient";
import {
  GetSingleWork,
  type GetSingleWorkQuery,
} from "../../../gql/gen/codegen";
import { error } from "@sveltejs/kit";
import { workToType } from "../../../utils/sanity";

export const load = (async ({ params }) => {
  const data = await client.query<GetSingleWorkQuery>({
    query: GetSingleWork,
    variables: {
      slug: params.slug,
    },
  });

  if (data.data.allWork.length < 1) {
    throw error(404, "Not found");
  }

  const work = workToType(data.data.allWork[0]);

  return {
    work,
  };
}) satisfies PageLoad;
