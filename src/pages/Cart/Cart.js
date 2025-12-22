import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../../compontes/Redux/Cartslice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);


  // ✅ FIXED TOTAL LOGIC
  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price);       // 👈 convert to number
    const quantity = Number(item.quantity);
    console.log(total); // 👈 ensure number
    console.log(Number(total) + price * quantity);
    console.log(quantity);
    console.log(price);
    return Number(total) + price * quantity;
  }, 0);


  return (
    <div className="cart-container">
      <h2>Your Saree Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛍️</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Rs.{item.price.toLocaleString("en-IN")}</p>

                {/* Quantity Controls */}
                <div className="qty-controls">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* ✅ TOTAL */}
          <h3 className="cart-total">
            Total: Rs.{totalAmount.toLocaleString("en-IN")}
          </h3>
          


          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
