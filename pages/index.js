import { Link, Box, Text } from '@chakra-ui/react'
import NextLink from "next/link";

export default function Home() {
  return (
    <Box>
      <Text>This is going to be the index page.</Text>

      <NextLink href='/photography'>
        <Link>Photography</Link>
      </NextLink>
    </Box>
  )
}
