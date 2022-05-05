import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
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

  return isLoading === true ? (
    <span>Loading...</span>
  ) : (
    <div className="Content">
      <div className="Content-center">
        <div className="Menu">
          {data.offers.map((product, index) => {
            return (
              <Link key={index} to={`/offer/${product._id}`}>
                <div className="Card">
                  <div>{product.owner.account.username}</div>
                  <div className="Card-picture">
                    <img
                      src={product.product_image.secure_url}
                      alt="offer picture"
                    />
                  </div>
                  <div className="Card-infos">
                    <div className="Card-price"> {product.product_price}€</div>
                    {product.product_details.map((detail, index) => {
                      return (
                        <div className="Card-details" key={index}>
                          {detail.TAILLE && (
                            <div className="details-size">{detail.TAILLE}</div>
                          )}
                          {detail.MARQUE && (
                            <div className="details-brand">{detail.MARQUE}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
