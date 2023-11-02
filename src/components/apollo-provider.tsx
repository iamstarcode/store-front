"use client"

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client"

function P() {
  const client = new ApolloClient({
    uri: " http://localhost:8000/shop-api",
    cache: new InMemoryCache(),
  })

  return <></>
}

export default P
