import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-companyLogo-div">
          <h2>ITPeaks</h2>
          <h4>Insurance-Firm.</h4>
        </div>
      </Link>
      <div className="navbar-elements-div">
        <button>Inusurances</button>
        <button>Quote For you</button>
        <button>About us</button>
        <button>Help</button>
      </div>
      <Link to="/Sign-In-Up" style={{ textDecoration: "none" }}>
        <div className="sign-up-in-div">
          <button>Sign in / up</button>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
