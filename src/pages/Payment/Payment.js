import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    // Fake payment success (UI demo)
    alert("Payment Successful (Test Mode)");
    navigate("/success");
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>

      <form onSubmit={handlePayment} className="payment-form">
        <CardElement />
        <button disabled={!stripe}>Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
