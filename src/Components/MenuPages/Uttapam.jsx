import React from "react";
import cstyles from "./Uttapam.module.css";
import UttapamMenu from "../../MenuJson/Uttapam.json";

const Uttapam = () => {
  return (
    <div className={cstyles.uttapam}>
      <h5>UTTAPAM</h5>
      {UttapamMenu.UTTAPAM.map((uttapam) => {
        return (
          <div key={uttapam.id} className={cstyles.uttapamMenu}>
            <div>
              {uttapam.Name}
              <div className={cstyles.uttapamPrice}>{uttapam.Price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Uttapam;
