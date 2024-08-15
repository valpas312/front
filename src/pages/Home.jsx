import { Box, Button, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/configStore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  return (
    <Box
      w="100vw"
      h="10vh"
      border="1px"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      bg="#333"
    >
      <Text as="b" color="#fff">Home</Text>
      <Button onClick={handleLogout} colorScheme="red" variant="solid">
        Log Out
      </Button>
    </Box>
  );
};

export default Home;
