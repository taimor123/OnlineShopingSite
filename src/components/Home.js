


import React from "react";
import "./Home.css";
import HomePage from "./home/HomePage";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/Navbar"
import ItemDetail from "./itemDetail/ItemDetail";
import Cart from "./cart/Cart";
import Orders from "./orders/Orders";
import Checkout from "./checkout/Checkout";

function Home() {
  return (
    <div className="App">
       <div>
    
          <Navbar />
       
        </div>
      <Routes>
        <Route path="/item" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default Home;
