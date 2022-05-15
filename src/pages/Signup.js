import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";

const Signup = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage("");
      const user = {
        username: name,
        email: email,
        password: password,
        newsletter: newsletter,
      };
      const response = await axios.post(
        `https://lereacteur-vinted-api.herokuapp.com/user/signup`,
        //`https://my-vinted-backend-project.herokuapp.com/user/signup`
        user
      );
      if (response.data) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form-container">
        <h1>S'inscrire</h1>
        <span>{errorMessage}</span>
        <Input
          className="signup-user-input"
          type="text"
          placeholder="Nom d'utilisateur"
          value={name}
          setState={setName}
        />
        <Input
          className="signup-email-input"
          type="email"
          placeholder="Email"
          value={email}
          setState={setEmail}
        />
        <Input
          className="signup-password-input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          setState={setPassword}
        />
        <div className="newsletter-container">
          <input
            className="signup-checkbox-input"
            type="checkbox"
            value={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <h3>S'inscrire à notre newsletter</h3>
        </div>
        <div className="gdpr-container">
          <input className="gdpr-checkbox-input" type="checkbox" />
          <p>
            En m'inscrivant je confirme que j'ai accepté les Termes & Conditions
            et les Conditions de vente Pro de Vinted, avoir lu la Politique de
            Confidentialité, et que j'ai plus de 18 ans.
          </p>
        </div>

        <input
          className="signup-submit-input"
          type="submit"
          value="s'inscrire"
        />
        <div className="already-registered">Besoin d'aide ?</div>
      </div>
    </form>
  );
};
export default Signup;
