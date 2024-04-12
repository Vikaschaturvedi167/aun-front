import React from "react";
import five from "../../src/Pages/images/005mn.jpg";
import logo from "../Pages/images/aun_logo.png";

import "../Pages/Styling/Footer.css";

const FooterPage = () => {
  return (
    <div
      className="footer-container"
      style={{ backgroundImage: `url(${five})` }}
    >
      <div className="overlay-text">
        <div id="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", marginBottom: "-20px" }}
          />
          <h1 className="title"> Aun Herbal</h1>
        </div>
        <div className="contact">
        <h2>KEEP IN TOUCH</h2>
        <ul>
          <li>Website: www.Aunherbals.com</li>
          <li>E-Mail: aunherbals@gmail.com</li>
          <li>Contact No: 9355818985</li>
          <li>Address: HinduPura kheda, Deepa Sarai, Sambhal, 244303, Uttar Pradesh, India</li>
          <li>Office : A142, Sector 63, Noida, 201301</li>
        </ul>
        </div>
        

        
      </div>
    </div>
  );
};

export default FooterPage;
