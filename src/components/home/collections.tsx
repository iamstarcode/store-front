"use client"

import Image from "next/image"
import Link from "next/link"

import { client } from "@/lib/client"
import { getSdkWithHooks } from "@/hooks/use-query"

function Collection() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3">
      <div className="row-span-2 h-full w-full bg-slate-200">
        <Image
          alt="earphone image"
          src="/img/earphones.png"
          height="223"
          width="202"
        />
      </div>
      <div className="h-36 w-36 columns-2 bg-red-700"></div>
      <div className="h-36 w-36 columns-2 bg-red-700"></div>
    </div>
  )
}

export default Collection
