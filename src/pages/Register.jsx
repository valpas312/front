import axios from "axios"
import { useState } from "react"

const Register = () => {
    const [dni, setDni] = useState("");
    const [camada, setCamada] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [nombre, setNombre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios.post("http://localhost:8080/students/", { dni, camada, email, image, contraseña, nombre })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input id="dni" type="text" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} />
        <input id="nombre" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input id="camada" type="text" placeholder="Camada" value={camada} onChange={(e) => setCamada(e.target.value)} />
        <input id="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input id="image" type="file" placeholder="Imagen" value={image} onChange={(e) => setImage(e.target.value)} />
        <input id="contraseña" type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        <button type="submit">Registrarse</button>
    </form>
  )
}

export default Register