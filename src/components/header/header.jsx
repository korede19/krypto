import React, { useState } from "react";
import "./header.css";
import { menuLinks } from "../../utils/data";
import Harburger from "../../svg/harmburger";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [state, setState] = useState(false);

  return (
    <>
      <div className={mobile ? "headContain headMobile" : "headContain"}>
        <div className="logo">
          <h1>KRYPTO</h1>
          <div onClick={() => setMobile(!mobile)}>
            <Harburger />
          </div>
        </div>
        <div className="navlinks">
          {menuLinks?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
