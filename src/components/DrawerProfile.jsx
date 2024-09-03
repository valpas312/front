import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Button,
} from "@chakra-ui/react";
import DrawerHeadingBox from "./DrawerProfileComponents/DrawerHeadingBox";
import { github, linkedin } from "../helpers/constantes";

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
          <Stack divider={<hr />} spacing={5} gap="2em">
            <DrawerHeadingBox heading="Nombre" text={nombre} />
            <DrawerHeadingBox heading="DNI" text={dni} />
            <DrawerHeadingBox heading="Email" text={email} />
            <DrawerHeadingBox heading="Github" text={github} />
            <DrawerHeadingBox heading="Linkedin" text={linkedin} />
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
