import { Heading, Box, Text, Code, Flex } from '@chakra-ui/react'

import Navbar from "../components/navbar"
import ProfileHeadline from "../components/ProfileHeadline"

export default function Home() {
  return (
    <Box w="35%" h="100vh" m="auto">
      <Navbar />
      <ProfileHeadline />

      <Flex w="full" justify="center">
        <Code colorScheme="blue" px={3} py={1} m="auto" mb={5} children="console.log('Hi, everyone! Welcome to my portfolio website.');"></Code>
      </Flex>
      
      {/* About me section */}
      <Heading as="h3" size="md" variant="section-title">About Me</Heading>
      <Text fontStyle="md">
        Hi! I'm Lukas Strelecky, a freshman at Brown University. I'm on a pre-medical track, majoring in Math &#38; Computer Science, while 
        also pursuing language studies, specifically Chinese and Korean. After being born in New York City, I've spent almost all of my 
        childhood in New Jersey, and love traveling to foreign countries. I have a passion for web development and photography that is deeply
        rooted in a strong desire to creatively express myself&ndash;art was never really my thing, so I turned to less conventional means to
        be imaginative.
        <br /><br />
        I started programming in 6th grade, and ever since, I've been teaching myself different languages and creating small applications. In 
        high school, I delved deeper into CS and took high level courses like Data Structures and Algorithms, marrying my creative ambitions with
        a sound theoretical foundation. Recently, I've also picked up photography, and I hope that you choose to enjoy some of the photos I've
        uploaded to this website.
      </Text>  
    </Box>
  )
}
