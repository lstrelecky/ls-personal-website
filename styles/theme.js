import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const config = {
  useSystemColorMode: true
}

const fonts = {
  heading: 'Raleway, sans-serif',
  body: 'Varela Round, sans-serif',
}

const components = {
  Heading: {
    variants: {
      "section-title": props => ({
        textDecoration: "underline",
        textDecorationThickness: 3,
        textDecorationColor: mode("gray.300", "gray.500")(props),
        textUnderlineOffset: 6,
        marginBottom: 4,
        marginTop: 4
      })
    }
  },
  Box: {
    variants: {
      "photo-box": props => ({
        backgroundColor: mode("gray.700", "gray.200")(props),
        borderRadius: 3,
        padding: 3
      })
    }
  },
  Link: {
    variants: {
      "button-link": {
        textDecoration: "none"
      }
    }
  }
};

const theme = extendTheme({ config: config, fonts: fonts, components: components});
export default theme