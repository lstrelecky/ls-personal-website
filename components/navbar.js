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
    <Flex h="7%" mb={6}
        direction="row" justify="space-between" align="center" 
        borderBottom="2px" borderColor={useColorModeValue("gray.100", "gray.700")}>

        {/* Left box containing links */}
        <Flex direction="row" justify="flex-start" align="center">
            <Heading as="h5" size="lg" textTransform="uppercase" mr={2}>LS</Heading>
            
            {/* Once there is a standalone photo page, we will need a link back to homepage. */}
            {/* <NextLink href="/"><Link ml={3}>Home</Link></NextLink> */}

            {/* TODO: Add support for standalone photograph page. */}
            {/* <NextLink href="/photography"><Link ml={3}>Photography</Link></NextLink> */}
        </Flex>

        {/* Right box with toggletheme and instagram buttons */}
        <Flex direction="row" justify="flex-end" align="center">
            <ChangeColorModeButton />
            <Link href="https://www.instagram.com/lstrelecky4/" isExternal>
                <IconButton ml={1.5} icon={<Icon as={BsInstagram} />} />
            </Link>
        </Flex>
    </Flex>
  )
}
