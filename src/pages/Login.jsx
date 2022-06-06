import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const {isAuth}=useContext(AuthContext);
  
  return (
    <div>
      <input data-cy="login-email" type="email" placeholder="Enter email" />
      <input data-cy="login-password" type="password" placeholder="Enter password"/>
      <button data-cy="login-submit">Login</button>
    </div>
  );
};


