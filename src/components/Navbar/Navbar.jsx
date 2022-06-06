import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

// use react-router Link or NavLink


const Navbar = () => {
    const {isAuth} =useContext(AuthContext);
   

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <link data-cy="navar-login-link" to="/login">Login</link>
      <span data-cy="navbar-cart-items-count">{0}</span>
      <button data-cy="navbar-login-logout-button">{isAuth?"logout":"login"}</button>
    </div>
  );
};

export default Navbar;
