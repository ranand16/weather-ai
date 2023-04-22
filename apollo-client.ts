import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function getClient(): ApolloClient<any> {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: process.env.API_URL,
  });

  return new ApolloClient({
    cache,
    uri: process.env.API_URL,
    link,
    headers: {
      Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
  });
}
