import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const TecnologiaModal = ({ isOpen, onClose, ...tecnologia }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{tecnologia.nombre}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Text>{tecnologia.descripcion}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TecnologiaModal;
