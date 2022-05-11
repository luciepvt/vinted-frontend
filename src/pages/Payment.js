import { useLocation, Navigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Payment = ({ token }) => {
  const location = useLocation();
  const { product_name, product_price } = location.state;
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );
  return token ? (
    <main className="payment-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          product_name={product_name}
          product_price={product_price}
        />
      </Elements>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
export default Payment;
