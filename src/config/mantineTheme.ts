"use client"

import { createTheme } from "@mantine/core"

import classes from "@/components/ui/Button/Button.module.css"

export const theme = createTheme({
  primaryColor: "black-me",
  primaryShade: {
    light: 5,
  },
  /* components: {
    Button: Button.extend({
      classNames: {
        root: classes.red,
        label: classes.red,
      },
    }),
  }, */
  colors: {
    "black-me": [
      "#f2f2f2",
      "#d9d9d9",
      "#bfbfbf",
      "#a6a6a6",
      "#8c8c8c",
      "#0f172a",
      "#595959",
      "#404040",
      "#262626",
      "#0d0d0d",
    ],
    new: [
      "#ffe9e1",
      "#fdc5b7",
      "#f5a189",
      "#ef7c5c",
      "#00000",
      "#d03f15",
      "#a33010",
      "#75220a",
      "#481303",
      "#1f0300",
    ],
  },
})
