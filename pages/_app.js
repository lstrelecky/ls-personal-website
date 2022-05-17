import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

import theme from "../styles/theme";

import "@fontsource/raleway/700.css"
import "@fontsource/varela-round/400.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
