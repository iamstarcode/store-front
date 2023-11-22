"use client"

import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { client } from "@/lib/client"
import { GetProductsNewArrivalsQuery, getSdkWithHooks } from "@/hooks/use-query"
import ProductCard from "@/components/product-card"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "@/styles/swiper.css"
import { Carousel } from "@mantine/carousel"
import { MantineProvider } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"

import "@mantine/carousel/styles.css"

function NewArrivals() {
  const sdk = getSdkWithHooks(client())

  const [emblaRef] = useEmblaCarousel()
  const { width } = useViewportSize()

  const { data, error } = sdk.useGetProductsNewArrivals()

  const OPTIONS: EmblaOptionsType = { align: "center", containScroll: false }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <>
      <Swiper direction={"horizontal"} className="mySwiper hidden">
        <SwiperSlide>
          {data?.products.items.map(
            (item: GetProductsNewArrivalsQuery["products"]["items"][0]) => (
              <ProductCard product={item} />
            )
          )}
        </SwiperSlide>
      </Swiper>
      <div className="hidden">
        <h2 className="py-4 text-2xl font-bold">New Arrivals</h2>
        <div className="w-full  overflow-x-scroll">
          <div className="inline-flex w-max snap-x space-x-4">
            {data?.products.items.map(
              (item: GetProductsNewArrivalsQuery["products"]["items"][0]) => (
                <ProductCard product={item} />
              )
            )}
          </div>
        </div>
      </div>

      <MantineProvider>
        <Carousel
          align="start"
          withIndicators
          slideSize={{ base: "100%", sm: "40%", md: "22.5%" }}
          height={200}
        >
          {data?.products.items.map(
            (item: GetProductsNewArrivalsQuery["products"]["items"][0]) => (
              <Carousel.Slide>
                <ProductCard product={item} />
              </Carousel.Slide>
            )
          )}
        </Carousel>
      </MantineProvider>
      <div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container space-x-3">
            {data?.products.items.map(
              (item: GetProductsNewArrivalsQuery["products"]["items"][0]) => (
                <div className="w-[12.5%] shrink-0 grow-0">
                  <ProductCard product={item} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewArrivals
