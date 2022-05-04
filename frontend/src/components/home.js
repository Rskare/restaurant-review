import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <header class="masthead bg-info text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Heading--> */}
                <h1 class="masthead-heading text-uppercase mb-0">Restaurant Reviews</h1>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
          <p class="masthead-subheading font-weight-light mb-0">Find restaurants - Search reviews</p>
          <br></br>
          <div className="row mb-0">
            <div className="col-6">
            <a href="/restaurants" className="btn btn-light font-weight-bold text-dark">Restaurants</a>
            </div>
            <div className="col-6">
            <a href="/login" className="btn btn-light font-weight-bold text-dark">Login</a>
            </div>
          </div>
            </div>
      </header>
    </div>
  );
};

export default Home;