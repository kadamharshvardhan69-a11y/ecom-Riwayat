import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./compontes/Navbar/Navbar";
import Footer from "./compontes/Footer/Footer";

import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";

import AdminRoute from "./routes/AdminRoute";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AddProduct from "./admin/AddProduct";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  // 🔐 Redirect admin after login
  // useEffect(() => {
  //   if (isAdmin) {
  //     navigate("/admin");
  //   }
  // }, [isAdmin, navigate]);

  return (
    <>
      {/* Navbar visible on all public pages */}
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<h2>Order Placed Successfully 🎉</h2>} />

        {/* 🔐 Admin Protected Route */}
        <Route
          path="/admin"
          element={
              <AdminDashboard/>
          }
        />
         <Route
          path="/admin/products"
          element={

              <AdminProducts/>
            
          }
        />
        <Route
          path="/admin/add-product"
          element={
              <AddProduct/>
          }
        />
      </Routes>

      {/* Footer visible on all public pages */}
      <Footer />
    </>
  );
};

export default App;
