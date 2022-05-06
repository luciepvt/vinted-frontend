import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import Cookies from "js-cookie";

const Signup = ({ setSigned, setToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = {
        username: name,
        email: email,
        password: password,
      };
      const response = await axios.post(
        `https://lereacteur-vinted-api.herokuapp.com/user/signup`,
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
        <h1>S'inscrire</h1>
        <Input
          type="text"
          placeholder="Nom d'utilisateur"
          value={name}
          setState={setName}
        />
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

        <input type="submit" value="s'inscrire" />
        <p
          onClick={() => {
            navigate("/user/login");
          }}
        >
          {" "}
          Tu as déjà un compte ? Connecte-toi!
        </p>
      </form>
    </div>
  );
};
export default Signup;
