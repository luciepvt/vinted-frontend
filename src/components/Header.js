import { Link } from "react-router-dom";
import { useState } from "react";
import NotLogged from "./NotLogged";
import Logged from "./Logged";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/vinted-logo.png";

const Header = ({ setUser, token, setToken }) => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const openClose = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header>
      <nav className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <Link to="/">
              <img className="header-logo" src={logo} alt="vinted logo" />
            </Link>
            <div className="search-bar">
              <FontAwesomeIcon
                className="mag-glass-icon"
                icon={"magnifying-glass"}
              />
              <input className="search-input" type="text" />
            </div>
          </div>

          <div className="top-bar-right">
            {token === null ? (
              <NotLogged
                setUser={setUser}
                setToken={setToken}
                open={open}
                openClose={openClose}
                login={login}
                setLogin={setLogin}
                signup={signup}
                setSignup={setSignup}
              />
            ) : (
              <Logged setToken={setToken} open={open} setOpen={setOpen} />
            )}
            <Link to="/publish">
              {" "}
              <button className="publish">Vends maintenant</button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="low-bar">
        <div className="low-bar-container">
          <ul>
            <li>Femmes</li>
            <li>Hommes</li>
            <li>Enfants</li>
            <li>Maison</li>
            <li>Divertissement</li>
            <li>Animaux</li>
            <li>À propos</li>
            <li>Notre plateforme</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
