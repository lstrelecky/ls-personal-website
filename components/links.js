

import { Heading, Text, Flex } from '@chakra-ui/react'
import { Avatar, AvatarGroup } from "@chakra-ui/avatar"

export default function ProfileHeadline() {
  return (
    <>
        <Link href="https://www.linkedin.com/in/lukas-strelecky-22b157223/" isExternal>
            <Button colorScheme="linkedin">Check out my LinkedIn</Button>
        </Link> 
    </>
  )
}
