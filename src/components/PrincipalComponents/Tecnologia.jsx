import {
  Box,
  Button,
  Heading,
  Image,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  useDisclosure,
} from "@chakra-ui/react";
import {
  bgPrimary,
  bgSecondary,
  colorSecondary,
} from "../../helpers/CONSTANTS";
import TecnologiaModal from "./TecnologiaModal";

// eslint-disable-next-line react/prop-types
const Tecnologia = ({ ...tecnologia }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Card
      key={tecnologia.nombre}
      bgColor={bgSecondary}
      color={colorSecondary}
      boxShadow="md"
      borderRadius="2xl"
      maxH="100%"
      w="40%"
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
        p="2em"
      >
        <Image src={tecnologia.imagen} alt={tecnologia.nombre} w="200px" />
      </CardHeader>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="1em"
      >
        <CardBody>
          <Heading size="md" lineHeight="normal" boxShadow="lg" p=".5em">
            {tecnologia.nombre}
          </Heading>
        </CardBody>
        <CardFooter>
          <Button onClick={onOpen} onClose={onClose} colorScheme="blue">
            Ver Mas
          </Button>
          <TecnologiaModal isOpen={isOpen} onClose={onClose} {...tecnologia} />
        </CardFooter>
      </Box>
    </Card>
  );
};

export default Tecnologia;
