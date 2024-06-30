import React from "react";
import "./hero.css";
import HeroImg from "../../assets/heroImg.png";

const Hero = () => {
  return (
    <>
      <div className="heroContain">
        <div className="heroTexts">
          <h1>Discover and Collect Rare NFTs</h1>
          <p>
            The most secure marketplace for buying and selling unique crypto
            assest
          </p>
          <div className="heroBtn">
            <button className="btnOne">Buy NFTs</button>
            <button className="btnTwo">Sell NFTs</button>
          </div>
        </div>
        <div className="heroImage">
          <img src={HeroImg} alt="Heroimage" />
        </div>
      </div>
    </>
  );
};

export default Hero;
