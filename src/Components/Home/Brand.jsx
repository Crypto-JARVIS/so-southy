import React from "react";
import cstyles from "./Brand.module.css";
import bgimg from "../../Images/SOSOUTHY.jpg";

const AboutUs = () => {
  return (
    <div className={cstyles.brand}>
        <div className={cstyles.brandDesc}>
            <div>
                <h2>FROM SOUTH <br/>TO MOUTH</h2>
            </div>
            <div className={cstyles.brandOC}>
                MONDAY thru FRIDAY 5pm – 11pm
                <br/>
                SATURDAY and SUNDAY 10am – 11pm 
            </div>
        </div>
        <div className={cstyles.brandName}>
            <img src={bgimg} />
        </div>
    </div>
  );
};

export default AboutUs;
