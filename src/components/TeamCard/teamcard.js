import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AT_image from "./images/AVATAR_AT.jpg";
import HH_image from "./images/AVATAR_HH.jpg";
import IC_image from "./images/AVATAR_IC.jpg";
import LR_image from "./images/AVATAR_LR.jpg";

const TeamCard = () => {
  return (
    <div className="teamcardbox imgteamcard" id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="teamcard p-0">
              <div className="teamcard-image">
                <img src={AT_image} alt="" />
              </div>
              <div className="teamcard-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Alina Tudor</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:alina_tca@yahoo.com" target="_blank">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/alinatca" target="_blank">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a
                      href="https://www.linkedin.com/in/alina-tudor-7a1047168/"
                      target="_blank"
                    >
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="teamcard p-0">
              <div className="teamcard-image">
                <img src={HH_image} alt="" />
              </div>
              <div className="teamcard-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Husain Hidayah</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:husain.fikri@gmail.com" target="_blank">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/h-fikri" target="_blank">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a
                      href="https://www.linkedin.com/in/husain-fikri-hidayah-0151158a/"
                      target="_blank"
                    >
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="teamcard p-0">
              <div className="teamcard-image">
                <img src={IC_image} alt="" />
              </div>
              <div className="teamcard-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Ian Cheng</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:iancheng29012@gmail.com" target="_blank">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/ian29012" target="_blank">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a
                      href="https://www.linkedin.com/in/iancheng2901"
                      target="_blank"
                    >
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 d-flex justify-content-center">
            <div className="teamcard p-0">
              <div className="teamcard-image">
                <img src={LR_image} alt="" />
              </div>
              <div className="teamcard-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Loretta Rehm</h4>
                <h5>Developer</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="mailto:loretta.rehm@gmail.com" target="_blank">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="https://github.com/lorettarehm" target="_blank">
                      <span className="fab fa-github"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a
                      href="https://www.linkedin.com/in/lorettarehm"
                      target="_blank"
                    >
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
