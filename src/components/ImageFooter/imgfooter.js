// import React from "react";
// import "./style.css";

// const ImageFooter = () => {
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
//             <form
//               name="contact"
//               method="POST"
//               data-netlify="true"
//               onSubmit="submit"
//             >
//               <input type="hidden" name="form-name" value="contact" />
//               <div className="form-group">
//                 <input
//                   name="name"
//                   type="text"
//                   className="form-control form-control-sm rounded-6 transparentinput"
//                   id="InputName"
//                   placeholder="Name"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   name="email"
//                   type="email"
//                   className="form-control form-control-sm rounded-6 transparentinput"
//                   id="InputEmail"
//                   placeholder="Email"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btnsbmt btn btn-primary btn-block btn-sm rounded-6"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageFooter;

import React, { useState } from "react";
import "./style.css";

const ImageFooter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert("Thank you for subscribing!");
        setName("");
        setEmail("");
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
            <form name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control form-control-sm rounded-6 transparentinput"
                  id="InputName"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-sm rounded-6 transparentinput"
                  id="InputEmail"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
