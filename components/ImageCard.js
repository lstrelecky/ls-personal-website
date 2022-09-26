import { Image, Flex, Box, Badge} from '@chakra-ui/react'

export default function ImageCard(props) {
  return (
      <Box w="80%" mx="auto" variant="photo-box">
          <Image mb={1} src={`./photos/${props.imagename}`}></Image>
          <Flex justify="flex-start" align="center">
              <Badge mr={.5}>{props.location}</Badge>
              <Badge>{props.year}</Badge>
          </Flex>
      </Box>
  )
}
