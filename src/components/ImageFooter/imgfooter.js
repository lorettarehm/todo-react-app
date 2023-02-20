import React from "react";
import "./style.css";

const ImageFooter = () => {
  return (
    <div className="imgfooter bg-image text-light d-flex align-items-center">
      <div className="row">
        <div className="subcopy col-md-6 border">
          <h5 className="">Newsletter Subscription</h5>
          <p className="">
            Subscribe to our educational quiz website and stay up-to-date with
            the latest geography quizzes and interactive content. Test your
            knowledge and learn about the world around us! We promise not to
            spam you or share your information with any third parties.
          </p>
        </div>
        <div className="newsform col-md-6 border">
          <div className="subform">
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
                  className="form-control form-control-sm rounded-6"
                  id="InputName"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label for="name" title="Name" data-title="Name">
                  Name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-sm rounded-6"
                  id="InputEmail"
                />
                <label for="email" title="Email" data-title="Email"></label>
              </div>
              <button
                type="submit"
                className="btnsbmt btn btn-primary btn-block btn-sm rounded-6"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFooter;
// eslint-disable-next-line
