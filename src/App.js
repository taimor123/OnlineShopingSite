import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import React from 'react';
import { Helmet } from 'react-helmet';
import Signup from "./components/Signup"
import { BrowserRouter as Routerg, Routes, Route } from "react-router-dom";
import Orders from './components/orders/Orders';
import Checkout from './components/checkout/Checkout';
import HomePage from './components/home/HomePage';
import Cart from './components/cart/Cart';
import ItemDetail from './components/itemDetail/ItemDetail';
function MyComponent() {
  return (
    <div>
      <Helmet>
        <title>codinn.dev</title>
      </Helmet>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Routerg>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Routerg>
    </div>
  );
}

export default App;