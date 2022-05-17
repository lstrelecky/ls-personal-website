import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const fonts = {
  heading: 'Raleway, sans-serif',
  body: 'Varela Round, sans-serif',
}

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        textDecorationColor: "red.400", // TODO: MAKE THIS DYNAMIC BASED ON COLOR MODE
        textDecorationThickness: 3,
        textUnderlineOffset: 6,
        marginBottom: 4
      }
    }
  }
}

const theme = extendTheme({ config, fonts, components });
export default theme