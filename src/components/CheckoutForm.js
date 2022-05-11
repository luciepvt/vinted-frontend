import { useState } from "react";

import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ product_name, product_price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const total = (product_price + 0.8 + 0.4).toFixed();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "userId",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: product_name,
          amount: total,
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.repsonse);
    }
  };
  return (
    <div className="checkout-container">
      <h2>Résumé de la commande</h2>
      <div className="checkout-resume">
        <div className="checkout-order">
          <div>Commande</div>
          <div>{product_price} €</div>
        </div>
        <div className="checkout-protection-buyer-fees">
          <div>Frais de protection acheteurs</div>
          <div>0.40 €</div>
        </div>
        <div className="checkout-shipping-fees">
          <div>Frais de port</div>
          <div>0.80 €</div>
        </div>
      </div>
      <div className="checkout-total">
        <div>Total</div>
        <div>{total} €</div>
      </div>

      <p className="checkout-last-step">
        Il ne vous reste plus qu'une étape pour vous offrir l'article
        {product_name}. Vous allez payer {total} (frais de protection et frais
        de port inclus).
      </p>

      {!completed ? (
        <form onSubmit={handleSubmit}>
          <div className="card-element">
            <CardElement />
          </div>
          <button type="submit">Payer</button>
        </form>
      ) : (
        <div>Paiement validé</div>
      )}
    </div>
  );
};
export default CheckoutForm;
