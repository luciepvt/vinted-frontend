import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import Cookies from "js-cookie";

const Login = ({ setSigned, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        `https://lereacteur-vinted-api.herokuapp.com/user/login`,
        user
      );
      setToken(response.data.token);
      setSigned(true);
      navigate("/");
      Cookies.set("userToken", response.data.token);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
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
        <input type="submit" value="se connecter" />
        <p
          onClick={() => {
            navigate("/user/signup");
          }}
        >
          {" "}
          Pas encore de compte ? Inscris-toi!
        </p>
      </form>
    </div>
  );
};
export default Login;
