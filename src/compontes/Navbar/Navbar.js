import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import SearchBar from "../Searchbar/Searchbar";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const [search, setSearch] = useState("");
  return (
    <nav className="navbar">
      <h2 className="logo">RIWAYAT</h2>
      <SearchBar search={search} setSearch={setSearch} />
        <Link to="/cart" className="cart-link">
        🛒 Cart
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </Link>


      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/cart">Cart</Link> */}
        <Link to="/about">About</Link>

      </div>
    </nav>
  );
}

export default Navbar;
