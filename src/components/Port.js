import React from "react";
import Navbar from "../components/Navbar";
import PortCard from "./PortCard";
import "../screens/Portfolio.css";
import YomiIos from "../Images/Yomi_Ios.png";
import HumanIos from '../Images/Human_Login.png'
import YomiMac from "../Images/Yomi_Mac.png";
import citiMac from '../Images/citibike_render.png'
import whatsMac from '../Images/whatsupp_render.png'
import shopMac from '../Images/shopify_render.png'
function Port() {
  return (
    <div className="portfolio-div">
      <h1 className="title">Portfolio</h1>

      <div className="project-container">
        <div className="card-item IOS">
          <img src={HumanIos} />
          <div className="overlay">
            <div className="text">Human</div>
          </div>
        </div>
        <div className="card-item MAC">
          <img src={whatsMac} />
          <div className="overlay">
            <div className="text">WhatsUpp</div>
          </div>
        </div>
        <div className="card-item MAC">
          <img src={shopMac} />
          <div className="overlay">
            <div className="text">Shopify 2.0</div>
          </div>
        </div>
        <div className="card-item IOS">
          <img src={YomiIos} />
          <div className="overlay">
            <div className="text">YOMIMASU</div>
          </div>
        </div>
        <div className="card-item MAC">
          <img src={citiMac} />
          <div className="overlay">
            <div className="text">CitiBike 2.0</div>
          </div>
        </div>
      </div>
      {/* here */}
      <PortCard/>
    </div>
    
  );
}

export default Port;
