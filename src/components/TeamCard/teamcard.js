import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AT_image from "./images/AT.jfif";
import HH_image from "./images/HH.jfif";
import IC_image from "./images/IC.jfif";
import LR_image from "./images/LR.jpg";

const TeamCard = () => {

  return (
    <div className="border border-danger" id="about-us">
      <h2 className="text-danger"> This is TEAM CARD </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src={AT_image}
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Alina Tudor</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:alina_tca@yahoo.com">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/alinatca">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="https://www.linkedin.com/in/alina-tudor-7a1047168/">
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src={HH_image}
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Husain Hidayah</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:h-fikri@yahoo.com">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/h-fikri">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="https://www.linkedin.com/in/h-fikri">
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src={IC_image}
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
              <h4 className="pt-2">Ian Cheng</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:iancheng29012@gmail.com">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/ian29012">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="https://www.linkedin.com/in/iancheng2901">
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src={LR_image}
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Loretta Rehm</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:loretta.rehm@gmail.com">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/lorettarehm">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="https://www.linkedin.com/in/lorettarehm">
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
