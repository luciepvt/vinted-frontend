import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Offer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading === true ? (
    <span>Loading...</span>
  ) : (
    <div className="Offer">
      <div className="Offer-center">
        <div className="Offer-left">
          {data.product_pictures.map((item, index) => {
            return (
              <div className="picture" key={index}>
                <img src={item.secure_url} alt="offer-item picture" />
              </div>
            );
          })}
        </div>
        <div className="Offer-right">
          <div className="Offer-right-center">
            <div className="price">{data.product_price}€</div>
            <div className="details">
              {data.product_details.map((detail, index) => {
                return (
                  <div key={index}>
                    {detail.MARQUE && (
                      <div>
                        <div className="grey">MARQUE</div>
                        <div>{detail.MARQUE}</div>{" "}
                      </div>
                    )}
                    {detail.ÉTAT && (
                      <div>
                        <div className="grey">ÉTAT</div>
                        <div>{detail.ÉTAT}</div>{" "}
                      </div>
                    )}
                    {detail.COULEUR && (
                      <div>
                        <div className="grey">COULEUR</div>
                        <div>{detail.COULEUR}</div>{" "}
                      </div>
                    )}
                    {detail.EMPLACEMENT && (
                      <div>
                        <div className="grey">EMPLACEMENT</div>
                        <div>{detail.EMPLACEMENT}</div>{" "}
                      </div>
                    )}
                    {detail["MODES DE PAIEMENT"] && (
                      <div>
                        <div className="grey">MODES DE PAIEMENT</div>
                        <div>{detail["MODES DE PAIEMENT"]}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="Offer-right-bottom">
              <div className="name">{data.product_name}</div>
              <div className="description grey">{data.product_description}</div>
              <div className="owner">{data.owner.account.username}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
