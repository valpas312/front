import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { colorSecondary, DOLAR_API } from "../helpers/CONSTANTS.js";
import axios from "axios";
import Dolar from "./DolaresComponents/Dolar";

const Dolares = () => {
  const [dolares, setDolares] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    axios.get(DOLAR_API)
        .then((res) => {
            setDolares([res.data]);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
  
  return (
    <Box
      bgColor="white"
      borderRadius="lg"
      p={4}
      width="300px"
      color={colorSecondary}
      boxShadow="md"
    >
      {loading ? (
        <Flex justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>  
        <Heading mb={4} lineHeight="normal">
          Dólares
        </Heading>
        <Dolar {...dolares} />
        </>
      )}
    </Box>
  );
};

export default Dolares;
