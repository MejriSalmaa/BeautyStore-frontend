import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              “As a brand, we are fun yet sophisticated, and we are always
              innovating! Any time we create a new product, we raise the bar and
              make sure that whatever we are creating will fill a gap in the
              industry. We want every product to serve a purpose; if there isn’t
              a need for something or there is already an amazing product
              available, then we won’t create a new one. I’m not motivated by
              money, so the bottom line doesn’t matter to me. It is about giving
              people the power to them express who they want to be no matter who
              they are, or where they are from. Beauty is not about how much you
              spend, but how confident you feel, so that will always be the
              ultimate goal for us.”
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
