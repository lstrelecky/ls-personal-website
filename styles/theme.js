import { extendTheme } from '@chakra-ui/react'
import { ComponentStyleConfig } from '@chakra-ui/react'

const Heading = {
  baseStyle: {
    fontWeight: "bold",
    fontFamily: "Raleway",
    textTransform: "uppercase"
  },
  variants: {
    linebelow: {
      borderBottom: "2px solid",
    },
  }
}

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Varela Round, sans-serif',
  },
  components: {
    Heading,
  }
})

export default theme