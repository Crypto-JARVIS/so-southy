import React from "react";
import IdliMenu from "../../MenuJson/Idli.json";
import cstyles from "./Idli.module.css"

const Idli = () => {
  return (
    <div className={cstyles.idli}>
      <h5>IDLI</h5>
      {IdliMenu.IDLI.map((idli) => {
        return (
          <div key={idli.id} className={cstyles.idliMenu}>
            <div>
              {idli.Name}
              <div className={cstyles.idliPrice}>{idli.Price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Idli;
