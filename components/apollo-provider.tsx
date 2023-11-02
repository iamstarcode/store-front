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

  client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
    .then((result) => console.log(result))
  return <></>
}

export default P
