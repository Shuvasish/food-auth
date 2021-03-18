import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  return (
    <div className="">
      <div className="login-container d-flex justify-content-center align-items-center">
        <div className="login-container-box ">
          <input type="email" placeholder="email" />
          <label>email</label>
          <br></br>
          <input type="password" placeholder="password" />
          <label>password</label>
          <br></br>
          <input type="submit" className="submit" value="LogIn" />
          <Link to="signup" className="my">
            <p className="text-white text-left">*create an account</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
