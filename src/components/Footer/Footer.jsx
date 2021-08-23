import React from "react";
import "./Footer.css";
import Group1 from "./group1/Group1";
import Group2 from "./group2/Group2";
import Group3 from "./group3/Group3";
import Group4 from "./group4/Group4";
import Group5 from "./group5/Group5";

function Footer() {
  return (
    <>
      <div className="graybg" style={{ height: "50px" }}></div>
      <footer>
        <div className="container">
          <div className="footUp">
            <Group1 />
            <Group2 />
            <Group3 />
            <Group4 />
          </div>
          <div className="footDown">
            <Group5 />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
