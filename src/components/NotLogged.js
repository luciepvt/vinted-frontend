import { useState } from "react";

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Modals from "./Modals";
const NotLogged = ({
  setUser,
  open,
  openClose,
  login,
  setLogin,
  signup,
  setSignup,
}) => {
  const [skip, setSkip] = useState(false);
  // onClick "se connecter" -> skip
  // onClick "s'inscrire" -> previous
  const nextStep = () => {
    !skip ? setSkip(true) : setSkip(false);
  };
  const closeModal = () => {
    openClose();
    setSkip(false);
    setLogin(false);
    setSignup(false);
  };

  //  connexion par email
  const openLoginModal = () => {
    setLogin(true);
  };
  const openSignupModal = () => {
    setSignup(true);
  };

  return (
    <>
      <button className="signup-login-btn" onClick={openClose}>
        S'inscrire | Se connecter
      </button>
      <Modals open={open}>
        <div className="signup-login-overlay" onClick={closeModal}>
          <div
            className="signup-login-container"
            onClick={(e) => {
              // éviter de fermer le container en cliquant dessus
              e.stopPropagation();
            }}
          >
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            {!skip ? (
              <h2>
                Rejoins le mouvement de la seconde main et vends sans frais !
              </h2>
            ) : (
              <h2>Bienvenue</h2>
            )}
            <div className="signup-login-links">
              <button>facebook</button>
              <button>google</button>
              <button>apple</button>
            </div>
            {!skip ? (
              <div className="signup-or-alrealdy">
                <div className="signup-with-email">
                  Ou inscris-toi avec ton
                  <span className="signup-email-link" onClick={openSignupModal}>
                    E-mail
                  </span>
                </div>
                {signup && <SignupModal setUser={setUser} />}
                <div className="registered-already">
                  Tu as déjà un compte ?
                  <span className="login-with-link" onClick={nextStep}>
                    Se connecter
                  </span>
                </div>
              </div>
            ) : (
              <div className="signup-or-alrealdy">
                <div className="login-with-email">
                  Ou connecte-toi avec ton
                  <span className="login-email-link" onClick={openLoginModal}>
                    E-mail
                  </span>
                </div>
                {login && <LoginModal setUser={setUser} />}
                <div className="back-to-signup">
                  Tu n'as pas de compte Vinted ?
                  <span className="signup-email-line" onClick={nextStep}>
                    S'inscrire
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modals>
    </>
  );
};
export default NotLogged;
