import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/configStore";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const toast = useToast();

  const navigate = useNavigate();

  const [dni, setDni] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleDniChange = (event) => {
    setDni(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setContraseña(event.target.value);
  };

  const { mutate, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => {
      return axios.post("http://localhost:8080/students/login", {
        dni: dni,
        contraseña: contraseña,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      {},
      {
        onSuccess: (data) => {
          console.log(data);
          toast({
            title: data.data.message,
            description: data.data.message,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          dispatch(setUser(data.data.student));
          navigate("/Home");
        },
        onError: (error) => {
          console.log(error);
          toast({
            title: "Error al iniciar sesión",
            description: error.response.data.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setContraseña("");
        },
      }
    );
  };

  return (
    <Container
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <FormControl onSubmit={handleSubmit} as={"form"}>
        <FormLabel>DNI</FormLabel>
        <Input
          id="dni"
          type="number"
          placeholder="DNI"
          value={dni}
          onChange={handleDniChange}
        />

        <FormLabel>Contraseña</FormLabel>
        <Input
          id="contraseña"
          type="password"
          placeholder="******"
          value={contraseña}
          onChange={handlePasswordChange}
        />

        <Button colorScheme="blue" size="lg" mt={4} type="submit">
          {isLoading ? <Spinner /> : "Iniciar Sesión"}
        </Button>
      </FormControl>
    </Container>
  );
};

export default Login;
