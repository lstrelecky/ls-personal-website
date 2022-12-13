import { extendTheme, RangeSliderThumb } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


// After upgrade to Chakra v2.0.
const config = {
  useSystemColorMode: true
}

const fonts = {
  heading: 'Raleway, sans-serif',
  body: 'Varela Round, sans-serif',
}

// Heading
const sectionTitle = defineStyle(props => ({
  textDecoration: "underline",
  textDecorationThickness: 3,
  textDecorationColor: mode("gray.300", "gray.500")(props),
  textUnderlineOffset: 6,
  marginBottom: 4,
  marginTop: 4
}));

const headingTheme = defineStyleConfig({ variants: { sectionTitle } });

// Link
const buttonLink = defineStyle({ 
  textDecoration: "none",
  color: "black",
  '&:hover':{
    textDecoration: "none",
  }
});

const linkTheme = defineStyleConfig({ variants: { buttonLink } });

const components = {
  Heading: headingTheme,
  Link: linkTheme
};

const theme = extendTheme({ config: config, fonts: fonts, components: components});
export default theme