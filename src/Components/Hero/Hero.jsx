import React from 'react';
import './Hero.css';
import arrowIcon from "../Assets/arrow.png";
import handIcon from "../Assets/hand_icon.png";
import heroImg from "../Assets/hero_image.png"

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        {" "}
        <h2>New Arrivals</h2>
        <div>
          <div className="hand-hand-Icon">
            <p>New</p>
            <img src={handIcon} alt="" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="Image Not Found" />
        </div>
      </div>

      <div className="heroright">
        <img src={heroImg} alt="Image Not Found" />
        
      </div>
    </div>
  );
}
export default Hero;