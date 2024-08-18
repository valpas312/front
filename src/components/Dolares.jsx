import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { colorSecondary } from "../helpers/CONSTANTS.JS";
import axios from "axios";
import Dolar from "./DolaresComponents/Dolar";
import { DOLAR_API } from "../helpers/CONSTANTS.JS";

const Dolares = () => {
  const [dolares, setDolares] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    axios.get(DOLAR_API)
        .then((res) => {
            setDolares(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
  
  return (
    <Box
      bgColor="white"
      borderWidth="3px"
      borderRadius="lg"
      p={4}
      width="300px"
      color={colorSecondary}
    >
      {loading ? (
        <Flex justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>  
        <Heading mb={4} overflow="hidden">
          Dólares
        </Heading>
        <Dolar {...dolares} />
        </>
      )}
    </Box>
  );
};

export default Dolares;
