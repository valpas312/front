import { Box, Text, Divider, Link } from "@chakra-ui/react";
import { bgPrimary, colorPrimary } from "../helpers/constantes";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
        <Divider orientation="vertical" height="70%" />
        <Link color={colorPrimary} fontSize="sm">Sugerencias{<ExternalLinkIcon mx="2px" />}</Link> 
      </Box>
  )
}

export default Footer