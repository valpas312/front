import { useState, useEffect } from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { DOLAR_API, colorSecondary } from "../helpers/constantes";
import axios from "axios";
import Dolar from "./DolaresComponents/Dolar";
import SleletonDolar from "./DolaresComponents/SkeletonDolar";

const Dolares = () => {
  const [dolares, setDolares] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(DOLAR_API)
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
        <Stack spacing={"8"}>
          <Heading lineHeight="normal">
            Dólares
          </Heading>
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
          <SleletonDolar />
        </Stack>
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
