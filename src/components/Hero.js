import React from "react";
import "./Hero.css";
import TableImg from "../Images/TABLE.png";
import HtmlImg from "../Images/HTMLL.png";
import CssImg from "../Images/CSSL.png";
import CsharpImg from "../Images/CL.png";
import CplusImg from "../Images/C++L.png";
import JSImg from "../Images/JSL.png";
import RUBYImg from "../Images/RUBYL.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import TypeWriterEffect from 'react-typewriter-effect';
function Hero() {
  const { height, width } = useWindowDimensions();
  let arr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  ];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div className="hero-div">
    <div>
    <div className="bubble-container bubbles-1">
        {arr.map(() => {
          let xpos = getRandomInt(width);
          let ypos = getRandomInt(height);
          let size = getRandomInt(40);
          let r = getRandomInt(255);
          let g = getRandomInt(255);
          let b = getRandomInt(255);
          let num = getRandomInt(5);
          let a = 1;
          return (
            <div
              className="circle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `rgb(${r},${g},${b})`,
                 position: 'absolute',
                transform: `translateY(${ypos}px) translateX(${xpos}px)`,
              }}
            ></div>
          );
        })}
      </div>
      <div className="bubble-container bubbles-2" style={{zIndex: -3}}>
        {arr.map(() => {
          let xpos = getRandomInt(width);
          let ypos = getRandomInt(height);
          let size = getRandomInt(40);
          let r = getRandomInt(255);
          let g = getRandomInt(255);
          let b = getRandomInt(255);
          let num = getRandomInt(5);
          let a = 1;
          return (
            <div
              className="circle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `rgb(${r},${g},${b})`,
                 position: 'absolute',
                transform: `translateY(${ypos}px) translateX(${xpos}px)`,
              }}
            ></div>
          );
        })}
      </div>
      <div className="bubble-container bubbles-3" style={{zIndex: -2}}>
        {arr.map(() => {
          let xpos = getRandomInt(width);
          let ypos = getRandomInt(height);
          let size = getRandomInt(40);
          let r = getRandomInt(255);
          let g = getRandomInt(255);
          let b = getRandomInt(255);
          let num = getRandomInt(5);
          let a = 1;
          return (
            <div
              className="circle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `rgb(${r},${g},${b})`,
                // left: `xpos`,
                // top: `ypos`,
                position: 'absolute',
                transform: `translateY(${ypos}px) translateX(${xpos}px)`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
      <div className='hi-text'>
      <h1>Mohamed Muflahi</h1>
        <TypeWriterEffect
        textStyle={{
          color: 'red',
          fontWeight: 'bold',
          fontSize: '2.5rem',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Game Developer',
          'Full Stack Developer',
          'Software Engineer',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
      </div>
      <div className="image-container">
        <div className="image-div">
          <img className="html-img" src={HtmlImg} />
          <img className="css-img" src={CssImg} />
          <img className="c-img" src={CsharpImg} />
          <img className="cplus-img" src={CplusImg} />
          <img className="js-img" src={JSImg} />
          <img className="ruby-img" src={RUBYImg} />
        </div>
        <img className="table-img" src={TableImg} />
      </div>
    </div>
  );
}

export default Hero;
