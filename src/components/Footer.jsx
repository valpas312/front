import { Box, Text } from "@chakra-ui/react";
import { bgPrimary, colorPrimary } from "../helpers/constantes";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
const Footer = () => {
  return (
    <Box
        bg={bgPrimary}
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="1.5em"
        width="100%"
        gap="1em"
      >
        <Text color={colorPrimary} fontSize="sm">Valentin Palmas</Text>
        {/* <Link color={colorPrimary} fontSize="sm">Sugerencias{<ExternalLinkIcon />}</Link>  */}
      </Box>
  )
}

export default Footer