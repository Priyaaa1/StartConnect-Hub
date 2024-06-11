import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";

import PLogin from "../LoginPage/PLogin";

const Login = () => {
  

  return (
    <div className="login-outerContainer">
      <div>
        <PLogin/>
      </div>
    </div>
  );
};

export default Login;
