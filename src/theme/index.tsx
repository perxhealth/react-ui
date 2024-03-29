import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

export const extendedTheme = extendTheme({
  fonts: {
    body: "'AvertaCY Regular', sans-serif",
    heading: "'AvertaCY Bold', sans-serif",
    mono: "monospace",
  },
  colors: {
    perx: {
      blue: "#28C8DD",
      purple: "#9E73B8",
      gold: "#f2b741",
      pink: "#f2757d",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          color: "white",
          bg: "gray.800",
          _disabled: {
            bg: "gray.400",
          },
          _focus: {
            bg: "gray.800",
          },
          _hover: {
            bg: "gray.700",
            _disabled: {
              bg: "gray.400",
            },
            _focus: {
              bg: "gray.700",
            },
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "normal",
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "xl",
      },
    },
    Input: {
      baseStyle: {
        bg: "white",
      },
    },
    Select: {
      bg: "white",
    },
    Th: {
      baseStyle: {
        fontWeight: "normal",
      },
    },
  },
})

export const PerxThemeProvider = (props: { children: JSX.Element }) => {
  return (
    <ChakraProvider resetCSS={true} theme={extendedTheme}>
      {props.children}
    </ChakraProvider>
  )
}
