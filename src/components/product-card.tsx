/* eslint-disable react/jsx-no-undef */
import { formatCurrency } from "utils/currency-format"

import { client } from "@/lib/client"
import { GetProductsNewArrivalsQuery, getSdkWithHooks } from "@/hooks/use-query"

import { StaticStarRating } from "./start-rating"

function ProductCard({
  product,
}: {
  product: GetProductsNewArrivalsQuery["products"]["items"][0]
}) {
  return (
    <div className="card my-2 h-96 w-60 snap-center rounded-none dark:bg-white">
      <figure className="">
        <Image
          src={product.assets.at(0)?.preview ?? ""}
          alt="product image"
          width={300}
          height={350}
        />
      </figure>
      <div className="items-start py-2">
        <StaticStarRating
          starAmount={Math.floor(Math.random() * (5 - 1 + 1)) + 1}
        />

        <h2 className="text-sm">{product.name}</h2>
        <p className="text-sm">
          {formatCurrency(product.variants[0].price ?? "", "NGN", "en-NG")}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
