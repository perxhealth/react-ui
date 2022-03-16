import React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import { theme } from "../theme"

export interface Props {
  children: JSX.Element
}

export const PerxProvider = (props: Props) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      {props.children}
    </ChakraProvider>
  )
}
