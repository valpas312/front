import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import { bgSecondary, colorPrimary } from "../helpers/constantes.js";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box h="100%">
      <Header />
      <Box
        bgColor={bgSecondary}
        w="100vw"
        h="100%"
        color={colorPrimary}
        display="flex"
        justifyContent="center"
        padding="20px"
      >
        <Box h="100%" w="100vw">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
