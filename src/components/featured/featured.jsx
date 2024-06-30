import React from "react";
import "./featured.css";
import logo1 from "../../assets/Novel AI.png";
import logo2 from "../../assets/Stabillity.png";
import logo3 from "../../assets/Dalle.png";
import logo4 from "../../assets/Character AI.png";

const Featured = () => {
  return (
    <>
      <div className="featContain">
        <div className="featHead">
          <h2>FEATURED ON</h2>
          <div className="featlogo">
            <img src={logo1} alt="Featuredlogo" />
            <img src={logo2} alt="Featuredlogo" />
            <img src={logo3} alt="Featuredlogo" />
            <img src={logo4} alt="Featuredlogo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
