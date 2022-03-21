import * as React from "react"
import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"

export interface LogomarkProps extends HTMLChakraProps<"img"> {}

export const Logomark = forwardRef<LogomarkProps, "img">((props, ref) => {
  return <chakra.img ref={ref} {...props} />
})
