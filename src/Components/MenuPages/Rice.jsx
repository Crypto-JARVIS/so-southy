import React from "react";
import cstyles from "./Rice.module.css";
import RiceMenu from "../../MenuJson/Rice.json";

const Rice = () => {
  return (
    <div className={cstyles.rice}>
      <h5>SO SOUTHY RICE</h5>
      {RiceMenu.RICE.map((ssrice) => {
        return (
          <div key={ssrice.id} className={cstyles.riceMenu}>
            <div>
              {ssrice.Name}
              <div className={cstyles.ricePrice}>{ssrice.Price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rice;
