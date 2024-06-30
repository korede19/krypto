import React from "react";
import "./analytics.css";

const AnalyticsText = ({ pretext, title, text }) => {
  return (
    <>
      <div className="analyticsTexts">
        <h3>{pretext}</h3>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="analyticBtn">
          <button>VIEW OUR PRICING</button>
        </div>
      </div>
    </>
  );
};

export default AnalyticsText;
