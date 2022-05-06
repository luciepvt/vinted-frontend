import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import vintedLogo from "./assets/img/vinted-logo.png";

const App = () => {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState();

  return (
    <div>
      <Router>
        <Header
          logo={vintedLogo}
          signed={signed}
          setSigned={setSigned}
          token={token}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/user/signup"
            element={<Signup setSigned={setSigned} setToken={setToken} />}
          ></Route>
          <Route
            path="/user/login"
            element={<Login setSigned={setSigned} setToken={setToken} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
