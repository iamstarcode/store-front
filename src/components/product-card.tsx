/* eslint-disable react/jsx-no-undef */

import Image from "next/image"
import { formatCurrency } from "utils/currency-format"

import { GetProductsNewArrivalsQuery } from "@/hooks/use-query"

import { StaticStarRating } from "./start-rating"

function ProductCard({
  product,
}: {
  product: GetProductsNewArrivalsQuery["products"]["items"][0]
}) {
  return (
    <div
      key={product.id}
      className="card my-2 snap-center items-start rounded-none dark:bg-white"
    >
      <Image
        src={product.assets.at(0)?.preview ?? ""}
        alt="product image"
        width={300}
        height={350}
      />

      <div className="flex flex-col items-start py-2">
        <StaticStarRating
          starAmount={Math.floor(Math.random() * (5 - 1 + 1)) + 1}
        />

        <h2 className="text-sm font-medium">{product.name}</h2>
        <p className="text-sm font-medium">
          {formatCurrency(product.variants[0].price ?? "", "NGN", "en-NG")}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
