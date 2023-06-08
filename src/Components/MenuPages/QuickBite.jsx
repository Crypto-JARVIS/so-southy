import React from "react";
import cstyles from "./QuickBite.module.css";
import QuickBiteMenu from "../../MenuJson/QuickBite.json";

const QuickBite = () => {
  return (
    <div className={cstyles.quickBite}>
      <h5>QUICK BITE</h5>
      {QuickBiteMenu.QUICKBITE.map((quickbite) => {
        return (
          <div key={quickbite.id} className={cstyles.quickBiteMenu}>
            <div>
              {quickbite.Name}
              <div className={cstyles.quickBitePrice}>{quickbite.Price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickBite;
