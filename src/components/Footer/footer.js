import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="footer border border-warning text-light font-weight-light mt-1" id="footer">
      <h4 className="text-light">/ FOOTER WITH NETLIFY FORM ACTIVATED/</h4>
      <div className="container">
        <div className="row">
          <div className="aboutus col-md-4">
            <h5>About Us</h5>
            <p className="text-left">
              The Fab 4 Coder is a team of junior developers who provide
              engaging geography quizzes. We aim to make learning accessible and
              enjoyable for all, inspiring a love for geography. Join us to
              explore and learn about the world.
            </p>
          </div>
          <div className="followus col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-around ">
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
          <div className="subform col-md-4">
            <h5>Subscribe to our Newsletter:</h5>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="InputName"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="InputEmail"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block btn-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="copyright mt-3 d-flex justify-content-center border ">
          {/* <img src="https://via.placeholder.com/20" alt="Fab4Coder Logo" /> */}
          <p>&copy; 2023 The Fab 4 Coder. All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
