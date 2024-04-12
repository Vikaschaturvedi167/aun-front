import React from "react";
import homeimage from "./images/homeimage.png";
import two from "./images/02.jpg";
import three from "./images/03.jpg";
import four from "./images/04.png";
import "./Styling/Home.css";
import { Link } from 'react-router-dom';
export const Homepage = () => {
  return (
    <div className="main-home">
      <div>
        <div className="main-img">
          <img
            src={homeimage}
            alt="home"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="knowmore">

          <img src={two} alt="home" className="know1" style={{width : "25%", height:"auto"}}
/>
          <img
            src={three}
            alt="home"
            style={{width : "25%", height:"auto"}}
          className="know1"
          />
          <div>
            <h1 className="who">Who we are?</h1>
            <h1 className="we">The natural way to achieving balance and optimal health</h1>
            <p className="us"> 
              Aun Herbal Remedies is a reputated Unani and Ayurvedic
              manufacturing & Herbal products that is committed to providing
              100% natural and authentic herbal products to promote healthy
              living since 2009. With Aun herbal remedies, you can trust that
              you're getting reliable and effective remedies, straight from
              nature
            </p>
            <Link to="/about">
            <button className="knowbtn">Want to Know more about us? </button>
      </Link>
            
          </div>

        </div>
        <div>
        <img src={four} alt="home" style={{ width: "100%", height: "auto",}} />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};
