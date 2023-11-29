"use client"

import { ReactNode } from "react"
import { GraphQLClient } from "graphql-request"
import { SWRConfig } from "swr"

import { client } from "@/lib/client"

function SWR({ children }: { children: ReactNode }) {
  const cli = new GraphQLClient(process.env.NEXT_PUBLIC_API_URI ?? "")

  const fetcher = ([query, variables]: any) => cli.request(query, variables)

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SWR
