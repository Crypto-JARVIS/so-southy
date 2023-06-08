import React from "react";
import cstyles from "./BestSelling.module.css";
import food1 from "../../Images/idli.jpeg";
import food2 from "../../Images/dosa.jpg";

const BestSelling = () => {
  return (
    <div className={cstyles.bs}>
      <div className={cstyles.bsText}>
        <div className={cstyles.bst1}>OUR BEST</div>
        <div className={cstyles.bst2}>SELLING</div>
      </div>
      <div className={cstyles.bsImg}>
        <div className={cstyles.bsI1}>
          <img src={food1} alt="IDLI"></img>
        </div>
        <div className={cstyles.bsI2}>
          <img src={food2} alt="DOSA"></img>
        </div>
        <div className={cstyles.bsI3}>
          <img src={food1}></img>
        </div >
      </div>
    </div>
  );
};

export default BestSelling;
