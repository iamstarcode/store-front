"use client"

import Link from "next/link"

import { client } from "@/lib/client"
import { getSdkWithHooks } from "@/hooks/use-query"

function Category() {
  const sdk = getSdkWithHooks(client())

  const { data, error } = sdk.useGetCollectionsRoot()
  return (
    <ul className="menu w-full">
      {data?.collections.items.map((item) => (
        <li id={item.id}>
          <Link href={`category/${item.slug}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Category
