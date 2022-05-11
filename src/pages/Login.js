import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage("");

      const user = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        `https://lereacteur-vinted-api.herokuapp.com/user/login`,
        user
      );
      if (response.data) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Identifiant ou mot de passe incorrect");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login-form-container">
          <h1>Se connecter</h1>
          <span className="error-message">{errorMessage}</span>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            setState={setEmail}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            setState={setPassword}
          />
          <input
            className="login-submit-input"
            type="submit"
            value="se connecter"
          />
          <div className="password-forgotten">J'ai oublié mon mot de passe</div>
          <div className="a-problem">Un problème ?</div>
        </div>
      </form>
    </div>
  );
};
export default Login;
