import { TypedDocumentNode } from "@apollo/client"
import { RequestDocument, gql, request } from "graphql-request"
import {
  GraphQLClientRequestHeaders,
  Variables,
} from "graphql-request/build/esm/types"
import useSWR from "swr"

import { client } from "@/lib/client"

function useUser() {
  const fetcher = async (
    query: RequestDocument | TypedDocumentNode<unknown, any>,
    variables: any
  ) => {
    const data = await client.request(query, variables)
    return data
  }

  const GET_PRODUCTS = gql`
    query {
      products {
        items {
          name
        }
      }
    }
  `
  const { data, error, isLoading } = useSWR([GET_PRODUCTS, {}], fetcher)

  return {
    user: data,
    isLoading,
    isError: error,
  }
}

export const ProductFagment = gql`
  fragment Product on Product {
    id
    name
    slug
  }
`
export const GetProducts = gql`
  query GetProducts($take: Int, $skip: Int) {
    products(options: { take: $take, skip: $skip }) {
      items {
        id
        name
        slug
      }
    }
  }
`

const fetcher = async (query: RequestDocument, variables: any) => {
  const data = await client.request(query, variables)
  return data
}

export const useProducts = (take: any, skip: any) => {
  const query = gql`
    query GetProducts($take: Int, $skip: Int) {
      products(options: { take: $take, skip: $skip }) {
        items {
          id
          name
          slug
        }
      }
    }
  `

  const variables = {
    take,
    skip,
  }

  const { data, error } = useSWR([GetProducts, { take: 4, skip: 2 }], fetcher)

  console.log(data, "da")

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  }
}
