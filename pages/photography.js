import Navbar from '../components/navbar';
import ImageCard from '../components/ImageCard';

import { Box } from '@chakra-ui/react';

export default function Photography() {
  return (
    <Box w="35%" h="100vh" m="auto">
      <Navbar />

      <ImageCard location="Hawaii" imagename="Snapseed.jpg" year="2019"></ImageCard>
    </Box>
  )
}
