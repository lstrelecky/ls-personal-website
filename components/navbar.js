import { 
    Link,
    Icon,
    IconButton,
    Heading,
    Flex, 
    useColorModeValue} from '@chakra-ui/react'

import NextLink from "next/link"
import { BsInstagram } from "react-icons/bs";

import ChangeColorModeButton from './changecolormodebutton';

export default function Navbar() {
  return (
    // Container
    <Flex h="7%" mb={4}
        dir="row" justify="space-between" align="center" 
        borderBottom="2px" borderColor={useColorModeValue("gray.100", "gray.700")}>

        {/* Left box containing links */}
        <Flex dir="row" justify="flex-start" align="center" flexGrow={0} flexShrink={1} flexBasis="auto">
            <Heading as="h5" size="md">Lukas Strelecky</Heading>
            <NextLink href="/"><Link ml={3}>Home</Link></NextLink>
            <NextLink href="/photography"><Link ml={3}>Photography</Link></NextLink>
        </Flex>

        {/* Right box with toggletheme and instagram buttons */}
        <Flex flexDir="row" justify="flex-end" align="center">
            <ChangeColorModeButton />
            <Link href="https://www.instagram.com/lstrelecky4/" isExternal>
                <IconButton ml={1.5} icon={<Icon as={BsInstagram} />} />
            </Link>
        </Flex>
    </Flex>
  )
}