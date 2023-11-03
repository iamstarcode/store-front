import { TypedDocumentNode } from "@apollo/client"
import { RequestDocument, Variables, request } from "graphql-request"

export const fetcher = (
  query: RequestDocument | TypedDocumentNode<unknown, Variables>
) => request("http:localhost:8000/shop-api", query)
