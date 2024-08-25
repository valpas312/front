import Login from "./pages/Login";
import Home from "./pages/Home";
// import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/configStore";
import Layout from "./pages/Layout";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index path="/Home" element={<Home />} />
              {/* <Route path="/Register" element={<Register />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
