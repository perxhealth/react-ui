import { extendTheme, ComponentStyleConfig } from "@chakra-ui/react"

export const extendedTheme: ComponentStyleConfig = extendTheme({
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
          bg: "perx.blue",
          _hover: {
            bg: "perx.blue",
            _disabled: {
              bg: "perx.blue",
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
      baseStyle: {
        bg: "white",
      },
    },
    TableContainer: {
      baseStyle: {
        bg: "white",
      },
    },
    Th: {
      baseStyle: {
        fontWeight: "normal",
      },
    },
  },
})
