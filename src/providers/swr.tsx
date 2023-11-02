"use client"

import { SWRConfig, SWRConfiguration } from "swr"

function SWR(children: React.ReactNode) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    ></SWRConfig>
  )
}

export default SWR
