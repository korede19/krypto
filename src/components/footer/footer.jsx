import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContain">
        <div className="logo">
          <h1>KRYPTO</h1>
        </div>
        <div className="links">
          <h1>Krypto</h1>
          <p>Home</p>
          <p>About</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
        <div className="links">
          <h1>Markets</h1>
          <p>Browse NFTs</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
        <div className="links">
          <h1>Contact</h1>
          <p>Home</p>
          <p>About</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
        <div className="newsletter">
          <h1>Join Our Newsletter</h1>
          <div className="newsInput">
            <input type="email" placeholder="Email Address" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="footline"></div>
    </>
  );
};

export default Footer;
