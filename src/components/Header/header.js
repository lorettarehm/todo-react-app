import React from "react";
import './header.css';

function HeaderPart() {
    return (    
    <div className="container">        

<nav className="navbar fixed-top justify-content-center">
 
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Quizes</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact Us</a>
  </li>
</ul>
</nav>


<div className="jumbotron">
  <h1 className="display-4">The Geo Quiz</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention.</p>
  <button type="button" className="btn btn-outline-light" aria-label="Center Align">
    <span className="far fa-play-circle fa-2xl" aria-hidden="true"></span>
    </button>
</div>


<section className="explore">
<h2>Explore the quizes</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere eum, adipisci a dignissimos soluta sed doloremque consequuntur suscipit! Exercitationem similique distinctio maiores, tenetur fuga in laborum voluptate id obcaecati sed!</p>
</section>



</div>
    );
}

export default HeaderPart;