import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <Link to="/home">
        <h2>Shopcart</h2>
      </Link>
      <ul className="navbar-ul">
        <li>Womens</li>
        <li>Mens</li>
        <li>Clothing</li>
        <li>Brands</li>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hi, User</button>
        <Link to="/">
        <button className="nav-btn2">Logout</button>
      </Link>
      </ul>
    </div>
  );
};

export default Navbar;