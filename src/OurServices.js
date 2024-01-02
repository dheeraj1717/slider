import React from "react";
import Frame1 from "./images/Frame (1).png";

function OurServices() {
  return (
    <div className="Services">
      <div className="ServiceHeading">Our Services</div>
      <div className="grid">
        <div className="ServiceCard">
          <div className="ServiceHead">
            <div className="ServiceLogo">
              <img src={Frame1} alt="" />
            </div>
            <div className="ServiceName">Private Limited Company</div>
          </div>
          <div className="ServiceParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            facere officia possimus quibusdam sit consequatur iure modi qui
            dolorem.
          </div>
          <div className="ReadMore">Read More</div>
        </div>
     
      </div>
    </div>
  );
}

export default OurServices;
