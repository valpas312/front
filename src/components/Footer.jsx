import { bgPrimary } from "../helpers/CONSTANTS.js";
import { Box, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
        bg={bgPrimary}
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="1.5em"
        width="100%"
      >
        <Text color="#ECEBE4" fontSize="sm">Valentin Palmas</Text>
      </Box>
  )
}

export default Footer