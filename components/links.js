import { Button, Flex, Link } from "@chakra-ui/react";

export default function Links() {
  return (
    <Flex direction="row" align="center" justify="space-between" w="100%" mt={3} mx="auto" p={0}>
        {/* Default styling not working in theme.js */}
        {/* Use inline styling for now. TODO: fix this. */}
        <Button width="30%" colorScheme="linkedin">
          <Link style={{ textDecoration: 'none' }} 
                href="https://www.linkedin.com/in/lukas-strelecky-22b157223/" isExternal> 
                LinkedIn         
          </Link> 
        </Button>

        <Button width="30%" colorScheme="pink">
          <Link style={{ textDecoration: 'none' }} 
                href="https://www.instagram.com/takenbylukas/" isExternal> 
                Photos         
          </Link> 
        </Button>

        <Button width="30%" colorScheme="telegram">
          <Link style={{ textDecoration: 'none' }} 
                href="https://github.com/lstrelecky" isExternal> 
                Github         
          </Link> 
        </Button>
    </Flex>
  )
}
