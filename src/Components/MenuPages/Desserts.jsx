import React from "react";
import cstyles from "./Desserts.module.css";
import DessertsMenu from "../../MenuJson/Desserts.json";

const Desserts = () => {
  return (
    <div className={cstyles.desserts}>
      <h5>DESSERTS</h5>
      {DessertsMenu.DESSERTS.map((desserts) => {
        return (
          <div key={desserts.id} className={cstyles.dessertsMenu}>
            <div>
              {desserts.Name}
              <div className={cstyles.dessertsPrice}>{desserts.Price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Desserts;
