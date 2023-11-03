"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "@/styles/swiper.css"
import Image from "next/image"
import { TypedDocumentNode } from "@apollo/client"
import { parse } from "graphql"
import request, { RequestDocument, gql } from "graphql-request"
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import useSWR from "swr"

import { client } from "@/lib/client"
import { GetProducts, useProducts } from "@/hooks/useProducts"

export default function HomeSlide() {
  /*   const fetcher = (query: any, variables: any) =>
    request(`process.env.NEXT_PUBLIC_API_URI`, query, variables) */

  /*  const { data, error, isLoading } = useSWR(
    [GetProducts, { take: 5, skip: 0 }],
    fetcher(GetProducts, { take: 5, skip: 0 })
  )

  console.log(data, "dddddd11") */
  // useProducts(5, 6)
  //

  useEffect(() => {
    const aa = async () => {
      const endpoint = `http:localhost:8000/shop-api`

      const query: TypedDocumentNode<
        { products: string },
        Record<any, any>
      > = parse(gql`
        # Write your query or mutation here
        query {
          products(options: { take: 5, skip: 0 }) {
            items {
              id
              name
              slug
            }
          }
        }
      `)

      const variables = { take: 5, skip: 0 }

      const data = await client.request(query, variables)

      console.log(data.products, "kkk")
    }

    // aa()
  }, [])

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/img/slider-1.jpg"
            width="400"
            height="200"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider-2.jpg"
            width="400"
            height="200"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider-1.jpg"
            width="400"
            height="200"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider-2.jpg"
            width="400"
            height="200"
            alt="slider-1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
