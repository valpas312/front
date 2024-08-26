import DrawerProfile from "../components/DrawerProfile";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/configStore";
import { useNavigate } from "react-router-dom";
import { Box, Text, Avatar, useDisclosure, Divider } from "@chakra-ui/react";
import { bgPrimary, colorPrimary } from "../helpers/constants";
import { useRef } from "react";

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
      h="3em"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      bg={bgPrimary}
    >
      <Text color={colorPrimary}>
        Home
      </Text>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap=".5em"
      >
        <Text color={colorPrimary}>{user.nombre}</Text>
        <Divider orientation="vertical" height="2em" />
        <Avatar
          cursor="pointer"
          size="sm"
          name={user.nombre}
          onClick={onOpen}
          ref={btnRef}
          src={yoJPG}
        />
      </Box>
      <DrawerProfile
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        user={user}
        handleLogout={handleLogout}
      />
    </Box>
  );
};

export default Header;
