import { gql } from "graphql-request"

/* export const CollectionsRootFragment = gql`
  fragment CollectionsRootFragment on Collection {
    id
    name
    slug
  }
` */

const GetCollectionsRoot = gql`
  query GetCollectionsRoot {
    collections {
      items {
        id
        name
        slug
      }
    }
  }
`
