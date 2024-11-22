import type { LayoutLoad } from "./$types";
import client from "../gql/apolloClient";
import { GetAboutText, type GetAboutTextQuery } from "../gql/gen/codegen.js";

export const load = (async ({ params }) => {
  const data = await client.query<GetAboutTextQuery>({
    query: GetAboutText,
  });

  return {
    aboutText: data.data.allHome[0].aboutText ?? "",
  };
}) satisfies LayoutLoad;
