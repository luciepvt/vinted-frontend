import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import vintedLogo from "./assets/img/vinted-logo.png";

const App = () => {
  return (
    <div>
      <Header logo={vintedLogo} />
      <Router>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/"> Home </Link>
            </li>
            <li>
              {" "}
              <Link to="/offer">Offer</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
