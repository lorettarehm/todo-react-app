// react boilerplate for a footer component
import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer border border-danger">
      <h2 className="text-danger">
        This is Footer with netlify form activated
      </h2>
      {/* subscribe to newsletter form using netlify form handling */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Subscribe</button>
        </p>
      </form>
    </div>
  );
}

export default Footer;
