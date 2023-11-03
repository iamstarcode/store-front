import { gql } from "graphql-request"

const ProductsFragment = gql`
  fragment ProductsFragment on Product {
    id
    name
    slug
    variants {
      price
    }
    assets {
      source
      preview
    }
  }
`

const GetProducts = gql`
  query GetProductsFragment($take: Int, $skip: Int) {
    products(options: { take: $take, skip: $skip }) {
      items {
        ...ProductsFragment
      }
    }
  }
`

const GetProductsNewArrivals = gql`
  query GetProductsNewArrivals {
    products(options: { sort: { createdAt: DESC }, take: 10 }) {
      items {
        ...ProductsFragment
      }
    }
  }
`
