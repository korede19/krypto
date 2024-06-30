import React from "react";
import "./home.css";
import Shade from "../../assets/Ellipse 2.png";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Featured from "../../components/featured/featured";
import analyticImg from "../../assets/analyticone.png";
import image2 from "../../assets/analytic2.png";
import Analytics from "../../components/analytics/analytics";
import { AnalyticsText } from "../../utils/data";

const Home = () => {
  return (
    <>
      <div className="headImg">
        <img src={Shade} alt="" />
      </div>
      <Header />
      <Hero />
      <Featured />
      <div className="analyticsContain">
        <div className="analyticimage">
          <img src={analyticImg} alt="image" />
        </div>
        <div className="coltext">
          {AnalyticsText?.map((item, index) => {
            return (
              <Analytics
                pretext={item.pretext}
                title={item.title}
                text={item.text}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="analyticsContain2">
        <div className="coltext">
          {AnalyticsText?.map((item, index) => {
            return (
              <Analytics
                pretext={item.pretext}
                title={item.title}
                text={item.text}
                key={index}
              />
            );
          })}
        </div>
        <div className="analyticimage">
          <img src={image2} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Home;
