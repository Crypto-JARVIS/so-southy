import React from "react";
import VadaMenu from "../../MenuJson/Vada.json";
import cstyles from "./Vada.module.css";

const Vada = () => {
  return (
    <div className={cstyles.vada}>
      <h5>VADA</h5>
      {VadaMenu.VADA.map((vada) => {
        return (
          <div key={vada.id} className={cstyles.vadaMenu}>
            <div>
              {vada.Name}
              <div className={cstyles.vadaPrice}>{vada.Price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Vada;
