"use client"

import { NavigationMenuDemo } from "./navigation-menu"

function Category() {
  return (
    <ul className="menu">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>

      <NavigationMenuDemo />
    </ul>
  )
}

export default Category
