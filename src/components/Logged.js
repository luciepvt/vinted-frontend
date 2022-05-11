import Cookies from "js-cookie";
import Modals from "./Modals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const Logged = ({ open, setOpen, setToken }) => {
  const navigate = useNavigate();
  return (
    <div className="icons-top-bar">
      <FontAwesomeIcon className="envelope-icon" icon={"envelope"} />
      <FontAwesomeIcon className="bell-icon" icon={"bell"} />
      <FontAwesomeIcon className="heart-icon" icon={"heart"} />

      <div className="user-menu">
        <FontAwesomeIcon
          className="user-icon"
          icon={"user"}
          onClick={() => setOpen(!open)}
        />

        <Modals open={open}>
          <div
            className="logged-overlay"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div
              className="connexion-modal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="menu-items">
                <span className="my-account">Mon compte</span>
                <ul>
                  <li>Mon profil</li>
                  <li>Mes paramètres</li>
                  <li>Personnalisation</li>
                  <li>Mon porte-monnaie</li>
                  <li>Invite tes amis</li>
                  <li
                    className="disconnect-btn"
                    onClick={() => {
                      setToken(Cookies.remove("userToken"));
                      setOpen(false);
                      navigate("/");
                    }}
                  >
                    Se déconnecter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modals>
      </div>
    </div>
  );
};
export default Logged;
