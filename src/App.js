import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cookies from "js-cookie";

//pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faUser,
  faEnvelope,
  faBell,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass, faUser, faEnvelope, faBell, faHeart);

const App = () => {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      Cookies.set("userToken", token);
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  return (
    <div>
      <Router>
        <Header setUser={setUser} token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment token={token} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
