// react boilerplate for a footer component
import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="footer border border-danger text-light">
      <h2 className="text-danger">
        This is Footer with netlify form activated
      </h2>
      {/* subscribe to newsletter form using netlify form handling */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="https://via.placeholder.com/50" alt="Fab4Coder Logo" />
            <p>&copy; The Fab 4 Coder 2023</p>
          </div>
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>Short description about the project</p>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
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
          <div className="col-md-3">
            <h4>Subscribe</h4>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label for="InputName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="InputName"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Your email"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
