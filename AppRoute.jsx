import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import About from "../Pages/About";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import RegisterPage from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog";
import Checkout from "../Pages/CheckOut";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterPage/>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/Checkout" element={<Checkout/>} />

        <Route path="/products" element={<PrivateRoute>
 <Product />
        </PrivateRoute>} />

        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      

        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
