"use client"

import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "@/styles/swiper.css"

import Image from "next/image"
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomeSlide() {
  return (
    <>
      {/*  <Swiper
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
      </Swiper> */}

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              className="h-[340px] w-full"
              src="/img/slider-1.jpg"
              alt="slider-1"
              width={400}
              height={200}
            />
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  )
}
