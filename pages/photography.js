import { Link, Box, Text } from '@chakra-ui/react'
import NextLink from "next/link";

export default function Photography() {
  return (
    <Box>
      <Text>This is going to be the photography page.</Text>

      <NextLink href='/'>
        <Link>Home</Link>
      </NextLink>
    </Box>
  )
}
