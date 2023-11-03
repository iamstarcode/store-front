"use client"

import { client } from "@/lib/client"
import { getSdkWithHooks } from "@/hooks/use-query"

function NewArrivals() {
  const sdk = getSdkWithHooks(client())

  const variables = { take: 5, skip: 0 }

  const { data, error } = sdk.useGetProductsFragment(variables)

  console.log(data, "ahhhh")
  return (
    <div className="block">
      <h2 className="py-4 text-2xl font-bold">New Arrivals</h2>
      <div className="h-60 overflow-x-scroll">
        {/* isLoading && <p>Loading</p> */}
      </div>
    </div>
  )
}

export default NewArrivals
