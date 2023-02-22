// import React from "react";
import "./style.css";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
// });

import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

export class ImageFooter extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>React Playground | Contact</title>
          </Helmet>
          <Container>
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <h3>Contact Form</h3>
                <hr />
                <div className="content">
                  <p>
                    Feel free to contact us with any questions. Submit your
                    name, email, and a short message, and we'll get back to you
                    as soon as possible.
                  </p>
                  <Form
                    className="contact-form"
                    action="/success"
                    name="react-playground-contact-form"
                    method="POST"
                    data-netlify="true"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="react-playground-contact-form"
                    />
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        name="name"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" name="message" rows="5" />
                    </Form.Group>
                    <div className="field">
                      <div data-netlify-recaptcha="true"></div>
                    </div>
                    <Button
                      className="actions"
                      variant="primary"
                      type="submit"
                      value="Send Message"
                      id="submit-btn"
                    >
                      Send Message
                    </Button>
                  </Form>
                  <br />
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

// function ImageFooter() {
//   return (
//     <div className="ImageFooter">
//       <form
//         name="contact"
//         action="/.netlify/functions/submission"
//         method="POST"
//         data-netlify="true"
//         netlify
//         netlify-honeypot="bot-field"
//       >
//         <input type="hidden" name="form-name" value="contact" />
//         <input required type="text" name="name" placeholder="Name" />
//         <input required type="email" name="email" placeholder="Email" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// {
//   const handleFormSubmit = (values, { setSubmitting }) => {
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(values).toString(),
//     })
//       .then(() => {
//         alert("Thank you for subscribing!");
//         setSubmitting(false);
//       })
//       .catch((error) => alert(error));
//   };

//   return (
//     <div className="imgfooter bg-image text-light d-flex align-items-center">
//       <div className="row">
//         <div className="subcopy col-md-6">
//           <h5 className="">Newsletter Subscription</h5>
//           <p className="">
//             Subscribe to our educational quiz website and stay up-to-date with
//             the latest geography quizzes and interactive content. Test your
//             knowledge and learn about the world around us! We promise not to
//             spam you or share your information with any third parties.
//           </p>
//         </div>
//         <div className="newsform col-md-6 d-flex justify-content-end">
//           <div className="subform ">
//             <h5>Subscribe to our Newsletter:</h5>
//             <Formik
//               initialValues={{ name: "", email: "" }}
//               validationSchema={validationSchema}
//               onSubmit={handleFormSubmit}
//             >
//               {({ isSubmitting }) => (
//                 <Form name="contact">
//                   <input type="hidden" name="form-name" value="contact" />
//                   <div className="form-group">
//                     <Field
//                       name="name"
//                       type="text"
//                       className="form-control form-control-sm rounded-6 transparentinput"
//                       id="InputName"
//                       placeholder="Name"
//                     />
//                     <ErrorMessage
//                       name="name"
//                       component="div"
//                       className="error-message"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <Field
//                       name="email"
//                       type="email"
//                       className="form-control form-control-sm rounded-6 transparentinput"
//                       id="InputEmail"
//                       placeholder="Email"
//                     />
//                     <ErrorMessage
//                       name="email"
//                       component="div"
//                       className="error-message"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="btnsbmt btn btn-primary btn-block btn-sm rounded-6"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Subscribe"}
//                   </button>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ImageFooter;
