import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Dolares from "../components/Dolares";
import Principal from "../components/Principal";

const Home = () => {
  return (
    <Box display="flex" justifyContent="space-between" w="100%">
      <Dolares />
      <Box
        w="60%"
        h="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="2em"
        p="4"
        bgColor="#fff"
        boxShadow="md"
      >
        <Heading color="black" lineHeight="normal">
          Bienvenido A La Pagina De Inicio
        </Heading>
        <Text fontSize="2xl" color="black">
          Mi nombre es Valentin Palmas y voy a explicarte como funciona esta Pagina
        </Text>
        <Divider />
        <Principal />
      </Box>
      <Text fontSize="2xl" color="black" w="300px" p="4">
        Home
      </Text>
    </Box>
  );
};

export default Home;
