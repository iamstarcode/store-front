"use client"

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
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
          <CarouselItem>
            <Image
              className="h-[340px] w-full"
              src="/img/slider-2.jpg"
              alt="slider-1"
              width={400}
              height={200}
            />
          </CarouselItem>

          <CarouselItem>
            <Image
              className="h-[340px] w-full"
              src="/img/slider-1.jpg"
              alt="slider-1"
              width={400}
              height={200}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  )
}
