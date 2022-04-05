import React from "react";

const Homepage = () => {
  return (
    <div>
      <img
        className="cover"
        src={require("../../Assets/cover.jpg")}
        alt="homepage"
      />
      <div className="cover-wrapper">
        <div className="cover-text">FOR COLOURFUL STEPS IN YOUR LIFE</div>
        <div className="btn-wrapper">
            <button className="cover-btn">Explore</button>
        </div>
        
      </div>

      <div className="secondary-cover-container">
        <div>
          <img
            className="secondary-cover"
            src={require("../../Assets/secondary-cover-1.jpg")}
            alt="homepage"
          />
        </div>
        <div>
          <img
            className="secondary-cover"
            src={require("../../Assets/secondary-cover-2.jpg")}
            alt="homepage"
          />
        </div>
      </div>
      <div className="footer">
          <div className="color-primary">©PrimeCart, Inc.</div>
      </div>
    </div>
  );
};

export default Homepage;
