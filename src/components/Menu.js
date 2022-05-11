import { Link } from "react-router-dom";
const Menu = ({ data }) => {
  return (
    <div className="Content">
      <div className="Content-center">
        <div className="Menu">
          {data.offers.map((product, index) => {
            return (
              <Link key={index} to={`/offer/${product._id}`}>
                <div className="Card">
                  <div className="Card-top">
                    <div className="Card-top-avatar">
                      {product.owner.account.avatar && (
                        <img
                          src={product.owner.account.avatar.secure_url}
                          alt="avatar-user"
                        />
                      )}
                    </div>
                    <div className="Card-top-username">
                      {product.owner.account.username}
                    </div>
                  </div>

                  <div className="Card-picture">
                    <img
                      src={product.product_image.secure_url}
                      alt="offer picture"
                    />
                  </div>
                  <div className="Card-infos">
                    <div className="Card-price">
                      {`${Number(product.product_price)
                        .toFixed(2)
                        .replace(".", ",")}`}{" "}
                      €
                    </div>
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
export default Menu;
