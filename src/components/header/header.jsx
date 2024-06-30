import React from "react";
import "./header.css";
import { menuLinks } from "../../utils/data";

const Header = () => {
  return (
    <>
      <div className="headContain">
        <div className="logo">
          <h1>KRYPTO</h1>
        </div>
        <div className="navlinks">
          {menuLinks?.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
