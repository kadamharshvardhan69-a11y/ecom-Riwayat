import "./Checkout.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const [step, setStep] = useState(1);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const submitForm = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="checkout-container">

      {/* Step Indicator */}
      <div className="checkout-steps">
        <div className={step >= 1 ? "active" : ""}>Shipping</div>
        <div className={step >= 2 ? "active" : ""}>Payment</div>
        <div className={step >= 3 ? "active" : ""}>Review</div>
      </div>

      {/* STEP 1: SHIPPING */}
      {step === 1 && (
        <form className="checkout-card" onSubmit={submitForm}>
          <h3>Delivery Address</h3>

          <input placeholder="Full Name" required />
          <input placeholder="Mobile Number" required />
          <input placeholder="Address" required />
          <input placeholder="City" required />
          <input placeholder="Pincode" required />

          <button type="submit">
            Continue to Payment
          </button>
        </form>
      )}

      {/* STEP 2: PAYMENT */}
      {step === 2 && (
        <div className="checkout-card">
          <h3>Select Payment Method</h3>

          <label>
            <input type="radio" name="payment" defaultChecked />
            Razorpay / UPI / Card
          </label>

          <label>
            <input type="radio" name="payment" />
            Cash on Delivery
          </label>

          <div className="btn-group">
            <button onClick={() => setStep(1)}>Back</button>
            <button onClick={() => setStep(3)}>Review Order</button>
          </div>
        </div>
      )}

      {/* STEP 3: REVIEW */}
      {step === 3 && (
        <div className="checkout-card">
          <h3>Review Your Order</h3>

          {cartItems.map(item => (
            <div className="review-item" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>Rs.{(item.price * item.quantity).toLocaleString("en-IN")}</span>
            </div>
          ))}

          <hr />
          <h4>Total: Rs.{total.toLocaleString("en-IN")}</h4>

          <div className="btn-group">
            <button onClick={() => setStep(2)}>Back</button>
            <button className="place-order">
              Place Order
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Checkout;
