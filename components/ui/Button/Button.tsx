import { ButtonProps, Button as ButtonX } from "@mantine/core"

import classes from "./Button.module.css"

export const Button = ({
  children,
  ...props
}: ButtonProps & { children: React.ReactNode }) => {
  return (
    <ButtonX size="xl" color="primary" {...props} className={classes.root}>
      {children}
    </ButtonX>
  )
}
