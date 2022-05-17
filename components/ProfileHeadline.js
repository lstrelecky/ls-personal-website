import { Heading, Box, Text, Flex, Avatar } from '@chakra-ui/react'

export default function ProfileHeadline() {
  return (
    <Flex direction="row" justify="space-between" align="center" mb={6}>
        <Flex direction="column" justify="center" align="flex-start">
            <Heading size="lg">Lukas Strelecky</Heading>
            <Text>College Student - Photography &#38; Web Development</Text>
        </Flex>
        <Avatar size="xl" name="Lukas Strelecky" src='https://bit.ly/3ljmhc9' />
    </Flex>
  )
}
