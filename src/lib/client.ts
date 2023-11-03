import { GraphQLClient } from "graphql-request"

console.log(process.env.NEXT_PUBLIC_API_URI)
export const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URI ?? "")
