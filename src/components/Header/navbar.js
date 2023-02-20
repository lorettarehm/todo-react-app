import React, { useState } from "react";
import logo from "./images/logo.png";
import "./navbar.css";

const TopNav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand text-info font-weight-bolder" href="/"></a>
      <button
        class="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <a class="nav-link active" aria-current="page" href="/app.js">
          Home
        </a>
        <a class="nav-link" href="/#about-us">
          About Us
        </a>

        <a class="nav-link" href="/#">
          <img class="logo" src={logo} />
        </a>
        <a class="nav-link" href="/#more-link">
          More Quizzes
        </a>
        <a class="nav-link" href="/#footer">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default TopNav;
