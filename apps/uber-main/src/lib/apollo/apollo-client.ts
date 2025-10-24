import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "/api/graphql", // Our API route endpoint
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

