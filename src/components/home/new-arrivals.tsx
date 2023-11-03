"use client"

import Image from "next/image"
import { ProductsFragment } from "sdk"
import { formatCurrency } from "utils/currency-format"

import { client } from "@/lib/client"
import { GetProductsNewArrivalsQuery, getSdkWithHooks } from "@/hooks/use-query"

import { StaticStarRating } from "../start-rating"

function NewArrivals() {
  const sdk = getSdkWithHooks(client())

  const { data, error } = sdk.useGetProductsNewArrivals()

  return (
    <div className="block">
      <h2 className="py-4 text-2xl font-bold">New Arrivals</h2>
      <div className="w-full  overflow-x-scroll">
        <div className="inline-flex w-max snap-x space-x-4">
          {data?.products.items.map(
            (item: GetProductsNewArrivalsQuery["products"]["items"][0]) => (
              <div className="card my-2 h-96 w-60 snap-center rounded-none dark:bg-white">
                <figure className="">
                  <Image
                    src={item.assets.at(0)?.preview ?? ""}
                    alt="product"
                    width={300}
                    height={350}
                  />
                </figure>
                <div className="items-start py-2">
                  <StaticStarRating
                    starAmount={Math.floor(Math.random() * (5 - 1 + 1)) + 1}
                  />

                  <h2 className="text-sm">{item.name}</h2>
                  <p className="text-sm">
                    {formatCurrency(
                      item.variants[0].price ?? "",
                      "NGN",
                      "en-NG"
                    )}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
