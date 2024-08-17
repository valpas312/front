import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const DrawerProfile = ({isOpen, onClose, btnRef, user, handleLogout}) => {

  console.log(user);

  const { nombre, dni, email } = {...user};

  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody display="flex" flexDirection="column" margin="2em 0">
          <Stack divider={<hr />} spacing={3} gap="2em">
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Nombre
              </Heading>
              <Text pt="2" fontSize="md">
                {nombre}
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                DNI
              </Heading>
              <Text pt="2" fontSize="md">
                {dni}
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Nombre
              </Heading>
              <Text pt="2" fontSize="md">
                {email}
              </Text>
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleLogout} colorScheme="red" variant="solid">
            Log Out
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default DrawerProfile;
