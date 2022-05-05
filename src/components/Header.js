const Header = ({ logo }) => {
  return (
    <div className="Header">
      <div className="top-bar">
        <div className="top-bar-center">
          <img src={logo} alt="vinted logo" />
          <div className="search-input">
            <input type="text" />
          </div>
          <div className="logs">
            <button>s'inscrire</button>
            <button>se connecter</button>
            <button>vends tes articles</button>
          </div>
        </div>
      </div>
      <div className="low-bar"></div>
    </div>
  );
};
export default Header;
