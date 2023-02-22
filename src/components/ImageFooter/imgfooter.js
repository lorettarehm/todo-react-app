import React from "react";
import "./style.css";

const ImageFooter = () => {
  return (
    <div className="imgfooter bg-image text-light d-flex align-items-center">
      <div className="row">
        <div className="subcopy col-md-6">
          <h5 className="">Newsletter Subscription</h5>
          <p className="">
            Subscribe to our educational quiz website and stay up-to-date with
            the latest geography quizzes and interactive content. Test your
            knowledge and learn about the world around us! We promise not to
            spam you or share your information with any third parties.
          </p>
        </div>
        <div className="newsform col-md-6 d-flex justify-content-end">
          <div className="subform ">
            <h5>Subscribe to our Newsletter:</h5>
            <form name="contact" method="POST" id="contact-form" data-netlify="true" onSubmit="submit">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control form-control-sm rounded-6 transparentinput"
                  id="InputName"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-sm rounded-6 transparentinput"
                  id="InputEmail"
                  placeholder="Email"
                />
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
