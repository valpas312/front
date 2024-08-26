import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route element={user.dni ? <Layout/> : <Login/>}>
          <Route index path="/" element={user.dni ? <Home /> : <Login />} />
          {/* <Route path="/Register" element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
