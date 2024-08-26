import { Box, Text } from '@chakra-ui/react'
import { colorSecondary } from '../helpers/constantes'

const Masproyectos = () => {
  return (
    <Box
      bgColor="white"
      borderRadius="lg"
      p={4}
      width="300px"
      color={colorSecondary}
      boxShadow="md"
      textAlign="center"
    >
        <Text fontSize="2xl" color="black">
            Mas proyectos proximamente
        </Text>
    </Box>
  )
}

export default Masproyectos