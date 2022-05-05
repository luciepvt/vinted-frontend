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
          <div className="price">{data.product_price}</div>
          {data.product_details.map((detail, index) => {
            return (
              <div className="details" key={index}>
                {detail.MARQUE && <div>{detail.MARQUE}</div>}
                {detail.ÉTAT && <div>{detail.ÉTAT}</div>}
                {detail.COULEUR && <div>{detail.COULEUR}</div>}
                {detail.EMPLACEMENT && <div>{detail.EMPLACEMENT}</div>}
                {detail["MODES DE PAIEMENT"] && (
                  <div>{detail["MODES DE PAIEMENT"]}</div>
                )}
              </div>
            );
          })}
          <div className="name">{data.product_name}</div>
          <div className="description">{data.product_description}</div>
          <div className="owner">{data.owner.account.username}</div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
