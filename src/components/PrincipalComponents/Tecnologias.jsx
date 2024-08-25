import { useState, useEffect } from "react";
import { Box, Heading, Spinner } from "@chakra-ui/react";

import tecnologias from "../../helpers/tecnologias";
import { useDispatch } from "react-redux";
import { setTechs } from "../../redux/configStore";
import Tecnologia from "./Tecnologia";

const Tecnologias = () => {
  const dispatch = useDispatch();

  const [tecnologia, setTecnologia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tecnologias
      .then((res) => {
        setTecnologia(res);
        dispatch(setTechs(res));
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <Box
      gap="2em"
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading color="black" lineHeight="normal" size="lg">
        Tecnologias Utilizadas
      </Heading>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="2em"
        padding="1em"
      >
        {loading ? (
          <Spinner size="xl" padding="2em" lineHeight="normal" />
        ) : (
          tecnologia.map((tecnologia) => (
            <Tecnologia key={tecnologia.nombre} {...tecnologia} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Tecnologias;
