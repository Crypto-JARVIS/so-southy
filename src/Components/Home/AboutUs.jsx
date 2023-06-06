import React from "react";
import cstyles from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div className={cstyles.aboutUs}>
      <div>
        SO SOUTHY, founded in 2018, is dedicated to all those who <br />
        love to eat South Indian food. We invite you on a wholesome <br />
        culinary adventure, where you’ll explore undiscovered <br />
        gourmet experiences.
      </div>
      <div className={cstyles.thanks}>Thank you for creating lasting memories with us.</div>
    </div>
  );
};

export default AboutUs;
