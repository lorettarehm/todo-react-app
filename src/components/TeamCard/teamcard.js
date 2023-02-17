import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const TeamCard = () => {
  return (
    <div className="border border-danger">
      <h2 className="text-danger"> This is TEAM CARD </h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Card 1</h4>
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
          <div className="col">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Card 2</h4>
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
          <div className="col">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Card 3</h4>
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
          <div className="col">
            <div className="card p-0">
              <div className="card-image">
                <img
                  src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">Card 4</h4>
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
