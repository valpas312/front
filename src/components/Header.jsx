import { useRef } from "react";
import { yoJPG } from "../helpers/CONSTANTS.JS";
import DrawerProfile from "../components/DrawerProfile";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/configStore";
import { useNavigate } from "react-router-dom";
import { Box, Text, Avatar, useDisclosure } from "@chakra-ui/react";


const Header = () => {
    const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/Login");
      };
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
  return (
    <Box
        w="100vw"
        h="10vh"
        border="1px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bg="#333"
        borderBottom="1px solid gray"
      >
        <Text as="b" color="#fff">
          Home
        </Text>
        <Avatar
          cursor="pointer"
          size="md"
          name={user.nombre}
          onClick={onOpen}
          ref={btnRef}
          src={yoJPG}
        />
        <DrawerProfile
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
          user={user}
          handleLogout={handleLogout}
        />
      </Box>
  )
}

export default Header