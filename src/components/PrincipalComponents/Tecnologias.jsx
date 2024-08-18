import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  bgPrimary,
  bgSecondary,
  colorSecondary,
} from "../../helpers/CONSTANTS";
import tecnologias from "../../helpers/tecnologias";

const Tecnologias = () => {
  const [tecnologia, setTecnologia] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isOpen, onClose } = useDisclosure()

  useEffect(() => {
    tecnologias
      .then((res) => {
        setTecnologia(res);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap="2em" padding="1em">
        {loading ? (
          <Spinner size="xl" padding="2em" lineHeight="normal" />
        ) : (
          tecnologia.map((tecnologia) => (
            <Card
              key={tecnologia.nombre}
              bgColor={bgSecondary}
              color={colorSecondary}
              boxShadow="md"
              borderRadius="2xl"
              maxH="100%"
              maxW="500px"
              display="flex"
              flexDirection="row"
            >
              <CardHeader
                bgColor={bgPrimary}
                boxShadow="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
              >
                <Image
                  src={tecnologia.imagen}
                  alt={tecnologia.nombre}
                  w="400px"
                  objectFit="cover"
                />
              </CardHeader>
              <Box>
                <CardBody>
                  <Heading size="md" lineHeight="normal">
                    {tecnologia.nombre}
                  </Heading>
                  <Heading size="sm" lineHeight="normal">
                    {tecnologia.descripcion}
                  </Heading>
                </CardBody>
                <CardFooter>
                  <Button onClick={isOpen} onClose={onClose} colorScheme="blue">
                    Ver Mas
                  </Button>
                </CardFooter>
              </Box>
            </Card>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Tecnologias;
