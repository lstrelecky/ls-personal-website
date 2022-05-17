import { Heading, Box, Text } from '@chakra-ui/react'

import Navbar from "../components/navbar"

export default function Home() {
  return (
    <Box w="60%" h="100vh" m="auto">
      <Navbar />

      <Box w="90%" m="auto">
        {/* About me section */}
        <Heading as="h3" size="md" mb={2} variant="linebelow">About Me</Heading>
        <Text fontStyle="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, ultrices eget scelerisque eget, convallis ut sapien. Morbi feugiat sapien eu elit posuere, nec molestie neque fermentum. Sed laoreet ex sed ex efficitur, sed aliquam turpis lobortis. Vestibulum accumsan ligula sit amet neque mollis, at aliquam leo ultrices. Nunc vel aliquam ligula. Proin sed nisi at nulla blandit iaculis a et quam. Ut quis felis et lorem tempor pharetra nec quis risus. Donec tempor rutrum turpis at porta. Vestibulum molestie vehicula quam, sed egestas neque luctus eu. Vestibulum lacinia odio ante, vel euismod dui gravida at. Suspendisse potenti.
          Duis varius sem erat, et sollicitudin quam pharetra id. Nam varius risus tellus. Vestibulum viverra eget nisi nec tempor. Donec ac lorem ultrices nunc semper ornare. Nunc vulputate eros ut efficitur gravida. In hac habitasse platea dictumst. In ut placerat sapien. Sed sed orci vitae libero euismod auctor id a est. Nunc tristique, libero semper auctor facilisis, lorem tellus semper tortor, ut semper orci leo eget augue. Curabitur molestie sed libero vel mattis. Fusce id ultrices velit. Ut gravida pretium tortor nec rhoncus. Morbi venenatis odio lectus.
        </Text>  
      </Box>
    </Box>
  )
}
