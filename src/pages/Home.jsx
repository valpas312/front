import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Box
        bgColor="#625B5B"
        w="100vw"
        h="83vh"
        color="#fff"
        display="flex"
        justifyContent="center"
        padding="20px"
      >
        <Text as="b" fontSize="2xl">
          Bienvenido a la página de inicio
        </Text>
      </Box>
      <Box
        h="7vh"
        bg="#333"
        borderBottom="1px solid gray"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="#fff">Valentin Palmas</Text>
      </Box>
    </>
  );
};

export default Home;
