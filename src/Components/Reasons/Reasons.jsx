import React from "react";
import image01 from "../../assets/Images/Image01.jpg";

import image02 from "../../assets/Images/image02.jpg";
import image3 from "../../assets/image3.png";

// import image4 from "../../assets/image4.png";

// import nb from "../../assets/nb.png";
// import adidas from "../../assets/adidas.png";
// import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import "./Reasons.css";
const Reasons = () => {
  const whyChoeseUsData = [
    { id: 1, title: "Professional trainers" },
    { id: 2, title: "Expert Guidance" },
    { id: 3, title: "Tailored Programs" },
    { id: 4, title: "Motivational Support" },
    { id: 5, title: "Proven Results" },
    { id: 6, title: "Flexible locations available" },
  ];
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image01} alt="" />
        <img src={image02} alt="" />
        <img src={image3} alt="" />
        {/* <img src={image4} alt="" /> */}
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          {whyChoeseUsData.map((item) => {
            return (
              <div key={item.id}>
                <img src={tick} alt="" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        {/* <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>
        <div className="partners">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
