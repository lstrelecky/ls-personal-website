import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from "../styles/theme"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript 
          useSystemColorMode={theme.config.useSystemColorMode}
          type='cookie'/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}