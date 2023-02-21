import React, { useState } from "react";
import logo from "./images/logo.png";
import "./navbar.css";

const TopNav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand text-info font-weight-bolder" href="/#"></a>
      <button
        className="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <a className="nav-link active" aria-current="page" href="/app.js">
          Home
        </a>
        <a className="nav-link" href="/#about-us">
          About Us
        </a>

        <a className="nav-link" href="/#">
          <img className="logo" src={logo} alt="Logo"/>
        </a>
        <a className="nav-link" href="/#more-link">
          More Quizzes
        </a>
        <a className="nav-link" href="/#footer">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default TopNav;