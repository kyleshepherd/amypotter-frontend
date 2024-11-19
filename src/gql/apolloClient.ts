import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  type DefaultOptions,
} from "@apollo/client/core/index.js";
import fetch from "cross-fetch";

const ENDPOINT =
  "https://jh4ghg2v.api.sanity.io/v2023-08-01/graphql/production/default";

const httpLink = createHttpLink({
  uri: ENDPOINT,
  fetch,
});

const isServer = typeof window === "undefined";

const ssrOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export default new ApolloClient({
  ssrMode: isServer,
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: isServer ? ssrOptions : undefined,
});
