import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="container footer text-light font-weight-light mt-4" id="footer">
      <div className="row">
        <div className="aboutus col-md-4">
          <h5>About Us</h5>
          <p className="text-left">
            The Fab 4 Coder is a team of junior developers who provide engaging
            geography quizzes. Join us to explore and learn about the world.
          </p>
        </div>
        <div className="copyright col-md-4">
          <div className="logofab4">
            <img src="/images/logo-fab4.png" alt="Fab4Coder Logo" />
          </div>
          <div className="copyrightlogo">
            <p>&copy; 2023. The Fab 4 Dev. All Rights Reserved </p>
          </div>
        </div>
        <div className="followus col-md-4">
          <h5>Follow Us</h5>
          <ul className="list-unstyled d-flex justify-content-around mt-3">
            <li>
              <a href="https://twitter.com/your-twitter-account">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/your-facebook-page">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/your-instagram-account">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright mt-3 d-flex justify-content-center "></div>
    </div>
  );
}

export default Footer;
