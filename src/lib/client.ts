import { GraphQLClient } from "graphql-request"
import { RequestConfig } from "graphql-request/src/types"

export const client = (requestConfig?: RequestConfig) =>
  new GraphQLClient(process.env.NEXT_PUBLIC_API_URI ?? "", requestConfig)
