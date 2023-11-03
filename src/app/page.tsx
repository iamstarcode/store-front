import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/"
import HomeSlide from "@/components/home-slide"
import Category from "@/components/home/category"
import NewArrivals from "@/components/home/new-arrivals"

export default function IndexPage() {
  return (
    <section className="container items-center gap-6 px-4 pb-8 pt-6 md:py-10">
      <div className="flex flex-wrap space-y-4 space-x-0 lg:flex-nowrap lg:space-y-0 lg:space-x-4">
        <div className="hidden rounded-lg bg-foreground text-background lg:flex w-1/5">
          <Category />
        </div>
        <div className=" flex w-full flex-wrap lg:w-1/2">
          <div className=" w-full lg:flex-1">
            <HomeSlide />
          </div>
        </div>
        <div className="w-full lg:flex-1">shbfvhgdfjbhvrfjhbsvhj</div>
      </div>

      {/* New Arivals */}
      <NewArrivals />
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
