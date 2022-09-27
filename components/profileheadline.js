import { Heading, Text, Flex } from '@chakra-ui/react'
import { Avatar } from "@chakra-ui/avatar"

export default function ProfileHeadline() {
  return (
    <Flex direction="row" justify="space-between" align="center" mb={6}>
        <Flex direction="column" justify="center" align="flex-start">
            <Heading size="lg">Lukas Strelecky</Heading>
            <Text>College Student - Webdev, Photography,  &#38; Medicine</Text>
        </Flex>
        <Avatar src="Headshot.JPG" size="xl" name="Lukas Strelecky"/>
    </Flex>
  )
}