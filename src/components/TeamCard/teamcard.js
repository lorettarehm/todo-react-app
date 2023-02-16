import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamCard = () => {
  return (
    <div className="border border-danger">
      <h2 className="text-danger"> This is TEAM CARD </h2>
      <div className="container my-4">
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">Card 4</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
