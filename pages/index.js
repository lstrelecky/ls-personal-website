import { Link, Box, Text } from '@chakra-ui/react'
import NextLink from "next/link";

import Navbar from "../components/navbar"

export default function Home() {
  return (
    <Box w="60%" h="100vh" m="auto">
      <Navbar />

      <Text>This is going to be the index page.</Text>

      <NextLink href='/photography'>
        <Link>Photography</Link>
      </NextLink>
    </Box>
  )
}
