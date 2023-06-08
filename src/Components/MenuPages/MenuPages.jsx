import React from "react";
import cstyles from "./MenuPages.module.css";
import Idli from "./Idli";
import Vada from "./Vada";
import FusionDosa from "./FusionDosa";
import QuickBite from "./QuickBite";
import Rice from "./Rice";
import Uttapam from "./Uttapam";
import Desserts from "./Desserts";

const MenuPages = (props) => {
  let key = props.render;
  console.log(key);
  return (
    <div className={cstyles.menuContent}>
      {key === 0 && (
        <div className={cstyles.pgOne}>
          <div className={cstyles.left}>
            <Idli />
            <Vada />
            <FusionDosa />
            <QuickBite />
          </div>
          <div className={cstyles.center}>
            <Rice />
            <Uttapam />
            <Desserts />
          </div>
        </div>
      )}
      {key === 1 && (
        <div className={cstyles.pgTwo}>
          <div className={cstyles.left}>
            <Idli />
            <Vada />
            <FusionDosa />
            <QuickBite />
          </div>
          <div className={cstyles.center}>
            <Rice />
            <Uttapam />
          </div>
        </div>
      )}
      {key === 2 && (
        <div className={cstyles.offers}>
          <div className={cstyles.offerCenter}>
            <Idli />
            <Vada />
            <FusionDosa />
            <QuickBite />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPages;
