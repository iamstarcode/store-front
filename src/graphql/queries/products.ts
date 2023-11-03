import { gql } from "graphql-request"

const ProductsFagment = gql`
  fragment Products on Product {
    id
    name
    slug
  }
`

const GetProducts = gql`
  query GetProductsFragment($take: Int, $skip: Int) {
    products(options: { take: $take, skip: $skip }) {
      items {
        ...Products
      }
    }
  }
`
