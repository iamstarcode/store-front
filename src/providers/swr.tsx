"use client"

import { ReactNode } from "react"
import { SWRConfig, SWRConfiguration } from "swr"

import { client } from "@/lib/client"

function SWR({ children }: { children: ReactNode }) {
  const fetcher = async (query: string, variables: any) => {
    const data = await client.request(query, variables)
    return data
  }
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SWR
