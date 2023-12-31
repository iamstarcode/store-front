import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/"
import Category from "@/components/home/category"
import Collection from "@/components/home/collections"
import HomeSlide from "@/components/home/home-slide"
import NewArrivals from "@/components/home/new-arrivals"

export default function IndexPage() {
  return (
    <section className="container items-center gap-6 px-4 pb-8 pt-6 md:py-10">
      <div className=" flex flex-wrap space-x-0 space-y-4 lg:flex-nowrap lg:space-x-4 lg:space-y-0">
        <div className=" hidden w-1/5 rounded-lg bg-foreground text-background lg:flex">
          <Category />
        </div>

        <div className="relative flex w-full flex-wrap lg:w-1/2">
          {/*  <div className=" menu absolute -left-2 z-10  h-full w-full bg-base-200 !text-xs xl:menu-horizontal lg:min-w-max">
            <div className="flex w-full">
              <div className="flex-1">
                <div className="mb-4 bg-gray-200 p-4">Column 1, Row 1</div>
                <div className="mb-4 bg-gray-200 p-4">Column 1, Row 2</div>
                <div className="mb-4 bg-gray-200 p-4">Column 1, Row 1</div>
                <div className="mb-4 bg-gray-200 p-4">Column 1, Row 2</div>
              </div>

              <div className="flex-1">
                <div className="mb-4 bg-blue-200 p-4">Column 2, Row 1</div>
                <div className="mb-4 bg-blue-200 p-4">Column 2, Row 2</div>
              </div>

              <div className="flex-1">
                <div className="mb-4 bg-green-200 p-4">Column 3, Row 1</div>
                <div className="mb-4 bg-green-200 p-4">Column 3, Row 2</div>
              </div>
            </div>
          </div> */}
          <div className="w-full lg:flex-1">
            <HomeSlide />
          </div>
        </div>
        <div className="w-full lg:flex-1">shbfvhgdfjbhvrfjhbsvhj</div>
      </div>

      {/* New Arivals */}
      <NewArrivals />
      <Collection />
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS. Geist.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
