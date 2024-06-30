import React from "react";
import "./testimonials.css";

const Testimonials = ({ image, title, text }) => {
  return (
    <>
      <div className="testmony">
        <img src={image} alt="img" />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Testimonials;
