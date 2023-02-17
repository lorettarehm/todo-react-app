import React from "react";
import "./header.css";



function HeaderPart() {
  return (
    <div className="container ">
      <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div class="container-fluid nav-styles">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-center navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <p class="logo"></p>             
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  More Quizes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="jumbotron">
        <h1 className="">The Geo Quiz</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention.
        </p>
        
        <button
          type="button"
          className="btn btn-outline-light"
          aria-label="Center Align"
        >
          <span className="far fa-play-circle fa-2xl" aria-hidden="true"></span>
        </button>
      </div>

      <div className="explore">
        <h2>Explore the quizes</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere eum,
          adipisci a dignissimos soluta sed doloremque consequuntur suscipit!
          Exercitationem similique distinctio maiores, tenetur fuga in laborum
          voluptate id obcaecati sed!
        </p>
      </div>

      <div className="container">
    <div className="row">
        <div className="col-sm-4">
            <div className="card card-flip h-300">
                <div className="card-front">
                    <div className="card-body img-1">                                          
                        <h3 className="card-title">Geography Quiz</h3>
                        <p className="card-text">Taking a geography quiz</p>
                    </div>
                </div>
                <div className="card-back bg-white">
                    <div className="card-body">
                        <h3 className="card-title">Geography Quiz</h3>
                        <p className="card-text">A geography quiz is a fun and engaging way to test your knowledge of the world. These quizzes typically cover a wide range of topics, from the locations and names of different countries to their capital cities, famous landmarks, and natural features. Some quizzes may also include questions about different cultures and customs, as well as historical events and political systems. With enough practice and study, anyone can become a geography whiz and ace their next quiz!</p>
                        <a href="#" class="btn btn-dark">Play Now</a>
                    </div>
                </div>
            </div>
        </div>

      
        <div className="col-sm-4">
            <div className="card card-flip h-100">
                <div className="card-front">
                    <div className="card-body img-2">                         
                        <h3 className="card-title">Map Quiz</h3>
                        <p className="card-text">Coming Soon</p>
                    </div>
                </div>
                <div className="card-back bg-dark text-white">
                    <div className="card-body">
                        <h3 className="card-title">Map Quiz</h3>
                        <p className="card-text">Suprise this one has content on the back!</p>                        
                    </div>
                </div>
            </div>
        </div>



        <div className="col-sm-4">
            <div className="card card-flip h-100">
                <div className="card-front">
                    <div className="card-body img-3">                       
                        <h3 className="card-title">Map Quiz</h3>
                        <p className="card-text">Coming Soon</p>
                    </div>
                </div>
                <div className="card-back bg-white">
                    <div className="card-body text-primary">
                        <h3 className="card-title">Wow! #3</h3>
                        <p className="card-text">Suprise this one has content on the back!</p>                      
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