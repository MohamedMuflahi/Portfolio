import React from "react";
import Navbar from "../components/Navbar";
import "../screens/Portfolio.css";
import YomiIos from "../Images/Yomi_Ios.png";
import YomiMac from "../Images/Yomi_Mac.png";
function Port() {
  return (
    <div className="portfolio-div">
      <h1 className="title">Portfolio</h1>
      <div className="project-container">
        <div className="card-item IOS">
          <img src={YomiIos} />
          <div className="overlay">
            <div className="text">YOMIMASU</div>
          </div>
        </div>
        <div className="card-item MAC">
          <img src={YomiMac} />
          <div className="overlay">
            <div className="text">WhatsUPP</div>
          </div>
        </div>
        <div className="card-item MAC"></div>
        <div className="card-item IOS"></div>
      </div>
    </div>
  );
}

export default Port;
