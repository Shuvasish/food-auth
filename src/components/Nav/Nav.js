import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nava(props) {
  return (
    <div className="nav_bar">
      <ul className=" bg-secondary text-white" style={{ lineHeight: "40px" }}>
        <Link to="/home" className="link_style">
          Home
        </Link>
        <Link to="/login" className="link_style">
          Login
        </Link>
        {/* <Link to="/" className="link_style">
          Food
        </Link> */}
        <a href="#food" className="link_style">
          Food
        </a>
      </ul>
    </div>
  );
}

export default Nava;
