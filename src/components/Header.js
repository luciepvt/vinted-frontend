import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Header = ({ logo, signed, setSigned, token }) => {
  const navigate = useNavigate();
  console.log(token);
  return (
    <div className="Header">
      <div className="top-bar">
        <div className="top-bar-center">
          <img
            src={logo}
            alt="vinted logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="search-input">
            <input type="text" />
          </div>
          <div className="logs">
            {signed === false ? (
              <>
                <Link to="/user/signup">
                  <button>s'inscrire</button>
                </Link>
                <Link to="/user/login">
                  {" "}
                  <button>se connecter</button>
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  Cookies.remove("userToken");

                  setSigned(false);
                }}
              >
                Se déconnecter
              </button>
            )}

            <button>vends tes articles</button>
          </div>
        </div>
      </div>
      <div className="low-bar"></div>
    </div>
  );
};
export default Header;
