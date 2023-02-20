import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

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
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Loretta </h4>
                <h5>Creative Desinger</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="/">
                      <span className="fab fa-facebook"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="/">
                      <span className="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="/">
                      <span className="fab fa-instagram"></span>
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
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Alina Tudor</h4>
                <h5>Creative Desinger</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="/">
                      <span className="fab fa-facebook"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="/">
                      <span className="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="/">
                      <span className="fab fa-instagram"></span>
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
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Ian Cheng</h4>
                <h5>Creative Desinger</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="/">
                      <span className="fab fa-facebook"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="/">
                      <span className="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="/">
                      <span className="fab fa-instagram"></span>
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
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Husain F Hidayah</h4>
                <h5>Creative Desinger</h5>

                <ul className="social-icons d-flex justify-content-center">
                  <li style={{ "--i": 1 }}>
                    <a href="/">
                      <span className="fab fa-facebook"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href="/">
                      <span className="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href="/">
                      <span className="fab fa-instagram"></span>
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
