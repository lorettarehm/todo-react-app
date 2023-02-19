import React from "react";
import "./header.css";
import geo from "./images/geo.png";
import tall from "./images/tallest-v2.png";
import map from "./images/map.png";
import logo from "./images/logo.png";





function HeaderPart() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark navbarNav">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon burger-menu"></span>
      </button>

      <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/app.js">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about-us">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#"><img class="logo" src={logo} /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#more-link">More Quizzes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

      <div className="jumbotron">
        <h1 className="">The Geo Quiz</h1>
        <p className="lead">
          Explore the world's diverse landscapes and test your geography
          knowledge with our interactive quiz!
        </p>

        <button
          type="button"
          className="btn btn-outline-light button-jumbo"
          aria-label="Center Align"
        >
          <span
            className="fa-solid fa-play fa-2xl play"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <div className="explore">
        <h2>Explore the quizzes</h2>
        <p id="more-link">
          Explore Quizzes is a great way to test your knowledge of geography,
          maps, and the world's highest points. With these quizzes, you can
          challenge yourself to identify countries and their capitals, locate
          cities on a map, and even pinpoint the highest peaks on each
          continent. Whether you are a geography enthusiast or just looking to
          brush up on your knowledge, these quizzes are a fun and interactive
          way to explore the world and learn something new. So why not give them
          a try and see how much you really know about our amazing planet?
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-6 col-lg-4 card-padding">
            <div className="card card-flip h-100">
              <div className="card-front ">
                <div className="card-body img-1">
                  <h3 className="card-title">Geography</h3>
                  <p className="card-text">Taking a geography quiz</p>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body">
                  <h3 className="card-title">Geography</h3>
                  <img className="img-geo" src={geo} />
                  <p className="card-text">
                    A geography quiz is a fun and engaging way to test your
                    knowledge of the world. With enough practice and study,
                    anyone can become a geography whiz and ace their next quiz!
                    anyone can become a geography whiz and ace their next quiz!
                    anyone can become a geography whiz and ace their next quiz!
                  </p>
                  <button type="button" class="btn btn-secondary play-btn">Play Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-6 col-lg-4 card-padding">
            <div className="card card-flip h-100">
              <div className="card-front">
                <div className="card-body img-2">
                  <h3 className="card-title">Which is the tallest?</h3>
                  <p className="card-text">Coming Soon</p>
                </div>
              </div>
              <div className="card-back">
                <div className="card-body">
                  <h3 className="card-title">Which is the tallest?</h3>
                  <img className="img-tall" src={tall} />
                  <p className="card-text">
                    the tallest mountain on each continent, as well as some of
                    the most famous peaks around the world. Whether you're an
                    avid hiker, a geography buff, or simply interested in
                    learning more about the world's natural wonders, a "which is
                    the tallest" quiz can be a great way to expand your
                    knowledge and test your skills.
                  </p>
                  <a
                    class="btn btn-secondary btn-sm active play-btn"
                    role="button"
                    aria-pressed="true"
                  >
                    Coming Soon
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-12 col-lg-4 card-padding">
            <div className="card card-flip h-100">
              <div className="card-front">
                <div className="card-body img-3">
                  <h3 className="card-title">Maps</h3>
                  <p className="card-text">Coming Soon</p>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body ">
                  <h3 className="card-title">Map</h3>
                  <img className="img-map" src={map} />
                  <p className="card-text">
                    A map quiz is a fun and educational way to test your
                    knowledge of geography. Whether you're a student, a
                    traveler, or simply interested in geography, a map quiz can
                    be a great way to improve your knowledge and have some fun
                    at the same time. way to improve your knowledge and have
                    some fun at the same time.
                  </p>
                  <a
                    href="/#"
                    class="btn btn-secondary btn-sm active play-btn"
                    role="button"
                    aria-pressed="true"
                  >
                    Coming Soon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPart;
