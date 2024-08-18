import { Box, Text } from "@chakra-ui/react";
import Dolares from "../components/Dolares";


const Home = () => {
  
  return (<Box 
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    w="100%"
  >
    <Dolares />
    <Text fontSize="2xl" color="black">Home</Text>
  </Box>
  );
};

export default Home;
