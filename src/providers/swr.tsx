"use client"

import { ReactNode } from "react"
import { SWRConfig } from "swr"

import { client } from "@/lib/client"

function SWR({ children }: { children: ReactNode }) {
  const fetcher = ([query, variables]) => client.request(query, variables)

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
