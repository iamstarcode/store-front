"use client"

import request from "graphql-request"
import useSWR from "swr"

import { client } from "@/lib/client"
import { GetProducts } from "@/hooks/useProducts"

function NewArrivals() {
  //const variables = { take: 5, skip: 0 }

  const fetcher = (query, variables) => {
    console.log(query, variables)
    return request(`https://graphql-pokemon.now.sh`, query, variables)
  }

  const variables = { code: 14 }
  const { data, error } = useSWR(
    [
      `query GET_DATA($code: String!) {
          getRegionsByCode(code: $code) {
            code
            name
          }
        }`,
      variables,
    ],
    fetcher
  )

  console.log(data, error, "tuhtjhtjhn")
  return (
    <div className="block">
      <h2 className="py-4 text-2xl font-bold">New Arrivals</h2>
      <div className="h-60 overflow-x-scroll">{<p>thsosis</p>}</div>
    </div>
  )
}

export default NewArrivals
