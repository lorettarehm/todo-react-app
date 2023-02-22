import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ImageFooter = () => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(values).toString(),
    })
      .then(() => {
        alert("Thank you for subscribing!");
        setSubmitting(false);
      })
      .catch((error) => alert(error));
  };

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
            <Formik
              initialValues={{ name: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form name="contact">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <Field
                      name="name"
                      type="text"
                      className="form-control form-control-sm rounded-6 transparentinput"
                      id="InputName"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      name="email"
                      type="email"
                      className="form-control form-control-sm rounded-6 transparentinput"
                      id="InputEmail"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btnsbmt btn btn-light btn-block btn-sm rounded-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Subscribe"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFooter;
