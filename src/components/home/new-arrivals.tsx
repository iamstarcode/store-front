"use client"

import { client } from "@/lib/client"
import { GetProductsNewArrivalsQuery, getSdkWithHooks } from "@/hooks/use-query"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ProductCard from "@/components/product-card"

function NewArrivals() {
  const sdk = getSdkWithHooks(client())

  const { data } = sdk.useGetProductsNewArrivals()

  return (
    <>
      <div>
        <h2 className="mt-5 text-lg font-medium md:text-2xl">New Arrivals</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {data?.products.items.map(
              (
                item: GetProductsNewArrivalsQuery["products"]["items"][0],
                index
              ) => (
                <CarouselItem key={index} className="basis-36 lg:basis-44">
                  <div className="p-1">
                    <ProductCard product={data?.products.items[4]} />
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          {/*  <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </>
  )
}

export default NewArrivals
