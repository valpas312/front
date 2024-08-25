import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Dolares from "../components/Dolares";
import Principal from "../components/Principal";
import Masproyectos from "../components/Masproyectos";

const Home = () => {
  return (
    <Box display="flex" justifyContent="space-around" w="100%">
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
          Mi nombre es Valentin Palmas y use estas tecnologias para hacer esta pagina
        </Text>
        <Divider />
        <Principal />
      </Box>
      <Masproyectos />
    </Box>
  );
};

export default Home;
