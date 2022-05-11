import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import hero from "../assets/img/menu-img.jpeg";

import Menu from "../components/Menu";

const Home = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {!token && (
        <div className="hero">
          <img src={hero} />
          <div className="hero-card">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <Link to="/publish">
              <button>Vends maintenant</button>
            </Link>
            <div className="hero-link">Découvrir comment ça marche</div>
          </div>
        </div>
      )}
      {isLoading ? <span>Loading...</span> : <Menu data={data} />}
    </div>
  );
};
export default Home;
